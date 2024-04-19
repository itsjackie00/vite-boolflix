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
         this.getTrending();
         this.getPopular();
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
          //console.log(this.store);
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
          //console.log(this.store);
        })
      },
      getTrending(){
        axios.get(this.store.apiUrl + this.store.endPoint.trending, this.store.options).then
        ((res) => {
          this.store.trending = res.data.results.map((trending) => {
            return {
              id: trending.id,
              title: trending.title,
              image: this.store.imageUrl + trending.poster_path,
              flag: trending.original_language
            }
          })
          console.log(this.store);
        })
      },
      getPopular(){
        axios.get(this.store.apiUrl + this.store.endPoint.popular, this.store.options).then
        ((res) => {
          this.store.popular = res.data.results.map((popular) => {
            return {
              id: popular.id,
              title: popular.title, 
              image: this.store.imageUrl + popular.poster_path,
              flag: popular.original_language
            }
          })
        })
      },
    },
    created(){
      this.getMovies();
      this.getTvSeries();
      this.getTrending();
      this.getPopular();
    }
  }
</script>

<style lang="scss" scoped>

</style>