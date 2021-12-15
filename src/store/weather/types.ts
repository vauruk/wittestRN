export interface WeatherResponse {
    dt: number;
    id: number;
    wind: Wind;
    name: string;
    base: string;
    weather: [WeatherRes];
}

interface Wind {
    deg: number;
    gust: number;
    speed: number;
}

interface WeatherRes {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    weather: Weather | undefined;
}

export type Weather = WeatherResponse;
