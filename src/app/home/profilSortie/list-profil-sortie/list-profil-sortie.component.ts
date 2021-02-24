import { Component, OnInit } from '@angular/core';
import {ListProfilService} from '../../../services/list-profil.service';
import {ProfilSortieService} from '../../../services/profil-sortie.service';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.scss']
})
export class ListProfilSortieComponent implements OnInit {
  dataProfilSortie: any;
  constructor(private proSorSrv: ProfilSortieService) { }

  profilSortie: [] | undefined;
  ngOnInit(): void {
    this.proSorSrv.getAllProfilSortie().subscribe(
      dataProfilSortie => {
        this.dataProfilSortie = dataProfilSortie;
        console.log(this.dataProfilSortie);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

}
