<script>
  import { onMount } from 'svelte'
  import asyncTimeout from '$utils/asyncTimeout.js'
  import ArrowUpIcon from '$icons/outline/ArrowUpIcon.svelte'
  import SearchIcon from '$icons/outline/SearchIcon.svelte'
  import LoadingSpinnerIcon from '$icons/animated/LoadingSpinnerIcon.svelte'
  import ResultCard from '$components/AppDemo/ResultCard.svelte'

  export let DEMO_videosHook = null
  export let DEMO_onOpenClicked = null
  export let DEMO_onShowBottomBar = null

  let searchQuery = '', videos = null, status = null

  async function animate() {
    await asyncTimeout(1000)

    const targetQuery = 'Search any song/artist'
    status = 'loading'
    while (searchQuery.length < targetQuery.length) {
      searchQuery += targetQuery[searchQuery.length]
      await asyncTimeout(50)
    }
    status = null

    videos = new Array(10).fill(null).map(() => {
      return {
        image: '/img/thumbnail.png',
        status: null,
      }
    })

    DEMO_onShowBottomBar()
  }

  async function onSplitClicked(video) {
    video.status = 'processing'
    videos = [...videos]
    DEMO_videosHook(videos)
    await asyncTimeout(2000)

    video.status = 'done'
    videos = [...videos]
    DEMO_videosHook(videos)
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      animate()
    }
  })
</script>

<div class="grow shrink overflow-hidden flex flex-col bg-slate-900 text-slate-100">
  <div class="relative overflow-hidden w-full flex-0 border-solid border-b border-slate-700 transition-all">
    <input class="w-full px-14 py-4 border-none outline-none bg-transparent font-bold" placeholder="Search" value={searchQuery} disabled={true}>
    <div class="absolute top-4 left-4 w-6 h-6 text-slate-500 pointer-events-none">
      <SearchIcon />
    </div>
    {#if status === 'loading'}
      <div class="absolute top-4 right-4 w-5 h-5 text-slate-100 animate-pulse pointer-events-none">
        <LoadingSpinnerIcon />
      </div>
    {/if}
  </div>

  <div class="relative grow shrink overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col p-6 space-y-6">
      {#if videos && status === null}
        {#each videos as video}
          <ResultCard {video} {onSplitClicked} {DEMO_onOpenClicked} />
        {/each}
      {:else if status === 'error'}
        <p class="m-4 text-slate-400 text-center">An error occurred. Please make sure you&apos;re connected to the internet and try again.</p>
      {:else if searchQuery.length === 0}
        <div class="w-6 h-6 self-center animate-bounce text-slate-500 pointer-events-none">
          <ArrowUpIcon />
        </div>
        <p class="m-4 text-slate-400 text-center">Type a song title in the search bar above.</p>
      {/if}
    </div>
  </div>
</div>

<style>
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-track {
    background-color: #0f172a;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #475569;
    border: 4px solid #0f172a;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #94a3b8;
  }

  * {
    user-select: none;
  }
</style>
