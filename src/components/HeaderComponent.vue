<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <h1 class="text-danger text-uppercase p-3 ">Boolflix</h1>
                </div>
                <div class="col-3 p-4">
                    <input type="text" placeholder="Cerca">
                    <button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 100px;
    background-color: black;
}
</style>