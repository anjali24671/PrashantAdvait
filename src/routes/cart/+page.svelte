<script>
    import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';
    import Userfront from '@userfront/toolkit/web-components';
    import { onMount } from 'svelte';

    Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);

    let userCartData = { book: [], eBook: [] }; // Initialize with default structure
    let isLoading = true;
    let error = null;

    onMount(async () => {
        const { user } = Userfront;

        if (user) {
            await loadCart(user);
        } else {
            console.log("User not found");
            isLoading = false;
        }
    });

    async function loadCart(user) {
        try {
       
            // get the user id
            const userFront_id = user.userUuid;
            const ourUserRes = await fetch(`/api/users?userfront_id=${userFront_id}`);
            if (!ourUserRes.ok) throw new Error("Failed to fetch user data");
            const ourUser = await ourUserRes.json();

            // fetch cart data for the logged in useer
            const cartsResponse = await fetch(`/api/carts?user_id=${ourUser.user._id}`);

            if (!cartsResponse.ok) throw new Error("Failed to fetch cart data");
            const cart = await cartsResponse.json();
            let cartData = { book: [], eBook: [] };

            for (let product of cart) {
                if (product.type === "book") {
                    const bookDataRes = await fetch(`/api/books?id=${product.product_id}`);
                    if (!bookDataRes.ok) throw new Error("Failed to fetch book data");
                    const bookData = await bookDataRes.json();

                    cartData.book.push(bookData)
                

                } else if (product.type === "eBook") {
                    const bookDataRes = await fetch(`/api/eBooks?id=${product.product_id}`);
                    if (!bookDataRes.ok) throw new Error("Failed to fetch eBook data");
                    const bookData = await bookDataRes.json();
            
                    cartData.eBook.push(bookData)
                }
            }

            userCartData = cartData;
           

            isLoading = false;
          
        } catch (err) {
            console.log(err);
            error = err.message;
            isLoading = false;
        }
    }
</script>

<h1>carts</h1>

{#if isLoading}
    <p>Loading...</p>
{:else if error}
    <p>Error: {error}</p>
{:else if userCartData.book}
    {data}
    {data.userCartData}
    {userCartData.book}
    <h1>Books</h1>
    <div class="flex flex-col gap-7 mt-5">
        {#each userCartData.book as product}
            <div class="flex gap-3">
                <img class="w-[100px] rounded-md" src={product.photoURL}>
                <div class="flex flex-col">
                    <h2 class="font-bold">{product.name}</h2>
                    <h2>Contribution: {product.price}</h2>
                    <div class="">{product.language}</div>
                </div>
            </div>
        {/each}
    </div>

    <h1>E Books</h1>
    <div class="flex flex-col gap-7 mt-5">
        {#each userCartData.eBook as product}
            <div class="flex gap-3">
                <img class="w-[100px] rounded-md" src={product.photoURL}>
                <div class="flex flex-col">
                    <h2 class="font-bold">{product.name}</h2>
                    <h2>Contribution: {product.price}</h2>
                    <div class="">{product.language}</div>
                </div>
            </div>
        {/each}
    </div>

{:else}
    <p>No items in cart</p>
{/if}
