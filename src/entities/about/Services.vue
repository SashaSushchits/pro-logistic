<template>
  <div class="mb-16">
    <h2 class="text-4xl font-bold mb-32">
      Наши услуги
    </h2>
    <div class="grid grid-cols-5 gap-6">
      <div
        v-for="(item, i) in services"
        :key="i"
        class="col-span-1"
      >
        <div class="bg-dim_light_gray rounded p-5 h-full">
          <img
            :src="item.img"
            class="rounded-full mx-auto shadow-xl h-32 -mt-24 mb-5"
          >
          <h4 class="font-bold text-xl mb-4">
            {{ item.title }}
          </h4>
          <p class="mb-4 text-[12px]">
            {{ item.txt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import serv2 from '@/assets/refs/serv2.png'
import serv4 from '@/assets/refs/serv4.png'
import serv5 from '@/assets/refs/serv5.png'


const services = [
  {
    title: 'Сотрудничество для авторов',
    txt: 'Разработка и написание статей.',
    img: serv2
  },
  {
    title: 'Графический дизайн',
    txt: 'Разработка листовок, визиток, буклетов, книг, календарей, баннеров.',
    img: serv4
  },
  {
    title: 'Конференции',
    txt: 'Проведение конференций и семинаров.',
    img: serv5
  },
]
</script>

<style scoped></style>