<script>
    import searchQuery from '../../stores/searchQuery'
    import { goto } from '$app/navigation';
    import {onMount, onDestroy} from 'svelte';

    export let data   

    let unsubscribe;
    let eClicked=false
    let quantity = 1
    let pClicked=true
    let initialUpdate = true;
    let book = JSON.parse(data.book)

    onMount(() => {
        // Subscribe to the searchQuery store
        unsubscribe = searchQuery.subscribe(async (query) => {
          if (!initialUpdate) {

            try {
              goto(`/books/search?query=${query}`)

            } catch (error) {
                  console.error("Error fetching books:", error);
              }
          }
        });

        // Mark the end of the initial update phase
        initialUpdate = false;
    });

    onDestroy(() => {
      // Clean up the subscription
      if (unsubscribe) unsubscribe();
    });

    function togglePaperClass(){
        pClicked = !pClicked
        eClicked = !eClicked
    }
    function toggleEBookClass(){
        eClicked = !eClicked;
        pClicked = !pClicked
    }


</script>

<main>
   <div class="flex m-5 justify-between gap-5 ">
      <!-- Book Image for large screens -->
      <div class="min-w-44 hidden  lg:flex lg:min-w-52 rounded-[5px] h-[300px] ">
          <img class="lg:w-full self-center w-44 mx-auto" src="{book.photoURL}" alt="book image">
      </div>
      <div class="flex flex-col gap-6">
          <h1 class="font-semibold  text-lg">{book.name}</h1>
          <!-- Book Image for smaller screens -->
          <div class="w-44 flex lg:hidden lg:min-w-52 rounded-[5px] h-[300px] bg-orange-500 mx-auto">
              <img class="w-full h-full" src="{book.photoURL}">
          </div>

          <!--price section for small screen-->
          <div class="w-full lg:w-[40%] lg:min-w-[400px] md:gap-2 flex ">
            <div on:click={toggleEBookClass} class={`cursor-pointer py-2 pl-4  w-[50%] border-2 md:rounded-lg rounded-l-lg ${eClicked ? "bg-orange-100 border-orange-600" : "border-gray-300"}`}>
                <h2 class="font-semibold text-lg">eBook</h2>
                <p class="text-xs font-semibold text-gray-700">Suggested Contribution</p>
                <h1 class="text-orange-600 font-semibold text-xl">₹{book.price}</h1>
            </div>
            <div on:click={togglePaperClass} class={`cursor-pointer py-2 pl-4 w-[50%] border-2 md:rounded-lg ml-[-1px] rounded-r-lg ${pClicked ? "bg-orange-100  border-orange-600" : "border-gray-300"}`}>
                <h2 class="font-semibold text-lg">Paperback</h2>
               
                {#if book.paperPrice}
                    <p>57% Off</p>
                    <h1 class="text-orange-600 font-semibold text-xl">₹{book.paperPrice}</h1>
                {:else}
                    <p class="text-xs font-semibold text-gray-700">Suggested Contribution</p>
                    <h1 class="text-orange-600 font-semibold text-sm">Not available</h1>
                {/if}
            </div>
          </div>
          <div class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="h-3 w-3 flex-shrink-0 fill-current text-blue-400 lg:h-4 lg:w-4">
                  <path fill="current-color" d="M9.636 18.763q1.87 0 3.525-.719a9.36 9.36 0 0 0 4.888-4.888q.714-1.65.714-3.53 0-1.87-.719-3.524a9.4 9.4 0 0 0-1.979-2.918 9.2 9.2 0 0 0-2.913-1.974A8.85 8.85 0 0 0 9.627.5q-1.87 0-3.52.71a9.3 9.3 0 0 0-2.914 1.974 9.3 9.3 0 0 0-1.979 2.918A8 8 0 0 0 .5 9.627q0 1.88.72 3.53a9.4 9.4 0 0 0 1.978 2.908q1.26 1.26 2.909 1.979 1.65.72 3.53.72m-1.617-4.09q-.301 0-.508-.197a.66.66 0 0 1-.207-.498q0-.283.207-.484a.7.7 0 0 1 .508-.202h1.109V9.288h-.95q-.3 0-.507-.192a.66.66 0 0 1-.207-.503q0-.273.207-.475a.7.7 0 0 1 .507-.202h1.74q.376 0 .568.24.193.24.193.644v4.493h1.08q.302 0 .503.202a.66.66 0 0 1 .202.484q0 .3-.202.498a.7.7 0 0 1-.503.197zM9.57 6.44q-.516 0-.878-.361a1.2 1.2 0 0 1-.362-.87q0-.526.362-.888.361-.362.878-.362.508 0 .87.362.362.361.362.888 0 .507-.362.87a1.2 1.2 0 0 1-.87.361"></path>
              </svg>
              <p class="text-xs text-gray-900">Now you can read eBook on our mobile app for the best reading experience</p>
              <a href="#" class="text-xs text-orange-600">View App</a>
            
          </div>
          <hr >
          <!--quantity section for paperback-->

          {#if pClicked}
          <div class="md:hidden flex justify-between items-center ">
            <div class="flex items-center gap-2 ">
                <h2>Quantity:</h2>
                <div class="border border-black-200 items-center shadow font-semibold flex gap-7 px-3 py-1">
                    <button on:click={()=> {
                        (quantity<=2)? quantity=0 : quantity--}} class="text-xl font-bold cursor-pointer">-</button>
                    <p>{quantity}</p>
                    <button on:click={()=> {
                        (quantity>=10)? quantity : quantity++}} class="text-xl font-bold cursor-pointer">+</button>
                </div>
            </div>
            <div class="font-semibold flex flex-col justify-end">
                <p class="text-green-600 self-end">In stock</p>
                <p class="font-bold text-orange-600 text-xs">Free Delivery</p>
            </div>
          </div>
          {/if}

          <!--checkout for small screen-->
         <div class="min-w-80 lg:hidden flex flex-col gap-4 rounded-[5px] ">
            <!-- <div class="flex font-semibold justify-between">
                <div>Add to cart</div>
                <div class="text-orange-600 ">GO TO CART</div>
            </div> -->
            <button class="hover:bg-orange-600 hover:text-white border  text-lg text-orange-600 rounded-lg py-2 border-orange-600">Add eBook to Cart</button>
            <button class="hover:bg-orange-600 hover:text-white border  text-lg text-orange-600 rounded-lg py-2 border-orange-600">Get eBook now</button>
            {#if eClicked}
                <button class="text-orange-600 text-lg">request echolarship</button>
            {/if}
         </div>

         <hr>


         <!--Book meta data section-->
         <div class="font-semibold flex flex-col gap-3 justify-center ">
            <h2 class="text-lg">Book Details</h2>
            <p class="text-xs text-gray-700">Language</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M11.436 19.486q.464 0 1.144-.526.678-.527 1.42-1.382.743-.855 1.393-1.822a13 13 0 0 0 1.059-1.857q.407-.89.407-1.49 0-.453-.39-1.013a6 6 0 0 0-.99-1.087 6.4 6.4 0 0 0-1.246-.866q-.646-.34-1.144-.34-.317 0-.685.187a21 21 0 0 0-.713.38q-.345.192-.617.192-.17 0-.487-.181a5 5 0 0 1-.64-.442 4.3 4.3 0 0 1-.544-.515q-.22-.255-.22-.402 0-.102.141-.22a.45.45 0 0 1 .289-.12q.147 0 .515.25.368.249.787.498t.725.249q.69 0 1.092-.419.402-.42.402-1.121 0-.441-.385-1.019.442-.227 1.02-.555.576-.329 1.16-.741a8 8 0 0 0 1.064-.9q.48-.487.72-1.042l-.997-.51q-.204.499-.702.951a8 8 0 0 1-1.127.85q-.629.396-1.25.724-.624.329-1.088.566a.5.5 0 0 0-.255.295q-.062.192.097.43.339.453.487.685t.147.402a.27.27 0 0 1-.085.198.27.27 0 0 1-.198.085q-.182 0-.572-.25-.39-.248-.821-.497-.43-.25-.736-.25-.375 0-.73.221a2 2 0 0 0-.595.56q-.237.34-.238.68 0 .375.323.827.322.453.81.872.486.418 1.002.685.515.266.889.266.305 0 .713-.187.407-.187.77-.38.362-.192.532-.192.249 0 .69.255.442.255.895.634.453.38.759.742t.306.566q0 .373-.357 1.087-.357.712-.906 1.545a23 23 0 0 1-1.155 1.597q-.606.765-1.12 1.25-.516.488-.799.488a.6.6 0 0 1-.351-.136q-.18-.135-.181-.272 0-.09.028-.192.029-.102.119-.385.08-.25.175-.595.097-.345.085-.73-.01-.532-.458-.985-.447-.453-1.365-1.098l-.356-.25a8 8 0 0 1-.346-.26q-.475-.351-.475-.725 0-.18.147-.611.159-.555.159-.804 0-.363-.187-.645-.187-.284-.595-.612a1 1 0 0 1-.09-.08.5.5 0 0 0-.102-.078L5.91 8.39q-1.052-.94-1.438-1.664Q4.088 6 4.19 5.344t.544-1.37l-1.098-.226a3.9 3.9 0 0 0-.567 1.59q-.101.845.368 1.818.471.975 1.727 2.083l1.699 1.495q.294.249.441.385t.147.249q0 .17-.147.532a2.3 2.3 0 0 0-.147.85q0 .94.917 1.63.93.69 1.506 1.104.577.412.577.606 0 .475-.203.917a2.4 2.4 0 0 0-.204 1.007q0 .363.255.702.255.34.645.555t.787.215M11.006 22q2.253 0 4.246-.866a11.27 11.27 0 0 0 5.887-5.888Q22 13.259 22 10.994q0-2.253-.866-4.246a11.3 11.3 0 0 0-2.384-3.515A11.1 11.1 0 0 0 15.24.855 10.7 10.7 0 0 0 10.994 0q-2.253 0-4.24.855a11.2 11.2 0 0 0-3.51 2.378A11.2 11.2 0 0 0 .861 6.748 10.6 10.6 0 0 0 0 10.994q0 2.265.866 4.252A11.3 11.3 0 0 0 3.25 18.75a11.3 11.3 0 0 0 3.504 2.384Q8.741 22 11.006 22m0-1.608a9.1 9.1 0 0 1-3.63-.736 9.6 9.6 0 0 1-3.005-2.032 9.5 9.5 0 0 1-2.039-3 9.1 9.1 0 0 1-.735-3.63q0-1.925.735-3.629a9.5 9.5 0 0 1 2.039-3 9.7 9.7 0 0 1 3-2.033 9 9 0 0 1 3.623-.735q1.937 0 3.635.735a9.7 9.7 0 0 1 3 2.033 9.5 9.5 0 0 1 2.039 3 9.1 9.1 0 0 1 .735 3.63 9.1 9.1 0 0 1-.735 3.628 9.5 9.5 0 0 1-2.039 3 9.7 9.7 0 0 1-3 2.033 9 9 0 0 1-3.623.736"></path></svg>
            <p class="text-xs">{book.language}</p>
         </div>

         <hr>

         <div class="flex flex-col gap-2">
            <h2 class="text-lg font-semibold">Description</h2>
            <p class="text-gray-800">{book.description}</p>
         </div>
      </div>


      <!--checkout for large screen-->
      <div class={`bg-orange-100 lg:flex hidden font-semibold  flex-col gap-3 p-5 min-w-[300px] ${(eClicked) ? ` max-h-[350px]`: 'max-h-[420px]' }`}>
        <div class="flex mb-6 font-semibold justify-between">
            {#if eClicked}
                <div>Suggested Contribution</div>
                <div class="text-orange-600 ">₹{book.price}</div>
            {:else}
                <div>Buy new:</div>
                {#if book.paperPrice}
                    <div class="text-orange-600 ">₹{book.paperPrice}</div>
                {:else}
                    <div class="text-orange-600 ">Not available</div>
                {/if}
            {/if}
        </div>


        <!--quantity section-->
        {#if pClicked}
          <div class=" flex flex-col justify-between items-start gap-3 ">
            <div class="font-semibold flex items-center gap-3 justify-center">
                <p class="text-green-600 text-lg">In Stock</p>
                <p class="font-bold text-orange-600 text-sm">Free Delivery</p>
            </div>
            <div class="flex items-center  mb-5 gap-2">
                <h2>Quantity:</h2>
                <div class="shadow bg-orange-200 rounded-lg items-center font-semibold flex gap-7 px-3 py-1">
                    <button on:click={()=> {
                        (quantity<=2)? quantity=0 : quantity--}} class="text-xl font-bold cursor-pointer">-</button>
                    <p>{quantity}</p>
                    <button on:click={()=> {
                        (quantity>=10)? quantity : quantity++}} class="text-xl font-bold cursor-pointer">+</button>
                </div>
            </div>
            
          </div>
          {/if}
        <button class="hover:bg-orange-700 border bg-orange-600 text-white text-md text-orange-600 rounded-lg py-2 border-orange-600">Add eBook to Cart</button>
        <button class="hover:bg-orange-200 border  text-md text-orange-600 rounded-lg py-2 border-orange-600">Get eBook now</button>
        {#if eClicked}
            <button class=" text-md text-orange-600 py-2 ">REQUEST SCHOLARSHIP</button>
        {/if}
        

        <div class="flex flex-col gap-7 justify-center items-center">
            <p class="text-lg">Share this Book</p>
            <div class="flex w-full justify-around">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="34" viewBox="0 0 19 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h19v34H0z"></path><path fill="#3E6FA7" stroke="#3E6FA7" stroke-width="1.393" d="M12.074 33H6.23l-.133-14.297H1V13.13h5.102l-.005-4.52C6.096 4.02 9.3 1 14.16 1l3.84.23v5.296h-3.394c-1.892 0-2.532 1.342-2.532 2.81v3.795h5.666l-.765 5.572h-4.9z" style="--darkreader-inline-fill: #7ca8ce; --darkreader-inline-stroke: #7ca8ce;" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""></path></g></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h38v34H0z"></path><path fill="#08BBEE" d="M5.213 20.363a7.25 7.25 0 0 0 3.634-.251c-3.548-.578-6.262-3.748-6.262-7.572q0-.09.002-.178a7.2 7.2 0 0 0 3.551.995c-2.13-1.348-3.553-3.773-3.553-6.542a7.8 7.8 0 0 1 1.05-3.931c3.78 4.663 9.323 7.75 15.572 8.17a8 8 0 0 1-.175-1.683c0-4.347 3.415-7.871 7.629-7.871 2.201 0 4.184.962 5.577 2.5a11.8 11.8 0 0 0 4.735-1.898A7.4 7.4 0 0 1 33.728 6.4 12.5 12.5 0 0 0 38 5.19a12.9 12.9 0 0 1-3.712 4.008l.002.173-.004.896c0 12.279-9.647 22.233-21.549 22.233-4.329 0-8.36-1.317-11.737-3.584q.9.108 1.83.109c3.585 0 6.89-1.24 9.532-3.326-3.384 0-6.193-2.242-7.149-5.336" style="--darkreader-inline-fill: #32cbf7;" data-darkreader-inline-fill=""></path></g></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v34H0z"></path><path fill="#06BA27" d="M15.218 1.019c9.364-.445 17.065 7.145 16.774 16.455-.271 8.685-7.533 15.584-16.24 15.452A16 16 0 0 1 9.4 31.509l-.524-.249L.208 33l1.534-8.787A15.9 15.9 0 0 1 0 17.013C-.026 8.503 6.698 1.423 15.218 1.02m.781 3.098a13.06 13.06 0 0 0-9.205 3.804 12.9 12.9 0 0 0-3.812 9.184c0 1.889.393 3.7 1.17 5.392l.245.504.576 1.125-1.084 5.248 5.147-1.217 1.17.58a12.9 12.9 0 0 0 5.793 1.355 12.94 12.94 0 0 0 9.204-3.804 13 13 0 0 0 3.813-9.183c0-3.47-1.354-6.731-3.812-9.184a12.95 12.95 0 0 0-9.205-3.804M9.985 9.543a1.158 1.158 0 0 1 1.729.269l.075.143 1.304 2.943c.147.331.128.709-.044 1.02l-.098.15-.662.854c-.279.36-.316.854-.09 1.249.788 1.368 3.872 4.104 5.338 4.696.37.15.788.088 1.1-.147l.128-.111.758-.77c.26-.265.628-.386.989-.334l.154.033 3.1.888a1.152 1.152 0 0 1 .654 1.727c-.606.955-1.568 2.12-2.771 2.41-2.121.514-5.38.013-9.447-3.775-3.522-3.28-4.453-6.01-4.233-8.177.125-1.23 1.15-2.338 2.016-3.068" style="--darkreader-inline-fill: #54f872;" data-darkreader-inline-fill=""></path></g></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h35v34H0z"></path><path fill="#0A66C2" fill-rule="nonzero" d="M3.99 8.956c2.172 0 3.99-1.812 3.99-3.978S6.161 1 3.99 1 0 2.812 0 4.978s1.817 3.978 3.99 3.978M.665 33h6.65V10.9H.664zM25.71 10.282c-2.926 0-5.143 1.06-6.34 2.696V10.9h-6.649V33h6.65V20.934c0-3.138 1.684-4.553 4.122-4.553 2.128 0 3.857 1.282 3.857 4.022V33H34V19.43c0-5.966-3.812-9.148-8.29-9.148" style="--darkreader-inline-fill: #62b3f6;" data-darkreader-inline-fill=""></path></g></svg></div>
            </div>
        </div>
       

      </div>
   </div>
   
</main>