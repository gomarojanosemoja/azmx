<template>
  <div class="pt-5 margin-botton-bar">
    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div class="section-title p-0 card">
          <h2>Realiza una búsqueda de clientes</h2>
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              <div class="form-row row loan-form" style="margin-bottom: 20px">

                <!--  fullName -->
                  <div
                    class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.formSearch.fullName.$errors.length }"
                  >
                    <label for="fullName"
                      >Nombre(s) ó Apellidos </label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Nombre(s) / Apellidos"
                      type="text"
                      v-model="v$.formSearch.fullName.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.formSearch.fullName.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>
                 <!--  statusList -->
                <div
                  class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.formSearch.typesList.$errors.length }"
                >
                  <label for="rangeHourContact"
                    >Tipo de cliente </label
                  >

                  <Multiselect
                    v-model="v$.formSearch.typesList.$model"
                    class="multiselect-green"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="description"
                    :options="optionsTypes"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.formSearch.typesList.$errors"
                    :key="index"
                  >
                    <div class="error-msg error-required">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>

                

                <div class="col-md-4 col-lg-2 mb-4 pl-lg-4 pr-lg-4 pt-3">
                  <!-- aqui va el boton -->

                  <button
                    id="search-customers"
                    name="search-customers"
                    class="col-lg-12 col-md-12"
                    type="submit"
                    @click="searchCustomers()"
                  >
                  <i
                    class="fa fa-search"
                    style="margin-right: 5px"
                    aria-hidden="true"
                  ></i>
                    Buscar
                  </button>
                  
                </div>
                <div class="col-md-4 col-lg-2 mb-4 pl-lg-4 pr-lg-4 pt-3">
                    <button
                    id="add-customer"
                    name="add-customer"
                    class="col-lg-12 col-md-12"
                    type="submit"
                    @click="openModalAdd()"
                  >
                  <i
                    class="fa fa-plus"
                    style="margin-right: 5px"
                    aria-hidden="true"
                  ></i>
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div
          class="section-title p-0 card"
        >
        
          <div v-for="(item, index) in customersList"
          :key="index"
            class="card-body card-back"
          >
            <div class="form-row loan-form row" style="margin-bottom: 0px">
              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Datos del cliente</h5>
                <label class=" pt-2 lbl-details">
                  <strong> No: </strong>{{item.id}}</label
                >
                <label style="display: block" class=" pt-2 lbl-details">
                  <strong> Nombre: </strong
                  >{{capitalize( item.names)}} {{capitalize(item.secondName)}} {{capitalize(item.secondLastName)}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Teléfono: </strong>
                  {{item.phoneNumber}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Fecha de nacimiento: </strong>
                  {{item.birthDate}}</label
                >
              </div>
               <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Domicilio</h5>
                <label class=" pt-2 lbl-details">
                  <strong> C.P. </strong>{{item.postalCode}}</label
                >
                <label style="display: block" class=" pt-2 lbl-details">
                  <strong> Calle: </strong
                  >{{item.street}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Maps de dirección: </strong>
                  <a :href="item.googleAddress" target="_blank">{{item.googleAddress}}</a></label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Tipo de domicilio: </strong>
                  {{capitalize(item.descriptionAddress)}}</label
                >
                
              </div>

              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Detalles</h5>
                
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Fecha de registro: </strong>
                  {{item.dateAdmission}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Tipo de cliente: </strong>{{capitalize(item.descriptionType)}}</label
                >
                <label style="display: block" class="pt-2 pb-4 lbl-details" for=""
                  ><strong> Estado: </strong>Activo</label
                >

                <button
                  id="registrarme"
                  name="registrarme"
                  class="col-lg-4 col-md-6 btn-custom"
                  type="submit"
                  @click="openModalEdit()"
                >
                  <i
                    class="fa fa-pencil"
                    style="margin-right: 5px"
                    aria-hidden="true"
                  ></i>
                  Editar
                </button>
              </div>
              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                
                

                
              </div>
            </div>
            <hr class="solid" style="color: #01717f; border-top: 2px solid" />
          </div>
        </div>
      </div>
    </div>

     <!-- MODALS-->
    <GDialog v-model="dialogState" max-width="900" :close-on-back="true">
       <div class="wrapper">
        <div class="content">
          <div class="title">Registro de cliente</div>
          <RegisterCustomer></RegisterCustomer> 
        </div>
       </div>
      
    </GDialog>

  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from "vue";
import Notifications from "../../core/util/notifications";
import FilterText from "../../core/filters/filters-text";
import Multiselect from "@vueform/multiselect";
import MultiselectData from "../../core/commons/multiselect-data";
import RegisterCustomer from "./register/RegisterCustomer.vue";
import CustomerService from "../../core/services/customer-service";

export default {
  name: "CustomersManage",
  components: {
    RegisterCustomer,
    Multiselect
  },
  setup() {
    const dialogState = ref(false);

    return { v$: useVuelidate() , dialogState};
  },
  data() {
      return {
          form:{
              names: ''
          },
          formSearch:{
            typesList: [1],
            fullName: ''
          },
          optionsTypes: [],
          customersList: []
          
      }
  },
  mounted() {
    
    if(this.$store.state.catalogs.customerTypes.length > 0){
      this.optionsTypes = this.mapOptionsFromSomeCatalog(this.$store.state.catalogs.customerTypes);
    }
    this.searchCustomers();
  
  },
  computed: {
    
    showDialogNewCustomer(){
      return this.$store.state.showModalNewCustomer;
    },
    types(){
       return this.$store.state.catalogs.customerTypes;
    }
  },
  watch: {

    
    showDialogNewCustomer(newValue){
      this.dialogState = newValue;

    },
    types(newValue){
      this.optionsTypes = this.mapOptionsFromSomeCatalog(newValue);

    },
    dialogState(newValue){
      this.$store.commit('SHOW_MODAL_NEW_CUSTOMER', newValue);
    }
  },
  
  validations() {
    return {
      form: {
        names: {
          required,
        },
      },
       formSearch:{
            typesList: {
              required:false,
            },
            fullName: {
              required: false
            }
          },
        
    };
  },
  methods: {
    ...MultiselectData.methods,
    ...Notifications.methods,
    ...FilterText.methods,
    ...CustomerService.methods,
      openModalEdit(){

      },
      searchCustomers(){


        if (this.v$.formSearch.$invalid) {
        this.showNotificationWarning(
          "Favor de seleccionar un puesto para realizar la búsqueda"
        );
        return;
      }

      this.$store.commit("CHANGE_LOADING", true);
      this.getCustomers( this.formSearch.typesList, this.formSearch.fullName)
        .then((res) => {
          console.log(res);
          this.customersList = res.data.customers;
          console.log(this.customersList);

          this.$store.commit("CHANGE_LOADING", false);
        })
        .catch((err) => {


          this.$store.commit("CHANGE_LOADING", false);

          this.notificationsErrors(err);
        });


      },
      openModalAdd(){
        this.dialogState = true;
        

      },
      mapOptionsFromRolesList(rolesList) {
      this.optionsRoles = rolesList.map((e) => {
        let element = { ...e, value: "" };

        element.value = e.id;
        element.description = this.capitalize(e.description);

        return element;
      });
      console.log("optionsRoles", this.optionsRoles);
    },
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

.error-required {
  color: #ff0000b8;
  font-size: 0.85rem;
}
.attribute-required {
  color: #ff0000b8 !important;
}
.loan-form label {
  font-size: 0.9rem !important;
}
a {
  color: var(--vc-c-green);
}
.margin-botton-bar {
  margin-bottom: 4rem;
}



select {
  background: #fff;
  border-color: #fff;
  box-shadow: none;
}
.form-custom-select {
  background: #edecf0 !important;
  border-color: #edecf0 !important;
  box-shadow: none !important;
}

.section-title h2 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 20px;
  position: relative;
  font-family: "Poppins", sans-serif;
  color: var(--vc-clr-primary);
}

/** modal styles */

.wrapper {
  color: #000;
}

.content {
  padding: 20px;
}

.title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--vc-clr-primary);
}
.center-div{
  display: inline-block;
  margin: 0 auto;
}

.actions {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.btn-custom {
  font-weight: 600;
  background: var(--vc-clr-primary);
  border: 0;
  border-radius: 14px;
  padding: 14px 20px;
  color: #fff;
  transition: 0.4s;
}
</style>