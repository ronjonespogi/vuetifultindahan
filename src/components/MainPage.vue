
<template>
  <v-container class="fill-height" fluid style="min-height: 434px" >
        <v-row class="ml-4 mr-4">  
            <v-col v-for="product in products" :key="product.id" cols="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                    <v-img :aspect-ratio="16/9" :src="product.image" contain @click.stop="dialog1 = true">
                        <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                            {{ product.price }}
                        </div>
                        </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative;">
                        <v-btn absolute color="orange" class="white--text" fab small right top  @click.stop="product.dialog = true">
                            <v-icon>mdi-card-search-outline</v-icon>
                        </v-btn>

                        <div class="font-weight-light grey--text title mb-2">{{product.shorty}}</div>
                        <h3 class="display-1 font-weight-light orange--text mb-2">{{product.name}}</h3>
                        <h3 class="font-weight-light text-center"  style="background-color: lightyellow">{{product.price}}</h3>
                        <div class="font-weight-light title mb-2">{{product.description}}</div>
                    </v-card-text>
                    </v-card>
                </v-hover>  

                <v-dialog v-model="product.dialog" max-width="800">
                    <v-card>                       
                        <v-carousel>
                            <v-carousel-item
                                v-for="(item,i) in product.images"
                                :key="i"
                                :src="item.src"
                                contain
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                            >
                           
                            </v-carousel-item>

                        </v-carousel>

                        <v-card-text>
                            
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
                    id: 0,
                    dialog: false,
                    name: "Pure Aluminum Laptop Holder/Breather/Cooler with FREE Pouch!",
                    shorty: "Perfect Partner for your laptop.",
                    description: "Work comfortably with your laptop! Say no to neck and back pains after working.",
                    price: "Php 989.00",
                    image: "/images/laptopstand_4.jpg",
                    images: [
                        {
                            src: '/images/laptopstand_1.jpg',
                            explanation: 'Prevents your laptop from slipping through by its rubber stoppers.'
                        },
                        {
                            src: '/images/laptopstand_2.jpg',
                            explanation: 'Lets your laptop exhaust freely',
                        },
                        {
                            src: '/images/laptopstand_3.jpg',
                            explanation: 'The Aluminum Laptop Holder can become so compact and lightweight and you can bright it from home to work vice versa.'
                        },
                        {
                            src: '/images/laptopstand_4.jpg',
                            explanation: 'Made from pure aluminum, lightweigth, elegant and compact. Perfect for everyday use.'
                        },
                        {
                            src: '/images/laptopstand_5.jpg',
                            explanation: 'Can be used on anything that needs elevation.'
                        },
                        {
                            src: '/images/laptopstand_6.jpg',
                            explanation: 'Promotes good posture and prevents you from back pains and neck pains after long hours of work.'
                        },
                    ],
                },
                { 
                    id: 1,
                    dialog: false,
                    name: "Pure Aluminum Cellphone/Tab Holder",                    
                    shorty: "Love watching movies on your phone?",
                    description: "Perfect solution to rest your hands from holding your cellphone while watching movies or videos!",
                    price: "Php 299.00",
                    image: "/images/cellphone_stand_2.jpg",
                    images: [
                        {
                            src: '/images/cellphone_stand_1.jpg',
                            explanation: ''
                        },
                        {
                            src: '/images/cellphone_stand_2.jpg',
                            explanation: 'Lets your laptop exhaust freely',
                        },
                        {
                            src: '/images/cellphone_stand_3.jpg',
                            explanation: ''
                        },
                        {
                            src: '/images/cellphone_stand_4.jpg',
                            explanation: ''
                        },
                        {
                            src: '/images/cellphone_stand_5.jpg',
                            explanation: ''
                        },
                    ],
                },
                 { 
                    id: 2,
                    dialog: false,
                    name: "3 in 1 Magnetic USB Fast Charger",
                    shorty: "Enjoy hastle-free charging!",
                    description: "Stop pushing and pulling your chargers to your cellphone! This is what you need.",
                    price: "Php 289.00",
                    image: "/images/magnetic_01.jpg",
                    images: [
                        {
                            src: '/images/magnetic_01.jpg',
                            explanation: ''
                        },
                        {
                            src: '/images/magnetic_02.jpg',
                            explanation: '',
                        },
                        {
                            src: '/images/magnetic_03.jpg',
                            explanation: ''
                        }                        
                    ],
                },
                 { 
                    id: 3,
                    dialog: false,
                    name: "Wireless Pure Base Stereo Headset with Mic",                    
                    shorty: "Music on the road?",
                    description: "Play approx. 10 hours non-stop music and videos while on the go. Enjoy pure bass with active noise cancellation.",
                    price: "Php 1,499.00",
                    image: "/images/headset_4.jpg",
                    images: [
                        {
                            src: '/images/headset_1.jpg',
                            explanation: 'Prevents your laptop from slipping through by its rubber stoppers.'
                        },
                        {
                            src: '/images/headset_2.jpg',
                            explanation: 'Lets your laptop exhaust freely',
                        },
                        {
                            src: '/images/headset_3.jpg',
                            explanation: 'The Aluminum Laptop Holder can become so compact and lightweight and you can bright it from home to work vice versa.'
                        },
                        {
                            src: '/images/headset_4.jpg',
                            explanation: 'Made from pure aluminum, lightweigth, elegant and compact. Perfect for everyday use.'
                        },
                        {
                            src: '/images/headset_5.jpg',
                            explanation: 'Can be used on anything that needs elevation.'
                        },
                        {
                            src: '/images/headset_6.jpg',
                            explanation: 'Can be used on anything that needs elevation.'
                        },
                        {
                            src: '/images/headset_7.jpg',
                            explanation: 'Can be used on anything that needs elevation.'
                        },
                        {
                            src: '/images/headset_8.jpg',
                            explanation: 'Can be used on anything that needs elevation.'
                        },
                    ],
                },
               
                { 
                    id: 4,
                    dialog: false,
                    name: "Wireless Charger for Qi-enabled Smart Phones",
                    shorty: "Enjoy hastle-free charging!",
                    description: "Compatible with iOS and android qi enabled device like iphone8/8P/X/XR, Samsung S8/9/10.",
                    price: "Php 349.00",
                    image: "/images/wirelesscharger_1.jpg",
                    images: [
                        {
                            src: '/images/wirelesscharger_1.jpg',
                            explanation: 'Prevents your laptop from slipping through by its rubber stoppers.'
                        },
                        {
                            src: '/images/wirelesscharger_2.jpg',
                            explanation: 'Lets your laptop exhaust freely',
                        },
                        {
                            src: '/images/wirelesscharger_3.jpg',
                            explanation: 'The Aluminum Laptop Holder can become so compact and lightweight and you can bright it from home to work vice versa.'
                        },
                        {
                            src: '/images/wirelesscharger_4.jpg',
                            explanation: 'Made from pure aluminum, lightweigth, elegant and compact. Perfect for everyday use.'
                        },
                        {
                            src: '/images/wirelesscharger_5.jpg',
                            explanation: 'Made from pure aluminum, lightweigth, elegant and compact. Perfect for everyday use.'
                        },
                    ],
                },
                
                
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