<script>
    import Card from '$components/Card.svelte';
	import HeroSection from '$components/homepage/HeroSection.svelte';
	import Features from '$components/homepage/Features.svelte';
	// import MyFields from '$components/homepage/MyFields.svelte';
	import Ads from '$components/homepage/Ads.svelte';
	import Offers from '$components/homepage/Offers.svelte';
	import Gallery from '$components/homepage/Gallery.svelte';
	import Home from '$components/homepage/Home.svelte';
	import ContactUs from '$components/homepage/ContactUs.svelte';
	import Services from '$components/homepage/Services.svelte';
	import About from '$components/homepage/About.svelte';
	// import Welcome from '$components/Welcome.svelte';


	export let data;

	console.log('data------------------>', data.data);
</script>

<!-- <HeroSection hero = {data.data[0]}/>
	<Features features = {data.data[1]}/>
	<MyFields myfields= {data.data[2]}/>
	
	
	 -->
     <Home/>
     <About/>
	 <Ads ads= {data.data[3]}/>
	 <Offers offers= {data.data[4]}/>
	 <Gallery gallery= {data.data[5]}/>
     <!-- <Services/> -->
     <ContactUs/>
     <!--  -->