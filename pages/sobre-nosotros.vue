<template>
  <div>
    <Header/>
    <section id="photos">
      <img id="bg" :src="data.background_photo" :alt="this.title">
      <img id="front" :src="data.front_photo" :alt="this.siteName">
      <div id="text" class="content">
        <h1 class="title22px">{{ this.title }}</h1>
        <div v-html="data.about_us" id="description"></div>
      </div>
    </section>
    <LazyFooter/>
  </div>
</template>

<script>
export default {
  name: 'sobre-nosotros',
  data() {
    return {
      title: 'Sobre Nosotros',
      siteName: 'Travel',
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
          content: 'Sobre nosotros description etc.'
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Ofertas y destinos imperdibles",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Sobre nosotros description etc.",
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
      this.data = await fetch('https://test-desarrollador-front.cclh.io/sobre-nosotros/')
      .then(res => res.json())
      .catch((e) => {
        error({ statusCode: 404, message: 'Page not found' })
      })
  },
  transitions: {
    name: 'page',
    mode: 'out-in'
    
  }
}
</script>


<style lang="scss" scoped>
$verde: #8BC34A;
$naranjo: #F9A825;
$gris-c: #707070;

#photos {
  position: relative;

  #bg{
    position: relative;
    width: 100%;
    min-width: 100%;
  }
  #front {
    position: absolute;
    width: 516px;
    max-width: 516px;
    margin-top: -258px; /* Half the height */
    margin-left: -258px; /* Half the width */
    top: 50%;
    left: 50%;
    z-index: 10;
  }
}

#text {
  margin-bottom: 300px;

  #description::v-deep {
    font-family: Roboto;
    font-size: 1rem;
    color: $gris-c;
    text-align: justify;
    a {
      color: $verde;
    }
  }

}

@media only screen and (max-width: 600px) {
  #photos {
    position: relative;

    #bg{
      position: relative;
      width: 100%;
      min-width: 100%;
    }
    #front {
      width: 150px;
      max-width: 150px;
      margin-top: 10px; /* Half the height */
      margin-left: 10px; /* Half the width */
      top: 0;
      left: 0;
    }
  }
  #text {
  margin-bottom: 100px;
  }
}
</style>
