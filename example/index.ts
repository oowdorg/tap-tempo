import TapTempo from '../index'

const timestamps: number[] = []
setInterval(() => {
    timestamps.push(Date.now())
    const bpm = TapTempo.calcBpm(timestamps) // This
    if (bpm) {
        console.log(bpm)
    }
}, 500)
