<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center mt-10 relative">
    <h2 v-if="isLoading">sabr qiling</h2>
    <Link v-for="link in links" :key="link.id" :link="{ ...link }" />
  </div>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query'
import { useUserStore } from '../store/user.js'
import Link from './Link.vue'
import { getAllLinks } from '../api/api.link.js'
const store = useUserStore()
const { data: links, isLoading } = useQuery({
  queryKey: ['links'],
  queryFn: () => getAllLinks(store.user.token)
})
</script>
