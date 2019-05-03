<template lang="pug">
  .grid__header--container(:class='{"grid__header--container--pinned": pinned}')
    a(href="/" class='grid__header--container--logo')
      img(src='../assets/images/header-img/cross.webp' class='grid__header--container--logo--img' alt='cross.png')

    div(class='grid__header--container--mobile' ref='mobileNav')
      div(class='grid__header--container--mobile--btn' id='mobileNavBtn' @click='openMobileNav')
        span(v-for='i in 3' class='grid__header--container--mobile--btn--bar' ref='mobileNavBar')

    nav(class='grid__header--container--nav' ref='navigation')
      router-link(v-for="navigationLink in navigationLinks" :key='navigationLink.name' :to='navigationLink.path' id='navLink' class='grid__header--container--nav--item') {{ navigationLink.name }}
    //-
      nav(class='grid__header--nav' :class='{"grid__header--nav--pinned": pinned}')
        router-link(v-for="navigationLink in navigationLinks" :key='navigationLink.name' :to='navigationLink.path' class='grid__header--nav--item') {{ navigationLink.name }}
</template>

<script>
  export default {
    name: 'Navigation',
    data() {

      return {
        pinned: false,
      }
    },

    computed: {
      navigationLinks() {
        return this.$store.getters.mainNavigationLinks; //Return navigation links from store
      }
    },

    methods: {
      /*addScrollListener() {
        let pxTrigger = 0; //Trigger point where we start to reshow menu
        const menuHeight = 80;

        document.addEventListener('scroll', () => {

          const pxFromTop = window.scrollY || window.pageYOffset;

          if(pxFromTop > menuHeight) {
            this.pinned = pxFromTop < pxTrigger;

            pxTrigger = pxFromTop;
          } else {
          //  this.pinned = true; //Set pinned to true if we are on the top of the page
          }
        });
      }*/

      addScrollListener() {

        const menuHeight = 200;

        document.addEventListener('scroll', () => {

          const pxFromTop = window.scrollY || window.pageYOffset;

          if(pxFromTop > menuHeight) {
            this.pinned = true;
          } else {
            this.pinned = false;
          }
        });
      },

      openMobileNav() {
        this.$refs.navigation.classList.toggle('open'); //Main navigation links
        this.$refs.mobileNav.classList.toggle('open'); //Mobile nav header section

        //Mobile btn. bars
        this.$refs.mobileNavBar.forEach(element => {
          element.classList.toggle('clicked');
        });

        //Adding event listener on nav links and closing main mobile nav on click
        document.querySelectorAll('#navLink').forEach(element => {
          element.addEventListener('click', () => {
            this.$refs.navigation.classList.remove('open'); //Main navigation links
            this.$refs.mobileNav.classList.remove('open'); //Mobile nav header section
          })
        });
      }
    },

    mounted() {
      this.addScrollListener();
    }
  }
</script>

<style lang="sass">

  //.grid__header--nav
    position: fixed
    top: -80px
    width: 100%
    height: 80px
    display: flex
    justify-content: flex-end
    align-items: center
    background-color: transparent
    transition: all 400ms ease

    //+modifier('pinned')
      top: 0
      background-color: rgba(255, 255, 255, .9)

    //+modifier('item')
      padding: 0 5px
      text-decoration: none
      font-size: 1.2em
      font-weight: 600
      color: black

      //&::after
        content: "|"
        padding-left: 5px
        padding-right: 5px

      //&:last-child::after
        content: ""
        padding: 0

      //&:hover
        text-decoration: underline
</style>
