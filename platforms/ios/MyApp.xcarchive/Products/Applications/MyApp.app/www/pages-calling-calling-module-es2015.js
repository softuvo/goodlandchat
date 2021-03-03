(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calling-calling-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calling/calling.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calling/calling.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div>\n        <div class=\"profileimage\">\n            <img src=\"{{image}}\" alt=\"\">\n        </div>\n        <p style=\"text-align: center;\">{{name}}</p>\n        <p style=\"text-align: center;\">Calling</p>\n    </div>\n\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col>\n                <button *ngIf=\"showCall\" ion-button block>Call</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf=\"showHangup\" ion-button block color=\"danger\">Hangup</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button *ngIf=\"showAnswer\" ion-button block color=\"secondary\">Answer</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf=\"showReject\" ion-button block color=\"danger\">Reject</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p *ngIf=\"showStatus\" [innerHtml]=\"status\"></p>\n            </ion-col>\n        </ion-row>\n        <ion-card>\n            <video src=\"\"></video>\n            <video src=\"\"></video>\n\n        </ion-card>\n    </ion-grid>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button color=\"danger\" (click)=\"endCall()\">\n            <ion-icon name=\"call\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/calling/calling-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/calling/calling-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CallingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallingPageRoutingModule", function() { return CallingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calling_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calling.page */ "./src/app/pages/calling/calling.page.ts");




const routes = [
    {
        path: '',
        component: _calling_page__WEBPACK_IMPORTED_MODULE_3__["CallingPage"]
    }
];
let CallingPageRoutingModule = class CallingPageRoutingModule {
};
CallingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CallingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calling/calling.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/calling/calling.module.ts ***!
  \*************************************************/
/*! exports provided: CallingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallingPageModule", function() { return CallingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calling_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calling-routing.module */ "./src/app/pages/calling/calling-routing.module.ts");
/* harmony import */ var _calling_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calling.page */ "./src/app/pages/calling/calling.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let CallingPageModule = class CallingPageModule {
};
CallingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calling_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallingPageRoutingModule"]
        ],
        declarations: [_calling_page__WEBPACK_IMPORTED_MODULE_6__["CallingPage"]]
    })
], CallingPageModule);



/***/ }),

/***/ "./src/app/pages/calling/calling.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/calling/calling.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.profileimage {\n  padding: 3px;\n  display: flex;\n  padding-top: 25px;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  width: 30%;\n  height: 100%;\n  border-radius: 100%;\n}\nion-fab {\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsbGluZy9jYWxsaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFDQTtFQUNJLG9CQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxsaW5nL2NhbGxpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnByb2ZpbGVpbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbmlvbi1mYWIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/calling/calling.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/calling/calling.page.ts ***!
  \***********************************************/
