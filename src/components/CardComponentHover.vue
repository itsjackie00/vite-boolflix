<template>
    <div id="card2-hover">
        <div class=" mt-3 d-flex card hover-container bg-dark ">
            <img :src="image" class="img-top-hover" :alt="title">
            <div class="card-body">
            </div>
            <div class="icons-hover-container d-flex justify-content-between fs-4 mt-1 m-2">
                <div>
                    <button class="icons-hover bg-white ">
                        <i class="fa-solid fa-play "></i>
                    </button>
                    <button class="icons-hover">
                        <i class="fa-solid fa-plus text-white"></i>
                    </button>
                    <button class="icons-hover">
                        <i class="fa-solid fa-thumbs-up text-white"></i>
                    </button>
                </div>
                <div>
                    <button class="icons-hover">
                        <i class="fa-solid fa-caret-down fs-4 text-white"></i>
                    </button>
                </div>
            </div>
            <div class="m-2">
                <p class="text-white fs-5">{{ title }}</p>
                <span class="text-white">Original language</span>
                <img :src="countryflagimg" class="flag m-2"> 
                <div class="stars m-3 mb-5">
                    <i :class="vote >= n ? 'fa-solid fa-star text-warning' : 'fa-regular fa-star text-warning'" v-for="n in 5" :key="n" class="fa-star "></i>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';


export default {
    name: 'CardComponentHover',
    props: ['id', 'title', 'image', 'flag', 'vote', 'countryflagimg'],
    data() {
        return {
            store
        }
    },
    computed: {
        vote() {
            return Math.ceil(this.vote / 2);
        }
    }
}
</script>

<style lang="scss" scoped>
.img-top-hover {
    width: 400px;
    height: 350px;
    object-fit: cover;

}

.hover-container {
    width: 400px;

    .icons-hover-container {
        margin-top: -30px;
        padding-bottom: 30px;

    }

    .icons-hover {
        width: 40px;
        height: 40px;
        background-color: #212529;
        border-radius: 50%;
        margin-right: 10px;
        border: 1px solid white;

        &:hover {
            background-color: white;
        }
    }

    .flag {
        width: 25px;
    }
}
</style>