<script>
    export let form; // This will hold the response from the server

    let addArticleForm = false;
    
    function addArticles() {
        addArticleForm = true;
    }
</script>

<button on:click={addArticles}>Add article</button>
<button>delete article</button>
<button>update article</button>
<button>read article</button>

{#if addArticleForm}
    <form method="POST">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" required />

        <button type="submit">Add article</button>
    </form>
{/if}
