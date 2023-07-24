import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { CreateUserComponent } from './Components/usuario/create-user/create-user.component';
import { AuthGuard } from './auth.guard';
import { LicenseComponent } from './Components/license/license.component';
import { DataClientComponent } from './Components/data-client/data-client.component';
import { ContractComponent } from './Components/contract/contract.component';
import { ConfigPlataformComponent } from './Components/config-plataform/config-plataform.component';
import { GetUserComponent } from './Components/usuario/get-user/get-user.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'form-create-user', component: CreateUserComponent, canActivate: [AuthGuard] },
  {path: 'license', component: LicenseComponent, canActivate: [AuthGuard] },
  {path: 'client', component: DataClientComponent, canActivate: [AuthGuard] },
  {path: 'contract', component: ContractComponent, canActivate: [AuthGuard] },
  {path: 'config', component: ConfigPlataformComponent, canActivate: [AuthGuard] },
  {path: 'users', component: GetUserComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
