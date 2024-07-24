<script>
  
    export let data
    import "./page.css"
    import Slider from "../lib/components/Slider.svelte"
    import SliderAuto from '../lib/components/SliderAuto.svelte'
  
    
  </script>

  <div class="flex bg-gray-800 text-white py-3  justify-center gap-6 items-center lg:text-xl sm:text-sm text-xs">
    <div class="flex gap-2 justify-center items-center">
      <div class="border border-white rounded-[8px] bg-red-600 xs:w-4 xs:h-4 w-3 h-3"></div>
      Acharya Prashant is dedicated to building a brighter future for you 
      </div>
    <button class="bg-transparent px-2  rounded-[3px] border text-sm border-white">Extend your hand</button>
  </div>

<div class="flex flex-col gap-9 items-center">
  <!-- SECTION 1 -->
  <div  class="relative">
    <!-- <img src="https://cimg.acharyaprashant.org/images/img-67be009c-628a-4d15-a2bb-ba5bfc615a97/30/image.jpg"> -->
    <picture>
      <source srcset="https://cimg.acharyaprashant.org/images/img-599af525-d2a4-4741-b1e2-78b74e7d342b/20/image.jpg" media="(max-width: 1024px)">
      <source srcset="https://cimg.acharyaprashant.org/images/img-67be009c-628a-4d15-a2bb-ba5bfc615a97/30/image.jpg" media="(min-width: 1024px)">
      <img src="https://cimg.acharyaprashant.org/images/img-67be009c-628a-4d15-a2bb-ba5bfc615a97/30/image.jpg" alt="Responsive image" class="w-full h-auto">
    </picture>

   
      <div class="flex px-[30px]  justify-around hidden lg:block xl:w-[45%] w-[50%] h-[100%] absolute xl:top-1/4 top-[7px]  flex-col items-center " >
        <h1 class="xl:text-xl my-4 font-bold" style=" font-size: clamp(3rem, 4.8vw, 4.5rem)">Acharya Prashant</h1>
        <h2 class="font-normal italic" style="font-size: clamp(2rem, 3vw, 2.6rem);">To demolish all that is false</h2>
        <p class="text-md mb-3">
          Acharya Prashant is a spiritual teacher rooted in Advait Vedanta. His unique spiritual literature is at par with the highest words that mankind has ever known. Equally, one could simply call him a teacher beyond any tradition.<br>
  He is a veganism promoter, an environmental activist, a science activist, a campaigner against superstition, and a champion of essential human freedom.<br>
        </p>
        <span class="text-md font-semibold text-orange-600">Read Bio -></span>
  </div>


  <div class="flex lg:hidden  mx-5 flex-col items-center">
      <h1 class="sm:text-[50px] text-[40px] self-center font-bold">Acharya Prashant</h1>
      <h2 class="sm:text-[35px] text-[24px] mb-3 font-normal italic">To demolish all that is false</h2>
      <p class="mb-3">
        Acharya Prashant is a spiritual teacher rooted in Advait Vedanta. His unique spiritual literature is at par with the highest words that mankind has ever known. Equally, one could simply call him a teacher beyond any tradition.<br>
He is a veganism promoter, an environmental activist, a science activist, a campaigner against superstition, and a champion of essential human freedom.
      </p>
      <span class="text-sm font-semibold text-orange-600">Read Bio -></span>
    </div>
  </div>



  <!-- SECTION - 2 -->
  <div class="my-10 lg:hidden relative">
    
    <div class="flex mx-[10px] rounded-[20px] font-semibold bg-orange-100 flex-col items-center relative">
      <img class="rounded-[50%] w-[55px] absolute top-[-30px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">

      <h2 class="mt-[25px] xs:w-[30%]  text-center text-xl font-bold" >Shrimad Bhagwat Gita Live Sessions</h2>
      <p class="w-[60%] text-center">Acharya Prashant is teaching Bhagawad Gita, verse by verse. Do not miss.</p>
      <button class="bg-red-600 text-sm text-white py-[4px] px-[25px] m-[15px] rounded-[7px]">Know More</button>
    </div>

 </div>

 <div class="m-10 hidden lg:block">
  <div class="flex rounded-[20px] mx-[10px] h-[125px] font-semibold bg-orange-100 items-center justify-around relative">
    <img class="rounded-[50%] m-[40px] w-[145px]" src="https://cimg.acharyaprashant.org/images/img-7e345bb0-643c-4370-95d4-475411c48331/0/image.jpg">
    <div >
      <h2  class="text-[30px] font-bold">Shrimad Bhagwat Gita Live Sessions</h2>
      <p class="text-[20px] font-semibold">Acharya Prashant is teaching Bhagawad Gita, verse by verse. Do not miss.</p>  
    </div>
    <button class="bg-red-600 px-[20px] text-white rounded-[10px] w-[170px] p-[10px] mx-[20px]">Know More</button>
