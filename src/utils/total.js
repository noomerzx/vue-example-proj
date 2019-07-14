import calculators from '@/utils/calculators'

export const calTotal = (list) => {
  let result = list.reduce((result, current) => {
    return calculators.plusNumber(result, current.price)
  }, 0)
  return result
}