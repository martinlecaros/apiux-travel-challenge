<template>
  <p v-if="$fetchState.pending">Fetching menu...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>

  <div v-else class="header">
    <NuxtLink to="/">
      <!-- <img class="logo" src="@/static/logo.svg" alt="Travel"> -->
      <img class="logo" :src="data.header.logo_header" alt="Travel">
    </NuxtLink>

    <nav>
      <ul class="wrapper-nav-link">
        <li class="nav-link" v-for="item of data.header.menus" :key="item.menu_url">
          <NuxtLink :to="item.menu_url">{{ item.menu_label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      data: []
    }
  },
  async fetch() {
      this.data = await fetch(
        'https://test-desarrollador-front.cclh.io/options/'
      ).then(res => res.json())
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
  .wrapper-nav-link {
    display: flex;
    .nav-link {
      list-style: none;
      a {
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
  } 

  
}
</style>
