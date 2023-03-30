# Catatan :

## 1.0 Persiapan
1. Instalasi alat : Node.js, vscode, postman, dsb;
2. Generate [npm create svelte@latest myapp]() konifurasi semua sampai running;
3. Struktur Folder Project
4. Version Control System dengan [Git dan Github](); 
5. Countinous Deployment [Netlify] (https://www.netlify.com/);

## 2.1 Membuat Komponen Svelte
1. Membuat `satu file` svelte;

## 2.2 Membuat Komponen Bersarang
1. Terdapat `if/else` `each`

## 2.3 Menulis CSS di svelte

## 2.4 Komunikasi antar Komponen [export let]
1. App.svelte disebut [statefull]() atau punya state yaitu : title, dan CharityList;
2. CharityList tidak punya local state atau [stateless]();
3. Tugas stateless hanya menampilkan data yang diberikan induknya [App.svelte]();
4. Best practice memisahkan komponenen stateful [terdapat bisnis proses]() stateless [hanya menampilkan]();
5. Stateless [packages-components]() Statefull [packages-page]() sementara di Home.svelte; 
6. [App.svelte]() tetap menjadi end-point dari main.js;

## 2.5 Bahasa Template Svelte
1. HTML belum bisa membuat perulangan [each]() maupun conditional [if/else]();

## 2.6 Menampilkan 'Dummy Data'
1. Data yang dibutuhkan : `id`, `title`, `category`, `thumbnail`, `pedged`,`target`, `date_end`, `profile_photo`, `profile_name`, `no_pledges`;
2. Tidak ada relasional table;

## 2.7 HTML Template ke Komponen Svelte
1. Membuat Components : `CharityList`,`Header`,`Footer`,`Welcome`,`Promo` dari Mock Up BWA;
2. Konfigurasi dan menyesuaikan `Mockup Data` menjadi `Dummy Data`;
3. Tambahkan function`calculateFunded(pledged,target)`, `formatCurrency(nominal)`, `calculateDaysRemaining(end_date)`;

## 2.8 `Slot` memudahkan memasangkan komponen lain, `children-componen` istilah pada react,  untuk menangani iterasi modal `charity`

## 2.9 `Event` di Svelte untuk mentriger `Modal`
1. Hilangkan atribut `aria-hidden=true`, ubah dengan `{#if isModalOpen === true}`;
2. Buat event function `handleButton` dan `handleCloseModal`;


## 3.1 Membangun Halaman About dan Contact
1. Dalam membangun `statefull` mendapat bantuan `stateless` dari `Header` dan `Footer`;

## 3.2 Menggunakar Routing Library page.js
1. $ npm install page
2. import router from 'page';
3. let page;
4. router('/',()=>(page= Home));
5. router.start();
6. <svelte:component this={page}/>
7. package.json ubah : "start": "sirv public --single"

## 3.3 Membangun Halaman Detail Donation
1.  router('/donation/:id',(ctx, next)=> {
		params = ctx.params;
		next();
	},()=>(page = Donation));
	router.start();

## 3.4 Membangun Halaman Not Found
1. Buat Halaman Not Found terlebih dahulu;
2. router('/*',()=>(page=NotFound));
3. router.start();


## 4.1 Siklus Hidup Komponen Svelte [LifeCycle Svelte]
1. `onMount` akan dieksekusi apabila komponen bisa dirender;
2. `onDestroy` akan dieksekusi apabila komponen dihancurkan;
3. `beforeUpdate` akan dieksekusi sebelum DOM di update;
4. `afterUpdate`akan dieksekusi setelah DOM di update;

## 4.2 Buat Fake Rest Api dengan `json-server` dan `MirageJS`
1. `mkdir fake_server`, `cd fake_server`;
2. `npm install json-server`;
3. `code db.json` isi data dummy dari charities.js;
4. Menjalankan server `npx json-server --watch db.json`;
5. ```
   onMount(async function (){
     const res = await fetch('http://localhost:3000/charities');
     charities = await res.json();
   });
   ```
6. ```
    export let params;
    let charity;
    async function getCharity(id){
        const res = await fetch(`http://localhost:3000/charities/${id}`);
        return res.json();
    }

    onMount(async function (){
        charity = await getCharity(params.id);
        console.log(charity)
    });```


### MirageJS tidak membutuhkan localhost
1. `npm install -save-dev miragejs`;
2. Pastikan di `main.js` seperti berikut;
```
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
			"thumbnail": "https://www.themoviedb.org/t/p/w1280/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
			"pledged":99000,
			"target": 470000,
			"end_date" : 1613581200000,
			"profile_photo" : "https://img.freepik.com/free-vector/user-follower-icons-social-media-notification-icon-speech-bubbles-vector-illustration_56104-847.jpg",
			"profile_name": "Professor Arnold",
			"no_pledges": 0
		},
		{
			"id": 3 ,
			"title": "Peduli Lindungi",
			"category": "Money",
			"thumbnail": "https://www.themoviedb.org/t/p/w1280/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
			"pledged":47000,
			"target": 5000,
			"end_date" : 1613581200000,
			"profile_photo" : "https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg",
			"profile_name": "Doktorad",
			"no_pledges": 0
		},
	]);

	const app = new App({
		target: document.querySelector('#root'),
	});

	export default app;
```

# This repo is no longer maintained. Consider using `npm init vite` and selecting the `svelte` option or — if you want a full-fledged app framework — use [SvelteKit](https://kit.svelte.dev), the official application framework for Svelte.

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
