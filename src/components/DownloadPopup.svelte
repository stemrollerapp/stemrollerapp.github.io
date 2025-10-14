<script>
  import { downloadUrls, defaultDownloadOs } from '$utils/downloadLinks.js'
  import LightBulbIcon from '$icons/outline/LightBulbIcon.svelte'
  import XIcon from '$icons/outline/XIcon.svelte'

  export let opaque = false,
    os = null,
    onClose = null

  let filename = null
  $: {
    if (os) {
      const parts = downloadUrls[os].split('/')
      filename = parts[parts.length - 1]
    }
  }
</script>

<div
  class={`w-full h-full px-4 py-2 fixed top-0 l-0 bg-black/50 flex items-center justify-center ${
    opaque ? 'opacity-100' : 'opacity-0'
  } transition-all`}
  on:click={() => onClose()}
>
  <div
    class="w-full max-h-full max-w-lg px-8 py-6 space-y-4 bg-slate-900 text-slate-100 rounded-xl drop-shadow-xl overflow-x-hidden overflow-y-auto"
    on:click={(event) => event.stopPropagation()}
  >
    <div class="flex flex-row space-x-2">
      <div class="w-6 h-6 grow-0 shrink-0">
        <LightBulbIcon />
      </div>

      <div class="font-bold text-xl grow-0 shrink-0">Tip!</div>

      <div class="w-full grow-1 shrink-1" />

      <button class="w-6 h-6 grow-0 shrink-0" on:click={() => onClose()}>
        <XIcon />
      </button>
    </div>

    {#if os === 'win'}
      <ol class="leading-relaxed space-y-3 list-decimal ml-4">
        <li>
          Once your download is finished, double-click <code
            class="bg-slate-700 px-2 py-1 rounded-md">{filename}</code
          >.
        </li>
        <li>
          If Windows displays a dialog box indicating that the app was blocked by SmartScreen, click <span
            class="font-bold">More info</span
          >, then click <span class="font-bold">Run anyway</span>.
        </li>
        <li>
          StemRoller will extract itself to the directory you choose. Once this is done, you may
          delete the original <code class="bg-slate-700 px-2 py-1 rounded-md">{filename}</code> you downloaded.
        </li>
        <li>
          Open the extracted directory and double-click <code
            class="bg-slate-700 px-2 py-1 rounded-md">StemRoller.exe</code
          > to run the app.
        </li>
      </ol>
    {:else if os === 'mac'}
      <ol class="leading-relaxed space-y-3 list-decimal ml-4">
        <li>
          Once your download is finished, double-click <code
            class="bg-slate-700 px-2 py-1 rounded-md">{filename}</code
          >.
        </li>
        <li>
          While holding the <span class="font-bold">Control</span> key on your keyboard, click on
          the extracted <code class="bg-slate-700 px-2 py-1 rounded-md">StemRoller</code> app (<span
            class="italic">not</span
          >
          the <code>zip</code> file).
        </li>
        <li>Click <span class="font-bold">Open</span> in the shortcut menu.</li>
        <li>Click <span class="font-bold">Open</span> again in the popup.</li>
      </ol>
    {/if}

    <p class="leading-loose italic">
      Splitting is fastest on Apple Silicon devices or NVIDIA GPUs. On older hardware, it may take
      up to <span class="font-bold">30 minutes</span> and will consume significant energy and CPU resources.
    </p>

    <p class="leading-loose">
      Make sure you always download StemRoller from it&apos;s official website, <a
        href="/"
        class="text-cyan-500 underline">stemroller.com</a
      >, or from
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/stemrollerapp"
        class="text-cyan-500 underline">github.com/stemrollerapp</a
      >.
    </p>
  </div>
</div>
