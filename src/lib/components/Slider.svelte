<script>
  import { onMount } from 'svelte';

  let draggable = false;
  let startX, startScrollLeft;
  let slider_track;

  onMount(() => {
    window.addEventListener('resize', updateCardWidth);
    updateCardWidth();
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

  <div class="absolute top-[46%] left-[10px] rounded-[50%] px-2 py-1 border border-orange-600 border-[2px] bg-white">
    <button on:click={leftScroll}>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" class="h-3 w-4 fill-current text-orange-600">
        <path fill-rule="evenodd" d="M7.244 12.249a.89.89 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.89.89 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212"></path>
      </svg>
    </button>
  </div>
  <div class="absolute top-[46%] right-[10px] rounded-[50%] px-2 py-1 border border-orange-600 border-[2px] bg-white">
    <button on:click={rightScroll}>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" class="fill-current text-orange-600">
        <path fill-rule="evenodd" d="M7.756.751a.89.89 0 0 1 1.238 0l5.25 5.143a.845.845 0 0 1 0 1.212l-5.25 5.143a.89.89 0 0 1-1.238 0 .845.845 0 0 1 0-1.212l3.757-3.68H1.375A.866.866 0 0 1 .5 6.5c0-.473.392-.857.875-.857h10.138l-3.757-3.68a.845.845 0 0 1 0-1.212"></path>
      </svg>   
    </button>
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