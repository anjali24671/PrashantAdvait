<script>
    export let data
    let goodData = JSON.parse(data.carts)
    let RZP = false

    function infoPrint(id, type) {
       
        RZP = true

        if(RZP){
          
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
    <h2>{product.product_id}</h2>
    <button on:click={() => infoPrint(product.product_id, product.type)}>print me in console</button>
{/each}
