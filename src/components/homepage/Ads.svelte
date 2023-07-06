<script>
    // import type { Contents } from '$lib/utils/sanity';
    import { urlFor } from '$lib/image';
    export let ads;

    $: console.log('ads----------------->', ads);
</script>

<div class="w-full">
    <div class="inner-wrapper flex-col items-center justify-start pt-20">
        <h1 class="heading pb-10">{ads.title}</h1>
        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each ads?.items as element}
                <div class="bg-light w-full py-10 flex flex-col items-center justify-center">
                    <img width="84px" height="84px" src="{element.image ? urlFor(element.image).width(84).height(84).url() : '---'}" alt="{element?.title}">
                    <h3 class="title pt-4 line-clamp-1">{element?.title}</h3>
                </div>
            {/each}
        </div>
    </div>
    <div id="services"></div>
</div>