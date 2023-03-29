<script>
    import CharityList from "../components/CharityList.svelte";
    import {charities} from "../data/charities.js";

	let title = "Charity";
</script>

<style>
	h1 {
		font-size: 3em;
		color :#e2071c;
	}

	:global(div) {
		border : 0.5em solid #1a1a1a;
		padding: 1em;
	}
</style>

<div>
	<h1>{title}</h1>
	<CharityList {charities}/>
</div>
	
