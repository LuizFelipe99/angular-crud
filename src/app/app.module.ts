import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Certifique-se de importar o FormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { CreateUserComponent } from './Components/usuario/create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LicenseComponent } from './Components/license/license.component';
import { DataClientComponent } from './Components/data-client/data-client.component';
import { ContractComponent } from './Components/contract/contract.component';
import { ConfigPlataformComponent } from './Components/config-plataform/config-plataform.component';
import { GetUserComponent } from './Components/usuario/get-user/get-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CreateUserComponent,
    LicenseComponent,
    DataClientComponent,
    ContractComponent,
    ConfigPlataformComponent,
    GetUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
