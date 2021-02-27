(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newbroadcast-newbroadcast-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newbroadcast/newbroadcast.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newbroadcast/newbroadcast.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNewbroadcastNewbroadcastPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"padding-left: 5px;\">\n      <span style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">New broadcast</span>\n      <ion-label class=\"ion-text-center\">{{broadcastMembers.length}} of 256 selected</ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding-top: 10px; padding-bottom: 20px;\">\n    <div class=\"groupAdded\">\n      <div class=\"thumnails\" *ngIf=\"broadcastMembers\">\n        <div class=\"list-thumbnail\">\n          <div class=\"img-thumb\" *ngFor=\"let member of broadcastMembers\" (click)=\"removeFromGroup(member)\">\n            <ion-avatar>\n              <img [src]=\"member.img\" />\n            </ion-avatar>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-list *ngFor=\"let account of accounts\">\n    <div *ngIf=\"account.userId != userId \">\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        *ngIf=\"!inGroup(account)\" (click)=\"addToGroup(account); $event.stopPropagation();\">\n        <div class=\"profileimage\">\n          <img src=\"{{account.img}}\" alt=\"\">\n        </div>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{account.nikeName}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n              {{account.description}}\n            </span>\n          </span>\n        </ion-label>\n      </ion-item>\n    </div>\n\n    <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n      *ngIf=\"inGroup(account)\" (click)=\"removeFromGroup(account); $event.stopPropagation();\">\n      <div class=\"profileimage\">\n        <img src=\"{{account.img}}\" alt=\"\">\n        <ion-icon slot=\"start\" name=\"checkmark-circle\" color=\"primary\"\n          style=\"margin-bottom:0 !important;margin-left:29px !important;margin-top:33px !important; position: absolute; font-size: x-large;\">\n        </ion-icon>\n      </div>\n\n      <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n        <span style=\"font-size:16px; text-transform: capitalize;\">\n          {{account.nikeName}}\n        </span>\n        <span style=\"display: flex;margin-top: 6px;\">\n          <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n            {{account.description}}\n          </span>\n        </span>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container>\n      <ion-fab-button (click)=\"newBroadcast()\">\n        <ion-icon expand=\"icon-only\" name=\"checkmark\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n  </ion-fab>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/newbroadcast/newbroadcast-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/newbroadcast/newbroadcast-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NewbroadcastPageRoutingModule */

    /***/
    function srcAppPagesNewbroadcastNewbroadcastRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewbroadcastPageRoutingModule", function () {
        return NewbroadcastPageRoutingModule;
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


      var _newbroadcast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newbroadcast.page */
      "./src/app/pages/newbroadcast/newbroadcast.page.ts");

      var routes = [{
        path: '',
        component: _newbroadcast_page__WEBPACK_IMPORTED_MODULE_3__["NewbroadcastPage"]
      }];

      var NewbroadcastPageRoutingModule = function NewbroadcastPageRoutingModule() {
        _classCallCheck(this, NewbroadcastPageRoutingModule);
      };

      NewbroadcastPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewbroadcastPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/newbroadcast/newbroadcast.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/newbroadcast/newbroadcast.module.ts ***!
      \***********************************************************/

    /*! exports provided: NewbroadcastPageModule */

    /***/
    function srcAppPagesNewbroadcastNewbroadcastModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewbroadcastPageModule", function () {
        return NewbroadcastPageModule;
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


      var _newbroadcast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newbroadcast-routing.module */
      "./src/app/pages/newbroadcast/newbroadcast-routing.module.ts");
      /* harmony import */


      var _newbroadcast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newbroadcast.page */
      "./src/app/pages/newbroadcast/newbroadcast.page.ts");

      var NewbroadcastPageModule = function NewbroadcastPageModule() {
        _classCallCheck(this, NewbroadcastPageModule);
      };

      NewbroadcastPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _newbroadcast_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewbroadcastPageRoutingModule"]],
        declarations: [_newbroadcast_page__WEBPACK_IMPORTED_MODULE_6__["NewbroadcastPage"]]
      })], NewbroadcastPageModule);
      /***/
    },

    /***/
    "./src/app/pages/newbroadcast/newbroadcast.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/newbroadcast/newbroadcast.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNewbroadcastNewbroadcastPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.thumnails .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border-radius: 4px;\n  width: 50px;\n  margin: 0 15px 0 0;\n  line-height: 60px;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nion-content ion-toolbar {\n  --background: translucent;\n}\n.usernameView {\n  text-align: center;\n  font-size: small;\n  font-weight: bolder;\n}\ndiv.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\ndiv.headers {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.headers img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n.backgrondColor {\n  padding-top: 10px;\n  background: #dbdada;\n  height: 80vh;\n}\n.img-wrapper {\n  min-height: 100px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3YnJvYWRjYXN0L25ld2Jyb2FkY2FzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFHWjtBQUNBO0VBQ0ksYUFBQTtBQUVKO0FBQUE7RUFDSSx5QkFBQTtBQUdKO0FBREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJSjtBQUZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTVI7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUpJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtBQUtSO0FBREE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUlKO0FBREE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld2Jyb2FkY2FzdC9uZXdicm9hZGNhc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1uYWlscyB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAubGlzdC10aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC5pbWctdGh1bWIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG59XHJcbi51c2VybmFtZVZpZXcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuZGl2LnByb2ZpbGVpbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdi5oZWFkZXJzIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDU4cHg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvbmRDb2xvciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkYmRhZGE7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5pbWctd3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/newbroadcast/newbroadcast.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/newbroadcast/newbroadcast.page.ts ***!
      \*********************************************************/

    /*! exports provided: NewbroadcastPage */

    /***/
    function srcAppPagesNewbroadcastNewbroadcastPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewbroadcastPage", function () {
        return NewbroadcastPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
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


      var NewbroadcastPage = /*#__PURE__*/function () {
        function NewbroadcastPage(dataService, toastController, loading, angularDb, navCtrl) {
          _classCallCheck(this, NewbroadcastPage);

          this.dataService = dataService;
          this.toastController = toastController;
          this.loading = loading;
          this.angularDb = angularDb;
          this.navCtrl = navCtrl;
          this.broadcast = {};
          this.broadcastMembers = [];
          this.userId = firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid;
        }

        _createClass(NewbroadcastPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.getUsers().valueChanges().subscribe(function (accounts) {
              _this.accounts = accounts;
            });
          } //Add friend to member of groups

        }, {
          key: "addToGroup",
          value: function addToGroup(account) {
            this.broadcastMembers.push(account);
          } // Remove friend from members of group.

        }, {
          key: "removeFromGroup",
          value: function removeFromGroup(account) {
            var index = -1;

            for (var i = 0; i < this.broadcastMembers.length; i++) {
              if (this.broadcastMembers[i].userId == account.userId) {
                index = i;
              }
            }

            if (index > -1) {
              this.broadcastMembers.splice(index, 1);
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.newBroadcast();

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Check if friend is already added to the group or not.

        }, {
          key: "inGroup",
          value: function inGroup(friend) {
            for (var i = 0; i < this.broadcastMembers.length; i++) {
              if (this.broadcastMembers[i].userId == friend.userId) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "newBroadcast",
          value: function newBroadcast() {
            var _this2 = this;

            var promise = new Promise(function (resolve) {
              _this2.loading.show();

              var messages = [];
              var lengthMemeber = _this2.broadcastMembers.length; //add system message that group is created

              messages.push({
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid,
                type: 'system',
                message: 'You created a broadcast list with ' + lengthMemeber + ' recipients.'
              }); // Add members of the group

              var members = [];

              for (var i = 0; i < _this2.broadcastMembers.length; i++) {
                //let push the group member to member with only userId
                members.push(_this2.broadcastMembers[i].userId);
              } //Add group information and date


              _this2.broadcast.date = new Date().toString();
              _this2.broadcast.messages = messages;
              _this2.broadcast.members = members;
              _this2.broadcast.img = "assets/broadcast.png";
              _this2.broadcast.name = "Broadcast";
              _this2.broadcast.admin = [firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid]; // Lets add to firebase database

              _this2.angularDb.list('/groups/').push(_this2.broadcast).then(function (success) {
                var groupId = success.key; //update the key

                success.update({
                  key: groupId
                });
                var convasation = {
                  key: groupId,
                  me: "you",
                  type: 'text',
                  view: 'broadcast',
                  date: new Date().toString()
                }; //add group referenceuser to user;

                _this2.angularDb.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).push(convasation).then(function () {// resolve(true);
                }).then(function () {
                  _this2.loading.hide();

                  _this2.navCtrl.pop();
                });
              });
            });
            return promise;
          }
        }]);

        return NewbroadcastPage;
      }();

      NewbroadcastPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      NewbroadcastPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newbroadcast',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./newbroadcast.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newbroadcast/newbroadcast.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./newbroadcast.page.scss */
        "./src/app/pages/newbroadcast/newbroadcast.page.scss"))["default"]]
      })], NewbroadcastPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-newbroadcast-newbroadcast-module-es5.js.map