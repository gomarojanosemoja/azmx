<template>
  
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              <!--one step -->
              <Transition name="fade">
              <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="form-row loan-form" style="margin-bottom: 20px">
                  <!--  firstName -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.firstName.$errors.length }"
                  >
                    <label for="firstName"
                      >Nombre(s) <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Nombre"
                      type="text"
                      v-model="v$.form.firstName.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.firstName.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  lastName -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.lastName.$errors.length }"
                  >
                    <label for="lastName"
                      >Apellido paterno
                      <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Apellido paterno"
                      type="text"
                      v-model="v$.form.lastName.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.lastName.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  secondLastName -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.secondLastName.$errors.length }"
                  >
                    <label for="secondLastName"
                      >Apellido materno
                      <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Apellido materno"
                      type="text"
                      v-model="v$.form.secondLastName.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.secondLastName.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  rangeHourContact -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.genderId.$errors.length }"
                  >
                    <label for="rangeHourContact"
                      >Genero <i class="attribute-required">*</i></label
                    >

                    <select
                      v-model="v$.form.genderId.$model"
                      class="form-control"
                    >
                      <option
                        class="option-disabled"
                        value=""
                        selected
                        disabled
                      >
                        Seleccionar
                      </option>
                      <option value="1">Masculino</option>
                      <option value="2">Femenino</option>
                    </select>

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.genderId.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>


                  

                  <!--  birthday -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.birthday.$errors.length }"
                  >
                    <label for="birthday"
                      >Fecha de nacimiento
                      <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="dd/mm/aaaa"
                      type="date"
                      v-model="v$.form.birthday.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.birthday.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  contactPhone -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.phoneNumber.$errors.length }"
                  >
                    <label for="contactPhone"
                      >Teléfono <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Teléfono"
                      type="text"
                      v-model="v$.form.phoneNumber.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.phoneNumber.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                   





                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                 <div class="form-row loan-form" style="margin-bottom: 20px">
                  
                     <!--  curp -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.curp.$errors.length }"
                  >
                    <label for="contactPhone"
                      >CURP: <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="CURP"
                      type="text"
                      v-model="v$.form.curp.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.curp.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                   <!--  license number -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.licenseNumber.$errors.length }"
                  >
                    <label for="contactPhone"
                      >Licencia: <i class="attribute-required"></i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Licencia de conducir"
                      type="text"
                      v-model="v$.form.licenseNumber.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.licenseNumber.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  roleId -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.roleId.$errors.length }"
                  >
                    <label for="rangeHourContact"
                      >Puesto <i class="attribute-required">*</i></label
                    >

                    <select
                      v-model="v$.form.roleId.$model"
                      class="form-control"
                    >
                      <option
                        class="option-disabled"
                        value=""
                        selected
                        disabled
                      >
                        Seleccionar
                      </option>
                      <option v-for="roleItem in roles" :key="roleItem.id" :value="roleItem.id">{{capitalize( roleItem.description)}}</option>
                    </select>

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.roleId.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  email -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
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
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
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

                  <!--  email -->
                  <div
                    class="col-md-12 col-lg-10 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.confirmPassword.$errors.length }"
                  >
                    <label for="confirmPassword"
                      >Confirmar contraseña
                      <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Confirmar contraseña"
                      type="password"
                      v-model="v$.form.confirmPassword.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.confirmPassword.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>



                 
                </div>
              </div>

              

              </div>
              </Transition>
              <!-- finish one step -->
              <Transition name="fade">
              <!--second step -->
              <div class="row">

              </div>
              </Transition>

              <!-- finish second step -->

              <div class="text-center col-md-12 col-lg-12">
                <!-- aqui va el boton -->
                

                <button
                    id="registrarme"
                    name="registrarme"
                    class="col-lg-3 col-md-6"
                    type="submit"
                    @click="register()"
                  >
                    Registrar
                  </button>
              </div>
            </form>
          </div>

        
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers, sameAs, numeric } from "@vuelidate/validators";
import Notifications from '../../../core/util/notifications';
import EmployeeService from "../../../core/services/employee-service";
import ErrorsUtil from "../../../core/util/errors-util";
import FiltersText from "../../../core/filters/filters-text";



