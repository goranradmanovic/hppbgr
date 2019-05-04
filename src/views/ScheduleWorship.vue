<template lang="pug">
  .scheduleworship
    h1(class='scheduleworship__title') Распоред богослужења

    .scheduleworship__content
      h3(class='scheduleworship__content--title') Јутрење:
      p(class='scheduleworship__content--text')
        time(datetime='08:00') 08:00 h

      h3(class='scheduleworship__content--title') Вечерње:
      p(class='scheduleworship__content--text')
        time(datetime='18:00') 18:00 h
</template>

<script>
  export default {
  }
</script>
