<template>
  <div id="app">
    <div class="dashboard">
      <Header v-bind:time="time"/>
      <DashMenu/>
      <transition name="slide-fade">
        <router-view v-bind:resolutions="resolutions"/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import DashMenu from './components/DashMenu.vue'
var moment = require('moment')
export default {
  name: 'app',
  components: {
    Header,
    DashMenu
  },
  created () {
    this.fetchdata()
    this.setTime()
  },
  data () {
    return {
      resolutions: [],
      time: ''
    }
  },
  methods: {
    fetchdata () {
      fetch('http://localhost:3000/resolutions/1')
      .then((res) => res.json())
      .then((res) => {
        this.resolutions = res
      })
    },
    setTime () {
      let time = moment()
      let formattedTime = time.format('LL')
      this.time = formattedTime
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke;
  min-height: 100vh;
  margin: 0;
}
.dashboard {
    width: 100vw;
    display: grid;
    grid-template-columns: 10px 300px 1fr 1fr 1fr 1fr 1fr 10px;
    grid-template-rows: 100px 1fr 1fr 1fr;
    grid-gap: 15px;
}
</style>
