<script>
    import { onMount, tick } from 'svelte';
    import { writable } from 'svelte/store';
    import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';
    export let data
  
    console.log(data.articleCategories)


    let rzp1;
    let razorpayScriptLoaded = writable(false);
  
    const paymentOptions = {
      key: PUBLIC_KEY_ID, // Replace with your Razorpay key
      amount: '50000', // Amount in paise (INR 500)
      currency: 'INR',
      name: 'Prashant Advait',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: 'order_IluGWxBm9U8zJ8', // This is a sample Order ID
      handler: function (response) {
        console.log('Payment ID:', response.razorpay_payment_id);
        console.log('Order ID:', response.razorpay_order_id);
        console.log('Signature:', response.razorpay_signature);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9000090000'
      },
     
      theme: {
        color: '#3399cc'
      }
    };
   
    
    async function initializeRazorpay() {
      try {
        const loaded = await loadRazorpayScript();
        if (loaded) {
          paymentOptions.order_id = data.order_data;
          // paymentOptions.amount = data.order_data.amount;
          // paymentOptions.currency = data.order_data.currency;
          rzp1 = new Razorpay(paymentOptions);
          razorpayScriptLoaded.set(true);

        }
      } catch (error) {
        console.error(error.message);
      }
    }

    // if the script loaded succesfully then add the script tag to document
    async function loadRazorpayScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error('Failed to load Razorpay script.'));
        document.body.appendChild(script);
      });
    }
  
  
    function openRazorpayCheckout(event) {
      if (rzp1) {
        
        rzp1.open();
        event.preventDefault();
      } else {
        console.error('Razorpay instance is not initialized.');
      }
    }
  
    onMount(async () => {
      await initializeRazorpay();
    });


  </script>

  <div class="flex bg-gray-800 text-white justify-between items-center lg:text-m sm:text-sm">
    <div class="flex gap-2 items-center">
      <div class="border border-white rounded-[8px] bg-red-600 w-3 h-3"></div>
      Acharya Prashant is dedicated to building a brighter future for you 
      </div>
    <button class="bg-transparent px-2 h-6 rounded-[3px] border border-white">Extend your hand</button>
  </div>


  <!-- SECTION 1 -->
  <div  class="relative">
    <!-- <img src="https://cimg.acharyaprashant.org/images/img-67be009c-628a-4d15-a2bb-ba5bfc615a97/30/image.jpg"> -->
    <picture>
      <source srcset="https://cimg.acharyaprashant.org/images/img-599af525-d2a4-4741-b1e2-78b74e7d342b/20/image.jpg" media="(max-width: 1024px)">
      <source srcset="https://cimg.acharyaprashant.org/images/img-67be009c-628a-4d15-a2bb-ba5bfc615a97/30/image.jpg" media="(min-width: 1024px)">
      <img src="https://cimg.acharyaprashant.org/images/img-67be009c-628a-4d15-a2bb-ba5bfc615a97/30/image.jpg" alt="Responsive image" class="w-full h-auto">
    </picture>

   
      <div class="flex px-[30px]  justify-around hidden lg:block w-[50%] h-[100%] absolute top-1/4 flex-col items-center " >
        <h1 class="text-xl my-4 font-semibold" style=" font-size: clamp(3rem, 4.8vw, 4.5rem)">Acharya Prashant</h1>
        <h2 class="text-[30px] font-normal italic" style="font-size: clamp(2rem, 2.8vw, 2.6rem);">To demolish all that is false</h2>
        <p class="text-sm">
          Acharya Prashant is a spiritual teacher rooted in Advait Vedanta. His unique spiritual literature is at par with the highest words that mankind has ever known. Equally, one could simply call him a teacher beyond any tradition.<br>
  He is a veganism promoter, an environmental activist, a science activist, a campaigner against superstition, and a champion of essential human freedom.
        </p>
        <span class="text-sm text-orange-600">Read Bio -</span>
      </div>


    <div class="flex lg:hidden flex-col items-center">
      <h1 class="text-[70px] font-semibold">Acharya Prashant</h1>
      <h2 class="text-[45px] font-normal italic">To demolish all that is false</h2>
      <p>
        Acharya Prashant is a spiritual teacher rooted in Advait Vedanta. His unique spiritual literature is at par with the highest words that mankind has ever known. Equally, one could simply call him a teacher beyond any tradition.<br>
He is a veganism promoter, an environmental activist, a science activist, a campaigner against superstition, and a champion of essential human freedom.
      </p>
      <span class="text-sm text-orange-600">Read Bio -</span>
    </div>
  </div>




  <main>
    <h1>Pay with Razorpay</h1>
    {#if $razorpayScriptLoaded}
      <button on:click={openRazorpayCheckout}>Pay Now</button>
    {:else}
      <p>Loading payment gateway...</p>
    {/if}
  </main>
  
  
  <main>
    <h1>Pay with Razorpay</h1>
    {#if $razorpayScriptLoaded}
      <button on:click={openRazorpayCheckout}>Pay Now</button>
    {:else}
      <p>Loading payment gateway...</p>
    {/if}
  </main>
  
  

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
