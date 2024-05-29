<template>
  <div>
    <label class="mb-1">{{ props.label }}</label>
    <input
      type="text"
      :class="input"
    >
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})

const input = 'w-full rounded border-[1.5px] border-gray-400 px-3 py-1.5 focus:border-dim_green focus:ring-0 focus:shadow-none focus:outline-0'
</script>

<style scoped></style>