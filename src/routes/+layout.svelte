<script >
	import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';
	import Userfront from '@userfront/toolkit/web-components';
	Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
	import "../app.css";

	let selected="";
	

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

<nav class="flex text-sm font-sans font-[550] items-center space-x-100 justify-between h-10 bg-orange-600">
    
        <div><a href="/">Home</a></div>
        <div>
            <select class="bg-orange-600" id="sessionSelect" on:click={goto} bind:value={selected}>
                <option value="" disabled selected hidden>live session</option>
                <option value="/gita">Gita</option>
                <option value="/vedant-basics-to-classic">Vedant</option>
            </select>
        </div>
        <div><a href="/video-modules">Video Series</a></div>
        <div><a href="/books">AP Books</a></div>
        <div><a href="/articles">AP articles</a></div>
		<select class="bg-orange-600" id="invite" on:click={goto} bind:value={selected}>
			<option value="" disabled selected hidden>invite</option>
			<option value="/invite/talks">for a talk</option>
			<option value="/invite/podcasts">for an interview</option>
		</select>
        <div><a href="/contribute">donate</a></div>
    

    <div>
        <button on:click={toggleExpand} id="menu">Menu
            {#if expand}
                <div>I am expanded</div>
                {#if data.authenticated}
                    <p>Hello here are your enrollments</p>
                {/if}
            {/if}
        </button>
    </div>
</nav>



<button><a href="/login">Login</a></button>
<!-- <login-form redirect="/articles"/> -->
<slot/>