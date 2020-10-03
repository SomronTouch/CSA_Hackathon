import React, {Component} from 'react';
import Map from './components/Map'
//import SubmitAFire from './components/Form'

// default react
class App extends Component {

  render() {
    return (
      <div className='container' style={styles.container}>
        <Map/>
      
      </div>
    );
  }
}

const styles = {
  width: "100%",
  textAlign: 'middle'
}


export default App;
