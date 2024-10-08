<template>
  <header class="flex justify-between border-b border-slate-300 px-8 py-4">

      <div class="flex items-center gap-4">
        <h2 class="pt-5 text-3xl font-bold mb-8">Все товары</h2>
      </div>


    <ul class="items-center flex gap-10 text-slate-400">
      <li class="flex cursor-pointer items-center gap-4 hover:text-black">
        <img src="/cart.svg" alt="cart">
        <b>12000 р.</b>
      </li>
        <li class="flex cursor-pointer items-center gap-4 hover:text-black">
        <img src="/profile.svg" alt="profile">
        <b>Профиль</b>
        </li>
    </ul>
  </header>
</template>
<script setup lang="ts">
</script>