import { readable } from 'svelte/store'

export const downloadUrls = {
  win: 'https://github.com/stemrollerapp/stemroller/releases/download/1.0.0/StemRoller-1.0.0-win.zip',
  mac: 'https://github.com/stemrollerapp/stemroller/releases/download/1.0.0/StemRoller-1.0.0-mac.zip',
}

export const defaultDownloadOs = readable(null, (set) => {
  if (typeof navigator !== 'undefined') {
    if (navigator.userAgent.match(/Windows/i)) {
      set('win')
    } else if (navigator.userAgent.match(/Mac/i)) {
      set('mac')
    }
  }
})
