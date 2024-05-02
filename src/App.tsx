import "./App.css";
import { FormInput } from "./components/FormInput";
import { WeatherCard } from "./components/WeatherCard";
import { useGetCoords } from "./hooks/useGetCoords";
import { useSetWeather } from "./hooks/useSetWeather";

function App() {
  const { coords, hasError, isLoading, setIsLoading, showMessage } =
    useGetCoords();
  const { weather, temp, setCityInput } = useSetWeather({
    coords,
    setIsLoading,
  });

  return (
    <div className="app">
      {isLoading ? (
        <div>
          <div className="loader"></div>
          {showMessage && <p>Por favor activa la ubicacion</p>}
        </div>
      ) : hasError ? (
        <h1>Please, allow location services</h1>
      ) : (
        <>
          <FormInput setCityInput={setCityInput} />
          <WeatherCard weather={weather} temp={temp} />
        </>
      )}
    </div>
  );
}

export default App;
