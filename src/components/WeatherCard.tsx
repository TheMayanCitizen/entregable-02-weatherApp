import { useState } from "react";
import { WeatherCardProps } from "./types/WeatherCard.types";

export const WeatherCard = ({ weather, temp }: WeatherCardProps) => {
  const [isCelsius, setIsCelsius] = useState(true);
  return (
    <article className="card">
      <h1 className="card__title">WeatherApp</h1>
      <h2 className="card__country">
        {weather?.name},{weather?.sys.country}
      </h2>

      <section className="card__body">
        <div className="card__image--container">
          <img
            src={
              weather &&
              `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
            }
            alt=""
            className="card__image"
          />
        </div>
        <article className="info">
          <h3 className="info__title">{weather?.weather[0].description}</h3>
          <ul className="info__list">
            <li className="info__item">
              <span>Wind Speed:</span>
              <span className="info__value">{weather?.wind.speed}m/s</span>
            </li>
            <li className="info__item">
              <span>Clouds</span>
              <span className="info__value">{weather?.clouds.all}%</span>
            </li>
            <li className="info__item">
              <span>Pressure:</span>
              <span className="info__value">{weather?.main.pressure}hPa</span>
            </li>
          </ul>
        </article>
      </section>
      <h2 className="card__temp">
        {isCelsius ? `${temp?.celsius}C` : `${temp?.fahrenheit}F`}
      </h2>
      <button
        className="card__btn"
        onClick={() => {
          setIsCelsius(!isCelsius);
        }}
      >
        Change to {isCelsius ? "F" : "C"}
      </button>
    </article>
  );
};
