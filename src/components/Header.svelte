<script>
	import { page } from '$app/stores';

	let y;

	$: console.log('page param------------>', $page);

	let showHamburgerMenu = false;
	let containerWidth;

	function toggleHamburgerMenu(){
		console.log('btn clicked');
		showHamburgerMenu =!showHamburgerMenu;
	}
</script>

<svelte:window bind:innerWidth={containerWidth} bind:scrollY={y} />

<header style={y > 100 ? "background-color: white; box-shadow: 0px 1px 10px #999;" : "background: transparent"}>
	<a href="/" class="logo">Salauddin.</a>
	<nav class="navbar">
		<!-- <a href="/" class="active">Home</a>
		<a href="#about">About</a>
		<a href="#services">Services</a>
		<a href="#portfolio">Portfoilo</a>
		<a href="#contact">Contact</a> -->
		<ul class="{containerWidth < 768 && showHamburgerMenu == false ? "hidden" : showHamburgerMenu ? "fixed top-0 left-0 w-screen h-screen py-10 px-8 flex flex-colS" : "relative flex"}">
			<li aria-current={$page.url.hash === '#home' ? 'page' : undefined}>
				<a href="#home">Home</a>
			</li>
			<li aria-current={$page.url.hash === '#about' ? 'page' : undefined}>
				<a href="#about">About</a> 
			</li>
			<li aria-current={$page.url.hash === '#services' ? 'page' : undefined}>
				<a href="#services">Services</a>
			</li>
			<!-- <li aria-current={$page.url.hash === '#portfolio' ? 'page' : undefined}>
				<a href="#portfolio">Portfoilo</a>
			</li> -->
			<li aria-current={$page.url.hash === '#gallery' ? 'page' : undefined}>
				<a href="#gallery">Gallery</a>
			</li>
			<li aria-current={$page.url.hash === '#contact' ? 'page' : undefined}>
				<a href="#contact">Contact</a>
			</li>
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
		<div class="block lg:hidden">
			<button on:click={toggleHamburgerMenu}>Menu</button>
		</div>
	</nav>
</header>

<style lang="postcss">
	header {
		@apply fixed top-0 left-0 flex items-center justify-between z-50 w-full py-[2rem] px-[7%];
	}

	.logo{
		@apply text-3xl cursor-pointer font-bold text-primary;
	}

	/* .navbar a{
		@apply relative text-base font-semibold text-black mr-4;
	}

	.navbar a:active::before{
		@apply w-full absolute left-0 -bottom-1 h-0.5 bg-primary;
		content: '';
	} */

	.navbar {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}


	ul {
		position: relative;
		padding: 0;
		margin: 0;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: white;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
		@apply border-b-2 border-black duration-500 bg-primary px-4;
	}

	li[aria-current='page'] a {
		@apply border-b-2 border-black;
	}

	.navbar>ul>li>a {
		@apply relative text-sm font-semibold text-black mr-4 transition ease-in-out delay-150;
	}

	a:hover {
		@apply border-b-2 !border-black duration-500;
	}
</style>