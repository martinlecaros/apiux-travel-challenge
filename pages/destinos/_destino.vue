<template>
  <div>
      <Header/>
      <p class="alert">destino</p>
      <p>{{ this.url }}</p>
      <LazyFooter/>
  </div>
</template>

<script>
export default {
  name: 'Destino',
  prop() {
    url: ""
  },
  // async asyncData({ $params, $axios }) {
  // const home = await $axios.$get('https://test-desarrollador-front.cclh.io/'+ ${params})
  // console.log (home.main_photo)
  // return { home }
  // }
}
</script>

<style lang="scss" scoped>
$base-color: #c653ec;

.alert {
  color: $base-color;
}
</style>
