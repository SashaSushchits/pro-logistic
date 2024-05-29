<template>
  <div class="mb-28">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-8 items-center mb-12">
        <div class="col-span-4">
          <h2 class="text-4xl font-bold">
            Последние новости
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-9">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="grid grid-cols-12 gap-8 py-4"
            :class="[{ 'border-b': i !== 3 }, { 'pt-0': i === 0 }]"
          >
            <div class="col-span-4 h-72">
              <div
                class="h-full rounded-lg bg-cover bg-no-repeat bg-center bg-[url('@/assets/png/truck-logistics-operation.png')] text-white flex justify-between flex-col p-4"
              >
                <div class="flex justify-end items-center mb-4">
                  <span class="mdi mdi-heart-outline text-2xl text-black" />
                </div>
              </div>
            </div>
            <div class="col-span-8 h-full flex flex-col	justify-between pb-6 pt-1">
              <div>
                <div class="text-end">
                  <button
                    class="text-dim_dark rounded-full text-xs border px-6 py-1.5 border-dim_dark hover:text-white hover:bg-gray-400"
                  >
                    Перейти
                  </button>
                </div>
                <h4 class="font-bold text-lg mb-2.5">
                  {{ item.name }}
                </h4>
                <p class="mb-4">
                  {{ item.description }} ....
                </p>
              </div>
              <p class="text-sm">
                12.03.2024
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <img
            src="@/assets/png/plane-flying-highway.png"
            class="w-full mb-44 rounded"
          >
          <img
            src="@/assets/png/transportation-cargo-containe.png"
            class="w-full mb-44 rounded"
          >
          <img
            src="@/assets/png/plane-flying-highway.png"
            class="w-full rounded"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    name: 'Наша компания одна из основных поставщиков услуг системы "пулинг"',
    description:'Пулинг - проект объединенных доставок в торговые сети Магнит, X5 Retail Group, Дикси.'
  },
  {
    name: 'Показатели работы за 2024 год',
    description:'За прошлый год мы совершили более 142 тыс доставок Клиентам наших Клиентов!'
  },
  {
    name: 'Принимаем участие',
    description:'Турнир по мини-футболу «Кубок Транспорта» пройдет 10.11.2018'
  },
  {
    name: 'Мы подготовились к к высокому сезону',
    description:'Проведена большая работа по проверке имеющихся средств обеспечения безопасности груза Клиентов.'
  },
]
</script>

<style scoped></style>