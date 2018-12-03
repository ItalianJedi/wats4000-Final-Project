<template>
  <div id="app">
    <img src="./assets/movie.png">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #F0EDED;
}

img {
  border: double;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*font-family: 'Limelight', cursive;*/
  font-family: 'Poiret One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
