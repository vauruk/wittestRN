import React, { useEffect } from 'react';

import { Container, ScrollViewAppVk, ActivityIndicatorVK } from './styles';

import { Props } from '../../routes/City/types';
import { useAppDispatch, useTypedSelector } from '../../store';
import { TextBlog } from '../../components/ItemCityVK/styles';
import { ItemWeatherVK } from '../../components';
import { fetchWeatherList } from '../../store/weather';

const CityWeather: React.FC<Props> = (props: Props) => {
    const { idCity } = props.route.params;
    const dispatch = useAppDispatch();
    const weather = useTypedSelector(state => state.weatherForm.weather);
    const loading = useTypedSelector(state => state.weatherForm.loading);

    useEffect(() => {
        dispatch(fetchWeatherList(idCity));
    }, []);

    return (
        <Container>
            <ScrollViewAppVk>
                {loading && <ActivityIndicatorVK size="large" />}
                {!loading &&
                    weather?.list.map((item, index) => (
                        <ItemWeatherVK
                            item={item}
                            city={weather.city}
                            key={index}
                        />
                    ))}
            </ScrollViewAppVk>
        </Container>
    );
};

export default CityWeather;
