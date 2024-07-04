<script>
    import BookHorizontal from '$lib/components/BookHorizontal.svelte';
    export let data
    let prev = 'A'

    let ebooks = data.eBooks
</script>


<h1>I am All</h1>

<div class="m-[2vw] flex justify-center md:justify-start items-center">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
        {#each ebooks as ebook}
            {#if ebook.paper_price}
                <BookHorizontal image={ebook.photoURL} book_name={ebook.name} book_id={ebook._id} book_price={ebook.price} paper_price={ebook.paper_price} />
    
            {:else}
            <BookHorizontal image={ebook.photoURL} book_name={ebook.name} book_id={ebook._id} book_price={ebook.price} />
            {/if}
    
        {/each}
    </div>    
</div>
