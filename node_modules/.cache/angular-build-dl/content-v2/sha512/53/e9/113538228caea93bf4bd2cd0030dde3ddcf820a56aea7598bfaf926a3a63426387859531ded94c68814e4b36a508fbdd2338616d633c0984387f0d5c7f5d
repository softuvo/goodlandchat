(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n    <div id=\"recaptcha-container\" style=\"display: none;\"></div>\n\n    <div *ngIf=\"!otpSent\">\n        <div class=\"label\">\n            <ion-label>Enter your phone number</ion-label>\n        </div>\n        <div>\n            <p class=\"p\">\n                WhatsApp will send an SMS message to verify your phone number.\n                <span style=\"color: rgb(98, 98, 243);\">What's my number?</span>\n            </p>\n        </div>\n        <div style=\"margin: 20px;\">\n            <div class=\"input\">\n                <form [formGroup]=\"phone\">\n                    <ion-item lines=\"none\" style=\"text-align: center;\">\n                        <ion-select placeholder=\"code\" formControlName=\"code\" [(ngModel)]=\"countryCodes\">\n                            <ion-label style=\"font-size: smaller;\">SELECT YOUR COUNTRY</ion-label>\n                            <ion-select-option *ngFor=\"let code of countryCode\">{{code.dial_code}}\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-input [(ngModel)]=\"phoneNumber\" type=\"text\" style=\"text-align: start;\" formControlName=\"inputNumber\"\n                            placeholder=\"8034524290\"></ion-input>\n                    </ion-item>\n                </form>\n                <hr>\n                <div>\n                    <p style=\"text-align: center;\">\n                        Carrier SMS changes may apply\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"button\">\n            <ion-button expand=\"block\" (click)=\"presentAlertConfirm()\" [disabled]=\"!phone.valid\">\n                NEXT\n            </ion-button>\n        </div>\n    </div>\n\n    <div *ngIf=\"otpSent\">\n        <div class=\"label\">\n            <ion-label>Verify {{phoneNumber}}</ion-label>\n        </div>\n        <div>\n            <p class=\"p\">\n                Waiting to automatically detect an SMS sent to {{phoneNumber}}\n                <span style=\"color: rgb(98, 98, 243);\" (click)=\"clear()\">Wrong number?</span>\n            </p>\n        </div>\n        <div style=\"margin: 20px;\">\n            <div class=\"input\">\n                <ion-item lines=\"none\" style=\"text-align: center;\">\n                    <ion-input placeholder=\"-- -- -- -- -- -- \" [(ngModel)]=\"otp\"></ion-input>\n                </ion-item>\n                <hr class=\"hr\">\n                <div>\n                    <p style=\"text-align: center;\">\n                        Enter 6-digit code\n                    </p>\n                </div>\n            </div>\n        </div>\n        <ion-item (click)=\"ResendSMS()\" style=\"padding-bottom: 5px;\">\n            <ion-icon name=\"chatbox-ellipses\" slot=\"start\"></ion-icon>\n            <ion-label>Resend SMS</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"padding-top: 5px;\">\n            <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n            <ion-label>Call me</ion-label>\n        </ion-item>\n        <div class=\"button\">\n            <ion-button expand=\"block\" (click)=\"initia()\">\n                Verify\n            </ion-button>\n        </div>\n    </div>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label {\n  text-align: center;\n  font-size: larger;\n  font-weight: 800;\n  margin: 15px;\n  color: #4d9061;\n}\n\n.p {\n  text-align: center;\n  font-size: medium;\n  padding-top: 15px;\n}\n\nhr {\n  background: #4d9061;\n}\n\n.button {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 15px;\n  bottom: 0;\n}\n\nhr.hr {\n  background: #4d9061;\n  width: 180px;\n}\n\n.label {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGNvbG9yOiAjNGQ5MDYxO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5ociB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGQ5MDYxO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuaHIuaHIge1xyXG4gICAgYmFja2dyb3VuZDogIzRkOTA2MTtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_country_code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/country-code.service */
      "./src/app/services/country-code.service.ts");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */
      // import { FirebaseX } from "@ionic-native/firebase-x/ngx";


      var LoginPage = /*#__PURE__*/function () {
        // compareWith = compareWithFn;
        function LoginPage(formBuilder, router, toastController, // private fb: FirebaseX,
        af, alert, loading, alertService, platform, loginService, countryCodeService) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.toastController = toastController;
          this.af = af;
          this.alert = alert;
          this.loading = loading;
          this.alertService = alertService;
          this.platform = platform;
          this.loginService = loginService;
          this.countryCodeService = countryCodeService;
          this.showCodeInput = false;
          this.otpSent = false;
          this.countryCode = this.countryCodeService.getCountryCode();
          this.phone = this.formBuilder.group({
            inputNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]))
          });
        } // seletedCode(item){
        //   this.countryCodes = item.dial_code
        //   console.log("country code", item)
        // }


        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].RecaptchaVerifier('recaptcha-container', {
              'size': 'invisible'
            });
            this.option = this.values;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.af.authState.subscribe(function (user) {
              if (user) {
                _this.subscription = _this.platform.backButton.subscribe(function () {
                  navigator['app'].exitApp();
                });
              }
            });
          } // proceed to the next step

        }, {
          key: "next",
          value: function next() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loading.show();
                      this.af.signInWithPhoneNumber(this.countryCodes + this.phoneNumber, this.recaptchaVerifier).then(function (result) {
                        // this.phoneNumber = phone
                        _this2.loading.hidePro();

                        _this2.comfirmationResult = result;
                        _this2.otpSent = true;

                        _this2.optSentToast('Your OTP have been sent.');
                      })["catch"](function (error) {
                        var code = error["code"];

                        _this2.loading.hidePro();

                        _this2.alertService.showErrorMessage(code); // console.log("err", error)

                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // init the comfrim the code verification code

        }, {
          key: "initia",
          value: function initia() {
            var _this3 = this;

            this.loading.show();
            this.comfirmationResult.confirm(this.otp).then(function () {
              // this.optSentToast('Verification have been verify')
              _this3.loginService.loginPhoneNumber(_this3.phoneNumber);
            })["catch"](function (error) {
              var code = error['code'];

              _this3.loading.hide();

              _this3.alertService.showErrorMessage(code);
            });
          } // clear

        }, {
          key: "clear",
          value: function clear() {
            this.otpSent = false;
          } // Alert to comfirm the number

        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.create({
                        message: 'We will be verifying the phone' + '<br>' + "<strong> ".concat(this.phoneNumber, " </strong>") + '<br>' + '<br>' + 'is this OK, or would you like to edit this number?',
                        buttons: [{
                          text: 'EDIT',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            _this4.next();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // this handle the resend verification code

        }, {
          key: "ResendSMS",
          value: function ResendSMS() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alert.create({
                        header: 'Resent!',
                        message: '<strong>Do want to resend comfirmation code</strong>' + this.phoneNumber,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            _this5.ResendCode();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ResendCode",
          value: function ResendCode() {
            var _this6 = this;

            this.loading.show();
            this.af.signInWithPhoneNumber(this.phoneNumber, this.recaptchaVerifier).then(function (result) {
              _this6.comfirmationResult = result;

              _this6.optSentToast('Your OTP have been sent.');

              _this6.loading.hide();
            })["catch"](function (error) {
              var code = error['code'];

              _this6.loading.hide();

              _this6.alertService.showErrorMessage(code);
            });
          }
        }, {
          key: "optSentToast",
          value: function optSentToast(option) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: option,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _services_country_code_service__WEBPACK_IMPORTED_MODULE_1__["CountryCodeService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map