<script>
    export let data
    let prev = 'A'
</script>


<h1>I am All</h1>


{#each data.eBooks as ebook}
{#if ebook.bookPrice}
<p>{ebook.bookPrice}</p>

{/if}

{/each}