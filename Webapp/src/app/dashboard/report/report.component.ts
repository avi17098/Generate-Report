import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  allReport: any = [];
  allFeedback: any = [];
  constructor( private reportService: ReportService) { }

  ngOnInit() {
    this.getAllReport();
    this.getAllFeedback();
  }

  getAllReport() {
    this.reportService.getReport().subscribe((res: any) => {
      if (res && res.status) {
        this.allReport = res.data;
      }
    },
      err => { console.log(err); }
    );
  }

  getAllFeedback() {
    this.reportService.getFeedBack().subscribe((res: any) => {
      if (res && res.status) {
        this.allFeedback = res.data;
      }
    },
      err => { console.log(err); }
    );
  }

  getType(type) {
    switch (type) {
      case 1: {
        return 'Online';
      }
      case 2: {
        return 'Offline';
      }
      case 3: {
        return 'ArticleView';
      }
      case 4: {
        return 'Feedback';
      }
    }
  }
}
