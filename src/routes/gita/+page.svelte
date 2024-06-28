<script>
    import {writable} from 'svelte/store'
    import Slider from "../../lib/components/Slider.svelte"

    let highlightData = writable([
        {   "image":"https://cimg.acharyaprashant.org/images/img-0fa73d10-60d6-4dbd-bcb2-13543d8dfa6f/20/image.jpg"
            ,"title":"Ask Questions",
            "description":"Opportunity to interact with Acharya Prashant"
        },
        {   "image":"https://cimg.acharyaprashant.org/images/img-ef158b0c-7b8c-4ef3-bb69-a32ae86c1793/20/image.jpg"
            ,"title":"Gita Ratri",
            "description":"Session nights are a celebration. They begin with the singing of a verse, after which Acharya Prashant delves into its deeper understanding, followed by questions from the participants. After three hours of the live session, participants are given the chance to come on screen and share what they have learned, how it relates to their lives, and to sing related Dohas, Bhajans, and Shlokas. This continues until the next morning."
        },
        {   "image":"https://cimg.acharyaprashant.org/images/img-c4c536b5-0e6d-4493-8be1-6fc385acdf8d/20/image.jpg"
            ,"title":"Daily Quizes",
            "description":"A daily quiz is shared from previous sessions to help deepen your understanding."
        },
        {   "image":"https://cimg.acharyaprashant.org/images/img-15b49c6c-1cd1-4464-9342-9648aace6ff8/20/image.jpg",
            "title":"Homework",
            "description":"Frequent activities are provided to help you better understand and practically apply the teachings of the Gita in your daily lives."
        },
        {   "image":"https://cimg.acharyaprashant.org/images/img-4df8106c-51d8-4010-8fcf-ab3b1150edea/20/image.jpg",
            "title":"Physical Sessions",
            "description":"Selected participants are also invited to attend live sessions in person."
        },
        {   "image":"https://cimg.acharyaprashant.org/images/img-23ad313a-9f14-48e3-8345-f1a050976875/20/image.jpg",
            "title":"Poetic Translation","description":"Gita Shlokas have been translated in simple and poetic way by Acharya Prashant which are sung before and during the session."},
        {   "image":"https://cimg.acharyaprashant.org/images/img-3d6f69bc-f050-4730-9439-38ce6ea40b4f/20/image.jpg",
            "title":"Recorded Sessions","description":"Recordings of past sessions are available to help you with your revision."},
        {   "image":"https://cimg.acharyaprashant.org/images/img-88fabbe3-7d0d-4fed-849a-2e1aab1be5f1/20/image.jpg",
            "title":"Online Gita Community", "description":"Participants interact with each other and share learnings and reflections on Acharya Prashant App."}
    ])
</script>


<!-- MAIN SECTION -->
<section class="flex gap-7 flex-col justify-center items-center">
    <div><h1>LIVE BHAGAWAD GITA</h1></div>
    <div class="self-center">Acharya Prashant is teaching Bhagawad Gita, verse by verse.
    Do not miss</div>


    <div class="flex w-[360px] rounded-md py-2 px-4 gap-2 border border-red-600 items-center">
        <p>Your enrolment for Gita Samagam is expiriing in 4 days. Please re-enrol for the next month</p>
        <div class="flex-shrink-0">
            <button class="font-semibold py-1 px-4 rounded-md bg-red-600">Re-Enrol now</button>
        </div>
    </div>


    <div class="flex gap-5 md:flex-row flex-col items-center md:items-start">
        <div class="bg-green-100 md:w-[150px] text-center ">
            <h1>30000+</h1>
            <p>Participants attend live classes together from across the globe</p>
        </div>
        <div class="bg-green-100 md:w-[150px] text-center">
            <h1>1,30,000+</h1>
            <p>Active users on Gita Community</p>
        </div>
        <div class="bg-green-100 md:w-[150px] text-center">
            <h1>3000+</h1>
            <p>Questions answered. Opportunity to ask questions from Acharya Prashant.</p>
        </div>
        <div class="bg-green-100 md:w-[150px] text-center">
            <h1>300+</h1>
            <p>Sessions conducted. 30 live sessions every month. Get access to all past sessions.</p>
        </div>
    </div>
</section>


<!-- HIGHLIGHTS -->
<section> 
    <Slider>
        {#each $highlightData as highlight}
            <div class="card flex flex-col overflow-hidden p-3 ">
                <img src="{highlight.image}" alt="unable to load" draggable="false" class="card-image">
                <h1>{highlight.title}</h1>
                <p class="truncate">{highlight.description}</p>
            </div>365
        {/each}
    </Slider>

</section>



  
<style>
        
    .card {
      flex: 0 0 auto; /* Prevents flex items from stretching */
      width: 85vw; /* Use viewport width for responsiveness */
      height: auto; /* Automatically adjust height based on content */
      max-width: 300px; /* Max width to prevent excessive growth on large screens */
      min-width: 150px; /* Min width to ensure readability on small screens */
      /* Maintain a square aspect ratio */
      box-sizing: border-box;
    }
  
    .card-image {
      width: auto; /* Make image responsive */
      height: auto; /* Maintain aspect ratio */
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
        width: 20vw; /* Adjust width for extra-large screens */
      }
    }
  
    @media (min-width: 1500px) {
      .card {
        width: 15vw; /* Adjust width for ultra-large screens */
      }
    }
  </style>
  