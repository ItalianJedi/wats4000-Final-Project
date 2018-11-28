<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>A Vue JS Project Using The Open Movie Database API</h4>
<!-- TODO: Will want to set up a on click event listener -->
      <form on-submit:prevent="findMovies"> 
        <p>Enter Movie Title: <input type="text" v-model="title" placeholder="Movie Title"> <button type="submit">Go</button></p>
      </form>
<!-- TODO: Unordered list with v-for loop to loop the results of search -->
      <ul v-if="results && results.length > 0" class="results">
        <li v-for="item in results" class="item">
          <h2>{{ item.title }}</h2>
        </li>
<!-- TODO: will want to bring back movie poster, title, and plot -->
      </ul>

      <div v-else-if="results && results.length === 0" class="no-results">
        <h2>No Movies Found</h2>
        <p>Oh Come On! It's not that hard to find a movie!</p>
      </div>

      <ul v-if="errors.length > 0" class="errors">
        <li v-for="error in errors">
          {{ error.message }}
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
//key: bef8787f
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=bef8787f
//TODO: s is the parameter for title, which is what the user will be searching for


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Movie Search',
      results: null,
      errors: [],
      title: '',
      plot: ''
    }
  },
    methods: {
      findMovies: function() {
        axios.get('http://www.omdbapi.com/?apikey=bef8787f&', {
          params: {
            APPID: 'bef8787f',
            t: this.title,
            plot: this.plot
          }
        })
        .then( response => {
          this.results = response.data;
        })
        .catch ( error => {
          this.errors.push(error);
        })
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
