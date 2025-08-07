<script setup>
import Card from './components/Card.vue'
import { ref, provide, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const isDark = ref(false)
const router = useRouter()
provide('isDark', isDark)
function getTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.body.classList.toggle('dark')
}

function goHome(){
  router.push('/')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark'
  if (isDark.value) document.body.classList.add('dark')
})
</script>

<template>
  <div>
    <header :class="{ darkItem: isDark }">
      <span class="itemMenuLeft x2" title="to home page" @click="goHome">
        Where in the world?
      </span>
      <span @click="getTheme" class="itemMenuRight" title="Dark mode">
        <i class="far fa-moon" v-if="!isDark"></i>
        <i class="fas fa-moon" v-if="isDark"></i>
        Dark mode
      </span>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive include="HomePage">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.google.com/specimen/css2?Nunito+Sans&display=swap');
  html,body, #app{
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body{
    background: hsl(0, 0%, 99%);
  }
  .dark{
    background: hsl(207, 26%, 17%) !important;
    color: hsl(0, 100%, 100%);
    min-height: 100vh;
  }
  .darkItem{
    background: hsl(209, 23%, 22%);
    color: hsl(0, 100%, 100%);
  }
  .darkItem:hover:not(header):not(.darkItem:focus) {
    background-color: rgba(136, 136, 136, .3) !important;
  }
  header{
      background: hsl(0, 100%, 100%);
			width: 100%;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 0;
      margin-bottom: 50vh;
      flex-shrink: 0;
      z-index: 10;
      box-shadow: 0 0 1vh 0 rgba(136, 136, 136, .2);
		}
    .darkItem{
      box-shadow: 0 0 1vh 0 rgb(0 0 0 / 20%) !important;
    }
    header, input, select,.inputWithIcon{
      position: fixed;
    }
    select{
      height: 5vh;
    }
    .filterContainer{
      width: 90vw;
      align-items: center;
      padding-top: 13vh;
      display: flex;
      align-items: flex-start;
      margin: 0 auto;
    }
    select{
      right: 3vw;
    }
    main{
      height: 90vh;
    }
    *{
      font-family: 'Nunito Sans';
    }
    .itemMenuLeft,.itemMenuRight{
      cursor: pointer;
      padding: 1vh;
    border-radius: 5px;
    }
    .itemMenuLeft{
      margin-left: 5vw;
    }
    .itemMenuRight{
      margin-right: 5vw;
    }
    .itemMenuLeft:hover, .itemMenuRight:hover {
    background-color: rgba(136, 136, 136, .2) !important;
    padding: 1vh;
    border-radius: 5px;
  }
  .x2{
    font-size: 120%;
    font-weight: 700;
  }
  @media (max-width: 900px) and (min-width: 768px) {
    header{
      font-size: 130%;
    }
  }
  @media (max-width: 768px) {
  .x2, .itemMenuRight{
    font-size: 90%;
  }
  header{
      font-size: 110%;
    }
  .itemMenuLeft{
      margin-left: 3vw;
    }
    .itemMenuRight{
      margin-right: 3vw;
    }
}
</style>
