<template>
  <div class="flex justify-end ">
    <button class="h-6 w-6 rounded flex justify-center items-center bg-dim_green mr-2">
      <span
        class="mdi mdi-chevron-left"
      />
    </button>
    <router-link
      v-for="(index) in pagesLength"
      :key="index"
      to="/"
    >
      <div
        class="h-6 w-6 rounded flex justify-center items-center"
        :class="{ 'bg-dim_green': activePage === index }"
      >
        {{ index }}
      </div>
    </router-link>
    <button class="h-6 w-6 rounded flex justify-center items-center bg-dim_green ml-2">
      <span
        class="mdi mdi-chevron-right"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pagesLength = 5
const activePage = ref(1)
</script>

<style scoped></style>