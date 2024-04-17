<template>
    <header>
        <div class="container">
            <div class="row p-3">
                <div class="col-8 col-sm-6 col-md-7 col-lg-8 col-xl-9 d-flex align-items-center">
                    <h1 class="text-danger text-uppercase ">Boolflix</h1>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex align-items-center">
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