export default {
  name: "RegisterEmployee",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      showFirstStep: true,
      showSecondStep: false,
      status: 1, 
      form: {
        firstName: "",
        lastName: "",
        secondLastName: "",
        phoneNumber: "",
        email: "",
        birthday: "",
        genderId: "",
        password: "",
        licenseNumber: "",
        curp: "",
        roleId: ""
      },
      
    };
  },
  mounted() {
  },
  methods: {
    ...ErrorsUtil.methods,
    ...Notifications.methods,
    ...EmployeeService.methods,
    ...FiltersText.methods,
    continueStep(){
      this.showFirstStep = false;
      this.showSecondStep = true;

    },
    
    register(){
      if(this.v$.form.$invalid){
        this.showNotificationInfo('Por favor llene los campos requeridos');
        return;
      }
      this.$store.commit('CHANGE_LOADING', true);
      console.log('form', this.form);
      let person = {
          names: this.form.firstName,
          secondName: this.form.lastName,
          secondLastName: this.form.secondLastName,
          birthDate: this.form.birthday,
          status: 1,
          genderId: this.form.genderId,
          phoneNumber: this.form.phoneNumber,
          curp: this.form.curp

      };
      let employee = {
        licenseNumber: this.form.licenseNumber,
        status: this.status,

      };
      let user = {
        email: this.form.email,
        password: this.form.password,
        status: this.status,
        roleId: this.form.roleId
      }
      this.newEmployee(person, employee,user)
      .then((res) =>{
        console.log(res.data.token);

       this.v$.form.$reset();

       this.$store.commit('CHANGE_LOADING', false);
       this.$store.commit('SHOW_MODAL_NEW_EMPLOYEE', false);
       this.showNotificationSuccess('Registro de empleado exitoso');
       
       this.$store.commit('COUNTING_EMPLOYEES', 1);

       

      }).catch( (err) =>{
        console.log('err',err);

        this.$store.commit('CHANGE_LOADING', false);
        this.notificationsErrors(err);
        
        
      });


    }

  },
  computed: {
    roles() {
      return this.$store.state.catalogs.roles;
    },
  },

  validations() {
    return {
      form: {
        firstName: {
          required: helpers.withMessage("El Nombre es requerido", required),
        },
        lastName: {
          required: helpers.withMessage(
            "El Apellido paterno es requerido",
            required
          ),
        },
        secondLastName: {
          required: helpers.withMessage(
            "El Apellido materno es requerido",
            required
          ),
        },
        phoneNumber: {
          required: helpers.withMessage("El Teléfono es requerido", required),
          min: helpers.withMessage(
            "El Teléfono debe ser a 10 dígitos",
            minLength(10)
          ),
          numeric: helpers.withMessage("Solo se permiten números",numeric)
        },
        email: {
          email: helpers.withMessage("Ingrese un correo valido", email),
        },
        birthday: {
          required,
        },
        genderId: {
          required,
        },
        roleId: {
          required,
        },
        licenseNumber: {
          required: false

        },
        curp: {
            required: helpers.withMessage("El CURP es requerido", required),
            min: helpers.withMessage(
            "El CURP no es válido",
            minLength(18)
          ),

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
        confirmPassword: {
          required: helpers.withMessage(
            "La contraseña debe contener una Mayuscula, una minuscula, un digito y un caracter",
            required
          ),
          min: helpers.withMessage(
            "La contraseña debe tener una longitud minima de 6 caracteres",
            minLength(6)
          ),
         sameAsPassword: helpers.withMessage(
            "La confirmación de contraseña debe coincidir con su contraseña ingresada",
            sameAs(this.form.password)
          ),
          $lazy: true
        },
        
      },
    };
  },
};
</script>

<style scoped>
.form-check-input:checked {
  background-color: var(--vc-clr-primary) !important;
  border-color: var(--vc-clr-primary) !important;
}

.form-check-input[type="checkbox"]:checked {
  background-image: none;
  background-color: var(--vc-clr-primary) !important;
}

.switch label input[type="checkbox"]:checked + .lever:after {
  background-color: var(--vc-clr-primary) !important;
}

.switch label input[type="checkbox"]:checked + .lever {
  background-color: #1ffd01;
}
.section-title {
  padding-bottom: 30px;
  border: 0;
}

.section-title h5 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  color: var(--vc-c-yellow);
}
.section-title p {
  font-size: 0.8rem;
  text-align: center;
  position: relative;
  color: #aaaaaa;
}
.card-loan {
  background: var(--color-background-gray);
}
/*
.input-form:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}*/
select:focus {
  border-color: var(--vc-c-yellow);
  box-shadow: 0 0 0 0.1rem var(--vc-c-yellow);
  background: #edecf0;
  border: 1px;
}
input:focus {
  border-color: var(--vc-c-yellow);
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
.option-disabled {
  color: #788086;
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
.margin-botton-bar{
    margin-bottom: 4rem;
}
</style>