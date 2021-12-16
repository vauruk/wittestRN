import React from 'react';
import { Props } from './types';
import { Config } from '../../config';
import {
    ContentVK,
    Row,
    ColA,
    ColB,
    Text,
    TouchableHighlightPk,
    IconVK,
    IconVK2,
    IconHumVK,
    ColC,
    ImageItemVK,
    TextTemp,
    TextHumidity,
    ViewHumidity,
    ViewPk,
} from './styles';

import moment from 'moment-timezone';
import { Weather } from '../../store/weather/types';

const ItemWeatherVK: React.FC<Props> = ({
    testID,
    style,
    item,
    city,
    onDetail,
}: Props) => {
    /**
     *
     * @param item Aguarda para uma nova feature
     */
    const _onDetail = (item: Weather) => {
        onDetail?.(item);
    };

    return (
        <>
            <TouchableHighlightPk onPress={_onDetail}>
                <ContentVK testID={testID} style={style}>
                    <Row>
                        <ColA flex={0.4}>
                            <IconVK
                                name="thermometer-three-quarters"
                                size={50}
                            />
                            <TextTemp>{item?.main.temp.toFixed(1)}°</TextTemp>
                            <Text>{city?.name}</Text>
                            <Text>{city?.country}</Text>
                        </ColA>
                        <ColB flex={0.5}>
                            {item?.weather.map((row, index) => (
                                <ViewPk key={index}>
                                    <Text>{row.description}</Text>
                                    <ImageItemVK
                                        source={{
                                            uri: `${Config.apiIcon}${row.icon}@2x.png`,
                                            cache: 'force-cache',
                                        }}
                                        width={60}
                                        height={60}
                                    />
                                </ViewPk>
                            ))}
                            <>
                                <Row>
                                    <ColA flex={0.3}>
                                        <IconVK2 name="wind" size={25} />
                                    </ColA>
                                    <ColB flex={0.3}>
                                        <Text>{item?.wind.speed}</Text>
                                    </ColB>
                                </Row>
                            </>
                        </ColB>
                        <ColC flex={0.3}>
                            <ViewHumidity>
                                <Row>
                                    <ColA flex={0.3}>
                                        <IconHumVK name="tint" size={20} />
                                    </ColA>
                                    <ColB flex={0.7}>
                                        <TextHumidity>
                                            {item?.main.humidity} %
                                        </TextHumidity>
                                    </ColB>
                                </Row>
                            </ViewHumidity>
                            <Text>{moment(item?.dt_txt).format('DD/MM')}</Text>
                        </ColC>
                    </Row>
                </ContentVK>
            </TouchableHighlightPk>
        </>
    );
};

export default ItemWeatherVK;
