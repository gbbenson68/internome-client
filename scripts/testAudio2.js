// NOTE: This can usually only be played via a browser!!
const profile = {
  name: 'Example profile',
  minTempo: 60,
  maxTempo: 120,
  duration: 2
}

const playClick = (audioCtx, elapsedTime, beatLength, lastTime) => {
  const now = audioCtx.currentTime
  console.log('Diff: ' + (now - lastTime))
  let gainNode = audioCtx.createGain()
  let osc = audioCtx.createOscillator()
  gainNode.connect(audioCtx.destination)
  osc.connect(gainNode)
  gainNode.gain.exponentialRampToValueAtTime(zero, now + beatLength / 16)
  osc.frequency.value = freq
  osc.start(now)
  osc.stop(now + beatLength)
  osc.onended = () => {
    osc = null
    gainNode = null
    if (elapsedTime <= profile.duration * 60) {
      playClick(audioCtx, elapsedTime + beatLength, beatLength, now)
    }
  }
}

const elapsedTime = 0
// const bpm = 60
const freq = 880
const zero = 0.00001
const beatLength = 0.25

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()
const execTime = audioCtx.currentTime
playClick(audioCtx, elapsedTime, beatLength, execTime)
