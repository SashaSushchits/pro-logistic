<template>
  <div class="py-8 border-b border-[#696969]">
    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-8 text-sm">
        <div class="col-span-1">
          <router-link :to="`${base}about`">
            <p class="text-white font-bold mb-5 hover:opacity-70 cursor-pointer">
              О компании
            </p>
          </router-link>
          <router-link :to="`${base}advertising`">
            <p class="text-white font-bold mb-5 hover:opacity-70 cursor-pointer">
              Рекламодателю
            </p>
          </router-link>
          <router-link :to="`${base}services`">
            <p class="text-white font-bold mb-5 hover:opacity-70 cursor-pointer">
              Услуги
            </p>
          </router-link>
          <router-link :to="`${base}vacancies`">
            <p class="text-white font-bold mb-5 hover:opacity-70 cursor-pointer">
              Вакансии
            </p>
          </router-link>
          <router-link :to="`${base}news`">
            <p class="text-white font-bold mb-5 hover:opacity-70 cursor-pointer">
              Новости
            </p>
          </router-link>
          <router-link :to="`${base}contacts`">
            <p class="text-white font-bold mb-5 hover:opacity-70 cursor-pointer">
              Контакты
            </p>
          </router-link>
        </div>
        <div class="col-span-1">
          <p class="text-white font-bold mb-2.5">
            Экспертные рубрики
          </p>
          <p class="text-white mb-2.5">
            Логистика
          </p>
          <p class="text-white mb-2.5">
            Транспорт
          </p>
          <p class="text-white mb-2.5">
            Экспорт / импорт
          </p>
          <p class="text-white mb-2.5">
            Таможенное регулирование (оформление)
          </p>
          <p class="text-white mb-2.5">
            Международное сотрудничество
          </p>
        </div>
        <div class="col-span-1">
          <p class="text-white mb-2.5">
            Политика конфиденциальности
          </p>
          <p class="text-white mb-2.5">
            Политика обработки персональных данных
          </p>
        </div>
        <div class="col-span-1 text-white">
          <p class="text-white mb-2.5 text-lg">
            Контакты:
          </p>
          <div class="flex justify-start items-center mb-4">
            <span class="mdi mdi-phone text-3xl mr-4" />
            <div>
              <a
                href=""
                class="hover:text-blue-500"
              >+7-981-747-1234</a> <br>
              <a
                href=""
                class="hover:text-blue-500"
              >+7-981-747-1235</a>
            </div>
          </div>
          <div class="flex justify-start items-center mb-4">
            <span class="mdi mdi-email text-3xl mr-4" />
            <div>
              <a
                href=""
                class="hover:text-blue-500"
              >pro.logistik@list.ru</a>
            </div>
          </div>
          <div class="flex justify-start items-center mb-8">
            <span class="mdi mdi-map-marker text-3xl mr-4" />
            <div>
              <p>188340, Ленинградская область, Гатчинский район, г.п. Тайцы, ул. Калинина, д. 95.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const base = import.meta.env.BASE_URL;
</script>

<style scoped></style>