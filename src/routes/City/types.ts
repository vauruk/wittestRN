export enum CityRoutes {
    index = '/city',
    Splash = '/splash',
    CityList = '/cityList',
    CityWeather = '/cityWeather',
}

export type CityStackParamsList = {
    [CityRoutes.Splash]: undefined;
    [CityRoutes.CityList]: undefined;
    [CityRoutes.CityWeather]: undefined;
};
