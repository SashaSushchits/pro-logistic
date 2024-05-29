<template>
  <div class="py-8 mb-24">
    <div class="container mx-auto">
      <Breadcrumbs current="Услуги" />
      <Services />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
import Services from '@/entities/about/Services.vue';
</script>

<style scoped></style>