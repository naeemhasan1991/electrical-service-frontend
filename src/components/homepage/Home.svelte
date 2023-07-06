<script>
    import BgBlob from '$icons/Blob.svelte';
    import blob from '$icons/blob-01.png';
    import profile from '$icons/profile-01.png';
    import {onMount} from 'svelte';

    let typingElement;
    var typeArray = ["Mohammad Shabuddin", "a skilled electrician"];
    var index = 0,
    isAdding = true,
    typeIndex = 0;

    function playAnim() {
        setTimeout(()=>{
            typingElement.innerText = typeArray[typeIndex].slice(0, index);

                // If typing
                if (isAdding) {
                    if (index >= typeArray[typeIndex].length) {
                        isAdding = false;
                        // If text typed completely, wait 2s before starting to remove it.
                        setTimeout(function () {
                            playAnim();
                        }, 2000);
                        return;
                    } else {
                        // Continue to typing text by increasing index
                        index++;
                    }
                } else {
                    // If removing
                    if (index === 0) {
                        isAdding = true;
                        //If text removed completely, move on to next text by increasing typeIndex
                        typeIndex++;
                        if (typeIndex >= typeArray.length) {
                            // Turn to beginning when reached to last text
                            typeIndex = 0;
                        }
                    } else {
                        // Continue to removing text by decreasing index
                        index--;
                    }
                }
                // Call the function always
                playAnim();
        }, isAdding ? 120 : 60);
    }

    onMount(()=>{
        // Start typing text
        playAnim();
    });
</script>

<section class="home-conatiner" id="home">
    <div class="left-part">
        <h3 class="sub-heading">Greetings,</h3>
        <h2 class="heading mt-2 lg:mt-4 mb-4 lg:mb-8">I am <span class="typing-text" bind:this={typingElement}></span></h2>
        <p class="title">I am a dedicated and skilled electrician with a passion for providing top-quality electrical services. With years of experience in the field, I bring expertise, professionalism, and a commitment to exceptional customer service to every project I undertake.</p>
    </div>
    <div class="right-part">
        <div class="image-box relative flex items-center justify-center w-full">
            <!-- <BgBlob/> -->
            <img class="w-full  h-[50vh] lg:h-[80vh] object-contain" src="{blob}" alt="blob">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <img class="w-2/3 lg:w-full" src="{profile}" alt="">
            </div>
        </div>
    </div>
</section>


<style lang="postcss">
    svg{
        width: 400px;
        height: 400px;
    }
    section{
        min-height: 100vh;
        padding: 10rem 7% 2rem;
    }
    .home-conatiner{
        @apply grid grid-cols-1 lg:grid-cols-2 items-center gap-12;
    }
    .home-conatiner .left-part{
        @apply w-full order-last lg:order-1;
    }

    .home-conatiner .right-part{
        @apply w-full  order-1 lg:order-last;
    }
    .typing-text{
        @apply text-primary;
    }
    .left-part .heading .typing-text::after{
        content: "|";
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }
    
</style>