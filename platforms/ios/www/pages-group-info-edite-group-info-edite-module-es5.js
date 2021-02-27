(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-info-edite-group-info-edite-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info-edite/group-info-edite.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info-edite/group-info-edite.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGroupInfoEditeGroupInfoEditePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"name === 'dec'\">Group description</ion-title>\n    <ion-title *ngIf=\"name === 'name'\">Enter new subject</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"formGroup\" >\n\n    <ion-item *ngIf=\"name === 'name'\">\n      <ion-input type=\"text\" formControlName=\"name\" value=\"{{groupName}}\" placeholder=\"subjetc....\"\n        [(ngModel)]=\"changeName\">\n      </ion-input>\n      <ion-icon slot=\"end\" src=\"assets/smile.svg\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"name === 'dec'\">\n      <ion-input type=\"text\" formControlName=\"dec\" placeholder=\"Add group description\" [(ngModel)]=\"description\">\n      </ion-input>\n      <ion-icon slot=\"end\" src=\"assets/smile.svg\"></ion-icon>\n    </ion-item>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"back()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Cancel\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"saveChanges()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Ok\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/group-info-edite/group-info-edite-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/group-info-edite/group-info-edite-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: GroupInfoEditePageRoutingModule */

    /***/
    function srcAppPagesGroupInfoEditeGroupInfoEditeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupInfoEditePageRoutingModule", function () {
        return GroupInfoEditePageRoutingModule;
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


      var _group_info_edite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./group-info-edite.page */
      "./src/app/pages/group-info-edite/group-info-edite.page.ts");

      var routes = [{
        path: '',
        component: _group_info_edite_page__WEBPACK_IMPORTED_MODULE_3__["GroupInfoEditePage"]
      }];

      var GroupInfoEditePageRoutingModule = function GroupInfoEditePageRoutingModule() {
        _classCallCheck(this, GroupInfoEditePageRoutingModule);
      };

      GroupInfoEditePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GroupInfoEditePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/group-info-edite/group-info-edite.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/group-info-edite/group-info-edite.module.ts ***!
      \*******************************************************************/

    /*! exports provided: GroupInfoEditePageModule */

    /***/
    function srcAppPagesGroupInfoEditeGroupInfoEditeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupInfoEditePageModule", function () {
        return GroupInfoEditePageModule;
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


      var _group_info_edite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./group-info-edite-routing.module */
      "./src/app/pages/group-info-edite/group-info-edite-routing.module.ts");
      /* harmony import */


      var _group_info_edite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./group-info-edite.page */
      "./src/app/pages/group-info-edite/group-info-edite.page.ts");

      var GroupInfoEditePageModule = function GroupInfoEditePageModule() {
        _classCallCheck(this, GroupInfoEditePageModule);
      };

      GroupInfoEditePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _group_info_edite_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupInfoEditePageRoutingModule"]],
        declarations: [_group_info_edite_page__WEBPACK_IMPORTED_MODULE_6__["GroupInfoEditePage"]]
      })], GroupInfoEditePageModule);
      /***/
    },

    /***/
    "./src/app/pages/group-info-edite/group-info-edite.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/group-info-edite/group-info-edite.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGroupInfoEditeGroupInfoEditePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWluZm8tZWRpdGUvZ3JvdXAtaW5mby1lZGl0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/group-info-edite/group-info-edite.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/group-info-edite/group-info-edite.page.ts ***!
      \*****************************************************************/

    /*! exports provided: GroupInfoEditePage */

    /***/
    function srcAppPagesGroupInfoEditeGroupInfoEditePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupInfoEditePage", function () {
        return GroupInfoEditePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var GroupInfoEditePage = /*#__PURE__*/function () {
        function GroupInfoEditePage(actRoute, formBuilder, dataService, angularDb, loading, navCtrl, toastController, alertService) {
          _classCallCheck(this, GroupInfoEditePage);

          this.actRoute = actRoute;
          this.formBuilder = formBuilder;
          this.dataService = dataService;
          this.angularDb = angularDb;
          this.loading = loading;
          this.navCtrl = navCtrl;
          this.toastController = toastController;
          this.alertService = alertService;
          this.groupId = this.actRoute.snapshot.paramMap.get('groupId');
          this.name = this.actRoute.snapshot.paramMap.get('name');
          this.formGroup = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30)])),
            dec: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30)]))
          });
        }

        _createClass(GroupInfoEditePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.groups(this.groupId).valueChanges().subscribe(function (group) {
              _this.group = group;
            }); // let get the databse from the current user

            this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid).valueChanges().subscribe(function (user) {
              _this.user = user;
            });
            this.dataService.groups(this.groupId).valueChanges().subscribe(function (data) {
              _this.groupName = data.name;
            });
          } // save the changes that your made 

        }, {
          key: "saveChanges",
          value: function saveChanges() {
            var _this2 = this;

            if (this.name === 'name' && this.changeName != '') {
              if (this.group.name != this.changeName) {
                this.loading.show();
                this.dataService.groups(this.groupId).update({
                  name: this.changeName
                }).then(function () {
                  firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('groups').child(_this2.groupId).child('messages').push({
                    date: new Date().toString(),
                    userId: firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
                    type: 'system',
                    message: _this2.user.nikeName + ' has change the group name to: ' + _this2.changeName + '.',
                    icon: 'create'
                  }).then(function (sucess) {
                    var key = sucess.key;

                    for (var i = 0; i < _this2.group.members.length; i++) {
                      firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('accounts').child(_this2.group.members[i]).child('groups').child(_this2.groupId).child('messagesRead').push({
                        key: key
                      });
                    }

                    _this2.loading.hide();

                    _this2.alertService.showGroupUpdatedMessage();

                    _this2.navCtrl.pop();
                  })["catch"](function (error) {
                    _this2.loading.hide();

                    _this2.alertService.showErrorMessage('group/error-update-group');
                  });
                });
              }
            } else if (this.name === 'dec' && this.description != '') {
              this.loading.show();
              firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref("group/").child(this.groupId).once("value").then(function (user) {
                if (user.val()) {
                  _this2.angularDb.object("group/" + _this2.groupId).update({
                    description: _this2.description
                  }).then(function () {
                    firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('groups').child(_this2.groupId).child('messages').push({
                      date: new Date().toString(),
                      userId: firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
                      type: 'system',
                      message: _this2.user.nikeName + ' has change the group name to: ' + _this2.description + '.',
                      icon: 'create'
                    }).then(function (sucess) {
                      var key = sucess.key;

                      for (var i = 0; i < _this2.group.members.length; i++) {
                        firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('accounts').child(_this2.group.members[i]).child('groups').child(_this2.groupId).child('messagesRead').push({
                          key: key
                        });
                      }

                      _this2.loading.hide();

                      _this2.alertService.showGroupUpdatedMessage();

                      _this2.navCtrl.pop();
                    })["catch"](function (error) {
                      _this2.loading.hide();

                      _this2.alertService.showErrorMessage('group/error-update-group');
                    });
                  });
                }
              });
            }
          } // this handele the back buttom

        }, {
          key: "back",
          value: function back() {
            this.navCtrl.pop();
          }
        }]);

        return GroupInfoEditePage;
      }();

      GroupInfoEditePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]
        }, {
          type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }];
      };

      GroupInfoEditePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-group-info-edite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./group-info-edite.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info-edite/group-info-edite.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./group-info-edite.page.scss */
        "./src/app/pages/group-info-edite/group-info-edite.page.scss"))["default"]]
      })], GroupInfoEditePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-group-info-edite-group-info-edite-module-es5.js.map