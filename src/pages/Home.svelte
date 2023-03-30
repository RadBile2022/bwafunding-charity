<script>
	import CharityList from "../components/CharityList.svelte";
	import Header from "../components/Header.svelte";
	import Promo from "../components/Promo.svelte";
	import Footer from "../components/Footer.svelte";
	// import {charities} from "../data/charities.js";
    import Welcome from "../components/Welcome.svelte";
	import {onMount} from "svelte";

	let title = "Charity";

	let charities = [];

	onMount(async function (){
		const res = await fetch('http://localhost:3000/charities');
		charities = await res.json();
	});
</script>
<Header/>
<Welcome/>
<CharityList {charities}/>

<Promo/>
	<Footer/>
