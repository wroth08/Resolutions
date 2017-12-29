<template>
  <div class="dash-menu">
    <div class="menu-item">
      <Icon name="dashboard"/>
      <h2>Dashboard</h2>
    </div>
    <div class="menu-item">
      <Icon name="calendar"/>
      <h2>Calendar</h2>
    </div>
    <div class="drop">
      <div class="menu-item">
        <Icon name="bars"/>
        <div class="dropdown">
          <h2>Goal Categories</h2>
          <Icon name="chevron-down"/>
        </div>
      </div>
      <div class="droplist">
        <div class="menu-item sub">
          <Icon name="briefcase"/>
          <h2>Work</h2>
        </div>
        <div class="menu-item sub">
          <Icon name="building"/>
          <h2>Personal</h2>
        </div>
        <div class="menu-item sub">
          <Icon name="medkit"/>
          <h2>Health</h2>
        </div>
      </div>
    </div>
    <div class="menu-item">
        <Icon name="calendar-check-o"/>
        <h2>By Goal Frequency</h2>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'DashMenu',
  data () {
    return {
    }
  },
  components: {
    Icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: white;
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
  color: #1acedb;
}
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
  color: #1acedb;
  font-size: 2em;
}
.dash-menu {
    background-color: black;
    grid-column: 2;
    grid-row: 2 / 4;
}
.menu-item {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 5%;
  justify-content: space-between;
}
.menu-item:hover {
  background-color: rgb(63, 63, 63);
  cursor: pointer;
}
.dropdown {
  display: flex;
  align-items: center;
}
.parent {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drop:hover > .droplist .sub {
  visibility: visible;
  display: block;
  height: 40px;
  display: flex;
  background-color: black;
  padding: 5%;
  justify-content: space-between;
}
.drop:hover .droplist {
  max-height: 500px;
    transition: max-height 0.8s ease-in;
}
.droplist {
    max-height: 0;
      transition: max-height 1s ease-out;
    overflow: hidden;
}
.dropdown svg {
  font-size: 1em;
  margin-left: 10px;
}
</style>