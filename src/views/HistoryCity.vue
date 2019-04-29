<template lang="pug">
  .historycity
    h1(class='historycity__title') Историјат града

    .historycity__content

      article(v-for='historicalData in historicalDatas' class='historycity__content--article')
        h3(class='historycity__content--article--title') {{ historicalData.title }}

        figure(v-for='image in historicalData.images' class='historycity__content--article--figure')
          img(v-bind:src='getImageUrl(image.name)' v-bind:alt='image.name' class='historycity__content--article--figure--img')
          figcaption(class='historycity__content--article--figure--caption') {{ image.caption }}
        p(v-for='text in historicalData.texts' class='historycity__content--article--text') {{ text }}
</template>

<script>
  export default {
    name: 'history-city',
    data() {
      return {

      }
    },

    methods: {
      getImageUrl(img) {
        return require('../assets/images/content-img/historycity/' + img); //require meth. from webpack for getting img url at compile time
      }
    },

    computed: {
      historicalDatas() {
        return this.$store.state.cityHistoricalDatas;
      }
    }
  }
</script>
