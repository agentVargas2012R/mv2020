import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/material";
import {ForceDirectedTree, ForceDirectedSeries} from "@amcharts/amcharts4/plugins/forceDirected";
import {AnalyticsService} from "../analytics.service";

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

  navbarStyle: string;

  theTitle: string;
  theSubtitle: string;
  theUrl: string;
  theProfile: string;
  theLeft: string;
  theRight: string;
  theBtnLabel: string;
  theStyles:string;
  theJumbotron: string;
  theAlign:string;

  analyticsService: AnalyticsService;

  constructor(private zone: NgZone) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 5000);

      this.analyticsService = new AnalyticsService();
   }

  ngOnInit() {
    this.theTitle = "Serverless Architecture";
    this.theSubtitle = "Consulting For Leadership. Strategy For Development. Founded On Best Practice Architecture.";
    this.theUrl = "https://docs.google.com/document/d/1-5PsEiavUBqz2TF6rWrpi-53N0w7jd5lSOA2QZ9ARA0/edit?usp=sharing";
    this.theLeft = "col-lg-3 col-md-3";
    this.theRight = "col-lg-9 col-md-9 my-md-5";
    this.theBtnLabel = "My Resume";
    this.theProfile = "../../assets/images/profile.jpg"
    this.navbarStyle = "hire-navbar";
    this.theJumbotron = "jumbotron-bg-blue";
    this.theAlign = " text-left";
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
      skillChart.data = this.analyticsService.getSkillChartData();
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
      academicChart.data = this.analyticsService.getAcademicData(academicChart);

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
    backEndChart.data = this.analyticsService.getBackEndData(backEndChart);

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
    appServerChart.data = this.analyticsService.getAppServerChart();

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
      toolsChart.data = this.analyticsService.getToolsChartData();

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
    cloudsChart.data =  this.analyticsService.getCloudChartData();
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

        day2DayChart.data = this.analyticsService.getDay2DayData();

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
      credentialsChart.data = this.analyticsService.getCredentialsData();

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

    forceDirectedTreeNetworkSeries.data = this.analyticsService.getForceDirectedTreeData();
    this.keyWordChart = forceDirectedTreeChart;
  }
}
