
<script>
    import searchQuery from '../stores/searchQuery'
    import {goto} from '$app/navigation'
    export let data

    let inputQuery = ''
    let selected=''

    function setQuery(){
        searchQuery.set(inputQuery)
    }

    function navigate(value){
        console.log(value.target.value)
        goto(`/video-modules/tag/${value.target.value}`)
    }

    const categories = JSON.parse(data.videoCategories)

    console.log("video categories: ", categories)

</script>

<div>
    <header class="mx-4 my-2 flex gap-2">
        <div><h2>Video series</h2></div>
        <div class="flex gap-4 flex-col border overflow-hidden rounded-[8px]">
            <div class="flex md:w-[660px] relative">

                <select on:change={(e)=>navigate(e)} bind:value={selected} class="px-2 border-r w-[50px]">
                    
                    <option value="" disabled selected hidden>All</option>
                    {#each categories as category}
                        <option value="{category._id}">{category.name}</option>
                    {/each}

                </select>
                <input bind:value={inputQuery} class="w-full p-2 md:px-2 px-[40px] md:rounded-[0px] rounded-[8px]" placeholder="search for videos">
                <button on:click={setQuery} class="md:bg-orange-200 p-2 absolute h-full md:right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg>
                </button>
            
                
            </div>
            
        </div>
    </header>

</div>


<slot></slot>