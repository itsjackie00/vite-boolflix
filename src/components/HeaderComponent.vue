<template>
    <header>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" id="logo">
                        <img src="/images/Netflix_Logo_PMS.png" alt="Netflix Logo">
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
                        <div class="d-flex" role="search" v-if="showInput">
                            <input class="form-control " type="text" placeholder="Search" 
                                v-model.trim="store.options.params.query" @keyup.enter="searchMedia">
                            <button class="btn text-white bg-danger border " type="submit" @click="searchMedia">
                                Search
                            </button>
                        </div>
                        <button class="btn text-white" @click="toggleInput">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>

    </header>
</template>

<script>
import { store } from '../store';

export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            showInput: false,

        }
    },

    methods: {
        toggleInput() {
            this.showInput = !this.showInput

        },
        searchMedia() {
            if (!this.showInput) {
                this.toggleInput();
            } else {
                this.$emit('searchResults')
                this.store.options.params.query = '';
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.debug {
    border: 1px solid red;
}

#logo {
    img {
        width: 200px;
    }
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