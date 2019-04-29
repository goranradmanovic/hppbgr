<template lang="pug">
  .gallery
    h1(class='gallery__title') Галерија

    .gallery__container
      figure(v-for='folder in getFolders' @click='viewFolderImages($event)' class='gallery__container--figure')
        img(:src='getImageUrl(folder.name, folder.images[0].name)' v-bind:alt='folder.images[0].name' class='gallery__container--figure--img')
        figcaption(:data-id='folder.id' class='gallery__container--figure--caption')
          | {{ folder.transName }}
          br
          | {{ folderImagesCount(folder.images) }}+
</template>

<script>
  export default {
    name: 'gallery',
    data() {
      return {

      }
    },

    methods: {
      viewFolderImages(event) {
          if(event.target.dataset.id) {
            this.$router.push({name: 'images', params: {folderId: event.target.dataset.id}});
          }
      },

      getImageUrl(folder, img) {
        return require('../assets/images/gallery/' + folder + '/' + img);
      },

      folderImagesCount(images) {
        return images.length - 1;
      }
    },

    computed: {
      getFolders() {
        return this.$store.state.galleryFolders;
      }
    }
  }
</script>
