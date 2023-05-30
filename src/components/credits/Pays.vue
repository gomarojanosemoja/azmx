<template>
  <div class="pt-5 margin-botton-bar">
    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div class="section-title p-0 card">
          <h2>Realiza una busqueda</h2>
          <div class="card-body card-back">
            <form @submit.prevent="onSubmit">
              <div class="form-row row loan-form" style="margin-bottom: 20px">
                <!--  payDayList -->
                <div
                  class="col-md-3 col-lg-3 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.form.statusList.$errors.length }"
                >
                  <label for="rangeHourContact"
                    >Día de pago <i class="attribute-required">*</i></label
                  >

                  <Multiselect
                    v-model="v$.form.payDayList.$model"
                    class="multiselect-green"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="description"
                    :options="payDayList"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.payDayList.$errors"
                    :key="index"
                  >
                    <div class="error-msg error-required">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>

                <!--  statusList -->
                <div
                  class="col-md-3 col-lg-3 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.form.statusList.$errors.length }"
                >
                  <label for="rangeHourContact"
                    >Estatus <i class="attribute-required">*</i></label
                  >

                  <Multiselect
                    v-model="v$.form.statusList.$model"
                    class="multiselect-green"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="description"
                    :options="statusList"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.statusList.$errors"
                    :key="index"
                  >
                    <div class="error-msg error-required">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>

                <!--  debtCollector -->
                <div
                  class="col-md-3 col-lg-3 mb-4 pl-lg-4 pr-lg-4"
                  :class="{ error: v$.form.debtCollector.$errors.length }"
                >
                  <label for="rangeHourContact"
                    >Cobrador <i class="attribute-required">*</i></label
                  >

                  <Multiselect
                    v-model="v$.form.debtCollector.$model"
                    class="multiselect-green"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="description"
                    :options="debtCollector"
                  />

                  <!-- error message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.debtCollector.$errors"
                    :key="index"
                  >
                    <div class="error-msg error-required">
                      {{ error.$message }}
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-lg-2 mb-4 pl-lg-4 pr-lg-4 pt-3">
                  <!-- aqui va el boton -->

                  <button
                    id="registrarme"
                    name="registrarme"
                    class="col-lg-12 col-md-12"
                    type="submit"
                    @click="searchPays()"
                  >
                  <i
                    class="fa fa-search"
                    style="margin-right: 5px"
                    aria-hidden="true"
                  ></i>
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 service-section pb-0 pt-1">
      <div class="col-lg-12 pb-3">
        <div class="section-title p-0 card">
          <div class="card-body card-back">
            <div class="form-row loan-form row" style="margin-bottom: 0px">
              <div class="col-12" style="text-align: justify">
                <!-- begin table pays -->

                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Cargo</th>
                      <th scope="col">Saldo pendiente</th>
                      <th scope="col">Dia de pago</th>
                      <th scope="col">Pago semanal</th>
                      <th scope="col">Semana en curso</th>
                      <th scope="col">Estado de pago</th>
                      <th scope="col">Cobrador</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <th scope="row">Elizabeth Palacios Benitez</th>
                      <td>$2,400</td>
                      <td>$1,600</td>
                      <td>Jueves</td>
                      <td>$800</td>
                      
                      <td>1/3</td>
                      
                      <td><i
                        class="fa fa-circle"
                        style="color: #01717f; padding-right: 0.3rem;"
                        aria-hidden="true"
                      ></i>Pendiente</td>
                      <td>Erick</td>
                    </tr>
                    <tr>
                      <td colspan="8" class="hiddenRow">
                        <div class="collapse" id="collapseExample">
                          <div class="row m-0 service-section pb-0 pt-3">
                            <div class="col-lg-12 pb-3">
                              <div class="section-title p-0 card">
                                <div class="card-body card-back">
                                  <div
                                    class="form-row loan-form row"
                                    style="margin-bottom: 0px"
                                  >
                                    <div
                                      class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                                      style="text-align: justify"
                                    >
                                      <h5 class="pb-2 pt-4 title-appointment">
                                        Datos del cliente
                                      </h5>
                                      <label class="pb-2 pt-2 lbl-details">
                                        <strong> Nombre: </strong>Elizabeth
                                        Palacios Benitez</label
                                      >
                                      <label
                                        style="display: block"
                                        class="pt-2 lbl-details"
                                        for=""
                                        ><strong> Telefono: </strong>
                                        7445987634</label
                                      >

                                      <label
                                        style="display: block"
                                        class="pt-2 lbl-details"
                                        for=""
                                        ><strong> Antiguedad: </strong>
                                        1 Año</label
                                      >
                                    </div>


                                    <div
                                      class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                                      style="text-align: justify"
                                    >
                                      <h5 class="pb-2 pt-4 title-appointment">
                                        Datos del prestamo
                                      </h5>
                                      <label class="pb-2 pt-2 lbl-details">
                                        <strong> No. </strong>12</label
                                      >
                                      <label style="display: block" class="pb-2 pt-2 lbl-details">
                                        <strong> Monto: </strong>$2,000</label
                                      >
                                      <label style="display: block" class="pb-2 pt-2 lbl-details">
                                        <strong> Interes: </strong>20%</label
                                      >
                                      
                                      <label
                                        style="display: block"
                                        class="pt-2 lbl-details"
                                        for=""
                                        ><strong> Fecha de entrega: </strong>
                                        30/03/2023</label
                                      >

                                      <label
                                        style="display: block"
                                        class="pt-2 lbl-details"
                                        for=""
                                        ><strong> Estado: </strong>
                                        En progreso</label
                                      >
                                    </div>

                                    <div
                                      class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                                      style="text-align: justify"
                                    >
                                      <h5 class="pb-2 pt-4 title-appointment">
                                        Periodos de pago
                                      </h5>

                                      <div class="row">
                                        <table class="table table-hover">
                                          <thead>
                                            <tr>
                                              <th scope="col">No.</th>
                                              <th scope="col">Fecha</th>
                                              <th scope="col">Estado</th>
                                              <th scope="col">Total</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th scope="row">1</th>
                                              <td>07/04/2023</td>
                                              <td>Pagado</td>
                                              <td>$800</td>
                                            </tr>
                                            <tr style="font-weight: 700; color: #01717fe0;">
                                              <th scope="row">2</th>
                                              <td>14/04/2023</td>
                                              <td>Pendiente</td>
                                              <td>$800</td>
                                            </tr>
                                            <tr>
                                              <th scope="row">3</th>
                                              <td>21/04/2023</td>
                                              <td>Pendiente</td>
                                              <td>$800</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Guadalupe Toribio de la Rosa</th>
                      <td>$2000</td>
                      <td>$0</td>
                      <td>Jueves</td>
                      <td>$800</td>
                      <td>3/3</td>
                      
                      <td><i
                        class="fa fa-circle"
                        style="color: #87868b; padding-right: 0.3rem;"
                        aria-hidden="true"
                      ></i>Liquidado</td>
                      <td>Juan</td>
                    </tr>
                    <tr>
                      <th scope="row">Armando Gomez Brito</th>
                      <td>$2000</td>
                      <td>$1000</td>
                      <td>Viernes</td>
                      <td>$800</td>
                      
                      <td>2/3</td>
                      
                      <td><i
                        class="fa fa-circle"
                        style="color: #01717f; padding-right: 0.3rem;"
                        aria-hidden="true"
                      ></i>Pendiente</td>
                      <td>Karla</td>
                    </tr>
                    <tr>
                      <th scope="row">Elvira Moreno Rivera</th>
                      <td>$5,092.00</td>
                      <td>$2000</td>
                      <td>Lunes</td>
                      <td>$1,300</td>
                      
                      <td>1/3</td>
                      
                      <td><i
                        class="fa fa-circle"
                        style="color: #c60707; padding-right: 0.3rem;"
                        aria-hidden="true"
                      ></i>En mora</td>
                      <td>Erick</td>
                    </tr>

                    <tr>
                      <th scope="row">Arturo Lopez Patricio</th>
                      <td>$5,000</td>
                      <td>$2000</td>
                      <td>Lunes</td>
                      <td>$1,200</td>
                      
                      <td>1/3</td>
                      
                      <td><i
                        class="fa fa-circle"
                        style="color: #ffc155; padding-right: 0.3rem;"
                        aria-hidden="true"
                      ></i>En ruta de cobranza</td>
                      <td>Erick</td>
                    </tr>
                  </tbody>
                </table>

                <!--finish table pays -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import Multiselect from "@vueform/multiselect";

