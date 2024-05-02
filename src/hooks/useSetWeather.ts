import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "./types/API.type";
import { Temperature, UseSetWeatherParams } from "./types/useSetWeather.type";

export const useSetWeather = (params: UseSetWeatherParams) => {
  const [cityInput, setCityInput] = useState<string>("");
  const { coords, setIsLoading } = params;

  const [weather, setWeather] = useState<Weather>();
  const [temp, setTemp] = useState<Temperature>();

  useEffect(() => {
    if (coords) {
      const API_Key: string = "11852680f1c2f961aaccc9aec9d01462";
      const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_Key}`;

      axios
        .get<Weather>(url)
        .then((res) => {
          /* const obj = {
            name: res.data.name,
            country: res.data.sys.country,
            clouds: res.data.clouds.all,
            description: res.data.weather[0].description,
            icon: res.data.weather[0].icon,
            wind_speed: res.data.wind.speed,
            pressure: res.data.main.pressure,
          } */
          // console.log(res.data);

          setWeather(res.data);

          const celsius: number = +(res.data.main.temp - 273.15).toFixed(1);
          const fahrenheit: number = +((celsius * 9) / 5 + 32).toFixed(1);

          setTemp({
            celsius,
            fahrenheit,
          });
          // const info = Object.values(data);
          // console.log(info);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [coords]);

  useEffect(() => {
    if (cityInput) {
      const API_Key: string = "11852680f1c2f961aaccc9aec9d01462";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_Key}`;

      axios
        .get<Weather>(url)
        .then((res) => {
          setWeather(res.data);
          const celsius: number = +(res.data.main.temp - 273.15).toFixed(1);
          const fahrenheit: number = +((celsius * 9) / 5 + 32).toFixed(1);

          setTemp({
            celsius,
            fahrenheit,
          });
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
          setCityInput("");
        });
    }
  }, [cityInput]);

  return {
    weather,
    temp,
    setCityInput,
    cityInput,
  };
};
