


export default {
    methods: {
        isExpiredToken(err){

            if(err.response.status){
                if(err.response.status === 401){
                    localStorage.clear();
                    this.$store.commit('CHANGE_LOGIN', false);
                    this.$store.commit('CHANGE_BOTTOM_BAR', false);
                    this.$router.push({name: 'log-in'});

                }
            }

        }
    },
}