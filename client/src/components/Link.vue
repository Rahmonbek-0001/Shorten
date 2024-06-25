<template>
  <div class="bg-gray-400 p-3 text-white flex justify-around items-center mt-10 w-[1200px]">
    <div class="">
      <h3 class="truncate w-[200px]">{{ link.linkFrom }}</h3>
    </div>
    <div class="flex items-center">
      <a
        id="output"
        class="truncate w-[500px]"
        href="https://shorten-link-gii1.onrender.com/t/02QM64kXX"
      >
        {{ link.linkTo }}
      </a>
      <div>
        <button type="button">
          <img class="w-[35px]" src="../../public/icons/copy-icon.svg" alt="copy-icon" />
        </button>
      </div>
    </div>
    <div class="flex items-center">
      <h3>{{ link.clicks }}</h3>
      <img class="w-[35px]" src="/icons/eyes.svg" alt="eye-icon" />
    </div>
    <div class="flex gap-2">
      <button><img class="w-[35px]" src="../../public/icons/delete.svg" alt="delete" /></button>
      <button>
        <img class="w-[40px]" src="../../public/icons/edit-2-svgrepo-com.svg" alt="delete" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: {
    Type: Object
  }
})
</script>
