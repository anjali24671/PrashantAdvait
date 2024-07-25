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

<div class="mx-[47px] mt-[50px] ">

  
  <div class='flex flex-col gap-[70px]'>
    <div>
      <h1 class="md:text-xl text-lg font-semibold mx-3 ">NEW RELEASE</h1>
      <Slider>
        {#each data.newRelease.newReleaseBooks as book}
          <BookHorizontal 
            image={book.photoURL} 
            book_name={book.name} 
            book_price={book.price} 
            book_id={book.id}
            paper_id={book.paperID}
            paper_price={book.paperPrice}/>
        {/each}  
      </Slider> 
    </div>

    <div class="bg-[#f1f5f9]  p-4">
      <h1 class="text-lg md:text-xl font-semibold md:mx-3 mx-1">SPIRITUAL WISDOM</h1>
      <Slider>
        {#each data.newCategories.spiritualWisdomResponse as book}
          <BookVertical 
            image={book.photoURL}
            paper_id={book.paperID} 
            book_name={book.name} 
            book_id={book._id} 
            book_price={book.price}
            paper_price={book.paperPrice} />
        {/each}  
      </Slider>
    </div>



    <div class="flex md:flex-row flex-col my-5 gap-5">
      <div class="md:w-[47%] bg-[#f1f5f9]  p-3">
        
        <h1 class="text-lg md:text-xl font-semibold  md:mx-3 mx-1">VEGANISM AND ENVIRONMENT</h1>
        <Slider>
          {#each data.newCategories.veganismResponse as book}
            <BookVertical 
              image={book.photoURL}
              paper_id={book.paperID} 
              book_name={book.name} 
              book_id={book._id} 
              book_price={book.price}
              paper_price={book.paperPrice} />
          {/each}  
        </Slider>
      </div>

      <div class="md:w-[50%]  bg-[#f1f5f9] p-3">
      
        <h1 class="text-lg md:text-xl font-semibold md:mx-3 mx-1 ">LIFE PROBLEMS</h1>
        <Slider>
          {#each data.newCategories.lifeProblemCategoryResponse as book}
            <BookVertical 
              image={book.photoURL}
              paper_id={book.paperID} 
              book_name={book.name} 
              book_id={book._id} 
              book_price={book.price}
              paper_price={book.paperPrice} />
          {/each}  
        </Slider>
      </div>
    </div>

    <div class="bg-[#f1f5f9] p-4">


    <h1 class="text-lg md:text-xl font-semibold md:mx-3 mx-1">BESTSELLERS</h1>
    <Slider>
      {#each data.loadBestSeller.bestSellerBooks as book}
        <BookVertical 
          image={book.photoURL}
          paper_id={book.paperID} 
          book_name={book.name} 
          book_id={book.id} 
          book_price={book.price}
          paper_price={book.paperPrice} />
      {/each}  
    </Slider>

    </div>




  
  </div>
    
</div>







