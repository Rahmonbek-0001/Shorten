<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header
    class="bg-gray-400 h-[80px] min-[500px]:w-[850px] sm:w-[750px] md:w-[100vw] flex justify-around items-center mx-auto"
  >
    <!-- left -->
    <a href="" class="flex items-center">
      <img class="w-16" src="../../public/icons/logo.svg" alt="logo" />
      <h3 class="text-white text-xl font-semibold -ml-3">Shorten link</h3>
    </a>
    <!-- center -->
    <div class="text-white text-2xl font-semibold truncate w-auto">List of links</div>
    <!-- right -->
    <div class="flex justify-center items-center text-white gap-3">
      <div class="grid items-center">
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
          class="bg-white px-5 h-[45px] flex items-center fixed mt-[110px] -ml-[35px] rounded-md cursor-pointer text-black font-bold text-xl duration-300 hover:bg-gray-300"
          :title="store?.user?.name"
        >
          <button @click="logout" type="button" class="flex items-center gap-1">
            <img class="w-5" src="/icons/log_out.svg" alt="log out" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
let toggle = ref(true)
const store = useUserStore()
const router = useRouter()
const logout = () => {
  store.logout()
  router.push('login')
}
</script>
