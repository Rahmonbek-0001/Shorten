<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
<<<<<<< HEAD
import { registerSchema } from '../../utils/validate.js'
const handleSubmit = async (data) => {
  try {
    console.log(data)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
=======
import { registerSchema } from '@/utils/validate.js'
import { userRegister } from '@/api/auth'
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
  const { message, status, token, user } = await userRegister(data)
  if (status !== 200) {
    alert(message)
  } else {
    alert(message)
  }
  store.login({ ...user, token })
  router.push('/')
>>>>>>> 99d5452e8c544ed2c8cbc24abc571530ecd91bb7
}
</script>
<template>
  <section class="grid justify-center items-center h-[100vh] text-center -mt-10">
    <div class="grid gap-10">
      <div class="text-3xl font-bold grid justify-center text-center gap-5 text-gray-500">
        <img class="w-[150px] bg-gray-300 rounded-full p-5" src="/icons/favicon.svg " alt="" />
        <h2>Register</h2>
      </div>
      <Form
        @submit="handleSubmit"
        :validation-schema="registerSchema"
        class="bg-gray-400 p-5 grid text-left rounded-lg -mb-9"
      >
        <div class="grid">
          <Field class="logininput" type="name" name="name" placeholder="Enter your User name" />
          <ErrorMessage class="text-red-500 font-semibold" name="name" />
        </div>
        <div class="grid">
          <Field class="logininput" type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage class="text-red-500 font-semibold" name="email" />
        </div>
        <div class="password-field">
          <div >
            <Field
              :type="showPassword ? 'text' : 'password'"
              class="placeholder:text-gray-400 rounded-tl-md rounded-bl-md p-1 px-5 text-lg my-2 w-[344px] outline-none"
              name="password"
              placeholder="Enter your password"
              v-model="password"
            />
            <button type="button" class="toggle-password w-[40px] h-[36px] bg-gray-500 rounded-tr-md rounded-br-md" @click="togglePasswordVisibility">
              <i :class="{ 'fa-eye': !showPassword, 'fa-eye-slash': showPassword }" class="fas"></i>
            </button>
          </div>
          <ErrorMessage class="text-red-500 font-semibold" name="password" />
        </div>
        <br />
        <div class="flex justify-end items-center">
          <button
            type="submit"
            class="bg-white p-2 px-10 rounded-md duration-300 hover:px-11 text-md font-semibold hover:bg-gray-300"
          >
            Register
          </button>
        </div>
      </Form>
      <h4 class="text-gray-500 inline-block">
        If you have account
        <router-link class="underline" to="/login">Login</router-link>
      </h4>
    </div>
  </section>
</template>
