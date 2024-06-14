<script setup>
import { Form, Field } from 'vee-validate'
// import { registerSchema } from '@/utils/validate'
</script>
<template>
  <section class="grid justify-center items-center h-[100vh] text-center -mt-10">
    <div class="grid gap-10">
      <div class="text-3xl font-bold grid justify-center text-center gap-5 text-gray-500">
        <img
          class="w-[150px] bg-gray-300 rounded-full p-5"
          src="../../../public/icons/favicon.svg "
          alt=""
        />
        <h2>Register</h2>
      </div>
      <Form class="bg-gray-400 p-5 grid text-left rounded-lg -mb-9">
        <div class="">
          <Field class="logininput" type="name" name="name" placeholder="Enter your name" />
          <ErrorMessage name="name" />
        </div>
        <div class="">
          <Field class="logininput" type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" />
        </div>
        <div class="">
          <Field
            class="logininput"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" />
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
