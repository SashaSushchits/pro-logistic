<template>
  <div
    class="fixed h-screen w-screen bg-dim_popbg backdrop-blur-sm top-0 left-0 z-30 flex justify-center items-center"
    @click="close"
  >
    <div
      class="w-[650px] bg-white rounded-lg py-10 px-16 text-start relative"
      @click.stop
    >
      <span
        class="mdi mdi-close absolute top-1 right-2 text-2xl text-gray-500 cursor-pointer"
        @click="close"
      />
      <img
        src="@/assets/png/logo.png"
        class="h-24 mx-auto mb-5"
      >
      <p class="font-semibold text-3xl mb-8 text-center">
        Создайте аккаунт
      </p>
      <div class="grid grid-cols-6 gap-4 mb-6">
        <div class="col-span-3">
          <Input label="Наименование организации*" />
        </div>
        <div class="col-span-3">
          <Input label="УНП*" />
        </div>
        <div class="col-span-6">
          <p class="font-bold">
            Ответственное лицо
          </p>
        </div>
        <div class="col-span-2">
          <Input label="Фамилия*" />
        </div>
        <div class="col-span-2">
          <Input label="Имя*" />
        </div>
        <div class="col-span-2">
          <Input label="Отчество" />
        </div>
        <div class="col-span-3">
          <Input label="E-mail*" />
        </div>
        <div class="col-span-3">
          <Input label="Номер телефона*" />
        </div>
        <div class="col-span-3">
          <Input label="Пароль*" />
        </div>
        <div class="col-span-3">
          <Input label="Подтвердить пароль*" />
        </div>
        <div class="col-span-3">
          <img
            src="@/assets/png/capcha.png"
            class="mx-auto mb-5"
          >
        </div>
        <div class="col-span-3">
          <Input label="Символы с картинки*" />
        </div>
      </div>

      <button class="rounded w-full px-4 py-2 bg-gray-300 hover:bg-gray-400">
        Зарегистрироваться
      </button>
      <div class="flex justify-center items-center mt-6">
        <a
          class="text-text-gray-600 underline hover:no-underline"
          @click.prevent="openLogin"
        >Вход</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/shared/Input.vue'

const emit = defineEmits(['close', 'openLogin'])

function close() {
  emit('close')
}
function openLogin() {
  emit('openLogin')
}
</script>

<style scoped></style>