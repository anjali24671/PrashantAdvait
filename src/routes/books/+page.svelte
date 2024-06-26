<script>
    import Slider from '$lib/components/Slider.svelte';
    export let data
    // console.log(JSON.parse(data.newCategories))
    const newData = JSON.parse(data.newRelease)
    console.log(newData)
</script>

<div class="flex flex-col justify-center items-start w-[100%]">
    <header class="flex flex-col ">
        <div >
            <input placeholder="Search Books"><button>Search</button>
        </div>
        <div class="flex gap-3">
            <button class="flex-shrink-0">All</button>
            <button class="flex-shrink-0">Explore</button>
            <button class="flex-shrink-0">All Books</button>
            <button class="flex-shrink-0">Categories</button>
            <button class="flex-shrink-0">Offers</button>
            <button class="flex-shrink-0">My Books</button>
            <button class="flex-shrink-0">My Orders</button>
            <button class="flex-shrink-0">Contact Us</button>
        </div>
        
    </header>
    <div class="newRelease"></div>
    <div class="bestSeller"></div>
    <div>Tags</div>
    <div class="categories">
        <div>bhagwad gita</div>
        <div>life problems</div>
        <div>spirituality and wisdom</div>
        <div>
            <div>veganism</div>
            <div>women liberation</div>
        </div>
    </div>
</div>