<script>
	import CharityList from "./CharityList.svelte";
	let title = "Charity";
	setTimeout(function(){
		title = "Donation"
	},2000);
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

<svelte:head>
	<link href="https://cdn.jsdelivr.net/gh/kimeiga/bahunya/dist/bahunya.min.css"
	rel="stylesheet" />
</svelte:head>

<div>
	<h1>{title}</h1>
	<CharityList/>
</div>
	
