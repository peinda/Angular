import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReferentielService} from '../../../services/referentiel.service';
import {Router} from '@angular/router';
import {PromoService} from '../../../services/promo.service';
import {HttpClient} from '@angular/common/http';
import {AjoutUserService} from '../../../services/ajout-user.service';
import {ListProfilService} from '../../../services/list-profil.service';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent implements OnInit {

  proForm: FormGroup;
  apprenants: [];
  formateurs: [];
  errorMessage: any;
  submitted: true;
  date: any;
  minDateValue: Date;
  maxDateValue: any;
  dataRef: any [];

  constructor(private formBuilder: FormBuilder,
              private refSrv: ReferentielService,
              private ad: AjoutUserService,
              private proSrv: ListProfilService,
              private promSrv: PromoService,
              private router: Router) {}

  ngOnInit(): void {
    this.proForm = this.formBuilder.group({
      langue: new FormControl(null, Validators.required),
      titre: new FormControl(null, Validators.required),
      descriptif: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      lieu: new FormControl(null, Validators.required),
      reference: new FormControl(null, Validators.required),
      fabrique: new FormControl(null, Validators.required),
      dateDebut: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      dateFin: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      referentiels: new FormControl(null, Validators.required),
      apprenants: new FormControl(null, Validators.required),
      /* formateurs: new FormControl(null, Validators.required),*/
    });
// recuperation des referentiels
    this.refSrv.getReferentiel().subscribe(
      data => {
        this.dataRef = data['hydra:member'];
        console.log(this.dataRef);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }
  // tslint:disable-next-line:typedef
  postPromo() {
    console.log(this.proForm.value);
    this.submitted = true;
    const formValue = this.proForm.value;
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      // tslint:disable-next-line:triple-equals
      if (key != 'referentiels'){
        const value = formValue[key];
        formData.append(key, value);
      }
    }
  }
}
