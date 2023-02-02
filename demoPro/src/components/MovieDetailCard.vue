<template>
    <div class="movie-detail">
        <figure class="prize-img">
            <img src="@/assets/images/award-img.png" alt="award">
        </figure>
        <div class="m-content">
            <span>
                <figure><img src="@/assets/icons/trophy.svg" alt="trophy"></figure>
                <p>WINNER</p>
            </span>
            <h3>Movie title</h3>
            <p>Director Name</p>
        </div>
        
    </div>
    <div class="nominee-content">
        <h4>Nominees</h4>
        <ul>
            <li>
                <p>The Hobbit: An Unexpected Journey</p><span>Peter Jackson</span>
            </li>
            <li>
                <p>The Hobbit: An Unexpected Journey</p><span>Peter Jackson</span>
            </li>
            <li>
                <p>Avengers: Infinity War</p><span>Joe Russo</span>
            </li>
            <li>
                <p>Doctor Strange in the Multiverse of Madness</p><span>Sam Raimi</span>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'MovieDetailCard',
    }
</script>