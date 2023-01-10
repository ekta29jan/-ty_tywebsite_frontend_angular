import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  readbutton=true;
  read=false;
  cardname:any;
  AS=false;
  application_support:any;
  constructor(private route : Router) {
    document.title = "Support Services| TechnoElevate";
  }

  ngOnInit(): void {
  }

  readMore(cardname){
    switch(cardname){
      case'application_support':
      this.AS=!this.AS;

    }

  }

  securityTestingTools = [
    {
      "Metric": "OWASP ZAP",
      "Purpose": "Open source application scanning tool",
      "Type": "Web",
      "Commercials": "Free"
    },
    {
      "Metric": "BurpSuite",
      "Purpose": "Intercept requests manually and identifies vulnerabilities",
      "Type": "Web, iOS, Android",
      "Commercials": "Free / Paid"
    },
    {
      "Metric": "Tamperdata",
      "Purpose": "View, modify and measure HTTP/HTTPS headers and post parameters",
      "Type": "Web",
      "Commercials": "Firefox add-on tool"
    },
    {
      "Metric": "Nessus",
      "Purpose": "Remote Security Scanning tool",
      "Type": "Web",
      "Commercials": "Free/ Paid"
    },
    {
      "Metric": "SQL Map",
      "Purpose": "Find database related vulnerabilities",
      "Type": "Web",
      "Commercials": "Open source"
    },
    {
      "Metric": "Arachni",
      "Purpose": "Web Application Security Scanner Framework",
      "Type": "Web",
      "Commercials": "Open source"
    },
    {
      "Metric": "Wireshark",
      "Purpose": "Profiling network traffic and analysing packets",
      "Type": "Web",
      "Commercials": "Open source "
    },
    {
      "Metric": "Dirbuster",
      "Purpose": "Brute force directories and files names on web/application servers",
      "Type": "web",
      "Commercials": "Open source"
    },
    {
      "Metric": "Custom API fuzzing scripts",
      "Purpose": "Repeatedly generate randomized input for a target API till it breaks",
      "Type": "Web, iOS, Android",
      "Commercials": "Free"
    },
    {
      "Metric": "Browser debug tools",
      "Purpose": "Internal Browser Debug tools",
      "Type": "Web, iOS, Android",
      "Commercials": "Free"
    },
    {
      "Metric": "SSLalyse",
      "Purpose": "Find out Network vulnerabilities",
      "Type": "Web",
      "Commercials": "Open source"
    },
    {
      "Metric": "Nmap ",
      "Purpose": "Scanning all ports and find out if dangerous ports are enabled",
      "Type": "Web",
      "Commercials": "Open source"
    },
    {
      "Metric": "IRONWASP",
      "Purpose": "Open source application and network scanning tool",
      "Type": "Web",
      "Commercials": "Open source"
    },
    {
      "Metric": "Net Sparker ",
      "Purpose": "Application scanning tool with less false positive",
      "Type": "Web",
      "Commercials": "Paid"
    },
    {
      "Metric": "OWASP Xenotix",
      "Purpose": "Find XSS vulnerability automatically using 1000 or more payloads",
      "Type": "Web",
      "Commercials": "Open source"
    }
  ];

}
