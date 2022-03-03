<template>
  <div id="footer">
    <div id="up">
        <NuxtLink to="/">
            <img class="logo" :src="data.footer.logo_footer" alt="Travel">
        </NuxtLink>

        <div class="rrss">
          <a :href="item.link_url" class="rrss-link" 
                    v-for="item of data.footer.redes_sociales" 
                    :key="item.icono"
                    :target="item.target_blank ? '_blank' : '_self'">
              <img :src="item.icono" :alt="item.link_url">
          </a>
        </div>
    </div>
    <div v-html="data.footer.legal" id="down"></div>
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
      max-width: 164px;
    }
    .rrss {
      display: flex;
      margin: 0px;
      .rrss-link {
        padding: 0px 0px 0px 13px;
      }
    }
  }

  #down::v-deep {
    display: flex;
    flex-direction: column;

    p {
      font-size: 12px;
      text-align: center;
      margin: 0px;
      padding: 0px;
    }
  }
}

@media only screen and (max-width: 600px) {
  #footer {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #up {
      flex-direction: column;

      .rrss {
        margin: 20px 0px;
        .rrss-link {
          padding: 11px;
        }
      }
    }
  }
}
</style>
