<script>
	import { setContext } from "svelte";
    import addBookToCart from "../../routes/utils/addBookToCart";

    export let image
    export let book_name
    export let paper_id = ""
    export let Ebook_id = ""
    export let paper_price
    export let show=false



    let bookData = []

    function addToCart(){
        let bookObj = []
        bookData.forEach(bookType => {
            if(bookType == "book"){
                bookObj.push({
                    "type":"book",
                    "product_id":paper_id,
                    "book_name":book_name,
                    "quantity":1
                })
            }

            if(bookType == "eBook"){
                bookObj.push({
                    "type":'eBook',
                    "product_id":Ebook_id,
                    book_name
                })
            }
        })

        addBookToCart(bookObj)
    }
</script>


{#if show}

<div class="bg-orange-600 p-6 flex flex-col transform -translate-x-1/2 -translate-y-1/2 w-[400px] absolute top-[50%] left-[50%] z-50">
    <div class="flex gap-4 items-start justify-between">
        <div class="flex gap-3">
            <img class="w-[50px] rounded-md" src="{image}">
            <p>{book_name}</p>
        </div>
        
        <button on:click={() => show = false}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" class="h-4 w-4 fill-current"><path fill-rule="evenodd" d="M.793.793a1 1 0 0 1 1.414 0L6.5 5.086 10.793.793a1 1 0 1 1 1.414 1.414L7.914 6.5l4.293 4.293a1 1 0 0 1-1.414 1.414L6.5 7.914l-4.293 4.293a1 1 0 0 1-1.414-1.414L5.086 6.5.793 2.207a1 1 0 0 1 0-1.414"></path></svg>
        </button>
    </div>
    <hr class="m-3 w-full">

    <div class="flex flex-col font-semibold text-md gap-4">
        <div>
            <input type="checkbox" name="productType" bind:group={bookData} value="eBook">
            <label>ebook</label>
        </div>
        {#if paper_price}
            <div>
                <input type="checkbox" name="productType" bind:group={bookData} value="book">
                <label>Paperback at: {paper_price}</label> 
            </div>
        {/if}
        <div class="flex font-normal text-xs items-center gap-1">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="h-3 w-3 fill-current laptop:h-4 laptop:w-4"><path fill="current-color" d="M9.636 18.763q1.87 0 3.525-.719a9.36 9.36 0 0 0 4.888-4.888q.714-1.65.714-3.53 0-1.87-.719-3.524a9.4 9.4 0 0 0-1.979-2.918 9.2 9.2 0 0 0-2.913-1.974A8.85 8.85 0 0 0 9.627.5q-1.87 0-3.52.71a9.3 9.3 0 0 0-2.914 1.974 9.3 9.3 0 0 0-1.979 2.918A8.8 8.8 0 0 0 .5 9.627q0 1.88.72 3.53a9.4 9.4 0 0 0 1.978 2.908q1.26 1.26 2.909 1.979 1.65.72 3.53.72m-1.617-4.09q-.301 0-.508-.197a.66.66 0 0 1-.207-.498q0-.283.207-.484a.7.7 0 0 1 .508-.202h1.109V9.288h-.95q-.3 0-.507-.192a.66.66 0 0 1-.207-.503q0-.273.207-.475a.7.7 0 0 1 .507-.202h1.74q.376 0 .568.24.193.24.193.644v4.493h1.08q.302 0 .503.202a.66.66 0 0 1 .202.484q0 .3-.202.498a.7.7 0 0 1-.503.197zM9.57 6.44q-.516 0-.878-.361a1.2 1.2 0 0 1-.362-.87q0-.526.362-.888.361-.362.878-.362.508 0 .87.362.362.361.362.888 0 .507-.362.87a1.2 1.2 0 0 1-.87.361"></path></svg></span>
            <p>Now you can read eBook on our mobile app</p>
        </div>
        
        <button class="bg-green-500 mt-auto h-[40px]" on:click={addToCart}>Add To Cart</button>
    </div>
</div>

{/if}