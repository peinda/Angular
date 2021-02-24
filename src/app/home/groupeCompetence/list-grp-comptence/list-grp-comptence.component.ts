import { Component, OnInit } from '@angular/core';
import {CompetenceService} from '../../../services/competence.service';

@Component({
  selector: 'app-list-grp-comptence',
  templateUrl: './list-grp-comptence.component.html',
  styleUrls: ['./list-grp-comptence.component.scss']
})
export class ListGrpComptenceComponent implements OnInit {
dataGrpComp: any [];
  dataComp = [];
  constructor(private compSrv: CompetenceService) { }

  ngOnInit(): void {
    this.compSrv.getGrpCompetence().subscribe(
      data => {
        this.dataGrpComp = data;
        console.log(data);
      },
      error => {
        console.log(error.error.message);
      }
    );

    this.compSrv.getCompetence().subscribe(
      (data: any) => {
        this.dataComp = data;
        console.log(this.dataComp);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

}
