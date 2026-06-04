<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center transition-all duration-700" :style="{ backgroundImage: `url('${currentBackground}')` }"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
    
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-400/3 rounded-full blur-[100px]"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div class="mb-12">
        <div class="inline-flex items-center gap-3 mb-8">
          <span class="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></span>
          <Heart class="w-5 h-5 text-red-500" />
          <span class="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></span>
        </div>
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-8 leading-tight">
        <span class="block">我们在一起</span>
        <span class="block text-red-500 font-normal">{{ daysTogether }}</span>
        <span class="block">天了</span>
      </h1>
      
      <p class="text-gray-300 text-lg sm:text-xl font-light tracking-wide mb-16 max-w-xl mx-auto">
        From the moment we met, every day has been beautiful
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <router-link to="/gallery" class="group inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white rounded-full font-light tracking-widest text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-500">
          <span class="mr-3">GALLERY</span>
          <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </router-link>
        <router-link to="/story" class="inline-flex items-center justify-center px-10 py-4 bg-red-500 text-white rounded-full font-light tracking-widest text-sm hover:bg-red-600 transition-all duration-500 shadow-lg shadow-red-500/20">
          <Heart class="w-4 h-4 mr-3" />
          一周年纪念
        </router-link>
      </div>
    </div>

    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-gray-500 text-xs tracking-widest">SCROLL</span>
      <div class="w-px h-12 bg-gradient-to-b from-red-500 to-transparent animate-pulse"></div>
    </div>

    <button 
      @click="changeBackground"
      class="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20 group"
    >
      <ChevronRight class="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
    </button>
  </section>
  
  <section class="py-32 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20">
        <span class="inline-block text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Our Journey</span>
        <h2 class="text-3xl md:text-4xl font-light text-gray-900 tracking-wide mb-6">我们的时光</h2>
        <span class="w-16 h-px bg-red-500 inline-block"></span>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(moment, index) in specialMoments" :key="index" class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-lg bg-black mb-6">
            <img 
              :src="moment.image" 
              :alt="moment.title" 
              class="w-full h-56 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div class="space-y-2">
            <p class="text-red-500 text-xs tracking-widest">{{ moment.date }}</p>
            <h3 class="text-gray-900 font-light tracking-wide">{{ moment.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-32 px-6 bg-black">
    <div class="max-w-4xl mx-auto text-center">
      <Heart class="w-12 h-12 text-red-500 mx-auto mb-10" />
      <h2 class="text-3xl md:text-4xl font-light text-white tracking-wide mb-8">Always Together</h2>
      <p class="text-gray-400 text-lg font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
        "In this world, I've met so many people, but only you make me want to stay forever."
      </p>
      
      <div class="inline-flex items-center gap-8 text-gray-500 text-sm">
        <div class="text-center">
          <p class="text-3xl font-light text-white mb-1">{{ daysTogether }}</p>
          <p class="tracking-widest">DAYS</p>
        </div>
        <span class="w-px h-12 bg-gray-800"></span>
        <div class="text-center">
          <p class="text-3xl font-light text-white mb-1">12</p>
          <p class="tracking-widest">MONTHS</p>
        </div>
        <span class="w-px h-12 bg-gray-800"></span>
        <div class="text-center">
          <p class="text-3xl font-light text-white mb-1">1</p>
          <p class="tracking-widest">YEAR</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Heart, ArrowRight, ChevronRight } from 'lucide-vue-next'

const togetherDate = new Date('2025-06-07')
const today = new Date()
const daysTogether = ref(Math.floor((today - togetherDate) / (1000 * 60 * 60 * 24)))
const currentBgIndex = ref(Math.floor(Math.random() * 3))

const backgroundImages = [
  import.meta.env.BASE_URL + 'bg.jpg',
  import.meta.env.BASE_URL + 'bg2.jpg',
  import.meta.env.BASE_URL + 'bg3.jpg'
]

const currentBackground = computed(() => {
  return backgroundImages[currentBgIndex.value % backgroundImages.length]
})

const changeBackground = () => {
  currentBgIndex.value = (currentBgIndex.value + 1) % backgroundImages.length
}

const specialMoments = [
  {
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=romantic%20couple%20first%20date%20minimalist%20elegant&image_size=landscape_4_3',
    title: 'First Date',
    date: 'JAN 2023'
  },
  {
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20travel%20beach%20minimalist%20artistic&image_size=landscape_4_3',
    title: 'First Trip',
    date: 'MAY 2023'
  },
  {
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20anniversary%20dinner%20elegant%20minimalist&image_size=landscape_4_3',
    title: '1st Anniversary',
    date: 'JAN 2024'
  },
  {
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20sunset%20walk%20romantic%20minimalist&image_size=landscape_4_3',
    title: 'Sunset Walk',
    date: 'JUN 2024'
  }
]

onMounted(() => {
  setInterval(() => {
    const now = new Date()
    daysTogether.value = Math.floor((now - togetherDate) / (1000 * 60 * 60 * 24))
  }, 60000)
})
</script>
