import React, {Component} from 'react';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {size : 2}
  }
  render(){
    return(
      <table border-collapse = "collapse" border = "1px solid #000" width = "400px">
        <thead>
          <tr background= "#eee">
            <th border= "1px solid #ccc" padding = "6px" background = "#333" text-align= "left" color = "white" font-weight = "bold">Region</th>
            <th border= "1px solid #ccc" padding = "6px" background = "#333" text-align= "left" color = "white" font-weight = "bold">Number of Active Wildfires</th>
          </tr>
        </thead>
        <tbody>
          <tr background= "#eee">
            <td padding = "10px" border= "1px solid #ccc" border-collapse = "collapse">1</td>
            <td padding = "10px" border= "1px solid #ccc" border-collapse = "collapse">Mark</td>
          </tr>
          <tr background= "#eee">
            <td padding = "10px" border= "1px solid #ccc" border-collapse = "collapse">2</td>
            <td padding = "10px" border= "1px solid #ccc" border-collapse = "collapse">Jacob</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table;