import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guards/auth.guard';
export const appRoutes: Routes = [
    {path : '', component: HomeComponent },
    { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
            {path : 'member', component: MemberListComponent},
    {path : 'message', component: MessagesComponent },
    {path : 'lists', component: ListComponent },
    ]
},
    // {path : 'member', component: MemberListComponent, canActivate: [AuthGuard]},
    {path : '**', redirectTo: '', pathMatch: 'full' },
]