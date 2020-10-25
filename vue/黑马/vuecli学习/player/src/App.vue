<template>
  <div class="app">
      <top></top>
      <index></index>
  </div>
</template>

<script>
import top from './components/01.top.vue'
import index from './components/02.index.vue'


export default {
  components:{
    top,
    index
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>