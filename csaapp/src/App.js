import React, {Component} from 'react';
import Header from './components/Header'
import About from './components/About'
import Map from './components/Map'

import {
  MemoryRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import SubmitAFire from './components/Form'
import getFires from './data/getFires'

// default react
class App extends Component {
  constructor() {
    super()
    this.state = {
      "fires":
      [
        {
        "location": [19.6929,-25.9254],
        "risk": 8,
        "isCurrentOnFire": true,
        "reportOnFire": false
        }
      ]
    }
  }

  async componentDidMount() {
    this.setState({fires: await getFires()})
  }

  render() {
    return (
      <Router>
        <div style={styles}>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Map/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


const styles = {
  width: "100%",
  textAlign: 'middle'
}


export default App;
