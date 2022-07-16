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
    <a class="flex flex-row items-center justify-center px-6 py-3 rounded-md text-slate-900 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-400 transition-all focus:outline-none drop-shadow-md hover:drop-shadow-lg focus:ring focus:ring-cyan-300" href="https://github.com/stemrollerapp/stemroller/releases/download/1.0.0/StemRoller-1.0.0-win.zip" download={true}>
      <div class="w-6 h-6 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
      <div class="font-bold">Windows</div>
    </a>
    <a class="flex flex-row items-center justify-center px-6 py-3 rounded-md text-slate-900 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-400 transition-all focus:outline-none drop-shadow-md hover:drop-shadow-lg focus:ring focus:ring-cyan-300" href="https://github.com/stemrollerapp/stemroller/releases/download/1.0.0/StemRoller-1.0.0-mac.zip" download={true}>
      <div class="w-6 h-6 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
      <div class="font-bold">macOS</div>
    </a>
  </div>
  <video class="max-w-lg rounded-md border border-slate-700" src="/demo.m4v" autoplay={true} loop={true} playsinline={true}></video>
</div>
