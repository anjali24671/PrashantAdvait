<script>
    import Slider from "../../lib/components/Slider.svelte";
    export let data

</script>


<div>
    <header class="px-10">
        <div class="flex gap-4 flex-col">
            <div class="flex rounded-[8px] overflow-hidden md:w-[660px] relative">
                <input class="w-full p-2 md:px-2 px-[40px] md:rounded-[0px] rounded-[8px]" placeholder="search for book">
                <button class="md:bg-orange-200 p-2 absolute h-full md:right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg>
                </button>
            </div>
            <div class="flex gap-4">
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">All</div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Explore</div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Categories</div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Offers</div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">My Books</div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">My Orders</div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Contact Us</div>
            </div>
        </div>
    </header>

    <h1>NEW RELEASE</h1>
   
    
    <Slider height="22vh">
            {#each data.newRelease.newRelease as book}
                <div style="height:22vh;" class="cardH border m-3 border-gray-600 flex hover:bg-gray-500 rounded-[7px]">
                    <img src="{book.photoURL}" alt="book.name" >
                    <div class="self-end p-4 flex flex-col justify-center h-full">
                        <h3>{book.name}</h3>
                        <p class="text-sm">ebook: {book.price}</p>
                        <p class="text-xs">Suggested contribution</p>
                        <p class="text-sm">Paperback:</p>
                        <div class="mt-4 flex items-center font-semibold text-sm justify-center">
                            <a href='#'>Add to Cart</a>
                        </div>   
                    </div>
                </div>
            {/each}  
    </Slider>


    <h1>BESTSELLERS</h1>
   
    <Slider height="22vh">
            {#each data.loadBestSeller.EBKresponse as book}
                <div  class="cardV p-4 border-2 md:m-3 m-1 hover:border-orange-600 flex flex-col  items-center   ">
                    <img  src="{book.photoURL}" alt="book.name" >
                    <div class="self-end  w-full flex flex-col justify-center h-full">
                        <h3>{book.name}</h3>
                        <p class="text-sm">ebook: {book.price}</p>
                        <p class="text-xs">Suggested contribution</p>
                        <p class="text-sm">Paperback:</p>
                        <div class="mt-4 flex items-center font-semibold text-sm justify-center">
                            <a href='#'>Add to Cart</a>
                        </div>   
                    </div>
                </div>
            {/each}  
    </Slider>

    
</div>



<style>
    
  .cardH {
    overflow:scroll;
    flex: 0 0 auto; /* Prevents flex items from stretching */
    width: 85vw; /* Use viewport width for responsiveness */
    height: auto; /* Automatically adjust height based on content */
    max-width: 300px; /* Max width to prevent excessive growth on large screens */
    min-width: 150px; /* Min width to ensure readability on small screens */
    aspect-ratio: 1; /* Maintain a square aspect ratio */
    box-sizing: border-box;
  }

  .cardV {
    overflow:wrap;
    flex: 0 0 auto; /* Prevents flex items from stretching */
    width: 180px; /* Use viewport width for responsiveness */
    height: 400px; /* Automatically adjust height based on content */
    aspect-ratio: 1; /* Maintain a square aspect ratio */
    box-sizing: border-box;
  }

  .card-image {
    width: auto; /* Make image responsive */
    height: 100%; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the entire card space */
    border-radius: 5px; /* Optional: Rounded corners */
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
</style>


