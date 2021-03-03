import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LoginPageRoutingModule } from "./login-routing.module";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { LoginPage } from "./login.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage],
  providers: [FirebaseX],
})
export class LoginPageModule {}
