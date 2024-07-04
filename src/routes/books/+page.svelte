<script>
    import Slider from "../../lib/components/Slider.svelte";
    export let data

    console.log(data.newRelease.newReleaseBooks)
</script>




    <h1>NEW RELEASE</h1>
   
 <Slider height="22vh">
            {#each data.newRelease.newReleaseBooks as book}
                <div style="height:22vh;" class="cardH border m-3 border-gray-600 flex hover:bg-gray-500 rounded-[7px]">
                    <img src="{book.photoURL}" alt="book.name" >
                    <div class="self-end p-4 flex flex-col justify-center h-full">
                        <h3>{book.name}</h3>
                        <p class="text-sm">ebook: {book.price}</p>
                        <p class="text-xs">Suggested contribution</p>
                        <p class="text-sm">Paperback:{book.paperPrice? book.paperPrice : "Not available"}</p>
                        <div class="mt-4 flex items-center font-semibold text-sm justify-center">
                            <a href='#'>Add to Cart</a>
                        </div>   
                    </div>
                </div>
            {/each}  
    </Slider> 


    <h1>BESTSELLERS</h1>
   
    <Slider height="22vh">
            {#each data.loadBestSeller.bestSellerBooks as book}
                <div  class="cardV p-4 border-2 md:m-3 m-1 hover:border-orange-600 flex flex-col  items-center">
                    <img  src="{book.photoURL}" alt="book.name" >
                    <div class="self-end  w-full flex flex-col justify-center h-full">
                        <h3>{book.name}</h3>
                        <p class="text-sm">ebook: {book.price}</p>
                        <p class="text-xs">Suggested contribution</p>
                        <p class="text-sm">Paperback:{book.paperPrice? book.paperPrice : "Not available"}</p>
                        <div class="mt-4 flex items-center font-semibold text-sm justify-center">
                            <a href='#'>Add to Cart</a>
                        </div>   
                    </div>
                </div>
            {/each}  
    </Slider>




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


