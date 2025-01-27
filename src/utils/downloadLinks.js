import { readable } from 'svelte/store'

export const downloadUrls = {
  win: 'https://github.com/stemrollerapp/stemroller/releases/download/2.1.2/stemroller-2.1.2-win-cuda.exe',
  mac: 'https://github.com/stemrollerapp/stemroller/releases/download/2.1.2/stemroller-2.1.2-mac.zip',
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
