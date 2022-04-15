<script lang="ts">
  import type { checkbox_arr_type } from 'interfaces/data.interface';

  import { createEventDispatcher } from 'svelte';

  export let index: number = -1;
  export let checkbox_arr: checkbox_arr_type;

  const dispatch = createEventDispatcher();

  const change = (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
    dispatch('change', { value: (event.target as any)?.checked });
  };
</script>

<input name={index < 0 ? 'all' : index?.toString()} type="checkbox" on:change={change} checked={!!checkbox_arr.value?.[index]} />
