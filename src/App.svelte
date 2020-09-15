<script>
	import {onMount} from 'svelte';
	import { fade, draw } from 'svelte/transition';
	import { butterfly } from './svg/butterfly';
	import { crane } from './svg/crane';
	import { cup } from './svg/cup'

	let duration = 3000;
	let data;
	let view = false;
	function clickHandler() {
		view? view = false: view = true;
		let random = Math.floor(Math.random() * Math.floor(3));
		if (random === 0) {
			data = crane;
		} else if (random === 1) {
			data = butterfly;
		} else {
			data = cup;
		};
		setTimeout(() => {
		document.querySelectorAll('path').forEach(path => {
				path.style.fill = 'black';
		})
	}, 1000);
	}
</script>

<body>
<button on:click={clickHandler}>click me</button>
	<nav>
		<ul>
			<li><a href="#/">Crane</a></li>
			<li><a href="#/cup">Cup</a></li>
			<li><a href="#/butterfly">Butterfly</a></li>
		</ul>
	</nav>
	{#if view}
<div class="crane">
	<svg
	sodipodi:docname="vector-butterfly.svg"
	viewBox="0 0 300 300 ">  
	<g out:fade="{{duration: 200}}">
		<path in:draw="{{duration}}"
		d={data}/>
	</g>
	</svg>
</div>
{/if}
</body>
