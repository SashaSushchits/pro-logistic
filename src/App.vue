<template>
  <TopMenu />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import TopMenu from '@/widgets/nav/TopMenu.vue'
import Footer from '@/widgets/nav/Footer.vue'
</script>
