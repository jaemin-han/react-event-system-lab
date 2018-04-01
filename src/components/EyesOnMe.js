// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.buttonOnFocus = this.buttonOnFocus.bind(this);
    this.buttonOnBlur = this.buttonOnBlur.bind(this);
  }

  buttonOnFocus() {
    console.log('Good!');
  }

  buttonOnBlur() {
    console.log('Hey! Eyes on me!');
  }


  render() {
    return (
      <button onFocus={this.buttonOnFocus} onBlur={this.buttonOnBlur}>Eyes on me, please!</button>
    );
  }
}

export default EyesOnMe;
