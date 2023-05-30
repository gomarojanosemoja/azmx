<template>
  
    
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              
                <div class="form-row row loan-form" style="margin-bottom: 20px">
                  <!--  firstName -->
                  <div
                    class="col-md-12 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.name.$errors.length }"
                  >
                    <label for="name"
                      >Nombre <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Nombre"
                      type="text"
                      v-model="v$.form.name.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.name.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  description -->
                  <div
                    class="col-md-12 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.description.$errors.length }"
                  >
                    <label for="description"
                      >Descripción
                      <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Descripción"
                      type="text"
                      v-model="v$.form.description.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.description.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  interest -->
                  <div
                    class="col-md-12 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.interest.$errors.length }"
                  >
                    <label for="interest"
                      >Interes
                      <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Interes"
                      type="text"
                      v-model="v$.form.interest.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.interest.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>


                  <!--  amount -->
                  <div
                    class="col-md-12 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.amount.$errors.length }"
                  >
                    <label for="amount"
                      >Total
                      <i class="attribute-required">*</i></label
                    >
                    <input
                      class="form-control input-form"
                      placeholder="Monto total"
                      type="text"
                      v-model="v$.form.amount.$model"
                    />

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.amount.$errors"
                      :key="index"
                    >
                      <div class="error-msg error-required">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>

                  <!--  periodId -->
                  <div
                    class="col-md-12 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                    :class="{ error: v$.form.periodId.$errors.length }"
                  >
                    <label for="rangeHourContact"
                      >Periodo <i class="attribute-required">*</i></label
                    >

                    <select
                      v-model="v$.form.periodId.$model"
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
                      <option value="1">Semanal</option>
                      <option value="2">Quincenal</option>
                    </select>

                    <!-- error message -->
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.periodId.$errors"
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
                    class="col-lg-3 col-md-6"
                    type="submit"
                    @click="register()"
                  >
                    Guardar
                  </button>
              </div>
            </form>
          </div>
        
  
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers, decimal } from "@vuelidate/validators";
import Notifications from '../../../core/util/notifications';
import ProductsService from "../../../core/services/products-service";

const mapNewProduct = () => ({
        name: "",
        description: "",
        amount: "",
        interest: "",
        periodId: "",
});

export default {
  name: "RegisterProduct",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        amount: "",
        interest: "",
        periodId: "",
        
      },
    };
  },
  methods: {
    ...Notifications.methods,
    ...ProductsService.methods,

    register(){
      if(this.v$.form.$invalid){
        this.showNotificationInfo('Por favor llene los campos requeridos');
        return;
      }
      this.$store.commit('CHANGE_LOADING', true);
      console.log('form', this.form);
      
      let productData = {
        ...this.form,
        status: 1
      }
      this.newProduct(productData)
      .then((res) =>{
        console.log(res.data);

       this.form = mapNewProduct();
       this.$store.commit('CHANGE_LOADING', false);
       this.$store.commit('SHOW_MODAL_NEW_PRODUCT', false);
       this.showNotificationSuccess('Registro de producto exitoso');

       
       this.v$.form.$reset();


      }).catch( (err) =>{

        this.$store.commit('CHANGE_LOADING', false);
        this.notificationsErrors(err);

       
        
        
      });


    }

  },

  validations() {
    return {
      form: {
        
        name:{
          required: helpers.withMessage('El nombre es requerido', required),
          

        },
        description:{
          required: helpers.withMessage('La descripción es requerida', required),
        },
        amount: {
          required: helpers.withMessage('El total es requerido', required),
          decimal: helpers.withMessage("Solo se permiten números y decimales",decimal)
        },
        interest: {
          required: helpers.withMessage('El interes es requerido', required),
          decimal: helpers.withMessage("Solo se permiten números y decimales",decimal)
        },
        periodId: {
          required
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