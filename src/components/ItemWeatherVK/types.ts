import { StyleProp, ViewStyle } from 'react-native';
import { City } from '../../store/weather/types';
import { ForecastInfo } from '../../store/weather/types';

export interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    item: ForecastInfo;
    city: City;
    onDetail?: (item: ForecastInfo) => void;
}
