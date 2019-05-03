<template lang="pug">
  .grid
    header(class='grid__header')
      Navigation

    section(class='grid__content')
      router-view

    aside(class='grid__aside')
      Aside

    footer(class='grid__footer')
      Footer
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import Aside from '@/components/Aside.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'app',
    components: {
      Navigation, Aside, Footer
    }
  }
</script>
