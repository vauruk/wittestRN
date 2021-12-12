import { CityRoutes } from '../City/types';

export enum RootRoutes {
    index = '/',
}

export type RootStackParamsList = {
    [RootRoutes.index]: undefined;
    [CityRoutes.index]: undefined;
};

export interface Props {
    token?: string;
}
