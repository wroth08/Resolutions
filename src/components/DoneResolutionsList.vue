<template>
  <div class="resolutions-list">
    <h1>Daily</h1>
    <template v-for="(object) in ResolutionsDaily">
      <div v-bind:key="object.index" class="resolutions-list-item">
        <div class="goal-name">
          <h1>{{object.resolution_text}}</h1>
          <h2>{{object.per}} Goal</h2>
        </div>
        <h2>{{object.times_completed}} / {{object.times}}</h2>
      </div>
    </template>
    <h1>Weekly</h1>
    <template v-for="(object) in ResolutionsWeekly">
      <div v-bind:key="object.index" class="resolutions-list-item">
        <div class="goal-name">
          <h1>{{object.resolution_text}}</h1>
          <h2>{{object.per}} Goal</h2>
        </div>
        <h2>{{object.times_completed}} / {{object.times}}</h2>
      </div>
    </template>
    <h1>Monthly</h1>
    <template v-for="(object) in ResolutionsMonthly">
      <div v-bind:key="object.index" class="resolutions-list-item">
        <div class="goal-name">
          <h1>{{object.resolution_text}}</h1>
          <h2>{{object.per}} Goal</h2>
        </div>
        <h2>{{object.times_completed}} / {{object.times}}</h2>
      </div>
    </template>
    <h1>Yearly</h1>
    <template v-for="(object) in ResolutionsYearly">
      <div v-bind:key="object.index" class="resolutions-list-item">
        <div class="goal-name">
          <h1>{{object.resolution_text}}</h1>
          <h2>{{object.per}} Goal</h2>
        </div>
        <h2>{{object.times_completed}} / {{object.times}}</h2>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'ResolutionsList',
  data: function () {
    return {
    }
  },
  components: {
  },
  computed: {
    ResolutionsDaily () {
      return this.resolutions.filter((resolution) => resolution.done === true && resolution.per === 'Daily')
    },
    ResolutionsWeekly () {
      return this.resolutions.filter((resolution) => resolution.done === true && resolution.per === 'Weekly')
    },
    ResolutionsMonthly () {
      return this.resolutions.filter((resolution) => resolution.done === true && resolution.per === 'Monthly')
    },
    ResolutionsYearly () {
      return this.resolutions.filter((resolution) => resolution.done === true && resolution.per === 'Yearly')
    }
  },
  props: ['resolutions'],
  filters: {
    done: function (value) {
      value.filter((val) => val.done === true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resolutions-list {
    grid-column: 3 / 9;
    grid-row: auto;
}
.resolutions-list-item {
  border-bottom:5px solid #1acedb;
  margin-bottom: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
}
.goal-name {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.goal-name h1 {
  margin-bottom: 0;
}
.goal-name h2 {
  margin-top: 0;
}
</style>