<script setup>
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>
<template>
  <div>
    <RouterView />
    <VueQueryDevtools />
  </div>
</template>
