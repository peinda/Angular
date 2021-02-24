import { Component, OnInit } from '@angular/core';
import {ListProfilService} from '../../../services/list-profil.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {

  dataProfil: any;

  constructor(private proSrv: ListProfilService ) { }

  profil: [] | undefined;
  ngOnInit(): void {
    this.proSrv.getAllProfil().subscribe(
      dataProfil => {
        this.dataProfil = dataProfil;
        console.log(this.dataProfil);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

  // tslint:disable-next-line:typedef
  deleteProfil(id: any){
    console.log(id);

    if (confirm ('Voulez-vous vraiment supprimer?')) {
      this.proSrv.archivedProfil(id).subscribe(
        dataProfil => {console.log(dataProfil);
                       alert('Profil Supprimé');
        },
        error => console.log(error)
      );
    }
  }

}
