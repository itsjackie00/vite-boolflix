<template>
 <HeaderComponent @searchResults="getMedia"/>
 <Jumbotron />
 <MainComponente />
</template>

<script>
import axios from 'axios';
import {store} from './store';

import HeaderComponent from './components/HeaderComponent.vue';
import Jumbotron from './components/Jumbotron.vue';
import MainComponente from './components/MainComponente.vue';


  export default {
    name: 'App',
    components: {
      HeaderComponent,
      Jumbotron,
      MainComponente
    },
    data () {
      return {
        store,
        countries: [
                {
                    am: 'et',
                    ar: 'sy',
                    az: 'az',
                    bn: 'bd',
                    be: 'by',
                    ca: 'es-ct',
                    cs: 'cz',
                    de: 'de',
                    el: 'gr',
                    en: 'gb',
                    es: 'es',
                    et: 'ee',
                    fa: 'ir',
                    fr: 'fr',
                    bg: 'bg',
                    ha: 'ne',
                    hi: 'in',
                    hu: 'hu',
                    hy: 'am',
                    it: 'it',
                    id: 'id',
                    ja: 'jp',
                    jv: 'id',
                    km: 'kh',
                    ko: 'kr',
                    lv: 'lv',
                    mr: 'in',
                    ms: 'my',
                    nl: 'nl',
                    pl: 'pl',
                    pt: 'pt',
                    ro: 'ro',
                    ru: 'ru',
                    sw: 'ke',
                    ta: 'lk',
                    te: 'in',
                    th: 'th',
                    tr: 'tr',
                    uk: 'ua',
                    uz: 'uz',
                    vi: 'vn',
                    zh: 'cn',
                }
              ]
            
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
              flag: movie.original_language,
              vote:movie.vote_average,
              countryflags: 'https://flagcdn.com/16x12/' + this.countries[0][movie.original_language] + '.png'
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
              flag: this.trending.original_language
            }
          })
          //console.log(this.store);
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
    },
    mounted() {
      console.log(this.countries[0]['am']);
    }
  }
</script>

<style lang="scss" scoped>

</style>