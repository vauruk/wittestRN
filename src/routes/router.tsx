import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Root';

const RouterNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default RouterNavigation;
