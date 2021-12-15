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
    IconVK,
} from './styles';

import moment from 'moment-timezone';
import { Weather } from '../../store/weather/types';

const ItemWeatherVK: React.FC<Props> = ({
    testID,
    style,
    item,
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

    const _onDelete = (item: Weather) => {
        onDelete?.(item);
    };

    const _onEdit = (item: Weather) => {
        console.log('Edit');
        onEdit?.(item);
    };
    const _onDetail = (item: Weather) => {
        console.log('onDetail');
        onDetail?.(item);
    };
    const getUrl = code => {
        console.log('code', `../../assets/${code}.png`);
        // return require(`../../assets/${code}.png`);
    };

    return (
        <>
            <TouchableHighlightPk onPress={_onDetail}>
                <ContentVK testID={testID} style={style}>
                    <Row>
                        <ColA flex={0.15}>
                            <IconVK name="cloud" size={18} />
                        </ColA>
                        <ColB flex={0.7}>
                            <TextBlog>{item.name}</TextBlog>
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

export default ItemWeatherVK;
