<script>

</script>


<div class="slider">
    <div class="slides" >
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">

        <!---->
        <!-- <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
        <img class="w-[200px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg"> -->


    </div>
</div>


<style>
.slider {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.slides {
    display: flex;
    width: calc(100% * 8);
    animation: slide 20s linear infinite;
    
}

.slides:hover{
    animation-play-state: paused;
   
}

.slides img {
    width: 12.5%; /* 100% / 8 images */
}

@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
</style>