<template>
  <div class="text-center flex items-center ml-7">
    <a
      class="hover:opacity-70 cursor-pointer"
      @click.prevent="loginVisible = true"
    >
      <img
        src="@/assets/img/account.svg"
        style="filter: invert(1);"
        class="mx-auto mb-1"
      >
      <p class="leading-3 text-white">Войти</p>
    </a>
    <Login
      v-if="loginVisible"
      @close="loginVisible = false"
      @open-reg="openReg"
      @open-recovery="openRecovery"
    />
    <Registration
      v-if="regVisible"
      @close="regVisible = false"
      @open-login="openLogin"
    />
    <Recovery
      v-if="recoveryVisible"
      @close="recoveryVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Login from '@/entities/auth/Login.vue'
import Registration from '@/entities/auth/Registration.vue'
import Recovery from '@/entities/auth/Recovery.vue'

const loginVisible = ref(false)
const regVisible = ref(false)
const recoveryVisible = ref(false)

function openReg() {
  recoveryVisible.value = false
  loginVisible.value = false
  regVisible.value = true
}
function openLogin() {
  loginVisible.value = true
  recoveryVisible.value = false
  regVisible.value = false
}
function openRecovery() {
  loginVisible.value = false
  recoveryVisible.value = true
  regVisible.value = false
}

</script>

<style scoped></style>