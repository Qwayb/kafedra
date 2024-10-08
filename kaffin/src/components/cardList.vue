<script setup>
  import card from './card.vue'

  defineProps({
    items: Array
  })

  const onClickAdd = () => {
    alert('Добавить!')
  }
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <card
        v-for="item in items"
        :key="item.id"
        :on-click-add="onClickAdd"
        :is-added="false"
        :price="item.price"
        :name="item.name"
        :discription="item.description"
        :image-url="item.image"/>
  </div>
</template>
