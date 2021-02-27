(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" no-border>\n  <ion-toolbar>\n    <ion-title>WhatsApp</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button cache-view=\"false\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button> -->\n      <ion-button cache-view=\"false\" (click)=\"showPopover($event)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <preferences slot=\"end\"></preferences> -->\n</ion-header>\n<super-tabs activeTabIndex=\"1\" #superTabs (tabChange)=\"onTabChange($event)\">\n  <super-tabs-toolbar slot=\"top\">\n    <super-tab-button class=\"marging\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label>CHATS</ion-label>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label>STATUS</ion-label>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label>CALLS</ion-label>\n    </super-tab-button>\n  </super-tabs-toolbar>\n\n  <super-tabs-container>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"camera\"></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"chat\"></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"status\"></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"calls\"></ion-nav>\n      </ion-content>\n    </super-tab>\n  </super-tabs-container>\n</super-tabs>";
      /***/
    },

    /***/
    "./src/app/directives/header-decleration.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/directives/header-decleration.module.ts ***!
      \*********************************************************/

    /*! exports provided: HeaderDeclerationModule */

    /***/
    function srcAppDirectivesHeaderDeclerationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderDeclerationModule", function () {
        return HeaderDeclerationModule;
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


      var _header_scroll_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header-scroll.directive */
      "./src/app/directives/header-scroll.directive.ts");

      var HeaderDeclerationModule = function HeaderDeclerationModule() {
        _classCallCheck(this, HeaderDeclerationModule);
      };

      HeaderDeclerationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_scroll_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderScrollDirective"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_header_scroll_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderScrollDirective"]]
      })], HeaderDeclerationModule);
      /***/
    },

    /***/
    "./src/app/directives/header-scroll.directive.ts":
    /*!*******************************************************!*\
      !*** ./src/app/directives/header-scroll.directive.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderScrollDirective */

    /***/
    function srcAppDirectivesHeaderScrollDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderScrollDirective", function () {
        return HeaderScrollDirective;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var HeaderScrollDirective = /*#__PURE__*/function () {
        function HeaderScrollDirective(element, renderer, domCtrl) {
          _classCallCheck(this, HeaderScrollDirective);

          this.element = element;
          this.renderer = renderer;
          this.domCtrl = domCtrl;
          this.lastValue = 0;
        }

        _createClass(HeaderScrollDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this = this;

            if (this.scrollContent && this.config) {
              this.scrollContent.scrollEvents = true;

              var scrollStartFunc = function scrollStartFunc(ev) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var el;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return this.scrollContent.getScrollElement();

                        case 2:
                          el = _context.sent;
                          this.contentHeight = el.offsetHeight;
                          this.scrollHeight = el.scrollHeight;

                          if (this.config.maxValue === undefined) {
                            this.config.maxValue = this.element.nativeElement.offsetHeight;
                          }

                          this.lastScrollPosition = el.scrollTop;

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              };

              if (this.scrollContent && this.scrollContent instanceof _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]) {
                this.scrollContent.ionScrollStart.subscribe(scrollStartFunc);
                this.scrollContent.ionScroll.subscribe(function (ev) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            return _context2.abrupt("return", this.adjustElementOnScroll(ev));

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                });
                this.scrollContent.ionScrollEnd.subscribe(function (ev) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            return _context3.abrupt("return", this.adjustElementOnScroll(ev));

                          case 1:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));
                });
              } else if (this.scrollContent instanceof HTMLElement) {
                this.scrollContent.addEventListener('ionScrollStart', scrollStartFunc);
                this.scrollContent.addEventListener('ionScroll', function (ev) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            return _context4.abrupt("return", this.adjustElementOnScroll(ev));

                          case 1:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));
                });
                this.scrollContent.addEventListener('ionScrollEnd', function (ev) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            return _context5.abrupt("return", this.adjustElementOnScroll(ev));

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));
                });
              }
            }
          }
        }, {
          key: "adjustElementOnScroll",
          value: function adjustElementOnScroll(ev) {
            var _this2 = this;

            if (ev) {
              this.domCtrl.write(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  var el, scrollTop, scrolldiff, newValue;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return this.scrollContent.getScrollElement();

                        case 2:
                          el = _context6.sent;
                          scrollTop = el.scrollTop > 0 ? el.scrollTop : 0;
                          scrolldiff = scrollTop - this.lastScrollPosition;
                          this.lastScrollPosition = scrollTop;
                          newValue = this.lastValue + scrolldiff;
                          newValue = Math.max(0, Math.min(newValue, this.config.maxValue));
                          this.renderer.setStyle(this.element.nativeElement, this.config.cssProperty, "-".concat(newValue, "px"));
                          this.lastValue = newValue;

                        case 10:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));
              });
            }
          }
        }]);

        return HeaderScrollDirective;
      }();

      HeaderScrollDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
        }];
      };

      HeaderScrollDirective.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['scrollHide']
        }],
        scrollContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['scrollContent']
        }]
      };
      HeaderScrollDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[scrollHide]'
      })], HeaderScrollDirective);
      /***/
    },

    /***/
    "./src/app/pages/home/home-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _directives_header_decleration_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../directives/header-decleration.module */
      "./src/app/directives/header-decleration.module.ts");
      /* harmony import */


      var _camera_camera_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../camera/camera.module */
      "./src/app/pages/camera/camera.module.ts");
      /* harmony import */


      var _status_status_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../status/status.module */
      "./src/app/pages/status/status.module.ts");
      /* harmony import */


      var _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../chat/chat.module */
      "./src/app/pages/chat/chat.module.ts");
      /* harmony import */


      var _call_call_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../call/call.module */
      "./src/app/pages/call/call.module.ts");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "./node_modules/@ionic-super-tabs/angular/__ivy_ngcc__/fesm2015/ionic-super-tabs-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsModule"], _directives_header_decleration_module__WEBPACK_IMPORTED_MODULE_1__["HeaderDeclerationModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_11__["HomePageRoutingModule"], _call_call_module__WEBPACK_IMPORTED_MODULE_5__["CallPageModule"], _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatPageModule"], _status_status_module__WEBPACK_IMPORTED_MODULE_3__["StatusPageModule"], _camera_camera_module__WEBPACK_IMPORTED_MODULE_2__["CameraPageModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/home/home.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _component_setting_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../component/setting/setting.component */
      "./src/app/component/setting/setting.component.ts");
      /* harmony import */


      var _camera_camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../camera/camera.page */
      "./src/app/pages/camera/camera.page.ts");
      /* harmony import */


      var _call_call_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../call/call.page */
      "./src/app/pages/call/call.page.ts");
      /* harmony import */


      var _status_status_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../status/status.page */
      "./src/app/pages/status/status.page.ts");
      /* harmony import */


      var _chat_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../chat/chat.page */
      "./src/app/pages/chat/chat.page.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */
      // import { SuperTabs } from '@ionic-super-tabs/angular';


      var HomePage = /*#__PURE__*/function () {
        function HomePage(popoverController, network, statusService, platform) {
          var _this3 = this;

          _classCallCheck(this, HomePage);

          this.popoverController = popoverController;
          this.network = network;
          this.statusService = statusService;
          this.platform = platform;
          this.headerScrollConfig = {
            cssProperty: 'margin-top',
            maxValue: 60
          };
          this.tabs = 'chat';
          this.camera = _camera_camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"];
          this.chat = _chat_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"];
          this.status = _status_status_page__WEBPACK_IMPORTED_MODULE_5__["StatusPage"];
          this.calls = _call_call_page__WEBPACK_IMPORTED_MODULE_4__["CallPage"]; // calling the connetion to invoke 

          this.connection();
          this.platform.pause.subscribe(function () {
            _this3.statusService.offlineStatusLog();
          });
          this.platform.resume.subscribe(function () {
            _this3.statusService.onlineStatus();
          });
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // set the connection when the data offline   

        }, {
          key: "connection",
          value: function connection() {
            var _this4 = this;

            var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
              _this4.statusService.offlineStatusLog();
            });
            disconnectSubscription.unsubscribe;
            var connectSubscription = this.network.onConnect().subscribe(function () {
              _this4.statusService.onlineStatus();

              setTimeout(function () {
                if (_this4.network.type === 'wifi') {}
              }, 3000);
            });
            connectSubscription.unsubscribe();
          }
        }, {
          key: "showPopover",
          value: function showPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var popover;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.popoverController.create({
                        component: _component_setting_setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"],
                        cssClass: 'my-custom-class',
                        event: ev,
                        componentProps: {
                          tabs: this.tabs
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context7.sent;
                      _context7.next = 5;
                      return popover.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } // this handle the swipebale tab

        }, {
          key: "onTabChange",
          value: function onTabChange(ev) {
            this.activeTabIndex = ev.detail.index;

            switch (this.activeTabIndex) {
              case 0:
                this.tabs = 'camera';
                break;

              case 1:
                this.tabs = 'chat';
                break;

              case 2:
                this.tabs = 'status';
                break;

              case 3:
                this.tabs = 'calls';
                break;
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
        }, {
          type: _services_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }];
      };

      HomePage.propDecorators = {
        st: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
          args: ['superTabs', {
            "static": false
          }]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map