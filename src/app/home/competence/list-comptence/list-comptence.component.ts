import { Component, OnInit } from '@angular/core';
import {CompetenceService} from '../../../services/competence.service';

@Component({
  selector: 'app-list-comptence',
  templateUrl: './list-comptence.component.html',
  styleUrls: ['./list-comptence.component.scss']
})
export class ListComptenceComponent implements OnInit {
  dataComp = [];
  dataGrpComp;
  search = '';
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
  // tslint:disable-next-line:typedef
  selectChange(event: any)
  { console.log(event.target.value); }

  recupere(value: string): void {
    this.search = value;
    console.log(this.search);
  }


}

