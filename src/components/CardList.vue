<template>
    <div class="container-fluid">
        <h4 class="text-white p-3 "> Movies </h4>
        <div class="d-flex flex-wrap">
            <div class="d-flex" id="card-container-top-10" ref="cardContainer">
                <div v-for="(movie, index) in store.movies" :key="index">
                    <div class="card-component card-component-hover">
                        <CardComponentHover :id="movie.id" :image="movie.image" :title="movie.title" :flag="movie.flag" :vote="movie.vote"  @mouseleave="hover = null" />
                    </div>
                    <CardComponent class="card-component" :id="movie.id" :image="movie.image"  @mouseover="hover = index"   :style="{ display: hover === index ? 'block' : 'none' }"/>
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
            <div class="d-flex" id="card-container-top-10">
                <div v-for="(tv, index) in store.tv" :key="index">
                    <CardComponent :id="tv.id" :title="tv.title" :image="tv.image" :flag="tv.flag" />
                </div>
            </div>
        </div>

        <div class="d-flex flex-column mt-5 ">
            <h4 class="text-white p-3 "> Most Popular in Italy </h4>
            <div class="d-flex" id="card-container-top-10" ref="cardContainer">
                <div v-for="(popular, index) in store.popular" :key="index">
                    <CardComponent :id="popular.id" :image="popular.image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

import CardComponent from './CardComponent.vue';
import CardComponentHover from './CardComponentHover.vue';

export default {
    name: 'CardList',
    components: {
        CardComponent,
        CardComponentHover
    },
    data() {
        return {
            store,
            hover: null
        }
    },
    mounted() {
        this.$refs.cardContainer.scrollLeft = this.$refs.cardContainer.scrollWidth;
    }
}
</script>

<style lang="scss" scoped>
#card-container-top-10 {
    display: flex;
    overflow: auto;
    white-space: nowrap;
    justify-content: start;
    align-items: start;
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

    .card-component-hover :hover {
        cursor: pointer;
        transform: scale(1.005);
        transition: all 0.5s;
    }

    .card-component-hover {
        position: absolute;
        top: 1000;
        z-index: 3000;
    }
    

}
</style>