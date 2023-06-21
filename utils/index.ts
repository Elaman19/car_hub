import { CarProps, FilterProps } from "@/types"

export async function fetchCars(filters: FilterProps){

  const { manufacturer, year, fuel, limit, model } = filters

  const headers = {
    'X-RapidAPI-Key': '84dc9094cdmshf52c8a183627c54p1625a8jsn849d27b21c5d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const {make, year, model} = car
  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)
  
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName
}