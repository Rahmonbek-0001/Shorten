<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { loginSchema } from '@/utils/validate.js'
const handleSubmit = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json()
    console.log(resData)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
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
        class="bg-gray-400 flex flex-col gap-4 p-5 text-left rounded-lg -mb-9"
      >
        <div class="grid">
          <Field name="email" type="email" class="logininput" placeholder="Enter Your Email" />
          <ErrorMessage class="text-red-500 font-semibold" name="email" />
        </div>
        <div class="grid">
          <Field
            name="password"
            type="password"
            class="logininput"
            placeholder="Enter Your Password"
          />
          <ErrorMessage class="text-red-500 font-semibold" name="password" />
        </div>

        <div class="flex justify-end items-center">
          <button
            type="submit"
            class="bg-white p-2 px-10 rounded-md duration-300 hover:bg-gray-300"
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
  columns: #008000;
}
</style>
