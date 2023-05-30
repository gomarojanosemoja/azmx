<template>
    <div class="comment pt-5">
      <div class="row m-0 service-section pb-0 pt-3">
        <div class="col-lg-12">
          <div class="section-title p-0  card-section-service " data-aos="fade-up">
            <h2>Nuestras Promociones</h2>
          </div>
        </div>
      </div>
      <div class="row m-0 service-section pb-2 service-slice">
        <div class="col-lg-12 service-slice">
          <div class="section-title p-0  service-slice">
             
            <div class="card-body">
              <div class="row" style="justify-content: center">
                
                <div class="col-lg-10 col-md-12 card-carousel-service ">
                  <carousel
                    :items-to-show="itemsToshow"
                    :autoplay="3000"
                    :wrapAround="true"
                  >
                    <slide v-for="slide in slides" :key="slide.id">
                      <!--{{ slide }} -->
                      <div style="col-6">
                        <div class="info-box icon-box mb-4 mt-4 item-slice services" style="">
                          <!-- <i class="bx" :class="slide.iconBox"></i> -->
                          <img
                            class="bx bxs-credit-card"
                            v-bind:src="getImgCard(slide.imgCard, 'png')"
                            alt=""
                          />
                          <h3 class="title-promotion" ><a href="">Promoción del día</a></h3>
                          <p>{{ slide.description }}</p>
                        </div>
                      </div>
                    </slide>

                    <template #addons>
                      <navigation />
                      <pagination />
                    </template>
                  </carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { getImgUrl } from '../../assets/util/imageUtil'

export default {
    name: 'PromotionComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
  },
  data() {
      return {
          slides: [
      {
        id: 1,
        description: "¡Lava tu auto! Solo por hoy $ 50 pesos",
        iconBox: "bx-credit-card-alt",
        imgCard: "example-paquete.png",
      },
      {
        id: 2,
        description: "¡Lava tu auto! Solo por hoy $ 50 pesos",
        iconBox: "bx-credit-card-alt",
        imgCard: "example-paquete.png",
      },
      {
        id: 3,
        description:
          "¡Lava tu auto! Solo por hoy $ 50 pesos",
        iconBox: "bx-mobile",
        imgCard: "example-paquete.png",
      },
      {
        id: 4,
        description: "¡Lava tu auto! Solo por hoy $ 50 pesos",
        iconBox: "bx-mobile",
        imgCard: "example-paquete.png",
      },
      {
        id: 5,
        description: "¡Lava tu auto! Solo por hoy $ 50 pesos",
        iconBox: "bx-mobile",
        imgCard: "example-paquete.png",
      },
      {
        id: 6,
        description: "¡Lava tu auto! Solo por hoy $ 50 pesos",
        iconBox: "bx-mobile",
        imgCard: "example-paquete.png",
      },
    ],
    windowWidth: window.innerWidth,
    itemsToshow: 1.5,
      }
  },

  watch: {
    windowWidth(newWidth, oldWidth) {
      console.log(`nuevo ${newWidth} -- old ${oldWidth}`);
      this.changeItemsToShow();
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.changeItemsToShow();
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    changeItemsToShow() {
      if (this.windowWidth < 400) {
        this.itemsToshow = 1.5;
      } else if (this.windowWidth < 600) {
        this.itemsToshow = 1.5;
      } else {
        this.itemsToshow = 1.5;
      }
    },
    getImgCard(name, type) {
      return getImgUrl(name, type);
    },
    changeImagePhone() {
      // if (this.windowWidth < 400) {
      //   return getImgUrl("phone1x.png", "png");
      // } else 
      if (this.windowWidth < 600) {
        return getImgUrl("phone2x.png", "png");
      } else {
        return getImgUrl("phone3x.png", "png");
      }
    },
  },
  
  beforeUnmount() {

      window.removeEventListener("resize", this.onResize);
      
  },
    
}
</script>

<style scoped>

.services  h3 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 20px;
}

.services  h3 a {
  color: #545454;
  transition: 0.3s;
  text-decoration: none;
}

.services  p {
  color: #636363;
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 0;
}

.service-section {
  background: var(--color-background);
}
.card-section-service {
  background: var(--color-background);
}
.service-slice {
  background: var(--color-background);
}
.item-slice {
  padding: 5px;
  /*height: 250px;*/
  width: 95%;
  border-radius: 10px;
}
.icon-box:hover {
  background: #e96b56;
}

.icon-box:hover i,  .icon-box:hover h3 a,  .icon-box:hover p {
  color: #fff;
}
.section-title-carousel {
  text-align: center;
  padding-bottom: 30px;
  border: 0;
}

.section-title-carousel h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  color: var(--color-text-card);
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
  color: var(--color-text-card);
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

.info-box {
  color: var(--vt-c-gray-light);
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  background: #fff;
  /*padding: 20px 0 30px 0;*/
   box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #fff;
  transition: all ease-in-out 0.3s;
}

.info-box i {
  font-size: 32px;
  color: var(--vc-clr-primary);
  border-radius: 50%;
  padding: 8px;
  /*border: 2px dotted #fef5f4;*/
 
}
.info-box img {
  font-size: 32px;
  color: #93c01f;
  /* border-radius: 50%; */
  /*padding: 8px;*/
  border: 0 dotted #fef5f4;
  width: 100%;
}

.info-box h3 {
  font-size: 20px;
  color: #777777;
  font-weight: 700;
  margin: 10px 0;
}

.info-box p {
  padding: 5px;
  line-height: 24px;
  font-size: 0.9rem;
  margin-bottom: 0;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-mobile-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  position: absolute;
  z-index: 100;
  margin-top: -5.2rem;
}
.card-carousel-service {
  margin-top: 0;
}
@media screen and (max-width: 1590px) {
  .phone-mobile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    position: absolute;
    z-index: 100;
    margin-top: -5.2rem;
  }
}
@media screen and (max-width: 1090px) {
  .phone-mobile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    position: absolute;
    z-index: 100;
    margin-top: -5.2rem;
  }
}

@media screen and (max-width: 999px) {
  .phone-mobile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    position: relative;
    z-index: 100;
    margin-top: -5.2rem;
  }
}
@media screen and (max-width: 700px) {
  .phone-mobile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    position: relative;
    z-index: 100;
    margin-top: -5.2rem;
  }
}
@media screen and (max-width: 599px) {
  .phone-mobile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    position: relative;
    z-index: 0;
    margin-top: -4.5rem;
  }
  .card-carousel-service {
    margin-top: -40px;
  }
}
@media screen and (max-width: 400px) {
}

</style>