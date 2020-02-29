import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  public getSkillChartData () {
    return  [
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
  }

  public getAcademicData(academicChart) {
    return  [{
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
  }

  public getBackEndData(backEndChart) {
    return [{
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
  }

  public getAppServerChart(backEndChart) {
    return [
      {
        "skill": "NodeJS",
        "description" : "Node JS App Server",
        "years": 8,
        "color": backEndChart.colors.next()
      }, {
        "skill": "Tomcat",
        "description" : "Apache Tomcat Server",
        "years": 14,
        "color": backEndChart.colors.next()
      }, {
        "skill": "JBoss",
        "description" : "Redhat JBOSS Server",
        "years": 10,
        "color": backEndChart.colors.next()
      }, {
        "skill": "WebLogic",
        "description" : "Oracle's WebLogic Server",
        "years": 4,
        "color": backEndChart.colors.next()
      }, {
        "skill": "WAS",
        "description" : "IBM Websphere Application Server",
        "years": 8,
        "color": backEndChart.colors.next()
      }, {
        "skill": "BPM",
        "description" : "IBM Process Server",
        "years": 8,
        "color": backEndChart.colors.next()
      }, {
        "skill": "Resin",
        "description" : "Caucho Resin Server",
        "years": 8,
        "color": backEndChart.colors.next()
      }, {
        "skill": "Terracotta",
        "description" : "Big Memory/Terracotta Server",
        "years": 10,
        "color": backEndChart.colors.next()
      }
    ];
  }

  public getToolsChartData() {
    return [
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
  }

  public getCloudChartData() {
    return  [
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
  }

  public getDay2DayData() {
    return [
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
  }

  public getCredentialsData() {
    return [{
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
  }

  public getForceDirectedTreeData() {
    return  [
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
                "name":"Teracotta",
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
  }
}
