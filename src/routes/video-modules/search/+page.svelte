<script>
    import searchQuery from '../../stores/searchQuery'
    import { goto } from '$app/navigation';
    import Slider from '$lib/components/Slider.svelte';
    import {onMount, onDestroy} from 'svelte'

    export let data
    let unsubscribe;
    let initialUpdate = true;

    onMount(() => {
      // Subscribe to the searchQuery store
      unsubscribe = searchQuery.subscribe(async (query) => {
        if (!initialUpdate) {

          try {
            console.log("trying to go ")
            goto(`/video-modules/search?query=${query}`)

          } catch (error) {
                console.error("Error fetching books:", error);
            }
        }
      });

      // Mark the end of the initial update phase
      initialUpdate = false;
  });

  onDestroy(() => {
    // Clean up the subscription
    if (unsubscribe) unsubscribe();
  });

 
</script>

<Slider>
    {#each data.videoSeriesData[0] as video}
      <div class="card hover:bg-gray-500 p-3 rounded-[7px]">
        <a href="video-modules/{video._id}">
          <img src="{video.photoURL}" alt="unable to load" draggable="false"  class="card-image">
        </a>
        <h1>{video.title}</h1>
        <p>{video.language}</p>
      </div>
    {/each}
</Slider>
