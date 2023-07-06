<script>
    // import type { Contents } from '$lib/sanity.js';
    import { urlFor } from '$lib/image.js';

    export let offers;
    $: console.log('offers----------------->', offers);
</script>

<section class="w-full">
    <div class="inner-wrapper flex-col items-center justify-start pt-20">
        <div class="text-center w-2/3">
            <h1 class="heading">{offers?.title}</h1>
            <p class="title text-center py-10">{offers?.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
            {#each offers?.items as element}
                <div class="flex flex-col items-center justify-center">
                    <img class="w-16 h-16 object-fill" src="{element?.image ? urlFor(element.image).width(64).height(64).url() : '---'}" alt="offering-icon">
                    <!-- <p class="font-bold text-4xl">{element?.attributes?.icon?.data?.attributes?.formats?.medium?.url}</p> -->
                    <h3 class="title my-3 text-primary line-clamp-1">{element?.title}</h3>
                    <p class="para text-center line-clamp-3">{element?.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
