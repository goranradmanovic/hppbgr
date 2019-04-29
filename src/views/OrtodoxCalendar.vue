<template lang="pug">
  .calendar
    h1(class='calendar__title') Црквени Календар

    form(class='calendar__form')
      select(v-model='selected' class='calendar__form--select' @change='selectedMonth()')
        option(v-for='month in months' :value='month.value' v-text='month.name' class='calendar__form--select--option')

    table(class='calendar__table')
      colgroup
        col(class='calendar__table--col1')
        col(class='calendar__table--col2')
        col(class='calendar__table--col3')
        col(class='calendar__table--col4')
        col(class='calendar__table--col5')

      thead(class='calendar__table--thead')
        tr(class='calendar__table--thead--row')
          th Дан
          th Нови
          th Стари
          th Празник
          th Пост

      tbody(class='calendar__table--tbody')
        tr(v-for='dayInMonth in daysInMonth' v-bind:class='{text__red: dayInMonth.cs}' class='calendar__table--tbody--row')
          td(v-html='dayInMonth.di')
          td {{ dayInMonth.d }}. {{ dayInMonth.m }}
          td {{ dayInMonth.st }}
          td(v-html='dayInMonth.pr')
          td {{ dayInMonth.p }}
</template>

<script>
  export default {
    name: 'calendar',
    data() {
      return {
        currentMonth: this.$store.state.currentMonth,
        daysInMonth: null,
        daysInMonthOriginalData: null,
        selected: null
      }
    },

    methods: {
        getCalandar() {
          //Get data from JOSN API
          this.$http.get('https://raw.githubusercontent.com/goranradmanovic/Test/master/calendar.json').then((data) => {
            //Storing orignial API data to the var
            this.daysInMonthOriginalData = data.body.kalendar;

            //Filter calendar data for current month
            this.daysInMonth = this.currentCalanderMonth(data.body.kalendar);

            this.isRedText();
          });
        },

        currentCalanderMonth(calendarData) {
          return calendarData.filter((month) => {
            return month.me == this.currentMonth;
          });
        },

        isRedText() {
          this.daysInMonth.forEach((element) => {
              //Adding new cs property - Red letter (crveno slovo u kalndaru)
              element.pr.includes('+++') ? element.cs = true : element.cs = false;
          });
        },

        selectedMonth() {
          //Setting up current month from dropdown
          this.currentMonth = (this.selected == 'null') ? this.$store.state.currentMonth : this.selected;

          //Looping trught orignial data and filtering current month
          this.daysInMonth = this.currentCalanderMonth(this.daysInMonthOriginalData);

          //Adding red text color
          this.isRedText();
        }
    },

    computed: {

      months() {
        return this.$store.state.months;
      }

    },

    mounted() {

    },

    created() {
      this.getCalandar();
    }
  }
</script>
