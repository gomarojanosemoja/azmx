

export default {
    methods: {
        getStatusAppointment(){
            return this.axios
            .get(`${process.env.VUE_APP_API}catalogs/status-appointment`);
        },
        getRoles(){
            return this.axios
            .get(`${process.env.VUE_APP_API}catalogs/roles`);
        },
        getPeriods(){
            return this.axios
            .get(`${process.env.VUE_APP_API}catalogs/periods`);

        },
        getGenders(){
            return this.axios
            .get(`${process.env.VUE_APP_API}catalogs/genders`);
        },
        getCustomerTypes(){
            return this.axios
            .get(`${process.env.VUE_APP_API}catalogs/customer-types`);
        }
    },
}