<template>
<p class="alert">destino</p>
</template>

<script>
export default {
  name: 'Destino',
  async asyncData({ $axios }) {
  const home = await $axios.$get('https://test-desarrollador-front.cclh.io/punta-cana/')
  console.log (home.main_photo)
  return { home }
  }
}
</script>

<style lang="scss" scoped>
$base-color: #c653ec;

.alert {
  color: $base-color;
}
</style>
