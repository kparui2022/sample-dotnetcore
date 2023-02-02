<template>
    <a href="#" class="image-innr">
        <figure class="hgt"><img :src="castList?.image" alt="" /></figure>
        <p>{{castList?.name}}</p>
        <p class="sub-para">{{castList?.designation}}</p>
    </a>
</template>


<script>
    export default {
        name: 'CastCrewCard',
        props : {
          castList: {
            type: Object,
          }
        }
        
    }
</script>