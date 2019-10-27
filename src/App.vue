<template>
  <div id="app">
    <b-navbar class="nav" :fixed-top="true" :spaced="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Movie Galery
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <section>
            <b-field>
                <b-input v-model="searchString" rounded></b-input>
            </b-field>
          </section>
          <section>
            <button class="button is-rounded" @click="searchMovie">
                Search
            </button>
          </section>
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>
