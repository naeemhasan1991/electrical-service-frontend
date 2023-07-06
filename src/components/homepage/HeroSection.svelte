<script>
    // import hero_image from '$lib/images/multimeter-placed-tools.jpg';
    // import RequestQuoteModal from "./RequestQuoteModal.svelte";
    // import { showRequestQoute } from "../../../stores/home";
    // import type { Contents } from '$lib/sanity';
    import { urlFor } from '$lib/image';

    let showModal = false;
    export let hero;

    $: console.log('hero------------------>', hero);
    

</script>

<section id="hero-section" class="w-full h-[800px]"  style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 10, 0.7)), url({hero.image ? urlFor(hero.image).width(1920).height(800).url() : '--'});">
    <!-- <img class="w-16 h-16 object-fill rounded-full" src="http://localhost:1337{data?.attributes?.bgimage?.data?.attributes?.url}" alt="offering-icon"> -->
    <div class="inner-wrapper items-center justify-start">
        <div class="w-full lg:w-2/3">
            <h1 class="heading text-primary">{hero.title}</h1>
            <h3 class="title text-white pt-4 pb-8">{hero.description}</h3>
            <!-- <button class="px-3 py-2 bg-primary text-lg text-black font-bold" on:click={()=> $showRequestQoute = !$showRequestQoute}>Request A Quote</button> -->
        </div>
    </div>
    <div id="features"></div>
</section>

<!-- <RequestQuoteModal/> -->

<style>
    #hero-section {
        background-color: #cccccc;
        background-repeat: no-repeat;
        background-position: center; 
        background-size: cover;
        background-blend-mode: darken;
    }
</style>