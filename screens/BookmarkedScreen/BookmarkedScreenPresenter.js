import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Header from '../../components/BookmarkedScreen/Header';
import HomeList from '../../components/BookmarkedScreen/HomeList';

const Container = styled.View``;

const BookmarkedScreenPresenter = ({...props}) => {
  return (
    <Container>
      <Header navigation={props.navigation} />
      <HomeList savedBookmark={props.savedBookmark} />
    </Container>
  );
};
const mapStateToProps = state => ({savedBookmark: state.reducer});
export default connect(mapStateToProps)(BookmarkedScreenPresenter);
