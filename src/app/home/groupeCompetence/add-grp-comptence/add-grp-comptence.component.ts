import { Component, OnInit } from '@angular/core';
import {CompetenceService} from '../../../services/competence.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-grp-comptence',
  templateUrl: './add-grp-comptence.component.html',
  styleUrls: ['./add-grp-comptence.component.scss']
})
export class AddGrpComptenceComponent implements OnInit {
  grpcomForm: FormGroup;
  dataComp: any;
  selectedItems: any = [];
  dropdownSettings: any = {};

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient, private compSrv: CompetenceService) { }

  ngOnInit(): void {
    this.compSrv.getCompetence().subscribe(
      (data: any) => {
        this.dataComp = data;
        console.log(this.dataComp);
      },
      error => {
        console.log(error.error.message);
      }
    );

    this.dropdownSettings = {
      singleSelection: false,
      text: 'selectionnez competence',
      enableSearchFilter: true,
      labelKey: 'libelle',
      primaryKey: 'libelle',
    };
    this.grpcomForm = this.formBuilder.group(
      {
        libelle: ['', Validators.required],
        description: ['', Validators.required],
        competences: ['', Validators.required]
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    const datagrp = this.grpcomForm.value;
    this.compSrv.addgrpCompetence(datagrp).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      dataComp => {
        this.grpcomForm.reset();
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
  }
  }
