import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const Container = styled.View`
  height: 60%;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.transparentBlueColor};
`;
const LoaderComponent = props => {
  let content = (
    <Container>
      <ActivityIndicator size="large" color={Colors.blueColor} />
    </Container>
  );
  return content;
};

export default LoaderComponent;
