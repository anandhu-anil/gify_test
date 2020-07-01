import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {height} from '../../constants/Layout';
import Fonts from '../../constants/Fonts';

const MainContainer = styled.View`
  height: ${height * 0.08}px;
  background-color: white;
  elevation: 10;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-color: #000;
  shadow-offset: 5px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  border-bottom-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  padding: 0px 5px;
  font-size: 18px;
  font-weight: 600;
  font-family: ${Fonts.normalFont};
`;
const IconDivision = styled.TouchableOpacity``;
const Header = props => {
  const clickHandler = () => {
    props.navigation.goBack();
  };

  const bookMarkHandler = () => {
    props.navigation.navigate('BookmarkedScreen');
  };
  return (
    <MainContainer>
      <Container>
        <IconDivision onPress={() => clickHandler()}>
          <Icon name={'keyboard-backspace'} size={30} color={'black'} />
        </IconDivision>
        <Label>Giphy</Label>
      </Container>
      <IconDivision onPress={() => bookMarkHandler()}>
        <Icon name={'bookmark-outline'} size={30} color={'black'} />
      </IconDivision>
    </MainContainer>
  );
};

export default Header;
