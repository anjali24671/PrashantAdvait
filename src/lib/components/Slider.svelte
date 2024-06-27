<script>
  import { onMount } from 'svelte';
 

  let draggable = false;
  let startX, startScrollLeft;
  let slider_track;

  onMount(() => {
    // Ensure the card width is set based on the initial render
    window.addEventListener('resize', updateCardWidth);
    updateCardWidth(); // Initialize the card width
  });

  function startScroll(e) {
    e.preventDefault();
    draggable = true;
    startX = e.clientX || e.touches[0].clientX;
    startScrollLeft = slider_track.scrollLeft;
  }

  function stopScroll() {
    draggable = false;
  }

  function drag(e) {
    if (!draggable) return;
    const x = e.clientX || e.touches[0].clientX;
    slider_track.scrollLeft = startScrollLeft - (x - startX);
  }

  function leftScroll() {
    slider_track.scrollLeft -= slider_track.clientWidth;
  }

  function rightScroll() {
    slider_track.scrollLeft += slider_track.clientWidth;
  }

  function updateCardWidth() {
    // Adjust card width here if necessary
  }
</script>

<div class="slider-container relative">
  <div
    class="slider-track flex overflow-hidden"
    bind:this={slider_track}
    on:mousemove={drag}
    on:mousedown={startScroll}
    on:mouseup={stopScroll}
    on:mouseleave={stopScroll}
    on:touchstart={startScroll}
    on:touchend={stopScroll}
    on:touchmove={drag}
  >
    <slot></slot>
  </div>

  <div class="absolute top-[46%] left-[10px] bg-green-500">
    <button class="w-[50px] h-[50px]" on:click={leftScroll}>Left</button>
  </div>
  <div class="absolute top-[46%] right-[10px] bg-green-600">
    <button class="w-[50px] h-[50px]" on:click={rightScroll}>Right</button>
  </div>
</div>

<style>
  .slider-container {
    overflow: hidden;
    white-space: nowrap;
  }

  .slider-track {
    display: flex;
  
    scroll-behavior: smooth;
    cursor: grab;
  }


</style>