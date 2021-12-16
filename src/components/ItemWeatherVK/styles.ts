import styled, { css } from 'styled-components/native';
import { RowVK, ColVK, ImageVK } from '../index';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import { Props } from './types';
import { TouchableHighlight } from 'react-native';

const meNoColor = css`
    ${({ theme }) => theme.gray2}
`;
const meColor = css`
    ${({ theme }) => theme.white}
`;
const colorSelector = (me: boolean) => {
    if (me) {
        return meNoColor;
    } else {
        return meColor;
    }
};

const ContentVK = styled.View<Pick<Props>>`
    width: 100%;
    padding: 10px;
    border-width: 0.5px;
    border-radius: 10px;
    background-color: ${(props: any) => props.theme.white};
    border - color: ${(props: any) => props.theme.ligthGrayColor};
`;
//  border-width: 0.5px;
//border - color: ${ (props: any) => props.theme.ligthGrayColor };

const ImageItemVK = styled(ImageVK)``;
const Row = styled(RowVK)`
    // padding-right: 10px;
    // padding-top: 10px;
`;
const ColA = styled(ColVK)`
    // align-items: center;
    justify-content: center;
`;
const TouchableHighlightPk = styled(TouchableHighlight).attrs(({ theme }) => ({
    underlayColor: theme.gray2,
}))`
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
`;
const ColB = styled(ColVK)`
    align-items: center;
`;
const ColC = styled(ColVK)`
    align-items: center;
`;
const ColDate = styled(ColVK)`
    padding-left: 10px;
    align-items: flex-start;
    justify-content: center;
`;
const ColAction = styled(ColVK)`
    align-content: flex-end;
    align-items: flex-end;
    justify-content: center;
`;
const Text = styled.Text`
    color: ${(props: any) => props.theme.primary};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
`;
const TextTemp = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;
const TextHumidity = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
    color: ${(props: any) => props.theme.white};
`;
const ViewHumidity = styled.View`
    width: 100%;
    padding: 5px;
    background-color: ${(props: any) => props.theme.red};
    border-radius: 20px;
`;
const ViewPk = styled.View``;
const TextCreated = styled.Text`
    color: ${(props: any) => props.theme.text.color};
`;

const ButtonIcon = styled.TouchableOpacity`
padding: 2px;
border - radius: 20px;
`;

const IconVK = styled(IconFA).attrs(({ theme }) => ({
    color: theme.primaryColor,
}))``;

const IconVK2 = styled(IconF).attrs(({ theme }) => ({
    color: theme.primaryColor,
}))``;

const IconHumVK = styled(IconFA).attrs(({ theme }) => ({
    color: theme.white,
}))``;

const ColIcon = styled(ColVK)``;
const RowIcon = styled(RowVK)`
align - content: center;
align - items: flex - end;
`;

export {
    ContentVK,
    IconVK,
    IconVK2,
    IconHumVK,
    ButtonIcon,
    Row,
    ColA,
    ColB,
    ColC,
    TextTemp,
    Text,
    TextCreated,
    ViewPk,
    ColDate,
    ColIcon,
    ColAction,
    RowIcon,
    TextHumidity,
    ViewHumidity,
    ImageItemVK,
    TouchableHighlightPk,
};
