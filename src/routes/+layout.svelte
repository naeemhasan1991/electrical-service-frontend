<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import "../app.css";
	import {onMount} from 'svelte';


	let y=0;
	let container;
	let sections; 
	let navLinks;

	onMount(() => {
		sections = document.querySelectorAll('section');
		navLinks = document.querySelectorAll('header nav a');

		container.addEventListener('scroll', function(e) {
			alert('The scroll event only triggers when there is content to scroll.')
		})
	});

	function toggleActiveLinks(x){
		console.log('toggle function called------------->',x, y);
		sections.forEach(element => {
			let offset = element.offsetTop - 200;
			let height = element.offsetHeight;
			let id = element.getAttribute('id');

			if( y>= offset && y < offset + height){
				navLinks.forEach(links => {
					links.classList.remove('active');
					document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
				});
			}
		});
	}

	
</script>
<svelte:window bind:scrollY={y}/>

<div class="app" bind:this={container} on:scroll={()=> toggleActiveLinks(0)}>
	<Header/>
	<main>
		<slot />
	</main>
	<Footer/>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>