<template>
  <div class="bg-dim_dark py-5">
    <div class="container mx-auto flex justify-between items-center">
      <ul class="flex text-xl text-white">
        <li class="mr-20">
          <router-link to="/about">
            О компании
          </router-link>
        </li>
        <li class="mr-20">
          <router-link to="/advertising">
            Рекламодателю
          </router-link>
        </li>
        <li class="mr-20">
          <router-link to="/services">
            Услуги
          </router-link>
        </li>
        <li class="mr-20">
          <router-link to="/vacancies">
            Вакансии
          </router-link>
        </li>
        <li class="mr-20">
          <router-link to="/news">
            Новости
          </router-link>
        </li>
        <li class="mr-20">
          <router-link to="/contacts">
            Контакты
          </router-link>
        </li>
      </ul>
      <ul class="flex text-white">
        <li class="mr-2">
          <img
            src="@/assets/img/facebook.svg"
            alt="facebook"
            class="hover"
          >
        </li>
        <li class="mr-2">
          <img
            src="@/assets/img/vk.svg"
            alt="vk"
            class="hover"
          >
        </li>
        <li>
          <img
            src="@/assets/img/insta.svg"
            alt="insta"
            class="hover"
          >
        </li>
      </ul>
      <Login />
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from './Login.vue'
</script>

<style scoped>
.hover:hover {
  background-color: blue;
  border-radius: 50%;
  cursor: pointer;
}
</style>