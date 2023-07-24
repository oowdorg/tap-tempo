import TapTempo from './lib/index'

const timestamps: number[] = []
setInterval(() => {
    timestamps.push(Date.now())
    const bpm = TapTempo.calcBpm(timestamps) // This
    console.log(bpm)
}, 500)
