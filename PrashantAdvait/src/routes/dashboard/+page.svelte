<script>
	import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';

	import Userfront from '@userfront/toolkit/web-components';
	Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);

	const { user } = Userfront;
	

    
</script>

<h1>Dashboard</h1>

<article>
	<header>
		<h4>{user.email}</h4>
		
		<button on:click={() => Userfront.logout()}>Log out</button>
	</header>

	<textarea readonly rows="6">Userfront.user = {JSON.stringify(user, null, 4)}</textarea>
</article>

<style>
	article header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	textarea {
		white-space: pre;
		overflow-wrap: normal;
		overflow-x: hidden;
	}
</style>