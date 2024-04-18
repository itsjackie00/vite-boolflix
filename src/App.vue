<template>
 <HeaderComponent />
 <MainComponente />
</template>

<script>
import axios from 'axios';
import {store} from './store';

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponente from './components/MainComponente.vue';


  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponente
    },
    data () {
      return {
        store
      }
    },
    methods: {
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then 
        ((res) => {
          this.store.movies = res.data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              image: movie.poster_path,
              flag: movie.original_language
            }
          })
          console.log(res.data.results);
        })
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then 
        ((res) => {
          //console.log(res.data.results);
        })
      }

      },
    created(){
      this.getMovies();
      this.getTvSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>