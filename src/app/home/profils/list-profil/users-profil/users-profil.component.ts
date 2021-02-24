import { Component, OnInit } from '@angular/core';
import {ListProfilService} from '../../../../services/list-profil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-profil',
  templateUrl: './users-profil.component.html',
  styleUrls: ['./users-profil.component.scss']
})
export class UsersProfilComponent implements OnInit {
   userProfil: any;
  constructor(private route: ActivatedRoute,
              private proSrv: ListProfilService ) { }

  ngOnInit(): void {
  const idProfil = +this.route.snapshot.params[`id`];
  // @ts-ignore
  this.userProfil = this.proSrv.getUserProfilbyId(idProfil).subscribe(
    dataUserProfil => {
      this.userProfil = dataUserProfil;
      console.log(this.userProfil);
    }
  );
  }
}
