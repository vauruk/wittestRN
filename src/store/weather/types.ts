export interface WeatherResponse {
    message: number;
    cnt: number;
    list: [ForecastInfo];
    city: City;
}
interface MainInfo {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface City {
    id: number;
    name: string;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}
interface Wind {
    speed: number;
    deg: number;
    gust: number;
}
export interface ForecastInfo {
    dt: number;
    main: MainInfo;
    weather: [WeatherInfo];
    wind: Wind;
    visibility: number;
    pop: number;
    dt_txt: string;
}

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    weather: Weather | undefined;
}

export type Weather = WeatherResponse;
