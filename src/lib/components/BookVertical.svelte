<script>
    export let image
    export let book_name
    export let book_id
    export let book_price
    export let paper_id
    export let paper_price
</script>


<div  class="cardV p-4 overflow-hidden border-2 md:m-3 m-1 hover:border-orange-600 flex flex-col  items-center   ">
    <img class="card-image" src="{image}" alt="book.name" >
    <div class="self-end  w-full flex flex-col justify-center h-full">
        <a href="/books/{book_id}">
          <h3>{book_name}</h3>
        </a>
        <p class="text-sm">ebook: {book_price}</p>
        <p class="text-xs">Suggested contribution</p>
        <p class="text-sm">Paperback:</p>
        <div class="mt-4 flex items-center font-semibold text-sm justify-center">
            <a href='/books/{book_id}'>Add to Cart</a>
        </div>   
    </div>
</div>


<style>
    
  .card-image {
    width: auto; /* Make image responsive */
    height: 100%; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the entire card space */
    border-radius: 5px; /* Optional: Rounded corners */
  }

  .cardV {
    overflow:hidden;
    flex: 0 0 auto; /* Prevents flex items from stretching */
    width: 180px; /* Use viewport width for responsiveness */
    height: 400px; /* Automatically adjust height based on content */
    aspect-ratio: 1; /* Maintain a square aspect ratio */
    box-sizing: border-box;
  }
</style>