<template>
    <div id="jumbotron">
        <video src="/video/AnneOfficialTrailerNetflix.mp4" autoplay loop muted></video>
        <div class="container-fluid on-top-content m-5">
            <div class="d-flex">
                <h2 class="text-secondary text-uppercase ">Tv shows</h2>
            <select name="genres" id="selectGenres" class="mx-5 bg-dark text-white text-center ">
                <option value="all">Genres</option>
                <option value="Action"> Action</option>
                <option value="Comedy"> Comedy</option>
                <option value="Drama"> Drama</option>
                <option value="Horror"> Horror</option>
                <option value="Romance"> Romance</option>
                <option value="Thriller"> Thriller</option>
                <option value="Western"> Western</option>
                <option value="Animation"> Animation</option>
                <option value="Documentary"> Documentary</option>
                <option value="Science Fiction"> Science Fiction</option>
                <option value="Crime"> Crime</option>
                <option value="Mystery"> Mystery</option>
                <option value="Family"> Family</option>
                <option value="Fantasy"> Fantasy</option>
                <option value="Music"> Music</option>
            </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Jumbotron'
    }
</script>

<style lang="scss" scoped>
#jumbotron {
    padding-top: 100px;
    width: 100%;
    height: 100vh;
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    .on-top-content {
        position: relative;
        top: 0;
        left: 0;

    }
}
</style>