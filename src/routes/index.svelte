<script>
  import LogoText from '$components/LogoText.svelte'
  import LogoSubText from '$components/LogoSubText.svelte'
  import DownloadButtons from '$components/DownloadButtons.svelte'
  import AppDemo from '$components/AppDemo/AppDemo.svelte'
</script>

<svelte:head>
  <title>StemRoller - Make stems, instrumental, or acapella version of any song!</title>
</svelte:head>

<div class="relative w-full min-h-full bg-slate-900">
  <div class="absolute overflow-hidden w-full h-full">
    <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] max-w-[105%] blur-md" src="/img/hero-bg.png" alt="" />
  </div>

  <div class="relative w-full md:max-w-[1080px] xl:max-w-[1400px] min-h-screen m-auto space-y-2 sm:space-y-4 md:space-y-0 px-5 py-4 md:px-10 md:py-8 md:flex md:flex-row md:items-center md:justify-between md:space-x-10">
    <div class="grow-0 shrink-0 flex flex-col md:h-full md:justify-center space-y-1 sm:space-y-3 md:space-y-4 xl:space-y-6">
      <LogoText />
      <LogoSubText />
      <DownloadButtons />
    </div>

    <AppDemo />
  </div>
</div>
