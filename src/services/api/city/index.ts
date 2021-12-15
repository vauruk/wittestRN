import { CityResponse } from '../../../store/city/types';
import HttpClient from '../../ApiVK';

interface CityParameter { }
class CityService {
    static listData(): Promise<CityParameter> {
        return HttpClient.get<CityParameter, CityResponse>({
            path: '/data.json',
            token: undefined,
        });
    }
}
export default CityService;
