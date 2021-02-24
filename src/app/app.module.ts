import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { TableModule } from 'primeng/table';
import {NgxPaginationModule} from 'ngx-pagination';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AddProfilComponent } from './home/profils/add-profil/add-profil.component';
import { ListProfilComponent } from './home/profils/list-profil/list-profil.component';
import { ListUsersComponent } from './home/users/list-users/list-users.component';
import { AddUsersComponent } from './home/users/add-users/add-users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditUsersComponent } from './home/users/edit-users/edit-users.component';
import { AddGrpComptenceComponent } from './home/groupeCompetence/add-grp-comptence/add-grp-comptence.component';
import {ListGrpComptenceComponent} from './home/groupeCompetence/list-grp-comptence/list-grp-comptence.component';
import { AddComptenceComponent } from './home/competence/add-comptence/add-comptence.component';
import { ListComptenceComponent } from './home/competence/list-comptence/list-comptence.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorInterceptor} from './interceptor.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddProfilSortieComponent } from './home/profilSortie/add-profil-sortie/add-profil-sortie.component';
import { HomeComponent } from './home/home/home.component';
import { ListProfilSortieComponent } from './home/profilSortie/list-profil-sortie/list-profil-sortie.component';
import { EditProfilSortieComponent } from './home/profilSortie/edit-profil-sortie/edit-profil-sortie.component';
import { UsersProfilComponent } from './home/profils/list-profil/users-profil/users-profil.component';
import { DetailComponent } from './home/users/detail/detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {DividerModule} from 'primeng/divider';
import {MessageModule} from 'primeng/message';
import { ListReferentielComponent } from './home/referentiel/list-referentiel/list-referentiel.component';
import { AddReferentielComponent } from './home/referentiel/add-referentiel/add-referentiel.component';
import { AddPromoComponent } from './home/promo/add-promo/add-promo.component';
import { ListPromoComponent } from './home/promo/list-promo/list-promo.component';
import { GrpCompPipe } from './grp-comp.pipe';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MultiSelectModule} from 'primeng/multiselect';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AddProfilComponent,
    ListProfilComponent,
    ListUsersComponent,
    AddUsersComponent,
    HeaderComponent,
    FooterComponent,
    EditUsersComponent,
    AddGrpComptenceComponent,
    ListGrpComptenceComponent,
    AddComptenceComponent,
    ListComptenceComponent,
    JumbotronComponent,
    AddProfilSortieComponent,
    HomeComponent,
    ListProfilSortieComponent,
    EditProfilSortieComponent,
    UsersProfilComponent,
    DetailComponent,
    ListReferentielComponent,
    AddReferentielComponent,
    AddPromoComponent,
    ListPromoComponent,
    GrpCompPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AccordionModule,
    DividerModule,
    MessageModule,
    ScrollPanelModule,
    MultiSelectModule,
    AngularMultiSelectModule,
    CalendarModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
