import React from 'react';
import { StackRoute } from 'routes/types';
import { CityRoutes } from './types';
import { CityList, Splash, CityWeather } from '../../views';
import { color } from '../../theme';

const routes: StackRoute[] = [
    {
        name: CityRoutes.Splash,
        component: () => <Splash />,
        options: {
            animationEnabled: true,
            headerTransparent: true,
        },
    },
    {
        name: CityRoutes.CityList,
        component: () => <CityList />,
        options: {
            animationEnabled: true,
            headerShown: true,
            headerTitle: 'Cities',
            headerStyle: {
                backgroundColor: color.primary,
            },
            headerTintColor: color.white,
            headerBackVisible: false,
        },
    },
    {
        name: CityRoutes.CityWeather,
        component: props => <CityWeather {...props} />,
        options: {
            animationEnabled: true,
            headerTransparent: false,
            headerShown: true,
            headerTitle: 'Forecasts',
            headerStyle: {
                backgroundColor: color.primary,
            },
            headerTintColor: color.white,
        },
    },
];

export { routes };
