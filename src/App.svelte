<script>
	import Router from 'svelte-spa-router';
	import { onMount } from 'svelte';

	import routes from './routes'

	
	
</script>

<body>
	<nav>
		<ul>
			<li><a href="#/">Crane</a></li>
			<li><a href="#/cup">Cup</a></li>
			<li><a href="#/butterfly">Butterfly</a></li>
		</ul>
	</nav>
	<Router {routes}/>
	
</body>