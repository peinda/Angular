import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CompetenceService} from '../../../services/competence.service';
import {HttpClient} from '@angular/common/http';
import {SweetAlert} from 'sweetalert/typings/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-comptence',
  templateUrl: './add-comptence.component.html',
  styleUrls: ['./add-comptence.component.scss']
})
export class AddComptenceComponent implements OnInit {
  comForm: FormGroup;
  dataGrpComp = [];
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient, private compSrv: CompetenceService) { }
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
    this.comForm = new FormGroup({
      libelle:  new FormControl(),
      descriptif:  new FormControl(),
      groupeCompetence: new FormControl(),
      niveaux: new FormArray([
        new FormGroup({
          groupeAction: new FormControl(),
          critereEvaluation: new FormControl(),
        }),
        new FormGroup({
          groupeAction: new FormControl(),
          critereEvaluation: new FormControl(),
        }),
        new FormGroup({
          groupeAction: new FormControl(),
          critereEvaluation: new FormControl(),
        }),
      ]),
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    const comp = this.comForm.value;
    comp.groupeCompetence = ['/api/admin/grpecompetences/' + comp.groupeCompetence];
    this.compSrv.addCompetence(comp).subscribe(
      dataComp => {
        console.log(dataComp);
        this.comForm.reset();
        // alert('Ajout reussi');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'OK',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {console.log(error); }
    );
    // console.log(comp);
  }
  // tslint:disable-next-line:typedef
  get f() { return this.comForm.controls; }
}
