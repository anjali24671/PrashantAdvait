<script>
	import { setContext } from "svelte";
    import addBookToCart from "../../routes/utils/addBookToCart";

    export let show=false
</script>


{#if show}
    <div class="bg-orange-600 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[400px] absolute top-[50%] left-[50%] z-50">
        <button on:click={()=> setContext('bookType',"eBook")}>E-Book</button>
        <button on:click={()=> setContext('bookType',"Book")}>Paper Book</button>

        <button >Add to cart</button>
    </div>
{/if}