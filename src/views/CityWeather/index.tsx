import React, { useEffect } from 'react';

import { Container, ScrollViewAppVk } from './styles';

import { useNavigation } from '@react-navigation/native';
import { City } from '../../store/city/types';
import { CityRoutes } from '../../routes/City/types';
import { useAppDispatch, useTypedSelector } from '../../store';
//import { authenticate, setField, startAdmin } from '../../store/login';
import { userAlertVK } from '../../hooks';
import { TextBlog } from '../../components/ItemCityVK/styles';
interface Props {
    idCity: string;
}
const CityList: React.FC<Props> = (props: Props) => {
    console.log('route', props.route);
    //const {idCity} = route.params;
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const cityDetail = useTypedSelector(state => state.cityForm.cityDetail);
    //const submitError = useTypedSelector(state => state.loginForm.submitError);
    //const typeMessage = useTypedSelector(state => state.loginForm.typeMessage);
    // const alert = userAlertVK({
    //     type: typeMessage,
    //     message: submitError,
    // });

    useEffect(() => {
        //dispatch(startAdmin());
    });

    console.log('cityDetail', cityDetail);

    return (
        <Container>
            <ScrollViewAppVk>
                <TextBlog>xx</TextBlog>
            </ScrollViewAppVk>
        </Container>
    );
};

export default CityList;
