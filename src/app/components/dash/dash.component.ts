import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"],
})
export class DashComponent implements OnInit, OnDestroy {
  
  ngOnInit() {}

  ngOnDestroy() {
    console.log('dash component destroyed')
  }
}