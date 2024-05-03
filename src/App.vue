<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> | 
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>

  <div class="absolute right-0 top-0 w-[30%] h-full flex flex-col items-end">
    <iframe
      src="http://localhost:5173/widget/my-tribuo-advisor/"
      class="h-full w-[85%] mx-[5%] mt-[5%] rounded-xl border-2 border-blue-950"
      :class="displayIFrame ? 'visible' : 'invisible'"
      :scrolling="true"
      frameborder="0"
    ></iframe>
    <img 
      src="https://i.imgur.com/eQILJxZ.png"
      class="w-[15%] mb-2 mr-[4%] mt-2 cursor-pointer hover:scale-105"
      @click="displayIFrame = !displayIFrame"
    >
  </div>

</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'

  const displayIFrame = ref<boolean>(false);
</script>

<style>
  #layout {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  nav {
    padding: 30px;
  }
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  nav a.router-link-exact-active {
    color: #42b983;
  }
  h2 {
    font-size: 20px;
  }
</style>
