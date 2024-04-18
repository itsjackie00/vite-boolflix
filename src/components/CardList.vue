<template>
    <div class="container">
        <h4 class="bg-dark text-white p-3 "></h4>
        <div class="row" id="card-container">
            <div class="col-12 col-md-6 col-lg-3 " v-for="(movie, index) in store.movies" :key="index">
                <CardComponent :id="movie.id" :title="movie.title" :image="movie.image.poster_path" :flag="movie.flag" />

            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store';

import CardComponent from './CardComponent.vue';

export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data () {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>