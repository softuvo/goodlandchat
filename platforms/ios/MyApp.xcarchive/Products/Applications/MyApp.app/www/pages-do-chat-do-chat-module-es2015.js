(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-do-chat-do-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/do-chat/do-chat.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/do-chat/do-chat.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"start\" style=\"margin: 5px;\" (click)=\"viewcontact()\">\n      <img class=\"header\" src=\"{{image}}\" (click)=\"viewInfo()\">\n    </ion-thumbnail>\n    <span (click)=\"viewcontact()\" style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">\n      {{nikeName}}\n    </span>\n    <span class=\"statusOnline\" *ngIf=\"status === onlineStatus\" id=\"UserStatus\">{{isOnline}}</span>\n    <span *ngIf=\"status != onlineStatus\" id=\"UserStatus\">{{isOnline | moment:'h:mm A'}}</span>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"videoCall()\">\n        <ion-icon name=\"videocam\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"callPhoneNumber()\">\n        <ion-icon name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"more($event)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #IonContent class=\"ion-padding\" fullscreen=\"true\" class=\"contentBg\" id=\"chat-parent\"\n  overflow-scroll=\"true\">\n  <div class=\"style\" *ngIf=\"isLoading\">\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n  </div>\n  <div>\n    <div id=\"chat-container\">\n      <div class=\"message-wrap\">\n        <div *ngFor=\"let message of messagesToShow; let i = index; let first = first; let last = last\" class=\"message\">\n          <ion-col col-12 class=\"system\" *ngIf=\"message.type == 'block'\">\n            <p>\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\n              {{message.message}} <br />\n              <span>{{message.date |  moment:'h:mm A'}}</span>\n            </p>\n          </ion-col>\n          <div class=\"message-left\" *ngIf=\"message.userId === userId\">\n            <div *ngIf=\"message.type == 'image'\" (click)=\"enlargeImage(message.message)\"\n              (click)=\"optionDeleteForMe(message.key)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-content\">\n                  <img class=\"url\" src=\"{{message.message}}\">\n                  <p class=\"line-time-left \">{{message.date | moment:'h:mm A' }}</p>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'text'\" (click)=\"optionDeleteForMe(message.key)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker-left \">{{message.message}}</p>\n                  <p class=\"line-time-left \">{{message.date |  moment:'h:mm A' }}</p>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'audio'\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker-left\">\n                    <span style=\"display: flex;\">\n                      <div (click)=\"play(message.audio)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"play\"></ion-icon>\n                      </div>\n                      <div style=\"margin-left: 30px;\" (click)=\"optionDeleteForMe(message.key)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                      </div>\n                    </span>\n                  </p>\n                  <span class=\"line-time-left\">\n                    {{message.date |  moment:'h:mm A' }}\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"message-right\" *ngIf=\"message.userId != userId\">\n            <div *ngIf=\"message.type == 'image'\" (click)=\"optionDelete(message.key)\"\n              (click)=\"enlargeImage(message.message)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <img class=\"url\" src=\"{{message.message}}\">\n                  <span class=\"line-time\">\n                    {{message.date |  moment:'h:mm A' }}\n                    <svg *ngIf=\"message.read == 'unread'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#1e1e1e\" />\n                    </svg>\n                    <svg *ngIf=\"message.read == 'read'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#6a64ff\" />\n                    </svg>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'text'\" (click)=\"optionDelete(message.key)\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker \">{{message.message}}</p>\n                  <span class=\"line-time\">\n                    {{message.date |  moment:'h:mm A' }}\n                    <svg *ngIf=\"message.read == 'unread'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#1e1e1e\" />\n                    </svg>\n                    <svg *ngIf=\"message.read == 'read'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                      id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                      <path\n                        d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                        fill=\"#6a64ff\" />\n                    </svg>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'audio'\">\n              <div class=\"msg-detail\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker \">\n                    <span style=\"display: flex;\">\n                      <div (click)=\"play(message.audio)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"play\"></ion-icon>\n                      </div>\n                      <div style=\"margin-left: 30px;\" (click)=\"optionDelete(message.key)\">\n                        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                      </div>\n                    </span>\n                    <span class=\"line-time\">\n                      {{message.date |  moment:'h:mm A' }}\n\n                      <svg *ngIf=\"message.read == 'unread'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                        id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                        <path\n                          d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                          fill=\"#1e1e1e\" />\n                      </svg>\n                      <!-- </div> -->\n                      <!-- <div > -->\n                      <svg *ngIf=\"message.read == 'read'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\"\n                        id=\"msg-dblcheck-ack\" x=\"2063\" y=\"2076\">\n                        <path\n                          d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                          fill=\"#6a64ff\" />\n                      </svg>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container *ngIf=\"message;  else running \">\n      <ion-fab-button color=\"secondary\" (click)=\"sendMessage()\" [disabled]=\"!message\" *ngIf=\"!this.blocks\">\n        <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"sendMessageOption()\" [disabled]=\"!message\" *ngIf=\"this.blocks\">\n        <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n\n    <ng-template #running>\n      <ion-fab-button color=\"secondary\" (click)=\"record()\" *ngIf=\"!recording\">\n        <ion-icon name=\"mic\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"stopRec()\" *ngIf=\"recording\">\n        <ion-icon name=\"pause-circle\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-template>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"ion-no-padding; align-items-center\">\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" class=\"msg-btn\" *ngIf=\"!this.blocks\" (click)=\"sendPhoto()\">\n        <ion-icon slot=\"icon-only\" name=\"images-outline\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" class=\"msg-btn\" *ngIf=\"this.blocks\" (click)=\"sendPhotoOption()\">\n        <ion-icon slot=\"icon-only\" name=\"images-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"10\">\n      <textarea class=\"message-input\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></textarea>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/do-chat/do-chat-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/do-chat/do-chat-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DoChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoChatPageRoutingModule", function() { return DoChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _do_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./do-chat.page */ "./src/app/pages/do-chat/do-chat.page.ts");




const routes = [
    {
        path: '',
        component: _do_chat_page__WEBPACK_IMPORTED_MODULE_3__["DoChatPage"]
    }
];
let DoChatPageRoutingModule = class DoChatPageRoutingModule {
};
DoChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoChatPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/do-chat/do-chat.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/do-chat/do-chat.module.ts ***!
  \*************************************************/
/*! exports provided: DoChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoChatPageModule", function() { return DoChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _do_chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./do-chat-routing.module */ "./src/app/pages/do-chat/do-chat-routing.module.ts");
/* harmony import */ var _do_chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./do-chat.page */ "./src/app/pages/do-chat/do-chat.page.ts");








