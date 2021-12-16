import React from 'react';
import { Props } from './types';
import {
    ContentVK,
    Row,
    ColA,
    ColB,
    TextBlog,
    ColDate,
    ColAction,
    TouchableHighlightPk,
} from './styles';

import moment from 'moment-timezone';
import { Config } from '../../config';
import { City } from '../../store/city/types';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemCityVK: React.FC<Props> = ({
    testID,
    style,
    city,
    onEdit,
    onDetail,
    onDelete,
}: Props) => {
    const _onDetail = (item: City) => {
        onDetail?.(item);
    };
    const getUrl = code => {
        console.log('code', `../../assets/${code}.png`);
        //  return require(`../../assets/${code}.png`);
    };

    return (
        <>
            <TouchableHighlightPk onPress={_onDetail}>
                <ContentVK testID={testID} style={style}>
                    <Row>
                        <ColA flex={0.1}>
                            {/* <ImageItemVK
                                source={require('../../assets/es.png')}
                                width={80}
                                height={80}
                            />
                            {getUrl(city.code)} */}
                        </ColA>
                        <ColB flex={0.9}>
                            <TextBlog>{city.name}</TextBlog>
                        </ColB>
                    </Row>
                    <Row>
                        <ColDate flex={0.8} />
                        <ColAction flex={0.2} />
                    </Row>
                </ContentVK>
            </TouchableHighlightPk>
        </>
    );
};

export default ItemCityVK;
