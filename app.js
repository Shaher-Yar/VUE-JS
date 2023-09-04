new Vue({
  el: '#app',
  data: {
    endDate: new Date('2023-12-31 23:59:59'), // Set your end date here
    currentTime: new Date(),
  },
  computed: {
    timeRemaining() {
      const timeDiff = this.endDate - this.currentTime;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    },
    formattedTime() {
      return {
        days: this.formatNumber(this.timeRemaining.days),
        hours: this.formatNumber(this.timeRemaining.hours),
        minutes: this.formatNumber(this.timeRemaining.minutes),
        seconds: this.formatNumber(this.timeRemaining.seconds),
      };
    },
  },
  methods: {
    formatNumber(number) {
      return number.toString().padStart(2, '0');
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
});
