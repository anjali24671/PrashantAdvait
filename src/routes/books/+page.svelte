<script>
    export let data
    console.log(data.loadBestSeller.bookPrice)

</script>

<div class="px-10">
    <div class="flex gap-4 w-[660px] flex-col">
        <div class="flex  w-[660px]">
            <input class="w-[90%] p-2" placeholder="search for book">
            <button class="bg-orange-200 p-2">Search</button>
        </div>
        <div class="flex gap-4">
            <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">All</div>
            <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Explore</div>
            <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Categories</div>
            <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Offers</div>
            <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">My Books</div>
            <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">My Orders</div>
            <div class="border font-semibold flex-shrink-0 border-gray-600 py-1 px-2 rounded-[8px]">Contact Us</div>
        </div>
    </div>
</div>
