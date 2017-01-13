import React, { Component } from 'react';
import '../styling/story.css';
import data from '../data.js';
import d3 from 'd3';
import NVD3Chart from 'react-nvd3';

var VCData = data.VCData

class Story extends Component {

    // nv.addGraph(function() {
    //     var chart = nv.models.discreteBarChart()
    //         .x(function (d) { return d.label })
    //         .y(function (d) { return d.value })
    //         .staggerLabels(true)
    //         .tooltips(false) 
    //         .showValues(true) 
    //         .transitionDuration(350)
    //         ;

    //     d3.select('#chart svg')
    //         .datum(exampleData())
    //         .call(chart);

    //     nv.utils.windowResize(chart.update);

    //     return chart;
    // });
    // <NVD3Chart id="barChart" type="discreteBarChart" datum={VCData} x="label" y="value"/>
    render() {
        if (window.innerWidth > 1000){
        return (
            <div id="Story">
                    <div className="content1">
                        <h2> The 4th best city in the US for entrepreneurs!</h2>
                        <h6> Entrepreneur Magazine </h6>
                    </div>
                    <div className="content2">
                        <h3> Charlottesville is also the fastest growing venture capital ecosystem in the nation.</h3>
                        <h5>(US National Venture Capital Association)</h5>
                    </div>
                        <div className="data">
                             <h5> VC Investment Compound Growth Rate 2010-2015 (%) </h5>
                             <NVD3Chart id="barChart" showLabels={false} type="discreteBarChart" width={window.innerWidth*0.5} height={window.innerHeight/3} showLegend={false} title={'TITLE'} datum={VCData} x="label" y="value"/>
                        </div>
                    <div className="content3">
                        <h3> And we're America's 3rd best city to live in.</h3>
                        <h6>(NY Post)</h6>
                    </div>
                </div>
                );
        }
        if (window.innerWidth < 1000) {
        return (
            <div id="Story">
                <div className="accolade1">
                    <div className="content1">
                        <h2> The 4th best city in the US for entrepreneurs!</h2>
                        <h6> Entrepreneur Magazine </h6>
                    </div>
                    <div className="content2-sm">
                        <h3> Charlottesville is also the fastest growing venture capital ecosystem in the nation.</h3>
                        <h5>(US National Venture Capital Association)</h5>
                    </div>
                        <div className="data-sm">
                             <h5> VC Investment Compound Growth Rate 2010-2015 (%) </h5>
                             <NVD3Chart id="barChart" showLabels={false} type="discreteBarChart" width={window.innerWidth} height={window.innerHeight/3} showLegend={false} title='TITLE' datum={VCData} x="label" y="value"/>
                        </div>
                    </div>
                    <div className="content3">
                        <h3> And we're America's 3rd best city to live in.</h3>
                        <h6>(NY Post)</h6>
                    </div>
                </div>
                );
        }
    }
}

export default Story;