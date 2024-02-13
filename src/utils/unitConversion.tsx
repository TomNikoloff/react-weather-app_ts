
export const kelvinToCelcius = (num: number) => Math.round(num - 273.15);
  
export const celciusToFahrenheit = (c: number) => Math.round(c * (9 / 5) + 32);

export const fahrenheitToCelcius = (f: number) => Math.round(((f - 32) * 5) / 9);
  
export const kmToMile = (n: number) => Math.round(n / 1.60934);

export const mileToKm = (n: number) => Math.round(n * 1.60934);