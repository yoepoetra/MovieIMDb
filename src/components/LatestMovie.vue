<template>
<div class="container">
  <section class="section movie-card" v-for="(item, index) in wholeResponse" :key="index">
    <div class="card movie-view">
      <img :src="item.Poster">

      <div class="card desc">
        <h2>{{item.Title}}</h2>
        <div>Year: {{item.Year}}</div>
        <div>Type: {{item.Type}}</div>
        <div>IMDB-id: {{item.imdbID}}</div>
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
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
    movieApi.fetchMovieCollection('taken')
      .then(response => {
        this.wholeResponse = response.Search
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    }
  }
}
</script>
