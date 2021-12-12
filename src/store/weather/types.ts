export interface Weather {
}
export interface WeatherResponse {
    weather: [Weather];
}

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    weatherList: [Weather] | undefined;
}
