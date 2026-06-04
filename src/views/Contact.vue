<template>
  <section class="py-24 px-4 pt-32 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <span class="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-6">
          留言板
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          爱的留言
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          想对TA说什么？在这里写下你的心里话
        </p>
      </div>
      
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">写留言</h2>
        <form @submit.prevent="addMessage" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">你的昵称</label>
              <input 
                v-model="newMessage.name"
                type="text" 
                class="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="想怎么称呼你"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">写给谁</label>
              <select 
                v-model="newMessage.to"
                class="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white"
                required
              >
                <option value="">选择</option>
                <option value="他">他</option>
                <option value="她">她</option>
                <option value="亲爱的">亲爱的</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">留言内容</label>
            <textarea 
              v-model="newMessage.content"
              rows="5"
              class="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
              placeholder="写下你想说的话..."
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="w-full bg-red-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            发送留言
          </button>
        </form>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">留言墙</h2>
        <div class="space-y-6">
          <div 
            v-for="(message, index) in messages" 
            :key="index" 
            class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Heart class="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-lg">{{ message.name }}</p>
                  <p class="text-gray-500">写给 {{ message.to }}</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm">{{ message.date }}</p>
            </div>
            <p class="text-gray-700 text-lg leading-relaxed">{{ message.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Heart } from 'lucide-vue-next'

const newMessage = ref({
  name: '',
  to: '',
  content: ''
})

const messages = ref([
  {
    name: '他',
    to: '她',
    content: '遇见你是我这辈子最幸运的事，希望我们能一直这样幸福下去！',
    date: '2024.06.01'
  },
  {
    name: '她',
    to: '他',
    content: '谢谢你一直这么包容我，我爱你！',
    date: '2024.05.20'
  }
])

const addMessage = () => {
  const date = new Date()
  const dateStr = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
  
  messages.value.unshift({
    ...newMessage.value,
    date: dateStr
  })
  
  newMessage.value = {
    name: '',
    to: '',
    content: ''
  }
}
</script>
