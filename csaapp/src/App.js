import React, {Component} from 'react';
import Map from './components/Map'
//import SubmitAFire from './components/Form'

// default react
class App extends Component {

  //  is used to create the <div> which the chart will be displayed inside of.
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
