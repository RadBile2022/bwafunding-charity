import { createServer} from "miragejs";
import App from './App.svelte';

const server = createServer();
server.get('/api/charities',
	[
		{
			"id": 1,
			"title": "First Charity Project",
			"category": "Money",
			"thumbnail": "https://www.themoviedb.org/t/p/w1280/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
			"pledged":99000,
			"target": 100000,
			"end_date" : 1613581200000,
			"profile_photo" : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
			"profile_name": "Viroide Bueno",
			"no_pledges": 0
		},
		{
			"id": 2,
			"title": "Donasi Dakwah Yufid",
			"category": "Money",
			"thumbnail": "https://www.themoviedb.org/t/p/w1280/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
			"pledged":47000,
			"target": 100000,
			"end_date" : 1613581200000,
			"profile_photo" : "https://img.freepik.com/free-vector/user-follower-icons-social-media-notification-icon-speech-bubbles-vector-illustration_56104-847.jpg",
			"profile_name": "Professor Arnold",
			"no_pledges": 0
		},
		{
			"id": 3,
			"title": "Peduli Lindungi",
			"category": "Money",
			"thumbnail": "https://www.themoviedb.org/t/p/w1280/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
			"pledged":5000,
			"target": 100000,
			"end_date" : 1613581200000,
			"profile_photo" : "https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg",
			"profile_name": "Doktor Radar",
			"no_pledges": 0
		}
	]
);

const app = new App({
	target: document.querySelector('#root'),
});

export default app;
