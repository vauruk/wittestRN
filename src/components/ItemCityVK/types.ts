import { StyleProp, ViewStyle } from 'react-native';
import { City } from '../../store/city/types';

export interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    city: City;
    onEdit?: (item: City) => void;
    onDetail?: (item: City) => void;
    onDelete?: (item: City) => void;
}
