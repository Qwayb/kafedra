<script setup>
  import cartItemList from './cartListItem.vue'
  import drawerHeader from './drawerHeader.vue'
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>

  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-10">
    <drawer-header/>

    <cart-item-list/>

    <div class="flex flex-col pt-5">

      <div class="flex gap-2 mb-3">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>129000 руб.</b>
      </div>

      <button disabled="" class="bg-lime-500 w-full rounded-xl py-4 text-white hover:bg-lime-400 active:bg-lime-300 transition cursor-pointer disabled:bg-slate-400">
        Оформить заказ
      </button>

    </div>
  </div>
</template>
