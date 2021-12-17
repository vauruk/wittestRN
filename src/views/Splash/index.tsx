import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { CityRoutes } from '../../routes/City/types';
import { Props } from './types';
import LottieView from 'lottie-react-native';

const Splash: React.FC<Props> = (props: Props) => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(CityRoutes.CityList);
        }, 5000);
    });
    return <LottieView source={require('./lottie2.json')} autoPlay loop />;
};

export default Splash;
