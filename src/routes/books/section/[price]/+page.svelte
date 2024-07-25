<script>
    import BookHorizontal from "../../../../lib/components/BookHorizontal.svelte"
    import { onMount, onDestroy } from "svelte";
    import searchQuery from '../../../stores/searchQuery'
  
    import {goto} from '$app/navigation'

    export let data
   
    let unsubscribe
    let initialUpdate = true

    onMount(() => {
      // Subscribe to the searchQuery store
      unsubscribe = searchQuery.subscribe(async (query) => {
        if (!initialUpdate) {

          try {
            goto(`/books/search?query=${query}`)

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


{#if !data.ebooks[0]}
    <h1>no books exist</h1>
{:else}
    
    
    <div class="m-[2vw] flex justify-center md:justify-start items-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
            {#each data.ebooks as ebook}
                {#if ebook.paper_price}
                    <BookHorizontal image={ebook.photoURL} book_name={ebook.name} book_id={ebook._id} book_price={ebook.price} paper_price={ebook.paper_price} />
        
                {:else}
                <BookHorizontal image={ebook.photoURL} book_name={ebook.name} book_id={ebook._id} book_price={ebook.price} />
                {/if}
        
            {/each}
        </div>    
    </div>

{/if}




