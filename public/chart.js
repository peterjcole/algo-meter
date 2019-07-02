var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Performance',
        backgroundColor: '#dc906b',
        data: [
          { x: 5000, y: 0.3055325999855995 },
          { x: 10000, y: 0.6431235998868943 },
          { x: 15000, y: 0.8516421012580395 },
          { x: 20000, y: 1.2046813003718853 },
          { x: 25000, y: 1.5069694012403487 },
          { x: 30000, y: 1.9995213009417057 },
          { x: 35000, y: 2.3062109999358653 },
          { x: 40000, y: 2.692206399142742 },
          { x: 45000, y: 3.0560349993407727 },
          { x: 50000, y: 3.404407300055027 },
          { x: 55000, y: 4.122417099028826 },
          { x: 60000, y: 4.38489959910512 },
          { x: 65000, y: 4.540875701606273 },
          { x: 70000, y: 4.959079400449991 },
          { x: 75000, y: 5.255584598332644 },
          { x: 80000, y: 5.603712800145149 },
          { x: 85000, y: 6.221219699829817 },
          { x: 90000, y: 6.401622499525547 },
          { x: 95000, y: 6.929891798645258 },
          { x: 100000, y: 7.193016301840544 }
        ]
      }]
    },

    options: {
      scales: {
        xAxes: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: { 
              display: true,
              labelString: 'Number of array items' 
            }
            // ticks: {
            //   maxTicksLimit: 100,
            //   stepSize: 5000
            // }
        }],
        yAxes: [{
          scaleLabel: { 
            display: true,
            labelString: 'Mean time to execute (ms)' 
          }
        }]
      },
 
    }
});

    // The data for our dataset
    // data: {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [{
    //         label: 'My First dataset',
    //         backgroundColor: 'rgb(255, 99, 132)',
    //         borderColor: 'rgb(255, 99, 132)',
    //         data: [0, 10, 5, 2, 20, 30, 45]
    //     }]
    // },

    // Configuration options go here
