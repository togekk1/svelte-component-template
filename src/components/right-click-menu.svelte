<script lang="ts">
  import { createPopper } from '@popperjs/core/lib/popper-lite';
  import type { VirtualElement, Instance } from '@popperjs/core/lib/popper-lite';

  import { onMount } from 'svelte';
  import type { right_click_menu_type } from '../interfaces/cols.interface';
  import type { i18n_type } from 'interfaces/i18n.interface';

  // core components
  export let menu: right_click_menu_type[];
  export let i18n: i18n_type | undefined;
  export let x: number;
  export let y: number;

  let popoverDropdownRef: HTMLElement;
  let arrow: HTMLElement;
  let instance: Instance;

  function generate_get_bounding_client_rect(x = 0, y = 0) {
    return () => ({
      width: 0,
      height: 0,
      top: y,
      right: x,
      bottom: y,
      left: x
    });
  }

  const virtual_element = {
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        top: y,
        right: x,
        bottom: y,
        left: x
      };
    }
  } as VirtualElement;

  const render = () => {
    virtual_element.getBoundingClientRect = generate_get_bounding_client_rect(x, y) as () => DOMRect;
    instance?.update();
  };

  onMount(() => {
    setTimeout(() => {
      instance = createPopper(virtual_element, popoverDropdownRef, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'arrow',
            enabled: false,
            fn: () => {},
            phase: 'main',
            options: {
              element: arrow
            }
          }
        ]
      });
    }, 0);
    render();
  });

  $: x + y, render();
</script>

<div
  bind:this={popoverDropdownRef}
  class="bg-white text-base z-50 float-left !mt-4 list-none text-left rounded drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] min-w-48 flex justify-center !fixed"
>
  <div id="arrow" class="mt-[-8px] border-x-[6px] border-x-transparent border-b-[8px] border-b-white absolute" bind:this={arrow} />
  <div class="relative z-50 divide-y divide-solid divide-[#c8c8c8]">
    {#each menu as item}
      <div
        on:click={(e) => {
          e.preventDefault();
          item.onclick(e);
        }}
        class="cursor-pointer text-sm h-12 flex items-center px-4 font-normal w-full whitespace-nowrap bg-transparent text-[#323233]"
      >
        {i18n?.value[item.caption]}
      </div>
    {/each}
  </div>
</div>
