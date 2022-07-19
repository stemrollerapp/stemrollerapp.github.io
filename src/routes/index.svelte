<script>
  import LogoText from '$components/LogoText.svelte'
  import LogoSubText from '$components/LogoSubText.svelte'
  import DownloadButton from '$components/DownloadButton.svelte'
  import DownloadButtons from '$components/DownloadButtons.svelte'
  import AppDemo from '$components/AppDemo/AppDemo.svelte'
  import HeartIcon from '$icons/outline/HeartIcon.svelte'
</script>

<svelte:head>
  <title>StemRoller - Make stems, instrumental, or acapella version of any song!</title>
</svelte:head>

<div class="relative w-full md:min-h-full bg-slate-900">
  <div class="absolute overflow-hidden w-full h-full">
    <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] max-w-[105%] blur-md" src="/img/hero-bg.png" alt="" />
  </div>

  <div class="relative w-full md:max-w-[1080px] xl:max-w-[1400px] md:min-h-screen m-auto space-y-4 sm:space-y-4 md:space-y-0 px-5 py-4 md:px-10 md:py-8 md:flex md:flex-row md:items-center md:justify-between md:space-x-10">
    <div class="grow-0 shrink-0 flex flex-col md:h-full md:justify-center space-y-2 sm:space-y-3 md:space-y-4 xl:space-y-6">
      <LogoText />
      <LogoSubText />
      <DownloadButtons />
    </div>

    <AppDemo />
  </div>
</div>

<div class="w-full bg-slate-300 text-slate-900 px-12 py-12">
  <div class="m-auto space-y-8 max-w-screen-xl">
    <p class="sm:text-3xl md:text-4xl xl:text-5xl leading-snug tracking-wide"><span class="sm:text-4xl md:text-5xl xl:text-7xl">StemRoller</span> allows anyone to make vocal, karaoke or stem tracks from their favorite songs. Simply type the name of a song into the search bar - StemRoller will find the song online and split it into four tracks: vocals, drums, bass, and everything else.</p>
    <p class="sm:text-2xl md:text-2xl xl:text-4xl leading-snug tracking-wide">StemRoller is totally free and <a class="underline" href="/source">open-source</a>, based on Facebook&apos;s amazing <a class="underline" href="https://www.github.com/facebookresearch/demucs">Demucs</a> research project and <a class="underline" href="https://github.com/stemrollerapp/stemroller/blob/main/package.json#L24=">many other libraries</a>.</p>
    <p class="sm:text-2xl md:text-2xl xl:text-4xl leading-snug tracking-wide">Ran into an issue or had a question? We&apos;re available on <a class="underline" href="/chat">Discord</a> and would be happy to help!</p>
    <p class="sm:text-2xl md:text-2xl xl:text-4xl leading-snug tracking-wide">Enjoying the app? <a class="underline" href="/donate">Donations</a> are always appreciated</p>
  </div>
</div>
