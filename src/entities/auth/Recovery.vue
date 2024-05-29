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
        class=" mx-auto mb-5"
      >
      <p class="font-semibold text-3xl mb-5 text-center">
        Восстановить пароль
      </p>
      <Input
        label="Логин (e-mail)*"
        class="mb-6"
      />
      <!-- <Input label="Пароль*" class="mb-6" /> -->
      <button class="rounded text-white w-full px-4 py-2 bg-gray-300 hover:bg-gray-400">
        Получить код
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/shared/Input.vue'

const emit = defineEmits(['close', 'openReg'])

function close() {
  emit('close')
}
</script>

<style scoped></style>