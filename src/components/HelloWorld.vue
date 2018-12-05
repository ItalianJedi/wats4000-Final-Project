<template>
  <div class="hello">
    <h1><strong>{{ msg }}</strong></h1>
    <h4><strong>A Vue JS Project Using The Open Movie Database API</strong></h4>
      <form v-on:submit.prevent="findMovies"> 
        <p><strong>Find a Movie:&nbsp;</strong><input type="text" v-model="movie" placeholder="Movie Search"> <button type="submit">Go</button></p>
      </form>
      
      <ul v-if="results && results.length > 0" class="results">
        <spinner v-if="showSpinner"></spinner>
        <hr>
        <h2>&#9734;&nbsp;<strong>Results</strong>&nbsp;&#9734;</h2>
        <transition-group name="zoomIn" enter-active-class="animated zoomIn">
        <li v-for="item in results" class="item" v-bind:key="item.Title">
          <p><strong>{{ item.Title }}</strong></p>
          <p><strong>{{ item.Type }}</strong></p>
          <p><strong>{{ item.Year }}</strong></p>
          <img v-bind:src="item.Poster" alt="item.Title" height="300" width="225">
        </li>
        </transition-group>
      </ul>

<!-- TODO: make sure No Movies Found works -->
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
import {API} from '@/common/api';
//import axios from 'axios'; -- old
//Note: According to the OMDb API documentation, you need to send all data requests to http://www.omdbapi.com/?apikey=[yourkey]&
//Note: s is the parameter for searching
//test the t parameter
//import CubeSpinner from '@/components/CubeSpinner';
import FadingCircle from '@/components/ChasingDots';


export default {
  name: 'HelloWorld',
  components: {
  //spinner: CubeSpinner
  spinner: FadingCircle
  },
  data () {
    return {
      msg: 'Movie Search Vue',
      results: '',
      errors: [],
      movie: '',
      showSpinner: false
    }
  },
    methods: {
      findMovies: function() {
        this.showSpinner = true,
        //axios.get('http://www.omdbapi.com/?apikey=bef8787f&',{
          API.get('find', {
          params: {
//Using s as the parameter works but will have to add "Search" this.results = response.data;
            s: this.movie
          }
        })
        .then( response => {
          console.log(response);
          this.showSpinner = false,
          this.results = response.data.Search;
        })
        .catch ( error => {
          console.log(error);
          this.showSpinner = false,
          this.errors.push(errors);
        })
      }
    },
    }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- TODO: add some animations -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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
}*/

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border-style: double;
  border-width: 3px #333;
  padding: 0.5rem;
  /*width: 200px;*/
  min-height: 100px;
  color: #3B3939;
  background: #D9D4D4;
}

.no-results li {
  border-style: dotted;
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

hr {
  margin-left: 75px;
  margin-right: 75px;
}
</style>
