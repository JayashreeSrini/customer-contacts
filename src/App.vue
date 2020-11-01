<template>
  <img alt="Vue logo" src="./assets/customer-contacts.jpg" />
  <div id="nav" class="nav is-size-4">
    <router-link to="/">View Contacts</router-link> |
    <router-link to="/edit-contacts">Add Contacts</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
