import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './home/users/list-users/list-users.component';
import {AddUsersComponent} from './home/users/add-users/add-users.component';
import {ListProfilComponent} from './home/profils/list-profil/list-profil.component';
import {AddProfilComponent} from './home/profils/add-profil/add-profil.component';
import {EditUsersComponent} from './home/users/edit-users/edit-users.component';
import {AddGrpComptenceComponent} from './home/groupeCompetence/add-grp-comptence/add-grp-comptence.component';
import {ListGrpComptenceComponent} from './home/groupeCompetence/list-grp-comptence/list-grp-comptence.component';
import {AddComptenceComponent} from './home/competence/add-comptence/add-comptence.component';
import {ListComptenceComponent} from './home/competence/list-comptence/list-comptence.component';
import {AuthentificationComponent} from './authentification/authentification.component';
import {HomeComponent} from './home/home/home.component';
import {ListProfilSortieComponent} from './home/profilSortie/list-profil-sortie/list-profil-sortie.component';
import {UsersProfilComponent} from './home/profils/list-profil/users-profil/users-profil.component';
import {DetailComponent} from './home/users/detail/detail.component';
import {ListReferentielComponent} from './home/referentiel/list-referentiel/list-referentiel.component';
import {AddReferentielComponent} from './home/referentiel/add-referentiel/add-referentiel.component';
import {AddPromoComponent} from './home/promo/add-promo/add-promo.component';
import {ListPromoComponent} from './home/promo/list-promo/list-promo.component';

const routes: Routes = [
  {path: 'auth', component: AuthentificationComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'listUser', pathMatch: 'full'},
      {path: 'listUser', component: ListUsersComponent},
      {path: 'user/add', component: AddUsersComponent},
      {path: 'user/list', component: ListUsersComponent},
      {path: 'user/edit/:id', component: EditUsersComponent},
      {path: 'user/detail/:id', component: DetailComponent},
      {path: 'profil/list', component: ListProfilComponent},
      {path: 'profil/add', component: AddProfilComponent},
      {path: 'grpcompetence/add', component: AddGrpComptenceComponent},
      {path: 'grpcompetence/list', component: ListGrpComptenceComponent},
      {path: 'competence/add', component: AddComptenceComponent},
      {path: 'competence/list', component: ListComptenceComponent},
      {path: 'userProfil/list/:id', component: UsersProfilComponent},
      {path: 'profilSortie/list', component: ListProfilSortieComponent},
      {path: 'referentiel/list', component: ListReferentielComponent},
      {path: 'referentiel/add', component: AddReferentielComponent},
      {path: 'promo/add', component: AddPromoComponent},
      {path: 'promo/list', component: ListPromoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
