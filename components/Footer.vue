<template>
  <div class="footer">
    <div class="footer-up">
        <NuxtLink to="/">
            <img class="logo" src="@/static/logo.svg" alt="Travel">
        </NuxtLink>
        <div class="rrss">
            <NuxtLink class="rrss-link" to="#">Destinos</NuxtLink>
            <NuxtLink class="rrss-link" to="#">Sobre nosotros</NuxtLink>
        </div>
    </div>
    <div class="footer-down">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #DCEDC8;
  height: 150px;
  .logo {
    max-width: 164px;
  }
}
</style>
