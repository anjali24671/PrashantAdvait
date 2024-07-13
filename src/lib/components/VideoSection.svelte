<script>
    export let title
    export let reference;
    export let duration
    export let language
    export let video_id
</script>


<div class="hover:bg-gray-100 rounded-[10px] flex flex-col gap-1 py-4 "> 
    <span class="bg-gray-200 py-1 px-2 w-[50px] rounded-md bg-gray-400 text-white font-semibold text-xs">part 1</span>   
    <h1 class="font-semibold text-lg">{title}</h1>
    <p class="text-gray-500 text-sm font-semibold">{reference}</p>
    <p class="text-xs text-gray-500 font-semibold">{duration}</p>
    <span class="bg-blue-200 py-1 px-2 my-2 w-[60px] rounded-md  text-xs">{language}</span>
    <div class="flex items-center gap-3 text-orange-600 font-semibold text-xs">
        <a>ADD TO CART</a>
        <hr class="w-[1px] h-[20px] bg-gray-400">
        <a>ENROLL</a>
    </div>
</div>