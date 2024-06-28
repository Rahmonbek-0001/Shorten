<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center mt-10 relative">
    <div class="flex container mx-auto flex-col justify-center items-center mt-10 relative">
      <div
        v-if="isLoading"
        class="border-2 border-black border-l-white w-14 h-14 rounded-full animate-spin flex justify-center items-center"
      ></div>
      <Link v-for="link in links" :key="link.id" :link="{ ...link }" />
    </div>
  </div>
</template>
<script setup>
import { useQuery } from '@tanstack/vue-query'
import { useUserStore } from '../store/user'
import Link from './Link.vue'
import { getAllLinks } from '../api/api.link'
const store = useUserStore()
const { data: links, isLoading } = useQuery({
  queryKey: ['links'],
  queryFn: () => getAllLinks(store.user.token)
})
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin1 {
  animation: spin1 0.8s linear infinite both;
}
@keyframes spin1 {
  to {
    transform: rotate(-360deg);
  }
}
</style>
