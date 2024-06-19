<script>
    export let data
    let goodData = JSON.parse(data.carts)
    let RZP = false

    function infoPrint(id, type) {
        console.log(id)
        RZP = true

        if(RZP){
            console.log(`user can access this product: ${id}\n and it is a ${type}`)
            const response = fetch("/api/userAllowedResources", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: id,
                    type: type
                })
            })
        }
    }
   
</script>


<h1>carts</h1>

{#each goodData as product }
    <h2>{product.quantity}</h2>
    <h2>{product.book_id}</h2>
    <button on:click={() => infoPrint(product.book_id, product.type)}>print me in console</button>
{/each}
