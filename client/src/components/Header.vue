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
      <div class="flex items-center">
        <button @click="toggle = !toggle">
          <img
            class="w-16"
            src="../../public/icons/profile-user-avatar-man-person-svgrepo-com.svg"
            alt=""
          />
        </button>
        <div v-if="toggle"></div>
        <div
          v-else
          class="bg-white px-5 h-[45px] flex items-center rounded-xl text-black font-bold text-xl duration-300 hover:bg-gray-300"
        >
          <router-link to="/login">Log out</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      p1Exists: false,
      p2Exists: false
    }
  },
  computed: {
    btn1Text() {
      if(this.p1Exists) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    },
    btn2Text() {
      if(this.p2Exists) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    }
  }
}
</script>
