(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accountinfo-accountinfo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accountinfo/accountinfo.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accountinfo/accountinfo.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div style=\"text-align: center; padding-top: 50%; color: white;\">\n    <p>WhatsApp Clone by Abubakar pagas</p>\n    <p style=\"color: gray;\">Version 0.0.1</p>\n  </div>\n  <div class=\"profileimage\">\n    <img src=\"assets/images/pagas_logo.png\" alt=\"\">\n  </div>\n  <div style=\"text-align: center; color: gray;\">\n    <p>@ 2020 - 2022</p>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/accountinfo/accountinfo-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/accountinfo/accountinfo-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountinfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountinfoPageRoutingModule", function() { return AccountinfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accountinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountinfo.page */ "./src/app/pages/accountinfo/accountinfo.page.ts");




const routes = [
    {
        path: '',
        component: _accountinfo_page__WEBPACK_IMPORTED_MODULE_3__["AccountinfoPage"]
    }
];
let AccountinfoPageRoutingModule = class AccountinfoPageRoutingModule {
};
AccountinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountinfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/accountinfo/accountinfo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/accountinfo/accountinfo.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountinfoPageModule", function() { return AccountinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _accountinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accountinfo-routing.module */ "./src/app/pages/accountinfo/accountinfo-routing.module.ts");
/* harmony import */ var _accountinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accountinfo.page */ "./src/app/pages/accountinfo/accountinfo.page.ts");







let AccountinfoPageModule = class AccountinfoPageModule {
};
AccountinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _accountinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountinfoPageRoutingModule"]
        ],
        declarations: [_accountinfo_page__WEBPACK_IMPORTED_MODULE_6__["AccountinfoPage"]]
    })
], AccountinfoPageModule);



/***/ }),

/***/ "./src/app/pages/accountinfo/accountinfo.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/accountinfo/accountinfo.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #101d24 url(\"/../assets/images/info.png\");\n}\n\ndiv.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\n\ndiv.profileimage img {\n  width: 30%;\n  height: 100%;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudGluZm8vYWNjb3VudGluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdURBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnRpbmZvL2FjY291bnRpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzEwMWQyNCB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9pbmZvLnBuZ1wiKTtcclxufVxyXG5kaXYucHJvZmlsZWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/accountinfo/accountinfo.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/accountinfo/accountinfo.page.ts ***!
  \*******************************************************/
/*! exports provided: AccountinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountinfoPage", function() { return AccountinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/


let AccountinfoPage = class AccountinfoPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountinfoPage.ctorParameters = () => [];
AccountinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accountinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accountinfo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accountinfo/accountinfo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accountinfo.page.scss */ "./src/app/pages/accountinfo/accountinfo.page.scss")).default]
    })
], AccountinfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-accountinfo-accountinfo-module-es2015.js.map