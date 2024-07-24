<script>
    import {goto} from '$app/navigation'
    export let data;

    function gotoVideoDescription(id){
        goto(`/video-modules/${id}`)
    }
</script>


<div class="slider">
    <div class="slides" >
        {#each data as video}
            <button on:click={()=>gotoVideoDescription(video._id)}>
                <img alt="{video.title}" src="{video.photoURL}">
            </button>

        {/each}

        {#each data as video}
            <button on:click={()=>gotoVideoDescription(video._id)}>
                <img alt="{video.title}" src="{video.photoURL}">
            </button>
        {/each}

        
        {#each data as video}
            <button on:click={()=>gotoVideoDescription(video._id)}>
                <img alt="{video.title}" src="{video.photoURL}">
            </button>
        {/each}
       
       

    </div>
</div>


<style>
.slider {
    width: 113%;
    margin:30px 0;
    overflow: hidden;
    position: relative;
}

.slides {
    display: flex;
    width: calc(100% * 3);

    animation: slide 45s linear infinite;
    background-color:white;
    
}

.slides:hover{
    animation-play-state: paused;
   
}

.slides img {
    width: 150px;
    margin: 10px;
    margin-right:0px;
}

@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-20%); }
}
</style>