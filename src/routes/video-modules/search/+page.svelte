<script>
    import searchQuery from '../../stores/searchQuery'
    import { goto } from '$app/navigation';
    import Slider from '$lib/components/Slider.svelte';
    import {onMount, onDestroy} from 'svelte'
    import VideoSeries from "../../../lib/components/VideoSeries.svelte"

    export let data
  //   let unsubscribe;
  //   let initialUpdate = true;

  //   onMount(() => {
  //     // Subscribe to the searchQuery store
  //     unsubscribe = searchQuery.subscribe(async (query) => {
  //       if (!initialUpdate) {

  //         try {
  //           console.log("trying to go ")
  //           goto(`/video-modules/search?query=${query}`)

  //         } catch (error) {
  //               console.error("Error fetching books:", error);
  //           }
  //       }
  //     });

  //     // Mark the end of the initial update phase
  //     initialUpdate = false;
  // });

  // onDestroy(() => {
  //   // Clean up the subscription
  //   if (unsubscribe) unsubscribe();
  // });

 
</script>

{#if data.videoSeriesData[0][0]}

 
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      {#each data.videoSeriesData[0] as video}
        <VideoSeries id={video._id} photoURL={video.photoURL} title={video.title} language={video.language} />
      {/each}
    </div>

{:else}
  <h1>No video modules exists</h1>

{/if}
