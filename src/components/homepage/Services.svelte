<script>
    import repair from '$icons/repair.png';
</script>

<section class="services-conatiner">
    <div class="left-container">
        <h3 class="sub-heading">Test subtitle</h3>
        <h1 class="heading mt-2 lg:mt-4 mb-4 lg:mb-8">Test title</h1>
        <p class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="right-container">
        <div class="services-box">
            <div class="service" style="--i:0;">
                <div class="service-img">
                    <img src="{repair}" alt="">
                </div>
                <h3 class="">electrical task 01</h3>
            </div>
            <div class="service" style="--i:1;">
                <div class="service-img">
                    <img src="{repair}" alt="">
                </div>
                <h3>electrical task 01</h3>
            </div>
            <div class="service" style="--i:2;">
                <div class="service-img">
                    <img src="{repair}" alt="">
                </div>
                <h3>electrical task 01</h3>
            </div>
            <div class="service" style="--i:3;">
                <div class="service-img">
                    <img src="{repair}" alt="">
                </div>
                <h3>electrical task 01</h3>
            </div>
            <div class="circle"></div>
            <div class="overlay"></div>
        </div>
    </div>
</section>


<style lang="postcss">
    section{
        min-height: 100vh;
        padding: 10rem 7% 2rem;
    }
    .services-conatiner{
        @apply relative grid grid-cols-1 lg:grid-cols-2 gap-12;
    }
    .services-conatiner .left-container{
        @apply w-full;
    }

    .services-conatiner .right-container{
        /* @apply w-full */
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 768px;
        height: 768px;
        /* background-color: red; */
        overflow: hidden;
        pointer-events: none;
    }

    .services-conatiner .right-container .services-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        /* background-color: purple; */
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .services-conatiner .services-box .service{
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        transform: rotate(calc(360deg / 4 * var(--i)));
        transform-origin: 384px;
        background: white;
        padding: 13px 0;

    }

    .services-conatiner .services-box .service:nth-child(1){
        margin-left: 54px;
    }
    .services-conatiner .services-box .service:nth-child(2),
    .services-conatiner .services-box .service:nth-child(4){
        padding-bottom: 20px;
    }

    .service-img{
        @apply w-24 h-24 bg-primary rounded-full flex items-center justify-center;
    }

    .service-img img{
        @apply w-16 h-16;
    }

    .services-conatiner .services-box .circle{
        
        width: 560px;
        height: 560px;
        background-color: #fff;
        border: 4px solid #FCCB06;
        border-radius: 50%;
    }

    .services-conatiner .services-box .overlay{
        @apply absolute top-0 left-0 w-0 h-0;
        border-top: 384px solid #FCCB06;
        border-right: 384px solid #FCCB06;
        border-bottom: 384px solid #FCCB06;
        border-left: 384px solid transparent;
    }
</style>