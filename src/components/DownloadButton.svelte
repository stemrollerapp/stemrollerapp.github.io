<script>
  export let href = null, expanded = false, onMouseEnter = null, onMouseLeave = null, Icon = null, additionalClasses = null
</script>

<a download {href} class={`overflow-hidden px-2 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 xl:px-7 xl:py-4 space-x-1 sm:space-x-2 md:space-x-3 xl:space-x-4 flex flex-row items-center justify-center md:justify-start sm:text-xl md:text-2xl xl:text-3xl font-bold ${additionalClasses} drop-shadow-xl transition-all ${expanded ? 'md:w-44 xl:w-56' : 'md:w-16 xl:w-20'}`} on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
  <div class="w-5 h-5 sm:w-6 sm:h-6 grow-0 shrink-0">
    <svelte:component this={Icon} />
  </div>
  <span class={`grow-0 shrink-0 whitespace-nowrap transition-all ${expanded ? 'md:opacity-100' : 'md:opacity-0'}`}>Download</span>
</a>
