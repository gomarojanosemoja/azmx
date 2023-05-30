<template>
  <div v-for="(item, index) in services" :key="index">
    <div class="featured">
      <div class="section-title" data-aos="fade-up">
        <h2>{{item.typeServiceName}}</h2>
      </div>

      <div class="row ml-0 mr-0 without-margin" style="    justify-content: center;">
        <div v-for="element in item.servicesList" :key="element.id" class="col-lg-3 pb-3">
          <div class="icon-box pb-3" v-on:click="goToPackage(element)">
            <img
              class="bx bxs-credit-card paquete-img"
              :src="urlImage+ element.image"
              alt=""
            />
            <h3><a href="">{{capitalize( element.name)  }}</a></h3>
            <p>{{capitalize(element.subtitle)}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Utils from '../../core/filters/filters-text';

export default {
  name: "ServicesComponent",
  components: {},
  data() {
    return {
      services: [],
      urlImage: process.env.VUE_APP_IMG
      
    };
  },
  created() {
    this.loadServices();

    console.log( Utils.methods.b64EncodeUnicode("HOLA MUNDO"));
  },
  filters: {
    
  },
  methods: {
    goToPackage(item){
      
      let params =  JSON.stringify(item);
      console.log('click goToPackage', params);
      this.$router.push({name: 'package-order', 
        query:{ 'data': Utils.methods.b64EncodeUnicode(params)}});
    },
    capitalize(value) {
      if (!value) return ''
      value = value.toString().toLowerCase();
      console.log('capitalize', value.charAt(0).toUpperCase() + value.slice(1));
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    loadServices(){

      this.$store.commit('CHANGE_LOADING', true);
      
      this.axios.get(`${process.env.VUE_APP_API}services`).then((res)=>{
        

        this.services = res.data.services;
        console.log(this.services);

        this.$store.commit('CHANGE_LOADING', false);

      }).catch( (err) =>{
        console.log('err',err);

        this.$store.commit('CHANGE_LOADING', false);
      })

    }
  },
};
</script>
<style scoped>
/*--------------------------------------------------------------
# Featured
--------------------------------------------------------------*/
.featured {
  position: relative;
  margin-top: 20px;
  z-index: 2;
}
.without-margin {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.featured .icon-box {
  text-align: center;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #fff;
  transition: all ease-in-out 0.3s;
}
a {
  text-decoration: none !important;
}

.featured .icon-box i {
  color: #e96b56;
  font-size: 50px;
  margin-bottom: 15px;
  position: relative;
  display: block;
}

.featured .icon-box h3 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 20px;
}

.featured .icon-box h3 a {
  color: #545454;
  transition: 0.3s;
}

.featured .icon-box p {
  color: #636363;
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 0;
}

.featured .icon-box:hover {
  background: #e96b56;
}

.featured .icon-box:hover i,
.featured .icon-box:hover h3 a,
.featured .icon-box:hover p {
  color: #fff;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  font-family: "Poppins", sans-serif;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #e96b56;
  bottom: 0;
  left: calc(50% - 25px);
}

.section-title p {
  margin-bottom: 0;
}

.paquete-img {
  /*font-size: 32px;*/
  color: #93c01f;
  /* border-radius: 50%; */
  padding: 8px;
  border: 0 dotted #fef5f4;
  width: 100%;
}
</style>