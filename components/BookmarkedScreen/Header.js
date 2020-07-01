import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {height} from '../../constants/Layout';
import Fonts from '../../constants/Fonts';

const Container = styled.View`
  height: ${height * 0.08}px;
  background-color: white;
  elevation: 10;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-color: #000;
  shadow-offset: 5px 5px;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px;
`;

const Label = styled.Text`
  padding: 0px 5px;
  font-size: 15px;
  font-weight: 600;
  font-family: ${Fonts.normalFont};
`;

const IconDivision = styled.TouchableOpacity``;
const Header = props => {
  const clickHandler = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <IconDivision onPress={() => clickHandler()}>
        <Icon name={'keyboard-backspace'} size={28} color={'black'} />
      </IconDivision>
      <Label>Saved Bookmarks</Label>
    </Container>
  );
};

export default Header;
