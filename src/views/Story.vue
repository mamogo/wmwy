<template>
  <div class="relative">
    <section 
      v-for="(month, index) in months" 
      :key="index"
      class="min-h-screen flex items-center justify-center relative overflow-hidden scroll-snap-align-start"
      :style="{ backgroundColor: month.bgColor }"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div 
          class="absolute inset-0 opacity-40"
          :style="{
            background: `url('${month.image}') center/cover no-repeat`,
            filter: 'blur(30px)'
          }"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-red-500 text-white text-sm font-light tracking-widest rounded-full">
              {{ month.month }}
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            {{ month.title }}
          </h2>
          <p class="text-gray-300 text-lg font-light leading-relaxed">
            {{ month.description }}
          </p>
        </div>
        
        <div class="relative">
          <div class="absolute -top-8 -left-8 w-full h-full rounded-3xl bg-red-500/10 -z-10"></div>
          <img 
            :src="month.image" 
            :alt="month.title"
            class="w-full aspect-[3/4] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>
      
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center" v-if="index < months.length - 1">
        <p class="text-gray-400 text-xs tracking-widest mb-2">SCROLL DOWN</p>
        <div class="animate-bounce">
          <ChevronDown class="w-6 h-6 text-white/50 mx-auto" />
        </div>
      </div>
    </section>
    
    <section class="min-h-screen flex items-center justify-center bg-black scroll-snap-align-start">
      <div class="text-center px-6 max-w-3xl mx-auto">
        <Heart class="w-16 h-16 text-red-500 mx-auto mb-10" />
        <h2 class="text-4xl md:text-5xl font-light text-white mb-8 tracking-wide">一周年快乐</h2>
        <p class="text-gray-400 text-xl font-light leading-relaxed mb-12">
          365天，感谢有你。未来还有很多个一年，我们继续走下去。
        </p>
        <div class="inline-flex items-center gap-8 text-gray-500 text-sm">
          <div class="text-center">
            <p class="text-4xl font-light text-white mb-2">365</p>
            <p class="tracking-widest">DAYS</p>
          </div>
          <span class="w-px h-16 bg-gray-800"></span>
          <div class="text-center">
            <p class="text-4xl font-light text-white mb-2">12</p>
            <p class="tracking-widest">MONTHS</p>
          </div>
          <span class="w-px h-16 bg-gray-800"></span>
          <div class="text-center">
            <p class="text-4xl font-light text-white mb-2">1</p>
            <p class="tracking-widest">YEAR</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Heart, ChevronDown } from 'lucide-vue-next'

const months = [
  {
    month: 'MONTH 01',
    title: '初见',
    description: '我们的故事从这里开始，一切都是那么美好。',
    bgColor: '#1a1a1a',
    image: import.meta.env.BASE_URL + '1.jpg'
  },
  {
    month: 'MONTH 02',
    title: '相知',
    description: '越来越了解彼此，每一天都充满惊喜。',
    bgColor: '#151515',
    image: import.meta.env.BASE_URL + '2.jpg'
  },
  {
    month: 'MONTH 03',
    title: '心动',
    description: '春天来了，我们的感情也在升温。',
    bgColor: '#1a1a1a',
    image: import.meta.env.BASE_URL + '3.jpg'
  },
  {
    month: 'MONTH 04',
    title: '旅行',
    description: '第一次一起旅行，留下了美好的回忆。',
    bgColor: '#151515',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20travel%20beach%20vacation%20romantic&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 05',
    title: '告白',
    description: '520，特别的日子，特别的你。',
    bgColor: '#1a1a1a',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=romantic%20couple%20valentines%20day%20elegant%20red&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 06',
    title: '半年',
    description: '半年了，时间过得真快，爱你如初。',
    bgColor: '#151515',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20half%20year%20anniversary%20romantic%20elegant&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 07',
    title: '盛夏',
    description: '炎热的夏天，有你在身边就很凉快。',
    bgColor: '#1a1a1a',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20summer%20beach%20sunset%20romantic&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 08',
    title: '见家长',
    description: '紧张但开心的一天，我们都在为未来努力。',
    bgColor: '#151515',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20meeting%20parents%20family%20warm%20elegant&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 09',
    title: '金秋',
    description: '秋天，我们一起看落叶，感受季节的美好。',
    bgColor: '#1a1a1a',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20autumn%20leaves%20romantic%20warm%20light&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 10',
    title: '陪伴',
    description: '每一个平凡的日子，因为有你而变得不平凡。',
    bgColor: '#151515',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20daily%20life%20cozy%20romantic%20elegant&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 11',
    title: '期待',
    description: '期待着一周年的到来，期待我们的未来。',
    bgColor: '#1a1a1a',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20anticipation%20romantic%20soft%20light&image_size=portrait_4_3'
  },
  {
    month: 'MONTH 12',
    title: '相守',
    description: '365天，感谢有你。未来的日子，继续一起走下去。',
    bgColor: '#151515',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20one%20year%20anniversary%20celebration%20romantic%20elegant&image_size=portrait_4_3'
  }
]
</script>
