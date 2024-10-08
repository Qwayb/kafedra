<script setup>
  defineProps({
    discription: String,
    name: String,
    imageUrl: String,
    price: Number,
    isAdded: Boolean,
    onClickAdd: Function,
    onClickFavorite: Function,
  })

</script>

<template>
  <div class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:translate-y-2 hover:shadow-xl transition">

    <img :src="imageUrl" alt="image">

    <p class="mt-2 font-bold">{{ name }}</p>
    <p class="">{{ discription }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цены</span>
        <b>{{ price }} руб.</b>
      </div>

      <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : './checked.svg'" alt="add">
    </div>
  </div>
</template>
