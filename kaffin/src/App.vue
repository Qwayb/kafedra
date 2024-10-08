<script setup>
  import mheader from './components/mheader.vue'
  import cardList from '@/components/cardList.vue'
  import {onMounted, ref, watch} from "vue";
  import axios from "axios";

  const items = ref([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://lifestealer86.ru/public/api-shop/products`);

      const data = response.data.data;
      if (Array.isArray(data)) {
        items.value = data.map(obj => ({
          ...obj,
          isAdded: false
        }));
      } else {
        console.error('Ответ API не содержит массив данных', response.data);
      }
    } catch (err) {
      console.error('Ошибка при загрузке данных:', err);
    }
  };

  onMounted(async () => {
    try {
      await fetchItems(); //

      if (Array.isArray(items.value)) {

        items.value = items.value.map((item) => ({
          ...item,
          isAdded: false
        }));
      } else {
        console.error('items.value не является массивом', items.value);
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  });

  watch(fetchItems);

</script>

<template>
<!--  <drawer/>-->

  <div class="bg-white w-4/5 m-auto rounded-l shadow-xl mt-14">
    <mheader/>
<!--    <login/>-->
<!--    <reg/>-->

    <div class="p-10">
      <div class="flex justify-between">
        <card-list :items="items"/>
      </div>
    </div>
  </div>
</template>