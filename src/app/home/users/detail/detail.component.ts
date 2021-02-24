import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private auSrv: AuthService) { }
  detailUser: any;
  ngOnInit(): void {
    const idUser = +this.route.snapshot.params[`id`];
    // @ts-ignore
    this.user = this.auSrv.getUserbyId(idUser).subscribe(
      dataUser => {
        this.detailUser = dataUser;
        console.log(this.detailUser);
        console.log('ok');
      }
    );
  }

}
