<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <router-link to="/" class="flex items-center gap-2 group">
          <Heart class="w-7 h-7 text-red-500" />
          <span class="text-xl font-bold text-white">我们的故事</span>
        </router-link>
        
        <div class="hidden md:flex items-center gap-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="text-gray-300 hover:text-red-500 font-medium transition-colors duration-300 relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-300 hover:text-red-500 transition-colors">
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
      <div class="px-4 py-4 space-y-3">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          @click="mobileMenuOpen = false"
          class="block py-2 px-4 text-gray-300 hover:text-red-500 hover:bg-gray-800/50 rounded-lg font-medium transition-colors"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Heart, Menu, X } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '相册', path: '/gallery' },
  { name: '一周年', path: '/story' },
  { name: '留言', path: '/contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
