<template>
  <div class="mb-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">
          <h2 class="text-4xl font-bold">
            Контакты
          </h2>
        </div>
        <div class="col-span-5">
          <ContactItem />
        </div>
        <div class="col-span-7">
          <div class="rounded-lg bg-dim_light_gray p-4 h-full">
            <h4 class="font-bold mb-2 text-xl">
              ООО «ПРО.ЛОГИСТИК»
            </h4>
            <p class="mb-2">
              <strong>ИНН:</strong> 7838057400
            </p>
            <p class="mb-2">
              <strong>КПП:</strong> 470501001
            </p>
            <p class="mb-2">
              <strong>ОГРН:</strong> 1167847318858
            </p>
            <p class="mb-5">
              <strong> Юридический адрес:</strong> 188340, Ленинградская область, Гатчинский район, г.п. Тайцы, ул. Калинина, д. 95
            </p>
            <p class="mb-5">
              <strong>Почтовый адрес:</strong> 197348, г.  Санкт-Петербург , пр-кт Богатырский д.6, кв.125
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactItem from '@/entities/contacts/ContactItem.vue'

</script>

<style scoped></style>