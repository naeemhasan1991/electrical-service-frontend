<script lang="ts">	
    import { createEventDispatcher } from 'svelte';

	export let slideNo : number;
	export let totalSlides : number;
	export let image : string;
	export let altTag : string;
    export let width = '100%';
    export let height = '500px';

    const dispatch = createEventDispatcher();
</script>

<!-- Full-width images with number text -->
<div class="mySlides relative">
    <div class="h-[540px]">
	    <img class="w-[{width}] object-cover" style="width:{width}; height:{height}" src={image} alt={altTag}>
    </div>
	<div class="absolute z-10 flex items-center left-1/2 transform -translate-y-1/2 bottom-4"> 
        <div class="numbertext">{slideNo} / {totalSlides}</div>
    </div>
    <div class="w-full absolute z-10 flex items-center justify-between top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <!-- Previous Arrow -->
	    <a href="#arrowL" class="arrow prev" on:click={() => dispatch('prevClick')}>&#10094;</a>
        <!-- Next Arrow -->
	    <a href="#arrowR" class="arrow next" on:click={() => dispatch('nextClick')}>&#10095;</a>
    </div>
</div>

<style>	
    /* Number text (1/3 etc) */
    .numbertext {
        color: white;
        font-size: .9rem;
        padding: 8px 12px;
        text-shadow: 1px 1px black;
    }	
    /* Next & previous buttons */
    .prev,
    .next {
        cursor: pointer;
        /*   position: absolute;
        top: 50%; */
        width: auto;
        /*   padding: 16px;
        margin-top: -50px; */
        color: hsla(125, 86%, 100%, .7);
        font-weight: bold;
        font-size: 2rem;
        border-radius: 0 3px 3px 0;
        user-select: none;
        -webkit-user-select: none;

    }

    /* Position the "next button" to the right */
    .next {
        /*   right: 15vw; */
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
        color: hsla(125, 26%, 64%, .5);
        text-decoration: none;
    }	
        
    .prev:active,
    .next:active {
        color: hsla(125, 86%, 64%, 1);
        text-decoration: none;
    }	
</style>