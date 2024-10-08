<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="bg-gray-400 p-3 text-white flex justify-between px-10 items-center mt-10 w-[1300px]">
    <div class="">
      <h3 class="truncate w-[200px]">{{ link.linkFrom }}</h3>
    </div>
    <div class="flex items-center justify-center gap-2">
      <a id="output" class="max-w-full" :href="link.linkTo">
        {{ link.linkTo }}
      </a>
      <button
        type="button"
        title="Copy"
        class="p-2 rounded-md hover:bg-gray-500 transition-colors copy-button"
        @click="handleCopy"
      >
        <img class="w-[35px]" src="/icons/copy-icon.svg" alt="copy-icon" />
      </button>
    </div>
    <div class="flex">
      <div class="flex items-center gap-2">
        <h3>{{ link.clicks }}</h3>
        <img class="w-[35px]" src="/icons/eyes.svg" alt="eye-icon" />
      </div>
      <div class="">
        <button
          class="p-2 rounded-md hover:bg-gray-500 transition-colors"
          @click="handleDelete(link._id)"
        >
          <img class="w-[35px]" src="/icons/delete.svg" alt="delete" />
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { deleteLink } from '@/api/api.link'
import Swal from 'sweetalert2'
import { useUserStore } from '@/store/user'
const queryClient = useQueryClient()

const store = useUserStore()
const props = defineProps({
  link: {
    type: Object,
    required: true
  }
})
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  Swal.fire({
    title: 'Link copied!',
    icon: 'success',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('click', Swal.close)
      toast.addEventListener('mouseenter', Swal.stopTimer)
    }
  })
}
const { mutateAsync } = useMutation({
  mutationFn: deleteLink,
  mutationKey: ['link'],
  onSuccess: (message) => {
    console.log(message)
    queryClient.invalidateQueries({ queryKey: ['links'] })
  },
  onError: (error) => {
    console.log(error.message)
  }
})
const handleCopy = () => {
  copyToClipboard(props.link.linkTo)
}
const handleDelete = async (linkId) => {
  await mutateAsync({ token: store.user?.token, linkId })
  Swal.fire({
    title: 'Short link deleted!',
    icon: 'error',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('click', Swal.close)
      toast.addEventListener('mouseover', Swal.stopTimer)
    }
  })
}
</script>
