<template lang="pug">
  .video
    h1(class='video__title') Видео Садржај

    .video__container
      .video__container--media(v-for='video in videos')
        iframe(loading='lazy' class='video__container--media--iframe' width='100%' height='65%' :src='video.urlPath' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)
        h3(class='video__container--media--title') {{ video.title }}
        .video__container--media--date {{ video.datetime | formatVideoDate }}
</template>

<script>

  export default {

    name: 'mediavideo',
    data() {
      return {
        videos: '',
      }
    },

    methods: {
      sortMediaData() {
        this.videos = this.mediaData.sort((a, b) => {
          return b.datetime - a.datetime; //Asscending Sort
        });
      }
    },

    filters: {

      formatVideoDate: (timestamp) => {
        let date = new Date(timestamp);

        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      }
    },

    mounted() {
      this.sortMediaData();
    },

    computed: {
      mediaData() {
        return this.$store.state.mediaVideos;
      }
    }
  }

</script>
