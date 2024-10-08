<script setup>

</script>

<template>
  <div class="flex flex-col items-center pt-10 pb-10">

    <h1 class="font-bold text-2xl mb-5">Войти</h1>
    <p class="font-light text-s opacity-60 mb-5">Пожалуйста, введите пароль и email:</p>

    <form action="" class="flex flex-col items-center mb-5">
      <input class="font-bold text-s text-black border pt-2 pb-2 pl-3 min-w-64 mb-5" type="email" placeholder="Email" required />
      <input class="font-bold text-s text-black border pt-2 pb-2 pl-3 min-w-64 mb-5" type="password" placeholder="Пароль" required />
      <button class="bg-black text-white font-bold min-w-64 pt-2 pb-2">Войти</button>
    </form>

    <p class="text-black text-s font-bold">Нет аккаунта? <a>Создать</a> </p>

  </div>

</template>