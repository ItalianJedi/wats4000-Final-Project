<template>
    <ul class="favmovies">
        <li><h2><strong>Favorite Movies</strong></h2></li>
        <li v-if="favoriteMovies.length < 1">Add some of your favorite movies.</li>
        <li v-for="movie in favoriteMovies">

        </li>
    </ul>
</template>

<script>
export default {
    name: 'FavoriteMovies',
    data () {
        return {}
    },
    props: {
        favoriteMovies: Array
    },
    methods: {
        removieMovie: function (movie) {
            let movieIndex = this.favoriteMovies.indexOf(movie);
            this.favoriteMovies.splice(moveIndex, 1);
            this.$ls.set('favoriteMovies', this.favoriteMovies);
        }
    }
}
</script>

<style scoped>
.favmovies {
    /*list-style-type: none;
    padding: 10px;
    background: #ccc;
    width: 25%;
    text-align: center;
    float: right;*/
}
.remove {
    font-size: 0.8rem;
    color: white;
    background: #AA0000;
    padding: 2px;
    cursor: crosshair;
}
</style>
