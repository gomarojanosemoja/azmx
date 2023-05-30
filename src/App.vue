<template>
 <Loading :active="isLoading" 
        :can-cancel="false" 
        :on-cancel="onCancel"
        :color="backgroundColor"
        :z-index="99999"
        :is-full-page="fullPage"></Loading>
<HeaderComponent /> 
  <sidebar-menu v-if="login"  :menu="menu" :collapsed="true" :theme="'white-theme'" />

  <router-view />
 

 


  
</template>

<script>
  import HeaderComponent from "./components/Header.vue";
  import "bottom-navigation-vue/dist/style.css";
  import Loading from 'vue3-loading-overlay';
  //import { socket } from "@/socket";
import LoadData from "./core/commons/load-data";

  

export default {
  name: "App",
  components: {
    HeaderComponent,

    Loading
  },
  data() {
    return {
      
      fullPage: true,
      selected: 1,
      backgroundColor: "#e96b56",
      menu: [
          {
            header: 'Azamex',
            hiddenOnCollapse: true
          },
          {
            href: '/my-profile',
            title: 'Mi perfil',
            icon: 'fa fa-user',
          },
          {
            
            title: 'Prestamos',
            icon: 'fa fa-usd',
            child: [
              {
                href: '/credits/view-products',
                title: 'Productos'
              },
              {
                href: '/credits/manage',
                title: 'Administrar'
              },
              {
                href: '/credits/pays',
                title: 'Cobranza'
              }
            ]
          },
          {
            /*href: '/customer',*/
            title: 'Clientes',
            icon: 'fa fa-users',
            child: [
              {
                href: '/customer/manage',
                title: 'Administrar'
              }
            ]
          },
          {
           
            title: 'Empleados',
            icon: 'fa fa-shield',
            child: [
              {
                href: '/employees/manage',
                title: 'Administrar'
              }
            ]
          }
        ]
    };
  },
  methods: {
    ...LoadData.methods,
    onCancel(){
      console.log('usuario cancelo')
    },
    
    /*connect() {
      socket.connect();
    },
    disconnect() {
      socket.disconnect();
    },*/
    updateShopping(newValue){


      this.options = this.options.map((e) => {
        if(e.id==2){
          e.badge = newValue;
        }
        return e;
      });
      

    },
    
    
  },
  mounted(){
    if(localStorage.getItem('token')){
      this.$store.commit('NEW_TOKEN', localStorage.getItem('token'));
       this.$store.commit('CHANGE_LOGIN', true);
       this.$store.commit('CHANGE_BOTTOM_BAR', true);
       //this.connect();
       this.loadCatalogs();
    }else{
      this.$router.push({name: 'log-in'});
    }
    if(localStorage.getItem('username')){
      this.$store.commit('CHANGE_USERNAME', localStorage.getItem('username'));
    }
  },
  beforeUnmount(){
    //this.disconnect();

  },
  computed: {
    token() {
      return this.$store.state.token;
    },
    login(){
      console.log('state login', this.$store.state.login);
      return this.$store.state.login;
    },
    isLoading(){
      return this.$store.state.isLoading;
    },
    showBottomBar(){
      return this.$store.state.showBottomBar;
    },
    countShopping(){

      console.log('change count');
      return this.$store.state.countAppointment;
    },
    newOptions(){
      return this.options;
    }
  },
  watch:{
    countShopping(newValue, oldValue){
      this.updateShopping(newValue);
      console.log('old', newValue);
      console.log('new', oldValue);



    }
  }
};
</script>

<style>
@import "@/assets/base.css";
</style>
