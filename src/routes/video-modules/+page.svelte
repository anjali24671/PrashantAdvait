<script>
    import Slider from "../../lib/components/Slider.svelte";
  
    // Example data structure
    export let data;
    const VideoCategoriesData = JSON.parse(data.VideoCategoriesDataJSON);
  </script>
  
  <div class="flex flex-col">
    {#each Object.keys(VideoCategoriesData) as key}
      <h1>{key}</h1>
      <Slider data={VideoCategoriesData[key]} />
    {/each}
  </div>
  