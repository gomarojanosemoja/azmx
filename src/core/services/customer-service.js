export default{
    methods: {

        getCustomers(typeCustomersList = [], fullName= ''){
            let typeCustomersJoin = typeCustomersList.join();

            return this.axios
                .get(`${process.env.VUE_APP_API}customers/?typeCustomersList=${typeCustomersJoin}&${fullName}`, {
                   
                });

        },
        newCustomer(personData, addressData, customerData){
            return this.axios.post(`${process.env.VUE_APP_API}customers/`,
                {
                    personData,
                    addressData,
                    customerData
                }
                );

        },
        
    },
}