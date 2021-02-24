import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
   dataSource;
    constructor(private auSrv: AuthService) {
  }
  // users: [] | undefined;

  ngOnInit(): void {
    this.auSrv.getAllUser().subscribe(
      data => {
        this.dataSource = data;
      },
      error => {
        console.log(error.error.message);
      }
    );
  }
  // tslint:disable-next-line:typedef
  deleteUser(id: any){
    console.log(id);
    if (confirm ('Voulez-vous vraiment supprimer?')) {
       this.auSrv.archivedUser(id).subscribe(
         data => {console.log(data);
                  alert('User Supprimé');
         },
         error => console.log(error)
       );
     }
  }
}
