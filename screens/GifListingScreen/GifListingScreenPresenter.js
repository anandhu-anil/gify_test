import React from 'react';
import styled from 'styled-components';
import Header from '../../components/GifListingScreen/Header';
import GifList from '../../components/GifListingScreen/GifList';
import {connect} from 'react-redux';
import {bookmarked} from '../../redux/Action';
const Container = styled.View``;

const GifListingScreenPresenter = ({...props}) => {
  const bookmarkData = data => {
    props.bookmark(data);
  };

  return (
    <Container>
      <Header navigation={props.navigation} />
      <GifList
        gifList={props.navigation.state.params.result.data}
        bookmarkData={bookmarkData}
        savedBookmarks={props.savedBookmarks}
      />
    </Container>
  );
};
const mapStateToProps = state => ({savedBookmarks: state.reducer});
const mapDispatchToProps = dispatch => ({
  bookmark: data => dispatch(bookmarked(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GifListingScreenPresenter);
