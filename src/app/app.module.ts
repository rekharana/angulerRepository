import { BrowserModule, HammerGestureConfig ,HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { appRoutes } from './routes';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import {  MemberEditResolver } from './_resolvers/member-edit.resolve';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { MemberListResolver } from './_resolvers/member-list.resolve';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberDetailsResolver } from './_resolvers/member-detail.resolve';
import { PreventUnSavedChanges } from './_guards/prevent-unsaved-changes.guard';

export function tokenGetter() { return localStorage.getItem('token'); }

export class CustomHammerConfig extends HammerGestureConfig  {
   overrides = {
       pinch: { enable: false },
       rotate: { enable: false }
   };
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      MessagesComponent,
      ListComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      NgxGalleryModule,
          RouterModule.forRoot(appRoutes),
        JwtModule.forRoot({
           config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['http://localhost:49548'],
              blacklistedRoutes: ['http://localhost:49548/api/auth']
           }
        })
      ], providers: [ MemberDetailsResolver, AlertifyService,
         UserService, AuthService , MemberListResolver,
         MemberEditResolver, PreventUnSavedChanges,
         { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
