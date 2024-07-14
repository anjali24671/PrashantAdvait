<script>
    import addBookToCart from "../../routes/utils/addBookToCart"
    import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';
    import BookCartAlert from "./BookCartAlert.svelte";
    import Userfront from '@userfront/toolkit/web-components';
    export let image
    export let book_name
    export let book_id
    export let book_price
    export let paper_price = 0
    export let paper_id
    let showCartOption = false

    function showCartOptions(){
        showCartOption = true
    }

</script>

<BookCartAlert show={showCartOption} Ebook_id={book_id} {paper_id} {image}  {book_name} {paper_price}/>


<div style="height:22vh;" class="overflow-hidden cardH border m-3 border-gray-600 flex hover:bg-gray-500 rounded-[7px]">
   
        <img src="{image}" class="card-image" alt="book.name" >

  
    <div class="self-end p-4 flex flex-col justify-center h-full">
        <a href="/books/{book_id}">
            <h3>{book_name}</h3>
        </a>
       
        <p class="text-sm">ebook: {book_price}</p>
        <p class="text-xs">Suggested contribution</p>
        <p class="text-sm">{paper_price}</p>
        <div class="mt-4 flex items-center font-semibold text-sm justify-center">
            <button on:click={showCartOptions}>Add to Cart</button>
        </div>   
    </div>
</div>


<style>
      .cardH {
        overflow:hidden;
        flex: 0 0 auto; /* Prevents flex items from stretching */
        width: 85vw; /* Use viewport width for responsiveness */
        min-height: 120px; /* Automatically adjust height based on content */
        max-width: 300px; /* Max width to prevent excessive growth on large screens */
        min-width: 250px; /* Min width to ensure readability on small screens */
        aspect-ratio: 1; /* Maintain a square aspect ratio */
        box-sizing: border-box;
    }

        
    /* Responsive media queries */
    @media (min-width: 600px) {
        .cardH  {
        width: 45vw; /* Adjust width for medium screens */
        }
    }

    @media (min-width: 900px) {
        .cardH {
        width: 30vw; /* Adjust width for large screens */
        }
    }

    @media (min-width: 1200px) {
        .cardH {
        width: 20vw; /* Adjust width for extra-large screens */
        }
    }

    @media (min-width: 1500px) {
        .cardH {
        width: 20vw; /* Adjust width for ultra-large screens */
        }
    }


  .card-image {
    width: auto; /* Make image responsive */
    height: 100%; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the entire card space */
    border-radius: 5px; /* Optional: Rounded corners */
  }
</style>
