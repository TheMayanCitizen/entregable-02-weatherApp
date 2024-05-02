export const getLocation = () => {
  const success = (pos: GeolocationPosition) => pos.coords;

  // const {latitude, longitude} = success

  navigator.geolocation.getCurrentPosition(success);

  // return {
  //   latitude,
  //   longitude
  // }
};

/* 
Retornar las coordenadas listas para usar en el custom hook useGet Coords en el primer useEffect


*/
