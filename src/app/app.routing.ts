import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./_guard/auth.guard";
import {LoginComponent} from "./login/login.component";
import {NavigationComponent} from "./navigation/navigation.component";


const appRoutes: Routes = [
  { path: 'navigation', component: NavigationComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },

  // otherwise redirect to login
  { path: '**', redirectTo: 'navigation' }
];

export const routing = RouterModule.forRoot(appRoutes);
