<script>
    import CharityList from "../components/CharityList.svelte";

	let title = "Charity";
	let charities = ['Charity 1', 'Charity 2', 'Charity 3'];
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
	
