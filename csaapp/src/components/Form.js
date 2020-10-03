import React from 'react';

// default react
const Form = (props) => {

  const [fires, newFire] = useState([])
  const _onSubmit = (newFire) => {

    this.state.setState({fires: [...props.fires, newFire]})
  }
  return(
      <form onSubmit={_onSubmit} >
        <input />
        <input />
        <div>{this.state.text? this.state.text : 'Submit A Fire'}</div>
      </form>
  )
}

const styles = {

}

export default Form;
