import React from 'react';
import styled from 'styled-components';
import {Alert} from 'react-native';
import {connect} from 'react-redux';
import {bookmarked} from '../../redux/Action';
import {getGifList} from '../../middileware/Api';
import SearchComponent from '../../components/HomeScreen/SearchComponent';
import LoaderComponent from '../../components/LoaderComponent';
const Container = styled.View`
  background-color: white;
  height: 100%;
  justify-content: center;
`;

const HomeScreenPresenter = ({...props}) => {
  const [gifResult, updateGifResult] = React.useState(null);

  const searchValue = value => {
    // updateGifResult(1);
    getGifList(value)
      .then(result => {
        if (Object.keys(result.data).length > 0) {
          props.navigation.navigate('GifListingScreen', {
            result,
          });
          // updateGifResult(null);
        } else {
          // updateGifResult(null);
          Alert.alert(
            'Developer Says',
            'No Results Found',
            [
              {
                text: 'ok',
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
        }
      })
      .catch(error => {});
  };
  return (
    <Container>
      {gifResult === 1 ? <LoaderComponent /> : null}
      {gifResult === null ? (
        <SearchComponent searchValue={searchValue} />
      ) : null}
    </Container>
  );
};
const mapStateToProps = state => ({state1: state.reducer});
const mapDispatchToProps = dispatch => ({
  bookmark: data => dispatch(bookmarked(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenPresenter);
