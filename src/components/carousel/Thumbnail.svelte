<script lang="ts">
	export let thumbImg: HTMLImageElement;
	export let altTag: string;
	// export let titleLink;
	export let id: number;
	export let selected;

</script>

<div class="thumbnail-cont">
	<img class="sample cursor" 
        class:active={selected} 
        {id} src={thumbImg} 
        alt={altTag} 
        on:click on:keydown/>
</div>


<style>
    /* Six columns side by side */
    .thumbnail-cont {
        @apply bg-white;
        width: 16.66%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Add a transparency effect for thumnbail images */
    .sample {
        opacity: 0.4;
    }
        
    .sample:hover {
        opacity: 1;
    }
        
    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        transition: all .1s ease-in-out;
    }	
        
    /* Add a pointer when hovering over the thumbnail images */
    .cursor {
        cursor: pointer;
    }	

    .active {
        opacity: 1;
        padding: 5px;
        width: 85%;
        height: 80px;
    }
</style>


