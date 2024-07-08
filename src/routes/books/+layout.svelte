<script>
    import searchQuery from '../stores/searchQuery'
    import { goto } from '$app/navigation';
    import { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';
    import Userfront from '@userfront/toolkit/web-components';

    Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
    const {user} = Userfront

    console.log(user.email)

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
    <header class="px-10">
        <div class="flex gap-4 flex-col">
            <div class="flex rounded-[8px] overflow-hidden md:w-[660px] relative">
            
                <input bind:value={inputQuery} class="w-full p-2 md:px-2 px-[40px] md:rounded-[0px] rounded-[8px]" placeholder="search for book">
                <button on:click={setQuery} class="md:bg-orange-200 p-2 absolute h-full md:right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg>
                </button>
            
                
            </div>
            <div class="flex gap-4">
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">
                    <button on:click={getAll}>All</button>
                </div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]"><a href="/books/">Explore</a></div>
              
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">
                    <select on:change={getOffer}>
                        <option value="" disabled selected hidden>Offers</option>
                        <option value=99>Books at 99</option>
                        <option value=129>Books at 129</option>
                        <option value=51>Books at 51</option>
                    </select>
                </div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]"><a href="/books/my_books?user={user.userUuid}">My Books</a></div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">My Orders</div>
                <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Contact Us</div>
            </div>
        </div>
    </header>

    <slot></slot>
</div>