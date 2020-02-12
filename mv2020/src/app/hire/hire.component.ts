import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/material";
import {ForceDirectedTree, ForceDirectedSeries} from "@amcharts/amcharts4/plugins/forceDirected";


//am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  private chart: am4charts.XYChart;

  private skillChart: am4charts.XYChart;

  private appServerChart: am4charts.XYChart;

  private toolsChart: am4charts.XYChart;

  private cloudsChart: am4charts.XYChart;

  private day2DayChart: am4charts.PieChart3D;

  private academicChart: am4charts.XYChart3D;

  private backEndChart: am4charts.XYChart3D;

  private keyWordChart: ForceDirectedTree;

  private salaryChart: am4charts.XYChart;

  private credentialsChart: am4charts.SlicedChart;

  showSpinner: boolean = true;

  constructor(private zone: NgZone) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 5000);
   }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.zone.runOutsideAngular(() => {
      am4core.options.minPolylineStep = 20;
      am4core.options.queue = true;
      am4core.options.onlyShowOnViewport = true;

      this.createProfessionalExperienceChart();
      this.createSkillsChart();
      this.createAcademicChart();
      this.createBackEndChart();
      this.createAppServerChart();
      this.createToolChart();
      this.createCloudsChart();
      this.createDay2DayChart();
      this.createCredentialsChart();
      this.createForceKeywordDirectedGraph();
    });
  }

  createProfessionalExperienceChart() {
      //Line Chart
      var chart = am4core.create("chartdiv", am4charts.XYChart);

      var value = 50;

      let firstJobDate = new Date(2002, 2);
      firstJobDate.setHours(0,0,0,0);

      let secondJobDate  = new Date(2003, 2);
      secondJobDate.setHours(0,0,0,0);

      let thirdJobDate  = new Date(2007, 7);
      thirdJobDate.setHours(0,0,0,0);

      let fourthJobDate  = new Date(2010, 3);
      fourthJobDate.setHours(0,0,0,0);

      let fifthJobDate  = new Date(2012, 6);
      fifthJobDate.setHours(0,0,0,0);

      let sixJobDate  = new Date(2014, 2);
      sixJobDate.setHours(0,0,0,0);

      var data = [
        {date: firstJobDate, name: "Motorola", jobTitle: "GSM/CDMA System Integration Engineer", value: .4},
        {date: secondJobDate, name: "Tyco", jobTitle: "Middelware Developer", value: 1.4},
        {date: thirdJobDate, name: "Rewards Network", jobTitle: "Senior Java/Spring Application Developer", value: 5.4},
        {date: fourthJobDate, name: "Interval International", jobTitle: "Senior Java Consultant", value: 8.4},
        {date: fifthJobDate, name: "Engilty Corporation", jobTitle: "Technical Lead", value: 10.4},
        {date: sixJobDate, name: "Intellipoint Corporation", jobTitle: "Full-Stack Developer\nIndependent Contractor", value: 15.4},
      ];


      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.tooltipText = "[bold] {jobTitle} [/] \n {name}, {value} years total experience"

      series.tooltip.pointerOrientation = "vertical";

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;

      //chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();
      this.chart = chart;
  }

  createSkillsChart() {
    //XY Bar Chart
    let skillChart = am4core.create("skillDiv" , am4charts.XYChart);

    // Add data
      skillChart.data = [
      {
        "skill": "JS",
        "years": 17
      }, {
        "skill": "Java/J2EE",
        "years": 15
      }, {
        "skill": "HTML",
        "years": 17
      }, {
        "skill": "XML",
        "years": 17
      }, {
        "skill": "SQL",
        "years": 10
      }, {
        "skill": "Groovy",
        "years": 8
      }, {
        "skill": "Shell",
        "years": 17
      }, {
        "skill": "LDAP",
        "years": 2
      }, {
        "skill": "CSS",
        "years": 10
      }
    ];

    // Create axes

    var categoryAxis = skillChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "skill";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 5 ;

    /*
    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index) {
        return dy + 25;
      }
      return dy;
    });
*/
    var valueAxis2 = skillChart.yAxes.push(new am4charts.ValueAxis());


    var skillSeries = skillChart.series.push(new am4charts.ColumnSeries());
    skillSeries.dataFields.valueY = "years";
    skillSeries.dataFields.categoryX = "skill";
    skillSeries.name = "years";
    skillSeries.columns.template.tooltipText = "{categoryX}: [bold]{valueY} Years[/]";
    skillSeries.columns.template.fillOpacity = .8;
    //skillSeries.events.on("hidden", this.toggleAxes);
    //skillSeries.events.on("shown", this.toggleAxes);

    skillSeries.minBulletDistance = 10;
    var columnTemplate = skillSeries.columns.template;
    columnTemplate.strokeWidth = 1;

    skillSeries.columns.template.adapter.add("fill", function(fill, target) {
      return skillChart.colors.getIndex(target.dataItem.index);
    });

    this.skillChart = skillChart;
  }

  toggleAxes(ev) {
    let axis = ev.target.yAxis;
    let disabled = true;
    axis.series.each(function(series) {
      if (!series.isHiding && !series.isHidden) {
        disabled = false;
      }
    });
    axis.disabled = disabled;
  }

  createAcademicChart() {
      //academicDiv
      let academicChart = am4core.create("academicDiv", am4charts.XYChart3D);

      // Add data
      academicChart.data = [{
        "years": 7,
        "framework": "Angular",
        "color": academicChart.colors.next()
      }, {
        "years": 7,
        "framework": "Ember",
        "color": academicChart.colors.next()
      }, {
        "years": 4,
        "framework": "Angular Material",
        "color": academicChart.colors.next()
      }, {
        "years": 8,
        "framework": "Bootstrap",
        "color": academicChart.colors.next()
      }, {
        "years": 4,
        "framework": "Protractor",
        "color": academicChart.colors.next()
      }, {
        "years": 7,
        "framework": "Jasmine",
        "color": academicChart.colors.next()
      }, {
        "years": 2,
        "framework": "Anugular CLI",
        "color": academicChart.colors.next()
      }, {
        "years": 4,
        "framework": "Ember CLI",
        "color": academicChart.colors.next()
      }, {
        "years": 4,
        "framework": "LESS/SASS",
        "color": academicChart.colors.next()
      }];

      // Create axes
      var academicChartAxis = academicChart.yAxes.push(new am4charts.CategoryAxis());
      academicChartAxis.dataFields.category = "framework";
      //academicChartAxis.numberFormatter.numberFormat = "#";
      academicChartAxis.renderer.inversed = true;

      var  academicChartValueAxis = academicChart.xAxes.push(new am4charts.ValueAxis());

      // Create series
      var academicSeries = academicChart.series.push(new am4charts.ColumnSeries3D());
      academicSeries.dataFields.valueX = "years";
      academicSeries.dataFields.categoryY = "framework";
      academicSeries.name = "Front-End Framework";
      academicSeries.columns.template.propertyFields.fill = "color";
      academicSeries.columns.template.tooltipText = "{valueX} years";
      academicSeries.columns.template.column3D.stroke = am4core.color("#fff");
      academicSeries.columns.template.column3D.strokeOpacity = 0.2;
      academicSeries.minBulletDistance = 20;

      this.academicChart = academicChart;
  }


  createBackEndChart() {
    //academicDiv
    let backEndChart = am4core.create("backEndDiv", am4charts.XYChart3D);

    // Add data
    backEndChart.data = [{
      "years": 14,
      "framework": "Spring Core",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "MapReduce",
      "color": backEndChart.colors.next()
    }, {
      "years": 14,
      "framework": "Spring Webflow",
      "color": backEndChart.colors.next()
    }, {
      "years": 8,
      "framework": "Spring Web Services (WS)",
      "color": backEndChart.colors.next()
    }, {
      "years": 8,
      "framework": "Grails",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "IBatis",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "Hibernate",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "JPA 2.0",
      "color": backEndChart.colors.next()
    }, {
      "years": 6,
      "framework": "Dozer",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "Sqoop",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "Oozie",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "Hive",
      "color": backEndChart.colors.next()
    }, {
      "years": 4,
      "framework": "HBase",
      "color": backEndChart.colors.next()
    }];

    // Create axes
    var backEndChartAxis = backEndChart.yAxes.push(new am4charts.CategoryAxis());
    backEndChartAxis.dataFields.category = "framework";
    //academicChartAxis.numberFormatter.numberFormat = "#";
    backEndChartAxis.renderer.inversed = true;

    var  backEndChartAxisValueAxis = backEndChart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    var academicSeries = backEndChart.series.push(new am4charts.ColumnSeries3D());
    academicSeries.dataFields.valueX = "years";
    academicSeries.dataFields.categoryY = "framework";
    academicSeries.name = "Back-End Framework";
    academicSeries.columns.template.propertyFields.fill = "color";
    academicSeries.columns.template.tooltipText = "{framework}, {valueX} years";
    academicSeries.columns.template.column3D.stroke = am4core.color("#fff");
    academicSeries.columns.template.column3D.strokeOpacity = 0.2;
    academicSeries.minBulletDistance = 20;

    this.backEndChart = backEndChart;
  }

  createAppServerChart() {
    //XY Bar Chart
    let appServerChart = am4core.create("appServerDiv" , am4charts.XYChart);

    // Add data
    appServerChart.data = [
      {
        "skill": "NodeJS",
        "description" : "Node JS App Server",
        "years": 8
      }, {
        "skill": "Tomcat",
        "description" : "Apache Tomcat Server",
        "years": 14
      }, {
        "skill": "JBoss",
        "description" : "Redhat JBOSS Server",
        "years": 10
      }, {
        "skill": "WebLogic",
        "description" : "Oracle's WebLogic Server",
        "years": 4
      }, {
        "skill": "WAS",
        "description" : "IBM Websphere Application Server",
        "years": 8
      }, {
        "skill": "BPM",
        "description" : "IBM Process Server",
        "years": 8
      }, {
        "skill": "Resin",
        "description" : "Caucho Resin Server",
        "years": 8
      }, {
        "skill": "Terracotta",
        "description" : "Big Memory/Terracotta Server",
        "years": 10
      }
    ];

    // Create axes

    var categoryAxis = appServerChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "skill";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 5 ;

    /*
    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index) {
        return dy + 25;
      }
      return dy;
    });
*/
    var valueAxis2 = appServerChart.yAxes.push(new am4charts.ValueAxis());


    var skillSeries = appServerChart.series.push(new am4charts.ColumnSeries());
    skillSeries.dataFields.valueY = "years";
    skillSeries.dataFields.categoryX = "skill";
    skillSeries.name = "years";
    skillSeries.columns.template.tooltipText = "{description}: [bold]{valueY} Years[/]";
    skillSeries.columns.template.fillOpacity = .8;
    //skillSeries.events.on("hidden", this.toggleAxes);
    //skillSeries.events.on("shown", this.toggleAxes);

    skillSeries.minBulletDistance = 10;
    var columnTemplate = skillSeries.columns.template;
    columnTemplate.strokeWidth = 1;

    skillSeries.columns.template.adapter.add("fill", function(fill, target) {
      return appServerChart.colors.getIndex(target.dataItem.index);
    });

    this.appServerChart = appServerChart;
  }

  createToolChart() {

      //XY Bar Chart
      let toolsChart = am4core.create("toolsDiv" , am4charts.XYChart);

      // Add data
      toolsChart.data = [
        {
          "tool": "GitHub",
          "description" : "Source Control System",
          "years": 6
        }, {
          "tool": "SVN",
          "description" : "Subversion Source Control ",
          "years": 10
        }, {
          "tool": "CVS",
          "description" : "Source Control",
          "years": 4
        }, {
          "tool": "PVCS",
          "description" : "Source Control System",
          "years": 8
        }, {
          "tool": "RTC",
          "description" : "IBM Rational Team Tracker",
          "years": 2
        }, {
          "tool": "Maven",
          "description" : "Apache Maven Build System",
          "years": 12
        }, {
          "tool": "ANT",
          "description" : "Another Neat Tool",
          "years": 15
        }, {
          "tool": "VS",
          "description" : "Visual Studio Code Editor",
          "years": 4
        }, {
          "tool": "Eclip.",
          "description" : "Eclipse Source Code Editor",
          "years": 14
        }, {
          "tool": "Spring",
          "description" : "Spring IDE Source Code Editor",
          "years": 10
        }, {
          "tool": "NB",
          "description" : "NetBeans Source Code Editor",
          "years": 16
        }, {
          "tool": "intelliJ",
          "description" : "Source Code Editor",
          "years": 12
        }
      ];

      // Create axes

      var categoryAxis = toolsChart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "tool";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 5 ;

      /*
      categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
        if (target.dataItem && target.dataItem.index) {
          return dy + 25;
        }
        return dy;
      });
    */
      var valueAxis2 = toolsChart.yAxes.push(new am4charts.ValueAxis());


      var skillSeries = toolsChart.series.push(new am4charts.ColumnSeries());
      skillSeries.dataFields.valueY = "years";
      skillSeries.dataFields.categoryX = "tool";
      skillSeries.name = "years";
      skillSeries.columns.template.tooltipText = "{description}: [bold]{valueY} Years[/]";
      skillSeries.columns.template.fillOpacity = .8;
      //skillSeries.events.on("hidden", this.toggleAxes);
      //skillSeries.events.on("shown", this.toggleAxes);

      skillSeries.minBulletDistance = 10;
      var columnTemplate = skillSeries.columns.template;
      columnTemplate.strokeWidth = 1;

      skillSeries.columns.template.adapter.add("fill", function(fill, target) {
        return toolsChart.colors.getIndex(target.dataItem.index);
      });

      this.toolsChart = toolsChart;
  }

  createCloudsChart() {
    //XY Bar Chart
    let cloudsChart = am4core.create("cloudsDiv" , am4charts.XYChart);

    // Add data
    cloudsChart.data = [
      {
        "tool": "AWS",
        "description" : "EC2, AWS Lambda, DynamoDB, CloudFront, S3, Aurora, API Gateway",
        "years": 6
      }, {
        "tool": "SalesForce",
        "description" : "Administration and APEX Development ",
        "years": 7
      }, {
        "tool": "Android",
        "description" : "Native Android Development",
        "years": 4
      }, {
        "tool": "Ionic",
        "description" : "Ionic Hybrid Mobile App Development",
        "years": 6
      }
    ];

    // Create axes

    var categoryAxis = cloudsChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tool";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 5 ;

    /*
    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index) {
        return dy + 25;
      }
      return dy;
    });
  */
    var valueAxis2 = cloudsChart.yAxes.push(new am4charts.ValueAxis());


    var skillSeries = cloudsChart.series.push(new am4charts.ColumnSeries());
    skillSeries.dataFields.valueY = "years";
    skillSeries.dataFields.categoryX = "tool";
    skillSeries.name = "years";
    skillSeries.columns.template.tooltipText = "{description}: [bold]{valueY} Years[/]";
    skillSeries.columns.template.fillOpacity = .8;
    //skillSeries.events.on("hidden", this.toggleAxes);
    //skillSeries.events.on("shown", this.toggleAxes);

    skillSeries.minBulletDistance = 10;
    var columnTemplate = skillSeries.columns.template;
    columnTemplate.strokeWidth = 1;

    skillSeries.columns.template.adapter.add("fill", function(fill, target) {
      return cloudsChart.colors.getIndex(target.dataItem.index);
    });

    this.cloudsChart = cloudsChart;
  }

  createDay2DayChart() {

        //Pie Chart Begins
        let day2DayChart = am4core.create("day2DayDiv", am4charts.PieChart3D);
        day2DayChart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        day2DayChart.legend = new am4charts.Legend();

        day2DayChart.data = [
          {
            task: "Meetings",
            time: 312
          },
          {
            task: "Development",
            time: 1248
          },
          {
            task: "Sprint Planning",
            time: 208
          },
          {
            task: "Architecture",
            time: 634
          },
          {
            task: "Communication",
            time:312
          },
          {
            task: "Traveling",
            time: 40
          },
          {
            task: "Product Review",
            time: 312
          }
        ];

        var day2DayChartSeries = day2DayChart.series.push(new am4charts.PieSeries3D());
        day2DayChartSeries.dataFields.value = "time";
        day2DayChartSeries.dataFields.category = "task";
        day2DayChartSeries.minBulletDistance = 20;
        this.day2DayChart = day2DayChart;
  }

  createCredentialsChart() {
      "credentialsDiv"

      var credentialsChart = am4core.create("credentialsDiv", am4charts.SlicedChart);
      credentialsChart.paddingBottom = 30;
      credentialsChart.data = [{
        "name": "B.S. in Computer Science",
        "value": 8320
      }, {
        "name": "AWS Solution Architect Certified",
        "value": 960
      }, {
        "name": "AWS Developer Certified",
        "value": 960
      }, {
        "name": "Associate MuleSoft Developer Certification",
        "value": 320
      }, {
        "name": "Cloudera Certified Developer for Apache Hadoop",
        "value": 960
      }, {
        "name": "Cloudera Certified Administrator for Apache Hadoop",
        "value": 960
      }, {
        "name": "Sun Certifications Java Programmer ",
        "value": 1256
      }, {
        "name": "Sun Certifications Java Web Component Developer",
        "value": 784
      }, {
        "name": "Sun Certifications Java Developer",
        "value": 560
      }, {
        "name": "W3C JQuery Certified",
        "value": 120
      }, {
        "name": "Certified Scrum Master CSM Alliance",
        "value": 90
      }, {
        "name": "Dan whalen & John Pap's Ultimate Angular Workshop Course",
        "value": 16
      }, {
        "name": "Spring Core Class Course",
        "value": 24
      }, {
        "name": "SalesForce.com Administrator Fundamentals Course",
        "value": 24
      }, {
        "name": "SalesForce.com Advanced Fundamentals Course",
        "value": 24
      }, {
        "name": "IBM Websphere Business Integration Server Course",
        "value": 72
      }, {
        "name": "IBM eCommerce Server Course",
        "value": 8
      }];

      var series = credentialsChart.series.push(new am4charts.PyramidSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "name";

      //series.columns.tooltipText = "{description}";

      series.alignLabels = true;
      series.valueIs = "height";

      this.credentialsChart = credentialsChart;
  }

  createForceKeywordDirectedGraph() {

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
          "name":"Java",
          "value":2020,
          "linkWith":[
            "JavaScript",
            "Agile",
            "Cloud"
          ],
          "children":[
            {
                "name":"JBoss",
                "value":1400
            },
            {
                "name":"Spring",
                "value": 600
            },
            {
                "name":"Tomcat",
                "value":1000
            },
            {
                "name":"WebLogic",
                "value":100
            },
            {
                "name":"BPM",
                "value":200
            },
            {
                "name":"Teraacotta",
                "value":900
            },
            {
                "name":"Groovy",
                "value":1000
            },
            {
                "name":"Grails",
                "value":1000
            },
            {
                "name":"JSTL",
                "value":100
            },
            {
                "name":"JSP",
                "value":200
            },
            {
                "name":"J2EE",
                "value":1000
            },
            {
                "name":"Rewards Network",
                "value":20
            },
            {
                "name":"ADT/Tyco",
                "value":30
            },
            {
                "name":"Back-End Development",
                "value":180
            }
          ]
      },
      {
          "name":"JavaScript",
          "value":2040,
          "linkWith":[
            "Java",
            "Agile",
            "Ross",
            "Joey",
            "Phoebe"
          ],
          "children":[
            {
                "name":"Angular 1.x",
                "value":100
            },
            {
                "name":"Angular 2+",
                "value":2000
            },
            {
                "name":"Ember",
                "value":1400
            },
            {
                "name":"CoffeeScript",
                "value":200
            },
            {
                "name":"Angular CLI",
                "value":1000
            },
            {
                "name":"Ember CLI",
                "value":500
            },
            {
                "name":"Node (JS)",
                "value":2200
            },
            {
                "name":"Protractor",
                "value":300
            },
            {
                "name":"Jasmine",
                "value":1600
            },
            {
                "name":"Material",
                "value":1400
            },
            {
                "name":"Boostrap 3/4 ",
                "value":2000
            },
            {
                "name":"Promises",
                "value":1000
            },
            {
                "name":"Async",
                "value":100
            },
            {
                "name":"ES8",
                "value":1000
            },
            {
                "name":"F.A.U.",
                "value":170
            },
            {
                "name":"Intellipoint Academy",
                "value":90
            }
          ]
      },
      {
          "name":"Cloud",
          "value":1670,
          "linkWith":[
            "Java",
            "JavaScript",
            "Agile"
          ],
          "children":[
            {
                "name":"DevOps",
                "value":150
            },
            {
                "name":"Serverless",
                "value":1000
            },
            {
                "name":"AWS Lambda",
                "value":1000
            },
            {
                "name":"AWS Gateway API",
                "value":1200
            },
            {
                "name":"AWS EC2",
                "value":600
            },
            {
                "name":"Glacier",
                "value":1000
            },
            {
                "name":"CloudFront",
                "value":2500
            },
            {
                "name":"Route53",
                "value":1500
            },
            {
                "name":"DynamoDB",
                "value":900
            },
            {
                "name":"Aurora",
                "value":500
            },
            {
                "name":"SalesForce.com",
                "value":900
            },
            {
                "name":"AWS",
                "value":1000
            },
            {
                "name":"Apex",
                "value":100
            },
            {
                "name":"VisualForce Pages",
                "value":100
            }
          ]
      }
    ];

    this.keyWordChart = forceDirectedTreeChart;
  }
}
