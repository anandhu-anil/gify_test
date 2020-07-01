import React, {Component} from 'react';
import HomeScreenPresenter from './HomeScreenPresenter';

class HomeScreenContainer extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <HomeScreenPresenter navigation={this.props.navigation} />;
  }
}

export default HomeScreenContainer;
