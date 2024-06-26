<script>
  import { onMount } from 'svelte';

  export let data; // Data for the cards

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
    <div class="card hover:bg-gray-500 p-3 rounded-[7px]">
      <img src="{category.photoURL}" alt="unable to load" draggable="false" class="card-image">
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
  .slider-container {
    overflow: hidden;
    white-space: nowrap;
  }

  .slider-track {
    display: flex;
    gap: 1rem;
    scroll-behavior: smooth;
    cursor: grab;
  }

  .card {
    flex: 0 0 auto; /* Prevents flex items from stretching */
    width: 80vw; /* Use viewport width for responsiveness */
    height: auto; /* Automatically adjust height based on content */
    max-width: 300px; /* Max width to prevent excessive growth on large screens */
    min-width: 150px; /* Min width to ensure readability on small screens */
    aspect-ratio: 1; /* Maintain a square aspect ratio */
    box-sizing: border-box;
  }

  .card-image {
    width: 100%; /* Make image responsive */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the entire card space */
    border-radius: 5px; /* Optional: Rounded corners */
  }

  /* Responsive media queries */
  @media (min-width: 600px) {
    .card {
      width: 45vw; /* Adjust width for medium screens */
    }
  }

  @media (min-width: 900px) {
    .card {
      width: 30vw; /* Adjust width for large screens */
    }
  }

  @media (min-width: 1200px) {
    .card {
      width: 20vw; /* Adjust width for extra-large screens */
    }
  }

  @media (min-width: 1500px) {
    .card {
      width: 15vw; /* Adjust width for ultra-large screens */
    }
  }
</style>
