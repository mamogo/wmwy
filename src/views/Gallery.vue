<template>
  <section class="py-24 px-4 pt-32 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-6">
          我们的相册
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          美好回忆
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          每一张照片，都是我们爱的证明
        </p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-3 mb-16">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="activeCategory = category.id"
          class="px-6 py-2 rounded-full font-medium transition-all duration-300"
          :class="activeCategory === category.id 
            ? 'bg-red-500 text-white shadow-lg' 
            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'"
        >
          {{ category.name }}
        </button>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(photo, index) in filteredPhotos" 
          :key="index" 
          class="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
          @click="openLightbox(index)"
        >
          <img 
            :src="photo.image" 
            :alt="photo.title" 
            class="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-white font-semibold text-xl mb-2">{{ photo.title }}</h3>
              <p class="text-white/70">{{ photo.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <div v-if="lightboxOpen" class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" @click="closeLightbox">
    <button @click="closeLightbox" class="absolute top-6 right-6 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
      <X class="w-6 h-6 text-white" />
    </button>
    
    <button @click.stop="prevImage" class="absolute left-6 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
      <ChevronLeft class="w-6 h-6 text-white" />
    </button>
    
    <button @click.stop="nextImage" class="absolute right-6 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
      <ChevronRight class="w-6 h-6 text-white" />
    </button>
    
    <img 
      :src="filteredPhotos[currentIndex]?.image" 
      :alt="filteredPhotos[currentIndex]?.title" 
      class="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
    />
    
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
      <h3 class="text-2xl font-semibold mb-2">{{ filteredPhotos[currentIndex]?.title }}</h3>
      <p class="text-white/70">{{ filteredPhotos[currentIndex]?.date }}</p>
      <p class="text-white/60 text-sm mt-2">{{ filteredPhotos[currentIndex]?.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const activeCategory = ref('all')
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const categories = [
  { id: 'all', name: '全部' },
  { id: 'travel', name: '旅行' },
  { id: 'daily', name: '日常' },
  { id: 'special', name: '特别时刻' }
]

const photos = [
  {
    category: 'special',
    image: './1.jpg',
    title: '第一张照片',
    date: '2024.01.01',
    description: '美好的回忆'
  },
  {
    category: 'special',
    image: './2.jpg',
    title: '第二张照片',
    date: '2024.02.01',
    description: '甜蜜的时光'
  },
  {
    category: 'special',
    image: './3.jpg',
    title: '第三张照片',
    date: '2024.03.01',
    description: '爱的见证'
  },
  {
    category: 'special',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=romantic%20couple%20first%20date%20cafe%20elegant%20style&image_size=portrait_4_3',
    title: '第一次约会',
    date: '2023.01.01',
    description: '我们的故事从这里开始'
  },
  {
    category: 'travel',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20travel%20beach%20vacation%20elegant&image_size=portrait_4_3',
    title: '海边旅行',
    date: '2023.05.20',
    description: '第一次一起旅行'
  },
  {
    category: 'daily',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20cooking%20together%20kitchen%20warm%20elegant&image_size=portrait_4_3',
    title: '一起做饭',
    date: '2023.06.15',
    description: '虽然有点焦，但很开心'
  },
  {
    category: 'special',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20anniversary%20celebration%20romantic%20elegant&image_size=portrait_4_3',
    title: '一周年',
    date: '2024.01.01',
    description: '时间过得真快，爱你如初'
  },
  {
    category: 'travel',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20mountain%20hiking%20adventure%20elegant&image_size=portrait_4_3',
    title: '爬山',
    date: '2024.03.10',
    description: '累并快乐着'
  },
  {
    category: 'daily',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20watching%20movie%20home%20cozy%20elegant&image_size=portrait_4_3',
    title: '看电影',
    date: '2024.04.05',
    description: '周末的悠闲时光'
  },
  {
    category: 'travel',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20city%20walk%20street%20photography%20elegant&image_size=portrait_4_3',
    title: '城市漫步',
    date: '2024.04.20',
    description: '漫无目的，却很幸福'
  },
  {
    category: 'special',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=romantic%20couple%20birthday%20celebration%20elegant&image_size=portrait_4_3',
    title: '你的生日',
    date: '2024.05.15',
    description: '愿你每天都这么开心'
  },
  {
    category: 'daily',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20sunset%20walk%20park%20holding%20hands%20elegant&image_size=portrait_4_3',
    title: '日落散步',
    date: '2024.06.01',
    description: '最美的不是日落，是和你一起'
  }
]

const filteredPhotos = computed(() => {
  if (activeCategory.value === 'all') return photos
  return photos.filter(photo => photo.category === activeCategory.value)
})

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : filteredPhotos.value.length - 1
}

const nextImage = () => {
  currentIndex.value = currentIndex.value < filteredPhotos.value.length - 1 ? currentIndex.value + 1 : 0
}
</script>
