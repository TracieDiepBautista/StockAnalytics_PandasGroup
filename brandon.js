
// function get data 
function getData() {
  var dropdown = d3.select("#selectData");
  var dataset = dropdown.property("value");
  buildcharts(dataset)

}
// event lister
d3.selectAll("#selectData").on("change", getData);

// initial page (Home page)
// FUNCTION 1, set init() for dashboard and do dropdown button
function buildcharts(dataset) {

  // function tracie(BankValue) {

  console.log(dataset)


  d3.json(dataset).then((data) => {
    // console.log(data)
    // console.log(data[0].Name)

    let bankname = data.map(x => x.Name)
    console.log(bankname)

    let close_price = data.map(y => y.close)
    console.log(close_price)

    let banktime = data.map(z => z.date)
    console.log(banktime)

    let bankvolumes = data.map(b => b.volume)
    console.log(bankvolumes)

    let bubblebankvolumes = data.map(b => b.volume / 1000000)
    console.log(bubblebankvolumes)

    var trace1 = {
      x: banktime,
      y: close_price,
      text: bankname,
      type: "scatter",
      marker: { color: "red" }
    }

    var data = [trace1]

    var layout = {
      title: `${bankname[0]} Time Series Plot`,
      xaxis: { title: "Observed time (one-year 2018)" },
      yaxis: { title: "Close Prices" }
    }

    Plotly.newPlot("line", data, layout)


    // create a trace for BUBBLE chart: 


    var bank_bub_values = [{
      x: banktime,
      y: bankvolumes,
      text: bankvolumes,
      mode: "markers",
      marker: {
        color: bankvolumes,
        size: bubblebankvolumes,
        colorscale: "Earth"
      }
    }]

    // Define bubble layout format:   
    var bank_bub_layout = {
      title: `${bankname[0]} Bubble Plot`,
      xaxis: { title: "Bank stocks" },
      yaxis: { title: "Volume" }
    }

    Plotly.newPlot("bubble", bank_bub_values, bank_bub_layout);
    // Data not available pass this line 



    var trace1 = {
  
      x: banktime, 
      
      close: [120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995], 
      
      decreasing: {line: {color: '#7F7F7F'}}, 
      
      high: [120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002], 
      
      increasing: {line: {color: '#17BECF'}}, 
      
      line: {color: 'rgba(31,119,180,1)'}, 
      
      low: [118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003], 
      
      open: [118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007], 
      
      type: 'candlestick', 
      xaxis: 'x', 
      yaxis: 'y'
    };
    
    var data = [trace1];
    
    var layout = {
      dragmode: 'zoom', 
      margin: {
        r: 10, 
        t: 25, 
        b: 40, 
        l: 60
      }, 
      showlegend: false, 
      xaxis: {
        autorange: true, 
        rangeslider: {range: ['2017-01-17 12:00', '2017-02-10 12:00']}, 
        title: 'Date', 
        type: 'date'
      }, 
      yaxis: {
        autorange: true, 
        type: 'linear'
      },
      
      annotations: [
        {
          x: '2017-01-31',
          y: 0.9,
          xref: 'x',
          yref: 'paper',
          text: 'largest movement',
          font: {color: 'magenta'},
          showarrow: true,
          xanchor: 'right',
          ax: -20,
          ay: 0
        }
      ],
      
      shapes: [
          {
              type: 'rect',
              xref: 'x',
              yref: 'paper',
              x0: '2017-01-31',
              y0: 0,
              x1: '2017-02-01',
              y1: 1,
              fillcolor: '#d3d3d3',
              opacity: 0.2,
              line: {
                  width: 0
              }
          }
        ]
    };
    
    Plotly.newPlot('myDiv', data, layout);











































  });
}

function init() {
  buildcharts("resources/bank30.json");

}
init();

