export default function asyncTimeout(duration) {
  return new Promise((resolve, reject) => {
    let last = Date.now(),
      dt = 0,
      now = 0,
      elapsed = 0

    function animate() {
      now = Date.now()
      dt = now - last
      last = now

      if (dt < 0 || dt > 500) {
        dt = 0
      }

      elapsed += dt
      if (elapsed > duration || elapsed < 0) {
        resolve()
      } else {
        window.requestAnimationFrame(animate)
      }
    }

    window.requestAnimationFrame(animate)
  })
}
