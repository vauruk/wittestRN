import React, { useEffect } from 'react';

import { Container, ScrollViewAppVk } from './styles';

import { ItemCityVK } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { City } from '../../store/city/types';
import { CityRoutes } from '../../routes/City/types';
import { useAppDispatch, useTypedSelector } from '../../store';

const CityList = () => {
    const navigation = useNavigation();
    const cityList = useTypedSelector(state => state.cityForm.cityList);

    const navWeather = (item: City) => {
        navigation.navigate(CityRoutes.CityWeather, { idCity: item.id });
    };

    useEffect(() => {
        //dispatch(startAdmin());
    });

    return (
        <Container>
            <ScrollViewAppVk>
                {cityList &&
                    cityList.map((item: City, index: number) => (
                        <ItemCityVK
                            city={item}
                            key={index}
                            onDetail={() => navWeather(item)}
                        />
                    ))}
            </ScrollViewAppVk>
        </Container>
    );
};

export default CityList;
