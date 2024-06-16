<script >
	import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';
	import Userfront from '@userfront/toolkit/web-components';
	Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
</script>

<slot/>