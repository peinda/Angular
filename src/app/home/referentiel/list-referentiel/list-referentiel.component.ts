import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ReferentielService} from '../../../services/referentiel.service';
import {CompetenceService} from '../../../services/competence.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {DomSanitizer} from '@angular/platform-browser';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.scss']
})
export class ListReferentielComponent implements OnInit {
  dataGrpComp: any [];
  dataRef = [];
  constructor(private formBuilder: FormBuilder, private sanitizer: DomSanitizer,
              private http: HttpClient, private refSrv: ReferentielService, private compSrv: CompetenceService) { }

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
    this.refSrv.getReferentiel().subscribe(
      data => {
        this.dataRef = data;
        console.log(data);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getPdf(programme){
    const byteArray = new Uint8Array(atob(programme).split('').map(char => char.charCodeAt(0)));
    const blob = new Blob([byteArray], {type: 'application/pdf'});
    if (blob){
      const url = window.URL.createObjectURL(blob);
      if (url !== null){
        // document.querySelector('iframe' + this.index).src = url;
        return this.sanitizer.bypassSecurityTrustResourceUrl (url);
        // return url;

      }
    }
    return null;
  }
}
