<template>
  <div class="py-8 mb-24">
    <div class="container mx-auto">
      <Breadcrumbs :current="'Вакансии'" />
      <Logistika />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '@/shared/Breadcrumbs.vue'
import Logistika from "@/widgets/home/Logistica.vue";
</script>

<style scoped></style>