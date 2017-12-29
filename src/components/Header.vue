<template>
  <div class="dash-header">
    <h1>Resolutions</h1>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dash-header {
    grid-row: 1;
    grid-column: 1 / 6;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>