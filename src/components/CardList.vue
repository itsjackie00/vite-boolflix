<template>
    <div class="container">
        <h4 class="text-white p-3 "> Movies </h4>
        <div class="row" id="card-container">
            <div class="col-12 col-md-6 col-lg-3 " v-for="(movie, index) in store.movies" :key="index">
                <CardComponent :id="movie.id" :title="movie.title" :image="movie.image" :flag="movie.flag" />
            </div>
            <h4 class="text-white p-3 "> Tv Series </h4>
            <div class="row" id="card-container">
                <div class="col-12 col-md-6 col-lg-3 " v-for="(tv, index) in store.tv" :key="index">
                    <CardComponent :id="tv.id" :title="tv.title" :image="tv.image" :flag="tv.flag" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

import CardComponent from './CardComponent.vue';

export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>