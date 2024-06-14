<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center mt-10 relative">
    <div class="bg-gray-400 p-3 text-white flex justify-around items-center mt-10 w-[1200px]">
      <div class="">
        <h3 class="truncate w-[200px]">https://shortn-link.netlify.app</h3>
      </div>
      <div class="flex items-center">
        <a
          id="output"
          class="truncate w-[500px]"
          href="https://shorten-link-gii1.onrender.com/t/02QM64kXX"
          >https://www.google.com/search?q=fasdvxzewfdsvcxzEWADVFCZ&rlz=1C1CHBD_enUZ1065UZ1065&oq=fasdvxzewfdsvcxzEWADVFCZ&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM1MDFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8</a
        >
        <div>
          <button @click="copyText()">
            <img class="w-[35px]" src="../../public/icons/copy-icon.svg" alt="copy-icon" />
          </button>
        </div>
      </div>
      <div class="flex items-center">
        <h3>42</h3>
        <img class="w-[35px]" src="/icons/eyes.svg" alt="eye-icon" />
      </div>
      <div class="flex gap-2">
        <button><img class="w-[35px]" src="../../public/icons/delete.svg" alt="delete" /></button>
        <button><img class="w-[40px]" src="../../public/icons/edit-2-svgrepo-com.svg" alt="delete" /></button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
