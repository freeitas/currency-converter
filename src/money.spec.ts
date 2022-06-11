import { Money, Dollar, Euro } from './money'

describe('Money', () => {
  it('should correctly handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
  })

  it('should correctly handle euro multiplication', () => {
    const five: Euro = Money.euro(5)
    expect(five.times(2).equals(Money.euro(10))).toBeTruthy()
    expect(five.times(3).equals(Money.euro(15))).toBeTruthy()
  })

  it('should correctly handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(new Euro(5).equals(new Euro(5))).toBeTruthy()
    expect(new Euro(5).equals(new Euro(6))).toBeFalsy()
    expect(new Euro(5).equals(new Dollar(5))).toBeFalsy()
  })
})
