(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-changenumber-changenumber-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changenumber/changenumber.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changenumber/changenumber.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change number</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"profileimage\">\n    <img src=\"assets/images/number.png\" alt=\"\">\n  </div>\n  <div class=\"ion-padding\">\n    <h6>\n      Changing your phone number will migrate your account info, groups & settings.\n    </h6>\n    <p>\n      Before proceeding, please confirm that you are able to receive SMS or calls at your new number.\n      <br>\n      if you have both a new phone # a new number, first change your number on your old phone.\n    </p>\n  </div>\n  \n  <div class=\"buttons\">\n    <ion-button expand=\"block\" (click)=\"toastShow()\">\n      NEXT\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/changenumber/changenumber-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/changenumber/changenumber-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangenumberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangenumberPageRoutingModule", function() { return ChangenumberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _changenumber_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changenumber.page */ "./src/app/pages/changenumber/changenumber.page.ts");




const routes = [
    {
        path: '',
        component: _changenumber_page__WEBPACK_IMPORTED_MODULE_3__["ChangenumberPage"]
    }
];
let ChangenumberPageRoutingModule = class ChangenumberPageRoutingModule {
};
ChangenumberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangenumberPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/changenumber/changenumber.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/changenumber/changenumber.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangenumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangenumberPageModule", function() { return ChangenumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _changenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changenumber-routing.module */ "./src/app/pages/changenumber/changenumber-routing.module.ts");
/* harmony import */ var _changenumber_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changenumber.page */ "./src/app/pages/changenumber/changenumber.page.ts");







let ChangenumberPageModule = class ChangenumberPageModule {
};
ChangenumberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _changenumber_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangenumberPageRoutingModule"]
        ],
        declarations: [_changenumber_page__WEBPACK_IMPORTED_MODULE_6__["ChangenumberPage"]]
    })
], ChangenumberPageModule);



/***/ }),

/***/ "./src/app/pages/changenumber/changenumber.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/changenumber/changenumber.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  width: 50%;\n  height: 100%;\n  border-radius: 100%;\n}\n.buttons {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 15px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbmdlbnVtYmVyL2NoYW5nZW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFuZ2VudW1iZXIvY2hhbmdlbnVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5wcm9maWxlaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/changenumber/changenumber.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/changenumber/changenumber.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangenumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangenumberPage", function() { return ChangenumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/



let ChangenumberPage = class ChangenumberPage {
    constructor(toast) {
        this.toast = toast;
    }
    ngOnInit() {
    }
    //pop a notification
    toastShow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Oops, This feature is not availabe on this version.',
                duration: 3000,
                position: "top"
            });
            toast.present();
        });
    }
};
ChangenumberPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
ChangenumberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-changenumber',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./changenumber.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changenumber/changenumber.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./changenumber.page.scss */ "./src/app/pages/changenumber/changenumber.page.scss")).default]
    })
], ChangenumberPage);



/***/ })

}]);
//# sourceMappingURL=pages-changenumber-changenumber-module-es2015.js.map