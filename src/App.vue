<template>
 <HeaderComponent />
</template>

<script>
import axios from 'axios';
import {store} from './store';

import HeaderComponent from './components/HeaderComponent.vue';


  export default {
    name: 'App',
    components: {
      HeaderComponent
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
          console.log(res.data.results);
        })
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then 
        ((res) => {
          console.log(res.data.results);
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