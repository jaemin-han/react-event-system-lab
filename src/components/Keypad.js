// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();

    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword() {
    console.log('Enter Password...');
  }
  render() {
    return (
      <input type="password" onKeyUp={this.handleInputPassword}/>
    );
  }
}

export default Keypad;
