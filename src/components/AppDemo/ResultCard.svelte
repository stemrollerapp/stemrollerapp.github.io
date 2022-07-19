<script>
  import Button from '$components/AppDemo/Button.svelte'
  import AdjustmentsIcon from '$icons/solid/AdjustmentsIcon.svelte'
  import CollectionIcon from '$icons/solid/CollectionIcon.svelte'
  import RefreshIcon from '$icons/solid/RefreshIcon.svelte'
  import ExternalLinkIcon from '$icons/solid/ExternalLinkIcon.svelte'
  import LoadingSpinnerIcon from '$icons/animated/LoadingSpinnerIcon.svelte'

  export let video = null, onSplitClicked = null, DEMO_onOpenClicked = null
</script>

<div class="overflow-hidden grow-0 shrink-0 flex flex-col p-4 space-y-2 rounded-md bg-slate-800 drop-shadow-lg">
  <div class="flex space-x-4 items-center">
    <div class="relative grow-0 shrink-0 rounded-md">
      <img class="h-16" src={video.image} alt="">
    </div>
    <div class="overflow-hidden flex-1 flex flex-col justify-center space-y-2">
      <div style={`max-width: ${120 + Math.round(Math.random() * 80)}px;`} class="w-full h-2 rounded-full bg-slate-500 drop-shadow-md" />
      <div style={`max-width: ${80 + Math.round(Math.random() * 40)}px;`} class="w-full h-2 rounded-full bg-slate-600 drop-shadow-md" />
    </div>
    {#if video.status === 'processing'}
      <Button Icon={LoadingSpinnerIcon} text="Processing" disabled={true} />
    {:else if video.status === 'queued'}
      <Button Icon={CollectionIcon} text="Queued" disabled={true} />
    {:else if video.status === 'error'}
      <Button Icon={RefreshIcon} text="Retry" />
    {:else if video.status === 'done'}
      <Button Icon={ExternalLinkIcon} text="Open" onClick={() => DEMO_onOpenClicked(video)} />
    {:else}
      <Button Icon={AdjustmentsIcon} text="Split" onClick={() => onSplitClicked(video)} />
    {/if}
  </div>
</div>
