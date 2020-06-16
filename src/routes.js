import Crane from './routes/crane.svelte';
import Cup from './routes/cup.svelte';
import Butterfly from './routes/butterfly.svelte';

let routes = {
    '/': Crane,
    '/butterfly': Butterfly,
    '/cup': Cup
}

export default routes;