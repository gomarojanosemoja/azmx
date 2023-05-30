import CatalogsService from "../services/catalogs";

export default{
    methods: {
        ...CatalogsService.methods,
        loadCatalogs(){

            this.$store.commit("CHANGE_LOADING", true);
            Promise.all([
              this.getRoles(),
              this.getPeriods(),
              this.getGenders(),
              this.getCustomerTypes(),
            ])
              .then((results) => {
                console.log("results", results);
                this.$store.commit("LOAD_ROLES", results[0].data.success);
                this.$store.commit("LOAD_PERIODS", results[1].data.success);
                this.$store.commit("LOAD_GENDERS", results[2].data.success);
                this.$store.commit("LOAD_CUSTOMER_TYPES", results[3].data.success);
               
                this.$store.commit("CHANGE_LOADING", false);
              })
              .catch((err) => {
                console.log("err", err);
                //this.isExpiredToken(err);
      
                this.$store.commit("CHANGE_LOADING", false);
              });
      
          },
        
    },
}