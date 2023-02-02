<template>
    <div class="comm-pic">
        <figure><img src="@/assets/images/image1.jpg" alt="" /></figure>
    </div>
    <div class="comm-txt">
        <div class="comm-txt-top">
            <h4 class="c-hdr"><a href="#">The Lord of the Rings: The Return of the King</a></h4>
            <div class="right">
                <div class="date">
                    <span>June 10. 2021 </span>
                    <span>10:05</span>
                </div>
                <a href="#" class="delete pt-0">
                    <img src="@/assets/icons/delete.svg" class="dark-th" alt="" />
                    <img src="@/assets/icons/delete-blk.svg" class="light-th" alt="" />
                </a>
            </div>
        </div>
        <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Artic...  </p>
        <h5>replied to <span>Username</span></h5>
        <span class="like"><img src="@/assets/icons/like.svg" alt="" /> 2</span>
    </div>
</template>

<script>
    export default {
        name: 'CommunicationCardOne',
    }
</script>