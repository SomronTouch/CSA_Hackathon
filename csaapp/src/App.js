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

// default react
export default function App(){
  const [fires, setNewFire] = useState(
    [])
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    fetch('http://localhost:8080/fires')
      .then(res => res.json())
      .then(json => {
        if(fires.length !== json.length) setNewFire(json)
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, [fires])

  return(
    <Router>
      <div style={styles}>
        <Header/>
        <Switch>
          <Route exact path="/">
          {!isLoading && <Map fires={fires}/>}
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
