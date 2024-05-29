<template>
  <div class="mb-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">
          <img
            src="@/assets/png/logistika.jpg"
            class="w-full rounded"
          >
        </div>
        <div class="col-span-5">
          <h2 class="mb-6 text-2xl font-bold mt-12">
            Оказание транспортных услуг на международном уровне, логистика перевозок от профессионалов
          </h2>
          <p class="mb-14">
            На сегодняшний день автоперевозки имеют наиболее высокую актуальность при доставке грузов по европейской части России и в Уральском регионе.На сегодняшний день автоперевозки имеют наиболее высокую актуальность при доставке грузов по европейской части России и в Уральском регионе.
          </p>
          <div class="divide-y border-b mb-4 mr-20">
            <div
              v-for="(item, index) in directions"
              :key="index"
              class="flex items-center py-2"
            >
              <span class="font-bold mr-16">0{{ index+1 }}</span>
              <p>{{ item }}</p>
            </div>
          </div>
          <img
            src="@/assets/png/logistika-truck.jpg"
            class="w-[85%] rounded"
          >
        </div>
        <div class="col-span-4">
          <img
            src="@/assets/png/skladskaya-logistika.jpg"
            class="w-full mb-12 rounded"
          >
          <h2 class="text-2xl font-bold underline underline-offset-8 mb-6">
            Популярные новости
          </h2>
          <ul class="list-decimal space-y-4 ml-4">
            <li>Компания приобрела 3 новые ГАЗель Некст. Машины уже начали работать на проекте</li>
            <li>Количество платных трасс в России станет рекордным в 2023 году</li>
            <li>В 2023 году компания выполнила 55 тыс рейсов</li>
            <li>Увеличение складского терминала в Екатерингбурге</li>
            <li>Компания провела подготовку к высокому сезону, в т.ч. проверку систем безопасности</li>
            <li>Автомобиль грузоподъёмностью от 7 тонн уже проходит подготовку к работе</li>
          </ul>
        </div>
        <div class="col-span-3">
          <img
            src="@/assets/png/moskow.jpg"
            class="w-full mb-32 rounded"
          >
          <img
            src="@/assets/png/logistics-operations.png"
            class="w-full rounded"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const directions = [
  'ЛОГИСТИКА',
  'ТРАНСПОРТ',
  'ЭКСПОРТ / ИМПОРТ',
  'ТАМОЖЕННОЕ РЕГУЛИРОВАНИЕ',
  'МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО',
  'НОВОСТИ'
]
</script>

<style scoped></style>