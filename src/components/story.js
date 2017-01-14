import React, { Component } from 'react';
import '../styling/story.css';
import data from '../data.js';
import d3 from 'd3';
import NVD3Chart from 'react-nvd3';

var VCData = window.innerWidth < 2000 ? data.altVCData : data.VCData;
var chartWidth = window.innerWidth < 900 ? 0.8 * window.innerWidth : 0.45 * window.innerWidth

class Story extends Component {



    render() {
        return (
            <div id="Story">
                <div className="content1">
                    <h2> The 4th best city in the US for entrepreneurs!</h2>
                    <h6> Entrepreneur Magazine </h6>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 ">
                        <div className="accolade">
                            <h3> Charlottesville is also the fastest growing venture capital ecosystem in the nation.</h3>
                            <h5>(US National Venture Capital Association)</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 ">
                        <div className="data">
                            <NVD3Chart id="barChart" showLabels={false} type="discreteBarChart" width={chartWidth} height={window.outerHeight / 3} showLegend={false} datum={VCData} x="label" y="value" />
                            <h5> VC Investment Compound Growth Rate 2010-2015 (%) </h5>
                        </div>
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

export default Story;