export async function fetchCars(){
  const headers = {
    'X-RapidAPI-Key': '84dc9094cdmshf52c8a183627c54p1625a8jsn849d27b21c5d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers
  })
  const result = await response.json()
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50
  const mileAgeFactor = 0.1
  const ageFactor = 0.05

  const mileAgeRate = city_mpg * mileAgeFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileAgeRate + ageRate
  return rentalRatePerDay.toFixed(0)
}