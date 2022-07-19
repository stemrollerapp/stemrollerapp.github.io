<script>
  import { onMount } from 'svelte'
  import { downloadUrls, defaultDownloadOs } from '$utils/downloadLinks.js'
  import DownloadButton from '$components/DownloadButton.svelte'
  import WindowsIcon from '$icons/os/WindowsIcon.svelte'
  import MacOsIcon from '$icons/os/MacOsIcon.svelte'
  import HeartIcon from '$icons/outline/HeartIcon.svelte'

  let dlHover = null, dlShow = null

  $: {
    dlShow = dlHover || $defaultDownloadOs
  }
</script>

<div class="flex flex-col space-y-1">
  <div class="flex flex-col md:flex-row md:space-x-1 space-y-1 md:space-y-0">
    {#if $defaultDownloadOs === 'mac'}
      <DownloadButton additionalClasses="bg-slate-100 hover:bg-slate-300 text-slate-900" Icon={MacOsIcon} text="Download" expanded={dlShow === 'mac'} onMouseEnter={() => dlHover = 'mac'} onMouseLeave={() => dlHover = null} href={downloadUrls.mac} />
      <DownloadButton additionalClasses="bg-cyan-500 hover:bg-cyan-600 text-slate-900" Icon={WindowsIcon} text="Download" expanded={dlShow === 'win'} onMouseEnter={() => dlHover = 'win'} onMouseLeave={() => dlHover = null} href={downloadUrls.win} />
    {:else}
      <DownloadButton additionalClasses="bg-cyan-500 hover:bg-cyan-600 text-slate-900" Icon={WindowsIcon} text="Download" expanded={dlShow === 'win'} onMouseEnter={() => dlHover = 'win'} onMouseLeave={() => dlHover = null} href={downloadUrls.win} />
      <DownloadButton additionalClasses="bg-slate-100 hover:bg-slate-300 text-slate-900" Icon={MacOsIcon} text="Download" expanded={dlShow === 'mac'} onMouseEnter={() => dlHover = 'mac'} onMouseLeave={() => dlHover = null} href={downloadUrls.mac} />
    {/if}
  </div>
  <DownloadButton additionalClasses="bg-yellow-500 hover:bg-yellow-600 text-slate-900" Icon={HeartIcon} text="Donate" expanded={'always'} href="/donate" download={false} />
</div>
