<script lang="ts">
  import { select_language } from 'functions/i18n.function';
  import type { i18n_type } from 'interfaces/i18n.interface';

  import { onMount } from 'svelte';

  let i18n: i18n_type | undefined;

  onMount(async () => {
    i18n = await select_language('en-US');
    console.log(i18n.value.HELLO_WORLD);
    i18n = await select_language('zh-TW');
    console.log(i18n.value.HELLO_WORLD);
  });
</script>

<div>Hello, World!</div>
