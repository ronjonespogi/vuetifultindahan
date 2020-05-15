
<template>
  <v-container class="fill-height" fluid style="min-height: 434px" >
        <v-row class="ml-4 mr-4">  
            <v-col cols="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                    <v-img :aspect-ratio="16/9" :src="products[0].image">
                        <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                            {{ products[0].price }}
                        </div>
                        </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative;">
                        <v-btn absolute color="orange" class="white--text" fab small right top  @click.stop="dialog1 = true">
                            <v-icon>mdi-card-search-outline</v-icon>
                        </v-btn>

                        <div class="font-weight-light grey--text title mb-2">{{products[0].shorty}}</div>
                        <h3 class="display-1 font-weight-light orange--text mb-2">{{products[0].name}}</h3>
                        <h3 class="font-weight-light text-center"  style="background-color: lightyellow">{{products[0].price}}</h3>
                        <div class="font-weight-light title mb-2">{{products[0].description}}</div>
                    </v-card-text>
                    </v-card>
                </v-hover>  

                <v-dialog
                    v-model="dialog1"
                    max-width="800"
                    >
                    <v-card>                       
                        <v-carousel>
                            <v-carousel-item
                            v-for="(item,i) in products[0].images"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>


                        <v-card-text>
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>



            </v-col>      

        </v-row>

  </v-container>
</template>



<script>
export default {
    name: 'MainPage',
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            products: [
                { 
                    name: "Pure Aluminum Laptop Holder with FREE Pouch!",
                    shorty: "Perfect remedy for slouching..",
                    description: "Work comfortably with your laptop! Say no to neck and back pains after working!",
                    price: "Php 989.00",
                    image: "/images/laptopstand_4.jpg",
                    images: [
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                        },
                        {
                            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                        },
                    ],
                },
                { 
                    name: "Cellphone Holder Aluminum with Pouch",                    
                    shorty: "Love movies?",
                    description: "Perfect solution to rest your hands from holding your cellphone while watching movies or videos!",
                    price: "Php 189.00",
                    image: "/images/cellphone_stand_2.jpg"
                },
                 { 
                    name: "Cellphone Holder Aluminum with Pouch",                    
                    shorty: "Love movies?",
                    description: "Perfect solution to rest your hands from holding your cellphone while watching movies or videos!",
                    price: "Php 189.00",
                    image: "/images/cellphone_stand_2.jpg"
                },
                
                { 
                    name: "Face Mask - Ninja Type",
                    shorty: "Anti-virus and Anti-allergy",
                    description: "Protect yourself from viruses in the air while looking good with these awesome newly designed face mask!",
                    price: "Php 179.00",
                    image: "/images/laptopstand_4.jpg"
                }
            ]
        }
    },
}
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>