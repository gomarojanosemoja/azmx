<template>
  <div class="pt-5 margin-botton-bar">
    <div class="row m-0 service-section pb-0 pt-3">
      <div class="col-lg-12 pb-3">
        <div v-for="(item, index) in appointments" :key="index" 
        class="section-title p-0 card">
          <div 
           class="card-body card-back">
            <div class="form-row loan-form row" style="margin-bottom: 0px">
              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
                <h5 class="pb-2 pt-4 title-appointment" >Datos de la cita</h5>
                <label class=" pb-2 pt-2 lbl-details"> <strong> No. </strong>{{item.Appointment.id}}</label>
                <label style="display: block;" class="pt-2 lbl-details" for=""><strong> Fecha: </strong> {{item.Appointment.dateSchedule}}</label>
                <label style="display: block;" class="pt-2 lbl-details" for=""><strong> Hora: </strong>{{item.Appointment.hour}}</label>
              </div>
              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify"
              >
              <h5 class="pb-2 pt-4 title-appointment">Datos del Servicio</h5>
              <div v-for="itemServicio in item.SalesCategoryCarServices" :key="itemServicio.id" class="row">
                <div class="col-12" style="text-align: justify">

                  
                <h6 class=" pb-2 pt-2 lbl-details"><strong>Servicio:</strong> {{capitalize( itemServicio.categoryCarServices.service.name)}}</h6>
                <label style="display: block;" class="pt-2 lbl-details" for=""> <strong> Tipo de auto:</strong> {{capitalize( itemServicio.categoryCarServices.category.description)}}</label>
                <label style="display: block;" class="pt-2 lbl-details" for=""> <strong> status:</strong> {{getDescriptionStatus(item.Appointment.statusAppointmentId)}}</label>

                </div>
              </div>
              <label style="display: block;" class="pt-2 lbl-details" for=""> <strong> Total:</strong> $ {{item.total}}</label>
                
              
              </div>

              <div
                class="col-md-4 col-lg-4 mb-4 pl-lg-4 pr-lg-4"
                style="text-align: justify;     display: grid;"
              >
                <h5 class="pb-2 pt-4 title-appointment" > </h5>
                <div class="text-center">
                  <button v-if="item.Appointment.statusAppointmentId!==5 &&
                  item.Appointment.statusAppointmentId!==4"
                    id="agendar"
                    name="agendar"
                    class="col-lg-4 col-md-12 button-cancel"
                    type="submit"
                    @click="cancelarCita(item)"
                  >
                    Cancelar Cita
                  </button>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from '../../core/filters/filters-text';
import Auth from '../../core/util/auth';
import Catalogs from '../../core/services/catalogs';
import Appointment from '../../core/services/appointment';

export default {
  name: "MyShopping",
  data() {
    return {
        appointments: [],
        statusAppointment: [],
        comments: 'test'
    };
  },
  created() {
    
    this.loadsAppointmentAll();
  },
  methods: {
    ...Auth.methods,
    ...Utils.methods,
    ...Catalogs.methods,
    ...Appointment.methods,
    loadsAppointmentAll(){
      this.$store.commit("CHANGE_LOADING", true);
      Promise.all([this.getStatusAppointment(), this.loadAppointment()])
      .then((results)=>{
        console.log('results', results);
        this.statusAppointment = results[0].data.statusAppointment;

        this.appointments = results[1].data.appointmentList;
        this.$store.commit("CHANGE_LOADING", false);
      }).catch((err) => {
          console.log("err", err);
          this.isExpiredToken(err);

          this.$store.commit("CHANGE_LOADING", false);
        });

    },
    loadAppointment(){

      return this.axios
        .get(`${process.env.VUE_APP_API}appoitment/`, {
          headers: {
            "x-token": this.$store.state.token,
          },
        });

    },
    getDescriptionStatus(statusId){

      let result = this.statusAppointment.find(({ id }) => id === statusId);

      return this.capitalize( result.description);

    },
    
    cancelarCita(item){
      this.$store.commit("CHANGE_LOADING", true);
      console.log('cancelar cita', item)
      const statusCancel = 5;

      this.appointmentStatusPut(
        item.Appointment.id, statusCancel, this.comments
        ).then((res) =>{
          console.log(res);
          this.$store.commit("CHANGE_LOADING", false);

           this.loadsAppointmentAll();
        }).catch((err) => {
          console.log("err", err);
          this.isExpiredToken(err);

          this.$store.commit("CHANGE_LOADING", false);
        });

    }

  },
};
</script>
<style scoped>
@import "@/assets/inputs.css";


.title-appointment{
  font-weight: 600;
  color: #e96b56;
  font-size: 1rem;
}
.lbl-details{
  font-size: 0.9rem;

}
</style>