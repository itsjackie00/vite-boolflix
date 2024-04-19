<template>
    <div class="">
        <h4 class="text-white p-3 "> Movies </h4>
        <div class="row" id="card-container">
            <div class="col-12 col-md-6 col-lg-3 " v-for="(movie, index) in store.movies" :key="index">
                <CardComponent :id="movie.id" :title="movie.title" :image="movie.image" :flag="movie.flag" />
            </div>
        </div>

        <div class=" d-flex flex-wrap">
            <h4 class="text-white p-3 "> Top 10 </h4>
            <div id="card-container-top-10">
                <div v-for="(trending, index) in store.trending.slice(0, 10)" :key="index">
                    <div class="d-flex">
                        <h2 class="big-number">
                            {{ index + 1 }}
                        </h2>
                        <CardComponent :id="trending.id" :image="trending.image" />
                    </div>
                </div>
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

<style lang="scss" scoped>
#card-container-top-10 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

    .card {
        width: 200px;
        height: 300px;
        margin-top: 1rem;

        img {
            width: 150px;
            height: 200px;
            object-fit: cover;
        }
    }

    .big-number {
        font-size: 320px;
        margin-right: 20px;
        color: black;
        font-weight: 900;
        text-shadow: #6a6a6a 2px 10px 20px;
        padding: -10px;
        margin-right: -50px;

    }
}
</style>