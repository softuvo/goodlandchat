(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header parallax imageUrl=\"{{image}}\" maximumHeight=\"350\" expandedColor=\"#AAA\" titleColor=\"white\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{nikeName}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-label>Mute notifications</ion-label>\n      <ion-toggle slot=\"end\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Custom notifications</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Media visibility</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Encryption</ion-label>\n      <ion-icon color=\"secondary\" name=\"lock-closed\" slot=\"end\"></ion-icon>\n      <ion-label>Message to this chat and calls are secured with end-to-end encryption. Tap to verify</ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle color=\"secondary\">About and phone number</ion-card-subtitle>\n      <ion-card-title>{{description}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{dateDec |  moment:'h:mm A'}}\n    </ion-card-content>\n    <ion-item>\n      <ion-label (click)=\"back()\">{{phoneNumber}}\n        <p>Mobile</p>\n      </ion-label>\n      <ion-label>\n        <div style=\"float: right;\">\n          <ion-icon slot=\"icon-only\" color=\"secondary\" (click)=\"back()\" name=\"chatbox-ellipses\"></ion-icon>\n          <ion-icon slot=\"icon-only\" color=\"secondary\" name=\"call\" (click)=\"calls()\"></ion-icon>\n          <ion-icon slot=\"icon-only\" color=\"secondary\" name=\"videocam\" (click)=\"videoCall()\"></ion-icon>\n        </div>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle color=\"secondary\">Other phones</ion-card-subtitle>\n    </ion-card-header>\n    <ion-item>\n      <ion-label (click)=\"back()\" >{{phoneNumber}}\n        <p>Mobile</p>\n      </ion-label>\n      <ion-label>\n        <div style=\"float: right;\">\n          <ion-icon slot=\"icon-only\" color=\"secondary\" (click)=\"back()\" name=\"chatbox-ellipses\"></ion-icon>\n          <ion-icon slot=\"icon-only\" color=\"secondary\" name=\"call\" (click)=\"calls()\"></ion-icon>\n          <ion-icon slot=\"icon-only\" color=\"secondary\" name=\"videocam\" (click)=\"videoCall()\"(click)=\"videoCall()\"></ion-icon>\n        </div>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n      <ion-button *ngIf=\"!isBlock\" (click)=\"block()\" color=\"danger\" fill=\"clear\">Block\n        <ion-icon slot=\"start\" color=\"danger\" src=\"assets/icon/block.svg\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"isBlock\" (click)=\"unBlock()\" color=\"medium\" fill=\"clear\">UnBlock\n        <ion-icon slot=\"start\" color=\"medium\" src=\"assets/icon/block.svg\"></ion-icon>\n      </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button (click)=\"report()\" color=\"danger\" fill=\"clear\">Report contact\n      <ion-icon slot=\"start\" color=\"danger\" src=\"assets/icon/dislike.svg\"></ion-icon>\n    </ion-button>\n  </ion-card>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/contact/contact-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/contact/contact-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ContactPageRoutingModule */

    /***/
    function srcAppPagesContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
        return ContactPageRoutingModule;
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


      var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact.page */
      "./src/app/pages/contact/contact.page.ts");

      var routes = [{
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
      }];

      var ContactPageRoutingModule = function ContactPageRoutingModule() {
        _classCallCheck(this, ContactPageRoutingModule);
      };

      ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/contact/contact.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/contact/contact.module.ts ***!
      \*************************************************/

    /*! exports provided: ContactPageModule */

    /***/
    function srcAppPagesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
        return ContactPageModule;
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


      var ionic_header_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ionic-header-parallax */
      "./node_modules/ionic-header-parallax/__ivy_ngcc__/fesm2015/ionic-header-parallax.js");
      /* harmony import */


      var _contact_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact-routing.module */
      "./src/app/pages/contact/contact-routing.module.ts");
      /* harmony import */


      var _contact_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact.page */
      "./src/app/pages/contact/contact.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var ContactPageModule = function ContactPageModule() {
        _classCallCheck(this, ContactPageModule);
      };

      ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], ionic_header_parallax__WEBPACK_IMPORTED_MODULE_5__["IonicHeaderParallaxModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContactPageRoutingModule"]],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_7__["ContactPage"]]
      })], ContactPageModule);
      /***/
    },

    /***/
    "./src/app/pages/contact/contact.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/contact/contact.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: 100%;\n  margin: 0;\n  margin-bottom: 10px;\n  position: relative;\n  top: 50px;\n  padding-top: 20px;\n}\n\nion-icon {\n  font-size: x-large;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/contact/contact.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/contact/contact.page.ts ***!
      \***********************************************/

    /*! exports provided: ContactPage */

    /***/
    function srcAppPagesContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
        return ContactPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var ContactPage = /*#__PURE__*/function () {
        function ContactPage(actRoute, dataService, alertCtrl, loading, afDB, userService, toastController, navCtrl, callNumber, toast, router) {
          _classCallCheck(this, ContactPage);

          this.actRoute = actRoute;
          this.dataService = dataService;
          this.alertCtrl = alertCtrl;
          this.loading = loading;
          this.afDB = afDB;
          this.userService = userService;
          this.toastController = toastController;
          this.navCtrl = navCtrl;
          this.callNumber = callNumber;
          this.toast = toast;
          this.router = router; // get the userId has been pass

          this.userId = this.actRoute.snapshot.paramMap.get('userId'); // pass the current user have been using

          this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
        } //Initialize the App after loaded


        _createClass(ContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // fetch the data info
            this.dataService.getCurrentUser(this.userId).valueChanges().subscribe(function (user) {
              _this.nikeName = user.nikeName;
              _this.phoneNumber = user.phoneNumber;
              _this.image = user.img;
              _this.description = user.description;
              _this.dateDec = user.dateDec;

              _this.dataService.userBock(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).valueChanges().subscribe(function (blocks) {
                _this.isBlock = lodash__WEBPACK_IMPORTED_MODULE_8__["findKey"](blocks, function (block) {
                  return block = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
                }); // if has been blocked pass the true condition 

                if (_this.isBlock) {
                  _this.isBlock = true;
                } else {
                  // if not pass false condition
                  _this.isBlock = false;
                }
              });
            });
          } //Report the user to the owner of the app..
          // and else Block the user clear the caht messages

        }, {
          key: "report",
          value: function report() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Report this contact to WhatsApp from Pagas',
                        message: "Block contact and delete this chat's messages",
                        buttons: [{
                          text: "CANCEL",
                          handler: function handler() {}
                        }, {
                          text: "REPORT",
                          handler: function handler() {
                            _this2.loading.show();

                            _this2.deleteChat().then(function () {
                              _this2.presentToast();

                              _this2.loading.hide();

                              if (!_this2.isBlock) {
                                _this2.block();
                              }
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Block Function

        }, {
          key: "block",
          value: function block() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.isBlock) {
                        _context2.next = 5;
                        break;
                      }

                      _context2.next = 3;
                      return this.alertCtrl.create({
                        message: "Block" + this.nikeName + "Blocked contacts will no longer be able to call you or send messages.",
                        buttons: [{
                          text: "CANCEL",
                          handler: function handler() {}
                        }, {
                          text: "BLOCK",
                          handler: function handler() {
                            _this3.blockUser();
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // present the toast notification

        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'Report sent and' + this.nikeName + 'has been blocked',
                        duration: 2000,
                        position: 'middle'
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // unBlock the User

        }, {
          key: "unBlock",
          value: function unBlock() {
            var _this4 = this;

            //loading Show
            this.loading.show();
            this.userService.unblock(this.currentUserId, this.userId).then(function () {
              //loading hide
              _this4.loading.hide();
            });
          } // Block the User

        }, {
          key: "blockUser",
          value: function blockUser() {
            var _this5 = this;

            // loading show
            this.loading.show();
            this.userService.block(this.currentUserId, this.userId).then(function () {
              //loading hide
              _this5.loading.hide();
            });
          } //Delete the chat conversation

        }, {
          key: "deleteChat",
          value: function deleteChat() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      // loading show
                      this.loading.show();
                      _context4.next = 3;
                      return this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).remove().then(function () {
                        // and also the conversation
                        _this6.deleteConversation(); //loading hide


                        _this6.loading.hide();
                      });

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // this will delete the conversation content;

        }, {
          key: "deleteConversation",
          value: function deleteConversation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', function (snap) {
                        var res = snap.val();

                        if (res != null) {
                          var store = Object.keys(res);

                          _this7.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove();
                        }
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //pop back

        }, {
          key: "back",
          value: function back() {
            this.navCtrl.pop();
          } // make dial call

        }, {
          key: "calls",
          value: function calls() {
            var _this8 = this;

            this.callNumber.callNumber("".concat(this.phoneNumber), true).then(function () {
              _this8.afDB.list('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/call/').push({
                date: new Date().toString(),
                userId: _this8.userId,
                type: 'calling',
                icon: 'call',
                call: 'call'
              }).then(function () {
                _this8.afDB.list('/accounts/' + _this8.userId + '/call/').push({
                  date: new Date().toString(),
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  type: 'calling',
                  icon: 'call',
                  call: 'misscall'
                });
              }); // if something goes wrong toast will handle the case

            })["catch"](function (err) {
              return _this8.something();
            });
          } //toast notification

        }, {
          key: "something",
          value: function something() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toast.create({
                        message: 'Something going wrong.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // make video calls

        }, {
          key: "videoCall",
          value: function videoCall() {
            this.router.navigate(["/calling", {
              'image': this.image,
              'name': this.nikeName,
              'userId': this.userId
            }]);
          }
        }]);

        return ContactPage;
      }();

      ContactPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contact.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contact.page.scss */
        "./src/app/pages/contact/contact.page.scss"))["default"]]
      })], ContactPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-contact-contact-module-es5.js.map