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

    let yourVoiceVideos = writable([
        {
            "video":"https://www.youtube.com/watch?v=J7EaRL8l5Ww&t=6s",
            "poster":"https://img.youtube.com/vi/J7EaRL8l5Ww/hq720.jpg",

            "user_name":"Divya"
        },
        {
            "video":"https://www.youtube.com/59120add-fe6a-4534-b328-0d88cc4c9655",
            "poster":"https://img.youtube.com/vi/SuyQzLGmlO8/hq720.jpg",
            "user_name":"Daralus Dubash"
        },

        {
            "video":"https://www.youtube.com/91d23677-54f6-4810-a932-447d27d4c039",
            "poster":"https://img.youtube.com/vi/JOy0camm0Es/hq720.jpg",
            "user_name":"Saloni"
        },
        {
            "video":"blob:https://www.youtube.com/93532911-859c-4aee-8289-87dff9cf1ff1",
            "poster":"https://img.youtube.com/vi/wZBacn6icAU/hq720.jpg",
            "user_name":"Sarvesh"
        },
        {
            "video":"https://www.youtube.com/289a499e-294a-4151-994e-906a9d82a5d5",
            "poster":"https://img.youtube.com/vi/j6jvQdkt-Jo/hq720.jpg",
            "user_name":"Manpreet"
                },
        {
            "video":"https://www.youtube.com/e20c4941-114a-4abd-a115-e9326fbaf694",
            "poster":"https://img.youtube.com/vi/__OcGkft_04/hq720.jpg",
            "user_name":"Umang and Tanvi"
            
        },
        {
            "video":"https://www.youtube.com/f3140575-86c9-420b-939f-62572f90253b",
            "poster":"https://img.youtube.com/vi/q_WV1YNliro/hq720.jpg",
            "user_name":"Prabhoj"

        }
    ])
</script>

