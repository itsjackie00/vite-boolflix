<template>
    <div class="card mt-3">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title text-white ">{{ title }}</h5>
            <p class="card-text">
                <span>{{ flag }}</span>
                <br>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'image', 'flag']
    }
</script>

<style lang="scss" scoped>


</style>