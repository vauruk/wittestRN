import { NewsResponse } from '../../../store/news/types';
import HttpClient from '../../ApiVK';

interface Weather { }
class WeatherService {
    static listData(): Promise<NewsResponse> {
        return HttpClient.get<Weather, NewsResponse>({
            path: '/data.json',
            token: undefined,
        });
    }
}
export default WeatherService;
