import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const Container = styled.View`
  flex-direction: row;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
`;
const GifImage = styled.Image`
  height: 150px;
  width: 150px;
`;
const LabelDivision = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
`;
const Label = styled.Text`
  font-size: 15px;
  color: white;
  font-family: ${Fonts.boldFont};
`;

const ListComponent = ({bookmarkData, savedBookmarks, data}) => {
  let add = savedBookmarks.filter(key => {
    return key == data.images.original.url;
  });

  const addDataHandler = datas => {
    bookmarkData(datas);
  };

  return (
    <Container>
      <GifImage source={{uri: data.images.original.url}} />
      {add.length == 0 ? (
        <LabelDivision
          style={{
            backgroundColor: Colors.blueColor,
          }}
          onPress={() => {
            addDataHandler(data.images.original.url);
          }}>
          <Label>Add</Label>
          <Icon name={'plus'} size={25} color={'white'} />
        </LabelDivision>
      ) : (
        <LabelDivision
          style={{
            backgroundColor: Colors.successColor,
          }}>
          <Label>Added</Label>
          <Icon name={'checkbox-marked-circle'} size={25} color={'white'} />
        </LabelDivision>
      )}
    </Container>
  );
};

export default ListComponent;
