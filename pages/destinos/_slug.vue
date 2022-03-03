<template>
  <div>
      <Header/>
      <section>
        <div id="up">
          <div id="img-wrapper">
            <img id="main-img" :src="data.location_photo" :alt="data.location">
          </div>
          <div id="info">
            <div id="details">
              <h1 class="title26px location">{{ data.location }}</h1>
              <h2 class="hotel-name">{{ data.hotel_name }}</h2>
              <p class="bajada">{{ data.bajada }}</p>
              <p class="price">{{ data.price }}</p>
            </div>
            <div id="ranking">
              <ul id="stars">
                <li class="star" v-for="(star, index) in Number(data.stars)" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32.092" height="29.154" viewBox="0 0 32.092 29.154">
                    <path id="star-solid" d="M45.8,8.52l8.732,1.207a1.912,1.912,0,0,1,1.562,1.23,1.749,1.749,0,0,1-.48,1.867l-6.332,5.819,1.495,8.347a1.766,1.766,0,0,1-.784,1.782,2.059,2.059,0,0,1-2.048.131l-7.8-3.9-7.8,3.9a2.069,2.069,0,0,1-2.054-.131,1.762,1.762,0,0,1-.778-1.782L31,18.644l-6.333-5.819a1.75,1.75,0,0,1-.479-1.867,1.9,1.9,0,0,1,1.564-1.23L34.48,8.52,38.394.986a2,2,0,0,1,3.494,0Z" transform="translate(-24.095 0.039)" fill="#8bc34a"/>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="down" class="content">
          <div id="condiciones">
            <h2 class="title22px">Condiciones</h2>
            <div v-html="data.condiciones" class="txt"></div>
          </div>
          <div id="incluye">
            <h2 class="title22px">Incluye</h2>
            <ul id="list-item">
              <li class="item" 
                  v-for="(item, index) in data.includes" 
                  :key="index"
                  :class="{ flight: item === 'flight', 
                            transfer: item === 'transfer', 
                            hotel: item === 'hotel' }"
              >
                  {{ item }} 
              </li>
            </ul>
          </div>
        </div>
      </section>
      <LazyFooter/>
  </div>
</template>

<script>
export default {
  name: '',
  head() {
    return {
      title: this.$data.data.location + ' - ' + this.$data.data.hotel_name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'destination description'
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "destination title",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "destination description",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "ruta a la imagen",
        },
      ]
    }
  },
  async asyncData({ params, $axios }) {
    const data = await $axios.$get(`https://test-desarrollador-front.cclh.io/${params.slug}`)
    return { data }  
  },
  transitions: {
    name: 'page',
    mode: 'out-in'
    
  }
}
</script>


<style lang="scss" scoped>
$verde: #8BC34A;
$gris-a: #424242;
$gris-b: #616161;
$gris-c: #707070;
$font-text: Roboto;

#up {
  display: flex;
  flex-direction: row;

  #img-wrapper {
    #main-img {
      width: 502px; /* width of container */
      height: 192px; /* height of container */
      object-fit: cover;
      object-position: 63% 42%; /* default 50% 50% */ 
      border: none;
      overflow:hidden;
    }
  }
  #info {
    display: flex;
    flex-direction: row;
    width: 100%;

    #details {
      padding: 0px 17px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: auto;
      
      .location {
        margin: 0px 0px 8px 0px;
        padding: 0px;
      }
      .hotel-name {
        margin: 0px 0px 8px 0px;
        padding: 0px;
        color: $gris-a;
        font-family: $font-text;
        font-size: 2.25rem;
        font-weight: normal;
      }
      .bajada {
        margin: 0px 0px 8px 0px;
        padding: 0px;
        color: $gris-b;
        font-family: $font-text;
        font-size: 1rem;
        font-weight: bold;
      }
      .price {
        margin: 0px;
        padding: 0px;
        color: $gris-a;
        font-family: $font-text;
        font-size: 1rem;
        font-weight: lighter;
      }
    }
    
    #ranking {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0px 30px;

      #stars {
        list-style: none;
        display: flex;
        flex-direction: row;
        margin: 0px;
        padding: 0px;
        height: fit-content;

        .star {
          svg {
            max-width: 31px;
            width: 31px;
            margin-right: 6px;
          }
        }
      }
    }
  }
}

#down {
  display: flex;
  flex-direction: row;
  margin-bottom: 105px;

  #condiciones {
    width: 53%;
    margin-right: 60px;

    .txt::v-deep {
      list-style: none;

      p, li {
        color: $gris-c;
        font-family: $font-text;
        font-size: 1rem;
        font-weight: normal;
      }
      li {
        list-style: none;
      }
      li::before {
        display: inline-block;
        content: ' ';
        background-image: url('static/dot.svg');
        background-size: 9px 9px;
        height: 9px;
        width: 9px;
        margin-right: 8px;
      }
    } 
  }

  #incluye {
    #list-item {
      margin: 0px;
      padding: 0px;
      .item {
        list-style: none;
        color: $gris-b;
        font-family: $font-text;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 19px;
        display: flex;
        align-items: center;
      }
    }
  }
}
.flight {
  &::before {
    content: "";
    display: block;
    background: url("static/flight.svg") no-repeat;
    width: 45px;
    height: 35px;
    float: left;
    margin: 0 11px 0 0;
  }
}
.transfer {
  &::before {
    content: "";
    display: block;
    background: url("static/transfer.svg") no-repeat;
    width: 45px;
    height: 35px;
    float: left;
    margin: 0 11px 0 0;
  }
}
.hotel {
  &::before {
    content: "";
    display: block;
    background: url("static/hotel.svg") no-repeat;
    width: 45px;
    height: 35px;
    float: left;
    margin: 0 11px 0 0;
  }
}

@media only screen and (max-width: 600px) {
  #up {
    flex-direction: column;

    #img-wrapper {
      #main-img {
        width: 100%; /* width of container */
      }
    }
    #info {
      flex-direction: column;
      
      #ranking {
        padding: 20px 15px;

        #stars {
          .star {
            svg {
              max-width: 25px;
              width: 25px;
            }
          }
        }
      }
    }
  }

  #down {
    flex-direction: column;
    margin-bottom: 75px;

    #condiciones {
      width: 100%;
      margin-right: 0px;
    }
  }
}
</style>
