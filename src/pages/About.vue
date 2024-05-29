<template>
  <div class="py-8 mb-24">
    <div class="container mx-auto">
      <Breadcrumbs current="О компании" />
      <h2 class="text-4xl font-bold mb-8">
        О компании
      </h2>
      <Hero />
      <Rubricks />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '@/shared/Breadcrumbs.vue';
import Hero from '@/entities/about/Hero.vue';
import Rubricks from '@/entities/about/Rubricks.vue';



</script>

<style scoped></style>