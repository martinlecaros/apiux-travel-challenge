<template>
  <p v-if="$fetchState.pending">Fetching menu...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>

  <div v-else class="header">
    <NuxtLink to="/">
      <img class="logo" :src="data.header.logo_header" alt="Travel">
    </NuxtLink>

    <nav>
      <ul class="wrapper-nav-link">
        <li class="nav-link" v-for="item of data.header.menus" :key="item.menu_url">
          <NuxtLink 
            :to="item.menu_url"
            :class="{ 'active': $route.path == item.menu_url }"
          >
            {{ item.menu_label }}
          </NuxtLink>
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
$verde: #8BC34A;
$naranjo: #F9A825;

.header {
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  border-bottom: 12px solid $naranjo;
  .logo {
    margin-top: 0px;
    max-width: 164px;
  }
  .wrapper-nav-link {
    display: flex;
    margin: 0px;
    padding: 0px;

    .nav-link {
      list-style: none;
      a {
        color: $verde;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        margin: 0px 25px 0px 0px;
        font-family: 'Overpass Mono';

        &:hover {
          padding-bottom: 25px;
          border-bottom: 12px solid $verde;
        }
      }
    }
  }
}

.active {
  padding-bottom: 25px;
  border-bottom: 12px solid $verde;
}


@media only screen and (max-width: 600px) {
  .header {
      height: fit-content;
      flex-direction: column;
      padding: 0px;

      .logo {
        margin-top: 20px;
      }

      .wrapper-nav-link {
        .nav-link {
          margin: 20px 0px;
          a {
            margin: 0px 10px;
          }
        }
      }
  }
  .active {
    padding-bottom: 20px;
  }
}
</style>
