<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center mt-10 relative">
    <h2 v-if="isLoading">sabr qiling</h2>
  <div class="flex container mx-auto  flex-col justify-center items-center mt-10 relative">
    <div
      v-if="isLoading"
      class="border-2 border-black border-l-white w-14 h-14 rounded-full animate-spin flex justify-center items-center"
    >
    </div>
    <Link v-for="link in links" :key="link.id" :link="{ ...link }" />
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
