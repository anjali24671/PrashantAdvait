
<script>
    import searchQuery from '../stores/searchQuery'
    import {goto, invalidate} from '$app/navigation'
    import {onMount, onDestroy} from 'svelte'

    export let data

    /////
      let unsubscribe;
      let initialUpdate = true;

      onMount(() => {
        // Subscribe to the searchQuery store
        unsubscribe = searchQuery.subscribe(async (query) => {
          if (!initialUpdate) {

            try {
             
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
    /////

    let inputQuery = ''
    let selected=''

    function setQuery(){
        searchQuery.set(inputQuery)
    }

    function navigate(value){
        window.location.href = `/video-modules/tag/${value.target.value}`
    }

    const categories = JSON.parse(data.videoCategories)

</script>

<div>
    <header class="mx-4 my-6 mb-[40px] flex items-center  gap-2">
        <div><h2 class="md:text-lg text-sm font-bold italic text-orange-600">Video series</h2></div>
        <div class="flex gap-4 flex-col border overflow-hidden rounded-[8px]">
            <div class="flex md:w-[660px] relative">

                <select on:change={(e)=>navigate(e)} bind:value={selected} class="px-2 md:block hidden border-r text-xs w-[50px]">
                    
                    <option value="" disabled selected hidden>All</option>
                    {#each categories as category}
                        <option value="{category._id}">{category.name}</option>
                    {/each}

                </select>
                <input bind:value={inputQuery} class="w-full p-2 md:px-2 px-[40px] md:rounded-[0px] rounded-[8px]" placeholder="search for videos">
                <button on:click={setQuery} class="md:bg-orange-200 p-2 md:block hidden absolute h-full md:right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg>
                </button>

                <div class="md:hidden block self-center mx-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg>

                </div>

            
                
            </div>
            
        </div>
    </header>

</div>


<slot></slot>