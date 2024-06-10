<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center mt-10">
    <div class="bg-cyan-600 p-3 text-white flex justify-around items-center mt-10 w-[1200px]">
      <div class="">
        <h3 class="truncate w-[200px]">https://shortn-link.netlify.app</h3>
      </div>
      <div class="flex items-center">
        <a id="output" href="https://shorten-link-gii1.onrender.com/t/02QM64kXX"></a>
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
      <div class="">
        <button><img class="w-[35px]" src="../../public/icons/delete.svg" alt="delete" /></button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
