<script>
    import Slider from "../../lib/components/Slider.svelte";
    import BookHorizontal from "$lib/components/BookHorizontal.svelte";
    import BookVertical from "$lib/components/BookVertical.svelte";
    import {onMount, onDestroy} from 'svelte';
    import searchQuery from "../stores/searchQuery";
    
  
    import { goto } from '$app/navigation';

    export let data
    
    let books = [];
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



    <h1>NEW RELEASE</h1>
   
      <div>
        <Slider>
            {#each data.newRelease.newReleaseBooks as book}
                <BookHorizontal 
                  image={book.photoURL} 
                  book_name={book.name} 
                  book_price={book.price} 
                  book_id={book.id}
                  paper_id={book.paperID}/>
            {/each}  
        </Slider> 


        <h1>BESTSELLERS</h1>

        <Slider>
            {#each data.loadBestSeller.bestSellerBooks as book}
                <BookVertical image={book.photoURL}
                  paper_id={book.paperID} 
                  book_name={book.name} 
                  book_id={book.id} 
                  book_price={book.price} />
            {/each}  
        </Slider>
      </div>

   
    







