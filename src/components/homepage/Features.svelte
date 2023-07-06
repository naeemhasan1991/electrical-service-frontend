<script>
    import { urlFor } from '$lib/image';

    export let features;

    $: console.log('feature data------->', features);
</script>

<!-- {#if features} -->
    <section class="w-full bg-light">
        <div class="inner-wrapper flex-col items-center justify-start pt-32 pb-20">
            <h1 class="heading pb-10">{features?.title}</h1>
            <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {#each features?.items as element}
                    <div class="relative w-full h-60 p-6 bg-no-repeat bg-cover bg-center" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 10, 0.7)), url({element?.image ? urlFor(element.image).width(540).height(320).url() : '---'});">
                        <div class="w-full h-full flex flex-col items-start justify-center">
                            <h2 class="sub-heading text-white line-clamp-1 mb-4">{element?.title}</h2>
                            <h3 class="title text-primary line-clamp-1">{element?.description}</h3>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="about"></div>
    </section>
<!-- {/if} -->

<style>
    /* .card-container{
        background-image: linear-gradient(0deg, rgba(100, 100, 100, 0.8), rgba(100, 100, 100, 0.4)), url("./electrical-system-in-home.webp");
    } */
</style>
