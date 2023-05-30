export default {
    methods: {
        getProducts(periodsList = []){
            let periodsJoin = periodsList.join();

            return this.axios
                .get(`${process.env.VUE_APP_API}products/getAll?periodsList=${periodsJoin}`, {
                   
                });

        },
        newProduct(
            productData 
        ){
            return this.axios.post(`${process.env.VUE_APP_API}products/addProduct`,
                {
                    ...productData
                }
                );

        },
    },
}