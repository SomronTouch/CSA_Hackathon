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

// const provinces = [nunavut, northwest, yukon, britishcolombia, alberta, saskatchewan, manitoba, quebec, ontario, newfoundland, newbrunswick, pei, novascotia]

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
    var nunavut = chart.series.push(new am4maps.MapPolygonSeries());
    nunavut.geodata = nu
    var northwest = chart.series.push(new am4maps.MapPolygonSeries());
    northwest.geodata = nt
    var yukon = chart.series.push(new am4maps.MapPolygonSeries());
    yukon.geodata = yt
    var britishcolombia = chart.series.push(new am4maps.MapPolygonSeries());
    britishcolombia.geodata = bc
    var alberta = chart.series.push(new am4maps.MapPolygonSeries());
    alberta.geodata = ab
    var saskatchewan = chart.series.push(new am4maps.MapPolygonSeries());
    saskatchewan.geodata = sk
    var manitoba = chart.series.push(new am4maps.MapPolygonSeries());
    manitoba.geodata = mb
    var quebec = chart.series.push(new am4maps.MapPolygonSeries());
    quebec.geodata = qc
    var ontario = chart.series.push(new am4maps.MapPolygonSeries());
    ontario.geodata = on
    var newfoundland = chart.series.push(new am4maps.MapPolygonSeries());
    newfoundland.geodata = nl
    var newbrunswick = chart.series.push(new am4maps.MapPolygonSeries());
    newbrunswick.geodata = nb
    var pei = chart.series.push(new am4maps.MapPolygonSeries());
    pei.geodata = pe
    var novascotia = chart.series.push(new am4maps.MapPolygonSeries());
    novascotia.geodata = ns
    
    // Configure series
    var nunavutTemplate = nunavut.mapPolygons.template;
    nunavutTemplate.tooltipText = "{name}";
    nunavutTemplate.fill = am4core.color("#74B266");

    var northwestTemplate = northwest.mapPolygons.template;
    northwestTemplate.tooltipText = "{name}";
    northwestTemplate.fill = am4core.color("#74B266");

    var yukonTemplate = yukon.mapPolygons.template;
    yukonTemplate.tooltipText = "{name}";
    yukonTemplate.fill = am4core.color("#74B266");

    var britishcolombiaTemplate = britishcolombia.mapPolygons.template;
    britishcolombiaTemplate.tooltipText = "{name}";
    britishcolombiaTemplate.fill = am4core.color("#74B266");

    var albertaTemplate = alberta.mapPolygons.template;
    albertaTemplate.tooltipText = "{name}";
    albertaTemplate.fill = am4core.color("#74B266");

    var saskatchewanTemplate = saskatchewan.mapPolygons.template;
    saskatchewanTemplate.tooltipText = "{name}";
    saskatchewanTemplate.fill = am4core.color("#74B266");

    var manitobaTemplate = manitoba.mapPolygons.template;
    manitobaTemplate.tooltipText = "{name}";
    manitobaTemplate.fill = am4core.color("#74B266");

    var quebecTemplate = quebec.mapPolygons.template;
    quebecTemplate.tooltipText = "{name}";
    quebecTemplate.fill = am4core.color("#74B266");

    var ontarioTemplate = ontario.mapPolygons.template;
    ontarioTemplate.tooltipText = "{name}";
    ontarioTemplate.fill = am4core.color("#74B266");

    var newfoundlandTemplate = newfoundland.mapPolygons.template;
    newfoundlandTemplate.tooltipText = "{name}";
    newfoundlandTemplate.fill = am4core.color("#74B266");

    var newbrunswickTemplate = newbrunswick.mapPolygons.template;
    newbrunswickTemplate.tooltipText = "{name}";
    newbrunswickTemplate.fill = am4core.color("#74B266");

    var peiTemplate = pei.mapPolygons.template;
    peiTemplate.tooltipText = "{name}";
    peiTemplate.fill = am4core.color("#74B266");

    var novascotiaTemplate = novascotia.mapPolygons.template;
    novascotiaTemplate.tooltipText = "{name}";
    novascotiaTemplate.fill = am4core.color("#74B266");

    // // Create hover state and set alternative fill color
    // var ontarioHighlight = ontarioTemplate.states.create("hover");
    // ontarioHighlight.properties.fill = am4core.color("#367B25");
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
