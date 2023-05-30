<template>
  <div class="order pt-3">
    <div class="row m-0 service-section pb-2 service-slice">
      <div class="col-lg-12 service-slice">
        <div class="section-title p-0 service-slice">
          <div class="card-body">
            <div class="row p-0 row-info-box" style="justify-content: center">
              <div class="col-lg-6 col-md-12 p-0">
                <div
                  class="info-box icon-box mb-4 mt-4 item-slice services"
                  style=""
                >
                  <!-- <i class="bx" :class="slide.iconBox"></i> -->
                  <img
                    class="bx bxs-credit-card"
                    :src="urlImage + service.image"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 p-0">
                <div
                  class="info-box icon-box mb-4 mt-4 item-slice services"
                  style=""
                >
                  <!-- <i class="bx" :class="slide.iconBox"></i> -->
                  <div class="section-title" data-aos="fade-up">
                    <h2 style="color: #f6c46c">{{ service.name }}</h2>
                  </div>
                  <p
                    style="
                      color: #eaeaea;
                      text-align: justify;
                      padding-right: 15px;
                    "
                  >
                    {{ service.details }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div class="section-title p-0 card">
          <!--<h5 class="pb-2 pt-4">Comencemos</h5>
          <p class="pb-2">
            Déjanos tus datos y un asesor se pondrá en contacto contigo.
          </p>-->
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              <div class="form-row loan-form row" style="margin-bottom: 0px">
                <div
                  class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                  style="text-align: justify"
                >
                  <h5 class="pb-2 pt-4">¿Qué incluye?</h5>

                  <div class="form-row row">
                    <div
                      class="col-6 card card-body package-order"
                      v-for="item in items"
                      :key="item.id"
                    >
                      <h6>
                        <i style="color: #e96b56" class="bx bxs-cog"></i>
                        {{ capitalize(item.itemDescription) }}
                      </h6>
                    </div>

                    
                  </div>
                </div>
                <!--  tipo de auto -->
                <div
                  class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                  style="text-align: justify"
                >
                  <h5 class="pb-2 pt-4">¿Qué tipo de auto tienes?</h5>

                  <div v-for="(item, index) in categorys"
                    :key="index" class="form-check form-switch">
                    <input
                      v-model="item.isEnabled"
                      class="form-check-input"
                      v-on:change="changeCategoryCar(item)"
                      type="checkbox"
                      role="switch"
                      :id="item.id"
                    />
                    <label class="form-check-label" :for="item.id"
                      >{{capitalize(item.categoryCarDescription)}}</label
                    >
                  </div>

                  
                </div>

                <!-- elegir dia-->
                <div
                  class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                  style="text-align: justify"
                >
                  <h5 class="pb-2 pt-4">¿Cuando nos visitas?</h5>

                  <!--  date -->
                  <div
                    class="col-11 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.date.$errors.length }"
                  >
                    <input
                      class="form-control input-form"
                      placeholder="dd/mm/aaaa"
                      type="date"
                      v-model="v$.form.date.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.date.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <!--  hour -->
                    <div
                      class="col-5 mb-4 pl-lg-4 pr-lg-4"
                      :class="{ error: v$.form.hour.$errors.length }"
                    >
                      <select
                        v-model="v$.form.hour.$model"
                        class="form-control"
                      >
                        <option
                          class="option-disabled"
                          value=""
                          selected
                          disabled
                        >
                          HORA
                        </option>
                        <option v-for="(item, index) in hoursSquedule" :key="index" :value="item">{{item}}</option>
                     
                      </select>

                      <!-- error message -->
                      <div
                        class="input-errors"
                        v-for="(error, index) of v$.form.hour.$errors"
                        :key="index"
                      >
                        <div class="error-msg error-required">
                          {{ error.$message }}
                        </div>
                      </div>
                    </div>

                    <div class="col-1 mb-4 pl-lg-4 pr-lg-4">
                      <h3>:</h3>
                    </div>

                    <!--  minutes -->
                    <div
                      class="col-5 mb-4 pl-lg-4 pr-lg-4"
                      :class="{ error: v$.form.minutes.$errors.length }"
                    >
                      <select
                        v-model="v$.form.minutes.$model"
                        class="form-control"
                      >
                        <option
                          class="option-disabled"
                          value=""
                          selected
                          disabled
                        >
                          MINUTOS
                        </option>
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                      </select>

                      <!-- error message -->
                      <div
                        class="input-errors"
                        v-for="(error, index) of v$.form.minutes.$errors"
                        :key="index"
                      >
                        <div class="error-msg error-required">
                          {{ error.$message }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h5 class="pb-0 pt-4" style="margin-top: 90px">
                    <strong style=""> TOTAL: </strong> $ {{ total }}
                  </h5>
                </div>
              </div>
              <div class="text-center col-md-12 col-lg-12">
                <!-- aqui va el boton-->

                <div class="text-center">
                  <button
                    id="agendar"
                    name="agendar"
                    class="col-lg-3 col-md-6"
                    type="submit"
                    @click="registerAppointment()"
                  >
                    Agendar Cita
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Utils from "../../core/filters/filters-text";

import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Notifications from '../../core/util/notifications';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { socket } from "@/socket";

export default {
  name: "PackageOrder",
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    
  },
  data() {
    return {
      service: {},
      urlImage: process.env.VUE_APP_IMG,
      items: [],
      categorys: [],
      test: false,
      total: 0.0,
      form: {
        hour: "",
        date: "",
        minutes: "",
      },
      categoryService: null,
      hoursSquedule: [
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19'
      ]
    };
  },
  validations() {
    return {
      form: {
        date: {
          required,
        },
        hour: {
          required,
        },
        minutes: {
          required,
        },
      },
    };
  },
  created() {
    this.$store.commit("CHANGE_BOTTOM_BAR", false);
  },
  mounted() {
    this.loadServiceChild();
  },
  beforeUnmount() {
    this.$store.commit("CHANGE_BOTTOM_BAR", true);
    console.log("DESTROY");
  },
  methods: {
    ...Notifications.methods,
    ...Utils.methods,
    toggle() {
      console.log("toggle");
    },
    changeTest(){
      console.log('test', this.test);
    },
    changeCategoryCar(item) {
      console.log("toggle", item);
      this.categorys = this.categorys.map((e) => {
        if(e.id!=item.id){
          e.isEnabled = false;
        }
        return e;
      });
      

      if (item.isEnabled) {
        this.total = item.price;
        this.categoryService = item;
      } else {
        this.total = 0.0;
        this.categoryService = null;
      }
    },
    loadServiceChild() {
      if (this.$route.query.data) {
        console.log("ITEM ORDER", this.$route.query.data);
        let decodeService = this.b64DecodeUnicode(this.$route.query.data);

        this.service = JSON.parse(decodeService);
        console.log("SERVICE", this.service);
        this.loadItemsService(this.service.id);
        this.loadCategorysService(this.service.id);
      } else {
        this.$router.push({ name: "home-page" });
      }
    },
    loadItemsService(serviceId) {
      


      this.axios
        .get(`${process.env.VUE_APP_API}items/service/${serviceId}`)
        .then((res) => {
          this.items = res.data.itemsService;
          console.log(this.items);

          //this.$store.commit("CHANGE_LOADING", false);
        })
        .catch((err) => {
          console.log("err", err);

          // this.$store.commit("CHANGE_LOADING", false);
        });
    },
    loadCategorysService(serviceId) {
      //this.$store.commit("CHANGE_LOADING", true);

      this.axios
        .get(`${process.env.VUE_APP_API}categorys/service/${serviceId}`)
        .then((res) => {
          this.categorys = res.data.categorysService;
          console.log(this.categorys);

          //this.$store.commit("CHANGE_LOADING", false);
        })
        .catch((err) => {
          console.log("err", err);

          //this.$store.commit("CHANGE_LOADING", false);
        });
    },
    registerAppointment(){
      console.log('categoryService', this.categoryService);
      console.log('form', this.form);

      if(this.v$.form.$invalid || this.categoryService == null){
        this.showNotificationInfo('Por favor seleccione los datos antes de agendar');
        return;
      }
      
      this.$store.commit('CHANGE_LOADING', true);
      this.axios.post(`${process.env.VUE_APP_API}appoitment/`,{
        statusSaleId: 2,
        categoryCarservicesId: this.categoryService.id,
        price: this.categoryService.price,
        amount: 1,
        dateSchedule: this.form.date,
        hour: this.form.hour+ ':'+this.form.minutes+':00',
        statusAppointmentId: 1
      },{
        headers:{
          'x-token': this.$store.state.token

        }
        
      }).then((res)=>{
        console.log(res.data);
        this.showNotificationSuccess('Se agendo tu cita con éxito')
        this.$store.commit('COUNT_APPOINTMENT', 1);

       this.$store.commit('CHANGE_LOADING', false);

       socket.emit('new-appointment', res.data);

       this.$router.push({name: 'home-page'});

      }).catch( (err) =>{
        console.log('err',err);
        console.log(err.code);
        if(err.response.data){
          toast.error(err.response.data.msj);
        }else{
          toast.error('¡Lo sentimos! Ocurrio un Error interno, contacte a soporte');
        }

        this.$store.commit('CHANGE_LOADING', false);
      })
    }
  },
};
</script>
<style scoped>
@import "@/assets/inputs.css";

.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.form-check-input:checked {
  background-color: #e96b56 !important;
  border-color: #e96b56 !important;
}

.form-check-input[type="checkbox"]:checked {
  background-image: none;
  background-color: #d7360e !important;
}

.switch label input[type="checkbox"]:checked + .lever:after {
  background-color: #e96b56 !important;
}

.switch label input[type="checkbox"]:checked + .lever {
  background-color: #1ffd01;
}
.package-order:hover {
  background: #e96b56;
}

.package-order:hover i,
.package-order:hover h6 h3 a,
.package-order:hover p {
  color: #fff;
}
.section-title h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  font-family: "Poppins", sans-serif;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #e96b56;
  bottom: 0;
  left: calc(50% - 25px);
}

.section-title p {
  margin-bottom: 0;
}

.info-box {
  color: var(--vt-c-gray-light);
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  background: #0c0301;
  padding: 20px 0 30px 0;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  /*border-radius: 10px;*/
  transition: all ease-in-out 0.3s;
}
.loan-form label {
  font-size: 0.9rem !important;
}
.row-info-box {
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  background: #0c0301;

  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  /*border-radius: 10px;*/
  transition: all ease-in-out 0.3s;
}

.info-box i {
  font-size: 32px;
  color: var(--vc-clr-primary);
  border-radius: 50%;
  padding: 8px;
  /*border: 2px dotted #fef5f4;*/
}
.info-box img {
  font-size: 32px;
  color: #93c01f;
  /* border-radius: 50%; */
  /*padding: 8px;*/
  border: 0 dotted #fef5f4;
  width: 40%;
}

.info-box h3 {
  font-size: 20px;
  color: #777777;
  font-weight: 700;
  margin: 10px 0;
}

.info-box p {
  padding: 5px;
  line-height: 24px;
  font-size: 0.9rem;
  margin-bottom: 0;
}
</style>