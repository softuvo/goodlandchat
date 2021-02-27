(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-chat-group-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-chat/group-chat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-chat/group-chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"start\">\n      <img class=\"header\" src=\"{{image || img}}\" (click)=\"groupInfo()\">\n    </ion-thumbnail>\n    <span (click)=\"groupInfo()\" style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    padding-left: 10px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">\n      {{title}}\n    </span>\n    <span (click)=\"groupInfo()\" style=\"padding-left: 10px;\">tap here for group info</span>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"more($event)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #IonContent class=\"ion-padding\" fullscreen=\"true\" class=\"contentBg\" id=\"chat-parent\"\n  overflow-scroll=\"true\">\n  <div class=\"style\" *ngIf=\"isLoading\">\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n  </div>\n  <div>\n    <div id=\"chat-container\">\n      <div class=\"message-wrap\">\n        <div *ngFor=\"let message of messagesToShow; let i = index; let first = first; let last = last\" class=\"message\">\n          <ion-col col-12 class=\"system\" *ngIf=\"message.type == 'system'\">\n            <p style=\"text-align: center;\">\n              <ion-icon color=\"secondary\" name=\"{{message.icon}}\"></ion-icon>\n              {{message.message}} <br />\n              <span>{{message.date |  moment:'h:mm A'}}</span>\n            </p>\n          </ion-col>\n          <div class=\"message-left\" *ngIf=\"message.userId != userId\">\n            <div *ngIf=\"message.type == 'image'\" (click)=\"enlargeImage(message.message)\">\n              <img class=\"user-img\" [src]=\"message.avatar\" (load)=\"scroll()\">\n              <div class=\"msg-details\">\n                <div class=\"msg-content\">\n                  <img class=\"url\" src=\"{{message.message}}\">\n                  <p class=\"line-time-left \">{{message.date | moment:'h:mm A' }}</p>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'text'\">\n              <img class=\"user-img\" [src]=\"message.avatar\" (load)=\"scroll()\">\n              <div class=\"msg-details\">\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker-left \">{{message.message}}</p>\n                  <p class=\"line-time-left \">{{message.date |  moment:'h:mm A' }}</p>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'audio'\">\n              <img class=\"user-img\" [src]=\"message.avatar\" (load)=\"scroll()\">\n              <div class=\"msg-details\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker \">\n                    <span style=\"display: flex;\">\n                      <div (click)=\"play(message.audio)\">\n                        <ion-icon color=\"primary\" class=\"play\" slot=\"icon-only\" name=\"play\"></ion-icon>\n                      </div>\n                    </span>\n                    <span class=\"line-time\">\n                      {{message.date |  moment:'h:mm A' }}\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"message-right\" *ngIf=\"message.userId === userId\">\n            <div *ngIf=\"message.type == 'image'\" (click)=\"optionDelete(message.key)\"\n              (click)=\"enlargeImage(message.message)\">\n              <div class=\"msg-details\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <img class=\"url\" src=\"{{message.message}}\">\n                  <span class=\"line-time\">\n                    {{message.date |  moment:'h:mm A' }}\n                    <ion-icon slot=\"icon=only\" name=\"checkmark-outline\"></ion-icon>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'text'\" (click)=\"optionDelete(message.key)\">\n              <div class=\"msg-details\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker \">{{message.message}}</p>\n                  <span class=\"line-time\">\n                    {{message.date |  moment:'h:mm A' }}\n                    <ion-icon slot=\"icon=only\" name=\"checkmark-outline\"></ion-icon>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"message.type == 'audio'\">\n              <div class=\"msg-details\">\n                <div class=\"msg-info\">\n                </div>\n                <div class=\"msg-content\">\n                  <p class=\"line-breaker \">\n                    <span style=\"display: flex;\">\n                      <div (click)=\"play(message.audio)\">\n                        <ion-icon color=\"primary\" class=\"play\" slot=\"icon-only\" name=\"play\"></ion-icon>\n                      </div>\n                      <div style=\"margin-left: 30px;\" (click)=\"optionDelete(message.key)\">\n                        <ion-icon color=\"primary\" class=\"play\" slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                      </div>\n                    </span>\n                    <span class=\"line-time\">\n                      {{message.date |  moment:'h:mm A' }}\n                      <ion-icon slot=\"icon=only\" name=\"checkmark-outline\"></ion-icon>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container *ngIf=\"message;  else running \">\n      <ion-fab-button color=\"secondary\" (click)=\"sendMessage()\" [disabled]=\"!message\">\n        <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n\n    <ng-template #running>\n      <ion-fab-button color=\"secondary\" (click)=\"record()\" *ngIf=\"!recording\">\n        <ion-icon name=\"mic\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"stopRec()\" *ngIf=\"recording\">\n        <ion-icon name=\"pause-circle\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-template>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n  <ion-row class=\"ion-no-padding; align-items-center\">\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" class=\"msg-btn\" (click)=\"sendPhoto()\">\n        <ion-icon slot=\"icon-only\" name=\"images-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"10\">\n      <textarea class=\"message-input\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></textarea>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/group-chat/group-chat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/group-chat/group-chat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GroupChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPageRoutingModule", function() { return GroupChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _group_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-chat.page */ "./src/app/pages/group-chat/group-chat.page.ts");




const routes = [
    {
        path: '',
        component: _group_chat_page__WEBPACK_IMPORTED_MODULE_3__["GroupChatPage"]
    }
];
let GroupChatPageRoutingModule = class GroupChatPageRoutingModule {
};
GroupChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupChatPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/group-chat/group-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/group-chat/group-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: GroupChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPageModule", function() { return GroupChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _group_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-chat-routing.module */ "./src/app/pages/group-chat/group-chat-routing.module.ts");
/* harmony import */ var _group_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-chat.page */ "./src/app/pages/group-chat/group-chat.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let GroupChatPageModule = class GroupChatPageModule {
};
GroupChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _group_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupChatPageRoutingModule"]
        ],
        declarations: [_group_chat_page__WEBPACK_IMPORTED_MODULE_6__["GroupChatPage"]]
    })
], GroupChatPageModule);



