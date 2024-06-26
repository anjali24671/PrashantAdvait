<script>
  import { onMount } from 'svelte';

  export let data; // Data for the cards

  let draggable = false;
  let startX, startScrollLeft;
  let slider_track; // Reference to slider-track DOM element
  let card_width;

  onMount(() => {
    // Initialize card_width on mount
    card_width = slider_track.querySelector(".card").getBoundingClientRect().width;

    // Adjust card width on window resize
    window.addEventListener('resize', () => {
      card_width = slider_track.querySelector(".card").getBoundingClientRect().width;
    });
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
    slider_track.scrollLeft -= card_width;
  }

  function rightScroll() {
    slider_track.scrollLeft += card_width;
  }
</script>

<div class="slider-container relative">
  <div
    class="slider-track flex gap-2 overflow-hidden"
    bind:this={slider_track}
    on:mousemove={drag}
    on:mousedown={startScroll}
    on:mouseup={stopScroll}
    on:mouseleave={stopScroll}
    on:touchstart={startScroll}
    on:touchend={stopScroll}
    on:touchmove={drag}
  >
    {#each data as category}
    <div class="card hover:bg-gray-500 min-w-[65%] lg:min-w-[18%] md:min-w-[25%] sm:min-w-[40%] aspect-[1] p-3 rounded-[7px]">
      <img src="{category.photoURL}" alt="unable to load" draggable="false" class="mb-3">
      <h1>{category.title}</h1>
      <p>{category.language}</p>
    </div>
    {/each}
  </div> 

  <div class="absolute top-[46%] left-[10px] bg-green-500">
    <button class="w-[50px] h-[50px]" on:click={leftScroll}>Left</button>
  </div>
  <div class="absolute top-[46%] right-[10px] bg-green-600">
    <button class="w-[50px] h-[50px]" on:click={rightScroll}>Right</button>
  </div>
</div>

<style>
  .slider-track {
    scroll-behavior: smooth;
    cursor: grab;
  }
  .card {
    user-select: none;
    cursor: grab;
  }
</style>



