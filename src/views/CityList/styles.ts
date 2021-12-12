import styled from 'styled-components/native';
import { ContainerVK, ImageVK, ScrollViewVK } from '../../components';

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

const ScrollViewAppVk = styled(ScrollViewVK).attrs({})``;

export { Container, ImageSignVK, ScrollViewAppVk, Content };
