<template>
  <nav class="flex mb-10">
    <ol
      role="list"
      class="flex items-center space-x-2 flex-wrap text-[#BEBEBE]"
    >
      <li>
        <div class="flex items-center">
          <router-link
            :to="base"
            class="text-[#BEBEBE] hover:text-[#646464]"
          >
            Главная
          </router-link>
        </div>
      </li>
      <li v-if="props.sub !== ''">
        <div class="flex items-center">
          <span>•</span>
          <router-link
            to="/journals"
            class="ml-2 text-[#BEBEBE] hover:text-[#646464]"
          >
            {{ props.sub
            }}
          </router-link>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <span>•</span>
          <a
            href="#"
            class="ml-2 text-[#646464]"
            aria-current="page"
          >{{ props.current }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  sub: {
    default: '',
    type: String
  },
  current: {
    required: true,
    type: String
  },
})

const base = import.meta.env.BASE_URL;
</script>

<style scoped></style>