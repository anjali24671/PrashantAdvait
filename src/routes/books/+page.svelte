<script>
    import Slider from "../../lib/components/Slider.svelte";
    import BookHorizontal from "$lib/components/BookHorizontal.svelte";
    import BookVertical from "$lib/components/BookVertical.svelte";
    import {onMount} from 'svelte';
    import searchQuery from "../stores/searchQuery";
    import search from '../utils/search';

    export let data

    onMount(()=>{
      searchQuery.subscribe((value)=>{
        console.log(value)

        search(value, "book")
       
      })
    })

</script>



    <h1>NEW RELEASE</h1>
   
    
    <Slider>
            {#each data.newRelease.newReleaseBooks as book}
                <BookHorizontal 
                  image={book.photoURL} 
                  book_name={book.name} 
                  book_price={book.price} 
                  book_id={book._id}/>
            {/each}  
    </Slider> 


    <h1>BESTSELLERS</h1>
   
    <Slider>
            {#each data.loadBestSeller.bestSellerBooks as book}
                <BookVertical image={book.photoURL} book_name={book.name} book_id={book._id} book_price={book.price} />
            {/each}  
    </Slider>







