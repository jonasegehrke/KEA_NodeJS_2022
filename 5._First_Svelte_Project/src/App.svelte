<script>
	import HelloWorld from './components/HelloWorld.svelte'
	import RickRoll from './components/RickRoll.svelte'
	import Styling from './components/Styling.svelte'
	import Nested01 from './components/Nested01.svelte'
	import HTMLTags from './components/HTMLTags.svelte'
	import ReactiveAssignments from './components/ReactiveAssignments.svelte';
	import ReactiveDeclarations from './components/ReactiveDeclarations.svelte';
	import ReactiveStatements from './components/ReactiveStatements.svelte';
	import DeclaringProps from './components/DeclaringProps.svelte';
	import SpreadProps from './components/SpreadProps.svelte';
	import IfBlocks from './components/IfBlocks.svelte';
	import ElseBlocks from './components/ElseBlocks.svelte';
	import IfElseBlocks from './components/IfElseBlocks.svelte';
	import EachBlocks from './components/EachBlocks.svelte';
	import KeyedEachBlocks from './components/KeyedEachBlocks.svelte';
	import DomEvents from './components/DomEvents.svelte';
	import InlineHandlers from './components/InlineHandlers.svelte';
	import EventModifiers from './components/EventModifiers.svelte';
	import ComponentEvents from './components/ComponentEvents.svelte';
	import EventForwarding from './components/EventForwarding.svelte';

	const person = {
		name: 'Jonas',
		age: 23,
		org: 'KEA',
	};
</script>

<main>
	<HelloWorld/>
	<hr>
	<RickRoll/>
	<hr>
	<Styling/>
	<hr>
	<Nested01/>
	<hr>
	<HTMLTags/>
	<hr>
	<ReactiveAssignments/>
	<hr>
	<ReactiveDeclarations/>
	<hr>
	<ReactiveStatements/>
	<hr>
	<DeclaringProps answer={69}/>
	<DeclaringProps/>
	<hr>
	<SpreadProps {...person}/>
	<hr>
	<IfBlocks/>
	<hr>
	<ElseBlocks/>
	<hr>
	<IfElseBlocks/>
	<hr>
	<EachBlocks/>
	<hr>
	<KeyedEachBlocks/>
	<hr>
	<DomEvents/>
	<hr>
	<InlineHandlers/>
	<hr>
	<EventModifiers/>
	<hr>
	<ComponentEvents/>
	<hr>
	<EventForwarding/>



</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>