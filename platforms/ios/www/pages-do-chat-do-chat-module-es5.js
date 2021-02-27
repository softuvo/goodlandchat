(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-do-chat-do-chat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/do-chat/do-chat.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/do-chat/do-chat.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDoChatDoChatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"start\" style=\"margin: 5px;\" (click)=\"viewcontact()\">\n      <img class=\"header\" src=\"{{image}}\" (click)=\"viewInfo()\">\n    </ion-thumbnail>\n    <span (click)=\"viewcontact()\" style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">\n      {{nikeName}}\n    </span>\n    <span class=\"statusOnline\" *ngIf=\"status === onlineStatus\" id=\"UserStatus\">{{isOnline}}</span>\n    <span *ngIf=\"status != onlineStatus\" id=\"UserStatus\">{{isOnline | moment:'h:mm A'}}</span>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"videoCall()\">\n        <ion-icon name=\"videocam\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"callPhoneNumber()\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"more($event)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #IonContent class=\"ion-padding\" fullscreen=\"true\" class=\"contentBg\" id=\"chat-parent\"\n  overflow-scroll=\"true\">\n  <div class=\"style\" *ngIf=\"isLoading\">\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n  </div>\n  <div>\n    <div id=\"chat-container\">\n      <div class=\"message-wrap\">\n        <div *ngFor=\"let message of messagesToShow; let i = index; let first = first; let last = last\" class=\"message\">\n          <ion-col col-12 class=\"system\" *ngIf=\"message.type == 'block'\">\n            <p>\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\n              {{message.message}} <br />\n              <span>{{message.date |  moment:'h:mm A'}}</span>\n            </p>\n          </ion-col>\n          <div class=\"message-left\" *ngIf=\"message.userId === userId\">\n            <div *ngIf=\"message.type == 'image'\" (click)=\"enlargeImage(message.message)\"\n              (click)=\"optionDeleteForMe(message.key)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-content\">\n                  <img class=\"url\" src=\"{{message.message}}\">\n                  <p class=\"line-time-left \">{{message.date | moment:'h:mm A' }}</p>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'text'\" (click)=\"optionDeleteForMe(message.key)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker-left \">{{message.message}}</p>\n                  <p class=\"line-time-left \">{{message.date |  moment:'h:mm A' }}</p>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'audio'\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker-left\">\n                    <span style=\"display: flex;\">\n                      <div (click)=\"play(message.audio)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"play\"></ion-icon>\n                      </div>\n                      <div style=\"margin-left: 30px;\" (click)=\"optionDeleteForMe(message.key)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                      </div>\n                    </span>\n                  </p>\n                  <span class=\"line-time-left\">\n                    {{message.date |  moment:'h:mm A' }}\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"message-right\" *ngIf=\"message.userId != userId\">\n            <div *ngIf=\"message.type == 'image'\" (click)=\"optionDelete(message.key)\"\n              (click)=\"enlargeImage(message.message)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <img class=\"url\" src=\"{{message.message}}\">\n                  <span class=\"line-time\">\n                    {{message.date |  moment:'h:mm A' }}\n                    <svg *ngIf=\"message.read == 'unread'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#1e1e1e\" />\n                    </svg>\n                    <svg *ngIf=\"message.read == 'read'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#6a64ff\" />\n                    </svg>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'text'\" (click)=\"optionDelete(message.key)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker \">{{message.message}}</p>\n                  <span class=\"line-time\">\n                    {{message.date |  moment:'h:mm A' }}\n                    <svg *ngIf=\"message.read == 'unread'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#1e1e1e\" />\n                    </svg>\n                    <svg *ngIf=\"message.read == 'read'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#6a64ff\" />\n                    </svg>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'audio'\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker \">\n                    <span style=\"display: flex;\">\n                      <div (click)=\"play(message.audio)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"play\"></ion-icon>\n                      </div>\n                      <div style=\"margin-left: 30px;\" (click)=\"optionDelete(message.key)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                      </div>\n                    </span>\n                    <span class=\"line-time\">\n                      {{message.date |  moment:'h:mm A' }}\n\n                      <svg *ngIf=\"message.read == 'unread'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                        id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                        <path\n                          d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                          fill=\"#1e1e1e\" />\n                      </svg>\n                      <!-- </div> -->\n                      <!-- <div > -->\n                      <svg *ngIf=\"message.read == 'read'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                        id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                        <path\n                          d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                          fill=\"#6a64ff\" />\n                      </svg>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container *ngIf=\"message;  else running \">\n      <ion-fab-button color=\"secondary\" (click)=\"sendMessage()\" [disabled]=\"!message\" *ngIf=\"!this.blocks\">\n        <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"sendMessageOption()\" [disabled]=\"!message\" *ngIf=\"this.blocks\">\n        <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n\n    <ng-template #running>\n      <ion-fab-button color=\"secondary\" (click)=\"record()\" *ngIf=\"!recording\">\n        <ion-icon name=\"mic\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"stopRec()\" *ngIf=\"recording\">\n        <ion-icon name=\"pause-circle\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-template>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"ion-no-padding; align-items-center\">\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" class=\"msg-btn\" *ngIf=\"!this.blocks\" (click)=\"sendPhoto()\">\n        <ion-icon slot=\"icon-only\" name=\"images-outline\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" class=\"msg-btn\" *ngIf=\"this.blocks\" (click)=\"sendPhotoOption()\">\n        <ion-icon slot=\"icon-only\" name=\"images-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"10\">\n      <textarea class=\"message-input\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></textarea>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/do-chat/do-chat-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/do-chat/do-chat-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: DoChatPageRoutingModule */

    /***/
    function srcAppPagesDoChatDoChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoChatPageRoutingModule", function () {
        return DoChatPageRoutingModule;
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


      var _do_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./do-chat.page */
      "./src/app/pages/do-chat/do-chat.page.ts");

      var routes = [{
        path: '',
        component: _do_chat_page__WEBPACK_IMPORTED_MODULE_3__["DoChatPage"]
      }];

      var DoChatPageRoutingModule = function DoChatPageRoutingModule() {
        _classCallCheck(this, DoChatPageRoutingModule);
      };

      DoChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DoChatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/do-chat/do-chat.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/do-chat/do-chat.module.ts ***!
      \*************************************************/

    /*! exports provided: DoChatPageModule */

    /***/
    function srcAppPagesDoChatDoChatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoChatPageModule", function () {
        return DoChatPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _do_chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./do-chat-routing.module */
      "./src/app/pages/do-chat/do-chat-routing.module.ts");
      /* harmony import */


      var _do_chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./do-chat.page */
      "./src/app/pages/do-chat/do-chat.page.ts");

      var DoChatPageModule = function DoChatPageModule() {
        _classCallCheck(this, DoChatPageModule);
      };

      DoChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"], _do_chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["DoChatPageRoutingModule"]],
        declarations: [_do_chat_page__WEBPACK_IMPORTED_MODULE_7__["DoChatPage"]]
      })], DoChatPageModule);
      /***/
    },

    /***/
    "./src/app/pages/do-chat/do-chat.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/do-chat/do-chat.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDoChatDoChatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img.header {\n  border-radius: 50%;\n}\n\n.input-cover {\n  height: auto !important;\n}\n\n.item-md.item-block .item-inner {\n  margin-left: -32px;\n  padding-right: 0 !important;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.back-button-md {\n  margin-left: -10px !important;\n}\n\n.message-input {\n  width: 100%;\n  border-radius: 10px;\n  background: #ffffff;\n  resize: none;\n  color: #000000;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chatInput {\n  overflow: hidden;\n  background: white;\n  border-radius: 21px;\n  position: fixed;\n  padding-left: 45px;\n  padding-top: 10px;\n  margin-left: 10px;\n  bottom: 0;\n  margin-bottom: 10px;\n  width: calc(100% - 70px);\n}\n\n.chatSmiley {\n  position: fixed;\n  bottom: 0;\n  margin-left: 23px;\n  z-index: 10;\n  color: #000;\n  margin-bottom: 17px;\n  font-size: 30px;\n}\n\n.firstInputRightButton {\n  margin-right: 115px !important;\n}\n\n.InputRightButtons {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin-right: 80px;\n  z-index: 10;\n  color: #000;\n  margin-bottom: 17px;\n  font-size: 30px;\n}\n\n.fab {\n  width: 48px !important;\n  height: 48px !important;\n}\n\n.back-button-md {\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-fab {\n  bottom: -30px !important;\n}\n\n.statusOnline {\n  color: #92ff92;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #005e54;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-fab-button {\n  width: 48px !important;\n  height: 48px !important;\n}\n\n.style {\n  text-align: center;\n  margin: 0px auto;\n  color: #18191b;\n  padding-top: 22px;\n}\n\n/* Conversation */\n\n.contentBg {\n  padding-bottom: 0 !important;\n  --padding-bootm: 0 !important;\n  scroll-behavior: smooth;\n  height: calc(100% - 12px);\n  position: relative;\n  --background: #efe7dd url(\"/../assets/images/light.png\") repeat;\n}\n\n#chat-parent {\n  scroll-behavior: smooth;\n}\n\n.message-wrap .message {\n  position: relative;\n}\n\n.message-wrap .message .user-img {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n  width: 35px;\n  height: 35px;\n  border: 2px solid #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap .message .msg-detail {\n  width: 95%;\n  display: inline-block;\n  position: relative;\n}\n\n.message-wrap .message .msg-detail p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.message-wrap .message .msg-detail .msg-info p {\n  font-size: 0.8em;\n  color: #8899;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  border-radius: 6px;\n  padding: 2%;\n  width: auto;\n  max-width: 80%;\n  margin-top: 7px;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-breaker {\n  white-space: pre-line;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-family: auto;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-time {\n  white-space: pre-line;\n  padding-left: 41px;\n  font-size: 12px;\n  float: right;\n  margin: 2px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #c3c0c0;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-time-left {\n  white-space: pre-line;\n  padding-left: 29px;\n  text-align: end;\n  float: left;\n  font-size: 12px;\n  margin: 2px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #9e9e9e;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-breaker-left {\n  white-space: pre-line;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-family: auto;\n}\n\nion-icon {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG8tY2hhdC9kby1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0ksNkJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksOEJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFBO0VBQ0ksd0JBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBRkEsZUFBQTs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREEsU0FBQTs7QUFFQTtFQUNJLHlCQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQUEsYUFBQTs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBLGlCQUFBOztBQUVBO0VBRUksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUdJO0VBQ0ksa0JBQUE7QUFBUjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0FBQVo7O0FBRVE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUNZO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFDaEI7O0FBRWdCO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEVBQUE7QUFBcEI7O0FBSVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZoQjs7QUFJZ0I7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQUhwQjs7QUFLZ0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0FBSHBCOztBQUtnQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0FBSHBCOztBQUtnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0FBSnBCOztBQVlBO0VBQ0ksa0JBQUE7QUFUSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvLWNoYXQvZG8tY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaGVhZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmlucHV0LWNvdmVyIHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubXNnLWJ0biB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMC41ZW07XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5iYWNrLWJ1dHRvbi1tZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWVzc2FnZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0SW5wdXQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG59XHJcbi5jaGF0U21pbGV5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmZpcnN0SW5wdXRSaWdodEJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLklucHV0UmlnaHRCdXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLy8gLm1pY0ZhYiB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gfVxyXG4uZmFiIHtcclxuICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uLW1kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mYWIge1xyXG4gICAgYm90dG9tOiAtMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGF0dXNPbmxpbmUge1xyXG4gICAgY29sb3I6ICM5MmZmOTI7XHJcbn1cclxuLnBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFydmVsLWRldmljZSAuc2NyZWVuIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zY3JlZW4tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogU3RhdHVzIEJhciAqL1xyXG5cclxuLnN0YXR1cy1iYXIge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwNGU0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhciBkaXYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIENoYXQgKi9cclxuXHJcbi5jaGF0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjlweCk7XHJcbn1cclxuXHJcbi5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFVzZXIgQmFyICovXHJcblxyXG4udXNlci1iYXIge1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwNWU1NDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udXNlci1iYXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi51c2VyLWJhciBkaXYge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxufVxyXG5cclxuLnVzZXItYmFyIC5hY3Rpb25zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5hY3Rpb25zLm1vcmUge1xyXG4gICAgbWFyZ2luOiAwIDEycHggMCAzMnB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmF2YXRhciB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDVweDtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmF2YXRhciBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5zdGF0dXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxufVxyXG4uc3R5bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGNvbG9yOiAjMTgxOTFiO1xyXG4gICAgcGFkZGluZy10b3A6IDIycHg7XHJcbn1cclxuXHJcbi8qIENvbnZlcnNhdGlvbiAqL1xyXG5cclxuLmNvbnRlbnRCZyB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvb3RtOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTJweCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZmU3ZGQgdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvbGlnaHQucG5nXCIpIHJlcGVhdDtcclxufVxyXG4jY2hhdC1wYXJlbnQge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCB7XHJcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgICAgLnVzZXItaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXNnLWRldGFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubXNnLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1zZy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubGluZS1icmVha2VyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzNjMGMwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmUtdGltZS1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lLWJyZWFrZXItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/do-chat/do-chat.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/do-chat/do-chat.page.ts ***!
      \***********************************************/

    /*! exports provided: DoChatPage */

    /***/
    function srcAppPagesDoChatDoChatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoChatPage", function () {
        return DoChatPage;
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


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _component_chatmore_chatmore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../component/chatmore/chatmore.component */
      "./src/app/component/chatmore/chatmore.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/event.service */
      "./src/app/services/event.service.ts");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/streaming-media/ngx */
      "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/native-audio/ngx */
      "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var DoChatPage = /*#__PURE__*/function () {
        function DoChatPage(popoverController, dataService, camera, eventService, router, nativeAudio, streamingMedia, chatService, actRoute, ngZone, callNumber, toast, afDB, file, media, afstorage, alertController, actionSheet, loading, userService) {
          var _this = this;

          _classCallCheck(this, DoChatPage);

          this.popoverController = popoverController;
          this.dataService = dataService;
          this.camera = camera;
          this.eventService = eventService;
          this.router = router;
          this.nativeAudio = nativeAudio;
          this.streamingMedia = streamingMedia;
          this.chatService = chatService;
          this.actRoute = actRoute;
          this.ngZone = ngZone;
          this.callNumber = callNumber;
          this.toast = toast;
          this.afDB = afDB;
          this.file = file;
          this.media = media;
          this.afstorage = afstorage;
          this.alertController = alertController;
          this.actionSheet = actionSheet;
          this.loading = loading;
          this.userService = userService;
          this.playAudio = false;
          this.onlineStatus = 'Online';
          this.messagesToShow = [];
          this.calling = true;
          this.isLoading = true;
          this.recording = false; // load sound effect fro the message sent

          this.nativeAudio.preloadSimple('send', 'assets/audio/send.wav'); // set the current userId pass to veriable 

          this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid; // option for the photo::: it handle thw quality of the image

          this.chatPhotoOption = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true
          }; // get the userId

          this.userId = this.actRoute.snapshot.paramMap.get('userId'); // this.me = this.actRoute.snapshot.paramMap.get('me')

          setTimeout(function () {
            _this.scrollToBottom();
          }, 10); // get messaging chat from chat Service

          this.eventService.subscribe('messages', function () {
            _this.messagesToShow = [];

            _this.ngZone.run(function () {
              _this.readMessage();

              _this.readMessageSender();

              _this.messagesToShow = _this.chatService.buddymessages;
              _this.isLoading = false;
            });
          });
        }

        _createClass(DoChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            //Initialize the enterise of the app
            // Load the, if there is any unread message make it to read message
            this.readMessage(); // get conversation equal to the userId has been pass,
            // this part may handle for view message and unread

            this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once("value", function (snap) {
              // make to the object values
              var me = snap.val();
              _this2.me = me.me;
            }); // read the sender Message

            this.readMessageSender(); // let invoke the user database from the firebase 
            // this will fet the data from the firebase

            this.dataService.getUser(this.userId).valueChanges().subscribe(function (user) {
              _this2.user = user;
              _this2.nikeName = user.nikeName;
              _this2.isOnline = user.status;
              _this2.image = user.img;
              _this2.status = user.status;
              _this2.phoneNumber = user.phoneNumber;
              _this2.userId = user.userId;

              _this2.dataService.userBock(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).valueChanges().subscribe(function (blocks) {
                _this2.isBlock = lodash__WEBPACK_IMPORTED_MODULE_8__["findKey"](blocks, function (block) {
                  return block = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
                }); // Block the user condition
                // if the condition is true,
                // you can send any things else

                if (_this2.isBlock) {
                  _this2.isBlock = true;
                } else {
                  _this2.isBlock = false;
                }
              }); // this part handle for the current user 


              _this2.dataService.userBocks(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).valueChanges().subscribe(function (blocks) {
                _this2.blocks = lodash__WEBPACK_IMPORTED_MODULE_8__["findKey"](blocks, function (block) {
                  return block = _this2.userId;
                });

                if (_this2.blocks) {
                  _this2.blocks = true;
                } else {
                  _this2.blocks = false;
                }
              });
            });
          } //when message send scroll to the bottom

        }, {
          key: "scroll",
          value: function scroll() {
            var _this3 = this;

            setTimeout(function () {
              _this3.scrollToBottom();
            }, 10);
          } // Update messagesRead when user lefts this page.

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.eventService.destroy('chat:received');
          } // load the chat conversation methode

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            // load this from event Service provider
            this.eventService.subscribe('messages', function () {}); // update the read and unread message

            this.readMessage(); // read the sender mesages

            this.readMessageSender();
          } //When enter the pages first load the chat and 

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this4 = this;

            this.readMessageSender();
            this.chatService.getMessage(this.userId); // after loaded scroll to the bottom 

            setTimeout(function () {
              _this4.scrollToBottom();
            }, 500);
          }
        }, {
          key: "readMessage",
          value: function readMessage() {
            var _this5 = this;

            // this is an Object 
            var updateRead = {
              read: 'read'
            }; // this handle find the user equal to the userId

            this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once("value", function (snap) {
              //make it object Values
              var res = snap.val(); // Obejct fine the key

              var key = Object.keys(res);

              _this5.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(key[0]).once("value", function (value) {
                var me = value.val();

                if (me.me == 'you') {
                  _this5.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(_this5.userId).once('value', function (snapshot) {
                    var res = snapshot.val();

                    if (res != null) {
                      var _key = Object.keys(res); // if the user is unread message make to read Message,,


                      _this5.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_key[0]).update({
                        read: 'read'
                      });
                    }
                  }).then(function () {
                    // then pass ot the current user
                    _this5.afDB.database.ref('conversations').child(_this5.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', function (snapshot) {
                      var res = snapshot.val();

                      if (res != null) {
                        var _key2 = Object.keys(res);

                        _this5.afDB.database.ref('conversations').child(_this5.userId).child(_key2[0]).update(updateRead);
                      }
                    });
                  });
                } else if (me.me = !'me') {
                  _this5.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(_this5.userId).once('value', function (snapshot) {
                    var res = snapshot.val();

                    if (res != null) {
                      var _key3 = Object.keys(res);

                      _this5.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_key3[0]).update(updateRead);
                    }
                  }).then(function () {
                    _this5.afDB.database.ref('conversations').child(_this5.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', function (snapshot) {
                      var res = snapshot.val();

                      if (res != null) {
                        var _key4 = Object.keys(res);

                        _this5.afDB.database.ref('conversations').child(_this5.userId).child(_key4[0]).update(updateRead);
                      }
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "readMessageSender",
          value: function readMessageSender() {
            var _this6 = this;

            var updateRead = {
              read: 'read'
            }; // get the current data enter the message  throught base on the user

            this.afDB.database.ref('messages').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', function (snapshot) {
              var res = snapshot.val();

              if (res != null) {
                var key = Object.keys(res);

                for (var i = 0; i < key.length; i++) {
                  _this6.afDB.database.ref('messages').child(_this6.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(key[i]).update(updateRead);
                }
              }
            }).then(function () {
              _this6.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_this6.userId).orderByChild('userId').equalTo(_this6.userId).once('value', function (snapshot) {
                var res = snapshot.val();

                if (res != null) {
                  var key = Object.keys(res);

                  for (var i = 0; i < key.length; i++) {
                    _this6.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_this6.userId).child(key[i]).update(updateRead);
                  }
                }
              });
            });
          } // animation when typing user

        }, {
          key: "animateMessage",
          value: function animateMessage(message) {
            setTimeout(function () {
              var tick = message.querySelector('.tick');
              tick.classList.remove('tick-animation');
            }, 500);
          } // more option from do-chat pages
          // the popOver view the component from component 

        }, {
          key: "more",
          value: function more(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _component_chatmore_chatmore_component__WEBPACK_IMPORTED_MODULE_4__["ChatmoreComponent"],
                        cssClass: 'my-custom-class',
                        event: ev,
                        componentProps: {
                          userId: this.userId
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // router pass ot the contact page alone with the userId

        }, {
          key: "viewcontact",
          value: function viewcontact() {
            this.router.navigate(['/contact', {
              'userId': this.userId
            }]);
          } // handle a send message to User
          // if it has been blocked, it can't send message

        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this7 = this;

            // the condition methode for blocked
            if (this.isBlock) {
              // if is true the actionSheet will present
              this.actionUnblock();
            } else {
              // if not blocked it allow to send message to user
              this.sendNewMessage(this.message).then(function () {
                // when send is completed then scroll to the bottom
                setTimeout(function () {
                  _this7.scrollToBottom();
                }, 10); // aslo clear the message box

                _this7.message = '';
              });
            }
          } //send the photo to the user, is and choosen methode 

        }, {
          key: "sendPhoto",
          value: function sendPhoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionSheet.create({
                        header: "Send Photo  Message",
                        buttons: [{
                          text: 'Camera',
                          icon: 'camera',
                          handler: function handler() {
                            //Upload the image and return pormise
                            _this8.uploadPhotoMessage(_this8.camera.PictureSourceType.CAMERA).then(function (url) {
                              _this8.sendNewPhoto(url);
                            });
                          }
                        }, {
                          text: 'Gallery',
                          icon: 'images',
                          handler: function handler() {
                            // Upload the image and retunr pormise
                            _this8.uploadPhotoMessage(_this8.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                              //process photo massge on the database
                              _this8.sendNewPhoto(url);
                            });
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'help-circle',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // delete option weather delete from every one or from you, alone with key of message 

        }, {
          key: "optionDelete",
          value: function optionDelete(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheet.create({
                        header: 'Delete Message from ' + this.nikeName,
                        buttons: [{
                          text: 'delete from me',
                          handler: function handler() {
                            _this9.deleteForMe(key);
                          }
                        }, {
                          text: 'delete from everyone',
                          handler: function handler() {
                            _this9.deleteForEveryOne(key);
                          }
                        }, {
                          text: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // this function handle the delete from me message // alone with key of message able delete

        }, {
          key: "optionDeleteForMe",
          value: function optionDeleteForMe(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheet.create({
                        header: 'Delete Message from ' + this.nikeName,
                        buttons: [{
                          text: 'delete from me',
                          handler: function handler() {
                            _this10.deleteForMe(key);
                          }
                        }, {
                          text: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //send message to user

        }, {
          key: "sendNewMessage",
          value: function sendNewMessage(message) {
            var _this11 = this;

            if (this.userId) {
              var promise = new Promise(function (resolve, reject) {
                // is an object // able send message
                var messages = {
                  date: new Date().toString(),
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  type: 'text',
                  message: message,
                  read: 'unread'
                }; //send to coversation

                var conversation = {
                  userId: _this11.userId,
                  me: "me",
                  view: 'chat',
                  message: message,
                  type: 'text',
                  read: 'unread',
                  date: new Date().toString()
                }; //send to coversation

                var convasation = {
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  message: message,
                  me: "you",
                  type: 'text',
                  view: 'chat',
                  read: 'unread',
                  date: new Date().toString()
                }; // sedn the message

                _this11.afDB.database.ref('/messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_this11.userId).push(messages).then(function (snap) {
                  var keys = snap.key;
                  snap.update({
                    key: keys
                  });

                  _this11.afDB.database.ref('/messages/').child(_this11.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(messages).then(function (snap) {
                    snap.update({
                      key: keys
                    }); //clear the message

                    message = ""; // for the conversation 

                    resolve(true);
                    message = '';

                    _this11.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(_this11.userId).once('value', function (snapshot) {
                      var res = snapshot.val();

                      if (res != null) {
                        var store = Object.keys(res);

                        _this11.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove().then(function () {
                          //send the conversation to the user base on the ID
                          _this11.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(function () {
                            // find the other user base on the user recieve
                            _this11.afDB.database.ref('conversations').child(_this11.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', function (snapshot) {
                              var res = snapshot.val();

                              if (res != null) {
                                var _store = Object.keys(res);

                                _this11.afDB.database.ref('conversations').child(_this11.userId).child(_store[0]).remove().then(function () {
                                  _this11.afDB.database.ref('conversations').child(_this11.userId).push(convasation).then(function () {
                                    resolve(true);
                                  });
                                })["catch"](function (err) {
                                  reject(err);
                                });
                              } else {
                                _this11.afDB.database.ref('conversations').child(_this11.userId).push(convasation).then(function () {
                                  resolve(true);
                                });
                              }
                            })["catch"](function (err) {
                              reject(err);
                            });
                          });
                        })["catch"](function (err) {
                          reject(err);
                        });
                      } else {
                        _this11.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(function () {
                          _this11.afDB.database.ref('conversations').child(_this11.userId).orderByChild('userId').equalTo(_this11.userId).once('value', function (snapshot) {
                            var res = snapshot.val();

                            if (res != null) {
                              var _store2 = Object.keys(res);

                              _this11.afDB.database.ref('conversations').child(_this11.userId).child(_store2[0]).remove().then(function () {
                                _this11.afDB.database.ref('conversations').child(_this11.userId).push(convasation).then(function () {
                                  resolve(true);
                                });
                              })["catch"](function (err) {
                                reject(err);
                              });
                            } else {
                              _this11.afDB.database.ref('conversations').child(_this11.userId).push(convasation).then(function () {
                                resolve(true);
                              });
                            }
                          })["catch"](function (err) {
                            reject(err);
                          });
                        });
                      }
                    })["catch"](function (err) {
                      reject(err);
                    });
                  });
                }).then(function () {
                  // after send message is completed play the sound
                  _this11.nativeAudio.play('send');
                });
              });
              return promise;
            }
          } //send message photo to user alone with url of photo

        }, {
          key: "sendNewPhoto",
          value: function sendNewPhoto(url) {
            var _this12 = this;

            if (this.userId) {
              var promise = new Promise(function (resolve, reject) {
                var messages = {
                  date: new Date().toString(),
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  type: 'image',
                  message: url,
                  read: 'unread'
                };
                var conversation = {
                  userId: _this12.userId,
                  message: url,
                  me: "me",
                  type: 'image',
                  view: 'chat',
                  date: new Date().toString(),
                  read: 'unread'
                };
                var convasation = {
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  message: url,
                  me: "you",
                  view: 'chat',
                  date: new Date().toString(),
                  type: 'image',
                  read: 'unread'
                };

                _this12.afDB.database.ref('/messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_this12.userId).push(messages).then(function (snap) {
                  var keys = snap.key;
                  snap.update({
                    key: keys
                  }).then(function () {
                    _this12.afDB.database.ref('/messages/').child(_this12.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(messages).then(function (snap) {
                      snap.update({
                        key: keys
                      }); // for the conversation 

                      resolve(true); //message = '';

                      _this12.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(_this12.userId).once('value', function (snapshot) {
                        var res = snapshot.val();

                        if (res != null) {
                          var store = Object.keys(res);

                          _this12.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove().then(function () {
                            //send the conversation to the user base on the ID
                            _this12.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(function () {
                              // find the other user base on the user recieve
                              _this12.afDB.database.ref('conversations').child(_this12.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', function (snapshot) {
                                var res = snapshot.val();

                                if (res != null) {
                                  var _store3 = Object.keys(res);

                                  _this12.afDB.database.ref('conversations').child(_this12.userId).child(_store3[0]).remove().then(function () {
                                    _this12.afDB.database.ref('conversations').child(_this12.userId).push(convasation).then(function () {
                                      resolve(true);
                                    });
                                  })["catch"](function (err) {
                                    reject(err);
                                  });
                                } else {
                                  _this12.afDB.database.ref('conversations').child(_this12.userId).push(convasation).then(function () {
                                    resolve(true);
                                  });
                                }
                              })["catch"](function (err) {
                                reject(err);
                              });
                            });
                          })["catch"](function (err) {
                            reject(err);
                          });
                        } else {
                          _this12.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(function () {
                            _this12.afDB.database.ref('conversations').child(_this12.userId).orderByChild('userId').equalTo(_this12.userId).once('value', function (snapshot) {
                              var res = snapshot.val();

                              if (res != null) {
                                var _store4 = Object.keys(res);

                                _this12.afDB.database.ref('conversations').child(_this12.userId).child(_store4[0]).remove().then(function () {
                                  _this12.afDB.database.ref('conversations').child(_this12.userId).push(convasation).then(function () {
                                    resolve(true);
                                  });
                                })["catch"](function (err) {
                                  reject(err);
                                });
                              } else {
                                _this12.afDB.database.ref('conversations').child(_this12.userId).push(convasation).then(function () {
                                  resolve(true);
                                });
                              }
                            })["catch"](function (err) {
                              reject(err);
                            });
                          });
                        }
                      })["catch"](function (err) {
                        reject(err);
                      });
                    });
                  });
                }).then(function () {
                  // play the when completed send
                  _this12.nativeAudio.play('send');
                });
              });
              return promise;
            }
          } // send audio message to user alone with thw url of the audio

        }, {
          key: "sendNewAudio",
          value: function sendNewAudio(url) {
            var _this13 = this;

            if (this.userId) {
              var promise = new Promise(function (resolve, reject) {
                var messages = {
                  date: new Date().toString(),
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  type: 'audio',
                  audio: url,
                  read: 'unread'
                };
                var conversation = {
                  userId: _this13.userId,
                  audio: url,
                  type: 'audio',
                  me: "me",
                  view: 'chat',
                  date: new Date().toString(),
                  read: 'unread'
                };
                var convasation = {
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  audio: url,
                  me: "you",
                  view: 'chat',
                  date: new Date().toString(),
                  type: 'audio',
                  read: 'unread'
                };

                _this13.afDB.database.ref('/messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_this13.userId).push(messages).then(function (snap) {
                  var keys = snap.key;
                  snap.update({
                    key: keys
                  }).then(function () {
                    _this13.afDB.database.ref('/messages/').child(_this13.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(messages).then(function (snap) {
                      snap.update({
                        key: keys
                      }); // for the conversation 

                      resolve(true); //message = '';

                      _this13.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(_this13.userId).once('value', function (snapshot) {
                        var res = snapshot.val();

                        if (res != null) {
                          var store = Object.keys(res);

                          _this13.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove().then(function () {
                            //send the conversation to the user base on the ID
                            _this13.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(function () {
                              // find the other user base on the user recieve
                              _this13.afDB.database.ref('conversations').child(_this13.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', function (snapshot) {
                                var res = snapshot.val();

                                if (res != null) {
                                  var _store5 = Object.keys(res);

                                  _this13.afDB.database.ref('conversations').child(_this13.userId).child(_store5[0]).remove().then(function () {
                                    _this13.afDB.database.ref('conversations').child(_this13.userId).push(convasation).then(function () {
                                      resolve(true);
                                    });
                                  })["catch"](function (err) {
                                    reject(err);
                                  });
                                } else {
                                  _this13.afDB.database.ref('conversations').child(_this13.userId).push(convasation).then(function () {
                                    resolve(true);
                                  });
                                }
                              })["catch"](function (err) {
                                reject(err);
                              });
                            });
                          })["catch"](function (err) {
                            reject(err);
                          });
                        } else {
                          _this13.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(function () {
                            _this13.afDB.database.ref('conversations').child(_this13.userId).orderByChild('userId').equalTo(_this13.userId).once('value', function (snapshot) {
                              var res = snapshot.val();

                              if (res != null) {
                                var _store6 = Object.keys(res);

                                _this13.afDB.database.ref('conversations').child(_this13.userId).child(_store6[0]).remove().then(function () {
                                  _this13.afDB.database.ref('conversations').child(_this13.userId).push(convasation).then(function () {
                                    resolve(true);
                                  });
                                })["catch"](function (err) {
                                  reject(err);
                                });
                              } else {
                                _this13.afDB.database.ref('conversations').child(_this13.userId).push(convasation).then(function () {
                                  resolve(true);
                                });
                              }
                            })["catch"](function (err) {
                              reject(err);
                            });
                          });
                        }
                      })["catch"](function (err) {
                        reject(err);
                      });
                    });
                  });
                }).then(function () {
                  _this13.nativeAudio.play('send');
                });
              });
              return promise;
            }
          } //play voice from the database

        }, {
          key: "play",
          value: function play(audioUrl) {
            var _this14 = this;

            var options = {
              successCallback: function successCallback() {},
              errorCallback: function errorCallback(e) {
                _this14.presentToast();
              },
              initFullscreen: false
            }; // the streaming media hanlde the audio URL convert to native audio play

            this.streamingMedia.playAudio("".concat(audioUrl), options);
          } // toast present to notify for something going wrong

        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toast.create({
                        message: 'Something going wrong.',
                        duration: 1000
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // scroll to the bottom

        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            this.IonContent.scrollToBottom(100);
          } // this handle the upload to the firebase 
          // it handle the selection from the image after will be upload to firebase storage 
          // also will be return the download url

        }, {
          key: "uploadPhotoMessage",
          value: function uploadPhotoMessage(sourceType) {
            var _this15 = this;

            return new Promise(function (resolve, reject) {
              _this15.chatPhotoOption.sourceType = sourceType;

              _this15.camera.getPicture(_this15.chatPhotoOption).then(function (imageData) {
                var url = "data:image/jpeg;base64," + imageData;

                var imgBlob = _this15.imgURItoBlob(url);

                var metadata = {
                  'contentType': imgBlob.type
                };
                alert(url);

                _this15.loading.showPro();

                var ref = _this15.afstorage.ref('/Messaging/' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + _this15.generateFilename());

                var task = ref.put(imgBlob, metadata);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                    var _this16 = this;

                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            ref.getDownloadURL().subscribe(function (url) {
                              resolve(url);

                              _this16.loading.hidePro();
                            });

                          case 1:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));
                })).subscribe();
              });
            });
          } // this handle the record the voice modern

        }, {
          key: "record",
          value: function record() {
            // then create a new file to store the audio
            this.audioFile = this.media.create(this.file.externalDataDirectory + "".concat(this.userId, ".mp3")); // then  start the recorde

            this.audioFile.startRecord(); // this.statusRecord = "Recording..."

            this.recording = true;
          }
        }, {
          key: "stopRec",
          value: function stopRec() {
            var _this17 = this;

            // stop the record
            this.audioFile.stopRecord(); // this.statusRecord = "Stopped..."

            this.recording = false; //uplaod to firebase storage

            this.uploadRec().then(function (url) {
              // pass url to the send maessage
              _this17.sendNewAudio(url);
            });
          } // upload the recording voice to firebase
          // it handle the selection from the audio after will be upload to firebase storage 
          // also will be return the download url

        }, {
          key: "uploadRec",
          value: function uploadRec() {
            var _this18 = this;

            return new Promise(function (resolve) {
              var metadata = {
                contentType: 'audio/mp3'
              };
              var fileName = "".concat(_this18.userId, ".mp3");

              _this18.file.readAsDataURL(_this18.file.externalDataDirectory, fileName).then(function (file) {
                _this18.loading.showPro();

                var ref = _this18.afstorage.ref('/audio/' + '/chat/' + _this18.generateFilenameAudio());

                var task = ref.putString(file, firebase__WEBPACK_IMPORTED_MODULE_7__["storage"].StringFormat.DATA_URL);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    var _this19 = this;

                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            ref.getDownloadURL().subscribe(function (audioUrl) {
                              resolve(audioUrl);

                              _this19.loading.hidePro(); // after uploaded completed,,:: then delete from the delete local storage


                              _this19.file.removeFile(_this19.file.externalDataDirectory, fileName);
                            });

                          case 1:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));
                })).subscribe();
              });
            });
          } // generate the random Name return to the jpg

        }, {
          key: "generateFilename",
          value: function generateFilename() {
            var length = 8;
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text + ".jpg";
          } // generate the random Name return to the mp3

        }, {
          key: "generateFilenameAudio",
          value: function generateFilenameAudio() {
            var length = 4;
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text + ".mp3";
          } // reduce the quality of the image using Blob convert to data

        }, {
          key: "imgURItoBlob",
          value: function imgURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var array = [];

            for (var i = 0; i < binary.length; i++) {
              array.push(binary.charCodeAt(i));
            }

            return new Blob([new Uint8Array(array)], {
              type: mimeString
            });
          } // this handle for the conversation delete for only user

        }, {
          key: "deleteForMe",
          value: function deleteForMe(key) {
            var _this20 = this;

            this.loading.show();
            this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).orderByChild('key').equalTo(key).once('value', function (snapKey) {
              var res = snapKey.val();
              var store = Object.keys(res);

              _this20.loading.hide();

              _this20.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_this20.userId).child(store[0]).remove();
            });
          } // this handel for the deleting for everyone 

        }, {
          key: "deleteForEveryOne",
          value: function deleteForEveryOne(key) {
            var _this21 = this;

            this.loading.show();
            this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).orderByChild('key').equalTo(key).once('value', function (snapKey) {
              var res = snapKey.val();
              var store = Object.keys(res);

              _this21.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(_this21.userId).child(store[0]).remove();

              _this21.afDB.database.ref('messages').child(_this21.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('key').equalTo(key).once('value', function (snapKeys) {
                var ress = snapKeys.val();
                var store = Object.keys(ress);

                _this21.afDB.database.ref('messages').child(_this21.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove();

                _this21.loading.hide();
              });
            }).then(function () {});
          } // route to the view info page

        }, {
          key: "viewInfo",
          value: function viewInfo() {
            this.router.navigate(['/user-info', {
              'userId': this.userId
            }]);
          } //enlarge the image

        }, {
          key: "enlargeImage",
          value: function enlargeImage(image) {
            this.router.navigate(['enlarge-image/', {
              'image': image
            }]);
          } // option to block the user

        }, {
          key: "option",
          value: function option() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this22 = this;

              var actionShet, _actionShet;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(this.isBlock == true)) {
                        _context8.next = 7;
                        break;
                      }

                      _context8.next = 3;
                      return this.actionSheet.create({
                        header: 'Select option',
                        buttons: [{
                          text: 'UnBlock ' + this.nikeName,
                          handler: function handler() {
                            _this22.unblockUser();
                          }
                        }, {
                          text: 'Report ' + this.nikeName,
                          handler: function handler() {
                            _this22.router.navigate(['report/', {
                              'userId': _this22.userId
                            }]);
                          }
                        }, {
                          text: 'Cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 3:
                      actionShet = _context8.sent;
                      actionShet.present(); // if is not block make to block the user

                      _context8.next = 12;
                      break;

                    case 7:
                      if (this.isBlock) {
                        _context8.next = 12;
                        break;
                      }

                      _context8.next = 10;
                      return this.actionSheet.create({
                        header: 'Select option',
                        buttons: [{
                          text: 'Block ' + this.nikeName,
                          handler: function handler() {
                            _this22.blockUser();
                          }
                        }, {
                          text: 'Report ' + this.nikeName,
                          handler: function handler() {
                            _this22.router.navigate(['report/', {
                              'userId': _this22.userId
                            }]);
                          }
                        }, {
                          text: 'Cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 10:
                      _actionShet = _context8.sent;

                      _actionShet.present();

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          } // user Block Function

        }, {
          key: "blockUser",
          value: function blockUser() {
            var _this23 = this;

            this.loading.show();
            this.userService.block(this.currentUserId, this.userId).then(function () {
              _this23.loading.hide();
            });
          } // User UnBlock Funtion

        }, {
          key: "unblockUser",
          value: function unblockUser() {
            var _this24 = this;

            this.loading.show();
            this.userService.unblock(this.currentUserId, this.userId).then(function () {
              _this24.loading.hide();
            });
          } // Send Message option

        }, {
          key: "sendMessageOption",
          value: function sendMessageOption() {
            if (!this.isBlock) {
              this.toastBlock();
              this.message = '';
            } else {
              this.actionUnblock();
            }
          } // his handle if the has been block

        }, {
          key: "toastBlock",
          value: function toastBlock() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var block;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toast.create({
                        header: 'Blocked',
                        message: "Your can't send a message.",
                        duration: 1000,
                        position: "middle"
                      });

                    case 2:
                      block = _context9.sent;
                      block.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } // when empty the input, will handle the option decide?

        }, {
          key: "messageOption",
          value: function messageOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var block;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toast.create({
                        header: 'Empty',
                        message: "Type your message .",
                        duration: 1000,
                        position: "middle"
                      });

                    case 2:
                      block = _context10.sent;
                      block.present();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } // message option to unblock the user

        }, {
          key: "actionUnblock",
          value: function actionUnblock() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this25 = this;

              var actionShet;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.actionSheet.create({
                        header: 'Unblock ' + this.nikeName + ' to send a message.',
                        buttons: [{
                          text: 'UnBlock',
                          handler: function handler() {
                            _this25.unblockUser();
                          }
                        }, {
                          text: 'Cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      actionShet = _context11.sent;
                      actionShet.present();

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } // for the photo option to unblock

        }, {
          key: "sendPhotoOption",
          value: function sendPhotoOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this26 = this;

              var actionShet;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.actionSheet.create({
                        header: 'Unblock ' + this.nikeName + ' to send a photo.',
                        buttons: [{
                          text: 'UnBlock',
                          handler: function handler() {
                            _this26.unblockUser();
                          }
                        }, {
                          text: 'Cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      actionShet = _context12.sent;
                      actionShet.present();

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          } //route to the video call

        }, {
          key: "videoCall",
          value: function videoCall() {
            this.router.navigate(["/calling", {
              'image': this.image,
              'name': this.nikeName,
              'userId': this.userId
            }]);
          } //dial call

        }, {
          key: "callPhoneNumber",
          value: function callPhoneNumber() {
            var _this27 = this;

            this.callNumber.callNumber("".concat(this.phoneNumber), true).then(function () {
              _this27.afDB.list('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/call/').push({
                date: new Date().toString(),
                userId: _this27.userId,
                type: 'calling',
                icon: 'call',
                call: 'call'
              }).then(function () {
                _this27.afDB.list('/accounts/' + _this27.userId + '/call/').push({
                  date: new Date().toString(),
                  userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                  type: 'calling',
                  icon: 'call',
                  call: 'misscall'
                });
              });
            })["catch"](function (err) {
              return _this27.something();
            });
          } // if somthing goes wrong toast will handle the function

        }, {
          key: "something",
          value: function something() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var toast;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.toast.create({
                        message: 'Something going wrong.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context13.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return DoChatPage;
      }();

      DoChatPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
        }, {
          type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_12__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_19__["NativeAudio"]
        }, {
          type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_18__["StreamingMedia"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_13__["ChatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__["CallNumber"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__["Media"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      };

      DoChatPage.propDecorators = {
        IonContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['IonContent', {
            "static": true
          }]
        }]
      };
      DoChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-do-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./do-chat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/do-chat/do-chat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./do-chat.page.scss */
        "./src/app/pages/do-chat/do-chat.page.scss"))["default"]]
      })], DoChatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-do-chat-do-chat-module-es5.js.map