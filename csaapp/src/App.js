import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import About from './components/About'
import Map from './components/Map'
import Table2 from './components/Table2'

import {
  MemoryRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import SubmitAFire from './components/Form'
import getFires from './data/getFires'

// default react
export default function App(){
  const [fires, setNewFire] = useState(
    [
      {
      "location": [49.282729,-123.120738],
      "risk": 8,
      "isCurrentOnFire": true,
      "reportOnFire": false
      }
    ])

  useEffect(() => {
    const fires = async () => await getFires()
    setNewFire(fires)
  }, [])

  return(
      <Router>
        <div style={styles}>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Map fires={fires}/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/activeFires">
              <Table2 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}


const styles = {
  width: "100%",
  textAlign: 'middle'
}
