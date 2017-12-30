<template>
    <div>
        <ResolutionsList/>
    </div>
</template>

<script>
import Dashboard from './Dashboard.vue'
import ResolutionsList from './ResolutionsList.vue'
export default {
  name: 'ToComplete',
  data () {
    return {
    }
  },
  components: {
    Dashboard,
    ResolutionsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>