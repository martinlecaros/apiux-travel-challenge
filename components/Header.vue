<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="logo" src="@/static/logo.svg" alt="Travel">
      <!-- <img class="logo" :src="options.header.logo_header" alt="Travel"> -->
    </NuxtLink>
    <nav>
      <NuxtLink class="nav-link" 
                :to="item.menu_url" 
                v-for="item in options.header.menus" 
                :key="item.menu_url">
        {{ item.menu_label }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      options: []
    }
  },
  async fetch() {
      this.options = await fetch('https://test-desarrollador-front.cclh.io/options/')
        .then(res => res.json())

  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  border-bottom: 12px solid #F9A825;
  .logo {
    max-width: 164px;
  }
  .nav-link {
    color: #8BC34A;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    margin-right: 25px;
    font-family: 'Overpass Mono';
    &:hover {
      padding-bottom: 25px;
      border-bottom: 12px solid #8BC34A;
    }
  }
}
</style>
