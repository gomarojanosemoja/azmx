<template>
  <div class="pt-5 margin-botton-bar">
    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div class="section-title p-0 card">
          <h2>Realiza una búsqueda de productos</h2>
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              <div class="form-row row loan-form" style="margin-bottom: 20px">
                

                <!--  periodsList -->
                <div
                  class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.formSearch.periodsList.$errors.length }"
                >
                  <label for="rangeHourContact"
                    >Periodos <i class="attribute-required">*</i></label
                  >

                  <Multiselect
                    v-model="v$.formSearch.periodsList.$model"
                    class="multiselect-green"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="description"
                    :options="optionsPeriods"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.formSearch.periodsList.$errors"
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
                    id="search-products"
                    name="search-products"
                    class="col-lg-12 col-md-12"
                    type="submit"
                    @click="searchProducts()"
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
                    id="registrarme"
                    name="registrarme"
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
          <div v-for="(item, index) in productsList"
          :key="index"
            class="card-body card-back"
          >
            <div class="form-row loan-form row" style="margin-bottom: 0px">
              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Datos del producto</h5>
                <label class=" pt-2 lbl-details">
                  <strong> No. </strong>{{item.id}}</label
                >
                <label style="display: block" class=" pt-2 lbl-details">
                  <strong> Nombre: </strong
                  >{{item.name}}</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Descripción: </strong>
                  {{item.description}}</label
                >
                
              </div>
               <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment">Detalles</h5>
                <label class=" pt-2 lbl-details">
                  <strong> Total: </strong>$ {{item.amount}}</label
                >
                <label style="display: block" class=" pt-2 lbl-details">
                  <strong> Interes: </strong
                  >{{item.interest}}%</label
                >
                <label style="display: block" class="pt-2 lbl-details" for=""
                  ><strong> Periodo de pago: </strong>
                  {{capitalize(item.descriptionPeriod)}}</label
                >
                
              </div>

              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                

                <button
                  id="registrarme"
                  name="registrarme"
                  class="col-lg-4 col-md-6 btn-custom"
                  type="submit"
                  style="margin-top: 4rem;"
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
          <div class="title">Gestión del producto</div>
          <RegisterProduct></RegisterProduct> 
        </div>
       </div>
      
    </GDialog>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";

import  RegisterProduct  from "./RegisterProduct.vue";
import MultiselectData from "../../../core/commons/multiselect-data";
import ProductsService from "../../../core/services/products-service";
import ErrorsUtil from "../../../core/util/errors-util";
import FiltersText from "../../../core/filters/filters-text";

export default {
  name: "ProducsView",
  components:{
    RegisterProduct,
    Multiselect
  },
  setup() {
    const dialogState = ref(false);

    return { v$: useVuelidate(), dialogState };
  },
  data() {
      return {
          form:{
              names: ''
          },
          formSearch:{
            periodsList: [1]
          },
          optionsPeriods: [],
          productsList: []
          
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
            periodsList: {
              required
            }
          },
    };
  },
  mounted() {
    
    if(this.$store.state.catalogs.periods.length > 0){
      this.optionsPeriods = this.mapOptionsFromSomeCatalog(this.$store.state.catalogs.periods);

    }
    this.searchProducts();
  },
  computed: {
    periods() {
      return this.$store.state.catalogs.periods;
    },
    showModalNewProduct(){
      return this.$store.state.showModalNewProduct;
    },

  },
  watch: {

    periods(newValue){
      this.optionsPeriods = this.mapOptionsFromSomeCatalog(newValue);

    },
    showModalNewProduct(newValue){
      this.dialogState = newValue;

    },
    dialogState(newValue){
      this.$store.commit('SHOW_MODAL_NEW_PRODUCT', newValue);
      console.log('dialogState watch', newValue);
    }
  },
  methods: {
    ...ErrorsUtil.methods,
    ...MultiselectData.methods,
    ...ProductsService.methods,
    ...FiltersText.methods,
      openModalEdit(){

      },
      searchProducts(){

        if (this.v$.formSearch.$invalid) {
        this.showNotificationWarning(
          "Favor de seleccionar un periodo para realizar la búsqueda"
        );
        return;
      }

      this.$store.commit("CHANGE_LOADING", true);
      this.getProducts( this.formSearch.periodsList)
        .then((res) => {
          console.log(res);
          this.productsList = res.data.products;
          console.log(this.productsList);

          this.$store.commit("CHANGE_LOADING", false);
        })
        .catch((err) => {


          this.$store.commit("CHANGE_LOADING", false);

          this.notificationsErrors(err);
        });

      },
      openModalAdd(){
        
        this.dialogState = true;
      }
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