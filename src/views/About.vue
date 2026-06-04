<template>
  <section class="py-24 px-4 pt-32 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20">
        <span class="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-6">
          关于我们
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          我们两个人
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          两个平凡的人，一段不平凡的爱情
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div class="bg-white rounded-3xl p-10 shadow-lg">
          <div class="text-center mb-8">
            <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <User class="w-12 h-12 text-gray-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">他</h2>
            <p class="text-red-500 font-medium">阳光开朗 · 温柔体贴</p>
          </div>
          <p class="text-gray-600 text-center leading-relaxed">
            喜欢看电影、听音乐，喜欢和你在一起的每一分钟。
          </p>
        </div>
        
        <div class="bg-white rounded-3xl p-10 shadow-lg">
          <div class="text-center mb-8">
            <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <User class="w-12 h-12 text-gray-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">她</h2>
            <p class="text-red-500 font-medium">可爱活泼 · 善良温柔</p>
          </div>
          <p class="text-gray-600 text-center leading-relaxed">
            喜欢拍照、吃美食，喜欢和你一起看遍世界。
          </p>
        </div>
      </div>
      
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">我们的小爱好</h2>
        <p class="text-gray-600 mb-12">和你在一起，做什么都开心</p>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div 
          v-for="hobby in hobbies" 
          :key="hobby" 
          class="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <Heart class="w-8 h-8 text-red-500 mx-auto mb-4" />
          <p class="text-gray-900 font-medium">{{ hobby }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart, User } from 'lucide-vue-next'

const hobbies = [
  '一起看电影',
  '一起旅行',
  '一起做饭',
  '一起散步',
  '一起拍照',
  '一起打游戏',
  '一起吃美食',
  '一起看日出'
]
</script>
