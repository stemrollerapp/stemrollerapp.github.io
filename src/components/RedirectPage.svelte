<script>
  import { onMount } from 'svelte'

  export let title = null, target = null

  $: {
    if (typeof window !== 'undefined' && window.location !== target) {
      window.location = target
    }
  }
</script>

<svelte:head>
  <title>{title} - Redirecting... | StemRoller</title>
  <meta property="og:title" content={`${title} - Redirecting... | StemRoller`} />
  <meta name="description" property="og:description" content={`Redirecting to StemRoller's ${title} page...`} />
  <meta property="og:image" content="https://www.stemroller.com/img/og-image.png" />
</svelte:head>

<div class="relative w-full min-h-full bg-slate-900 text-slate-100 p-12 text-center">
  <p>Please <a class="underline text-cyan-300" href={target}>click here</a> if you are not redirected shortly.</p>
</div>
