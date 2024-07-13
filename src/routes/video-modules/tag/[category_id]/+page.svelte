<script>
    import VideoSeries from '$lib/components/VideoSeries.svelte';
    export let data;
    const series = JSON.parse(data.videoSeries)
    console.log(series)
  
</script>

{#if series}
    <div class="grid lg:grid-cols-5 md:grid-cols-3  grid-cols-2 ">
        {#each series as ser}
            <VideoSeries id={ser._id} photoURL={ser.photoURL} title={ser.title} language={ser.language} />
        {/each}
    </div>
{:else}
    <p>No video series found.</p>
{/if}