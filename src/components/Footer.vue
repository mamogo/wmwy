<template>
  <footer class="bg-black text-gray-300 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <Heart class="w-8 h-8 text-red-500" />
            <span class="text-2xl font-bold text-white">我们的故事</span>
          </div>
          <p class="text-gray-400 mb-6 max-w-md leading-relaxed">
            记录我们的点点滴滴，珍藏我们的回忆。感谢你出现在我的生命里。
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <Heart class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <MessageCircle class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <Heart class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">快速链接</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-red-500 transition-colors">首页</a></li>
            <li><a href="#" class="text-gray-400 hover:text-red-500 transition-colors">关于我们</a></li>
            <li><a href="#" class="text-gray-400 hover:text-red-500 transition-colors">相册</a></li>
            <li><a href="#" class="text-gray-400 hover:text-red-500 transition-colors">一周年</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">在一起</h3>
          <div class="space-y-3 text-gray-400">
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4 text-red-500" />
              <span>2025.06.07</span>
            </div>
            <div class="flex items-center gap-2">
              <Heart class="w-4 h-4 text-red-500" />
              <span>{{ daysTogether }} 天</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-500">&copy; 2024 我们的故事 · 用爱创造美好回忆</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Heart, MessageCircle, Calendar } from 'lucide-vue-next'

const togetherDate = new Date('2025-06-07')
const daysTogether = ref(Math.floor((new Date() - togetherDate) / (1000 * 60 * 60 * 24)))

onMounted(() => {
  setInterval(() => {
    const now = new Date()
    daysTogether.value = Math.floor((now - togetherDate) / (1000 * 60 * 60 * 24))
  }, 60000)
})
</script>