/***/ }),

/***/ "./src/app/pages/group-chat/group-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/group-chat/group-chat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: medium;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nimg.header {\n  border-radius: 50%;\n}\n\n.input-cover {\n  height: auto !important;\n}\n\n.item-md.item-block .item-inner {\n  margin-left: -32px;\n  padding-right: 0 !important;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.back-button-md {\n  margin-left: -10px !important;\n}\n\n.message-input {\n  width: 100%;\n  border-radius: 10px;\n  background: #ffffff;\n  resize: none;\n  color: #000000;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.chatInput {\n  overflow: hidden;\n  background: white;\n  border-radius: 21px;\n  position: fixed;\n  padding-left: 45px;\n  padding-top: 10px;\n  margin-left: 10px;\n  bottom: 0;\n  margin-bottom: 10px;\n  width: calc(100% - 70px);\n}\n\n.chatSmiley {\n  position: fixed;\n  bottom: 0;\n  margin-left: 23px;\n  z-index: 10;\n  color: #000;\n  margin-bottom: 17px;\n  font-size: 30px;\n}\n\n.firstInputRightButton {\n  margin-right: 115px !important;\n}\n\n.InputRightButtons {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin-right: 80px;\n  z-index: 10;\n  color: #000;\n  margin-bottom: 17px;\n  font-size: 30px;\n}\n\n.fab {\n  width: 48px !important;\n  height: 48px !important;\n}\n\n.back-button-md {\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-fab {\n  bottom: -30px !important;\n}\n\n.statusOnline {\n  color: #92ff92;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #005e54;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-fab-button {\n  width: 48px !important;\n  height: 48px !important;\n}\n\n.style {\n  text-align: center;\n  margin: 0px auto;\n  color: #18191b;\n  padding-top: 22px;\n}\n\n/* Conversation */\n\n.contentBg {\n  padding-bottom: 0 !important;\n  --padding-bootm: 0 !important;\n  scroll-behavior: smooth;\n  height: calc(100% - 12px);\n  position: relative;\n  --background: #efe7dd url(\"/../assets/images/light.png\") repeat;\n}\n\n#chat-parent {\n  scroll-behavior: smooth;\n}\n\n.message-left .msg-details {\n  padding-left: 3pc;\n}\n\n.message-wrap .message {\n  position: relative;\n}\n\n.message-wrap .message .user-img {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 45px;\n  width: 35px;\n  height: 35px;\n  border: 2px solid #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap .message .msg-details {\n  width: 95%;\n  display: inline-block;\n  position: relative;\n}\n\n.message-wrap .message .msg-details p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.message-wrap .message .msg-details .msg-info p {\n  font-size: 0.8em;\n  color: #8899;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.message-wrap .message .msg-details .msg-content {\n  position: relative;\n  border-radius: 6px;\n  padding: 2%;\n  width: auto;\n  max-width: 80%;\n  margin-top: 7px;\n}\n\n.message-wrap .message .msg-details .msg-content .line-breaker {\n  white-space: pre-line;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-family: auto;\n}\n\n.message-wrap .message .msg-details .msg-content .line-time {\n  white-space: pre-line;\n  padding-left: 41px;\n  font-size: 12px;\n  float: right;\n  margin: 2px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #c3c0c0;\n}\n\n.message-wrap .message .msg-details .msg-content .line-time-left {\n  white-space: pre-line;\n  padding-left: 29px;\n  text-align: end;\n  float: left;\n  font-size: 12px;\n  margin: 2px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #9e9e9e;\n}\n\n.message-wrap .message .msg-details .msg-content .line-breaker-left {\n  white-space: pre-line;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-family: auto;\n}\n\n.tick {\n  display: inline-block;\n  margin-left: 2px;\n  position: relative;\n  top: 4px;\n  height: 16px;\n  width: 16px;\n}\n\n.tick svg {\n  position: absolute;\n  transition: 0.5s ease-in-out;\n}\n\n.tick svg:first-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(180deg);\n}\n\n.tick svg:last-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(0deg);\n}\n\n.tick-animation svg:first-child {\n  transform: perspective(800px) rotateY(0);\n}\n\n.tick-animation svg:last-child {\n  transform: perspective(800px) rotateY(-179.9deg);\n}\n\nion-icon.play {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvdXAtY2hhdC9ncm91cC1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EscURBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQUdKOztBQUFBO0VBQ0ksNkJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksOEJBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUdKOztBQURBO0VBQ0ksd0JBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFIQTtFQUNJLGdCQUFBO0FBTUo7O0FBSEE7RUFDSSxZQUFBO0FBTUo7O0FBSEEsZUFBQTs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBRkEsU0FBQTs7QUFFQTtFQUNJLHlCQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBREEsYUFBQTs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBLGlCQUFBOztBQUVBO0VBRUksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtBQUdKOztBQUFJO0VBQ0ksaUJBQUE7QUFHUjs7QUFHSTtFQUNJLGtCQUFBO0FBQVI7O0FBRVE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtBQUFaOztBQUVRO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBWjs7QUFDWTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FBQ2hCOztBQUVnQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRFQUFBO0FBQXBCOztBQUlZO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGaEI7O0FBSWdCO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7QUFIcEI7O0FBS2dCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsY0FBQTtBQUhwQjs7QUFLZ0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsY0FBQTtBQUhwQjs7QUFLZ0I7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQUpwQjs7QUFZQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVRKOztBQVlBO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtBQVRKOztBQVlBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtFQUVBLDZDQUFBO0FBVEo7O0FBWUE7RUFDSSxtQ0FBQTtFQUNBLDJCQUFBO0VBRUEsMkNBQUE7QUFUSjs7QUFZQTtFQUVJLHdDQUFBO0FBVEo7O0FBWUE7RUFFSSxnREFBQTtBQVRKOztBQVdBO0VBQ0ksa0JBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWNoYXQvZ3JvdXAtY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcbmltZy5oZWFkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaW5wdXQtY292ZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tc2ctYnRuIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMC41ZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcclxuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLmJhY2stYnV0dG9uLW1kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tZXNzYWdlLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNoYXRJbnB1dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XHJcbn1cclxuLmNoYXRTbWlsZXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZmlyc3RJbnB1dFJpZ2h0QnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTE1cHggIWltcG9ydGFudDtcclxufVxyXG4uSW5wdXRSaWdodEJ1dHRvbnMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4vLyAubWljRmFiIHtcclxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyB9XHJcbi5mYWIge1xyXG4gICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFjay1idXR0b24tbWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZhYiB7XHJcbiAgICBib3R0b206IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0YXR1c09ubGluZSB7XHJcbiAgICBjb2xvcjogIzkyZmY5MjtcclxufVxyXG4ucGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXJ2ZWwtZGV2aWNlIC5zY3JlZW4ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNjcmVlbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBTdGF0dXMgQmFyICovXHJcblxyXG4uc3RhdHVzLWJhciB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0ZTQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxufVxyXG5cclxuLnN0YXR1cy1iYXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFyIGRpdiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIG1hcmdpbjogMCAwIDAgOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogQ2hhdCAqL1xyXG5cclxuLmNoYXQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OXB4KTtcclxufVxyXG5cclxuLmNoYXQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogVXNlciBCYXIgKi9cclxuXHJcbi51c2VyLWJhciB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA1ZTU0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi51c2VyLWJhcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnVzZXItYmFyIGRpdiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMubW9yZSB7XHJcbiAgICBtYXJnaW46IDAgMTJweCAwIDMycHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IHtcclxuICAgIG1hcmdpbjogMCAwIDAgMzBweDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5hY3Rpb25zLmF0dGFjaG1lbnQgaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIHtcclxuICAgIG1hcmdpbjogMCAwIDAgNXB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyLWJhciAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICBtYXJnaW46IDAgMCAwIDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLnN0YXR1cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdHlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgY29sb3I6ICMxODE5MWI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcclxufVxyXG5cclxuLyogQ29udmVyc2F0aW9uICovXHJcblxyXG4uY29udGVudEJnIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm9vdG06IDAgIWltcG9ydGFudDtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC0tYmFja2dyb3VuZDogI2VmZTdkZCB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9saWdodC5wbmdcIikgcmVwZWF0O1xyXG59XHJcbiNjaGF0LXBhcmVudCB7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG4ubWVzc2FnZS1sZWZ0IHtcclxuICAgIC5tc2ctZGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcGM7XHJcbiAgICB9XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCB7XHJcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgICAgLnVzZXItaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXNnLWRldGFpbHMge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1zZy1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ODk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tc2ctY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxpbmUtYnJlYWtlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZS10aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2MzYzBjMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lLXRpbWUtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjlweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZS1icmVha2VyLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vXHJcbi50aWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG59XHJcblxyXG4udGljayBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRpY2sgc3ZnOmZpcnN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi50aWNrIHN2ZzpsYXN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwZGVnKTtcclxufVxyXG5cclxuLnRpY2stYW5pbWF0aW9uIHN2ZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xyXG59XHJcblxyXG4udGljay1hbmltYXRpb24gc3ZnOmxhc3QtY2hpbGQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbn1cclxuaW9uLWljb24ucGxheXtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/group-chat/group-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/group-chat/group-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: GroupChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPage", function() { return GroupChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _component_groupopt_groupopt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../component/groupopt/groupopt.component */ "./src/app/component/groupopt/groupopt.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_16__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/

















let GroupChatPage = class GroupChatPage {
    constructor(actRoute, media, popoverController, dataServices, afDB, toastController, camera, file, nativeAudio, loading, afstorage, actionSheet, streamingMedia, router) {
        this.actRoute = actRoute;
        this.media = media;
        this.popoverController = popoverController;
        this.dataServices = dataServices;
        this.afDB = afDB;
        this.toastController = toastController;
        this.camera = camera;
        this.file = file;
        this.nativeAudio = nativeAudio;
        this.loading = loading;
        this.afstorage = afstorage;
        this.actionSheet = actionSheet;
        this.streamingMedia = streamingMedia;
        this.router = router;
        this.recording = false;
        this.isLoading = true;
        this.messagesToShow = [];
        this.startIndex = -1;
        // Set number of messages to show.
        this.numberOfMessages = 10;
        this.img = 'assets/profile.png';
        this.groupId = this.actRoute.snapshot.paramMap.get('key');
        // load the audio send play
        this.nativeAudio.preloadSimple('send', 'assets/audio/send.wav');
        // Photo group Option
        this.groupPhotoOption = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true
        };
    }
    ngOnInit() {
        // to  clear the message when enter to the chat
        this.setMessagesRead();
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_16__["auth"]().currentUser.uid;
        this.subscription = this.dataServices.groups(this.groupId).valueChanges().subscribe((group) => {
            this.group = group;
            if (group.admin) {
                let index = lodash__WEBPACK_IMPORTED_MODULE_7__["indexOf"](group.admin, firebase__WEBPACK_IMPORTED_MODULE_16__["auth"]().currentUser.uid);
                if (index > -1) {
                    this.isAdmin = true;
                }
            }
            //for the title
            this.title = group.name;
            this.image = group.img;
            //get the message from the group
            this.dataServices.getGroupMessage(this.groupId).valueChanges().subscribe((messages) => {
                this.messagesToShow = [];
                this.isLoading = false;
                messages.forEach((message) => {
                    let tempMessage = message;
                    let tempData = {};
                    tempData = tempMessage;
                    this.dataServices.getUser(tempMessage.userId).valueChanges().subscribe((user) => {
                        tempData.name = user.username;
                        tempData.avatar = user.img;
                    });
                    this.messagesToShow.push(tempData);
                });
            });
        });
    }
    // for more Option
    more(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_groupopt_groupopt_component__WEBPACK_IMPORTED_MODULE_3__["GroupoptComponent"],
                event: ev,
                cssClass: 'my-custom-class',
                translucent: true,
                componentProps: { groupId: this.groupId },
            });
            yield popover.present();
        });
    }
    // When enter the page automatic load
    ionViewDidEnter() {
        this.setMessagesRead();
        setTimeout(() => {
            this.scrollToBottom();
        }, 500);
    }
    // scroll the bottom after 10 miliSecond
    scroll() {
        setTimeout(() => {
            this.scrollToBottom();
        }, 10);
    }
    // Update messagesRead when user lefts this page.
    ionViewWillLeave() {
        this.setMessagesRead();
    }
    //scroll to the bottom
    scrollToBottom() {
        this.IonContent.scrollToBottom(100);
    }
    // Check if currentPage is active, then update user's messagesRead.
    setMessagesRead() {
        this.afDB.object('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_16__["auth"]().currentUser.uid + '/groups/' + this.groupId + '/messagesRead/').remove();
    }
    // Send text message to the group.
    sendMessage() {
        var promise = new Promise((resolve, reject) => {
            let messages = {
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_16__["auth"]().currentUser.uid,
                type: 'text',
                message: this.message
            };
            let convasation = {
                key: this.groupId,
                me: "you",
                type: 'text',
                view: 'group',
                // read: 'unread',
                date: new Date().toString(),
            };
            //update group message
            firebase__WEBPACK_IMPORTED_MODULE_16__["database"]().ref('groups').child(this.groupId).child('messages').push(messages).then((sucess) => {
                this.keyMessage = sucess.key;
                var keys = sucess.key;
                sucess.update({
                    key: keys
                });
                this.message = '';
                setTimeout(() => {
                    this.scrollToBottom();
                }, 10);
            }).then(() => {
                for (let i = 0; i < this.group.members.length; i++) {
                    firebase__WEBPACK_IMPORTED_MODULE_16__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                        key: this.keyMessage
                    });
                    this.afDB.database.ref('conversations').child(this.group.members[i]).orderByChild('key').equalTo(this.groupId).once('value', snapshot => {
                        var res = snapshot.val();
                        if (res != null) {
                            let store = Object.keys(res);
                            this.afDB.database.ref('conversations').child(this.group.members[i]).child(store[0]).remove().then(() => {
                                this.afDB.database.ref('conversations').child(this.group.members[i]).push(convasation).then(() => {
                                    resolve(true);
                                });
                            }).catch((err) => {
                                reject(err);
                            });
                        }
                        else {
                            this.afDB.database.ref('conversations').child(this.group.members[i]).push(convasation).then(() => {
                                resolve(true);
                            });
                        }
                    }).then(() => {
                        this.nativeAudio.play('send');
                    }).catch((err) => {
                        reject(err);
                    });
                }
            });
        });
        return promise;
    }
    // send the photo url to user
    sendMessagePhoto(url) {
        var promise = new Promise((resolve, reject) => {
            let messages = {
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_16__["auth"]().currentUser.uid,
                type: 'image',
                message: url
            };
            let convasation = {
                key: this.groupId,
                me: "you",
                type: 'image',
                view: 'group',
                date: new Date().toString(),
            };
            //update group message
            firebase__WEBPACK_IMPORTED_MODULE_16__["database"]().ref('groups').child(this.groupId).child('messages').push(messages).then((snap) => {
                this.message = '';
                var keys = snap.key;
                snap.update({
                    key: keys
                });
                setTimeout(() => {
                    this.scrollToBottom();
                }, 10);
            }).then(() => {
                for (let i = 0; i < this.group.members.length; i++) {
                    firebase__WEBPACK_IMPORTED_MODULE_16__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                        key: this.keyMessage
                    });
                    this.afDB.database.ref('conversations').child(this.group.members[i]).orderByChild('key').equalTo(this.groupId).once('value', snapshot => {
                        var res = snapshot.val();
                        if (res != null) {
                            let store = Object.keys(res);
                            this.afDB.database.ref('conversations').child(this.group.members[i]).child(store[0]).remove().then(() => {
                                this.afDB.database.ref('conversations').child(this.group.members[i]).push(convasation).then(() => {
                                    resolve(true);
                                });
                            }).catch((err) => {
                                reject(err);
                            });
                        }
                        else {
                            this.afDB.database.ref('conversations').child(this.group.members[i]).push(convasation).then(() => {
                                resolve(true);
                            });
                        }
                    }).then(() => {
                        this.nativeAudio.play('send');
                    }).catch((err) => {
                        reject(err);
                    });
                }
            });
        });
        return promise;
    }
    // generate the random name and return the jpg
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    //Make it Blod file
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
    // this handle the upload to the firebase 
    // it handle the selection from the image after will be upload to firebase storage 
    // also will be return the download url
    uploadPhotoMessage(sourceType) {
        return new Promise((resolve) => {
            this.groupPhotoOption.sourceType = sourceType;
            this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
                let url = "data:image/jpeg;base64," + imageData;
                let imgBlob = this.imgURItoBlob(url);
                let metadata = {
                    'contentType': imgBlob.type
                };
                this.loading.showPro();
                const ref = this.afstorage.ref('/groupMessage/' + firebase__WEBPACK_IMPORTED_MODULE_16__["auth"]().currentUser.uid + this.generateFilename());
                const task = ref.put(imgBlob, metadata);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    ref.getDownloadURL().subscribe((url) => {
                        resolve(url);
                        this.loading.hidePro();
                    });
                }))).subscribe();
            });
        });
    }
    // photo Option choosen
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
                                //process photo massge on the database
                                this.sendMessagePhoto(url);
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
                                this.sendMessagePhoto(url);
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
    //enlarge the image
    enlargeImage(image) {
        this.router.navigate(['enlarge-image/', { 'image': image }]);
    }
    // this handel the record the voice mooden
    record() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audioFile = yield this.media.create(this.file.externalDataDirectory + `${this.groupId}.mp3`);
            this.audioFile.startRecord();
            // this.statusRecord = "Recording..."
            this.recording = true;
        });
    }
    stopRec() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audioFile.stopRecord();
            // this.statusRecord = "Stopped..."
            this.recording = false;
            this.uploadRec().then((url) => {
                this.sendMessageAudio(url);
            });
        });
    }
    //generate the randon name and return mp3 file
    generateFilenameAudio() {
        var length = 4;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".mp3";
    }
    //play voice from the database
    play(audioUrl) {
        let options = {
            successCallback: () => { },
            errorCallback: (e) => { this.presentToast(); },
            initFullscreen: false
        };
        this.streamingMedia.playAudio(`${audioUrl}`, options);
    }
    // present the toast notification
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Something going wrong.',
                duration: 1000
            });
            toast.present();
        });
    }
    // upload the recording voice to firebase
    // this handle the upload to the firebase 
    // it handle the selection from the audio after will be upload to firebase storage 
    // also will be return the download url
    uploadRec() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const metadata = {
                    contentType: 'audio/mp3',
                };
                let fileName = `${this.groupId}.mp3`;
                this.file.readAsDataURL(this.file.externalDataDirectory, fileName).then((file) => {
                    this.loading.showPro();
                    const ref = this.afstorage.ref('/audio/' + '/group/' + this.generateFilenameAudio());
                    const task = ref.putString(file, firebase__WEBPACK_IMPORTED_MODULE_16__["storage"].StringFormat.DATA_URL);
                    task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        ref.getDownloadURL().subscribe((audioUrl) => {
                            resolve(audioUrl);
                            this.loading.hidePro();
                            this.file.removeFile(this.file.externalDataDirectory, fileName);
                        });
                    }))).subscribe();
                });
            });
        });
    }
    // Send text message to the group.
    sendMessageAudio(url) {
        var promise = new Promise((resolve, reject) => {
            let messages = {
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_16__["auth"]().currentUser.uid,
                type: 'audio',
                audio: url
            };
            let convasation = {
                key: this.groupId,
                me: "you",
                type: 'audio',
                view: 'group',
                // read: 'unread',
                date: new Date().toString(),
            };
            //update group message
            firebase__WEBPACK_IMPORTED_MODULE_16__["database"]().ref('groups').child(this.groupId).child('messages').push(messages).then((sucess) => {
                this.message = '';
                this.keyMessage = sucess.key;
                var keys = sucess.key;
                sucess.update({
                    key: keys
                });
                setTimeout(() => {
                    this.scrollToBottom();
                }, 10);
            }).then(() => {
                for (let i = 0; i < this.group.members.length; i++) {
                    firebase__WEBPACK_IMPORTED_MODULE_16__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                        key: this.keyMessage
                    });
                    this.afDB.database.ref('conversations').child(this.group.members[i]).orderByChild('key').equalTo(this.groupId).once('value', snapshot => {
                        var res = snapshot.val();
                        if (res != null) {
                            let store = Object.keys(res);
                            this.afDB.database.ref('conversations').child(this.group.members[i]).child(store[0]).remove().then(() => {
                                this.afDB.database.ref('conversations').child(this.group.members[i]).push(convasation).then(() => {
                                    resolve(true);
                                });
                            }).catch((err) => {
                                reject(err);
                            });
                        }
                        else {
                            this.afDB.database.ref('conversations').child(this.group.members[i]).push(convasation).then(() => {
                                resolve(true);
                            });
                        }
                    }).then(() => {
                        this.nativeAudio.play('send');
                    }).catch((err) => {
                        reject(err);
                    });
                }
            });
        });
        return promise;
    }
    // Delete Option Message from the Group if the current user send message
    optionDelete(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.actionSheet.create({
                header: 'Delete Message from ' + this.title,
                buttons: [
                    {
                        text: 'delete message',
                        handler: () => {
                            this.deleteMessage(key);
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
    // this handle for the conversation delete for only user
    deleteMessage(key) {
        this.loading.show();
        this.afDB.database.ref('groups').child(this.groupId).child('messages').orderByChild('key').equalTo(key).once('value', snapKey => {
            var res = snapKey.val();
            let store = Object.keys(res);
            this.loading.hide();
            this.afDB.database.ref('groups').child(this.groupId).child('messages').child(store[0]).remove();
        });
    }
    // route to the group-info page alone with the groupId
    groupInfo() {
        this.router.navigate(['/group-info', { 'groupId': this.groupId }]);
    }
};
GroupChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeAudio"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_14__["StreamingMedia"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
GroupChatPage.propDecorators = {
    IonContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['IonContent', { static: true },] }]
};
GroupChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-group-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./group-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-chat/group-chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./group-chat.page.scss */ "./src/app/pages/group-chat/group-chat.page.scss")).default]
    })
], GroupChatPage);



/***/ })

}]);
//# sourceMappingURL=pages-group-chat-group-chat-module-es2015.js.map