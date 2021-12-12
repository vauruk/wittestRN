import React from 'react';

import { StackRoute } from '../types';
import CityNavigator from '../City';
import { CityRoutes } from '../City/types';

const unauthorizedRoutes: StackRoute[] = [
    {
        name: CityRoutes.index,
        component: () => <CityNavigator />,
        options: {
            headerTitle: 'Sign',
        },
    },
];

export { unauthorizedRoutes };
