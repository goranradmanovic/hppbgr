<template lang="pug">
    .contact
      h1(class='contact__title') Контакт

      form(action='https://formspree.io/goranradmanovic@gmail.com' method='post' autocomplete='off' class='contact__form')
        input(type='text' name='name' class='contact__form--name' maxlength='50' minlength='5' pattern='^([- \\w\\d\\u00c0-\\u024f]+)$' placeholder='Име и Презиме' id='name' title='Ваше пуно име (специјални карактери нису дозвољени)' required)
        input(type='email' name='_replyto' class='contact__form--email' maxlength='50' pattern='^(([-\\w\\d]+)(\\.[-\\w\\d]+)*@([-\\w\\d]+)(\\.[-\\w\\d]+)*(\\.([a-zA-Z]{2,5}|[\\d]{1,3})){1,2})$' placeholder='Емаил' id='email' title='Валидна емаил адреса' required)
        textarea(class='contact__form--message' maxlength='1500' placeholder='Порука' id='message' required)
        input(type='submit' value='Пошаљи' class='contact__form--btn')

      iframe(id='gmap_canvas' class='contact__map' src='https://maps.google.com/maps?q=Mitropolita%20Georgija%20Nikolajevi%C4%87a%2050%2C%20Gradi%C5%A1ka&t=&z=15&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0')
</template>

<script>
  export default {
    name: 'contact',

    data() {
      return {

      }
    },

    methods: {
      //Function for validationg contact form
      validateContact() {

        let formInputs = document.querySelectorAll('#name, #email, #message');

        for (let i = 0; i < formInputs.length; i++) {
          //Add event listener for watching for changes in the input field (changes of value)
          formInputs[i].addEventListener('input', function() {

            //If field is empty and entered value is smaller then 3 char.  If field has pattern attr and if RegExp is different from true (regexp is false)
            if (this.value.trim() == '' || this.value.length < 3 || (this.getAttribute("pattern") && !new RegExp(this.getAttribute("pattern")).test(this.value))) {
              this.classList.add('input__error');
            } else {
              this.classList.remove('input__error');
            }
          });
        }
      }
    },

    mounted() {
      this.validateContact();
    }
  }
</script>
