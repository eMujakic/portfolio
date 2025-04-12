export interface WeatherInterface {
  hour: number| string;
  temperature: number;
  humidity: number;
}

export interface DayInterface {
  day: string | number;
  high: number;
  low: number;
}

export interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}
;

export interface TempGraphProps {
    data: WeatherInterface[];
    isFahrenheit: boolean;
}

export interface WeekGraphProps {
  data: DayInterface[];
  isFahrenheit: boolean;
}