import React from 'react';
import { CityStackParamsList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './config';

const Stack = createNativeStackNavigator<CityStackParamsList>();

const CityNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        {routes.map(route => (
            <Stack.Screen
                key={route.name}
                name={route.name as any}
                options={route.options}>
                {route.component}
            </Stack.Screen>
        ))}
    </Stack.Navigator>
);

export default CityNavigator;
