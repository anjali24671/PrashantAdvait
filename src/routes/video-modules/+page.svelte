<script>
    import Slider from "../../lib/components/Slider.svelte";
    import searchQuery from '../stores/searchQuery'
    import { goto } from '$app/navigation';
    import {onMount, onDestroy} from 'svelte'
    import VideoSeries from "$lib/components/VideoSeries.svelte";

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

  
    // Example data structure
    export let data;
    const VideoCategoriesData = JSON.parse(data.VideoCategoriesDataJSON);

  </script>
  
  <div class="flex flex-col">

    {#each Object.keys(VideoCategoriesData) as key}

      <h1>{key}</h1>

      <Slider>
        {#each VideoCategoriesData[key] as category}
          <VideoSeries id={category._id} photoURL={category.photoURL} title={category.title} language={category.language}/>
        {/each}
      </Slider>
  
    {/each}

  </div>


 