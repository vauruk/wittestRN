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
    IconVK,
    ImageItemVK,
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
    const renderMessage = (message: string) => {
        const numChar = 100; //Number(Config.numChar);
        let msg = message;
        if (message.length > numChar) {
            msg += msg.substring(0, numChar);
            msg += ' ...';
        }
        return msg;
    };

    const _onDelete = (item: City) => {
        onDelete?.(item);
    };

    const _onEdit = (item: City) => {
        console.log('Edit');
        onEdit?.(item);
    };
    const _onDetail = (item: City) => {
        console.log('onDetail');
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
                        <ColA flex={0.3}>
                            <ImageItemVK
                                source={require('../../assets/es.png')}
                                width={80}
                                height={80}
                            />
                            {getUrl(city.code)}
                        </ColA>
                        <ColB flex={0.7}>
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
