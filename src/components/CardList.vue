<template>
    <div class="container-fluid">
        <h4 class="text-white p-3 "> Movies </h4>
        <div class="d-flex flex-wrap">
            <div class="d-flex" id="card-container-top-10" ref="cardContainer">
                <div v-for="(movie, index) in store.movies" :key="index">
                    <CardComponent :id="movie.id" :image="movie.image" />
                </div>
            </div>
        </div>

        <div class=" d-flex flex-column">
            <h4 class="text-white p-3 "> Top 10 in Italy Today </h4>
            <div id="card-container-top-10" ref="cardContainer">
                <div v-for="(trending, index) in store.trending.slice(0, 10)" :key="index">
                    <div class="d-flex">
                        <h2 class="big-number">{{ index + 1 }} </h2>
                        <CardComponent :id="trending.id" :image="trending.image" />
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column mt-5 ">
            <h4 class="text-white p-3 "> Tv Series </h4>
            <div class="d-flex" id="card-container-top-10" ref="cardContainer">
                <div v-for="(tv, index) in store.tv" :key="index">
                    <CardComponent :id="tv.id" :title="tv.title" :image="tv.image" :flag="tv.flag" />
                </div>
            </div>
        </div>

        <div class="d-flex flex-column mt-5 ">
            <h4 class="text-white p-3 "> Most Popular in Italy </h4>
            <div class="d-flex" id="card-container-top-10" ref="cardContainer">
                <div v-for="(popular, index) in store.popular" :key="index">
                    <CardComponent :id="popular.id" :image="popular.image"/>
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
    },
    mounted() {
        this.$refs.cardContainer.scrollLeft = 0;
    }
}
</script>

<style lang="scss" scoped>
#card-container-top-10 {
    display: flex;
    overflow: auto;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    scrollbar-width: none;

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