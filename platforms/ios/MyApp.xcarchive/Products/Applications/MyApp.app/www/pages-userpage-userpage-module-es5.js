(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userpage-userpage-module"], {
    /***/
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
      \**************************************************************************/

    /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

    /***/
    function node_modulesNg2SearchFilter__ivy_ngcc__Ng2SearchFilterJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
        return Ng2SearchPipeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
        return Ng2SearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Ng2SearchPipe = /*#__PURE__*/function () {
        function Ng2SearchPipe() {
          _classCallCheck(this, Ng2SearchPipe);
        }

        _createClass(Ng2SearchPipe, [{
          key: "transform",

          /**
           * @param {?} items object from array
           * @param {?} term term's search
           * @return {?}
           */
          value: function transform(items, term) {
            if (!term || !items) return items;
            return Ng2SearchPipe.filter(items, term);
          }
          /**
           *
           * @param {?} items List of items to filter
           * @param {?} term  a string term to compare with every property of the list
           *
           * @return {?}
           */

        }], [{
          key: "filter",
          value: function filter(items, term) {
            var
            /** @type {?} */
            toCompare = term.toLowerCase();
            /**
             * @param {?} item
             * @param {?} term
             * @return {?}
             */

            function checkInside(item, term) {
              for (var
              /** @type {?} */
              property in item) {
                if (item[property] === null || item[property] == undefined) {
                  continue;
                }

                if (typeof item[property] === 'object') {
                  if (checkInside(item[property], term)) {
                    return true;
                  }
                }

                if (item[property].toString().toLowerCase().includes(toCompare)) {
                  return true;
                }
              }

              return false;
            }

            return items.filter(function (item) {
              return checkInside(item, term);
            });
          }
        }]);

        return Ng2SearchPipe;
      }();

      Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
        return new (t || Ng2SearchPipe)();
      };

      Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: Ng2SearchPipe,
        pure: false
      });
      Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Ng2SearchPipe,
        factory: Ng2SearchPipe.ɵfac
      });
      /**
       * @nocollapse
       */

      Ng2SearchPipe.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter',
            pure: false
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var Ng2SearchPipeModule = function Ng2SearchPipeModule() {
        _classCallCheck(this, Ng2SearchPipeModule);
      };

      Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: Ng2SearchPipeModule
      });
      Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function Ng2SearchPipeModule_Factory(t) {
          return new (t || Ng2SearchPipeModule)();
        }
      });
      /**
       * @nocollapse
       */

      Ng2SearchPipeModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
          declarations: [Ng2SearchPipe],
          exports: [Ng2SearchPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [Ng2SearchPipe],
            exports: [Ng2SearchPipe]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-search-filter.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userpage/userpage.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userpage/userpage.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUserpageUserpagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>People</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]=\"term\" placeholder=\"Search people\"></ion-searchbar>\n\n\n  <ion-list *ngFor=\"let account of accounts | filter:term\">\n    <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n      (click)=\"chat(account.userId)\">\n      <div class=\"profileimage\">\n        <img src=\"{{account.img}}\" />\n      </div>\n      <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n        <span style=\"font-size:16px; text-transform: capitalize;\">\n          {{account.nikeName}}\n        </span>\n        <span style=\"display: flex;margin-top: 6px;\">\n          <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n            {{account.description}}\n          </span>\n        </span>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/userpage/userpage-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/userpage/userpage-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: UserpagePageRoutingModule */

    /***/
    function srcAppPagesUserpageUserpageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserpagePageRoutingModule", function () {
        return UserpagePageRoutingModule;
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


      var _userpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./userpage.page */
      "./src/app/pages/userpage/userpage.page.ts");

      var routes = [{
        path: '',
        component: _userpage_page__WEBPACK_IMPORTED_MODULE_3__["UserpagePage"]
      }];

      var UserpagePageRoutingModule = function UserpagePageRoutingModule() {
        _classCallCheck(this, UserpagePageRoutingModule);
      };

      UserpagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserpagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/userpage/userpage.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/userpage/userpage.module.ts ***!
      \***************************************************/

    /*! exports provided: UserpagePageModule */

    /***/
    function srcAppPagesUserpageUserpageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserpagePageModule", function () {
        return UserpagePageModule;
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


      var _userpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./userpage-routing.module */
      "./src/app/pages/userpage/userpage-routing.module.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var _userpage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./userpage.page */
      "./src/app/pages/userpage/userpage.page.ts");

      var UserpagePageModule = function UserpagePageModule() {
        _classCallCheck(this, UserpagePageModule);
      };

      UserpagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"], _userpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserpagePageRoutingModule"]],
        declarations: [_userpage_page__WEBPACK_IMPORTED_MODULE_7__["UserpagePage"]]
      })], UserpagePageModule);
      /***/
    },

    /***/
    "./src/app/pages/userpage/userpage.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/userpage/userpage.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUserpageUserpagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnBhZ2UvdXNlcnBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VycGFnZS91c2VycGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucHJvZmlsZWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDU4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/userpage/userpage.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/userpage/userpage.page.ts ***!
      \*************************************************/

    /*! exports provided: UserpagePage */

    /***/
    function srcAppPagesUserpageUserpagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserpagePage", function () {
        return UserpagePage;
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


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var UserpagePage = /*#__PURE__*/function () {
        function UserpagePage(loading, dataService, // private network: Network,
        toast, router) {
          _classCallCheck(this, UserpagePage);

          this.loading = loading;
          this.dataService = dataService;
          this.toast = toast;
          this.router = router;
          this.term = '';
          this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid;
        }

        _createClass(UserpagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //Initialized
            this.searchUser = "";
            this.dataService.getUsers().valueChanges().subscribe(function (accounts) {
              _this.accounts = accounts;

              _this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).valueChanges().subscribe(function (account) {
                //add own userId as excludedIds.
                _this.excludedIds = [];
                _this.account = account;

                if (_this.excludedIds.indexOf(account.userId) == -1) {
                  _this.excludedIds.push(account.userId);
                }
              });
            });
          }
        }, {
          key: "chat",
          value: function chat(userId) {
            // if it's is current user navigate to profile
            if (userId === this.currentUserId) {
              this.router.navigateByUrl("/profile");
            } else {
              // else Not chat Page
              this.router.navigate(['/do-chat', {
                'userId': userId
              }]);
            }
          }
        }]);

        return UserpagePage;
      }();

      UserpagePage.ctorParameters = function () {
        return [{
          type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      UserpagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userpage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./userpage.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userpage/userpage.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./userpage.page.scss */
        "./src/app/pages/userpage/userpage.page.scss"))["default"]]
      })], UserpagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-userpage-userpage-module-es5.js.map