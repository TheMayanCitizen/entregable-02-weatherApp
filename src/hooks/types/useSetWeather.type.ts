import { Weather } from "./API.type";
import { Coords } from "./useGetCoordsReturn.type";
export interface Temperature {
  celsius: number;
  fahrenheit: number;
}

export interface UseSetWeatherReturnType {
  weather: Weather;
  temp: Temperature;
  setCityInput: React.Dispatch<React.SetStateAction<string>>;
  cityInput: string;
}

export interface UseSetWeatherParams {
  coords: Coords | undefined;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
