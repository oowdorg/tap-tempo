class TapTempo {
    public static calcBpm(timestamps: number[]) {
        if (timestamps.length <= 1) {
            return undefined
        }
        let diffSum = 0
        for (let i = 1; i < timestamps.length; i++) {
            const currenttimestamp = timestamps[i]
            const prevTimestamp = timestamps[i - 1]
            const diff = currenttimestamp - prevTimestamp
            diffSum += diff
        }
        const bpm = Math.round(60000 / (diffSum / (timestamps.length - 1)))
        return bpm
    }
}

export default TapTempo
