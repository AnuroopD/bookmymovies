import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {
  constructor(private logger: LogService) {}

  ngOnInit() {}

  testLog(msg?: any) {
    this.logger.log(new Date() + ': ' + JSON.stringify(msg));
  }
}
