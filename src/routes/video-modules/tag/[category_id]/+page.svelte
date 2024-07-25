<script>
    import VideoSeries from '$lib/components/VideoSeries.svelte';
    export let data;
    const series = JSON.parse(data.videoSeries)
    
  
</script>

{#if series}
    <div class="grid lg:grid-cols-4 lg:mx-[20px] md:grid-cols-3 place-items-center  grid-cols-2 ">
        {#each series as ser}
            <VideoSeries id={ser._id} photoURL={ser.photoURL} title={ser.title} language={ser.language} />
        {/each}
    </div>
{:else}
    <div class="w-full bg-red-500">
        <div class="flex items-center justify-center">
            <div>No video series found.</div>
        </div>
       
    </div>
{/if}