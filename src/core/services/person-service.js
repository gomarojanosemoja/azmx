


export default {
    methods: {
        newPerson(person, address){
            return this.axios.post(`${process.env.VUE_APP_API}api/users/addPerson`,
                {
                    person,
                    address
                }
                );

        },
        
    },
}