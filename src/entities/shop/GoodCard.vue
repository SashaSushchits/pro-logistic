<template>
  <div class="rounded-md bg-dim_light_gray p-4">
    <div class="flex justify-between items-center mb-4">
      <button
        class="rounded-full border px-8 py-1.5 border-dim_dark hover:text-white hover:bg-gray-400"
      >
        Перейти
      </button>
      <span class="mdi mdi-heart text-2xl text-red-600" />
    </div>
    <div class="h-56 bg-no-repeat bg-contain bg-center bg-[url('@/assets/png/transportation-cargo-containe.png')] mb-6" />
    <h4 class="font-bold text-xl mb-4">
      {{ title }}
    </h4>
    <p
      class="mb-4"
      v-html="description"
    />
    <p class="text-sm">
      08.02.2023
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: String;
  description: String;
}
defineProps<Props>();
</script>

<style scoped></style>