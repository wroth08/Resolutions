<template>
  <div class="dashboard">
    <Header/>
    <DashMenu/>
  </div>
</template>

<script>
import DashMenu from './DashMenu.vue'
import Header from './Header.vue'
export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  components: {
    DashMenu,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dashboard {
    width: 100vw;
    display: grid;
    grid-template-columns: 10px 300px 1fr 1fr 1fr;
    grid-template-rows: 100px 1fr 1fr 1fr;
    grid-gap: 10px;
}
</style>