<template>
  <section class="flex justify-center items-center h-[70vh]">
    <div
      class="bg-gray-500 p-5 w-[700px] mt-10 rounded-md h-[200px] grid items-center justify-center text-center"
    >
      <h2 class="text-3xl font-semibold text-white">Generate short link</h2>
      <form id="add-link-form" class="flex w-[550px]">
        <input
          class="text-xl w-3/4 h-10 px-5 outline-none rounded-tl-xl rounded-bl-xl"
          type="text"
          placeholder="Enter link"
        />
        <button
          class="w-[150px] text-2xl h-10 bg-gray-700 hover:bg-gray-600 duration-1000 text-white rounded-tr-xl rounded-br-xl"
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
