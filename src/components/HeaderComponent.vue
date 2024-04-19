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
                            <input class="form-control bg-dark text-white " type="text"
                                placeholder="Title, people, genres" v-model.trim="store.options.params.query"
                                @keyup.enter="searchMedia">
                            <button class="btn text-white " type="submit" @click="searchMedia">
                                <i class="fa-solid fa-magnifying-glass" v-if="showInput"></i>
                            </button>
                        </div>
                        <div class="icons-container">
                            <button class="btn text-white" @click="toggleInput">
                                <i class="fa-solid fa-magnifying-glass" v-if="!showInput"></i>
                            </button>
                            <button class="btn text-white">
                                Kids
                            </button>
                            <button class="btn text-white" @click="toggleNotDropdown">
                                <i class="fa-regular fa-bell"></i>
                                <div class="notification-dropdown">
                                    <div v-if="showDropdown" class="notification-list">
                                        <!-- Dropdown menu items here -->
                                        <a class="dropdown-item" href="#">Notification 1</a>
                                        <a class="dropdown-item" href="#">Notification 2</a>
                                        <!-- Add more items as needed -->
                                    </div>
                                </div>
                            </button>
                            <button class="btn text-white">
                                <i class="fa-regular fa-user"></i>
                            </button>
                            <button class="btn text-white">
                                <i class="fa-solid fa-caret-down"></i>
                            </button>
                        </div>
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
            showDropdown: false
        }
    },

    methods: {
        toggleInput() {
            this.showInput = !this.showInput
        },
        toggleNotDropdown() {
            this.showDropdown = !this.showDropdown;
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
    position: fixed;
    z-index: 999;

    .notification-list {
        position: absolute;
        top: 90px;
        right: 0;
        width: 300px;
        height: 300px;
        background-color: black;
    }

    ul {
        list-style: none;

        li {
            margin-right: 20px;

            a {
                color: white;
                text-decoration: none;
                text-transform: uppercase;
            }

            a:hover {
                color: grey;
            }

        }

        li:hover {
            transform: scale(1.1);
            transition: 0.5s;
        }
    }
    .fa-search {
        cursor: pointer;
    }

    
}
</style>