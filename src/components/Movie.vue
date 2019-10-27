<template>
<div class="container">
  <section class="section detail-movie">
    <div class="card detail">
      <img :src="singleMovie.Poster" style="height:400px; width:-webkit-fill-available;padding:10px;">

      <div class="card desc">
        <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
        <p>{{ singleMovie.Plot}} </p>
        <h3>Actors: {{singleMovie.Actors}}</h3>
        <h4>Awards: {{singleMovie.Awards}}</h4>
        <p>Genre: {{singleMovie.Genre}}</p>
        <p>Rating: {{singleMovie.Ratings[0].Value}} IMDb</p>
      </div>
    </div>
    <div class="btn">
      <div class="button is-primary" @click="back">Back</div>
    </div>
  </section>
</div>

</template>

<script>
import movieApi from '@/services/MovieApi'
export default {
  props: ['id'],

  data () {
    return {
      singleMovie: '',
      loading: true,
      ratings: ''
    }
  },

  mounted () {
    movieApi.fetchSingleMovie(this.id)
      .then(response => {
        console.log(response)
        this.singleMovie = response
        this.ratings = this.singleMovie.Ratings
        this.ratings.forEach(function (element) {
          element.Value = parseFloat(element.Value.split(/\/|%/)[0])
          element.Value = element.Value <= 10 ? element.Value / 2 : element.Value / 20
        }
        )
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
