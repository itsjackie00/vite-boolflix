<template>
    <header>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <h1 class="text-danger text-uppercase">Boolflix</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">
                                    Tv Series
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#">
                                    Movies
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#">
                                    Recently Added
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#">
                                    My List
                                </a>
                            </li>
                        </ul>
                        <div class="d-flex" role="search">
                            <input class="form-control " type="search" placeholder="Search" aria-label="Search" v-model="searchText" accordion 
                            v-if="showInput" @keyup.enter="submitSearch">
                            <button class="btn text-white" type="submit"  @click="toggleInput">
                                <i class="fa-solid fa-magnifying-glass"
                                v-if="!showInput"></i>
                            </button> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            showInput: false,
            searchText: ''
        }
    },

    methods: {
        toggleInput() {
            this.showInput = !this.showInput
            this.searchText = ''
        },
        submitSearch() {
            console.log(`Searching for: ${this.searchText}`);
            this.toggleInput();
        },

    }
}
</script>

<style lang="scss" scoped>
.debug {
    border: 1px solid red;
}

header {
    width: 100%;
    height: 100px;
    background-color: black;

    ul {
        list-style: none;

        li {
            margin-right: 20px;

            a {
                color: white;
                text-decoration: none;
                text-transform: uppercase;
            }
        }
    }

    .fa-search {
        cursor: pointer;
    }

}
</style>