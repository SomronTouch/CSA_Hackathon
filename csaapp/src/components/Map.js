import React, {Component} from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_canadaHigh from "@amcharts/amcharts4-geodata/canadaHigh";


// default react
class Map extends Component {
  //  is used to create the chart.
  componentDidMount() {
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_canadaHigh;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");
  }

  // is used to cleanup the chart when it's done being used.
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  //  is used to create the <div> which the chart will be displayed inside of.
  render() {
    return (
      <div id="chartdiv" style={{ width: "75%", height: "75vh"}}></div>
    );
  }
}


export default Map;
