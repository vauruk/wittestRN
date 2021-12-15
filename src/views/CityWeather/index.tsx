import React, { useEffect } from 'react';

import { Container, ScrollViewAppVk } from './styles';

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
    //const submitError = useTypedSelector(state => state.loginForm.submitError);
    //const typeMessage = useTypedSelector(state => state.loginForm.typeMessage);
    // const alert = userAlertVK({
    //     type: typeMessage,
    //     message: submitError,
    // });

    useEffect(() => {
        //   if (!weather) {
        dispatch(fetchWeatherList(idCity));
        //   }
    }, []);

    console.log('cityDetail', loading, idCity, weather);
    return (
        <Container>
            <ScrollViewAppVk>
                {loading && <TextBlog>Loading...</TextBlog>}
                {!loading && <ItemWeatherVK item={weather} />}
            </ScrollViewAppVk>
        </Container>
    );
};

export default CityWeather;
