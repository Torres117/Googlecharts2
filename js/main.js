// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 0.5],
    ['Cebollas', 0.5],
    ['Aceitunas', 0.1],
    ['Queso', 3],
    ['Pepperoni', 2],
    ['Piña', 3],
    ['Jamón', 1]
  ]);

  ///SEGUNDA

  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300};
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('grafica'));
  chart.draw(data, options);
}
//SEGUNDO CHART
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data2 = google.visualization.arrayToDataTable([
          ['Year', 'Off', 'On'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options2 = {
          title: 'Tiempo de uso',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}

        };

        var chart2 = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart2.draw(data2, options2);
      }
//TERCERO
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
  var data3 = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Copper", 8.94, "#b87333"],
    ["Silver", 10.49, "silver"],
    ["Gold", 19.30, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"]
  ]);

  var view = new google.visualization.DataView(data3);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options3 = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 400,
    height: 300,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart3 = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart3.draw(view, options3);
}
//CUARTO
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
      var data4 = new google.visualization.DataTable();
      data4.addColumn('number', 'X');
      data4.addColumn('number', 'BTC');

      data4.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

      var options4 = {
        hAxis: {
          title: 'Tiempo'
        },
        vAxis: {
          title: 'Precio USD'
        },
        backgroundColor: '#f1f8e9'
      };

      var chart4 = new google.visualization.LineChart(document.getElementById('chart_div4'));
      chart4.draw(data4, options4);
    }
//QUINTO
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart5);

  function drawChart5() {
    var data5 = google.visualization.arrayToDataTable([
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
      // Treat first row as data as well.
    ], true);

    var options5 = {
      title: "ACCIONES DE BMV",
      legend:'none',
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    };

    var chart5 = new google.visualization.CandlestickChart(document.getElementById('chart_div5'));

    chart5.draw(data5, options5);
  }
//SEXTO
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart6);

      function drawChart6() {
        var data6 = google.visualization.arrayToDataTable([
          ['DEPORTE',  'MUJERES', 'HOMBRES'],
          ['NATACIÓN', 8.4,         7.9],
          ['GIMNASIA GRAL',     6.9,         6.5],
          ['ATLETISMO',        6.5,         6.4],
        ]);

        var options6 = {
          title: 'POPULARIDAD DE JUEGOS OLIMPICOS',
          isStacked: true
        };

        var chart6 = new google.visualization.SteppedAreaChart(document.getElementById('chart_div6'));

        chart6.draw(data6, options6);
      }