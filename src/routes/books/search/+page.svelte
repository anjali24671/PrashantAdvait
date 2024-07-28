<script>
    import BookHorizontal from "../../../lib/components/BookHorizontal.svelte"
    import searchQuery from '../../stores/searchQuery'
    import { goto } from '$app/navigation';
    import {onMount, onDestroy} from 'svelte'

    export let data
    let unsubscribe;
    let initialUpdate = true;


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


{#if !data.booksData[0]}
<div class="w-full ">
  <div class="flex items-center justify-center">
      <div>No books found.</div>
  </div>

</div>
{:else}
  
    <div class="m-[2vw] flex justify-center md:justify-start items-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
            {#each data.booksData as book}
                {#if book.paper_price}
                    <BookHorizontal image={book.photoURL} book_name={book.name} book_id={book._id} book_price={book.price} paper_price={book.paper_price} />
        
                {:else}
                <BookHorizontal image={book.photoURL} book_name={book.name} book_id={book._id} book_price={book.price} />
                {/if}
        
            {/each}
        </div>    
    </div>

{/if}