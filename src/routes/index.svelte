<script>
  import asyncTimeout from '$utils/asyncTimeout.js'
  import LogoText from '$components/LogoText.svelte'
  import LogoSubText from '$components/LogoSubText.svelte'
  import DownloadButton from '$components/DownloadButton.svelte'
  import DownloadButtons from '$components/DownloadButtons.svelte'
  import DownloadPopup from '$components/DownloadPopup.svelte'
  import AppDemo from '$components/AppDemo/AppDemo.svelte'
  import HeartIcon from '$icons/outline/HeartIcon.svelte'

  let popupOs = null,
    popupOpaque = false,
    displayPopup = false

  async function openPopup() {
    await asyncTimeout(125)
    displayPopup = true
    await asyncTimeout(125)
    popupOpaque = true
  }

  async function hidePopup() {
    popupOpaque = false
    await asyncTimeout(125)
    displayPopup = false
    popupOs = null
  }

  $: {
    if (popupOs) {
      openPopup()
    }
  }
</script>

<svelte:head>
  <title>StemRoller - Make stems, instrumental, or acapella version of any song!</title>
  <meta
    property="og:title"
    content="StemRoller - Make stems, instrumental, or acapella version of any song!"
  />
  <meta
    name="description"
    property="og:description"
    content="StemRoller isolates instruments and vocals from any song using advanced AI and machine learning techniques. Make karaoke (instrumental), vocal, drum, and bass tracks from any recording in one click!"
  />
  <meta property="og:image" content="https://www.stemroller.com/img/og-image.png" />
</svelte:head>

<div class="w-full bg-cyan-400 font-bold p-2 text-center">
  StemRoller is now optimized for Apple Silicon!
</div>

<div class="relative w-full md:min-h-full bg-slate-900">
  <div class="absolute overflow-hidden w-full h-full">
    <img
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] max-w-[105%] blur-md"
      src="/img/hero-bg.png"
      alt=""
    />
  </div>

  <div
    class="relative w-full md:max-w-[1080px] xl:max-w-[1400px] md:min-h-screen m-auto space-y-4 sm:space-y-4 md:space-y-0 px-5 py-4 md:px-10 md:py-8 md:flex md:flex-row md:items-center md:justify-between md:space-x-10"
  >
    <div
      class="grow-0 shrink-0 flex flex-col md:h-full md:justify-center space-y-2 sm:space-y-3 md:space-y-4 xl:space-y-6"
    >
      <LogoText />
      <LogoSubText />
      <DownloadButtons onDownloaded={(os) => (popupOs = os)} />
    </div>

    <AppDemo />
  </div>
</div>

<div class="w-full bg-slate-300 text-slate-900 p-6 md:p-12">
  <div class="m-auto max-w-screen-lg">
    <p class="sm:text-3xl md:text-4xl leading-snug tracking-wide">
      StemRoller enables anyone to make karaoke, vocal, and stem tracks from their favorite songs.
      Simply type the name of a song into the search bar - StemRoller will find the song online and
      split it into four stems: vocals, drums, bass, and everything else. For your convenience, an
      instrumental will also be created, containing all non-vocal stems mixed down into one track.
    </p>
    <p class="sm:text-2xl md:text-2xl leading-snug tracking-wide mt-8">
      StemRoller is totally free and <a
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
        href="/source">open-source</a
      >, based on Facebook&apos;s state-of-the-art AI/machine learning research project
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
        href="https://www.github.com/facebookresearch/demucs">Demucs</a
      >.
    </p>
    <p class="sm:text-2xl md:text-2xl leading-snug tracking-wide mt-8">
      Ran into an issue or had a question? We&apos;re available on <a
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
        href="/chat">Discord</a
      > and would be happy to help!
    </p>
    <p class="sm:text-2xl md:text-2xl leading-snug tracking-wide">
      Enjoying the app? <a
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
        href="/donate">Donations</a
      > are always appreciated.
    </p>
  </div>
</div>

<div class="w-full bg-slate-700 text-slate-300 p-4 text-center">
  <p class="text-md">
    Credits: all of StemRoller&apos;s <a
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
      href="https://github.com/stemrollerapp/stemroller/blob/main/package.json#L24="
      >NPM dependencies</a
    >, plus
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
      href="https://www.github.com/facebookresearch/demucs">Demucs</a
    >,
    <a target="_blank" rel="noopener noreferrer" class="underline" href="https://www.heroicons.com"
      >Heroicons</a
    >,
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
      href="https://www.ektype.in/font-family/mukta-16.html">Mukta</a
    >, and
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
      href="https://marcelotduarte.github.io/cx_Freeze/">cx-Freeze</a
    >.
  </p>
</div>

{#if displayPopup}
  <DownloadPopup os={popupOs} opaque={popupOpaque} onClose={hidePopup} />
{/if}
