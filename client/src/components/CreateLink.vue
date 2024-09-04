<script setup>
import { useMutation } from '@tanstack/vue-query'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { generateLink } from '@/api/api.link'
import { useUserStore } from '@/store/user'
import { urlSchema } from '@/utils/validate'
const { mutateAsync, isPending } = useMutation({
  mutationKey: ['newLinks'],
  mutationFn: generateLink,
  onSuccess: (message) => {
    console.log(message)
  },
  onError: (error) => {
    console.log(error.message)
  }
})
const store = useUserStore()
const handleSubmit = async (data) => {
  await mutateAsync({ token: store?.user?.token, urlData: data })
}
</script>
<template>
  <section class="flex justify-center items-center h-[70vh]">
    <div
      class="bg-gray-500 p-5 w-[700px] mt-10 rounded-md h-[200px] grid items-center justify-center text-center"
    >
      <h2 class="text-3xl font-semibold text-white">Generate short link</h2>
      <Form
        @submit="handleSubmit"
        :validation-schema="urlSchema"
        id="add-link-form"
        class="grid w-[700px] items-left justify-center gap-5 text-center"
      >
        <Field
          class="text-xl w-[600px] h-10 px-5 outline-none rounded-md"
          type="url"
          name="url"
          placeholder="Enter link"
          required
        />
        <div class="flex justify-between">
          <ErrorMessage class="text-red-500 font-semibold" name="url" />
          <div class=""></div>
          <button
            :disabled="isPending"
            class="w-[150px] disabled:cursor-not-allowed text-2xl h-10 bg-gray-700 hover:bg-gray-600 duration-1000 text-white rounded-md"
          >
            Generate
          </button>
        </div>
      </Form>
    </div>
    <router-link
      to="/"
      class="btn bg-red-600 p-5 w-16 h-16 flex justify-center items-center rounded-full fixed right-10 bottom-10 duration-1000 hover:animate-spin"
    >
      <h2 class="text-4xl -mt-2 text-white">-</h2>
    </router-link>
  </section>
</template>
<style scoped>
.btn:hover {
  box-shadow: 0px 0px 15px 15px rgb(160 20 20);
}
</style>
