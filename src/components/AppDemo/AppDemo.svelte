<script>
  import { downloadUrls, defaultDownloadOs } from '$utils/downloadLinks.js'
  import asyncTimeout from '$utils/asyncTimeout.js'
  import SearchAndResults from '$components/AppDemo/SearchAndResults.svelte'
  import ProcessQueue from '$components/AppDemo/ProcessQueue.svelte'
  import BottomBar from '$components/AppDemo/BottomBar.svelte'

  let displayOverlay = false, overlayOpaque = false
  let displayBottomBar = false, bottomBarOpaque = false
  let displayWidth = 0.0, displayHeight = 0.0
  let DEMO_statuses = []

  function DEMO_videosHook(videos) {
    const newStatuses = []
    for (const video of videos) {
      if (video.status !== null) {
        newStatuses.push(video.status)
      }
    }
    DEMO_statuses = newStatuses
  }

  async function DEMO_onShowBottomBar() {
    bottomBarOpaque = false
    displayBottomBar = true
    await asyncTimeout(125)
    bottomBarOpaque = true
  }

  async function DEMO_onOpenClicked() {
    overlayOpaque = false
    displayOverlay = true
    await asyncTimeout(125)
    overlayOpaque = true
  }

  let downloadUrl = null
  $: {
    if ($defaultDownloadOs) {
      downloadUrl = downloadUrls[$defaultDownloadOs]
    } else {
      downloadUrl = null
    }
  }

  let scale = 1.0
  $: {
    scale = Math.min(displayWidth / 645.0, 1.0)
  }
</script>

<div class="overflow-hidden w-full" bind:clientWidth={displayWidth} bind:clientHeight={displayHeight}>
  <div style={`margin: auto; padding: 1px; width: ${Math.ceil(640 * scale) + 2}px; height: ${Math.ceil(480 * scale) + 2}px;`} class="relative rounded-md overflow-hidden bg-gradient-to-br from-cyan-300 via-pink-500 to-fuchsia-700">
    <div style={`position: relative; width: 640px; height: 480px; transform: scale(${scale}); transform-origin: top left;`} class="bg-slate-900 rounded-md overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full rounded-md overflow-hidden flex flex-col">
        <SearchAndResults {DEMO_videosHook} {DEMO_onShowBottomBar} {DEMO_onOpenClicked} />

        {#if DEMO_statuses.length > 0}
          <ProcessQueue {DEMO_statuses} {DEMO_onOpenClicked} />
        {/if}

        {#if displayBottomBar}
          <BottomBar opaque={bottomBarOpaque} />
        {/if}
      </div>

      {#if displayOverlay}
        <div class={`absolute top-0 left-0 w-full h-full rounded-md overflow-hidden flex flex-col space-y-8 px-12 py-6 items-center justify-center bg-slate-900 text-slate-100 ${overlayOpaque ? 'opacity-100' : 'opacity-0'} transition-all`}>
          <div class="font-bold text-4xl text-center">Easily split dozens of songs.<br />Just like that.</div>
          <div class="text-5xl">
            {#if downloadUrl}
              <span class="p-[1px] bg-gradient-to-br from-pink-300 via-fuchsia-500 to-rose-900"><span class="bg-slate-900 hover:bg-transparent transition-all"><a class="px-4 font-bold text-transparent hover:text-slate-900 bg-clip-text bg-gradient-to-br from-pink-300 via-fuchsia-500 to-rose-900 transition-all" download={true} href={downloadUrl}>Download</a></span></span> StemRoller.
            {:else}
              Download StemRoller.
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