export default {
  name: "PaysView",
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      form: {
        statusList: [0],
        debtCollector: [0],
        payDayList: [0],
      },
      payDayList: [
        {
          id: 0,
          value: 0,
          description: "Todos",
        },
        {
          id: 1,
          value: 1,
          description: "Lunes",
        },
        {
          id: 2,
          value: 2,
          description: "Martes",
        },
        {
          id: 3,
          value: 3,
          description: "Miercoles",
        },
        {
          id: 4,
          value: 4,
          description: "Jueves",
        },
        {
          id: 5,
          value: 5,
          description: "Viernes",
        },
        {
          id: 6,
          value: 6,
          description: "Sabado",
        },
        {
          id: 7,
          value: 7,
          description: "Domingo",
        },
      ],
      statusList: [
        {
          id: 0,
          value: 0,
          description: "Todos",
        },
        {
          id: 1,
          value: 1,
          description: "Cobrado",
        },
        {
          id: 2,
          value: 2,
          description: "Pendiente",
        },
        {
          id: 3,
          value: 3,
          description: "En ruta de cobranza",
        },
        {
          id: 4,
          value: 4,
          description: "En mora",
        },
        {
          id: 5,
          value: 5,
          description: "Recolectado por cobranza",
        },
        {
          id: 6,
          value: 6,
          description: "Liquidado",
        },
      ],
      debtCollector: [
        {
          id: 0,
          value: 0,
          description: "Todos",
        },

        {
          id: 1,
          value: 1,
          description: "Erick",
        },
        {
          id: 2,
          value: 2,
          description: "Juan",
        },
        {
          id: 3,
          value: 3,
          description: "Angel",
        },
      ],
    };
  },

  validations() {
    return {
      form: {
        payDayList: {
          required,
        },
        statusList: {
          required,
        },
        debtCollector: {
          required,
        },
      },
    };
  },
  methods: {
    searchPays() {},
  },
};
</script>

<style scoped>
thead > tr > th {
  font-weight: 700;
  color: var(--vc-clr-primary);
}
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


select:focus {
  border-color: var(--vc-c-yellow) !important;
  box-shadow: 0 0 0 0.1rem var(--vc-c-yellow) !important;
  background: #fff !important;
  border: 1px !important;
}
input:focus {
  border-color: var(--vc-c-yellow) !important;
  box-shadow: 0 0 0 0.1rem var(--vc-c-yellow) !important;
  background: #edecf0 !important;
  border: 1px !important;
}
input {
  background: #edecf0 !important;
  border-color: #edecf0 !important;
  box-shadow: none !important;
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
.center-div {
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

.hiddenRow {
  padding: 0 !important;
}
</style>