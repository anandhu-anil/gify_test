import React, {Component} from 'react';
import BookmarkedScreenPresenter from './BookmarkedScreenPresenter';

class CommentScreenContainer extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <BookmarkedScreenPresenter navigation={this.props.navigation} />;
  }
}

export default CommentScreenContainer;
