<script lang="ts">
    import type { Gallery } from '$lib/utils/sanity';
    import { urlFor } from '$lib/utils/image';

    export let gallery: Gallery;

    import Slide from '../carousel/Slider.svelte';
	import Thumbnail from '../carousel/Thumbnail.svelte';
	import Caption from '../carousel/Caption.svelte';

    type imageObject = {
        id: number,
        attributes: {
            name: string,
            url: string
        }
    }
	
    function getElementIndex(array:Array<imageObject>, elementId: number){
        return array.map(e => e.id).indexOf(elementId);
    }

	/* IMAGE TO SHOW */
	let imageShowingIndex = 0;
	// $: console.log(imageShowingIndex);
	$: itemsImage = gallery?.items[imageShowingIndex];
	
	const nextSlide = () => {
		if (imageShowingIndex === gallery?.items.length-1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	}
	
	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = gallery?.items.length-1;
		} else {
			imageShowingIndex -= 1;
		}
	}
	
	const goToSlide = (number: number) => imageShowingIndex = number;

</script>

<section class="splide" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">Slide 01</li>
			<li class="splide__slide">Slide 02</li>
			<li class="splide__slide">Slide 03</li>
		</ul>
  </div>
</section>
  