<script>
    import Slider from "../../lib/components/Slider.svelte";
  
    // Example data structure
    export let data;
    const VideoCategoriesData = JSON.parse(data.VideoCategoriesDataJSON);
  </script>
  
  <div class="flex flex-col">

    {#each Object.keys(VideoCategoriesData) as key}

      <h1>{key}</h1>

      <Slider>
        {#each VideoCategoriesData[key] as category}
          <div class="card hover:bg-gray-500 p-3 rounded-[7px]">
            <img src="{category.photoURL}" alt="unable to load" draggable="false" class="card-image">
            <h1>{category.title}</h1>
            <p>{category.language}</p>
          </div>
        {/each}
      </Slider>
  
    {/each}

  </div>


  
<style>
    
  .card {
    flex: 0 0 auto; /* Prevents flex items from stretching */
    width: 85vw; /* Use viewport width for responsiveness */
    height: auto; /* Automatically adjust height based on content */
    max-width: 300px; /* Max width to prevent excessive growth on large screens */
    min-width: 150px; /* Min width to ensure readability on small screens */
    aspect-ratio: 1; /* Maintain a square aspect ratio */
    box-sizing: border-box;
  }

  .card-image {
    width: auto; /* Make image responsive */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the entire card space */
    border-radius: 5px; /* Optional: Rounded corners */
  }

  /* Responsive media queries */
  @media (min-width: 600px) {
    .card  {
      width: 45vw; /* Adjust width for medium screens */
    }
  }

  @media (min-width: 900px) {
    .card {
      width: 30vw; /* Adjust width for large screens */
    }
  }

  @media (min-width: 1200px) {
    .card {
      width: 20vw; /* Adjust width for extra-large screens */
    }
  }

  @media (min-width: 1500px) {
    .card {
      width: 15vw; /* Adjust width for ultra-large screens */
    }
  }
</style>



  