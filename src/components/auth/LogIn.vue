<template>
  <div class="pt-5">
    <div class="row m-0 pb-2 pt-3 card-loan" style="justify-content: center">
      <div class="col-lg-5 col-md-12 pb-2 pt-lg-4 pt-md-0 pl-md-0 pr-md-0">
        <div class="section-title p-0 card">
          <h5 class="pb-2 pt-4">Bienvenido</h5>
          <p class="pb-2">Inicia sesión</p>
          
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              <div class="form-row loan-form" style="margin-bottom: 20px">
                <!--  email -->
                <div
                  class="col-md-12 col-lg-12 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.form.email.$errors.length }"
                >
                  <label for="email"
                    >Correo electrónico
                    <i class="attribute-required">*</i></label
                  >
                  <input
                    class="form-control input-form"
                    placeholder="Correo electrónico"
                    type="text"
                    v-model="v$.form.email.$model"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.email.$errors"
                    :key="index"
                  >
                    <div class="error-msg error-required">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>

                <!--  password -->
                <div
                  class="col-md-12 col-lg-12 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.form.password.$errors.length }"
                >
                  <label for="password"
                    >Contraseña <i class="attribute-required">*</i></label
                  >
                  <input
                    class="form-control input-form"
                    placeholder="Contraseña"
                    type="password"
                    v-model="v$.form.password.$model"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.password.$errors"
                    :key="index"
                  >
                    <div class="error-msg error-required">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center col-md-12 col-lg-12">
                <!-- aqui va el boton -->

                <button
                  id="registrarme"
                  name="registrarme"
                  class="col-lg-6 col-md-6"
                  type="submit"
                  @click="login()"
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { mapMutations } from 'vuex'
import Notifications from '../../core/util/notifications';
import Users from '../../core/services/users';

export default {
  name: "LogIn",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  validations() {
    return {
      form: {
        email: {
          email: helpers.withMessage("Ingrese un correo valido", email),
        },
        password: {
          required: helpers.withMessage(
            "La contraseña debe contener una Mayuscula, una minuscula, un digito y un caracter",
            required
          ),
          min: helpers.withMessage(
            "La contraseña debe tener una longitud minima de 6 caracteres",
            minLength(6)
          ),
        },
      },
    };
  },
  mounted() {
 
  },
  methods: {
    ...Users.methods,
    ...Notifications.methods,
    ...mapMutations(['NEW_TOKEN']),
    loadProfile(){


      this.getUserFromToken()
        .then((res)=>{
                console.log(res.data);
                if(res.data.client){
                    localStorage.setItem('username', 
                    res.data.client.name + ' ' + res.data.client.secondName);

                    this.$store.commit('CHANGE_USERNAME', res.data.client.name + ' ' + res.data.client.secondName);
                }
            });

    },
    login(){
      if(this.v$.form.$invalid){
        this.showNotificationWarning('Por favor ingrese su usuario y contraseña');
        return;
      }

      console.log('email', this.form.email);
      this.$store.commit('CHANGE_LOADING', true);
      this.axios.post(`${process.env.VUE_APP_API}auth/login`,{
      email: this.form.email,
      password: this.form.password
      }).then((res)=>{
        console.log(res.data.token);
        
       //this.NEW_TOKEN(res.data.token);
       this.$store.commit('NEW_TOKEN', res.data.token);
       localStorage.setItem('token', res.data.token);
       this.$store.commit('CHANGE_LOGIN', true);
       this.$store.commit('CHANGE_LOADING', false);
       this.$store.commit('CHANGE_BOTTOM_BAR', true);
       this.loadProfile();
       this.$router.push({name: 'credits-pays'});
       

      }).catch( (err) =>{
        console.log('err',err);
        console.log(err.code);
        if(err.response.data){
          
          this.showNotificationError(err.response.data.msj);
        }else{
          this.showNotificationError('¡Lo sentimos! Ocurrio un Error interno, contacte a soporte');
        }
        this.$store.commit('CHANGE_LOGIN', false);
        this.$store.commit('CHANGE_LOADING', false);
      })
    }
  },
};
</script>

<style scoped>
@import "@/assets/inputs.css";

.section-title {
  padding-bottom: 30px;
  border: 0;
}

.section-title h5 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  color: var(--vc-clr-primary);
}
.section-title p {
  font-size: 0.8rem;
  text-align: center;
  position: relative;
  color: #aaaaaa;
}
.card-loan {
  background: var(--mdb-body-bg);
}

select:focus {
  border-color: var(--vc-c-yellow) !important;
  box-shadow: 0 0 0 0.1rem var(--vc-c-yellow);
  background: #edecf0;
  border: 1px;
}
input:focus {
  border-color: var(--vc-c-yellow) !important;
  box-shadow: 0 0 0 0.1rem var(--vc-c-yellow);
  background: #edecf0;
  border: 1px;
}
input,
select {
  background: #edecf0;
  border-color: #edecf0;
  box-shadow: none;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.disabled-button {
  background: var(--color-background-gray);
}

.error-required {
  color: #ff0000b8;
  font-size: 0.85rem;
}
.attribute-required {
  color: #ff0000b8;
}
.loan-form label {
  font-size: 0.9rem !important;
}
a {
  color: var(--vc-c-yellow);
}
</style>