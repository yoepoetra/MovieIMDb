<template>
<div class="container">
    <section class="section movie-card" v-for="(item, index) in movieResponse" :key="index">
        <div class="card movie-view">
          <img :src="item.Poster">

          <div class="card desc">
            <div>
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </div>

          <div class="btn" style="margin-left:115px;">
            <div class="button is-primary" @click="singleMovie(item.imdbID)">View</div>
          </div>
        </div>
    </section>
  </div>

</template>

<script>
import movieApi from '@/services/MovieApi'

export default {
  props: ['name'],
  data () {
    return {
      movieResponse: [],
      loading: true,
      noData: false
    }
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    },

    fetchResult (value) {
      movieApi.fetchMovieCollection(value)
        .then(response => {
          if (response.Response === 'True') {
            this.movieResponse = response.Search
            this.loading = false
            this.noData = false
          } else {
            this.noData = true
            this.loading = false
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchResult(this.name)
  },
  watch: {
    name (value) {
      this.fetchResult(value)
    }
  }
}
</script>
