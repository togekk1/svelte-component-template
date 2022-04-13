import App from './App.svelte';

const target = document.getElementById('view');
const app = target
  ? new App({
      target
    })
  : null;

export default app;
