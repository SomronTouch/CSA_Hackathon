import React, {Component} from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_canadaHigh from "@amcharts/amcharts4-geodata/canadaHigh";
import nu from "@amcharts/amcharts4-geodata/region/canada/nuHigh";
import nt from "@amcharts/amcharts4-geodata/region/canada/ntHigh";
import yt from "@amcharts/amcharts4-geodata/region/canada/ytHigh";
import bc from "@amcharts/amcharts4-geodata/region/canada/bcHigh";
import sk from "@amcharts/amcharts4-geodata/region/canada/skHigh";
import ab from "@amcharts/amcharts4-geodata/region/canada/abHigh";
import mb from "@amcharts/amcharts4-geodata/region/canada/mbHigh";
import qc from "@amcharts/amcharts4-geodata/region/canada/qcHigh";
import on from "@amcharts/amcharts4-geodata/region/canada/onHigh";
import nl from "@amcharts/amcharts4-geodata/region/canada/nlHigh";
import nb from "@amcharts/amcharts4-geodata/region/canada/nbHigh";
import pe from "@amcharts/amcharts4-geodata/region/canada/peHigh";
import ns from "@amcharts/amcharts4-geodata/region/canada/nsHigh";

const provinces = [
  ['nunavut', nu],
  ['northwest', nt],
  ['yukon', yt],
  ['britishcolombia', bc],
  ['alberta', ab],
  ['saskatchewan', sk],
  ['manitoba', mb],
  ['quebec', qc],
  ['ontario', on],
  ['newfoundland', nl],
  ['newbrunswick', nb],
  ['pei', pe],
  ['novascotia', ns]
]

// default react
class Map extends Component {
  //  is used to create the chart.
  componentDidMount() {
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Set map definition
    chart.geodata = am4geodata_canadaHigh;
    
    var provinceSeries = provinces.map( province => {
     var series = chart.series.push(new am4maps.MapPolygonSeries())
     series.geodata = province[1]
     var template = series.mapPolygons.template
     template.tooltipText = "{CDNAME}"
     template.fill = am4core.color("#74B266")
     var highlight = template.states.create("hover")
     highlight.properties.fill = am4core.color("#367B25");

      return {
        province: province[0],
        geodata: province[1],
        series: series,
        template: template,
        highlight: highlight
      }
    })
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
