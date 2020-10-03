import React, {Component} from 'react';

// default react
class Form extends Component {
  constructor() {
    super();
    this.state = {text: ''}
  }
  //  is used to create the <div> which the chart will be displayed inside of.
  render() {
    const _onSubmit = (text) => {
      this.state.setState({text:text})
    }
    return (
      <form>
        <input onSubmit={_onSubmit} />
        <div>{this.state.text? this.state.text : 'Submit A Fire'}</div>
      </form>
    );
  }
}


export default Form;
