<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="bg-gray-600 h-[80px] flex justify-around items-center">
    <!-- left -->
    <a href="" class="flex items-center">
      <img class="w-16" src="../../public/icons/logo.svg" alt="" />
      <h3 class="text-white text-xl font-semibold -ml-3">Shorten link</h3>
    </a>
    <!-- center -->
    <div class="text-white text-2xl font-semibold truncate w-auto">List of links</div>
    <!-- right -->
    <div class="flex justify-center items-center text-white gap-3">
      <h3 class="text-xl">Profile</h3>
      <button>
        <img
          class="w-10"
          src="../../public/icons/profile-user-avatar-man-person-svgrepo-com.svg"
          alt=""
        />
      </button>
    </div>
  </header>
</template>
