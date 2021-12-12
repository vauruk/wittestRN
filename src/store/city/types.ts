export interface CityResponse {
    city: [City];
}
export interface City {
    name: string;
    id: string;
    code: string;
}

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    cityList: [City];
    cityDetail: any;
}
