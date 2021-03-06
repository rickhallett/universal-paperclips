import { Component, OnDestroy, OnInit } from "@angular/core";
import { StateService } from "../../services/state-service";
import {
  BrowserLoggerService,
  BrowserLogger,
} from "../../services/browser-logger.service";

@Component({
  selector: "app-ngx-docs",
  templateUrl: "./ngx-docs.component.html",
  styleUrls: ["./ngx-docs.component.css"],
})
export class NgxDocsComponent implements OnInit, OnDestroy {
  private log: BrowserLogger;

  constructor(
    private browserLoggerService: BrowserLoggerService,
    private stateService: StateService
  ) {
    this.log = browserLoggerService.createLog("NgxDocsComponent", "green");
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stateService.tour.end();
  }

  startDocsTour(): void {
    this.stateService.tour.startAt(
      this.stateService.findAnchorById('start.docs.tour')
    );
  }
}