/*! exports provided: CallingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallingPage", function() { return CallingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/








let CallingPage = class CallingPage {
    constructor(navCtrl, actRoute, nativeAudio, toastController, angularDb, loading) {
        this.navCtrl = navCtrl;
        this.actRoute = actRoute;
        this.nativeAudio = nativeAudio;
        this.toastController = toastController;
        this.angularDb = angularDb;
        this.loading = loading;
        this.showRemoteVideo = true;
        this.showMyVideo = true;
        this.incomingCallId = 0;
        this.nativeAudio.preloadSimple('calling', 'assets/audio/PhoneRinging.wav');
        // this.InitializeApiRTC();
        this.image = this.actRoute.snapshot.paramMap.get('image');
        this.name = this.actRoute.snapshot.paramMap.get('name');
        this.userId = this.actRoute.snapshot.paramMap.get('userId');
    }
    ngOnInit() {
        // let update who on the calling 
        // this.dataService.groups(this.groupId).remove();
        this.nativeAudio.play('calling');
        setTimeout(() => {
            this.presentToast();
        }, 5000);
    }
    InitializeApiRTC() {
        //apiRTC initialization
        apiRTC.init({
            apiKey: "819abef1fde1c833e0601ec6dd4a8226",
            // apiCCId : "2",
            onReady: (e) => {
                this.sessionReadyHandler(e);
            }
        });
    }
    sessionReadyHandler(e) {
        this.myCallId = apiRTC.session.apiCCId;
        this.InitializeControls();
        this.AddEventListeners();
        this.InitializeWebRTCClient();
    }
    InitializeControlsForHangup() {
        this.showCall = true;
        this.showAnswer = false;
        this.showReject = false;
        this.showHangup = false;
    }
    RemoveMediaElements(callId) {
        this.webRTCClient.removeElementFromDiv('mini', 'miniElt-' + callId);
        this.webRTCClient.removeElementFromDiv('remote', 'remoteElt-' + callId);
    }
    InitializeWebRTCClient() {
        this.webRTCClient = apiRTC.session.createWebRTCClient({
            status: "status" //Optionnal
        });
        /*    this.webRTCClient.setAllowMultipleCalls(true);
            this.webRTCClient.setVideoBandwidth(300);
            this.webRTCClient.setUserAcceptOnIncomingCall(true);*/
    }
    InitializeControls() {
        this.showCall = true;
        this.showAnswer = false;
        this.showHangup = false;
        this.showReject = false;
    }
    InitializeControlsForIncomingCall() {
        this.showCall = false;
        this.showAnswer = true;
        this.showReject = true;
        this.showHangup = true;
    }
    AddEventListeners() {
        apiRTC.addEventListener("userMediaSuccess", (e) => {
            this.showStatus = true;
            this.showMyVideo = true;
            this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "mini", 'miniElt-' + e.detail.callId, {
                width: "128px",
                height: "96px"
            }, true);
        });
        apiRTC.addEventListener("userMediaError", (e) => {
            this.InitializeControlsForHangup();
            this.status = this.status + "<br/> The following error has occurred <br/> " + e;
        });
        apiRTC.addEventListener("incomingCall", (e) => {
            this.InitializeControlsForIncomingCall();
            this.incomingCallId = e.detail.callId;
        });
        apiRTC.addEventListener("hangup", (e) => {
            if (e.detail.lastEstablishedCall === true) {
                this.InitializeControlsForHangup();
            }
            this.status = this.status + "<br/> The call has been hunged up due to the following reasons <br/> " + e.detail.reason;
            this.RemoveMediaElements(e.detail.callId);
        });
        apiRTC.addEventListener("remoteStreamAdded", (e) => {
            this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "remote", 'remoteElt-' + e.detail.callId, {
                width: "300px",
                height: "225px"
            }, false);
        });
        apiRTC.addEventListener("webRTCClientCreated", (e) => {
            // console.log("webRTC Client Created");
            this.webRTCClient.setAllowMultipleCalls(true);
            this.webRTCClient.setVideoBandwidth(300);
            this.webRTCClient.setUserAcceptOnIncomingCall(true);
            /*      this.InitializeControls();
                  this.AddEventListeners();*/
            //this.MakeCall("729278");
        });
    }
    //end the call
    endCall() {
        this.loading.show();
        this.angularDb.list('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/call/').push({
            date: new Date().toString(),
            userId: this.userId,
            type: 'calling',
            icon: 'videocam',
            call: 'call'
        }).then(() => {
            this.angularDb.list('/accounts/' + this.userId + '/call/').push({
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                type: 'calling',
                icon: 'videocam',
                call: 'misscall'
            }).then(() => {
                this.nativeAudio.stop('calling');
                this.navCtrl.pop();
                this.loading.hide();
            });
        });
    }
    //present the toast notification
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'If not working on your phone will be updated on next version? send your Bugs.',
                duration: 2000
            });
            toast.present();
        });
    }
};
CallingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeAudio"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
CallingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-calling',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calling.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calling/calling.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calling.page.scss */ "./src/app/pages/calling/calling.page.scss")).default]
    })
], CallingPage);



/***/ })

}]);
//# sourceMappingURL=pages-calling-calling-module-es2015.js.map