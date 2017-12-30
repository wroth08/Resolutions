<template>
  <div id="app">
    <div class="dashboard">
      <Header/>
      <DashMenu/>
      <router-view v-bind:resolutions="resolutions"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import DashMenu from './components/DashMenu.vue'
export default {
  name: 'app',
  components: {
    Header,
    DashMenu
  },
  created () {
    this.fetchdata()
  },
  data () {
    return {
      resolutions: []
    }
  },
  methods: {
    fetchdata () {
      fetch('http://localhost:3000/resolutions/1')
      .then((res) => res.json())
      .then((res) => {
        this.resolutions = res
      })
    }
  }
}
</script>

<style>
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
