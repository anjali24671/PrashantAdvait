<script >
	import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';
	import Userfront from '@userfront/toolkit/web-components';
	Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);


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
<nav>
	<ul>
        <a href="/">Home</a>
		<select id="sessionSelect" on:click={goto} bind:value={selected}>
			<option value="" disabled selected hidden>live session</option>
			<option value="/gita">Gita</option>
			<option value="/vedant-basics-to-classic">Vedant</option>
		</select>
        
        <a href="/video-modules">Video Series</a>
		<a href="/books">AP Books</a>
		<a href="/articles">AP articles</a>
		<a href="/invite">invite</a>
		<a href="/contribute">donate</a>
    </ul>

	<button on:click={toggleExpand} id="menu">Menu
		{#if expand}
			<div>I am expanded</div>
			{#if data.authenticated}
				<p>Hello here are your enrollements</p>
			{/if}
		{/if}
	</button>
</nav>



<button><a href="/login">Login</a></button>
<!-- <login-form redirect="/articles"/> -->
<slot/>