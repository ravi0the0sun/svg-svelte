<script>
	import {onMount} from 'svelte';
	import { fade, draw } from 'svelte/transition';
	import { cup } from '../svg/cup.js'

	let duration = 3000;
	let view = false;
	function clickHandler() {
		view? view = false: view = true;
		setTimeout(() => {
		document.querySelectorAll('path').forEach(path => {
				path.style.fill = 'black';
		})
	}, 2000);
	}
</script>

<button on:click={clickHandler}>click me</button>
{#if view}
<div class="crane">
	<svg
	sodipodi:docname="vector-butterfly.svg"
	viewBox="0 0 460 460">  
	<g out:fade="{{duration: 200}}">
		<path in:draw="{{duration}}"
		d={cup}/>
	</g>
	</svg>
</div>
{/if}