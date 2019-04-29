<template lang="pug">
  div
    ul(class='grid__aside--nav')
      h2(class='grid__aside--title') Линкови

      li(v-for="navigationAsideLink in navigationAsideLinks")
        router-link(:key='navigationAsideLink.name' :to='navigationAsideLink.path' class='grid__aside--nav--item') {{ navigationAsideLink.name }}

    div(class='grid__aside--divider')

    h2(class='grid__aside--title') Црквени Календар

    div(class="grid__aside--churchcalendar")
      iframe(marginheight='0' marginwidth='0' src='https://pravoslavnikalendar.iz.rs/kal/pra220.php' scrolling='no' frameborder='0' width='220' height='70')

    div(class='grid__aside--divider')

    h2(class='grid__aside--title') Задужбина Хиландар

    div(class="grid__aside--soundcloude")
      iframe(width='100%' height='300' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/237218297&color=%233c3c35&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true')

    div(class='grid__aside--divider')

    h2(class='grid__aside--title') Корисни Линкови

    div(class='grid__aside--links')
      router-link(v-for='usefulLink in usefulLinks' :key='usefulLink.name' :to='usefulLink.path' target='_blank' class='grid__aside--links--item') {{ usefulLink.name }}
</template>

<script>
  export default {
    name: 'Aside',
    data() {

      return {

      }
    },

    methods: {

    },

    mounted() {

    },

    computed: {
      navigationAsideLinks() {
        return this.$store.getters.asideNavigationLinks;
      },

      usefulLinks() {
        return this.$store.state.usefulLinks;
      }
    }
  }
</script>
