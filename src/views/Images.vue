<template lang="pug">
  .images

    h1(class='images__title')
      router-link(:to="{ name: 'gallery', params: {} }" class='images__title--backbtn' title='Назад') &#8592;

      | {{ folderTitle }}

    gallery(:images='sliderImagesURL' :index='index' @close='index = null' class='images__slider')

    .images__container
      .images__container--thumbnails(v-for='(image, imageIndex) in galleryFolder.images' :key='imageIndex' @click='index = imageIndex' :style="{backgroundImage: 'url(' + getImageUrl(galleryFolder.name, image.name) + ')'}")
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    name: 'images',
    props: ['folderId'],
    data() {
      return {
        folderTitle: '',
        galleryFolder: [],
        sliderImagesURL: [],
        index: null
      }
    },

    components: {
      'gallery': VueGallery
    },

    methods: {
      //Filter trught all folders and get back filtered folder by ID
      getFolderById() {
        return this.getFolersAndImages.filter((folder) => {
          return folder.id == this.folderId; //this.folderId passed as props
        });
      },

      //Get folder name
      getImageFolderName() {
        this.folderTitle = this.galleryFolder.transName;
      },

      //Get correct img URL
      getImageUrl(folder, img) {
        return require('../assets/images/gallery/' + folder + '/' + img);
      },

      //Create array of images URL for slider
      sliderImages() {
        this.galleryFolder.images.forEach(element => {
          this.sliderImagesURL.push(this.getImageUrl(this.galleryFolder.name, element.name));
        });
      }
    },

    mounted() {
      this.sliderImages();
    },

    created() {
      this.galleryFolder = this.getFolderById()[0]; //Access first el. in array
      this.getImageFolderName();
    },

    computed: {
      //Get all albums (folders) with images
      getFolersAndImages() {
        return this.$store.state.galleryFolders;
      }
    }
  }
</script>
