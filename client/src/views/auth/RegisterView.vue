<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { registerSchema } from '@/utils/validate.js'
import { userRegister } from '@/api/auth'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
const store = useUserStore()
const router = useRouter()
const handleSubmit = async (data) => {
  const { message, status, token, user } = await userRegister(data)
  if (status !== 200) {
    alert(message)
  }
  store.login({ ...user, token })
  router.push('/')
  alert(message)
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
          <Field class="logininput" type="name" name="name" placeholder="Enter your name" />
          <ErrorMessage class="text-red-500 font-semibold" name="name" />
        </div>
        <div class="grid">
          <Field class="logininput" type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage class="text-red-500 font-semibold" name="email" />
        </div>
        <div class="grid">
          <Field
            type="password"
            class="logininput"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage class="text-red-500 font-semibold" name="password" />
        </div>

        <br />
        <div class="flex justify-end items-center">
          <button
            type="submit"
            class="bg-white p-2 px-10 rounded-md duration-300 hover:px-11 hover:bg-gray-300"
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
