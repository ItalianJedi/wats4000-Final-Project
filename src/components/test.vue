<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>A Vue JS Project Using The Open Movie Database API</h4>
      <form v-on:submit.prevent="findMovies"> 
        <p>Find a Movie: <input type="text" v-model="movie" placeholder="Movie Search"> <button type="submit">Go</button></p>
      </form>

<!-- TODO: will want to bring back movie poster, title, and plot -->
      <ul v-if="results && results.length > 0" class="results">
        <li v-for="item in results" class="item">
          <p><strong>{{ item.Title }}</strong></p>
          <p>{{ item.Year }}</p>
        </li>
      </ul>

<!-- TODO: make sure No Movies Found works -->
      <div v-else-if="results && results.length === 0" class="no-results">
        <h2>No Movies Found</h2>
        <p>Oh Come On! It's not that hard to find a movie!</p>
      </div>

<!-- I tested this and error message works -->
      <ul v-if="errors.length > 0" class="errors">
        <li v-for="error in errors">
          {{ error.message }}
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
//Note: According to the OMDb API documentation, you need to send all data requests to http://www.omdbapi.com/?apikey=[yourkey]&
//Note: s is the parameter for searching

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Movie Search',
      results: '',
      errors: [],
      movie: ''
    }
  },
    methods: {
      findMovies: function() {
        axios.get('http://www.omdbapi.com/?apikey=bef8787f&', {
          params: {
            s: this.movie
          }
        })
        .then( response => {
          console.log(response);
          this.results = response.data.Search;
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

/*
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}*/

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  /*width: 200px;*/
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>
