<template>
  <div class="static">
    <router-link
      to="/create"
      class="btn bg-green-600 p-5 w-16 h-16 flex justify-center items-center rounded-full fixed right-10 bottom-10 hover:bg-green-700 duration-1000 hover:animate-spin"
    >
      <h2 class="text-4xl -mt-2 text-white">+</h2>
    </router-link>
  </div>
</template>

<style scoped>
.btn:hover {
  box-shadow: 0px 0px 15px 15px #146e3c;
}
</style>
