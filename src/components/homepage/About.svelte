<script>
    import circle from '$icons/circle-01.png';
    import repair from '$icons/repair.png';
</script>

<section class="about" id="about">
    <div class="about-img">
        <div class="image-box relative flex items-center justify-center w-full">
            <!-- <BgBlob/> -->
            <img class="w-full h-[50vh] lg:h-[80vh] object-contain" src="{circle}" alt="">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <img class="w-2/3 lg:w-full" src="{repair}" alt="">
            </div>
        </div>
        <!-- <img src="{repair}" alt=""> -->
    </div>
    <div class="about-content">
        <h2 class="heading">About <span>Me</span></h2>
        <h3 class="sub-heading mt-2 lg:mt-4 mb-4 lg:mb-8">As an electrician, I understand the importance of safe and reliable electrical systems in both residential and commercial settings.</h3>
        <p class="title">I have a strong background in electrical installations, repairs, and maintenance, and I strive to deliver solutions that meet the unique needs of each client. Whether it's troubleshooting electrical issues, upgrading existing systems, or designing and installing new electrical setups, I am equipped with the knowledge and expertise to handle any challenge.</p>
    </div>

</section>


<style lang="postcss">
    section{
        min-height: 100vh;
        padding: 10rem 7% 2rem;
    }
    span{
        @apply text-primary;
    }
    .about{
        @apply grid grid-cols-1 lg:grid-cols-2 items-center gap-12;
    }
    .about-img{
        @apply w-full;
    }
    .about-content{
        @apply w-full;
    }
</style>