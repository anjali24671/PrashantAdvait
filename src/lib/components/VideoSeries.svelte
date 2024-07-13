<script>
    export let id
    export let photoURL
    export let title
    export let language
</script>


<div class="card hover:bg-gray-500 p-3 rounded-[7px]">
    <a href="video-modules/{id}">
      <img src="{photoURL}" alt="unable to load" draggable="false"  class="card-image">
    </a>
    <h1>{title}</h1>
    <p>{language}</p>
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
  
  
  
    