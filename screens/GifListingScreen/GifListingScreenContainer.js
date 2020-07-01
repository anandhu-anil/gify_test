import React, {Component} from 'react';
import GifListingScreenPresenter from './GifListingScreenPresenter';

class GifListingScreenContainer extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <GifListingScreenPresenter navigation={this.props.navigation} />;
  }
}

export default GifListingScreenContainer;
