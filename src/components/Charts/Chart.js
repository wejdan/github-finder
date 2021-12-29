import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Bar2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";


// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Bar2D, CandyTheme);

// STEP 3 - Creating the JSON object to store the chart configurations


const Chart = (props) => {
  let showPercentValues=props.showPercentValues || "1"
  let theme=props.theme || "fusion"
  let yAxisName=props.yAxisName || null;
  let xAxisName=props.xAxisName || null;
  const chartConfigs = {
    type: props.type, // The chart type
    width:"100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: props.text,
        //Set the chart subcaption
  
        //Set the theme for your chart
        theme: "fusion",
        pieRadius:"35%",
        showPercentValues:showPercentValues,
        theme:theme,
        yAxisName:yAxisName,
        xAxisName:xAxisName,
        xAxisNameFontSize:"16px",
        yAxisNameFontSize:"16px",
  
      },
      // Chart Data
      data: props.data
    }
  };
  console.log(props.text,props.data)
  return <ReactFC {...chartConfigs} />
};

export default Chart;
