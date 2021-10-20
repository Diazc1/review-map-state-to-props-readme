import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'INCREASE_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'INCREASE_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
            <p>{this.props.items.length}</p>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.users.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items,
          users: state.users
          }
}

export default connect(mapStateToProps)(App);

// can also combile both to equal -> export default connect((state) => ({ items: state.items }))(App);
