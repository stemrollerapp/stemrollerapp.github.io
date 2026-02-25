import { readable } from 'svelte/store'

export const downloadUrls = {
  win: 'https://huggingface.co/stemrollerapp/stemroller/resolve/main/stemroller-3.1.0-win-cuda.exe',
  mac: 'https://huggingface.co/stemrollerapp/stemroller/resolve/main/stemroller-3.1.0-mac.zip',
}

export const defaultDownloadOs = readable(null, (set) => {
  if (typeof navigator !== 'undefined') {
    if (navigator.platform.toLowerCase().indexOf('win') >= 0) {
      set('win')
    } else if (
      navigator.platform.toLowerCase().indexOf('mac') >= 0 &&
      (!navigator.maxTouchPoints || navigator.maxTouchPoints < 1)
    ) {
      set('mac')
    }
  }
})
