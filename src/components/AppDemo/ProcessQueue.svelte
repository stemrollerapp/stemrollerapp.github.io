<script>
  import ProcessQueueCard from '$components/AppDemo/ProcessQueueCard.svelte'

  export let DEMO_statuses = null, DEMO_onOpenClicked = null
</script>

<div class="grow-0 shrink-0 overflow-x-auto overflow-y-hidden flex flex-row p-2 space-x-2 bg-slate-900 text-slate-100 border-solid border-t border-slate-700">
  {#each DEMO_statuses as status}
    <ProcessQueueCard {status} onClick={status === 'done' ? DEMO_onOpenClicked : null} />
  {/each}
</div>
