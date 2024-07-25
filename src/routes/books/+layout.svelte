<script>
    import { goto } from '$app/navigation';
    import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';
    import Userfront from '@userfront/toolkit/web-components';
    import searchQuery from "../stores/searchQuery"

    Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
    const {user} = Userfront

    let inputQuery = ''
   
    function getOffer(event){
        let price = event.target.value
        window.location.href = `/books/section/${price}`
        

    }

    function getAll(){
        goto('/books/all')
    }

    function setQuery(){
        searchQuery.set(inputQuery)
    }

</script>


<div>
    <header class="px-10 my-4">
        <div class="flex gap-4 flex-col">
            <div class="flex rounded-[8px] text-black-700 border-1 shadow overflow-hidden md:w-[660px]  bg-[#f8fafc] relative">
            
                <input bind:value={inputQuery} class="w-full p-2 md:px-2  px-[40px] md:rounded-[0px] shadow-lg  rounded-[8px]" placeholder="Search for book">
                <button on:click={setQuery} class="md:bg-orange-200 p-2 absolute h-full md:right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg>
                </button>
            
                
            </div>
            <div class="flex gap-4 text-sm">
                <div class="border hover:border-orange-600 border-black font-semibold flex-shrink-0  py-1 px-3 bg-[#f8fafc] rounded-sm">
                    <button on:click={getAll}>All</button>
                </div>
                <div class="border font-semibold flex-shrink-0 shadow py-1 px-2 bg-[#f8fafc] rounded-sm hover:border-orange-600"><a href="/books/">Explore</a></div>
              
                <div class="border font-semibold shadow flex-shrink-0  py-1 px-2 bg-[#f8fafc] rounded-sm hover:border-orange-600">
                    <select class="bg-transparent" on:change={getOffer}>
                        <option value="" disabled selected hidden>Offers</option>
                        <option value=99>Books at 99</option>
                        <option value=129>Books at 129</option>
                        <option value=51>Books at 51</option>
                    </select>
                </div>
                <div class="border font-semibold flex-shrink-0  py-1 px-2 bg-[#f8fafc] shadow border rounded-sm hover:border-orange-600"><a href="/books/my_books?user={user.userUuid}">My Books</a></div>
                <div class="border font-semibold flex-shrink-0  py-1 px-2 bg-[#f8fafc] shadow rounded-sm hover:border-orange-600">My Orders</div>
                <div class="border font-semibold flex-shrink-0  py-1 px-2 bg-[#f8fafc] border-1 shadow rounded-sm hover:border-orange-600">Contact Us</div>
            </div>
        </div>
    </header>

    <slot></slot>
</div>