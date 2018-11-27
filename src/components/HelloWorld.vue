<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>A Vue JS Project Using The Open Movie Database API</h4>
<!-- TODO: Will want to set up a on click event listener -->
      <form on-submit:prevent="Movies"> 
        <p>Enter Movie Title: <input type="text" v-model="query" placeholder="Movie Title"> <button type="submit">Go</button></p></p>
      </form>
<!-- TODO: Unordered list with v-for loop to loop the results of search -->

  </div>
</template>

<script>
//TODO: Add the OMDb API
//key: bef8787f
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=bef8787f
//TODO: s is the parameter for title, which is what the user will be searching for
//TODO: will want to bring back movie poster, title, and description

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Movie Search',
      posts: [],
      errors: [],
      query: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- TODO: add some animations -->
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
</style>
