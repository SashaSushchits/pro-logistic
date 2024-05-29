<template>
  <div class="py-8 mb-24">
    <div class="container mx-auto">
      <Breadcrumbs :current="'Контакты'" />
      <Contacts />
      <Map />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '@/shared/Breadcrumbs.vue'
import Contacts from '@/widgets/contacts/Contacts.vue'
import Map from '@/widgets/contacts/Map.vue'
</script>

<style scoped></style>