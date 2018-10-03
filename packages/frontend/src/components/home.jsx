// @flow
import '../styles/global.css';
import React, { Component } from 'react';
import type { Node } from 'react';
import { hot } from 'react-hot-loader';

class SearchBar extends Component {
  state = {
    query: '',
  }
 
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
 
  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <form>
          <input
            placeholder="Search for event..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
      </div>
      
    )
  }
}

// const Home = (): Node => (
//   <h1>HOME PAGE</h1>
// );


export default hot(module)(SearchBar);
