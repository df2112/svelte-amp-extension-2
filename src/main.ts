import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'content editor extension'
	}
});

export default app;