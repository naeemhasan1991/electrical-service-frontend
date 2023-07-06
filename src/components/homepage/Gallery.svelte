<script>
    import {onMount} from 'svelte';
    import '@splidejs/splide/css';
    import Splide from '@splidejs/splide';

    import { urlFor } from '$lib/image';
	import { element } from 'svelte/internal';

    onMount(() => {
        new Splide( '.splide', {
            type   : 'loop',
            lazyLoad: 'nearby',
            autoplay: true,
            interval: 4000,
            perPage: 1,
        } ).mount();
    });

    export let gallery;

    $: console.log('gallery----------------->', gallery);
    

</script>

<section class="w-full bg-light mt-20" id="gallery">
    <div class="inner-wrapper flex-col items-center justify-center py-16">
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="heading pb-10">{gallery?.title}</h1>
        </div>
        <div class="splide" aria-label="Electrial service carousel with Splide">
            <div class="splide__track">
                <ul class="splide__list">
                    {#each gallery.items as element}
                        <li class="splide__slide">
                            <img src={element.image ? urlFor(element.image).width(1920).height(800).url() : '--'} alt="{element?.title}" />
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    <div id="contact"></div>
</section>
