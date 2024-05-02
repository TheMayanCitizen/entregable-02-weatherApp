export interface Coords {
  lat: number;
  lon: number;
}

export interface useGetCoordsReturnType {
  coords?: Coords;
  hasError: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showMessage: boolean;
}
