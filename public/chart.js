let chart = null

$('#run').click(function(){
  getDataWithSpecificFn($('#function').val())
})

function getData() {
  $.get('./run', function(data) {
    $('.js-current-count').text(data.count);
  }).done(function(result){
    console.log(result)
    $('.myChart').empty()
    renderChart(result)
  })
}

function getDataWithSpecificFn(fn) {
  console.log(fn)
  $.get(`/run/function/${fn}`, function(data) {
    $('.js-current-count').text(data.count);
  }).done(function(result){
    console.log(result)
    $('.myChart').empty()
    renderChart(result)
  })
}


function renderChart(result) {
  $('#myChart').remove(); // this is my <canvas> element
  $('#charts').append('<canvas id="myChart"><canvas>');
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Performance',
          backgroundColor: '#dc906b',
          data: result
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
}


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
