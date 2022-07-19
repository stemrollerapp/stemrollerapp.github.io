<script>
  import { onMount } from 'svelte'
  import { downloadUrls, defaultDownloadOs } from '$utils/downloadLinks.js'
  import DownloadButton from '$components/DownloadButton.svelte'
  import WindowsIcon from '$icons/os/WindowsIcon.svelte'
  import MacOsIcon from '$icons/os/MacOsIcon.svelte'

  let dlHover = null, dlShow = null

  $: {
    dlShow = dlHover || $defaultDownloadOs
  }
</script>

<div class="flex flex-col md:flex-row md:space-x-1 space-y-1 md:space-y-0">
  {#if $defaultDownloadOs === 'mac'}
    <DownloadButton additionalClasses="bg-slate-100 hover:bg-slate-300 text-slate-900" Icon={MacOsIcon} expanded={dlShow === 'mac'} onMouseEnter={() => dlHover = 'mac'} onMouseLeave={() => dlHover = null} href={downloadUrls.mac} />
    <DownloadButton additionalClasses="bg-cyan-500 hover:bg-cyan-600 text-slate-900" Icon={WindowsIcon} expanded={dlShow === 'win'} onMouseEnter={() => dlHover = 'win'} onMouseLeave={() => dlHover = null} href={downloadUrls.win} />
  {:else}
    <DownloadButton additionalClasses="bg-cyan-500 hover:bg-cyan-600 text-slate-900" Icon={WindowsIcon} expanded={dlShow === 'win'} onMouseEnter={() => dlHover = 'win'} onMouseLeave={() => dlHover = null} href={downloadUrls.win} />
    <DownloadButton additionalClasses="bg-slate-100 hover:bg-slate-300 text-slate-900" Icon={MacOsIcon} expanded={dlShow === 'mac'} onMouseEnter={() => dlHover = 'mac'} onMouseLeave={() => dlHover = null} href={downloadUrls.mac} />
  {/if}
</div>
