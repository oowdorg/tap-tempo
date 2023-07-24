# tap-tempo

![main workflow](https://github.com/oowdorg/tap-tempo/actions/workflows/ci.yaml/badge.svg)

1. `npm install oowdorg/tap-tempo`

2.

```typescript
import TapTempo from "tap-tempo"

const timestamp = Date.now()
const timestamps = [timestamp, timestamp + 500, timestamp + 1000]
const bpm = TapTempo.calcBpm(timestamps) // This
console.log(bpm)
```
