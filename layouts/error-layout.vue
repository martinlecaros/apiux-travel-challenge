<template>
  <div>
    <Header/>
    <section id="error-wrapper">
      <img id="img" src="@/static/404.svg" alt="404 error">
      <p class="title22px">Ups.. parece que te perdiste en tu viaje… Aquí no hay nada.</p>
    </section>
    <LazyFooter/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$naranjo: #F9A825;

#error-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 55px;

  #img {
  max-width: 536px;
  width: 536px;
  }
}
</style>