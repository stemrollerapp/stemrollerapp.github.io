<script>
  let showHelp = null

  function handleMouseUp(event, platform) {
    if (event.button === 0 || event.button === 1) {
      showHelp = platform
    }
  }

  function handleKeyDown(event, platform) {
    if (event.code === 'Space' || event.code === 'Enter') {
      showHelp = platform
    }
  }
</script>

<svelte:head>
  <title>StemRoller</title>
</svelte:head>

<!-- TODO: Setting min-width here is not ideal -->
<div style="min-width: 600px" class="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 space-y-8 bg-slate-900 text-slate-100 overflow-auto">
  <div class="flex flex-row items-center justify-center space-x-6">
    <img class="w-16 h-16" src="/favicon.png" alt="StemRoller logo">
    <h1 class="font-light text-4xl">StemRoller</h1>
  </div>
  <div class="flex flex-row items-center justify-center space-x-3">
    <a class="flex flex-row items-center justify-center px-6 py-3 rounded-md text-slate-900 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-400 transition-all focus:outline-none drop-shadow-md hover:drop-shadow-lg focus:ring focus:ring-cyan-300" href="https://github.com/stemrollerapp/stemroller/releases/download/0.1.0/StemRoller-0.1.0-win-setup.exe" download={true} on:mouseup={(event) => handleMouseUp(event, 'win')} on:keydown={(event) => handleKeyDown(event, 'win')}>
      <div class="w-6 h-6 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
      <div class="font-bold">Download for Windows</div>
    </a>
    <div class="flex flex-row items-center justify-center px-6 py-3 rounded-md text-slate-300 bg-slate-700" href="https://github.com/stemrollerapp/stemroller/releases/download/0.1.0/StemRoller-0.1.0-win-setup.exe" download={true}>
      <div class="w-6 h-6 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>
      <div class="font-bold">Coming Soon to macOS</div>
    </div>
  </div>
  {#if showHelp !== null}
    <div class="flex flex-col items-center justify-center space-y-4 max-w-md">
      <div class="text-lg font-bold">Need a little help getting set up?</div>
      {#if showHelp === 'win'}
        <ol class="space-y-2 list-disc">
          <li>Double-click the <code class="bg-slate-700 rounded-md p-1">StemRoller-0.1.0-win-setup.exe</code> file you just downloaded. This is a self-extracting 7-Zip archive.</li>
          <li>If Windows SmartScreen warns you that this is an unknown application, click &quot;More info,&quot; then &quot;Run anyway.&quot;</li>
          <li>Choose any directory into which you'd like to install the StemRoller application, then click the <strong>Extract</strong> button.</li>
          <li>Navigate to the directory into which you extracted StemRoller, then open <code class="bg-slate-700 rounded-md p-1">StemRoller-0.1.0-win\StemRoller.exe</code> (again, you may need to ignore the SmartScreen warning).</li>
          <li>(Optional) Right-click <code class="bg-slate-700 rounded-md p-1">StemRoller.exe</code> and click &quot;Pin to Taskbar&quot; for easy access.</li>
        </ol>
      {/if}
    </div>
  {/if}
  <video class="max-w-lg rounded-md border border-slate-700" src="/demo.m4v" autoplay={true} loop={true} playsinline={true}></video>
</div>
