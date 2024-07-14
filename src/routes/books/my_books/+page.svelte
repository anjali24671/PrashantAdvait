<script>
    import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';
    import Userfront from '@userfront/toolkit/web-components';
    import BookHorizontal from "../../../lib/components/BookHorizontal.svelte"
    Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
    const {user} = Userfront

    export let data
    const eBooks = data.props?.eBooks[0]

</script>

<h1>I am MY BOOK</h1>
<p>Radhey Radhey bol, Barsana mein dol</p>


<div class="m-[2vw] flex justify-start items-center">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
        {#each eBooks as ebook}
            {#if ebook.paper_price}
                <BookHorizontal image={ebook.photoURL} book_name={ebook.name} book_id={ebook._id} book_price={ebook.price} paper_price={ebook.paper_price} />
    
            {:else}
                <BookHorizontal image={ebook.photoURL} book_name={ebook.name} book_id={ebook._id} book_price={ebook.price} />
            {/if}
    
        {/each}
    </div>    
</div>


