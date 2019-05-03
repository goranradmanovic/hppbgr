<template lang="pug">
  .grid__footer--container
    .grid__footer--container--logo

    .grid__footer--container--nav
      ul(class='grid__footer--container--nav--list')
        li(v-for='allPageLink in allPageLinks' class='grid__footer--container--nav--list--item')
          router-link(:key='allPageLink.name' :to='allPageLink.path' class='grid__footer--container--nav--list--item--link') {{ allPageLink.name }}

    .grid__footer--container--info
      address(class='grid__footer--container--info--address')
        .grid__footer--container--info--address--item Храм Покорова Пресвете Богородице
        .grid__footer--container--info--address--item Митрополита Георгија Николајевића,
        .grid__footer--container--info--address--item 78400 Градишка, Република Српска
        .grid__footer--container--info--address--item Тел: ++387 051 000 000
        .grid__footer--container--info--address--item Емаил:&nbsp;
          a(href='mailto: example@example.com' class='grid__footer--container--info--address--item--email') example@example.com
        .grid__footer--container--info--address--item
          router-link(:to="{ name: 'home', params: {} }" target='_blank' class='grid__footer--container--info--address--item--link') Храм Покорова Пресвете Богородице
        .grid__footer--container--info--address--item &copy; Copyright {{ getCurrentYear }}
        .grid__footer--container--info--address--item  Дизајн и развој
          a(href='https://goranradmanovic.github.io/' target='_blank' class='grid__footer--container--info--address--item--link')  ГР
</template>

<script>

  export default {
    name: 'Footer',

    computed: {
      allPageLinks() {
        return this.$store.state.navLinks;
      },

      getCurrentYear() {
        return this.$store.state.currentYear;
      }
    }
  }

</script>
