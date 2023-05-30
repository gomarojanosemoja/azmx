export default {
    methods: {
        appointmentStatusPut(id, statusAppointmentId, comments){


            return this.axios.put(`${process.env.VUE_APP_API}appoitment/status/id/${id}`,
                {
                    statusAppointmentId,
                    comments
                },
                {
                    headers: {
                      "x-token": this.$store.state.token,
                    }
                  }
                );

        }
    },
}