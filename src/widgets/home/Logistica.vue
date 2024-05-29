<template>
  <div class="mb-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-8 items-center relative">
        <div class="col-span-6">
          <h2 class="text-4xl font-bold">
            Вакансии
          </h2>
        </div>
        <div
          v-if="props.deep"
          class="col-span-6 text-end"
        >
          <router-link
            class="text-dim_gray hover:text-gray-600"
            to="/vacancies"
          >
            Перейти в раздел
            <span class="mdi mdi-arrow-right" />
          </router-link>
        </div>
        <div class="col-span-12">
          <swiper
            :slides-per-view="3"
            :space-between="32"
            :loop="true"
            :modules="modules"
            class="mySwiper"
            :navigation="{
              prevEl: '.prev1',
              nextEl: '.next1',
            }"
          >
            <swiper-slide>
              <GoodCard
                :title="'Водитель-экспедитор'"
                :description="'<b>Обязанности</b>:</br> Доставка грузов различного характера - Москва, регионы РФ;</br> Работа с сопроводительными документами на груз;</br> Прием и сдача груза строго по документам и инструкциям.'"
              />
            </swiper-slide>
            <swiper-slide>
              <GoodCard
                :title="'Автослесарь, автоэлектрик'"
                :description="'<b>Обязанности</b>:</br> Ремонт и техническое обслуживание транспортных средств: автомобили МАN TGX, FUSO, Газон, Газель. </br> Образование: не ниже ср.специального </br>Опыт работы: от 2-х лет'"
              />
            </swiper-slide>
            <swiper-slide>
              <GoodCard
                :title="'Механик'"
                :description="'<b>Обязанности</b>:</br> Контроль списания ГСМ, запчастей, шин.</br> Оформление ДТП. Работа с ГИБДД, в т.ч. постановка ТС на учет.</br> Оформление страховок - КАСКО и ОСАГО.</br> Решение оперативных вопросов.'"
              />
            </swiper-slide>
            <swiper-slide>
              <GoodCard
                :title="'Менеджер, логист'"
                :description="'<b>Требования</b>:</br>Опыт работы: сфере автотранспорта приветствуется</br> Высшее образование или неполное высшее - желательно профильное. </br> ПК - уверенный пользователь, желательно знание 1С.'"
              />
            </swiper-slide>
          </swiper>
        </div>
        <button class="prev1 absolute top-1/2 -left-16 z-20">
          <img
            src="@/assets/img/prev.svg"
            alt=""
          >
        </button>
        <button class="next1 absolute top-1/2 -right-16 z-20">
          <img
            src="@/assets/img/next.svg"
            alt=""
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodCard from '@/entities/shop/GoodCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules'

const modules = [Navigation]

const props = defineProps({
  deep: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped></style>