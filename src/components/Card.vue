<script setup>
  import { computed, ref, onMounted } from 'vue'
  const { flag, name, population, region, capital } = defineProps(['flag', 'name','population', 'region', 'capital'])
  function insertDotsFromEnd(str) {
    const string = String(str)
    return string
      .split('')
      .reverse()
      .join('')
      .replace(/(.{3})/g, '$1.')
      .split('')
      .reverse()
      .join('')
      .replace(/^\./, ''); 
}
const populationWithDots = computed(() => { return insertDotsFromEnd(population); })
const refImg = ref(null)
const tallImg = ref(false)
function getSize() {
  if (refImg.value) {
    tallImg.value= refImg.value.naturalHeight>240
  }
}
</script>

<template>
  <div class="card">
    <img ref="refImg" :src="'https://plg-two.vercel.app/api/proxy?url=' + flag" @load="getSize" :class="{ tall: tallImg }">
    <div class="cardContent">
      <h3>{{ name }}</h3>
      <p><b>Population:</b> {{ populationWithDots }}</p>
      <p><b>Region:</b> {{ region }}</p>
      <p><b>Capital:</b> {{ capital }}</p>
    </div>
  </div>
</template>

<style scoped>
img{
  height: 48%;
  width: 100%;
}
.tall{
  object-fit: contain !important;
}
.card{
  background: hsl(0, 100%, 100%);
  box-shadow: 0 0 1vh rgba(136, 136, 136, .2);
  aspect-ratio: 1/1.3;
  border-radius: 3px;
  overflow-x: hidden;
  overflow-y: clip;
  cursor: pointer;
  container-type: inline-size;
}
h3{
  padding: 0 !important;
  margin: 0 0 7% 0 !important;
  font-size: 8cqi !important;
  line-height: 1;
}
.cardContent{
  padding: 7% 0 7% 9%;
}
p{
  margin: 0 0 3% 0!important;
  font-size: 5.87cqi !important;
  font-weight: 200;
}
.card:hover:not(.darkItem) {
    background-color: rgba(136, 136, 136, .1) !important;
  }
</style>
