<template>
  <section class="pb-4">
    <div class="container-header">
      <!-- ======= Header ======= -->
      <header id="header">
        <div class="d-flex row" style="width: 100%">
          <div class="logo mr-auto col-4">
            

            <RouterLink to="/home-page">
              <img class="img-fluid" :src="showImageLogo()" alt="" />
            </RouterLink>
          </div>

          <div class="  col-8">
           
            <div class="row" style="float: right">
              <!--<div v-if="!login"  class=" nav-menu col-12 pr-1" style="text-align: center">
                 <ul >
                  
                  <li ><a href="#" v-on:click="goToRoute('register-client')">Registrate</a></li>
                  <li ><a href="#" v-on:click="goToRoute('log-in')">LogIn</a></li>
                </ul>
              </div>-->
              <div v-if="login" class="col-lg-6 col-md-6 pr-1" style="text-align: center">
                
                <ProfileAvatar
                  bgColor="#01717f"
                  :username="userName"
                  textColor="white"
                ></ProfileAvatar>
              </div>
             
            </div>
          </div>
          <!-- .nav-menu -->
        </div>
      </header>
      <!-- End Header -->

    </div>
  </section>
</template>

<script>
import { getImgUrl } from "../assets/util/imageUtil";
import ProfileAvatar from "vue-profile-avatar";

export default {
  name: "HeaderComponent",
  components: {
    ProfileAvatar,
  },

  methods: {
    showImageLogo() {
      return getImgUrl("logo-azamex.png", "png");
    },
    goToRoute(nameOption){
      
      this.$router.push({name: nameOption});
    }
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
    login(){
      console.log('state login', this.$store.state.login);
      return this.$store.state.login;
    },
    userName(){
      return this.$store.state.userName;
    }
  },
};
</script>

<style  scoped>
/*--------------------------------------------------------------
# header
--------------------------------------------------------------*/
.img-logo {
  /*width: 225px;
  height: 100px;*/
  max-height: 60px;
  padding: 0.5rem;
}
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 70px;
  transition: all 0.5s;

  transition: all 0.5s;
  padding: 10px 0;

  box-shadow: 0px 0px 20px 0px rgba(221, 13, 13, 0.1);

  background-color: var(--color-header);
}
.container-header {
  z-index: 9989;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #90bc23;
  box-shadow: 0px 15px 10px -15px rgb(0 0 0 / 15%);
}

#header .logo h1 {
  font-size: 26px;
  padding: 0 0 0 8px;
  margin: 11px 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  border-left: 8px solid #e96b56;
}
a{
  text-decoration: none !important;
}

#header .logo h1 a,
#header .logo h1 a:hover {
  color: #545454;
  text-decoration: none;
}

#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 54px;
  margin-left: 2px;
}

.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}




.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  float: left;
}

.nav-menu a {
  display: block;
  position: relative;
  color: var(--vc-clr-primary);
  padding: 13px 0 15px 25px;
  transition: 0.3s;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
}

.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
  color: #e96b56;
  text-decoration: none;
}

.nav-menu .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
}

.nav-menu .drop-down ul {
  display: block;
  position: absolute;
  left: 20px;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: ease all 0.3s;
}

.button-contact {
  font-weight: 600;
  background: #fff;

  border-radius: 20px;
  border-color: #e7e7e7;
  padding: 7px 19px;
  color: grey;
  transition: 0.4s;
  border: 1px solid #9b9b9b;
  width: 100%;
  font-size: 0.75rem;
}
.button-contact i {
  font-size: 1.5rem;
  display: inline-block;
  top: 5.5px;
  position: absolute;
  left: 0.65rem;
}

.button-contact-topbar {
  font-weight: 600;
  background: var(--vc-clr-primary);

  border-radius: 20px;
  border-color: #e7e7e7;
  padding: 7px 19px;
  color: #fff;
  transition: 0.4s;
  border: 1px solid var(--vc-clr-primary);
  width: 100%;
  font-size: 0.6rem;
}
.button-contact-topbar i {
  font-size: 1.3rem;
  display: inline-block;
  top: 5.5px;
  position: absolute;
  left: 1.9rem;
}

.div-without-padding {
  padding: 0;
}
</style>