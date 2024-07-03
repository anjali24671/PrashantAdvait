<script>
    export let data
    let prev = 'A'
</script>


<h1>I am All</h1>


{#each data.eBooks as ebook}
{#if ebook.name[0]===prev}
<p>{ebook.name}</p>

{:else}
<h1>hello</h1>
{/if}

{/each}