import { describe, expect, test } from '@jest/globals'
import TapTempo from '../lib/index'

describe('TapTempo', () => {
    test('undefined', () => {
        expect(TapTempo.calcBpm([9999])).toBeUndefined()
    })
    test('60 BPM', () => {
        expect(TapTempo.calcBpm([0, 1000, 2000, 3000, 4000])).toBe(60)
    })
    test('120 BPM', () => {
        expect(TapTempo.calcBpm([0, 500, 1000, 1500, 2000])).toBe(120)
    })
})
