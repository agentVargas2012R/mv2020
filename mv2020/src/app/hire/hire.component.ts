import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/material";
import {ForceDirectedTree, ForceDirectedSeries} from "@amcharts/amcharts4/plugins/forceDirected";


am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  private chart: am4charts.XYChart;

  private skillChart: am4charts.XYChart;

  private day2DayChart: am4charts.PieChart3D;

  private academicChart: am4charts.XYChart3D;

  private keyWordChart: ForceDirectedTree;

  private salaryChart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.zone.runOutsideAngular(() => {

      //Line Chart
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;

      //XY Bar Chart
      let skillChart = am4core.create("skillDiv" , am4charts.XYChart);

      // Add data
      skillChart.data = [{
        "country": "USA",
        "visits": 2025
      }, {
        "country": "China",
        "visits": 1882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "UK",
        "visits": 1122
      }, {
        "country": "France",
        "visits": 1114
      }, {
        "country": "India",
        "visits": 984
      }, {
        "country": "Spain",
        "visits": 711
      }, {
        "country": "Netherlands",
        "visits": 665
      }, {
        "country": "Russia",
        "visits": 580
      }, {
        "country": "South Korea",
        "visits": 443
      }, {
        "country": "Canada",
        "visits": 441
      }, {
        "country": "Brazil",
        "visits": 395
      }];

      // Create axes

      var categoryAxis = skillChart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
        if (target.dataItem && target.dataItem.index) {
          return dy + 25;
        }
        return dy;
      });

      var valueAxis2 = skillChart.yAxes.push(new am4charts.ValueAxis());

      var skillSeries = skillChart.series.push(new am4charts.ColumnSeries());
      skillSeries.dataFields.valueY = "visits";
      skillSeries.dataFields.categoryX = "country";
      skillSeries.name = "Visits";
      skillSeries.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      skillSeries.columns.template.fillOpacity = .8;

      var columnTemplate = skillSeries.columns.template;
      columnTemplate.strokeWidth = 2;

      skillSeries.columns.template.adapter.add("fill", function(fill, target) {
        return skillChart.colors.getIndex(target.dataItem.index);
      });

      this.skillChart = skillChart;


      //Pie Chart Begins
      let day2DayChart = am4core.create("day2DayDiv", am4charts.PieChart3D);
      day2DayChart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      day2DayChart.legend = new am4charts.Legend();

      day2DayChart.data = [
        {
          country: "Lithuania",
          litres: 501.9
        },
        {
          country: "Czech Republic",
          litres: 301.9
        },
        {
          country: "Ireland",
          litres: 201.1
        },
        {
          country: "Germany",
          litres: 165.8
        },
        {
          country: "Australia",
          litres: 139.9
        },
        {
          country: "Austria",
          litres: 128.3
        },
        {
          country: "UK",
          litres: 99
        },
        {
          country: "Belgium",
          litres: 60
        },
        {
          country: "The Netherlands",
          litres: 50
        }
      ];

      var day2DayChartSeries = day2DayChart.series.push(new am4charts.PieSeries3D());
      day2DayChartSeries.dataFields.value = "litres";
      day2DayChartSeries.dataFields.category = "country";

      this.day2DayChart = day2DayChart;

      //academicDiv
      let academicChart = am4core.create("academicDiv", am4charts.XYChart3D);

      // Add data
      academicChart.data = [{
        "year": 2005,
        "income": 23.5,
        "color": academicChart.colors.next()
      }, {
        "year": 2006,
        "income": 26.2,
        "color": academicChart.colors.next()
      }, {
        "year": 2007,
        "income": 30.1,
        "color": academicChart.colors.next()
      }, {
        "year": 2008,
        "income": 29.5,
        "color": academicChart.colors.next()
      }, {
        "year": 2009,
        "income": 24.6,
        "color": academicChart.colors.next()
      }];

      // Create axes
      var academicChartAxis = academicChart.yAxes.push(new am4charts.CategoryAxis());
      academicChartAxis.dataFields.category = "year";
      academicChartAxis.numberFormatter.numberFormat = "#";
      academicChartAxis.renderer.inversed = true;

      var  academicChartValueAxis = academicChart.xAxes.push(new am4charts.ValueAxis());

      // Create series
      var academicSeries = academicChart.series.push(new am4charts.ColumnSeries3D());
      academicSeries.dataFields.valueX = "income";
      academicSeries.dataFields.categoryY = "year";
      academicSeries.name = "Income";
      academicSeries.columns.template.propertyFields.fill = "color";
      academicSeries.columns.template.tooltipText = "{valueX}";
      academicSeries.columns.template.column3D.stroke = am4core.color("#fff");
      academicSeries.columns.template.column3D.strokeOpacity = 0.2;
      this.academicChart = academicChart;

      // Create Force Directive Key Words
      var forceDirectedTreeChart = am4core.create("forceDirectedTreeChartDiv", ForceDirectedTree);

      var forceDirectedTreeNetworkSeries = forceDirectedTreeChart.series.push(new ForceDirectedSeries())
      forceDirectedTreeNetworkSeries.dataFields.linkWith = "linkWith";
      forceDirectedTreeNetworkSeries.dataFields.name = "name";
      forceDirectedTreeNetworkSeries.dataFields.id = "name";
      forceDirectedTreeNetworkSeries.dataFields.value = "value";
      forceDirectedTreeNetworkSeries.dataFields.children = "children";

      forceDirectedTreeNetworkSeries.nodes.template.label.text = "{name}"
      forceDirectedTreeNetworkSeries.fontSize = 8;
      forceDirectedTreeNetworkSeries.linkWithStrength = 0;

      var nodeTemplate = forceDirectedTreeNetworkSeries.nodes.template;
      nodeTemplate.tooltipText = "{name}";
      nodeTemplate.fillOpacity = 1;
      nodeTemplate.label.hideOversized = true;
      nodeTemplate.label.truncate = true;

      var linkTemplate = forceDirectedTreeNetworkSeries.links.template;
      linkTemplate.strokeWidth = 1;
      var linkHoverState = linkTemplate.states.create("hover");
      linkHoverState.properties.strokeOpacity = 1;
      linkHoverState.properties.strokeWidth = 2;

      nodeTemplate.events.on("over", function (event) {
          var dataItem = event.target.dataItem;
          dataItem.childLinks.each(function (link) {
              link.isHover = true;
          })
      })

      nodeTemplate.events.on("out", function (event) {
          var dataItem = event.target.dataItem;
          dataItem.childLinks.each(function (link) {
              link.isHover = false;
          })
      })

      forceDirectedTreeNetworkSeries.data = [
        {
            "name":"Phoebe",
            "value":102,
            "linkWith":[
              "Gunther"
            ],
            "children":[
              {
                  "name":"David",
                  "value":14
              },
              {
                  "name":"Roger",
                  "value":1
              },
              {
                  "name":"Duncan",
                  "value":1
              },
              {
                  "name":"Rob Dohnen",
                  "value":2
              },
              {
                  "name":"Ryan",
                  "value":5
              },
              {
                  "name":"Malcom",
                  "value":1
              },
              {
                  "name":"Robert",
                  "value":1
              },
              {
                  "name":"Sergei",
                  "value":1
              },
              {
                  "name":"Vince",
                  "value":2
              },
              {
                  "name":"Jason",
                  "value":1
              },
              {
                  "name":"Rick",
                  "value":2
              },
              {
                  "name":"Gary",
                  "value":7
              },
              {
                  "name":"Jake",
                  "value":2
              },
              {
                  "name":"Eric",
                  "value":3
              },
              {
                  "name":"Mike",
                  "value":18
              }
            ]
        },
        {
            "name":"Monica",
            "value":204,
            "linkWith":[
              "Rachel",
              "Chandler",
              "Ross",
              "Joey",
              "Phoebe"
            ],
            "children":[
              {
                  "name":"Paul the wine guy",
                  "value":1
              },
              {
                  "name":"Mr Geller",
                  "value":8
              },
              {
                  "name":"Mrs Geller",
                  "value":14
              },
              {
                  "name":"Aunt Lilian",
                  "value":2
              },
              {
                  "name":"Nana",
                  "value":1
              },
              {
                  "name":"Young Ethan",
                  "value":5
              },
              {
                  "name":"Ben",
                  "value":9
              },
              {
                  "name":"Fun Bobby",
                  "value":3
              },
              {
                  "name":"Richard",
                  "value":16
              },
              {
                  "name":"Mrs Green",
                  "value":4
              },
              {
                  "name":"Paolo2",
                  "value":1
              },
              {
                  "name":"Pete",
                  "value":10
              },
              {
                  "name":"Chip",
                  "value":1
              },
              {
                  "name":"Timothy (Burke)",
                  "value":1
              },
              {
                  "name":"Emily",
                  "value":17
              },
              {
                  "name":"Dr. Roger",
                  "value":3
              }
            ]
        },
        {
            "name":"Ross",
            "value":216,
            "linkWith":[
              "Joey",
              "Phoebe",
              "Mrs Geller",
              "Aunt Lilian",
              "Mrs Bing",
              "Ben",
              "Mrs Green",
              "Emily"
            ],
            "children":[
              {
                  "name":"Carol",
                  "value":10
              },
              {
                  "name":"Celia",
                  "value":2
              },
              {
                  "name":"Julie",
                  "value":6
              },
              {
                  "name":"Chloe",
                  "value":1
              },
              {
                  "name":"Bonnie",
                  "value":4
              },
              {
                  "name":"Messy Girl (Cheryl)",
                  "value":5
              },
              {
                  "name":"Jill",
                  "value":1
              },
              {
                  "name":"Elizabeth",
                  "value":8
              },
              {
                  "name":"Aunt Millie",
                  "value":2
              },
              {
                  "name":"Mona",
                  "value":11
              },
              {
                  "name":"Emma",
                  "value":7
              },
              {
                  "name":"Charlie",
                  "value":13
              }
            ]
        },
        {
            "name":"Chandler",
            "value":167,
            "linkWith":[
              "Joey",
              "Phoebe"
            ],
            "children":[
              {
                  "name":"Aurora",
                  "value":2
              },
              {
                  "name":"Jill Goodacre",
                  "value":1
              },
              {
                  "name":"Janice",
                  "value":12
              },
              {
                  "name":"Mrs Bing",
                  "value":6
              },
              {
                  "name":"Nina",
                  "value":1
              },
              {
                  "name":"Susie",
                  "value":5
              },
              {
                  "name":"Mary Theresa",
                  "value":1
              },
              {
                  "name":"Ginger",
                  "value":2
              },
              {
                  "name":"Joanna",
                  "value":5
              },
              {
                  "name":"Kathy",
                  "value":9
              },
              {
                  "name":"Mr Bing",
                  "value":1
              }
            ]
        },
        {
            "name":"Rachel",
            "value":158,
            "linkWith":[
              "Chandler",
              "Ross",
              "Joey",
              "Phoebe",
              "Mr Geller",
              "Mrs Geller"
            ],
            "children":[
              {
                  "name":"Paolo",
                  "value":5
              },
              {
                  "name":"Barry",
                  "value":1
              },
              {
                  "name":"Dr Green",
                  "value":3
              },
              {
                  "name":"Mark3",
                  "value":1
              },
              {
                  "name":"Josh",
                  "value":2
              },
              {
                  "name":"Gunther",
                  "value":2
              },
              {
                  "name":"Joshua",
                  "value":3
              },
              {
                  "name":"Danny",
                  "value":1
              },
              {
                  "name":"Mr. Zelner",
                  "value":1
              },
              {
                  "name":"Paul Stevens",
                  "value":3
              },
              {
                  "name":"Tag",
                  "value":4
              },
              {
                  "name":"Melissa",
                  "value":1
              },
              {
                  "name":"Gavin",
                  "value":2
              }
            ]
        },
        {
            "name":"Joey",
            "value":88,
            "linkWith":[
              "Phoebe",
              "Janice",
              "Mrs Green",
              "Kathy",
              "Emily",
              "Charlie"
            ],
            "children":[
              {
                  "name":"Lorraine",
                  "value":2
              },
              {
                  "name":"Melanie",
                  "value":2
              },
              {
                  "name":"Erica",
                  "value":2
              },
              {
                  "name":"Kate",
                  "value":4
              },
              {
                  "name":"Lauren",
                  "value":2
              },
              {
                  "name":"Estelle",
                  "value":1
              },
              {
                  "name":"Katie",
                  "value":2
              },
              {
                  "name":"Janine",
                  "value":9
              },
              {
                  "name":"Erin",
                  "value":1
              },
              {
                  "name":"Cecilia",
                  "value":3
              }
            ]
        }
      ];

      this.keyWordChart = forceDirectedTreeChart;

      //SALARY START
      //Line Chart
      let salaryChart = am4core.create("salaryChartDiv", am4charts.XYChart);

      salaryChart.paddingRight = 20;

      let salaryData = [];
      let salaryVisits = 10;
      for (let i = 1; i < 366; i++) {
        salaryVisits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        salaryData.push({ date: new Date(2018, 0, i), name: "name" + i, value: salaryVisits });
      }

      salaryChart.data = salaryData;

      let salaryChartAxis = salaryChart.xAxes.push(new am4charts.DateAxis());
      salaryChartAxis.renderer.grid.template.location = 0;

      let salaryChartAxisValueAxis = salaryChart.yAxes.push(new am4charts.ValueAxis());
      salaryChartAxisValueAxis.tooltip.disabled = true;
      salaryChartAxisValueAxis.renderer.minWidth = 35;

      let salaryChartSeries = salaryChart.series.push(new am4charts.LineSeries());
      salaryChartSeries.dataFields.dateX = "date";
      salaryChartSeries.dataFields.valueY = "value";

      salaryChartSeries.tooltipText = "{valueY.value}";
      salaryChart.cursor = new am4charts.XYCursor();

      let salaryChartScrollbarX = new am4charts.XYChartScrollbar();
      salaryChartScrollbarX.series.push(series);
      salaryChart.scrollbarX = salaryChartScrollbarX;

      this.salaryChart = salaryChart;

    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {

      if (this.chart) {
        this.chart.dispose();
      }

      if(this.skillChart){
        this.skillChart.dispose();
      }

      if(this.keyWordChart){
        this.keyWordChart.dispose();
      }

      if(this.salaryChart){
        this.salaryChart.dispose();
      }
    });
  }

}
