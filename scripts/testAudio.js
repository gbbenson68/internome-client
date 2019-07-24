// NOTE: This can usually only be played via a browser!!

const context = new AudioContext()

// const metronome = (bpm = 60, callback, currentBeat = 1) => {
const metronome = (bpm = 60, callback, iterations = 1, prevNow = 0) => {
  const now = context.currentTime

  // How many beats fit in a single second at the given bpm? e.g.
  // 60 bpm = 1 beat per second
  // 120 bpm = 2 beats per second
  // 240 bpm = 4 beats per second
  const beatsPerSecond = bpm / 60.0

  // Our base unit is a quarter note. This defines how many quarter notes fit
  // in a single bar. For now let's use common 4/4 time.
  const quarterBeatsPerBar = 4

  // Multiplying the number of beats in 1 second by the number of quarter
  // beats in a bar, we get the actual number of beats we want in a single bar e.g.
  // 1 beat per second * 4 = 4 beats per bar
  // 2 beat per second * 4 = 8 beats per bar
  // 4 beat per second * 4 = 16 beats per bar
  const beatsPerBar = beatsPerSecond * quarterBeatsPerBar

  // Dividing the number of quarter beats by our actual beats per bar gives us
  // the length of a single beat in milliseconds.
  const beatLength = quarterBeatsPerBar / beatsPerBar

  // console.log(beatsPerSecond, beatsPerBar, beatLength)
  // return

  // const freq = currentBeat % beatsPerBar === 1 ? 880 : 440
  const freq = 880
  const zero = 0.00001

  let gainNode = context.createGain()
  let osc = context.createOscillator()
  gainNode.connect(context.destination)
  osc.connect(gainNode)

  gainNode.gain.exponentialRampToValueAtTime(zero, now + beatLength / 16)

  osc.frequency.value = freq
  osc.start(now)
  osc.stop(now + beatLength - 0.009)

  const diff = now - prevNow - 1.009
  callback(now, iterations, diff * 1000)

  osc.onended = () => {
    // metronome(bpm, callback, (currentBeat += 1))
    osc = null
    gainNode = null
    if (iterations < 20) {
      metronome(bpm, callback, ++iterations, now)
    }
  }
}

metronome(60, (time, iter, msDiff) => {
  // Here we can trigger any audio we want
  console.log('boop: ' + iter, time)
  console.log('\tDiff = ' + msDiff)
})
// metronome(120)
// metronome(240)
