<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    'v-tab': tab
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
