<template lang="pug">
  .priesthood
    h1(class='priesthood__title') Свештенство храма

    .priesthood__content(v-for='priesthoodBio in priesthoodBios')

      img(:src='priesthoodBio.image' class='priesthood__content--img' alt='Profile image.jpg')

      .priesthood__content--wrapper
        .priesthood__content--wrapper--title {{ priesthoodBio.title }} {{ priesthoodBio.name }} {{ priesthoodBio.job }}
        .priesthood__content--wrapper--bio {{ priesthoodBio.bio }}
        .priesthood__content--wrapper--spouse Ожењен супругом {{ priesthoodBio.spouse }}
        .priesthood__content--wrapper--children Дјеца: {{ priesthoodBio.children }}
        .priesthood__content--wrapper--saint Крсна слава: {{ priesthoodBio.saint }}
        .priesthood__content--wrapper--phone Контакт: {{ priesthoodBio.phone }}
        .priesthood__content--wrapper--email Емаил: 
          a(href='mailto:${priesthoodBio.email}') {{ priesthoodBio.email }}
</template>

<script>

  export default {
    name: 'priesthood',

    computed: {

      priesthoodBios() {
        return this.$store.state.priestsBios;
      }
    }
  }

</script>