let DoChatPageModule = class DoChatPageModule {
};
DoChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
            _do_chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["DoChatPageRoutingModule"]
        ],
        declarations: [_do_chat_page__WEBPACK_IMPORTED_MODULE_7__["DoChatPage"]]
    })
], DoChatPageModule);



/***/ }),

/***/ "./src/app/pages/do-chat/do-chat.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/do-chat/do-chat.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.header {\n  border-radius: 50%;\n}\n\n.input-cover {\n  height: auto !important;\n}\n\n.item-md.item-block .item-inner {\n  margin-left: -32px;\n  padding-right: 0 !important;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.back-button-md {\n  margin-left: -10px !important;\n}\n\n.message-input {\n  width: 100%;\n  border-radius: 10px;\n  background: #ffffff;\n  resize: none;\n  color: #000000;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chatInput {\n  overflow: hidden;\n  background: white;\n  border-radius: 21px;\n  position: fixed;\n  padding-left: 45px;\n  padding-top: 10px;\n  margin-left: 10px;\n  bottom: 0;\n  margin-bottom: 10px;\n  width: calc(100% - 70px);\n}\n\n.chatSmiley {\n  position: fixed;\n  bottom: 0;\n  margin-left: 23px;\n  z-index: 10;\n  color: #000;\n  margin-bottom: 17px;\n  font-size: 30px;\n}\n\n.firstInputRightButton {\n  margin-right: 115px !important;\n}\n\n.InputRightButtons {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin-right: 80px;\n  z-index: 10;\n  color: #000;\n  margin-bottom: 17px;\n  font-size: 30px;\n}\n\n.fab {\n  width: 48px !important;\n  height: 48px !important;\n}\n\n.back-button-md {\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-fab {\n  bottom: -30px !important;\n}\n\n.statusOnline {\n  color: #92ff92;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #005e54;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-fab-button {\n  width: 48px !important;\n  height: 48px !important;\n}\n\n.style {\n  text-align: center;\n  margin: 0px auto;\n  color: #18191b;\n  padding-top: 22px;\n}\n\n/* Conversation */\n\n.contentBg {\n  padding-bottom: 0 !important;\n  --padding-bootm: 0 !important;\n  scroll-behavior: smooth;\n  height: calc(100% - 12px);\n  position: relative;\n  --background: #efe7dd url(\"/../assets/images/light.png\") repeat;\n}\n\n#chat-parent {\n  scroll-behavior: smooth;\n}\n\n.message-wrap .message {\n  position: relative;\n}\n\n.message-wrap .message .user-img {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n  width: 35px;\n  height: 35px;\n  border: 2px solid #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap .message .msg-detail {\n  width: 95%;\n  display: inline-block;\n  position: relative;\n}\n\n.message-wrap .message .msg-detail p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.message-wrap .message .msg-detail .msg-info p {\n  font-size: 0.8em;\n  color: #8899;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  border-radius: 6px;\n  padding: 2%;\n  width: auto;\n  max-width: 80%;\n  margin-top: 7px;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-breaker {\n  white-space: pre-line;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-family: auto;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-time {\n  white-space: pre-line;\n  padding-left: 41px;\n  font-size: 12px;\n  float: right;\n  margin: 2px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #c3c0c0;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-time-left {\n  white-space: pre-line;\n  padding-left: 29px;\n  text-align: end;\n  float: left;\n  font-size: 12px;\n  margin: 2px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #9e9e9e;\n}\n\n.message-wrap .message .msg-detail .msg-content .line-breaker-left {\n  white-space: pre-line;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-family: auto;\n}\n\nion-icon {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG8tY2hhdC9kby1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0ksNkJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksOEJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFBO0VBQ0ksd0JBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBRkEsZUFBQTs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREEsU0FBQTs7QUFFQTtFQUNJLHlCQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQUEsYUFBQTs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBLGlCQUFBOztBQUVBO0VBRUksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUdJO0VBQ0ksa0JBQUE7QUFBUjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0FBQVo7O0FBRVE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUNZO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFDaEI7O0FBRWdCO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEVBQUE7QUFBcEI7O0FBSVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZoQjs7QUFJZ0I7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQUhwQjs7QUFLZ0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0FBSHBCOztBQUtnQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0FBSHBCOztBQUtnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0FBSnBCOztBQVlBO0VBQ0ksa0JBQUE7QUFUSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvLWNoYXQvZG8tY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaGVhZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmlucHV0LWNvdmVyIHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubXNnLWJ0biB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMC41ZW07XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5iYWNrLWJ1dHRvbi1tZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWVzc2FnZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0SW5wdXQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG59XHJcbi5jaGF0U21pbGV5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmZpcnN0SW5wdXRSaWdodEJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLklucHV0UmlnaHRCdXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLy8gLm1pY0ZhYiB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gfVxyXG4uZmFiIHtcclxuICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uLW1kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mYWIge1xyXG4gICAgYm90dG9tOiAtMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGF0dXNPbmxpbmUge1xyXG4gICAgY29sb3I6ICM5MmZmOTI7XHJcbn1cclxuLnBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFydmVsLWRldmljZSAuc2NyZWVuIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zY3JlZW4tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogU3RhdHVzIEJhciAqL1xyXG5cclxuLnN0YXR1cy1iYXIge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwNGU0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhciBkaXYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIENoYXQgKi9cclxuXHJcbi5jaGF0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjlweCk7XHJcbn1cclxuXHJcbi5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFVzZXIgQmFyICovXHJcblxyXG4udXNlci1iYXIge1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwNWU1NDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udXNlci1iYXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi51c2VyLWJhciBkaXYge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxufVxyXG5cclxuLnVzZXItYmFyIC5hY3Rpb25zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5hY3Rpb25zLm1vcmUge1xyXG4gICAgbWFyZ2luOiAwIDEycHggMCAzMnB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmF2YXRhciB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDVweDtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmF2YXRhciBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5zdGF0dXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxufVxyXG4uc3R5bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGNvbG9yOiAjMTgxOTFiO1xyXG4gICAgcGFkZGluZy10b3A6IDIycHg7XHJcbn1cclxuXHJcbi8qIENvbnZlcnNhdGlvbiAqL1xyXG5cclxuLmNvbnRlbnRCZyB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvb3RtOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTJweCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZmU3ZGQgdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvbGlnaHQucG5nXCIpIHJlcGVhdDtcclxufVxyXG4jY2hhdC1wYXJlbnQge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCB7XHJcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgICAgLnVzZXItaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXNnLWRldGFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubXNnLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1zZy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubGluZS1icmVha2VyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzNjMGMwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmUtdGltZS1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lLWJyZWFrZXItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/do-chat/do-chat.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/do-chat/do-chat.page.ts ***!
  \***********************************************/
