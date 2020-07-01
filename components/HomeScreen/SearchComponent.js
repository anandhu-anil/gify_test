import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const MainContainer = styled.View`
  padding: 0px 10px;
`;
const Container = styled.View`
  elevation: 8;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-color: #000;
  shadow-offset: 5px 5px;
  background-color: white;
  border-radius: 12px;
  padding: 10px 10px;
`;
const TextBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  font-family: ${Fonts.normalFont};
  text-align: center;
`;
const SearchButton = styled.TouchableOpacity`
  align-items: center;
  border-radius: 10px;
  padding: 15px 0px;
`;
const SearchLabel = styled.Text`
  font-size: 20px;
  text-align: center;
  background-color: ${Colors.successColor};
  padding: 5px;
  color: white;
  padding: 8px 8px;
  border-radius: 10px;
  font-family: ${Fonts.normalFont};
`;

const SearchBar = ({searchValue, ...props}) => {
  const [value, setValue] = React.useState('');
  const changeText = Text => {
    setValue(Text);
  };
  const searchSubmit = () => {
    if (Object.keys(value).length > 0) {
      searchValue(value);
    }
  };
  const close = () => {
    setValue('');
  };

  let content = (
    <MainContainer>
      <Container>
        <TextBox>
          <Icon name="cloud-search-outline" size={30} color={'grey'} />
          <TextInput
            placeholder="Search for Giphy..?"
            onChangeText={changeText}
            value={value}
            onSubmitEditing={searchSubmit}
          />
          {value.length > 0 ? (
            <Icon
              name="close-box"
              size={30}
              color={'black'}
              onPress={() => {
                close();
              }}
            />
          ) : null}
        </TextBox>
      </Container>
      <SearchButton
        onPress={() => {
          searchSubmit();
        }}>
        <SearchLabel>Search</SearchLabel>
      </SearchButton>
    </MainContainer>
  );
  return content;
};
export default SearchBar;
