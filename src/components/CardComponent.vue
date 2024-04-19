<template>
    <div class="card mt-3">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title text-white ">{{ title }}</h5>
            <p class="card-text">
                <span>{{ flag }}</span>
                <br>
                <span>{{ }}</span>
                <br>
            </p>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        name: 'CardComponent',
         props: ['id', 'title', 'image', 'flag', 'original_title'],
         data () {
             return {
                 store
             }
         },
         mounted () {
             //console.log(this.id, this.title, this.image, this.flag, this.original_title);
             //console.log(this.imageUrl);
         }
    }
    

</script>

<style lang="scss" scoped>


</style>