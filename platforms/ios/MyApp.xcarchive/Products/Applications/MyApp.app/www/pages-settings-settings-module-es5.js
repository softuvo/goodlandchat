(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item lines=\"none\" (click)=\"profile()\">\n    <div class=\"profileimage\">\n      <img src=\"{{image}}\" alt=\"\">\n    </div>\n    <ion-label style=\"font-weight: bold;\">\n      <span style=\"font-size:16px\">\n        {{nikeName}}\n      </span>\n      <p style=\"color:#ccc;\">\n        {{description}}\n      </p>\n    </ion-label>\n  </ion-item>\n  <div class=\"splitter\"></div>\n  <ion-item lines=\"none\" (click)=\"account()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"key\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">Account\n      <p>Privacy, security, change number</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"chatsetting()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"chatbox-ellipses\" class=\"settingsIcons\">\n    </ion-icon>\n    <ion-label class=\"settingsText\">Chats\n      <p>Themes, wallpaper, chat history</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"notification()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"notifications\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">Notifications\n      <p>Message, group & call tones</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"help()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"help-circle\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">Help\n      <p>FAQ, contact us, privacy policy</p>\n    </ion-label>\n  </ion-item>\n  <div class=\"splitter\"></div>\n\n  <div class=\"buttons-collapse\">\n    <ion-label class=\"ion-text-center\">\n      <p>from pagas</p>\n      <div class=\"ion-text-center\">\n        <img src=\"assets/pagas_logo.png\" />\n      </div>\n    </ion-label>\n  </div>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/settings/settings-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/settings/settings-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function srcAppPagesSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "./src/app/pages/settings/settings.page.ts");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/settings/settings.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/settings/settings.module.ts ***!
      \***************************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function srcAppPagesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "./src/app/pages/settings/settings-routing.module.ts");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "./src/app/pages/settings/settings.page.ts");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/settings/settings.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/settings/settings.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.profileimage {\n  padding: 10px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n}\n.settingsIcons {\n  font-size: 2em !important;\n}\n.settingsText {\n  margin-top: 5px;\n  width: 100%;\n}\n.buttons {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 15px;\n  bottom: 0;\n}\nion-item {\n  padding-bottom: 20px;\n}\n.settingsItems {\n  padding-top: 0px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.splitter {\n  display: block;\n  height: 1px;\n  width: 100%;\n  margin-bottom: 20px;\n  background: #ccc;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQ0E7RUFDSSxvQkFBQTtBQUVKO0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUdKO0FBREE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXYucHJvZmlsZWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZXR0aW5nc0ljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNldHRpbmdzVGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zZXR0aW5nc0l0ZW1zIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNwbGl0dGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/settings/settings.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/settings/settings.page.ts ***!
      \*************************************************/

    /*! exports provided: SettingsPage */

    /***/
    function srcAppPagesSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(router, toast, dataService, navCtrl) {
          _classCallCheck(this, SettingsPage);

          this.router = router;
          this.toast = toast;
          this.dataService = dataService;
          this.navCtrl = navCtrl;
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).valueChanges().subscribe(function (user) {
              _this.nikeName = user.nikeName;
              _this.image = user.img;
              _this.description = user.description;
            });
          } //Route to Profile page

        }, {
          key: "profile",
          value: function profile() {
            this.router.navigateByUrl('/profile');
          } // Route to ACccount

        }, {
          key: "account",
          value: function account() {
            this.router.navigateByUrl('/account');
          }
        }, {
          key: "chatsetting",
          value: function chatsetting() {
            this.router.navigateByUrl('/chatsetting');
          }
        }, {
          key: "notification",
          value: function notification() {
            this.toastShow();
          } //pop a notification

        }, {
          key: "toastShow",
          value: function toastShow() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toast.create({
                        message: 'Oops, This feature is not availabe on this version.',
                        duration: 3000,
                        position: "top"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Route to hlep

        }, {
          key: "help",
          value: function help() {
            this.router.navigateByUrl("/help");
          } //Pop Back button

        }, {
          key: "back",
          value: function back() {
            this.navCtrl.pop();
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./settings.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./settings.page.scss */
        "./src/app/pages/settings/settings.page.scss"))["default"]]
      })], SettingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-settings-settings-module-es5.js.map