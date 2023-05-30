


export default {
    methods: {
        newEmployee(personData, employeeData, userData){
            return this.axios.post(`${process.env.VUE_APP_API}users/createEmployee`,
                {
                    personData,
                    employeeData,
                    userData
                }
                );

        },
        getEmployees(rolesList = [], statusList = []){
            let rolesJoin = rolesList.join();

            let statusJoin = statusList.join();

            return this.axios
                .get(`${process.env.VUE_APP_API}users/employees?rolesList=${rolesJoin}&statusList=${statusJoin}`, {
                   
                });

        },
        
    },
}