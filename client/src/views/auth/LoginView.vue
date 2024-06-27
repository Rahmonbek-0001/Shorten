<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { loginSchema } from '@/utils/validate'
import { userLogin } from '@/api/auth.js'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const password = ref('')
const showPassword = ref(false)

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}

const store = useUserStore()
const router = useRouter()
const handleSubmit = async (data) => {
  const { message, status, token, user } = await userLogin(data)
  if (status !== 200) {
    alert(message)
  } else {
    alert(message)
  }
  store.login({ ...user, token })
  router.push('/')
}
</script>

<template>
  <section class="grid justify-center items-center h-[100vh] text-center -mt-10">
    <div class="grid gap-10">
      <div class="text-3xl font-bold grid justify-center text-center gap-5 text-white">
        <img class="w-[150px] bg-gray-300 rounded-full p-5" src="/icons/favicon.svg" alt="" />
        <h2 class="text-gray-500">Login Page</h2>
      </div>
      <Form
        @submit="handleSubmit"
        :validation-schema="loginSchema"
        class="bg-gray-400 flex flex-col gap-2 p-5 text-left rounded-lg -mb-9"
      >
        <div class="grid">
          <Field name="email" type="email" class="logininput" placeholder="Enter Your Email" />
          <ErrorMessage class="text-red-500 font-semibold" name="email" />
        </div>
        <div class="password-field">
          <div>
            <Field
              :type="showPassword ? 'text' : 'password'"
              class="placeholder:text-gray-400 rounded-tl-md rounded-bl-md p-1 px-5 text-lg my-2 w-[344px] outline-none"
              name="password"
              placeholder="Enter your password"
              v-model="password"
            />
            <button
              type="button"
              class="toggle-password w-[40px] h-[36px] bg-gray-500 rounded-tr-md rounded-br-md"
              @click="togglePasswordVisibility"
            >
              <i :class="{ 'fa-eye': !showPassword, 'fa-eye-slash': showPassword }" class="fas"></i>
            </button>
          </div>
          <ErrorMessage class="text-red-500 font-semibold" name="password" />
        </div>
        <div class="flex justify-end items-center">
          <button
            type="submit"
            class="bg-white p-2 px-10 rounded-md duration-300 hover:bg-gray-300 text-md font-semibold"
          >
            Login
          </button>
        </div>
      </Form>
      <h4 class="text-gray-500 inline-block">
        If you haven't account
        <router-link class="underline" to="/register">Register</router-link>
      </h4>
    </div>
  </section>
</template>

<style>
.sdf {
  color: #008000;
}
</style>
