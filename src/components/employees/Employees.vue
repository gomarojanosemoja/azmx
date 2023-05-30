<template>
  <div class="pt-5 margin-botton-bar">
    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div class="section-title p-0 card">
          <h2>Realiza una búsqueda de empleados</h2>
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              <div class="form-row row loan-form" style="margin-bottom: 20px">
                 <!--  statusList -->
                <div
                  class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.formSearch.rolesList.$errors.length }"
                >
                  <label for="rangeHourContact"
                    >Puesto <i class="attribute-required">*</i></label
                  >

                  <Multiselect
                    v-model="v$.formSearch.rolesList.$model"
                    class="multiselect-green"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="description"
                    :options="optionsRoles"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.formSearch.rolesList.$errors"
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
                    id="search-employees"
                    name="search-employees"
                    class="col-lg-12 col-md-12"
                    type="submit"
                    @click="searchEmployees()"
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
                    id="add-employee"
                    name="add-employee"
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
        
          <div v-for="(item, index) in employeesList"
          :key="index"
            class="card-body card-back"
          >
            <div class="form-row loan-form row" style="margin-bottom: 0px">
              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Datos del empleado</h5>
                <label class=" pt-2 lbl-details">
                  <strong> No. de Empleado: </strong>{{item.id}}</label
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
                <h5 class="pb-2 pt-4 title-appointment">Detalles</h5>
                <label class=" pt-2 lbl-details">
                  <strong> CURP: </strong>{{item.curp}}</label
                >
                <label style="display: block" class=" pt-2 lbl-details">
                  <strong> No. Licencia: </strong
                  >{{item.licenseNumber}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Domicilio: </strong>
                  </label
                >
                
              </div>

              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Datos de su cuenta</h5>
                
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Fecha de ingreso: </strong>
                  {{item.dateAdmission}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Puesto: </strong>{{capitalize( item.descriptionRol)}}</label
                >
                <label style="display: block" class="pt-2 pb-4 lbl-details" for=""
                  ><strong> Estado: </strong>{{item.status===1 ? 'Activo' : 'Inactivo'}}</label
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
          <div class="title">Registro de empleado</div>
          <RegisterEmployee></RegisterEmployee> 
        </div>
       </div>
      
    </GDialog>

  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from "vue";
import  RegisterEmployee  from "./register/RegisterEmployee.vue";
import EmployeeService from "../../core/services/employee-service";
import Notifications from "../../core/util/notifications";
import FilterText from "../../core/filters/filters-text";
import Multiselect from "@vueform/multiselect";
export default {
  name: "EmployeesManage",
  components: {
    RegisterEmployee,
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
            rolesList: [3]
          },
          optionsRoles: [],
          employeesList: []
          
      }
  },
  mounted() {
    
    if(this.$store.state.catalogs.roles.length > 0){
      this.mapOptionsFromRolesList(this.$store.state.catalogs.roles);
    }
    this.searchEmployees();
  },
  computed: {
    showDialogNewEmployee(){
      return this.$store.state.showModalNewEmployee;
    },
    roles() {
      return this.$store.state.catalogs.roles;
    },
    loadingEmployees(){
      return this.$store.state.countEmployees;
    }

  },
  watch: {

    roles(newValue){
      this.mapOptionsFromRolesList(newValue);

    },
    showDialogNewEmployee(newValue){
      this.dialogState = newValue;

    },
    dialogState(newValue){
      this.$store.commit('SHOW_MODAL_NEW_EMPLOYEE', newValue);
      console.log('dialogState watch', newValue);
    },
    loadingEmployees(newValue){
      console.log('loadingEmployees', newValue);
      this.searchEmployees();//pendiente probar
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
            rolesList: {
              required,
            }
          },
        
    };
  },
  methods: {
    ...Notifications.methods,
    ...FilterText.methods,
    ...EmployeeService.methods,
      openModalEdit(){

      },
      searchEmployees(){


        if (this.v$.formSearch.$invalid) {
        this.showNotificationWarning(
          "Favor de seleccionar un puesto para realizar la búsqueda"
        );
        return;
      }

      this.$store.commit("CHANGE_LOADING", true);
      this.getEmployees( this.formSearch.rolesList, [1,2])
        .then((res) => {
          console.log(res);
          this.employeesList = res.data.employees;
          console.log(this.employeesList);

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
  color: var(--vc-c-yellow);
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