</div>
</div>


<!-- SECTION - 3  (topics covered) -->
<section class="w-[76vw]">
  <h1 class="text-center font-bold xs:text-[50px] text-[40px] mb-5">Topics Covered</h1>
  <span class="rounded-[5px] text-left bg-[#c22d01] font-semibold italic px-[10px] text-lg text-white m-[10px] px-[35px] py-[3px]">Beginner</span>

  <div class="text-center mb-[20px]  lg:grid lg:grid-cols-3 "> 
    {#each data.articleCategories.beg_categories as topic}
      <a href="#">
        <h1 class="hover:bg-orange-600 hover:border-orange-600 hover:text-white border-1 border-gray-500 rounded-[4px] py-[5px] font-semibold  border text-xl m-[10px]">{topic.name}</h1>
      </a>
    {/each}
  </div>
  

  <span class="rounded-[5px] text-left font-semibold italic px-[10px] text-lg bg-red-700 text-white m-[10px] px-[35px] py-[3px]">Intermediate</span>
  
  <div class="text-center mb-[20px] t-center  lg:grid lg:grid-cols-3"> 
    {#each data.articleCategories.inter_categories as topic}
    <a href="#">
      <h1 class="hover:bg-orange-600 hover:border-orange-600 hover:text-white border-1 border-gray-500 rounded-[4px] py-[5px] font-semibold  border text-xl m-[10px]">{topic.name}</h1>
    </a>     
     {/each}
  </div>

  <span class="rounded-[5px] text-left font-semibold italic px-[10px] text-lg bg-red-700 text-white m-[10px] px-[35px] py-[3px]">Advanced</span>
  
  <div class="text-center   mb-[20px] lg:grid lg:grid-cols-3"> 
    {#each data.articleCategories.adv_categories as topic}
    <a href="#">
      <h1 class="hover:bg-orange-600 hover:border-orange-600 hover:text-white border-1 border-gray-500 rounded-[4px] py-[5px] font-semibold  border text-xl m-[10px]">{topic.name}</h1>
    </a>      
    {/each}
  </div>
</section>

<!-- SECTION-4 (OUR JOUNREY) -->
<section class="flex flex-col m-[40px] sm:justify-center justify-start">
  <div class="flex flex-col self-start sm:self-center  items-center sm:justify-center  sm:text-center xs:w-[60%]">
    <h1 class="sm:self-center mb-5 xs:text-[45px] font-bold text-[40px] self-start">Our Journey</h1>
    <p class='text-xl'>
      Today, the mission of Acharya Prashant has touched the lives of tens of millions of individuals. Through his direct contact with people and through various internet internet-based channels, he continues to bring clarity to all.
    </p>
  </div>
  
  <div>

    <div class="lg:grid font-semibold lg:grid-cols-4 lg:gap-[10px] lg:justify-between">
      <div id="youtube" class="bg-orange-100 lg:col-span-3 rounded-[10px] my-[20px]  p-[15px]">
        <div class="flex gap-[7px] items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20"><path fill="red" d="M14.148-.001h.081l.337.002c1.975.012 8.535.092 10.39.61a3.54 3.54 0 0 1 2.467 2.517c.537 2 .575 5.94.577 6.748v.184c-.001.444-.03 4.716-.576 6.834a3.54 3.54 0 0 1-2.468 2.518c-.843.226-2.658.365-4.573.451l-.577.024c-2.311.09-4.64.109-5.48.112L14.15 20h-.475c-1.604-.008-8.671-.07-10.63-.612a3.55 3.55 0 0 1-2.468-2.517C.06 14.89.006 10.953 0 10.146v-.292c.006-.804.06-4.726.576-6.726C.9 1.905 1.868.916 3.044.588 4.898.088 11.46.012 13.434 0l.336-.002h.081Zm-2.856 6.46a.6.6 0 0 0-.083.302v6.476a.598.598 0 0 0 .9.516l5.511-3.238a.598.598 0 0 0 0-1.031l-5.51-3.238a.6.6 0 0 0-.818.213" style="--darkreader-inline-fill: #fe2525;" data-darkreader-inline-fill=""></path></svg>
          <span class="text-xl">YouTube</span>
        </div>
        
        <div class="grid lg-grid-cols-3 grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Each item has group class to control nested hover -->
          <div class='bg-white mt-[10px] rounded-[6px] group hover:bg-orange-600 p-[10px]'>
              <h1 class="text-red-600 group-hover:text-white font-bold text-xl">49 million+</h1>
              <span class="text-gray-700 group-hover:text-white">Subscribers</span>
          </div>
          <div class='bg-white mt-[10px] rounded-[6px] group hover:bg-orange-600 p-[10px]'>
              <h1 class="text-red-600 group-hover:text-white font-bold text-xl">2.7 billion+</h1>
              <span class="text-gray-700 group-hover:text-white">Views</span>
          </div>
          <div class='bg-white lg:col-span-1 col-span-2 mt-[10px] rounded-[6px] group hover:bg-orange-600 p-[10px]'>
              <h1 class="text-red-600 group-hover:text-white font-bold text-xl">81 million+</h1>
              <span class="text-gray-700 group-hover:text-white">Watch hours</span>
          </div>
        </div>
      </div>
    
      <div id='social media' class="bg-orange-100 rounded-[10px] lg:col-span-1 lg:flex-initial -[10px] my-[20px]  p-[15px]">
        <div class="flex gap-[7px] items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"><g fill="none" fill-rule="evenodd"><path d="M0 .7h28v22.7H0z"></path><path fill="red" fill-rule="nonzero" stroke="red" stroke-width=".5" d="M23.011 5.691a11.04 11.04 0 0 0-4.815-3.864 20.5 20.5 0 0 1 2.286 6.15 11.8 11.8 0 0 0 2.53-2.286ZM18.572 9.01a18.5 18.5 0 0 0-3.317-7.938 11 11 0 0 0-2.51 0A18.5 18.5 0 0 0 9.427 9.01c1.446.615 3.002.93 4.573.928 1.622 0 3.167-.33 4.572-.928Zm-9.365 2.133c1.534.57 3.157.86 4.793.858 1.685 0 3.3-.302 4.792-.858a18.6 18.6 0 0 1-.482 5.169 18.6 18.6 0 0 1-4.31.502c-1.484 0-2.926-.175-4.309-.504a18.6 18.6 0 0 1-.484-5.167Zm-1.69-3.165A20.5 20.5 0 0 1 9.804 1.83a11.04 11.04 0 0 0-4.816 3.864c.727.877 1.58 1.648 2.53 2.282zm16.565-.38a10.97 10.97 0 0 1 .845 5.658 18.5 18.5 0 0 1-4.37 2.366c.317-1.788.397-3.609.24-5.417a13.8 13.8 0 0 0 3.285-2.607Zm-20.165 0a13.8 13.8 0 0 0 3.286 2.607 21 21 0 0 0 .24 5.418 18.5 18.5 0 0 1-4.37-2.365c-.224-1.928.068-3.88.846-5.659zM14 18.875c1.234 0 2.444-.108 3.62-.316a18.5 18.5 0 0 1-2.365 4.37c-.834.095-1.676.095-2.51 0a18.5 18.5 0 0 1-2.365-4.37q1.766.314 3.62.316Zm5.99-.884a20.5 20.5 0 0 1-1.794 4.18 11.04 11.04 0 0 0 5.973-5.974 20.4 20.4 0 0 1-4.18 1.794Zm-10.186 4.18a11.04 11.04 0 0 1-5.973-5.974c1.31.745 2.71 1.349 4.179 1.794a20.5 20.5 0 0 0 1.794 4.18Z" style="--darkreader-inline-fill: #fe2525; --darkreader-inline-stroke: #fe2525;" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""></path></g></svg>
          <span class="text-xl">Social Media</span>
        </div>
        <div class='bg-white mt-[10px] group rounded-[6px] hover:text-white p-[10px] hover:bg-orange-600'>
          <h1 class="text-red-600 group-hover:text-white font-bold text-xl">62 million+</h1>
          <span>Followers</span>
        </div>
      </div>
    </div>

    <div id="repository" class="bg-orange-100 rounded-[10px]   p-[15px]">
      <div class="flex  gap-[7px] items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 27 20"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="red" style="--darkreader-inline-stopcolor: #ce0d0d;" data-darkreader-inline-stopcolor=""></stop><stop offset="100%" stop-color="red" style="--darkreader-inline-stopcolor: #ce0d0d;" data-darkreader-inline-stopcolor=""></stop></linearGradient></defs><path fill="url(#a)" d="M3.67 20h19.66q1.834 0 2.752-.93T27 16.318V9.884q0-.575-.06-.979a2.7 2.7 0 0 0-.218-.74 3.6 3.6 0 0 0-.434-.691l-3.84-5.235q-.64-.882-1.172-1.364A3.05 3.05 0 0 0 20.1.195Q19.453 0 18.427 0H8.585Q7.571 0 6.913.196A3 3 0 0 0 5.73.875q-.525.483-1.166 1.364L.712 7.474a4 4 0 0 0-.422.691q-.158.336-.224.74Q0 9.31 0 9.884v6.434q0 1.823.93 2.752.93.93 2.74.93m9.842-6.911q-.881 0-1.51-.422a2.9 2.9 0 0 1-.971-1.083 2.95 2.95 0 0 1-.345-1.382v-.061q0-.392-.235-.71t-.718-.318H2.644q-.301 0-.362-.196-.06-.196.085-.403l4.19-5.774q.385-.539.87-.752a2.7 2.7 0 0 1 1.086-.214h9.986q.593 0 1.08.214.49.213.864.752l4.19 5.774q.145.207.079.403-.067.196-.356.196h-7.089q-.483 0-.712.318-.23.318-.23.71v.06q0 .723-.35 1.383t-.978 1.083-1.485.422m4.758-9.664H8.73a.5.5 0 0 0-.386.165.56.56 0 0 0-.157.398.55.55 0 0 0 .157.403.52.52 0 0 0 .386.16h9.54a.54.54 0 0 0 .398-.16.55.55 0 0 0 .157-.403.56.56 0 0 0-.157-.398.53.53 0 0 0-.398-.165m1.51 2.593H7.232a.54.54 0 0 0-.417.178.6.6 0 0 0-.163.422q0 .233.163.403a.55.55 0 0 0 .417.172h12.546a.54.54 0 0 0 .405-.172.57.57 0 0 0 .163-.403.6.6 0 0 0-.163-.422.53.53 0 0 0-.405-.178"></path></svg>
  
        <div class="lg:flex lg:justify-between w-full">
          <h1 class="text-xl">Repository of Wisdom Content</h1>
          <span>(Available in Hindi and English)</span>
        </div> 
      </div>
      
      <div class="flex lg:flex-row lg:gap-[10px] flex-col" >
        <div class='bg-white mt-[10px] lg:flex-auto hover:bg-orange-600 group hover:text-white rounded-[6px] p-[10px]'>
          <h1 class="text-red-600  group-hover:text-white  font-bold text-xl">140+ Books</h1>
          <span>On life topics and scriptures</span>
        </div>
        <div class='bg-white lg:flex-auto  hover:bg-orange-600 group hover:text-white rounded-[6px] mt-[10px] p-[10px]'>
          <h1 class="text-red-600  group-hover:text-white font-bold text-xl">6000+ Articles</h1>
          <span>Available for free</span>
        </div>
        <div class='bg-white mt-[10px] lg:flex-auto hover:bg-orange-600 group hover:text-white rounded-[6px] p-[10px]'>
          <h1 class="text-red-600  group-hover:text-white font-bold text-xl">12000+ Videos</h1>
          <span>Available for free</span>
        </div>
        <div class='bg-white mt-[10px] lg:flex-auto hover:bg-orange-600 group hover:text-white rounded-[6px] p-[10px]'>
          <h1 class="text-red-600  group-hover:text-white font-bold text-xl">60+ Commentaries</h1>
          <span>On scriptures</span>
        </div>
      </div>
    </div>
  </div>
</section>




<!-- SECTION-5 (VIDEO) SKIPPING -->
<!-- <section class="bg-orange-100 px-4 flex flex-col items-center py-7 gap-5 ">
  <div class="w-[80%] flex flex-col gap-6 md:w-[70%]">
    <h1 class="w-1/3 lg:w-2/3">Interviews and Podcasts</h1>
    <button class="bg-orange-600 w-1/2 lg:w-1/3 rounded-[20px] font-semibold py-[8px]">Invite</button>
    <div class="border-t border-dashed border-orange-600 "></div>
    <p>Videos from past interviews and podcasts</p>
  </div>

  <Slider></Slider>
  
  

  <div class="self-start">
    <a>View All --</a>
  </div>
  

</section> -->




<!-- SECTION-6 (IMAGE GALLERY) -->

  <div class="flex flex-col relative mb-[100px] items-center">
    <h1 class="xs:text-[50px] text-[40px] font-bold mb-7">Gallery</h1>
    <hr>
    <div class="h-[70vh] overflow-hidden">
      <div class="relative masorny-gallery h-[80vh] mx-[40px]  overflow-hidden">
        {#each data.galleryImage as image}
          <div class="max-w-full mb-[20px] h-auto ">
            <img src="{image.imageURL}" alt="Gallery Image">
          </div>
          
        {/each}
      </div>
    </div>
  </div>








 <!-- SECTION-6 (PRINT MEDIA)-->
  <div  class="flex sm:flex-row flex-col bg-[#0f172a] p-2 text-white items-center overflow-hidden">
    <div class="flex flex-col m-[20px] gap-[10px] ">
      <h1 class="xs:text-[45px] text-[40px] font-bold">Print Media</h1>
      <p class="xs:text-xl mb-2">
        The mission and teachings if Acharya Prashant are regularly and widely covered by national and international media.
      </p>
      <a class="text-orange-600 xs:text-lg font-bold">VIEW ALL</a>
    </div>

    <div class="grid flex-shrink-0  lg:grid-cols-4 md:grid-cols-2 grid-cols-2 h-[420px] gap-[10px] overflow-hidden">
      {#each data.printMedia as media}
      <img class=" w-[200px] h-[200px]" src="{media.mediaURL}">
      {/each}
    </div>
  </div>


  <!-- SECTION-7 (INSTITUTIONAL TALKS)
  <div class="lg:hidden flex flex-col justify-start p-20">
    <h1>Institutional Talks</h1>
    <p>
      Acharya Prashant loves interacting with the dynamic and vibrant youth, and has a profound faith in their ability to effectuate significant changes.
      He delivers regular talks at illustrious educational institutes, including prestigious organizations such as IITs and IIMs.
      With over 100+ college appearances and interactions with thousands of enthusiastic students, Acharya Prashant has left an indelible impression.
    </p>
    <div>
      <button class="mt-4">Invite</button> Added margin-top for spacing
    </div>
  </div> -->

  <!-- SECTION-6 (WAYS TO CONNECT) -->
   <section class="lg:hidden m-5">
    <h1 class="xs:text-[45px] text-[40px] font-bold mb-4">Ways to connect</h1>
    <div class="grid w-full xs:text-md text-sm gap-[10px] grid-cols-2 font-semibold">
      <div class="flex flex-col gap-[10px]">
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">BHAGAVAD GITA</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">AP BOOKS</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">VIDEO SERIES</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">IN MEDIA</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">INTERVIEW</div>
      </div>

      <div class="flex flex-col gap-[10px]">
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">VEDANT: BASICS TO CLASSICS</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">AP ARTICLES</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">DOWNLOAD APP</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">INVITE</div>
        <div class="shadow-md shadow-gray-400 border-l-4 border-orange-600 rounded-r-[5px] py-2 pl-3">CONTACT US</div>
      </div>
      
    </div>
   </section>


    <!-- SECTION-7 (INSTITUTIONAL TALKS) - HIDDEN ON MEDIUM -->

     <div class="w-[90%] relative">
        <div class="flex xs:w-[80%] m-[15px] gap-4 flex-col md:flex-row md:items-end">
          <div>
            <h1 class="font-bold xs:text-[45px] text-[40px]">Institutional Talks</h1>
            <p class="text-lg">Acharya Prashant loves interacting with the dynamic and vibrant youth, and has a profound faith in their ability to effectuate significant changes.<br>
              He delivers regular talks at illustrious educational institutes, including prestigious organizations such as IITs and IIMs.<br>
              With over 100+ college appearances and interactions with thousands of enthusiastic students, Acharya Prashant has left an indelible impression.</p>
          </div>
          <button class="bg-orange-600 py-[8px] rounded-[20px] text-lg font-bold text-white xs:w-1/4 ">
            Invite
          </button>
        </div>
        <div class="hidden sm:flex my-[60px] gap-7">

          <Slider>

            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-144c7728-ecc9-4526-b85c-0630c8498388/30/image.jpg" alt="">
              <h2>IIT Delhi</h2>
              <p>13 April 2024</p>
            </div>
            <div class="flex-shrink-0 mx-[20px]  w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-594816fc-7557-4f01-947f-3ae3f7b3ee5b/30/image.jpg" alt="">
              <h2>IIT Madras</h2>
              <p>23 September 2023</p>
            </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-234812b8-3ce9-4ad0-a61a-5e7bcd898a92/30/image.jpg" alt="">
              <h2>SRCC</h2>
              <p>29 April 2023</p>
            </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-7acb8a82-e919-491e-8a00-f7d3aa61e79f/30/image.jpg" alt="">
              <h2>NIT Jamshedpur</h2>
              <p>4 October 2023</p>
            </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-e8e15791-669e-46d2-8836-55e5420db7a5/30/image.jpg" alt="">
              <h2>Shyamlal College</h2>
              <p>17 March 2023</p>
            </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-9ee94ac0-9271-4e44-9058-cca0ae5f13a2/30/image.jpg" alt="">
              <h1>IIT Kanpur</h1>
              <p>7 June 2023</p>
            </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-8ec9bd76-5c67-45a2-bcce-579f721ad876/30/image.jpg" alt="">
              <h1>IIT Patna</h1>
              <p>20 March 2023</p>
          </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-a754c361-4bdf-438a-a51e-24bc9bd81d3e/30/image.jpg" alt="">
              <h1>IRMA, Ahmedabad</h1>
              <p>13 April 2023</p>
            </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-476f7ef6-abcb-455d-9ddc-2cdac1aa8d77/30/image.jpg" alt="">
              <h1>DOMS, IIT Delhi</h1>
              <p>2 April 2023</p>
            </div>
            <div class="flex-shrink-0 mx-[20px] w-[200px] rounded-[10px] overflow-hidden">
              <img src="https://cimg.acharyaprashant.org/images/img-c520ba30-033f-430a-9c27-18816eca2ae1/30/image.jpg" alt="">
              <h1>SPA, Delhi</h1>
              <p>2 February 2023</p>
            </div>

          </Slider>
        </div>
      </div>
 

    <!--AP Books-->
  
    <div class="w-[90%]">
      <div class="flex w-[100%] my-[30px] ml-3 gap-4 justify-between  flex-col md:flex-row md:items-end">
        <div class="xs:w-[70%]">
          <h1 class="font-bold sm:text-[50px] text-[40px]">Acharya Prashant's Books</h1>
          <p class="sm:text-xl text-lg">Unique literature shedding light on Vedanta and various spiritual streams, youth awakening, women empowerment, restlessness, love, relationship, environmental crisis and other important topics.<br>
            Here are 140+ books. These books are compilations of Acharya Prashant's talks in the past 15 years.<br>
            Millions have found light through them. Truth beckons, respond to its call.<br></p>
        </div>
        <button class="bg-orange-600 py-[8px] mx-7 rounded-[20px] text-lg font-bold text-white min-w-[200px] ">
          Start Reading
        </button>
      </div>

      <div class="flex flex-col items-center gap-6 bg-[#fff4ee] overflow-hidden p-7 px-[60px]">
        <div class="flex gap-6">
          {#each data.bookURL as book}
            <a href="books">
              <img class="min-w-[150px] f h-[200px] rounded-xl bg-green-100" src="{book.photoURL}">
            </a>
            
          {/each}
        </div>

        <div class="flex flex-col">
          <div class="display-inline"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="40" viewBox="0 0 64 40" class="fill-orange-300"><path d="M29.094 26.083q0-3.863-1.71-6.974-1.711-3.11-4.648-4.966t-6.6-1.856q-2.603 0-4.934.996t-4.118 2.989h-.878q.817-2.657 2.68-4.981 1.86-2.325 4.51-4.06 2.65-1.737 5.858-2.642.697-.212 1.196-.423.5-.21.772-.483.365-.302.56-.68.198-.376.197-.89 0-.936-.666-1.524-.667-.59-1.725-.589-.758 0-1.423.15-.667.153-1.665.454a26.4 26.4 0 0 0-5.54 2.626 23.7 23.7 0 0 0-4.663 3.804q-2.967 3.019-4.632 7.034T0 22.853q0 5.433 2.074 9.268 2.073 3.834 5.495 5.856Q10.989 40 15.077 40q3.996 0 7.16-1.826a13.6 13.6 0 0 0 5.01-4.982q1.847-3.155 1.847-7.109m34.906 0q0-3.863-1.71-6.974-1.71-3.11-4.648-4.966-2.935-1.856-6.57-1.856a12.5 12.5 0 0 0-4.964.996q-2.331.996-4.087 2.989h-.878q.788-2.657 2.649-4.981 1.862-2.325 4.51-4.06 2.65-1.737 5.859-2.642.696-.212 1.196-.423.5-.21.802-.483.363-.302.545-.68.182-.376.182-.89 0-.936-.667-1.524-.666-.59-1.695-.589a6.4 6.4 0 0 0-1.438.15q-.651.153-1.68.454A27 27 0 0 0 45.88 3.23a24.3 24.3 0 0 0-4.708 3.804q-2.906 3.019-4.556 7.034t-1.65 8.785q0 5.433 2.043 9.268 2.044 3.834 5.465 5.856Q45.895 40 50.013 40q3.996 0 7.16-1.826a13.46 13.46 0 0 0 4.995-4.982Q64 30.037 64 26.083"></path></svg></div>
          <p class="ml-[65px] xs:text-[27px] text-lg italic">The mark of a good word is that it takes you to silence</p>
        </div>
      </div>
    </div>

    <!--VIDEO SECTION-->
     
    <div class="w-[90%] relative">
      <div class="flex w-[100%] m-[15px] justify-between mb-[40px] gap-4 flex-col md:flex-row md:items-end">
        <div class="flex flex-col gap-4 xs:w-[60%] ">
          <h1 class="font-bold text-[45px]">Video Series</h1>
          
          <p class="text-xl"><span class="font-semibold">To a roaring spirit yearning for freedom and joy, Acharya Prashant's discourses come as a solace.</span><br>
            Thousands of hours of sessions on various scriptures and life topics (in the light of Vedanta) have been compiled and structured in the form of 300+ video series.<br>
            These video series are aimed at liberating the troubled mind from the shackles of ignorance and suffering.
          </p>
        </div>
        <button class="bg-orange-600 py-[8px] mr-6 rounded-[20px] text-lg font-bold text-white min-w-[200px] ">
          Explore Video Series
        </button>
      </div>

      <div class="flex flex-col items-center gap-6 bg-[#fff4ee] p-9 px-[60px]">
        
        <SliderAuto data={data.series.series}/>
        

        <div class="flex flex-col">
          <div class="display-inline"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="40" viewBox="0 0 64 40" class="fill-orange-200"><path d="M29.094 26.083q0-3.863-1.71-6.974-1.711-3.11-4.648-4.966t-6.6-1.856q-2.603 0-4.934.996t-4.118 2.989h-.878q.817-2.657 2.68-4.981 1.86-2.325 4.51-4.06 2.65-1.737 5.858-2.642.697-.212 1.196-.423.5-.21.772-.483.365-.302.56-.68.198-.376.197-.89 0-.936-.666-1.524-.667-.59-1.725-.589-.758 0-1.423.15-.667.153-1.665.454a26.4 26.4 0 0 0-5.54 2.626 23.7 23.7 0 0 0-4.663 3.804q-2.967 3.019-4.632 7.034T0 22.853q0 5.433 2.074 9.268 2.073 3.834 5.495 5.856Q10.989 40 15.077 40q3.996 0 7.16-1.826a13.6 13.6 0 0 0 5.01-4.982q1.847-3.155 1.847-7.109m34.906 0q0-3.863-1.71-6.974-1.71-3.11-4.648-4.966-2.935-1.856-6.57-1.856a12.5 12.5 0 0 0-4.964.996q-2.331.996-4.087 2.989h-.878q.788-2.657 2.649-4.981 1.862-2.325 4.51-4.06 2.65-1.737 5.859-2.642.696-.212 1.196-.423.5-.21.802-.483.363-.302.545-.68.182-.376.182-.89 0-.936-.667-1.524-.666-.59-1.695-.589a6.4 6.4 0 0 0-1.438.15q-.651.153-1.68.454A27 27 0 0 0 45.88 3.23a24.3 24.3 0 0 0-4.708 3.804q-2.906 3.019-4.556 7.034t-1.65 8.785q0 5.433 2.043 9.268 2.044 3.834 5.465 5.856Q45.895 40 50.013 40q3.996 0 7.16-1.826a13.46 13.46 0 0 0 4.995-4.982Q64 30.037 64 26.083"></path></svg></div>
          <p class="ml-[65px] xs:text-[27px] text-lg italic">Begin from where you are, and what you are.</p>
        </div>
      </div>
    </div>

</div>


 
  

<a href="/biography">Biography</a>
<hr>
<a href="/gita">gita</a>
<hr>
<a href="/articles">articles</a>

<hr>
<h2>Our journey</h2>
<p>youtube<br>
social media<br>
repository of wisdom content</p>


<hr>
<h2>Interviews and podcasts</h2>
<button><a href="/invite">invite</a></button>
<a href="/invite/videos">See all vides</a>

<hr>
<h1>glimpses</h1>
<button><a href="/invite/gallery">See all</a> </button>

<hr>
<a href="/media">print media</a>
<a href="/invite/talks">institutional talks</a>
<hr>

<h2>Ways to connect</h2>
<a href="/gita">BHAGWAT GITA</a>
<a href="/books">AP BOOKS</a>
<a href="/video-modules">VIDEO SERIES</a>
<a href="/media">IN MEDIA </a>
<a href="/invite/podcast">INTERVIEW</a>
<a href="/vedant-basic-to-advance">VEDANT: BASICS TO CLASSIC</a>
<a href="articles">AP ARTICLES</a>
<a href="#">DONWLOAD APP</a>
<a href="/invite/talks">INVITE</a>
<a href="#">CONTACT US</a>
<hr>

<h2>Live Sessions</h2>
<a href="/gita">gita</a>
<a href="/vedant-basics-to-classic">vedant-basics-to-classic</a>

<hr>
<h2>AP Books</h2>
<a href="/books">books</a>
<a href="/video-modules">video-modules</a>
<a href="/contribute">contribute</a>
