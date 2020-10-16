import React, {Component} from 'react';


import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import canada from "@amcharts/amcharts4-geodata/region/canada/canadaCountiesHigh";

// default react
class Map extends Component {

  //  is used to create the chart.
  componentDidMount() {
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    // Set projection
    chart.projection = new am4maps.projections.Miller();

     var series = chart.series.push(new am4maps.MapPolygonSeries())
     series.geodata = canada
     var template = series.mapPolygons.template
     template.tooltipText = "{name}"
     template.fill = am4core.color("#74B266")
     var highlight = template.states.create("hover")
     highlight.properties.fill = am4core.color("#367B25");

    var imageSeries = chart.series.push(new am4maps.MapImageSeries());

    var imageSeriesTemplate = imageSeries.mapImages.template;
    var marker = imageSeriesTemplate.createChild(am4core.Image);
    marker.href = "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg" ;
    marker.width = 20;
    marker.height = 20;
    marker.nonScaling = true;
    marker.tooltipText = "{title}";
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "bottom";

    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    if (this.props.fires) {
      imageSeries.data = this.props.fires.map((fire) => { return {"longitude": fire.location[1], "latitude": fire.location[0], "title": 'fire'}})
    }
    console.log(this.props.fires)
    console.log(imageSeries.data)
    template.propertyFields.fill = "fill";
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
