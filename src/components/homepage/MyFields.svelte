<script lang="ts">
    import type { Contents } from '$lib/utils/sanity';
    import { urlFor } from '$lib/utils/image';
    export let myfields: Contents;
    $: console.log('myfields------------------>', myfields);
    
</script>

<section class="w-full">
    <div class="inner-wrapper items-center justify-start py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-8 gap-y-8 lg:gap-0">
            <div class="w-full h-full flex flex-col items-start justify-center">
                <h1 class="heading pb-10">{myfields?.title}</h1>
                <p class="para">{myfields?.description}</p>
            </div>
            <div class="w-full h-full">
                <img class="w-full h-full object-cover" src="{myfields?.image ? urlFor(myfields.image).width(800).height(640).url() : '--'}" alt="section-icon">
            </div>
        </div>
    </div>
</section>