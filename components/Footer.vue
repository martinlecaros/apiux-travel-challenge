<template>
  <div id="footer">
    <div id="up">
        <NuxtLink to="/">
            <img class="logo" :src="data.footer.logo_footer" alt="Travel">
        </NuxtLink>

        <div class="rrss">
          <NuxtLink class="rrss-link" 
                    v-for="item of data.footer.redes_sociales" 
                    :key="item.icono"
                    :to="item.link_url"
                    :target="item.target_blank ? '_blank' : '_self'">
              <img :src="item.icono" :alt="item.link_url">
          </NuxtLink>
        </div>
    </div>
    <div v-html="data.footer.legal" id="down">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      data: []
    }
  },
  computed: {
  },
  async fetch() {
      this.data = await fetch(
        'https://test-desarrollador-front.cclh.io/options/'
      ).then(res => res.json())
  }
}
</script>

<style lang="scss" scoped>
#footer {
  background-color: #DCEDC8;
  height: 150px;
  padding: 40px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #up {
    display: flex;
    justify-content: space-between;

    .logo {
      max-width: 164px;
    }
    .rrss {
      display: flex;
      .rrss-link {
        padding-left: 13px;
      }
    }
  }

  #down {
    display: flex;
    flex-direction: column;
  }
  div#down p {
    font-size: 12px;
    text-align: center;
    margin: 0px;
    padding: 0px;
  }
  
  
}
</style>
