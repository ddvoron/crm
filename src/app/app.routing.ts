import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./_guard/auth.guard";
import {LoginComponent} from "./login/login.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {MyCabinetComponent} from "./my-cabinet/my-cabinet.component";
import {MyTaskComponent} from "./my-task/my-task.component";
import {MeetingsComponent} from "./meetings/meetings.component";
import {RealEstateComponent} from "./real-estate/real-estate.component";
import {FlowComponent} from "./flow/flow.component";
import {UsersComponent} from "./users/users.component";


const flowRoutes: Routes = [
  { path: 'my-cabinet', component: MyCabinetComponent, canActivate: [AuthGuard] },
  { path: 'my-tasks', component: MyTaskComponent, canActivate: [AuthGuard] },
  { path: 'meetings', component: MeetingsComponent, canActivate: [AuthGuard] },
  { path: 'real-estate', component: RealEstateComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] }
];

const appRoutes: Routes = [
  { path: 'navigation', component: NavigationComponent, canActivate: [AuthGuard] },
  { path: 'flow', component: FlowComponent, canActivate: [AuthGuard], children: flowRoutes },
  { path: '', component: LoginComponent },
  // otherwise redirect to login
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
