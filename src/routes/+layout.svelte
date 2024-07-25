<script >
	
    import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';

	  import Userfront from '@userfront/toolkit/web-components';
    import { onMount, tick } from 'svelte';
    import { writable } from 'svelte/store';
    import "../app.css";

    let selected="";
    Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
    let interviewData = writable()
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
	

	function goto(){
		if(selected){
			window.location.href = selected;
		}
	}
	export let data
	let expand=false
	function toggleExpand(){
		expand =!expand;
	}

	function isLoggedIn(){

	}

</script>

<nav  class="w-full sticky px-6 py-3 top-0 z-50 text-white  flex justify-between items-center bg-[#d24115] h-[45px]">
    <div class="flex items-center justify-between gap-[20px]">
      <img class="h-[30px] rounded-[50%]" alt="" src="acharya.jpeg">
        <div><a href="/">Home</a></div>
        <div>
            <select class="bg-[#d24115]" id="sessionSelect" on:click={goto} bind:value={selected}>
                <option value="" disabled selected hidden>Live Session</option>
                <option value="/gita">Gita</option>
                <option value="/vedant-basics-to-classic">Vedant</option>
            </select>
        </div>
        <div><a href="/video-modules">Video Series</a></div>
        <div><a href="/books">AP Books</a></div>
        <div><a href="/articles">AP articles</a></div>
		<select class="bg-[#d24115] w-[65px]" id="invite" on:click={goto} bind:value={selected}>
			<option value="" disabled selected hidden>invite</option>
			<option value="/invite/talks">for a talk</option>
			<option value="/invite/podcasts">for an interview</option>
		</select>
        <div><a href="/contribute">Donate</a></div>
    </div>
  
    <div class="flex justify-between space-x-[10px] space-r-[10px] items-center">
        <a href="/carts">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" class="fill-current">
                <path d="M8.094 14.263h11.568a.8.8 0 0 0 .567-.223.74.74 0 0 0 .241-.569.74.74 0 0 0-.241-.568.8.8 0 0 0-.567-.223H8.293a.85.85 0 0 1-.63-.243 1.13 1.13 0 0 1-.304-.64L5.763 1.188Q5.67.599 5.37.299 5.07 0 4.272 0H.83a.8.8 0 0 0-.577.243A.78.78 0 0 0 0 .822q0 .334.252.573t.577.238h3.244L5.627 11.99q.168 1.056.76 1.664.594.609 1.707.609m-1.785-3.47h13.405q1.124 0 1.717-.613.593-.615.76-1.68l.767-4.94.026-.202A1.4 1.4 0 0 0 23 3.175q0-.375-.268-.614-.267-.238-.73-.238H5.428l.021 1.572h15.673l-.661 4.443a1.16 1.16 0 0 1-.29.635q-.225.237-.624.238l-13.248.01zM8.881 19q.714 0 1.197-.472.482-.472.482-1.14 0-.67-.482-1.142-.483-.472-1.197-.472-.693 0-1.181.472a1.53 1.53 0 0 0-.488 1.141q0 .67.488 1.141.488.472 1.18.472m9.248 0q.693 0 1.181-.472t.488-1.14-.488-1.142a1.64 1.64 0 0 0-1.18-.472q-.694 0-1.192.472a1.5 1.5 0 0 0-.499 1.141q0 .67.499 1.141.499.472 1.191.472"></path>
            </svg>   
        </a>
        <button class="flex items-center gap-2 text-sm" on:click={toggleExpand} id="menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" class="fill-current">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.826" d="M1 1.609h20M1 8h20M1 14.391h20" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""></path>
            </svg>
            {#if expand}
                <div>I am expanded</div>
                {#if data.authenticated}
                    <p>Hello here are your enrollments</p>
                {/if}
            {/if}
            <p>Menu</p>
        </button>
    </div>
</nav>
<!-- 
<main>
    <h1>Pay with Razorpay</h1>
    {#if $razorpayScriptLoaded}
      <button on:click={openRazorpayCheckout}>Pay Now</button>
    {:else}
      <p>Loading payment gateway...</p>
    {/if}
  </main>
   -->

<!-- 

<button><a href="/login">Login</a></button> -->
<!-- <login-form redirect="/articles"/> -->
<slot/>

<style>

  </style>