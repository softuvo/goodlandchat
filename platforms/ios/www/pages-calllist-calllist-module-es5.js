(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calllist-calllist-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calllist/calllist.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calllist/calllist.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCalllistCalllistPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Make call</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let item of accounts\">\n    <ion-item *ngIf=\"item.userId != currentUserId\">\n      <div class=\"profileimage\">\n        <img src=\"{{item.img}}\" />\n      </div>\n      <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n        <span style=\"font-size:16px; text-transform: capitalize;\">\n          {{item.nikeName}}\n        </span>\n        <span style=\"display: flex;margin-top: 6px;\">\n          <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n            {{item.description}}\n          </span>\n        </span>\n      </ion-label>\n      <ion-icon color=\"secondary\" name=\"call\" slot=\"end\" (click)=\"call(item)\"></ion-icon>\n      <ion-icon color=\"secondary\" name=\"videocam\" slot=\"end\" (click)=\"videoCall(item)\"></ion-icon>\n    </ion-item>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/calllist/calllist-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/calllist/calllist-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CalllistPageRoutingModule */

    /***/
    function srcAppPagesCalllistCalllistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalllistPageRoutingModule", function () {
        return CalllistPageRoutingModule;
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


      var _calllist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calllist.page */
      "./src/app/pages/calllist/calllist.page.ts");

      var routes = [{
        path: '',
        component: _calllist_page__WEBPACK_IMPORTED_MODULE_3__["CalllistPage"]
      }];

      var CalllistPageRoutingModule = function CalllistPageRoutingModule() {
        _classCallCheck(this, CalllistPageRoutingModule);
      };

      CalllistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalllistPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/calllist/calllist.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/calllist/calllist.module.ts ***!
      \***************************************************/

    /*! exports provided: CalllistPageModule */

    /***/
    function srcAppPagesCalllistCalllistModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalllistPageModule", function () {
        return CalllistPageModule;
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


      var _calllist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calllist-routing.module */
      "./src/app/pages/calllist/calllist-routing.module.ts");
      /* harmony import */


      var _calllist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calllist.page */
      "./src/app/pages/calllist/calllist.page.ts");

      var CalllistPageModule = function CalllistPageModule() {
        _classCallCheck(this, CalllistPageModule);
      };

      CalllistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calllist_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalllistPageRoutingModule"]],
        declarations: [_calllist_page__WEBPACK_IMPORTED_MODULE_6__["CalllistPage"]]
      })], CalllistPageModule);
      /***/
    },

    /***/
    "./src/app/pages/calllist/calllist.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/calllist/calllist.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCalllistCalllistPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  padding-right: 15px;\n}\n\ndiv.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\n\ndiv.profileimage img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsbGxpc3QvY2FsbGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGxsaXN0L2NhbGxsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmRpdi5wcm9maWxlaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/calllist/calllist.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/calllist/calllist.page.ts ***!
      \*************************************************/

    /*! exports provided: CalllistPage */

    /***/
    function srcAppPagesCalllistCalllistPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalllistPage", function () {
        return CalllistPage;
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


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var CalllistPage = /*#__PURE__*/function () {
        function CalllistPage(loading, dataService, // private network: Network,
        callNumber, toast, router, afDB) {
          _classCallCheck(this, CalllistPage);

          this.loading = loading;
          this.dataService = dataService;
          this.callNumber = callNumber;
          this.toast = toast;
          this.router = router;
          this.afDB = afDB; // pass the currernt userId to the variable 

          this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid;
        }

        _createClass(CalllistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //Initialized
            this.searchUser = "";
            this.dataService.getUsers().valueChanges().subscribe(function (accounts) {
              _this.accounts = accounts; // get current user info

              _this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid).valueChanges().subscribe(function (account) {
                //add own userId as excludedIds.
                _this.excludedIds = [];
                _this.account = account;

                if (_this.excludedIds.indexOf(account.userId) == -1) {
                  _this.excludedIds.push(account.userId);
                }
              });
            });
          } // make call, the item handle the object of each data touch

        }, {
          key: "call",
          value: function call(item) {
            var _this2 = this;

            this.callNumber.callNumber("".concat(item.phoneNumber), true).then(function () {
              // fetch the data to current database
              _this2.afDB.list('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid + '/call/').push({
                date: new Date().toString(),
                userId: item.userId,
                type: 'calling',
                icon: 'call',
                call: 'call'
              }).then(function () {
                _this2.afDB.list('/accounts/' + item.userId + '/call/').push({
                  date: new Date().toString(),
                  userId: firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid,
                  type: 'calling',
                  icon: 'call',
                  call: 'misscall'
                });
              }); // if something goes wrong handle toast notify

            })["catch"](function (err) {
              return _this2.something();
            });
          } // toast notification

        }, {
          key: "something",
          value: function something() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toast.create({
                        message: 'Something going wrong.',
                        duration: 2000
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
          } // make the vieo call, then router take part

        }, {
          key: "videoCall",
          value: function videoCall(item) {
            this.router.navigate(["/calling", {
              'image': item.img,
              'name': item.nikeName,
              'userId': item.userId
            }]);
          }
        }]);

        return CalllistPage;
      }();

      CalllistPage.ctorParameters = function () {
        return [{
          type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]
        }];
      };

      CalllistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calllist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./calllist.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calllist/calllist.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./calllist.page.scss */
        "./src/app/pages/calllist/calllist.page.scss"))["default"]]
      })], CalllistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-calllist-calllist-module-es5.js.map