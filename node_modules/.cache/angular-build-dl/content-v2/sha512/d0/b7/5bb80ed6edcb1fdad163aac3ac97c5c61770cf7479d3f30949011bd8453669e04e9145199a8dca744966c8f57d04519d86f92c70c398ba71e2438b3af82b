(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-broadcast-info-broadcast-info-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcast-info/broadcast-info.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcast-info/broadcast-info.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBroadcastInfoBroadcastInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header parallax imageUrl=\"{{broadcastImage}}\" maximumHeight=\"350\" expandedColor=\"#AAA\" titleColor=\"white\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addMembers()\">\n        <ion-icon slot=\"icon-only\" name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <span style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">{{broadcastName}}</span>\n    </ion-title>\n    <span style=\"padding-left: 15px;\">Created {{ broadcastDate | moment:'h:mm A'}}</span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  <ion-card (click)=\"addMembers()\">\n    <ion-card-header>\n      <ion-card-title>Add members</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-item lines=\"none\">\n      <ion-label>Encryption</ion-label>\n      <ion-icon color=\"secondary\" name=\"lock-closed\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-card-content>\n      Messages to this broadcast list are secured with end-to-end encryption. Tap to more info\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-list>\n      <ion-label>\n        <span style=\"padding-left: 10px; color: var(--ion-color-secondary);\">{{members}} recipients</span>\n      </ion-label>\n      <ion-item *ngFor=\"let member of broadcastMembers\"\n        style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\">\n        <ion-avatar>\n          <img src=\"{{member.img}}\">\n        </ion-avatar>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{member.nikeName}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n              {{member.description}}\n            </span>\n          </span>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-button (click)=\"deleteBroadcast()\" color=\"danger\" fill=\"clear\">Delete broadcast list\n      <ion-icon slot=\"start\" color=\"danger\" name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/broadcast-info/broadcast-info-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/broadcast-info/broadcast-info-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: BroadcastInfoPageRoutingModule */

    /***/
    function srcAppPagesBroadcastInfoBroadcastInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BroadcastInfoPageRoutingModule", function () {
        return BroadcastInfoPageRoutingModule;
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


      var _broadcast_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./broadcast-info.page */
      "./src/app/pages/broadcast-info/broadcast-info.page.ts");

      var routes = [{
        path: '',
        component: _broadcast_info_page__WEBPACK_IMPORTED_MODULE_3__["BroadcastInfoPage"]
      }];

      var BroadcastInfoPageRoutingModule = function BroadcastInfoPageRoutingModule() {
        _classCallCheck(this, BroadcastInfoPageRoutingModule);
      };

      BroadcastInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BroadcastInfoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/broadcast-info/broadcast-info.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/broadcast-info/broadcast-info.module.ts ***!
      \***************************************************************/

    /*! exports provided: BroadcastInfoPageModule */

    /***/
    function srcAppPagesBroadcastInfoBroadcastInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BroadcastInfoPageModule", function () {
        return BroadcastInfoPageModule;
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


      var _broadcast_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./broadcast-info-routing.module */
      "./src/app/pages/broadcast-info/broadcast-info-routing.module.ts");
      /* harmony import */


      var _broadcast_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./broadcast-info.page */
      "./src/app/pages/broadcast-info/broadcast-info.page.ts");
      /* harmony import */


      var ionic_header_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-header-parallax */
      "./node_modules/ionic-header-parallax/__ivy_ngcc__/fesm2015/ionic-header-parallax.js");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var BroadcastInfoPageModule = function BroadcastInfoPageModule() {
        _classCallCheck(this, BroadcastInfoPageModule);
      };

      BroadcastInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], ionic_header_parallax__WEBPACK_IMPORTED_MODULE_7__["IonicHeaderParallaxModule"], _broadcast_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["BroadcastInfoPageRoutingModule"]],
        declarations: [_broadcast_info_page__WEBPACK_IMPORTED_MODULE_6__["BroadcastInfoPage"]]
      })], BroadcastInfoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/broadcast-info/broadcast-info.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/broadcast-info/broadcast-info.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBroadcastInfoBroadcastInfoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: 100%;\n  margin: 0;\n  margin-bottom: 10px;\n  position: relative;\n  top: 50px;\n  padding-top: 20px;\n}\n\nion-icon {\n  font-size: x-large;\n  padding: 10px;\n}\n\ndiv.profileimage {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.profileimage img {\n  height: 6pc;\n  padding: 2px;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.thumnails .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n}\n\n.adminColor {\n  border: solid 2px var(--ion-color-primary);\n  border-radius: 6px;\n  padding: 1px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJvYWRjYXN0LWluZm8vYnJvYWRjYXN0LWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR1I7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFGUTtFQUNJLHFCQUFBO0FBSVo7O0FBQ0E7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9icm9hZGNhc3QtaW5mby9icm9hZGNhc3QtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5kaXYucHJvZmlsZWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNnBjO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRodW1uYWlscyB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAubGlzdC10aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC5pbWctdGh1bWIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWRtaW5Db2xvciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/broadcast-info/broadcast-info.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/broadcast-info/broadcast-info.page.ts ***!
      \*************************************************************/

    /*! exports provided: BroadcastInfoPage */

    /***/
    function srcAppPagesBroadcastInfoBroadcastInfoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BroadcastInfoPage", function () {
        return BroadcastInfoPage;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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


      var BroadcastInfoPage = /*#__PURE__*/function () {
        function BroadcastInfoPage(actRoute, dataService, router, loading, afDB) {
          _classCallCheck(this, BroadcastInfoPage);

          this.actRoute = actRoute;
          this.dataService = dataService;
          this.router = router;
          this.loading = loading;
          this.afDB = afDB; // get the broadcast ID

          this.broadcastId = this.actRoute.snapshot.paramMap.get('broadcastId');
        }

        _createClass(BroadcastInfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //get the member length
            this.dataService.members(this.broadcastId).valueChanges().subscribe(function (length) {
              _this.members = length.length;
            }); // list image base image type

            this.dataService.groups(this.broadcastId).valueChanges().subscribe(function (broadcast) {
              //pass the information to the veriable
              _this.broadcast = broadcast;
              _this.broadcastImage = broadcast.img;
              _this.broadcastName = broadcast.name;
              _this.broadcastDate = broadcast.dateCreated;

              if (broadcast.members) {
                // list member for each and their info
                broadcast.members.forEach(function (memberId) {
                  _this.dataService.getUser(memberId).valueChanges().subscribe(function (member) {
                    _this.addUpdateOrRemoveMember(member);
                  });
                });
              }
            }); //let get the user details

            this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).valueChanges().subscribe(function (user) {
              _this.user = user;
            });
          } // Get names of the members to be added to the group.
          // Check if user exists in the group then add/update user.
          // If the user has already left the group, remove user from the list.

        }, {
          key: "addUpdateOrRemoveMember",
          value: function addUpdateOrRemoveMember(member) {
            if (this.broadcast) {
              if (this.broadcast.members.indexOf(member.userId) > -1) {
                // User exists in the group.
                if (!this.broadcastMembers) {
                  this.broadcastMembers = [member];
                } else {
                  var index = -1;

                  for (var i = 0; i < this.broadcastMembers.length; i++) {
                    if (this.broadcastMembers[i].userId == member.userId) {
                      index = i;
                    }
                  } // Add/Update User.


                  if (index > -1) {
                    this.broadcastMembers[index] = member;
                  } else {
                    this.broadcastMembers.push(member);
                  }
                }
              } else {
                // User already left the group, remove member from list.
                var index = -1;

                for (var i = 0; i < this.broadcastMembers.length; i++) {
                  if (this.broadcastMembers[i].userId == member.userId) {
                    index = i;
                  }
                }

                if (index > -1) {
                  this.broadcastMembers.splice(index, 1);
                }
              }
            }
          } // router to the add members pages with the broadcast ID

        }, {
          key: "addMembers",
          value: function addMembers() {
            this.router.navigate(['/addmembers', {
              'Id': this.broadcastId
            }]);
          } //this handle delete the broadcast 

        }, {
          key: "deleteBroadcast",
          value: function deleteBroadcast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // loading show 
                      this.loading.show();
                      _context.next = 3;
                      return this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).orderByChild('key').equalTo(this.broadcastId).once('value', function (snap) {
                        var res = snap.val();

                        if (res != null) {
                          var store = Object.keys(res);

                          _this2.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).child(store[0]).remove();
                        }
                      }).then(function () {
                        //also remove from the group database
                        _this2.afDB.database.ref('groups').child(_this2.broadcastId).remove(); // loading hide


                        _this2.loading.hide(); //aslo then router to the home page


                        _this2.router.navigateByUrl('/home');
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return BroadcastInfoPage;
      }();

      BroadcastInfoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
        }];
      };

      BroadcastInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-broadcast-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./broadcast-info.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcast-info/broadcast-info.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./broadcast-info.page.scss */
        "./src/app/pages/broadcast-info/broadcast-info.page.scss"))["default"]]
      })], BroadcastInfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-broadcast-info-broadcast-info-module-es5.js.map