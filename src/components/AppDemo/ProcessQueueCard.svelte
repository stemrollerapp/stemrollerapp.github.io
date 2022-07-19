<script>
  import { onDestroy } from 'svelte'
  import Button from '$components/AppDemo/Button.svelte'
  import LoadingSpinnerIcon from '$icons/animated/LoadingSpinnerIcon.svelte'
  import CollectionIcon from '$icons/outline/CollectionIcon.svelte'
  import RefreshIcon from '$icons/outline/RefreshIcon.svelte'
  import ExclamationCircleIcon from '$icons/outline/ExclamationCircleIcon.svelte'
  import ExternalLinkIcon from '$icons/outline/ExternalLinkIcon.svelte'

  export let status = null, onClick = null
  let hovered = false
</script>

{#if status !== null}
  <button class="overflow-hidden grow-0 shrink-0 max-w-xs flex flex-row px-4 p-2 space-x-4 items-center rounded-md text-left bg-slate-800 drop-shadow-md" disabled={!onClick} on:click={onClick || undefined} on:mouseenter={() => hovered = true} on:mouseleave={() => hovered = false}>
    {#if status === 'processing'}
      <div class="grow-0 shrink-0 w-5 h-5 text-slate-100 animate-pulse">
        <LoadingSpinnerIcon />
      </div>
    {:else if status === 'queued'}
      <div class="grow-0 shrink-0 w-6 h-6 text-slate-500">
        <CollectionIcon />
      </div>
    {:else if status === 'error'}
      <div class="grow-0 shrink-0 w-6 h-6 text-slate-500">
        {#if hovered}
          <RefreshIcon />
        {:else}
          <ExclamationCircleIcon />
        {/if}
      </div>
    {:else if status === 'done'}
      <div class="grow-0 shrink-0 w-6 h-6 text-slate-500">
        <ExternalLinkIcon />
      </div>
    {/if}
    <div class="overflow-hidden flex-1 flex flex-col justify-center space-y-1">
      <div class="w-32 h-2 rounded-full bg-slate-500"></div>
      <div class="whitespace-nowrap overflow-hidden text-ellipsis text-slate-400">
        {#if status === 'processing'}
          Processing
        {:else if status === 'queued'}
          Queued
        {:else if status === 'error'}
          {#if hovered}
            Retry
          {:else}
            Failed
          {/if}
        {:else if status === 'done'}
          Open
        {/if}
      </div>
    </div>
  </button>
{/if}