<div class="mx-[10px]">
    <!-- MAIN SECTION -->
    <section class="flex gap-7 mx-[70px] flex-col justify-center items-center">
        <div><h1 class=" font-bold text-[38px]">LIVE Bhagwad Gita</h1></div>
        <div class="self-center text-lg text-center font-semibold">Acharya Prashant is teaching Bhagawad Gita, verse by verse.
        Do not miss</div>


        <div class="flex md:flex-row flex-col w-[360px] rounded-md py-2 px-4 gap-2 border border-red-600 md:items-center">
            <p>Your enrolment for Gita Samagam is expiriing in 4 days. Please re-enrol for the next month</p>
            <div class="flex-shrink-0">
                <button class="font-semibold py-1 px-4 rounded-md bg-red-600">Re-Enrol now</button>
            </div>
        </div>


        <div class="flex font-semibold gap-5 md:flex-row flex-col items-center md:items-start">
            <div class=" md:w-[150px] text-center ">
                <h1 class="text-[26px] font-bold">30000+</h1>
                <p>Participants attend live classes together from across the globe</p>
            </div>
            <div class=" md:w-[150px] text-center">
                <h1 class="text-[26px] font-bold">1,30,000+</h1>
                <p>Active users on Gita Community</p>
            </div>
            <div class=" md:w-[150px] text-center">
                <h1 class="text-[26px] font-bold">3000+</h1>
                <p>Questions answered. Opportunity to ask questions from Acharya Prashant.</p>
            </div>
            <div class=" md:w-[150px] text-center">
                <h1 class="text-[26px] font-bold">300+</h1>
                <p>Sessions conducted. 30 live sessions every month. Get access to all past sessions.</p>
            </div>
        </div>
    </section>


    <!-- HIGHLIGHTS -->
    <section class="my-[70px]"> 
        <h1 class="font-semibold text-xl">HIGHLIGHTS</h1>
        <Slider>
            {#each $highlightData as highlight}
                <div class="card flex flex-col overflow-hidden p-3 ">
                    <img src="{highlight.image}" alt="unable to load" draggable="false" class="card-image">
                    <h1 class="mt-[10px] font-semibold">{highlight.title}</h1>
                    <p class="truncate">{highlight.description}</p>
                </div>
            {/each}
        </Slider>

    </section>


    <!--SCHEDULE-->
    <section class="flex lg:flex-row flex-col justify-between gap-6 mx-[5px]">

        <div class="lg:hidden flex gap-3 items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" class="h-[28px] w-[27px]"><path d="M4.596 0a.82.82 0 0 1 .82.82v1.114h4.167V.821a.82.82 0 0 1 .82-.821h.026a.82.82 0 0 1 .821.82v1.114h1.356q1.077 0 1.67.494l.126.116Q15 3.153 15 4.348v9.246q0 1.195-.598 1.8-.6.606-1.796.606H2.394q-1.182 0-1.788-.601Q0 14.797 0 13.594V4.348Q0 3.145.606 2.54q.606-.606 1.788-.606H3.75V.821A.82.82 0 0 1 4.57 0zm8.065 5.519H2.331q-.48 0-.733.256-.252.257-.252.77v7.065q0 .522.252.778.252.257.733.257h10.33q.48 0 .745-.257.263-.256.263-.778V6.545q0-.513-.263-.77-.264-.255-.745-.256M4.04 11.974q.205 0 .28.072.075.073.075.281v.441q0 .201-.075.273t-.28.072h-.433q-.204 0-.28-.072-.074-.073-.074-.273v-.44q0-.21.075-.282t.28-.072Zm2.457 0q.197 0 .272.072.075.073.075.281v.441q0 .201-.075.273t-.272.072h-.433q-.196 0-.28-.072-.082-.073-.082-.273v-.44q0-.21.082-.282.084-.072.28-.072Zm2.457 0q.197 0 .275.072.08.073.08.281v.441q0 .201-.08.273-.078.072-.275.072h-.441q-.197 0-.272-.072-.075-.073-.075-.273v-.44q0-.21.075-.282t.272-.072ZM4.039 9.512q.205 0 .28.073.075.072.075.272v.45q0 .2-.075.276t-.28.076h-.433q-.204 0-.28-.076-.074-.075-.074-.277v-.449q0-.2.075-.272t.28-.073Zm2.457 0q.197 0 .272.073.075.072.075.272v.45q0 .2-.075.276t-.272.076h-.433q-.196 0-.28-.076-.082-.075-.082-.277v-.449q0-.2.082-.272.084-.073.28-.073Zm2.457 0q.197 0 .275.073.08.072.08.272v.45q0 .2-.08.276-.078.076-.275.076h-.441q-.197 0-.272-.076-.075-.075-.075-.277v-.449q0-.2.075-.272t.272-.073Zm2.456 0q.197 0 .272.073.075.072.075.272v.45q0 .2-.075.276t-.272.076h-.44q-.205 0-.28-.076-.075-.075-.075-.277v-.449q0-.2.075-.272t.28-.073ZM6.496 7.05q.197 0 .272.077.075.076.075.276v.441q0 .201-.075.273t-.272.072h-.433q-.196 0-.28-.072-.082-.072-.082-.273v-.44q0-.202.082-.277.084-.077.28-.077Zm2.457 0q.197 0 .275.077.08.076.08.276v.441q0 .201-.08.273-.078.072-.275.072h-.441q-.197 0-.272-.072t-.075-.273v-.44q0-.202.075-.277.075-.077.272-.077Zm2.456 0q.197 0 .272.077.075.076.075.276v.441q0 .201-.075.273t-.272.072h-.44q-.205 0-.28-.072t-.075-.273v-.44q0-.202.075-.277.075-.077.28-.077Z"></path></svg> <div class="flex flex-col"><div class="flex items-center whitespace-nowrap text-3xl font-bold leading-none text-slate-800 laptop:h-[52px]"></div></div>
            </div>
            <div>
                <h1 class="text-[30px] font-bold">Session Schedule</h1>
                <p>31 SESSIONS</p>
            </div>
        </div>

    
        <div class="flex lg:w-auto w-full lg:items-start items-center justify-center">
            <div class="w-[500px] h-[400px] bg-green-300"></div>
        </div>

        <div class="flex items-start gap-4">
            <div class="lg:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" class="h-[52px] w-[49px]"><path d="M4.596 0a.82.82 0 0 1 .82.82v1.114h4.167V.821a.82.82 0 0 1 .82-.821h.026a.82.82 0 0 1 .821.82v1.114h1.356q1.077 0 1.67.494l.126.116Q15 3.153 15 4.348v9.246q0 1.195-.598 1.8-.6.606-1.796.606H2.394q-1.182 0-1.788-.601Q0 14.797 0 13.594V4.348Q0 3.145.606 2.54q.606-.606 1.788-.606H3.75V.821A.82.82 0 0 1 4.57 0zm8.065 5.519H2.331q-.48 0-.733.256-.252.257-.252.77v7.065q0 .522.252.778.252.257.733.257h10.33q.48 0 .745-.257.263-.256.263-.778V6.545q0-.513-.263-.77-.264-.255-.745-.256M4.04 11.974q.205 0 .28.072.075.073.075.281v.441q0 .201-.075.273t-.28.072h-.433q-.204 0-.28-.072-.074-.073-.074-.273v-.44q0-.21.075-.282t.28-.072Zm2.457 0q.197 0 .272.072.075.073.075.281v.441q0 .201-.075.273t-.272.072h-.433q-.196 0-.28-.072-.082-.073-.082-.273v-.44q0-.21.082-.282.084-.072.28-.072Zm2.457 0q.197 0 .275.072.08.073.08.281v.441q0 .201-.08.273-.078.072-.275.072h-.441q-.197 0-.272-.072-.075-.073-.075-.273v-.44q0-.21.075-.282t.272-.072ZM4.039 9.512q.205 0 .28.073.075.072.075.272v.45q0 .2-.075.276t-.28.076h-.433q-.204 0-.28-.076-.074-.075-.074-.277v-.449q0-.2.075-.272t.28-.073Zm2.457 0q.197 0 .272.073.075.072.075.272v.45q0 .2-.075.276t-.272.076h-.433q-.196 0-.28-.076-.082-.075-.082-.277v-.449q0-.2.082-.272.084-.073.28-.073Zm2.457 0q.197 0 .275.073.08.072.08.272v.45q0 .2-.08.276-.078.076-.275.076h-.441q-.197 0-.272-.076-.075-.075-.075-.277v-.449q0-.2.075-.272t.272-.073Zm2.456 0q.197 0 .272.073.075.072.075.272v.45q0 .2-.075.276t-.272.076h-.44q-.205 0-.28-.076-.075-.075-.075-.277v-.449q0-.2.075-.272t.28-.073ZM6.496 7.05q.197 0 .272.077.075.076.075.276v.441q0 .201-.075.273t-.272.072h-.433q-.196 0-.28-.072-.082-.072-.082-.273v-.44q0-.202.082-.277.084-.077.28-.077Zm2.457 0q.197 0 .275.077.08.076.08.276v.441q0 .201-.08.273-.078.072-.275.072h-.441q-.197 0-.272-.072t-.075-.273v-.44q0-.202.075-.277.075-.077.272-.077Zm2.456 0q.197 0 .272.077.075.076.075.276v.441q0 .201-.075.273t-.272.072h-.44q-.205 0-.28-.072t-.075-.273v-.44q0-.202.075-.277.075-.077.28-.077Z"></path></svg>
            </div>

            <div class="flex flex-col gap-8 items-start">
                <div class="hidden lg:flex gap-3 items-start">
         
                    <div class='flex flex-col'>
                        <h1 class="text-[50px] font-bold">Session Schedule</h1>
                        <p class="text-xl">31 SESSIONS</p>
                    </div>
                </div>
                
    
                <div class="flex gap-[10px] min-w-[96vw] lg:text-lg lg:flex-col border-l-4 lg:border-l-0 lg:border-t-4  border-purple-300 lg:pt-[10px] pl-[10px] lg:justify-center justify-between items-start">
                    <div>
                        <h2>Exam</h2>
                        <p class="text-gray-700">19:00 PM</p>
                    </div>
                    <div>
                        <button class="bg-orange-600  lg:text-lg rounded-[20px] text-sm font-semibold lg:my-[10px] px-[10px] lg:px-[40px] py-[8px]">Join now</button>
                    </div>
                </div> 
            </div>
        </div>
        
   
    </section>


    <!-- YOUR VOICE SECTION -->
    <section class="flex gap-7 my-[40px] flex-col items-center">
        <h1 class="text-[40px] font-bold">Your Voice</h1>
        <Slider>
            {#each $yourVoiceVideos as video}
                <div class="card flex flex-col gap-4 overflow-hidden p-3 ">
                    <!-- <video poster="https://cimg.acharyaprashant.org/images/img-41aece10-0782-411a-bf78-a2a168f5a53d/0/image.jpg" controls>
                       
                        <source src="blob:https://www.youtube.com/e60228fc-d84e-471c-a001-7c100dca821e" type="video/mp4">
                        Your browser does not support the video tag.
                        
                    </video> -->
                    <iframe src="https://www.youtube.com/embed/J7EaRL8l5Ww?si=w_KzqS0b3W00HxsW" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                 
                    <div class="flex gap-4 items-center">
                        <div class="overflow-hidden rounded-[50%] w-[35px]">
                            <img src="{video.userImage}">
                        </div>
                        <p>{video.user_name}</p>
                    </div> 
                </div>
            {/each}
        </Slider>
    </section>
</div>
  
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
  