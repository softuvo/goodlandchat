(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-delete-account-delete-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delete-account/delete-account.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delete-account/delete-account.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDeleteAccountDeleteAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Delete my account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div>\n    <ion-icon name=\"newspaper\" slot=\"start\"></ion-icon>\n    <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n      <span style=\"font-size:16px; text-transform: capitalize;\">\n        Deleting your account will:\n      </span>\n      <span style=\"display: flex;margin-top: 6px;\">\n        <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n          <p>.Delete your account from WhatsApp from pagas</p>\n          <p>.Erase your message history</p>\n          <p>.Delete you from all of your WhatsApp, groups</p>\n        </span>\n\n      </span>\n    </ion-label>\n  </div>\n\n  <div style=\"padding: 10px; padding-top: 20%;\">\n    <ion-icon name=\"newspaper\" slot=\"start\"></ion-icon>\n    <span style=\"font-size:16px; text-transform: capitalize; padding: 10px;\">\n      Change number instead?\n    </span>\n    <ion-button (click)=\"change()\" expand=\"block\" color=\"primary\">\n      CHANGE NUMBER\n    </ion-button>\n  </div>\n\n\n  <ion-item lines=\"none\" style=\"text-align: center; padding-top: 20%;\">\n    <ion-input [(ngModel)]=\"phoneNumber\" type=\"text\" placeholder=\"e.g +2348034524290\">\n    </ion-input>\n  </ion-item>\n\n  <ion-button (click)=\"delete()\" expand=\"block\" color=\"danger\">\n    DELETE MY ACCOUNT\n  </ion-button>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/delete-account/delete-account-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/delete-account/delete-account-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DeleteAccountPageRoutingModule */

    /***/
    function srcAppPagesDeleteAccountDeleteAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteAccountPageRoutingModule", function () {
        return DeleteAccountPageRoutingModule;
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


      var _delete_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./delete-account.page */
      "./src/app/pages/delete-account/delete-account.page.ts");

      var routes = [{
        path: '',
        component: _delete_account_page__WEBPACK_IMPORTED_MODULE_3__["DeleteAccountPage"]
      }];

      var DeleteAccountPageRoutingModule = function DeleteAccountPageRoutingModule() {
        _classCallCheck(this, DeleteAccountPageRoutingModule);
      };

      DeleteAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeleteAccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/delete-account/delete-account.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/delete-account/delete-account.module.ts ***!
      \***************************************************************/

    /*! exports provided: DeleteAccountPageModule */

    /***/
    function srcAppPagesDeleteAccountDeleteAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteAccountPageModule", function () {
        return DeleteAccountPageModule;
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


      var _delete_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./delete-account-routing.module */
      "./src/app/pages/delete-account/delete-account-routing.module.ts");
      /* harmony import */


      var _delete_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./delete-account.page */
      "./src/app/pages/delete-account/delete-account.page.ts");

      var DeleteAccountPageModule = function DeleteAccountPageModule() {
        _classCallCheck(this, DeleteAccountPageModule);
      };

      DeleteAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _delete_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeleteAccountPageRoutingModule"]],
        declarations: [_delete_account_page__WEBPACK_IMPORTED_MODULE_6__["DeleteAccountPage"]]
      })], DeleteAccountPageModule);
      /***/
    },

    /***/
    "./src/app/pages/delete-account/delete-account.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/delete-account/delete-account.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDeleteAccountDeleteAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVsZXRlLWFjY291bnQvZGVsZXRlLWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVsZXRlLWFjY291bnQvZGVsZXRlLWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/delete-account/delete-account.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/delete-account/delete-account.page.ts ***!
      \*************************************************************/

    /*! exports provided: DeleteAccountPage */

    /***/
    function srcAppPagesDeleteAccountDeleteAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteAccountPage", function () {
        return DeleteAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/status.service */
      "./src/app/services/status.service.ts");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var DeleteAccountPage = /*#__PURE__*/function () {
        function DeleteAccountPage(router, afdb, dataService, loading, statusService) {
          _classCallCheck(this, DeleteAccountPage);

          this.router = router;
          this.afdb = afdb;
          this.dataService = dataService;
          this.loading = loading;
          this.statusService = statusService;
        }

        _createClass(DeleteAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).valueChanges().subscribe(function (user) {
              // pass the parameter to the veriable 
              _this.phoneNumber = user.phoneNumber;
            });
          } // make route to change number

        }, {
          key: "change",
          value: function change() {
            this.router.navigateByUrl('/changenumber');
          } //Delete your account and database

        }, {
          key: "delete",
          value: function _delete() {
            var _this2 = this;

            this.loading.show();
            this.afdb.object('/account' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).query.orderByChild('phoneNumber').equalTo(this.phoneNumber).once('value', function (snap) {
              _this2.afdb.database.ref('/account').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).remove().then(function () {
                firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().signOut().then(function (success) {
                  _this2.loading.hide();

                  _this2.router.navigateByUrl('/welcome');
                });
              });
            });
          }
        }]);

        return DeleteAccountPage;
      }();

      DeleteAccountPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: _services_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"]
        }];
      };

      DeleteAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-delete-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./delete-account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delete-account/delete-account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./delete-account.page.scss */
        "./src/app/pages/delete-account/delete-account.page.scss"))["default"]]
      })], DeleteAccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-delete-account-delete-account-module-es5.js.map