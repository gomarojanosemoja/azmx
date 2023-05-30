<template>
  <div class="pt-5 margin-botton-bar">
    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div class="section-title  card" style="padding-left: 1.5rem;">
          <div class="card-body card-back">
            <div class="form-row loan-form row" style="margin-bottom: 0px">
              <div
                class="col-md-2 col-lg-1 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: center; display:flex; align-items: center;"
              >
                <ProfileAvatar
                  bgColor="#01717f"
                  :username="userName"
                  textColor="white"
                  size="l"
                ></ProfileAvatar>
              </div>
              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Mis datos</h5>
                <label class="pb-2 pt-2 lbl-details">
                  <strong> Nombre: </strong>{{ profile.client.name + ' ' + profile.client.secondName + ' ' + profile.client.secondLastName}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Fecha de Nacimiento: </strong>
                  {{ profile.client.birthDate }}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Teléfono: </strong
                  >{{ profile.client.phoneNumber }}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Correo: </strong
                  >{{ profile.usuario.email }}</label
                >
              </div>

              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Mi cuenta</h5>
                <label class="pb-2 pt-2 lbl-details">
                  <strong> Eres </strong>Administrador</label
                >
                
                
              </div>

               
            </div>
          </div>
        </div>
      </div>

      <div class="text-center col-md-12 col-lg-12">
                <!-- aqui va el boton-->

                <div class="text-center">
                  <button
                    id="agendar"
                    name="agendar"
                    class="col-lg-2 col-md-6"
                    type="submit"
                    @click="logOut()"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
    </div>
  </div>
</template>
<script>
import Users from "../../core/services/users";
import Auth from "../../core/util/auth";
import ProfileAvatar from "vue-profile-avatar";

const mapProfile = () => ({
  usuario: {
    id: 0,
    email: "",
    roleId: 0,
  },
  client: {
    name: "Arturo",
    secondName: "Lopez",
    secondLastName: "Patricio",
    birthDate: "15/03/1990",
    genderId: 0,
    phoneNumber: "5591997971",
  },
});

export default {
  name: "MyProfile",
  components: {
    ProfileAvatar,
  },
  data() {
    return {
      profile: mapProfile(),
    };
  },
  methods: {
    ...Auth.methods,
    ...Users.methods,
    logOut(){

    },
    loadingProfile() {
      this.$store.commit("CHANGE_LOADING", true);
      this.getUserFromToken()
        .then((res) => {
          console.log(res.data);
          this.profile = res.data;

          this.$store.commit("CHANGE_LOADING", false);
        })
        .catch((err) => {
          console.log("error", err);
          this.isExpiredToken(err);

          this.$store.commit("CHANGE_LOADING", true);
        });
    },
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
  mounted() {},
  created() {
    //this.loadingProfile();
  },
};
</script>
<style scoped>
@import "@/assets/inputs.css";

.title-appointment {
  font-weight: 600;
  color: var(--vc-clr-primary);
  font-size: 1rem;
}
.lbl-details {
  font-size: 0.9rem;
}
</style>