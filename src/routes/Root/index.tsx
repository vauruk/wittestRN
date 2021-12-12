import React from 'react';
import { Props, RootStackParamsList } from './types';
import { StackRoute } from '../types';
import { unauthorizedRoutes } from './config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC<Props> = ({ token }: Props) => {
    const renderRoutes = (routes: StackRoute[]) => {
        return routes.map(route => (
            <RootStack.Screen
                key={route.name}
                name={route.name as any}
                options={route.options}
            >
                {route.component}
            </RootStack.Screen>
        ));
    };

    return (
        <RootStack.Navigator screenOptions={{
            headerShown: false
        }}>
            {renderRoutes(unauthorizedRoutes)}
        </RootStack.Navigator>
    );
};

export default RootNavigator;
