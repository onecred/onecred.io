

// const newElement = React.createElement;



// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     state = {
//       email: '',
//       name: '',
//       band: ''
//     };
    
//   }

//   render() {
//     return (
//       <div>
//         <h2>Lottery Contract</h2>
//         <p> 
//           This contract is managed by {this.state.manager}.
//           There are currently {this.state.players.length} people entered,
//           competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
//         </p>
//          <hr></hr>
//         <form onSubmit={this.onSubmit}>
//           <h4>
//             Want to try your luck?
//           </h4>
//           <div>
//             <label>Amount of ether to enter</label>
//             <input
//             value = {this.state.value}
//             onChange={event => this.setState({value: event.target.value})}
//             />
//           </div>
//           <button>
//             Enter
//           </button>
//         </form>
//         <h3></h3>
 
//         <hr></hr>
//        <h4> Ready to pick a winner?</h4>
//        <button onClick ={this.onClick}>Pick a winner!</button>
//         <hr></hr>
//        <h1>{this.state.message} </h1>
//       </div>
 
//      );
//    };
//    };


// document.querySelectorAll('.form_submission')
//   .forEach(domContainer => {
//     // Read the comment ID from a data-* attribute.
//     const commentID = parseInt(domContainer.dataset.commentid, 10);
//     ReactDOM.render(
//       newElement(LikeButton, { commentID: commentID }),
//       domContainer
//     );
//   });




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
// document.querySelectorAll('.form_submission')
//   .forEach(domContainer => {
//     // Read the comment ID from a data-* attribute.
//     const commentID = parseInt(domContainer.dataset.commentid, 10);
//     ReactDOM.render(
//       newElement(LikeButton, { commentID: commentID }),
//       domContainer
//     );
//   });