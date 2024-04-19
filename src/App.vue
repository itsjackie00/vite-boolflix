<template>
 <HeaderComponent @searchResults="getMedia"/>
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
      getMedia(){
       if(this.store.options.params.query) {
         this.getMovies();
         this.getTvSeries();
       } 
      },
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then 
        ((res) => {
          this.store.movies = res.data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              image: this.store.imageUrl + movie.poster_path,
              flag: movie.original_language
            }
          })
          console.log(this.store);
        })
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then 
        ((res) => {
          this.store.tv = res.data.results.map((tv) => {
            return {
              id: tv.id,
              title: tv.title,
              image: this.store.imageUrl + tv.poster_path,
              flag: tv.original_language
            }
          })
          console.log(this.store);
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