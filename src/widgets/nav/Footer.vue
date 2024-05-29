<template>
  <footer class="bg-dim_dark">
    <div class="py-8 border-b border-[#696969]">
      <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-8 items-center">
          <div class="col-span-1">
            <h6 class="text-white font-bold text-md mb-3">
              Мы в социальных сетях:
            </h6>
            <ul class="flex text-white">
              <li class="mr-2">
                <img
                  src="@/assets/img/facebook.svg"
                  alt=""
                  class="hover"
                >
              </li>
              <li class="mr-2">
                <img
                  src="@/assets/img/vk.svg"
                  alt=""
                  class="hover"
                >
              </li>
              <li>
                <img
                  src="@/assets/img/insta.svg"
                  alt=""
                  class="hover"
                >
              </li>
            </ul>
          </div>
          <div class="col-span-1 text-center">
            <router-link
              :to="base"
            >
              <img
                src="@/assets/png/logo.png"
                class="h-24 mx-auto"
              >
            </router-link>
          </div>
          <div class="col-span-1 ml-auto">
            <form>
              <h6 class="text-white font-bold text-md mb-3">
                Подпись на рассылку новостей
              </h6>
              <div class="relative w-[320px]">
                <input
                  type="text"
                  class="w-full bg-transparent rounded border-[#696969] p-2.5 text-white focus:ring-transparent focus:border-dim_green"
                  placeholder="Введите e-mail"
                >
                <button class="rounded bg-gray-300 w-14 h-full absolute right-0 top-0">
                  <img
                    src="@/assets/img/send.svg"
                    class="mx-auto"
                  >
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FooterNav />
    <div class="py-5 text-center">
      <p class="text-white text-md">
        ООО «ПРО.ЛОГИСТИК» {{ year }} <sup>©</sup>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterNav from '@/features/nav/FooterNav.vue'

const year = new Date().getFullYear()
const base = import.meta.env.BASE_URL;
</script>

<style scoped>
.hover:hover {
  background-color: blue;
  border-radius: 50%;
  cursor: pointer;
}
</style>