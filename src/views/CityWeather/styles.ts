import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { ContainerVK, ImageVK, ScrollViewVK } from '../../components';
import { ActivityIndicator } from 'react-native';

const Container = styled(ContainerVK).attrs({})``;
const ImageSignVK = styled(ImageVK).attrs({})`
    margin-top: 20px;
`;

const Content = styled.View`
    background-color: ${(props: any) => props.theme.gray2};
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

const ScrollViewAppVk = styled(ScrollViewVK).attrs({})`
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${(props: any) => props.theme.ligthGray};
`;

const ActivityIndicatorVK = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.primaryColor,
}))`
    margin-top: 300px;
`;

export {
    Container,
    ImageSignVK,
    ScrollViewAppVk,
    Content,
    ActivityIndicatorVK,
};
