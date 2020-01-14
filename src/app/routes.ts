import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
    {path : '', component: HomeComponent },
    { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path : 'member', component: MemberListComponent},
        {path : 'member/:id', component: MemberDetailComponent},
        {path : 'member-card', component: MemberCardComponent},
    {path : 'message', component: MessagesComponent },
    {path : 'lists', component: ListComponent },
    ]
},
    // {path : 'member', component: MemberListComponent, canActivate: [AuthGuard]},
    {path : '**', redirectTo: '', pathMatch: 'full' },
]