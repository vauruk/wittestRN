import styled, { css } from 'styled-components/native';
import { RowVK, ColVK } from '../index';
import IconFA from 'react-native-vector-icons/FontAwesome';
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
    border-width: 0.5px;
    border-color: ${(props: any) => props.theme.ligthGrayColor};
`;

const Row = styled(RowVK)`
    padding-right: 10px;
    padding-top: 10px;
`;
const ColA = styled(ColVK)``;
const TouchableHighlightPk = styled(TouchableHighlight).attrs(({ theme }) => ({
  underlayColor: theme.gray2,
}))`
    width: 100%;
`;
const ColB = styled(ColVK)`
    align-items: flex-start;
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
const TextBlog = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
`;
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

const ColIcon = styled(ColVK)``;
const RowIcon = styled(RowVK)`
align - content: center;
align - items: flex - end;
`;

export {
  ContentVK,
  IconVK,
  ButtonIcon,
  Row,
  ColA,
  ColB,
  TextBlog,
  TextCreated,
  ColDate,
  ColIcon,
  ColAction,
  RowIcon,
  TouchableHighlightPk,
};
