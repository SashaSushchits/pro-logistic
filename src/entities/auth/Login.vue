<template>
  <div
    class="fixed h-screen w-screen bg-dim_popbg backdrop-blur-sm top-0 left-0 z-30 flex justify-center items-center"
    @click="close"
  >
    <div
      class="w-[500px] bg-white rounded-lg py-10 px-16 text-start relative"
      @click.stop
    >
      <span
        class="mdi mdi-close absolute top-1 right-2 text-2xl text-gray-500 cursor-pointer"
        @click="close"
      />
      <img
        src="@/assets/png/logo.png"
        class="h-26 mx-auto mb-5"
      >
      <p class="font-semibold text-3xl mb-5 text-center">
        Вход в аккаунт
      </p>
      <Input
        label="Логин (e-mail)*"
        class="mb-6"
      />
      <Input
        label="Пароль*"
        class="mb-6"
      />
      <button
        class="rounded w-full px-4 py-2 bg-gray-300 hover:bg-gray-400"
        @click="close"
      >
        Войти
      </button>
      <div class="flex justify-between items-center mt-6">
        <a
          class="text-gray-600 underline hover:no-underline"
          @click.prevent="openReg"
        >Регистрация</a>
        <a
          class="text-gray-600 underline hover:no-underline"
          @click.prevent="openRecovery"
        >Забыли пароль?</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/shared/Input.vue'

const emit = defineEmits(['close', 'openReg', 'openRecovery'])

function close() {
  emit('close')
}
function openReg() {
  emit('openReg')
}
function openRecovery() {
  emit('openRecovery')
}
</script>

<style scoped></style>