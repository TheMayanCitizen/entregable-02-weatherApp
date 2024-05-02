import { Weather } from "../../hooks/types/API.type";
import { Temperature } from "../../hooks/types/useSetWeather.type";

export interface WeatherCardProps {
  weather: Weather | undefined;
  temp: Temperature | undefined;
}
