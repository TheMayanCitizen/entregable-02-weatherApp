import { useEffect, useState } from "react";
import {
  Coords,
  useGetCoordsReturnType,
} from "./types/useGetCoordsReturn.type";

export const useGetCoords = (): useGetCoordsReturnType => {
  const [coords, setCoords] = useState<Coords>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 2000);
    const success = (pos: GeolocationPosition) => {
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    };

    const error = () => {
      setHasError(true);
      setIsLoading(false);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return {
    coords,
    hasError,
    isLoading,
    setIsLoading,
    showMessage,
  };
};
