import React, { useEffect } from 'react';

import { Container, ScrollViewAppVk } from './styles';

import { ItemCityVK } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { City } from '../../store/city/types';
import { CityRoutes } from '../../routes/City/types';
import { useAppDispatch, useTypedSelector } from '../../store';
//import { authenticate, setField, startAdmin } from '../../store/login';
import { userAlertVK } from '../../hooks';
import { NavigationStackProp } from '@react-navigation/native-stack';

type Props = {
    navigation: NavigationStackProp<{ idCity: string }>;
};

const CityList: React.FC<Props> = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const cityList = useTypedSelector(state => state.cityForm.cityList);
    //const loading = useTypedSelector(state => state.loginForm.loading);
    //const submitError = useTypedSelector(state => state.loginForm.submitError);
    //const typeMessage = useTypedSelector(state => state.loginForm.typeMessage);
    // const alert = userAlertVK({
    //     type: typeMessage,
    //     message: submitError,
    // });

    const navWeather = () => {
        //navigation.navigate(CityRoutes.CityWeather, { idCity: 'parametro' });
        navigation.navigate({
            name: CityRoutes.CityWeather,
            params: { idCity: 'idsds' },
            merge: true,
        });
        console.log('testedsa');
    };

    useEffect(() => {
        //dispatch(startAdmin());
    });

    return (
        <Container>
            <ScrollViewAppVk>
                {cityList &&
                    cityList.map((item: City, index: number) => (
                        <ItemCityVK city={item} key={index} onDetail={navWeather} />
                    ))}
            </ScrollViewAppVk>
        </Container>
    );
};

export default CityList;
