import { WeatherResponse } from '../../../store/weather/types';
import HttpClient from '../../ApiVK';
import { Config } from '../../../config';

interface Weather { }
class WeatherService {
    static listData(): Promise<WeatherResponse> {
        return HttpClient.get<Weather, WeatherResponse>({
            path: '/data.json',
            token: undefined,
        });
    }
    static getWheater(idCity: string): Promise<WeatherResponse> {
        return HttpClient.get<Weather, WeatherResponse>({
            path: `/forecast?q=${idCity}&units=metric&appid=${Config.apiKey}`,
            token: undefined,
        });
    }
}
export default WeatherService;
