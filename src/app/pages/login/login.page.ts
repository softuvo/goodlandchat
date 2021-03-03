/*
 * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
 * Copyright  @2020-present. All right reserved.
 * Author: Abubakar Pagas
 */

import { CountryCodeService } from "./../../services/country-code.service";
import { LoginService } from "./../../services/login.service";
import { AlertService } from "./../../services/alert.service";
import { LoadingService } from "./../../services/loading.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "firebase";
import { AlertController, ToastController, Platform } from "@ionic/angular";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
// import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  option;
  values;
  showCodeInput = false;
  phoneNumber;
  otpSent = false;
  otp: any;
  countryCode;
  // compareWith
  // selectedCode;
  countryCodes;
  userData: any;
  public phone: FormGroup;

  recaptchaVerifier;
  comfirmationResult: firebase.auth.ConfirmationResult;
  subscription: any;

  // compareWith = compareWithFn;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController,
    // private fb: FirebaseX,
    public af: AngularFireAuth,
    private alert: AlertController,
    private loading: LoadingService,
    private alertService: AlertService,
    private platform: Platform,
    private loginService: LoginService,
    public countryCodeService: CountryCodeService,
    private firebase: FirebaseX
  ) {
    this.countryCode = this.countryCodeService.getCountryCode();
    this.phone = this.formBuilder.group({
      inputNumber: new FormControl(
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ),
      code: new FormControl(
        "",
        Validators.compose([Validators.minLength(1), Validators.required])
      ),
    });
  }

  // seletedCode(item){
  //   this.countryCodes = item.dial_code
  //   console.log("country code", item)
  // }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" }
    );
    this.option = this.values;
  }

  ionViewDidEnter() {
    this.af.authState.subscribe((user) => {
      if (user) {
        this.subscription = this.platform.backButton.subscribe(() => {
          navigator["app"].exitApp();
        });
      }
    });
  }

  // proceed to the next step
  async next() {
    this.loading.show();
    console.log("this.countryCodes ===>", this.countryCodes);
    console.log("this.phoneNumber ===>", this.phoneNumber);
    console.log("this.recaptchaVerifier ===>", this.recaptchaVerifier);
    // if (this.platform.is("ios")) {
    console.log("in ios part ==>");
    this.firebase
      .verifyPhoneNumber(this.countryCode + this.phoneNumber, 100)
      .then((vdata) => {
        console.log("verifyPhoneNumber in ios ==>", vdata);
        // this.refConfirm = vdata;
        //you can redirect the person to a verification page or show an alert to
        // input verification code.
      })
      .catch((error) => {
        // let code = error["code"];
        // this.loading.hidePro();
        // this.alertService.showErrorMessage(code);
        console.log("new error", error);
      });
    // } else {
    //   this.af
    //     .signInWithPhoneNumber(
    //       this.countryCodes + this.phoneNumber,
    //       this.recaptchaVerifier
    //     )
    //     .then((result) => {
    //       console.log("signInWithPhoneNumber ====>", result);
    //       // this.phoneNumber = phone
    //       this.loading.hidePro();
    //       this.comfirmationResult = result;
    //       this.otpSent = true;
    //       this.optSentToast("Your OTP have been sent.");
    //     })
    //     .catch((error) => {
    //       let code = error["code"];
    //       this.loading.hidePro();
    //       this.alertService.showErrorMessage(code);
    //       console.log("err", error);
    //     });
    // }
  }

  // init the comfrim the code verification code
  initia() {
    this.loading.show();
    this.comfirmationResult
      .confirm(this.otp)
      .then(() => {
        // this.optSentToast('Verification have been verify')
        this.loginService.loginPhoneNumber(this.phoneNumber);
      })
      .catch((error) => {
        let code = error["code"];
        this.loading.hide();
        this.alertService.showErrorMessage(code);
      });
  }

  // clear
  clear() {
    this.otpSent = false;
  }

  // Alert to comfirm the number
  async presentAlertConfirm() {
    const alert = await this.alert.create({
      message:
        "We will be verifying the phone" +
        "<br>" +
        `<strong> ${this.phoneNumber} </strong>` +
        "<br>" +
        "<br>" +
        "is this OK, or would you like to edit this number?",
      buttons: [
        {
          text: "EDIT",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "Ok",
          handler: () => {
            this.next();
          },
        },
      ],
    });

    await alert.present();
  }

  // this handle the resend verification code
  async ResendSMS() {
    const alert = await this.alert.create({
      header: "Resent!",
      message:
        "<strong>Do want to resend comfirmation code</strong>" +
        this.phoneNumber,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "Okay",
          handler: () => {
            this.ResendCode();
          },
        },
      ],
    });
    await alert.present();
  }

  ResendCode() {
    this.loading.show();
    this.af
      .signInWithPhoneNumber(this.phoneNumber, this.recaptchaVerifier)
      .then((result) => {
        this.comfirmationResult = result;
        this.optSentToast("Your OTP have been sent.");
        this.loading.hide();
      })
      .catch((error) => {
        let code = error["code"];
        this.loading.hide();
        this.alertService.showErrorMessage(code);
      });
  }

  async optSentToast(option: string) {
    const toast = await this.toastController.create({
      message: option,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
}
