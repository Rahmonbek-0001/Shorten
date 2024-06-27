<template>
  <section class="flex justify-center items-center h-[70vh]">
    <div
      class="bg-gray-500 p-5 w-[700px] mt-20 rounded-md h-[200px] grid items-center justify-center text-center"
    >
      <h2 class="text-3xl font-semibold text-white">Generate short link</h2>
      <form id="add-link-form" class="grid w-[700px] items-left justify-center gap-5 text-center">
        <input
          class="text-xl w-[600px] h-10 px-5 outline-none rounded-md"
          type="url"
          placeholder="Enter link"
          required
        /> 
        <button
          class="w-[150px] text-2xl h-10 bg-gray-700 hover:bg-gray-600 duration-1000 text-white rounded-md ml-[450px]"
        >
          Generate
        </button>
      </form>
    </div>
    <router-link
      to="/"
      class="btn bg-red-600 p-5 w-16 h-16 flex justify-center items-center rounded-full fixed right-10 bottom-10 duration-1000"
    >
      <h2 class="text-6xl pb-2 -mt-2 text-white">-</h2>
    </router-link>
  </section>
</template>

<style scoped>
.btn:hover {
  box-shadow: 0px 0px 15px 15px rgb(160 20 20);

  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(-360deg);
  }
}
</style>
