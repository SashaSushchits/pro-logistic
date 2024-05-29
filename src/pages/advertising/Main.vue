<template>
  <div class="py-8 mb-10">
    <div class="container mx-auto">
      <Breadcrumbs current="Виды рекламы" />
      <h2 class="text-4xl font-bold mb-8">
        Виды рекламы
      </h2>
      <p class="mb-8">
        Мы предлагаем несколько вариантов размещения рекламы.
      </p>
      <div class="rounded-lg bg-dim_light_gray p-8 mb-6">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-7">
            <h2 class="text-2xl font-bold mb-6">
              Услуги экспедитора.
            </h2>
            <p class="mb-8">
              Компания Логистик.ру осуществляет перевозки как собственным
              парком, так и транспортом наших надежных партнеров. В случае
              большого количества заявок от клиента, мы привлекаем только
              проверенных перевозчиков для выполнения заказа. Мы готовы
              обеспечить перевозку любого количества заявок, поэтому с нашими
              клиентами мы заключаем договор транспортной экспедиции.
            </p>
            <button
              class="text-lg font-semibold rounded-full border px-12 py-2 bg-gray-400 text-white hover:bg-gray-500"
            >
              Заказать
            </button>
          </div>
          <div class="col-span-5">
            <img
              src="@/assets/png/plane-flying-highway.avif"
              class="w-full h-60 rounded"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="rounded-lg bg-dim_light_gray p-8 mb-6">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-7">
            <h2 class="text-2xl font-bold mb-6">
              Транспортные услуги
            </h2>
            <p class="mb-8">
              Перегруппировка, консолидация груза. Основа современных
              грузоперевозок. С её помощью перевозки значительно оптимизируются
              как для исполнителя, так и для Клиента. Без функции консолидации
              заказчику придется платить за аренду. транспортного средства, даже
              если его груз займет всего четверть пространства. С консолидацией
              платить нужно только за занимаемое пространство — как на почте.
            </p>
            <button
              class="text-lg font-semibold rounded-full border px-12 py-2 bg-gray-400 text-white hover:bg-gray-500"
            >
              Заказать
            </button>
          </div>
          <div class="col-span-5">
            <img
              src="@/assets/png/transportation-cargo-containe.avif"
              class="w-full h-60 rounded"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="rounded-lg bg-dim_light_gray p-8 mb-16">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-7">
            <h2 class="text-2xl font-bold mb-6">
              Хранение груза
            </h2>
            <p class="mb-8">
              Как с последующей перевозкой так и без нее. В каждом филиале мы готовы разместить вашу продукцию на хранение, т.к. мы имеем полноценный офис и склад в каждом нашем городе.
              В случае, если необходима дополнительная защита рисков наших клиентов, мы готовы застраховать груз у одного из партнеров по страхованию.
              По запросу заказчика, мы готовы предоставить специальный сервис охраны груза, который возьмет на себя полный контроль за его сохранность.
            </p>
            <button
              class="text-lg font-semibold rounded-full border px-12 py-2 bg-gray-400 text-white hover:bg-gray-500"
            >
              Заказать
            </button>
          </div>
          <div class="col-span-5">
            <img
              src="@/assets/png/truck-logistics-operation.avif"
              class="w-full h-60 rounded"
              alt=""
            >
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-6">
        Дополнительные услуги
      </h2>
      <p class="mb-16">
        Каждому Клиенту предоставляется персональный менеджер, с которым он
        может решить любые вопросы от заказа перевозки до выставления счета.
        Если Вы недовольны качеством работы нашего сотрудника, просим Вас
        написать письмо с претензиями через форму обратной связи, расположенной
        по ссылке.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/shared/Breadcrumbs.vue";
</script>

<style scoped></style>
