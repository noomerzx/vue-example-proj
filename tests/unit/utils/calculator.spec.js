import calculator from '@/utils/calculators'

describe('Calculator', () => {
  it('should plus 2 number', () => {
      let result = calculator.plusNumber(5, 5)
      expect(result).toBe(10)
  })

  it('should not divide by number zero', () => {
    let result = calculator.divideNumber(5, 5)
    expect(result).toBe(1)
  })

  // it('should return zero when divide by zero', () => {
  //   let result = divideNumber(5, 0)
  //   expect(result).toBe(0)
  // })
})