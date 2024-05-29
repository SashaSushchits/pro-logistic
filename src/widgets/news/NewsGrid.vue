<template>
  <div class="grid grid-cols-3 gap-6 pb-28">
    <div class="col-span-3">
      <h2 class="text-4xl font-bold">
        Новости
      </h2>
    </div>
    <div
      v-for="i in 9"
      :key="i"
      class="col-span-1"
    >
      <NewsCard />
    </div>
    <div class="col-span-3">
      <Pagination />
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsCard from '@/entities/news/NewsCard.vue';
import Pagination from '@/features/nav/Pagination.vue'
</script>

<style scoped></style>