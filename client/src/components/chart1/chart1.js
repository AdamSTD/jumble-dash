import React, { Component } from 'react';
var Chart = require("chart.js")

class Chart1 extends Component {

  constructor(props) {
    super(props)
    this.chart1Ref = React.createRef();
    this.state = {
      budget: props.budget
    }
  };

  componentDidMount() {
    console.log(this.state.budget)
    this.chart1 = new Chart(this.chart1Ref.current, {
      type: 'doughnut',
      data: {
        labels: ["Total Budget"],
        datasets: [{
          data: [100],
          backgroundColor: ['red', 'yellow', 'blue']
        }]
      }
    });
  }

  render() {
    return (
      <canvas className='chart' ref={this.chart1Ref} />
    )
  };

};

export default Chart1;