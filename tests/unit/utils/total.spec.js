import calculator from '@/utils/calculators'
import { calTotal } from '@/utils/total'

// jest.mock('@/utils/calculators')

describe('Total', () => {
  it('should calculate total of item', () => {
      calculator.plusNumber = jest.fn().mockReturnValue(0)
      let mockItems = [
        {
          price: 100
        },
        {
          price: 400
        },
        {
          price: 300
        }
      ]
      calTotal(mockItems)
      // expect(result).toBe(800)
      expect(calculator.plusNumber).toHaveBeenCalledTimes(mockItems.length)
  })
})