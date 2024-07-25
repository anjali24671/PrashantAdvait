<script>
    export let id = ''
    export let photoURL
    export let title
    export let language = ''
    export let description=''
</script>


<div class="card relative mt-3 hover:bg-gray-200 text-lg p-3  rounded-[7px]">
    <a href="/video-modules/{id}">
      <img src="{photoURL}" alt="unable to load" draggable="false"  class="card-image mb-3 ">
    </a>
    <h1 class="font-semibold ">{title}</h1>
    <button class="text-xs border px-2 bg-[#c7e6f8] rounded-[5px]">{language}</button>
  

    {#if description}
      <p class="truncate ">{description}</p>
    {/if}
</div>


 
<style>
    
    .card {
      flex: 0 0 auto; /* Prevents flex items from stretching */
      /* Use viewport width for responsiveness */
     /* Automatically adjust height based on content */
      max-width: 300px; /* Max width to prevent excessive growth on large screens */
      min-width: 150px; /* Min width to ensure readability on small screens */
      /* Maintain a square aspect ratio */
      box-sizing: border-box;
    }
  
    .card-image {
   /* Maintain aspect ratio */
      object-fit: cover; /* Cover the entire card space */
      border-radius: 10px; /* Optional: Rounded corners */
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
        width: 27vw; /* Adjust width for extra-large screens */
      }
    }
  
    @media (min-width: 1500px) {
      .card {
        width: 25vw; /* Adjust width for ultra-large screens */
      }
    }
  </style>
  
  
  
    