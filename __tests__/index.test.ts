import { multiplyNumbers } from '../src/utils'

describe('General tests', () => {
    it('[multipleNumbers] test', () => {
        expect(multiplyNumbers(1, 1)).toEqual(1)
        expect(multiplyNumbers(2, 8)).toEqual(16)
    })
})
