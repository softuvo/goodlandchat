(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding-top: 20px;\">\n    <ion-item lines=\"none\" (click)=\"toastShow()\">\n      <ion-icon slot=\"start\" color=\"secondary\" name=\"lock-closed\" class=\"settingsIcons\"></ion-icon>\n      <ion-label class=\"settingsText\">Privacy\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" (click)=\"security()\">\n      <ion-icon slot=\"start\" color=\"secondary\" name=\"key\" class=\"settingsIcons\"></ion-icon>\n      <ion-label class=\"settingsText\">Security\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" (click)=\"toastShow()\">\n      <ion-icon slot=\"start\" color=\"secondary\" name=\"chatbox-ellipses\" class=\"settingsIcons\"></ion-icon>\n      <ion-label class=\"settingsText\">Tow-step verification\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" (click)=\"changeNumber()\">\n      <ion-icon slot=\"start\" color=\"secondary\" name=\"exit\" class=\"settingsIcons\"></ion-icon>\n      <ion-label class=\"settingsText\">Change number\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" (click)=\"reqestInfo()\">\n      <ion-icon slot=\"start\" color=\"secondary\" name=\"document\" class=\"settingsIcons\"></ion-icon>\n      <ion-label class=\"settingsText\">Request account info\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" (click)=\"deleteAccount()\">\n      <ion-icon slot=\"start\" color=\"secondary\" name=\"trash\" class=\"settingsIcons\"></ion-icon>\n      <ion-label class=\"settingsText\">Delete my account\n      </ion-label>\n    </ion-item>\n  </div>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/account/account-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/account-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function srcAppPagesAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/pages/account/account.page.ts");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/account/account.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.module.ts ***!
      \*************************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function srcAppPagesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "./src/app/pages/account/account-routing.module.ts");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/pages/account/account.page.ts");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "./src/app/pages/account/account.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".settingsIcons {\n  font-size: 2em !important;\n}\n\n.settingsText {\n  margin-top: 5px;\n  width: 100%;\n}\n\nion-item {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksb0JBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3NJY29ucyB7XHJcbiAgICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZXR0aW5nc1RleHQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/account/account.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/account/account.page.ts ***!
      \***********************************************/

    /*! exports provided: AccountPage */

    /***/
    function srcAppPagesAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(toast, router) {
          _classCallCheck(this, AccountPage);

          this.toast = toast;
          this.router = router;
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //pop a notification

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
          } // router page 

        }, {
          key: "security",
          value: function security() {
            this.router.navigateByUrl("/security");
          } // router page 

        }, {
          key: "changeNumber",
          value: function changeNumber() {
            this.router.navigateByUrl('/changenumber');
          } // router page 

        }, {
          key: "reqestInfo",
          value: function reqestInfo() {
            this.router.navigateByUrl('/requestinfo');
          } // router page 

        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            this.router.navigateByUrl('/delete-account');
          }
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./account.page.scss */
        "./src/app/pages/account/account.page.scss"))["default"]]
      })], AccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-account-account-module-es5.js.map