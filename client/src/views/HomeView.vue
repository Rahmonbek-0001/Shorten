<script setup>
import Header from '@/components/Header.vue'
import Links from '@/components/Links.vue'
import CreateButton from '@/components/CreateButton.vue'
import { onMounted } from 'vue'

onMounted(()=>{
  console.log('run')
})
</script>

<template>
  <div>
    <Header />
    <Links />
    <CreateButton />
  </div>
</template>
