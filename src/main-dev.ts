import App from './App.svelte';
import { data } from '../public/build/dev.optimized';
import { select_language } from 'functions/i18n.function';

const target = document.getElementById('view');

const app = target
  ? new App({
      target,
      props: {
        data,
        i18n: await select_language('en-US')
      }
    })
  : null;

export default app;
