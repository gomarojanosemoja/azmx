


export default {
  methods: {
    newUser(
      email,
      password,
      roleId,
      personId) {

      return this.axios.post(`${process.env.VUE_APP_API}api/users`,
        {
          email,
          password,
          roleId,
          personId
        }
      );

    },
    getUserFromToken2(token) {
      this.axios
        .get(`${process.env.VUE_APP_API}users/profile`, {
          headers: {
            "x-token": token,
          }
        }).then((res) => {
          console.log(res.data);
          if (res.data.client) {
            localStorage.setItem('username',
              res.data.client.name + ' ' + res.data.client.secondName);

            this.$store.commit('CHANGE_USERNAME', res.data.client.name + ' ' + res.data.client.secondName);
          }
        })
    },
    getUserFromToken() {
      return this.axios
        .get(`${process.env.VUE_APP_API}users/profile`, {
          headers: {
            "x-token": this.$store.state.token,
          }
        });
    },
  },
}