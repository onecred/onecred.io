'use strict';

const newElement = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    state = {
      email: '',
      name: '',
      band: ''
    };
    
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return newElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked comment number ' + this.props.commentID;
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.form_submission')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      newElement(LikeButton, { commentID: commentID }),
      domContainer
    );
  });