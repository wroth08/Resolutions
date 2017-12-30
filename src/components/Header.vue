<template>
  <div class="dash-header">
    <h1>Resolutions</h1>
    <h1>{{time}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  components: {
  },
  props: ['time']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dash-header {
    grid-row: 1;
    grid-column: 1 / 9;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
}
</style>