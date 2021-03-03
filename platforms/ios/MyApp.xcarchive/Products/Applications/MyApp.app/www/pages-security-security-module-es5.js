(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-security-security-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security/security.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security/security.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSecuritySecurityPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Security</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"profileimage\">\n    <img src=\"assets/images/security.png\" alt=\"\">\n  </div>\n\n  <div class=\"ion-padding\">\n    <p>\n      Your messages and call are securited with-end-to-end encryption which means\n      WhatsApp and third parties can't read or listen to them.\n    </p>\n\n    <ion-item lines=\"none\">\n      <ion-label>Show security notification</ion-label>\n      <ion-toggle slot=\"end\"></ion-toggle>\n    </ion-item>\n    <p>\n      Turn on this setting to receive notifications when a contact's security code has changes,\n      Your messages and call are encrpted regardless of this setting.\n    </p>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/security/security-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/security/security-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SecurityPageRoutingModule */

    /***/
    function srcAppPagesSecuritySecurityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityPageRoutingModule", function () {
        return SecurityPageRoutingModule;
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


      var _security_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./security.page */
      "./src/app/pages/security/security.page.ts");

      var routes = [{
        path: '',
        component: _security_page__WEBPACK_IMPORTED_MODULE_3__["SecurityPage"]
      }];

      var SecurityPageRoutingModule = function SecurityPageRoutingModule() {
        _classCallCheck(this, SecurityPageRoutingModule);
      };

      SecurityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SecurityPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/security/security.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/security/security.module.ts ***!
      \***************************************************/

    /*! exports provided: SecurityPageModule */

    /***/
    function srcAppPagesSecuritySecurityModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function () {
        return SecurityPageModule;
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


      var _security_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./security-routing.module */
      "./src/app/pages/security/security-routing.module.ts");
      /* harmony import */


      var _security_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./security.page */
      "./src/app/pages/security/security.page.ts");

      var SecurityPageModule = function SecurityPageModule() {
        _classCallCheck(this, SecurityPageModule);
      };

      SecurityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _security_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecurityPageRoutingModule"]],
        declarations: [_security_page__WEBPACK_IMPORTED_MODULE_6__["SecurityPage"]]
      })], SecurityPageModule);
      /***/
    },

    /***/
    "./src/app/pages/security/security.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/security/security.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSecuritySecurityPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  width: 50%;\n  height: 100%;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHkvc2VjdXJpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWN1cml0eS9zZWN1cml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucHJvZmlsZWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/security/security.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/security/security.page.ts ***!
      \*************************************************/

    /*! exports provided: SecurityPage */

    /***/
    function srcAppPagesSecuritySecurityPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityPage", function () {
        return SecurityPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var SecurityPage = /*#__PURE__*/function () {
        function SecurityPage() {
          _classCallCheck(this, SecurityPage);
        }

        _createClass(SecurityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SecurityPage;
      }();

      SecurityPage.ctorParameters = function () {
        return [];
      };

      SecurityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./security.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security/security.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./security.page.scss */
        "./src/app/pages/security/security.page.scss"))["default"]]
      })], SecurityPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-security-security-module-es5.js.map