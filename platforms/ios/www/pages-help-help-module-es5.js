(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-help-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding-bottom: 25px;\"></div>\n  <ion-item lines=\"none\" (click)=\"toastShow()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"help-circle-outline\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">FAQ\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"mail()\">\n    <ion-icon slot=\"start\" color=\"secondary\" r=\"secondLevelGreen\" name=\"people\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">Contact us\n      <p>Question? Need hlep?</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"toastShow()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"document\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">Terms and Privacy Policy\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"appInfo()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"information-circle-outline\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">App info\n    </ion-label>\n  </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/help/help-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/help/help-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HelpPageRoutingModule */

    /***/
    function srcAppPagesHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function () {
        return HelpPageRoutingModule;
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


      var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./help.page */
      "./src/app/pages/help/help.page.ts");

      var routes = [{
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
      }];

      var HelpPageRoutingModule = function HelpPageRoutingModule() {
        _classCallCheck(this, HelpPageRoutingModule);
      };

      HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HelpPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/help/help.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/help/help.module.ts ***!
      \*******************************************/

    /*! exports provided: HelpPageModule */

    /***/
    function srcAppPagesHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
        return HelpPageModule;
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


      var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./help-routing.module */
      "./src/app/pages/help/help-routing.module.ts");
      /* harmony import */


      var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./help.page */
      "./src/app/pages/help/help.page.ts");

      var HelpPageModule = function HelpPageModule() {
        _classCallCheck(this, HelpPageModule);
      };

      HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
      })], HelpPageModule);
      /***/
    },

    /***/
    "./src/app/pages/help/help.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/help/help.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  padding-bottom: 15px;\n}\n\n.settingsIcons {\n  font-size: 2em !important;\n}\n\n.settingsText {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVscC9oZWxwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKOztBQUFBO0VBRUksV0FBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5zZXR0aW5nc0ljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNldHRpbmdzVGV4dCB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/help/help.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/help/help.page.ts ***!
      \*****************************************/

    /*! exports provided: HelpPage */

    /***/
    function srcAppPagesHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
        return HelpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var HelpPage = /*#__PURE__*/function () {
        function HelpPage(router, toast) {
          _classCallCheck(this, HelpPage);

          this.router = router;
          this.toast = toast;
        }

        _createClass(HelpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "appInfo",
          value: function appInfo() {
            this.router.navigateByUrl('/accountinfo');
          } // send mail to the developer

        }, {
          key: "mail",
          value: function mail() {
            window.open("mailto:abubakarpagas@gmail.com?Subject=Help", "_system");
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
          }
        }]);

        return HelpPage;
      }();

      HelpPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }];
      };

      HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./help.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./help.page.scss */
        "./src/app/pages/help/help.page.scss"))["default"]]
      })], HelpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-help-help-module-es5.js.map