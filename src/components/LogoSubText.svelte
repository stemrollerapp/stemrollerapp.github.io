<script>
  import { onMount } from 'svelte'
  import asyncTimeout from '$utils/asyncTimeout.js'
  import efficientInterval from '$utils/efficientInterval.js'

  let texts = ['stems', 'instrumental', 'acapella']
  let curText = 0
  let hidden = false

  async function changeText() {
    hidden = true
    await asyncTimeout(250)
    curText = curText === texts.length - 1 ? 0 : curText + 1
    hidden = false
  }

  onMount(() => {
    efficientInterval(changeText, 3000)
  })
</script>

<div class="whitespace-nowrap text-slate-100 text-lg sm:text-4xl md:text-2xl lg:text-4xl xl:text-5xl sm:leading-snug md:leading-snug xl:leading-snug drop-shadow-md">Roll your own <span class={`inline-block md:min-w-[148px] xl:min-w-[288px] text-sky-400 font-bold transition-all ${hidden ? 'opacity-0' : 'opacity-100'}`}>{texts[curText]}</span><br />from <span class="text-fuchsia-300">any song</span></div>
