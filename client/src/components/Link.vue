<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="bg-gray-400 p-3 text-white flex justify-center items-center mt-10 w-[1200px]">
    <div class="mr-32">
      <h3 class="truncate max-w-[200px] w-full">{{ link.linkFrom }}</h3>
    </div>
    <div class="flex items-center justify-center gap-2 ml-20">
      <a id="output" class="truncate max-w-full" :href="link.linkTo">
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
    <div class="flex items-center gap-2 ml-72">
      <h3>{{ link.clicks }}</h3>
      <img class="w-[35px]" src="/icons/eyes.svg" alt="eye-icon" />
    </div>
    <div class="flex gap-2 ml-24">
      <button class="p-2 rounded-md hover:bg-gray-500 transition-colors" @click="handleDelete">
        <img class="w-[35px]" src="/icons/delete.svg" alt="delete" />
      </button>
      <button
        class="p-2 rounded-md hover:bg-gray-500 transition-colors edit-button"
        @click="handleEdit"
      >
        <img class="w-[40px]" src="/icons/edit-2-svgrepo-com.svg" alt="edit" />
      </button>
    </div>
  </main>
</template>

<script setup>
import Swal from 'sweetalert2'

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
    }
  })
}

const handleCopy = () => {
  copyToClipboard(props.link.linkTo)
}

const handleDelete = () => {
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
    }
  })
}

const handleEdit = () => {
  // Add your edit functionality here
}
</script>
