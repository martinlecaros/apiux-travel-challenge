<template>
  <div>
    <Header/>
      <section>
        <img id="header-img" :src="data.main_photo" :alt="this.title">
        <div class="content">
          <h1 id="title-recomendados" class="title26px">Recomendados</h1>
          <ul id="lista-destinos">
            <li class="destino" v-for="destino in data.recommended" :key="destino.link_url">
              <NuxtLink :to="destino.link_url">
                <img class="img" :src="destino.item_photo" :alt="destino.location">
              </NuxtLink>
              <div id="up">
                <p class="text-recomendados-destinos-bold">{{ destino.location }}</p>
                <ul class="stars">
                  <li class="star" v-for="(star, index) in Number(destino.stars)" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32.092" height="29.154" viewBox="0 0 32.092 29.154">
                    <path id="star-solid" d="M45.8,8.52l8.732,1.207a1.912,1.912,0,0,1,1.562,1.23,1.749,1.749,0,0,1-.48,1.867l-6.332,5.819,1.495,8.347a1.766,1.766,0,0,1-.784,1.782,2.059,2.059,0,0,1-2.048.131l-7.8-3.9-7.8,3.9a2.069,2.069,0,0,1-2.054-.131,1.762,1.762,0,0,1-.778-1.782L31,18.644l-6.333-5.819a1.75,1.75,0,0,1-.479-1.867,1.9,1.9,0,0,1,1.564-1.23L34.48,8.52,38.394.986a2,2,0,0,1,3.494,0Z" transform="translate(-24.095 0.039)" fill="#8bc34a"/>
                    </svg>
                  </li>
                </ul>
              </div>
              <div id="down">
                <p class="text-recomendados-destinos-normal">{{ destino.hotel_name }}</p>
                <p class="text-recomendados-destinos-light">{{ destino.price }}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    <LazyFooter/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Bienvenido a tus próximas vacaciones',
      data: []
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Travel es una agencia boutique que te garantiza destinos únicos y personalizados.'
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Ofertas y destinos imperdibles",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Travel es una agencia boutique que te garantiza destinos únicos y personalizados.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "ruta a la imagen",
        },
      ]
    }
  },
  async fetch() {
      this.data = await fetch('https://test-desarrollador-front.cclh.io/home/')
      .then(res => res.json())
      .catch((e) => {
        error({ statusCode: 404, message: 'Page not found' })
      })
  }
}
</script>

<style lang="scss" scoped>
$naranjo: #F9A825;

#header-img {
  width: 100%;
  min-width: 100%
}
#title-recomendados {
  margin-bottom: 40px;
}
#lista-destinos {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 320px);
    grid-auto-flow: row;
    row-gap: 50px;
    column-gap: 40px;
    margin: 0px 0px 60px 0px;
    padding: 0px;
    justify-content: space-between;

    .destino {
      width: 320px;
      max-width: 320px;

      .img {
        width: 320px;
        max-width: 320px;
        border-bottom: 12px solid $naranjo;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }

      #up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0px;
        padding: 0px;
        height: 30px;

        .stars {
          list-style: none;
          display: flex;
          flex-direction: row;
          margin: 0px;
          padding: 0px;
          height: fit-content;

          .star {
            svg {
              max-width: 16px;
              width: 16px;
            }
          }
        }
      }

      #down {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0px;
        padding: 0px;
        height: 20px;
      }
    }
}
@media only screen and (max-width: 600px) {
  #lista-destinos {
    grid-template-columns: repeat(auto-fill, 100%);

    .destino {
      width: 100%;
      max-width: 100%;

      .img {
        width: 100%;
        max-width: 100%;
      }
    }
  }
}

</style>
