<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { loginSchema } from '@/utils/validate'

const handleLogin = async (data) => {
  console.log(data)
  const user = { email: 'test@gmail.com', password: 'test123' }
  try {
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const { message, user } = await response.json()

    if (response.status === 201) {
      //
      console.log('Success')
    }
    console.log()
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section class="grid justify-center items-center h-[100vh] text-center -mt-10">
    <div class="grid gap-10">
      <div class="text-3xl font-bold grid justify-center text-center gap-5 text-white">
        <img class="w-[150px] bg-white rounded-full p-5" src="/icons/favicon.svg" alt="" />
        <h2>Login Page</h2>
      </div>
      <Form
        @submit.prevent="handleLogin"
        class="bg-gray-600 flex flex-col gap-4 p-5 text-left rounded-lg -mb-9"
        :validation-schema="loginSchema"
      >
        <div>
          <Field name="email" type="email" class="logininput" placeholder="Enter Your Email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            class="logininput"
            placeholder="Enter Your Password"
          />
          <ErrorMessage name="password" />
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
      <h4 class="text-white inline-block">
        If you haven't account
        <router-link class="underline" to="/register">Register</router-link>
      </h4>
    </div>
  </section>
</template>
