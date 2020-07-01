import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  padding: 5px;
  align-items: center;
`;

const GifImage = styled.Image`
  height: 250px;
  width: 250px;
`;
const ListComponent = ({...props}) => {
  return (
    <Container>
      <GifImage source={{uri: props.data}} />
    </Container>
  );
};

export default ListComponent;
