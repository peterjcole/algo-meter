let chart = null

$(document).ready(function() {
  getDataWithSpecificFn('sort', 'array', '');
})

$('#run').click(function(){
  const fn = $('#function').val()
  const type = $('#type').val()
  const secondArgument = $('#secondArgument').val()
  getDataWithSpecificFn(fn, type, secondArgument)
})

function getData() {
  $.get('./run', function(data) {
    $('.js-current-count').text(data.count);
  }).done(function(result){
    console.log(result)
    $('.myChart').empty()
    renderChart(result, "sort")
  })
}

function getDataWithSpecificFn(fn, type, secondArgument) {
  $.get(`/run/type/${type}/function/${fn}/secondArgument/${secondArgument}`, function(data) {
    $('.js-current-count').text(data.count);
  }).done(function(result){
    console.log(result)
    $('.myChart').empty()
    renderChart(result, fn)
  })
}

// function getDataForArrayFunction(fn, secondArgument) {
//   $.get(`/run/function/${fn}/secondArgument/${secondArgument}`, function(data) {
//     $('.js-current-count').text(data.count);
//   }).done(function(result){
//     console.log(result)
//     $('.myChart').empty()
//     renderChart(result, fn)
//   })
// }

// function getDataForStandardFunction(fn, secondArgument) {
//   $.get(`/runStandard/function/${fn}/secondArgument/${secondArgument}`, function(data) {
//     $('.js-current-count').text(data.count);
//   }).done(function(result){
//     console.log(result)
//     $('.myChart').empty()
//     renderChart(result, fn)
//   })
// }

function renderChart(result, fn, type, secondArgument) {
  $('#myChart').remove(); // this is my <canvas> element
  $('#charts').append('<canvas id="myChart"><canvas>');
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      data: {
        datasets: [{
          label: `Performance of ${type} function '${fn}' with ${secondArgument} argument`,
          backgroundColor: '#dc906b',
          data: result,
          fill: false,
          lineTension: 0.4
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
