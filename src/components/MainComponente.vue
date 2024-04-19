<template>
    <main>
        <CardList />
    </main>
</template>

<script>
import CardList from './CardList.vue';
    export default {
        name: 'MainComponente',
        components: {
            CardList
        }
    }
</script>

<style lang="scss" scoped>
main{
    background-color: #141414;
    color : white;
}

</style>