/*! exports provided: DoChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoChatPage", function() { return DoChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _component_chatmore_chatmore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../component/chatmore/chatmore.component */ "./src/app/component/chatmore/chatmore.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/





















let DoChatPage = class DoChatPage {
    constructor(popoverController, dataService, camera, eventService, router, nativeAudio, streamingMedia, chatService, actRoute, ngZone, callNumber, toast, afDB, file, media, afstorage, alertController, actionSheet, loading, userService) {
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
        this.recording = false;
        // load sound effect fro the message sent
        this.nativeAudio.preloadSimple('send', 'assets/audio/send.wav');
        // set the current userId pass to veriable 
        this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
        // option for the photo::: it handle thw quality of the image
        this.chatPhotoOption = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true
        };
        // get the userId
        this.userId = this.actRoute.snapshot.paramMap.get('userId');
        // this.me = this.actRoute.snapshot.paramMap.get('me')
        setTimeout(() => {
            this.scrollToBottom();
        }, 10);
        // get messaging chat from chat Service
        this.eventService.subscribe('messages', () => {
            this.messagesToShow = [];
            this.ngZone.run(() => {
                this.readMessage();
                this.readMessageSender();
                this.messagesToShow = this.chatService.buddymessages;
                this.isLoading = false;
            });
        });
    }
    ngOnInit() {
        //Initialize the enterise of the app
        // Load the, if there is any unread message make it to read message
        this.readMessage();
        // get conversation equal to the userId has been pass,
        // this part may handle for view message and unread
        this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once("value", snap => {
            // make to the object values
            let me = snap.val();
            this.me = me.me;
        });
        // read the sender Message
        this.readMessageSender();
        // let invoke the user database from the firebase 
        // this will fet the data from the firebase
        this.dataService.getUser(this.userId).valueChanges().subscribe((user) => {
            this.user = user;
            this.nikeName = user.nikeName;
            this.isOnline = user.status;
            this.image = user.img;
            this.status = user.status;
            this.phoneNumber = user.phoneNumber;
            this.userId = user.userId;
            this.dataService.userBock(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).valueChanges().subscribe((blocks) => {
                this.isBlock = lodash__WEBPACK_IMPORTED_MODULE_8__["findKey"](blocks, block => {
                    return block = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
                });
                // Block the user condition
                // if the condition is true,
                // you can send any things else
                if (this.isBlock) {
                    this.isBlock = true;
                }
                else {
                    this.isBlock = false;
                }
            });
            // this part handle for the current user 
            this.dataService.userBocks(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).valueChanges().subscribe((blocks) => {
                this.blocks = lodash__WEBPACK_IMPORTED_MODULE_8__["findKey"](blocks, block => {
                    return block = this.userId;
                });
                if (this.blocks) {
                    this.blocks = true;
                }
                else {
                    this.blocks = false;
                }
            });
        });
    }
    //when message send scroll to the bottom
    scroll() {
        setTimeout(() => {
            this.scrollToBottom();
        }, 10);
    }
    // Update messagesRead when user lefts this page.
    ionViewWillLeave() {
        this.eventService.destroy('chat:received');
    }
    // load the chat conversation methode
    ionViewDidLeave() {
        // load this from event Service provider
        this.eventService.subscribe('messages', () => { });
        // update the read and unread message
        this.readMessage();
        // read the sender mesages
        this.readMessageSender();
    }
    //When enter the pages first load the chat and 
    ionViewDidEnter() {
        this.readMessageSender();
        this.chatService.getMessage(this.userId);
        // after loaded scroll to the bottom 
        setTimeout(() => {
            this.scrollToBottom();
        }, 500);
    }
    readMessage() {
        // this is an Object 
        var updateRead = {
            read: 'read'
        };
        // this handle find the user equal to the userId
        this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once("value", snap => {
            //make it object Values
            var res = snap.val();
            // Obejct fine the key
            let key = Object.keys(res);
            this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(key[0]).once("value", value => {
                let me = value.val();
                if (me.me == 'you') {
                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                        var res = snapshot.val();
                        if (res != null) {
                            let key = Object.keys(res);
                            // if the user is unread message make to read Message,,
                            this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(key[0]).update({ read: 'read' });
                        }
                    }).then(() => {
                        // then pass ot the current user
                        this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', snapshot => {
                            var res = snapshot.val();
                            if (res != null) {
                                let key = Object.keys(res);
                                this.afDB.database.ref('conversations').child(this.userId).child(key[0]).update(updateRead);
                            }
                        });
                    });
                }
                else if (me.me = !'me') {
                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                        var res = snapshot.val();
                        if (res != null) {
                            let key = Object.keys(res);
                            this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(key[0]).update(updateRead);
                        }
                    }).then(() => {
                        this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', snapshot => {
                            var res = snapshot.val();
                            if (res != null) {
                                let key = Object.keys(res);
                                this.afDB.database.ref('conversations').child(this.userId).child(key[0]).update(updateRead);
                            }
                        });
                    });
                }
            });
        });
    }
    readMessageSender() {
        var updateRead = {
            read: 'read'
        };
        // get the current data enter the message  throught base on the user
        this.afDB.database.ref('messages').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
            var res = snapshot.val();
            if (res != null) {
                let key = Object.keys(res);
                for (let i = 0; i < key.length; i++) {
                    this.afDB.database.ref('messages').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(key[i]).update(updateRead);
                }
            }
        }).then(() => {
            this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                var res = snapshot.val();
                if (res != null) {
                    let key = Object.keys(res);
                    for (let i = 0; i < key.length; i++) {
                        this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).child(key[i]).update(updateRead);
                    }
                }
            });
        });
    }
    // animation when typing user
    animateMessage(message) {
        setTimeout(() => {
            var tick = message.querySelector('.tick');
            tick.classList.remove('tick-animation');
        }, 500);
    }
    // more option from do-chat pages
    // the popOver view the component from component 
    more(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_chatmore_chatmore_component__WEBPACK_IMPORTED_MODULE_4__["ChatmoreComponent"],
                cssClass: 'my-custom-class',
                event: ev,
                componentProps: { userId: this.userId },
                translucent: true
            });
            return yield popover.present();
        });
    }
    // router pass ot the contact page alone with the userId
    viewcontact() {
        this.router.navigate(['/contact', { 'userId': this.userId }]);
    }
    // handle a send message to User
    // if it has been blocked, it can't send message
    sendMessage() {
        // the condition methode for blocked
        if (this.isBlock) {
            // if is true the actionSheet will present
            this.actionUnblock();
        }
        else {
            // if not blocked it allow to send message to user
            this.sendNewMessage(this.message).then(() => {
                // when send is completed then scroll to the bottom
                setTimeout(() => {
                    this.scrollToBottom();
                }, 10);
                // aslo clear the message box
                this.message = '';
            });
        }
    }
    //send the photo to the user, is and choosen methode 
    sendPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.actionSheet.create({
                header: "Send Photo  Message",
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            //Upload the image and return pormise
                            this.uploadPhotoMessage(this.camera.PictureSourceType.CAMERA).then((url) => {
                                this.sendNewPhoto(url);
                            });
                        },
                    },
                    {
                        text: 'Gallery',
                        icon: 'images',
                        handler: () => {
                            // Upload the image and retunr pormise
                            this.uploadPhotoMessage(this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
                                //process photo massge on the database
                                this.sendNewPhoto(url);
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        icon: 'help-circle',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    // delete option weather delete from every one or from you, alone with key of message 
    optionDelete(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.actionSheet.create({
                header: 'Delete Message from ' + this.nikeName,
                buttons: [
                    {
                        text: 'delete from me',
                        handler: () => {
                            this.deleteForMe(key);
                        }
                    },
                    {
                        text: 'delete from everyone',
                        handler: () => {
                            this.deleteForEveryOne(key);
                        }
                    },
                    {
                        text: 'cancel',
                        handler: () => {
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    // this function handle the delete from me message // alone with key of message able delete
    optionDeleteForMe(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.actionSheet.create({
                header: 'Delete Message from ' + this.nikeName,
                buttons: [
                    {
                        text: 'delete from me',
                        handler: () => {
                            this.deleteForMe(key);
                        }
                    },
                    {
                        text: 'cancel',
                        handler: () => {
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    //send message to user
    sendNewMessage(message) {
        if (this.userId) {
            var promise = new Promise((resolve, reject) => {
                // is an object // able send message
                var messages = {
                    date: new Date().toString(),
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    type: 'text',
                    message: message,
                    read: 'unread',
                };
                //send to coversation
                var conversation = {
                    userId: this.userId,
                    me: "me",
                    view: 'chat',
                    message: message,
                    type: 'text',
                    read: 'unread',
                    date: new Date().toString(),
                };
                //send to coversation
                var convasation = {
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    message: message,
                    me: "you",
                    type: 'text',
                    view: 'chat',
                    read: 'unread',
                    date: new Date().toString(),
                };
                // sedn the message
                this.afDB.database.ref('/messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).push(messages).then((snap) => {
                    var keys = snap.key;
                    snap.update({
                        key: keys
                    });
                    this.afDB.database.ref('/messages/').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(messages).then((snap) => {
                        snap.update({
                            key: keys
                        });
                        //clear the message
                        message = "";
                        // for the conversation 
                        resolve(true);
                        message = '';
                        this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                            var res = snapshot.val();
                            if (res != null) {
                                let store = Object.keys(res);
                                this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove().then(() => {
                                    //send the conversation to the user base on the ID
                                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(() => {
                                        // find the other user base on the user recieve
                                        this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', snapshot => {
                                            var res = snapshot.val();
                                            if (res != null) {
                                                let store = Object.keys(res);
                                                this.afDB.database.ref('conversations').child(this.userId).child(store[0]).remove().then(() => {
                                                    this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                        resolve(true);
                                                    });
                                                }).catch((err) => {
                                                    reject(err);
                                                });
                                            }
                                            else {
                                                this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                    resolve(true);
                                                });
                                            }
                                        }).catch((err) => {
                                            reject(err);
                                        });
                                    });
                                }).catch((err) => {
                                    reject(err);
                                });
                            }
                            else {
                                this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(() => {
                                    this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                                        var res = snapshot.val();
                                        if (res != null) {
                                            let store = Object.keys(res);
                                            this.afDB.database.ref('conversations').child(this.userId).child(store[0]).remove().then(() => {
                                                this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                    resolve(true);
                                                });
                                            }).catch((err) => {
                                                reject(err);
                                            });
                                        }
                                        else {
                                            this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                resolve(true);
                                            });
                                        }
                                    }).catch((err) => {
                                        reject(err);
                                    });
                                });
                            }
                        }).catch((err) => {
                            reject(err);
                        });
                    });
                }).then(() => {
                    // after send message is completed play the sound
                    this.nativeAudio.play('send');
                });
            });
            return promise;
        }
    }
    //send message photo to user alone with url of photo
    sendNewPhoto(url) {
        if (this.userId) {
            var promise = new Promise((resolve, reject) => {
                var messages = {
                    date: new Date().toString(),
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    type: 'image',
                    message: url,
                    read: 'unread',
                };
                var conversation = {
                    userId: this.userId,
                    message: url,
                    me: "me",
                    type: 'image',
                    view: 'chat',
                    date: new Date().toString(),
                    read: 'unread',
                };
                var convasation = {
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    message: url,
                    me: "you",
                    view: 'chat',
                    date: new Date().toString(),
                    type: 'image',
                    read: 'unread',
                };
                this.afDB.database.ref('/messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).push(messages).then((snap) => {
                    var keys = snap.key;
                    snap.update({
                        key: keys
                    }).then(() => {
                        this.afDB.database.ref('/messages/').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(messages).then((snap) => {
                            snap.update({
                                key: keys
                            });
                            // for the conversation 
                            resolve(true);
                            //message = '';
                            this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                                var res = snapshot.val();
                                if (res != null) {
                                    let store = Object.keys(res);
                                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove().then(() => {
                                        //send the conversation to the user base on the ID
                                        this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(() => {
                                            // find the other user base on the user recieve
                                            this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', snapshot => {
                                                var res = snapshot.val();
                                                if (res != null) {
                                                    let store = Object.keys(res);
                                                    this.afDB.database.ref('conversations').child(this.userId).child(store[0]).remove().then(() => {
                                                        this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                            resolve(true);
                                                        });
                                                    }).catch((err) => {
                                                        reject(err);
                                                    });
                                                }
                                                else {
                                                    this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                        resolve(true);
                                                    });
                                                }
                                            }).catch((err) => {
                                                reject(err);
                                            });
                                        });
                                    }).catch((err) => {
                                        reject(err);
                                    });
                                }
                                else {
                                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(() => {
                                        this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                                            var res = snapshot.val();
                                            if (res != null) {
                                                let store = Object.keys(res);
                                                this.afDB.database.ref('conversations').child(this.userId).child(store[0]).remove().then(() => {
                                                    this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                        resolve(true);
                                                    });
                                                }).catch((err) => {
                                                    reject(err);
                                                });
                                            }
                                            else {
                                                this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                    resolve(true);
                                                });
                                            }
                                        }).catch((err) => {
                                            reject(err);
                                        });
                                    });
                                }
                            }).catch((err) => {
                                reject(err);
                            });
                        });
                    });
                }).then(() => {
                    // play the when completed send
                    this.nativeAudio.play('send');
                });
            });
            return promise;
        }
    }
    // send audio message to user alone with thw url of the audio
    sendNewAudio(url) {
        if (this.userId) {
            var promise = new Promise((resolve, reject) => {
                var messages = {
                    date: new Date().toString(),
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    type: 'audio',
                    audio: url,
                    read: 'unread',
                };
                var conversation = {
                    userId: this.userId,
                    audio: url,
                    type: 'audio',
                    me: "me",
                    view: 'chat',
                    date: new Date().toString(),
                    read: 'unread',
                };
                var convasation = {
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    audio: url,
                    me: "you",
                    view: 'chat',
                    date: new Date().toString(),
                    type: 'audio',
                    read: 'unread',
                };
                this.afDB.database.ref('/messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).push(messages).then((snap) => {
                    var keys = snap.key;
                    snap.update({
                        key: keys
                    }).then(() => {
                        this.afDB.database.ref('/messages/').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(messages).then((snap) => {
                            snap.update({
                                key: keys
                            });
                            // for the conversation 
                            resolve(true);
                            //message = '';
                            this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                                var res = snapshot.val();
                                if (res != null) {
                                    let store = Object.keys(res);
                                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove().then(() => {
                                        //send the conversation to the user base on the ID
                                        this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(() => {
                                            // find the other user base on the user recieve
                                            this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).once('value', snapshot => {
                                                var res = snapshot.val();
                                                if (res != null) {
                                                    let store = Object.keys(res);
                                                    this.afDB.database.ref('conversations').child(this.userId).child(store[0]).remove().then(() => {
                                                        this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                            resolve(true);
                                                        });
                                                    }).catch((err) => {
                                                        reject(err);
                                                    });
                                                }
                                                else {
                                                    this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                        resolve(true);
                                                    });
                                                }
                                            }).catch((err) => {
                                                reject(err);
                                            });
                                        });
                                    }).catch((err) => {
                                        reject(err);
                                    });
                                }
                                else {
                                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).push(conversation).then(() => {
                                        this.afDB.database.ref('conversations').child(this.userId).orderByChild('userId').equalTo(this.userId).once('value', snapshot => {
                                            var res = snapshot.val();
                                            if (res != null) {
                                                let store = Object.keys(res);
                                                this.afDB.database.ref('conversations').child(this.userId).child(store[0]).remove().then(() => {
                                                    this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                        resolve(true);
                                                    });
                                                }).catch((err) => {
                                                    reject(err);
                                                });
                                            }
                                            else {
                                                this.afDB.database.ref('conversations').child(this.userId).push(convasation).then(() => {
                                                    resolve(true);
                                                });
                                            }
                                        }).catch((err) => {
                                            reject(err);
                                        });
                                    });
                                }
                            }).catch((err) => {
                                reject(err);
                            });
                        });
                    });
                }).then(() => {
                    this.nativeAudio.play('send');
                });
            });
            return promise;
        }
    }
    //play voice from the database
    play(audioUrl) {
        let options = {
            successCallback: () => { },
            errorCallback: (e) => { this.presentToast(); },
            initFullscreen: false
        };
        // the streaming media hanlde the audio URL convert to native audio play
        this.streamingMedia.playAudio(`${audioUrl}`, options);
    }
    // toast present to notify for something going wrong
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Something going wrong.',
                duration: 1000
            });
            toast.present();
        });
    }
    // scroll to the bottom
    scrollToBottom() {
        this.IonContent.scrollToBottom(100);
    }
    // this handle the upload to the firebase 
    // it handle the selection from the image after will be upload to firebase storage 
    // also will be return the download url
    uploadPhotoMessage(sourceType) {
        return new Promise((resolve, reject) => {
            this.chatPhotoOption.sourceType = sourceType;
            this.camera.getPicture(this.chatPhotoOption).then((imageData) => {
                let url = "data:image/jpeg;base64," + imageData;
                let imgBlob = this.imgURItoBlob(url);
                let metadata = {
                    'contentType': imgBlob.type
                };
                alert(url);
                this.loading.showPro();
                const ref = this.afstorage.ref('/Messaging/' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + this.generateFilename());
                const task = ref.put(imgBlob, metadata);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    ref.getDownloadURL().subscribe((url) => {
                        resolve(url);
                        this.loading.hidePro();
                    });
                }))).subscribe();
            });
        });
    }
    // this handle the record the voice modern
    record() {
        // then create a new file to store the audio
        this.audioFile = this.media.create(this.file.externalDataDirectory + `${this.userId}.mp3`);
        // then  start the recorde
        this.audioFile.startRecord();
        // this.statusRecord = "Recording..."
        this.recording = true;
    }
    stopRec() {
        // stop the record
        this.audioFile.stopRecord();
        // this.statusRecord = "Stopped..."
        this.recording = false;
        //uplaod to firebase storage
        this.uploadRec().then((url) => {
            // pass url to the send maessage
            this.sendNewAudio(url);
        });
    }
    // upload the recording voice to firebase
    // it handle the selection from the audio after will be upload to firebase storage 
    // also will be return the download url
    uploadRec() {
        return new Promise((resolve) => {
            const metadata = {
                contentType: 'audio/mp3',
            };
            let fileName = `${this.userId}.mp3`;
            this.file.readAsDataURL(this.file.externalDataDirectory, fileName).then((file) => {
                this.loading.showPro();
                const ref = this.afstorage.ref('/audio/' + '/chat/' + this.generateFilenameAudio());
                const task = ref.putString(file, firebase__WEBPACK_IMPORTED_MODULE_7__["storage"].StringFormat.DATA_URL);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    ref.getDownloadURL().subscribe((audioUrl) => {
                        resolve(audioUrl);
                        this.loading.hidePro();
                        // after uploaded completed,,:: then delete from the delete local storage
                        this.file.removeFile(this.file.externalDataDirectory, fileName);
                    });
                }))).subscribe();
            });
        });
    }
    // generate the random Name return to the jpg
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    // generate the random Name return to the mp3
    generateFilenameAudio() {
        var length = 4;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".mp3";
    }
    // reduce the quality of the image using Blob convert to data
    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    // this handle for the conversation delete for only user
    deleteForMe(key) {
        this.loading.show();
        this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).orderByChild('key').equalTo(key).once('value', snapKey => {
            var res = snapKey.val();
            let store = Object.keys(res);
            this.loading.hide();
            this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).child(store[0]).remove();
        });
    }
    // this handel for the deleting for everyone 
    deleteForEveryOne(key) {
        this.loading.show();
        this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).orderByChild('key').equalTo(key).once('value', snapKey => {
            var res = snapKey.val();
            let store = Object.keys(res);
            this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(this.userId).child(store[0]).remove();
            this.afDB.database.ref('messages').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).orderByChild('key').equalTo(key).once('value', snapKeys => {
                var ress = snapKeys.val();
                let store = Object.keys(ress);
                this.afDB.database.ref('messages').child(this.userId).child(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).child(store[0]).remove();
                this.loading.hide();
            });
        }).then(() => {
        });
    }
    // route to the view info page
    viewInfo() {
        this.router.navigate(['/user-info', { 'userId': this.userId }]);
    }
    //enlarge the image
    enlargeImage(image) {
        this.router.navigate(['enlarge-image/', { 'image': image }]);
    }
    // option to block the user
    option() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if is already block make to unblock
            if (this.isBlock == true) {
                const actionShet = yield this.actionSheet.create({
                    header: 'Select option',
                    buttons: [
                        {
                            text: 'UnBlock ' + this.nikeName,
                            handler: () => {
                                this.unblockUser();
                            }
                        },
                        {
                            text: 'Report ' + this.nikeName,
                            handler: () => {
                                this.router.navigate(['report/', { 'userId': this.userId }]);
                            }
                        },
                        {
                            text: 'Cancel',
                            handler: () => { }
                        }
                    ]
                });
                actionShet.present();
                // if is not block make to block the user
            }
            else if (!this.isBlock) {
                const actionShet = yield this.actionSheet.create({
                    header: 'Select option',
                    buttons: [
                        {
                            text: 'Block ' + this.nikeName,
                            handler: () => {
                                this.blockUser();
                            }
                        },
                        {
                            text: 'Report ' + this.nikeName,
                            handler: () => {
                                this.router.navigate(['report/', { 'userId': this.userId }]);
                            }
                        },
                        {
                            text: 'Cancel',
                            handler: () => { }
                        }
                    ]
                });
                actionShet.present();
            }
        });
    }
    // user Block Function
    blockUser() {
        this.loading.show();
        this.userService.block(this.currentUserId, this.userId).then(() => {
            this.loading.hide();
        });
    }
    // User UnBlock Funtion
    unblockUser() {
        this.loading.show();
        this.userService.unblock(this.currentUserId, this.userId).then(() => {
            this.loading.hide();
        });
    }
    // Send Message option
    sendMessageOption() {
        if (!this.isBlock) {
            this.toastBlock();
            this.message = '';
        }
        else {
            this.actionUnblock();
        }
    }
    // his handle if the has been block
    toastBlock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const block = yield this.toast.create({
                header: 'Blocked',
                message: "Your can't send a message.",
                duration: 1000,
                position: "middle"
            });
            block.present();
        });
    }
    // when empty the input, will handle the option decide?
    messageOption() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const block = yield this.toast.create({
                header: 'Empty',
                message: "Type your message .",
                duration: 1000,
                position: "middle"
            });
            block.present();
        });
    }
    // message option to unblock the user
    actionUnblock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionShet = yield this.actionSheet.create({
                header: 'Unblock ' + this.nikeName + ' to send a message.',
                buttons: [
                    {
                        text: 'UnBlock',
                        handler: () => {
                            this.unblockUser();
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            actionShet.present();
        });
    }
    // for the photo option to unblock
    sendPhotoOption() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionShet = yield this.actionSheet.create({
                header: 'Unblock ' + this.nikeName + ' to send a photo.',
                buttons: [
                    {
                        text: 'UnBlock',
                        handler: () => {
                            this.unblockUser();
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            actionShet.present();
        });
    }
    //route to the video call
    videoCall() {
        this.router.navigate(["/calling", { 'image': this.image, 'name': this.nikeName, 'userId': this.userId }]);
    }
    //dial call
    callPhoneNumber() {
        this.callNumber.callNumber(`${this.phoneNumber}`, true).then(() => {
            this.afDB.list('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/call/').push({
                date: new Date().toString(),
                userId: this.userId,
                type: 'calling',
                icon: 'call',
                call: 'call'
            }).then(() => {
                this.afDB.list('/accounts/' + this.userId + '/call/').push({
                    date: new Date().toString(),
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    type: 'calling',
                    icon: 'call',
                    call: 'misscall'
                });
            });
        }).catch(err => this.something());
    }
    // if somthing goes wrong toast will handle the function
    something() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Something going wrong.',
                duration: 2000
            });
            toast.present();
        });
    }
};
DoChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_19__["NativeAudio"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_18__["StreamingMedia"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_13__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_20__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__["Media"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
DoChatPage.propDecorators = {
    IonContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['IonContent', { static: true },] }]
};
DoChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-do-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./do-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/do-chat/do-chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./do-chat.page.scss */ "./src/app/pages/do-chat/do-chat.page.scss")).default]
    })
], DoChatPage);



/***/ })

}]);
//# sourceMappingURL=pages-do-chat-do-chat-module-es2015.js.map