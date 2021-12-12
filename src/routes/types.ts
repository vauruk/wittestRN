import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { DrawerNavigationOptions } from '@react-navigation/drawer';

import { RootRoutes } from './Root';
import { SignInRoutes } from './City';

export type routeName = RootRoutes | SignInRoutes;

export interface BaseRoute {
    name: routeName;
    component: () => any;
}

export interface StackRoute extends BaseRoute {
    options?: NativeStackNavigationOptions;
}
export interface DrawerRoute extends BaseRoute {
    options?: DrawerNavigationOptions;
}
