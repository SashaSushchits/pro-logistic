<template>
  <div class="py-8 mb-24">
    <div class="container mx-auto">
      <Breadcrumbs :current="'Новости'" />
      <NewsGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '@/shared/Breadcrumbs.vue'
import NewsGrid from '@/widgets/news/NewsGrid.vue'

</script>

<style scoped></style>