<template>
    <div class=" mt-3 d-flex ">
        <img :src="image" class="img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title text-white ">{{ title }}</h5>
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

.img-top{
    width: 200px;
    height: 300px;
    object-fit: cover;

}


</style>