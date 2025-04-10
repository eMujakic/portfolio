export interface WeatherInterface {
    hour: number;
    temperature: number;
    humidity: number;
  };
  
  export interface dayInterface {
    day: string;
    highTemperature: number;
    lowTemperature: number;
    avgHumidity: number;
  };

  export interface NavbarProps {
      menuOpen: boolean;
      setMenuOpen: (open: boolean) => void;
  }