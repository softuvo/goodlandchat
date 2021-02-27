(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-enlarge-image-enlarge-image-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/enlarge-image/enlarge-image.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/enlarge-image/enlarge-image.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"content\" (click)=\"close()\">\n     <img src=\"{{image}}\">\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/enlarge-image/enlarge-image-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/enlarge-image/enlarge-image-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EnlargeImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnlargeImagePageRoutingModule", function() { return EnlargeImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _enlarge_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enlarge-image.page */ "./src/app/pages/enlarge-image/enlarge-image.page.ts");




const routes = [
    {
        path: '',
        component: _enlarge_image_page__WEBPACK_IMPORTED_MODULE_3__["EnlargeImagePage"]
    }
];
let EnlargeImagePageRoutingModule = class EnlargeImagePageRoutingModule {
};
EnlargeImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnlargeImagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/enlarge-image/enlarge-image.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/enlarge-image/enlarge-image.module.ts ***!
  \*************************************************************/
/*! exports provided: EnlargeImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnlargeImagePageModule", function() { return EnlargeImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enlarge_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enlarge-image-routing.module */ "./src/app/pages/enlarge-image/enlarge-image-routing.module.ts");
/* harmony import */ var _enlarge_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enlarge-image.page */ "./src/app/pages/enlarge-image/enlarge-image.page.ts");







let EnlargeImagePageModule = class EnlargeImagePageModule {
};
EnlargeImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _enlarge_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnlargeImagePageRoutingModule"]
        ],
        declarations: [_enlarge_image_page__WEBPACK_IMPORTED_MODULE_6__["EnlargeImagePage"]]
    })
], EnlargeImagePageModule);



/***/ }),

/***/ "./src/app/pages/enlarge-image/enlarge-image.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/enlarge-image/enlarge-image.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-content {\n  background-image: none;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.7) !important;\n  display: flex;\n  align-items: center;\n}\n\n.content img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW5sYXJnZS1pbWFnZS9lbmxhcmdlLWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbmxhcmdlLWltYWdlL2VubGFyZ2UtaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/enlarge-image/enlarge-image.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/enlarge-image/enlarge-image.page.ts ***!
  \***********************************************************/
/*! exports provided: EnlargeImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnlargeImagePage", function() { return EnlargeImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/




let EnlargeImagePage = class EnlargeImagePage {
    constructor(actRouter, navCtrl) {
        this.actRouter = actRouter;
        this.navCtrl = navCtrl;
        this.image = this.actRouter.snapshot.paramMap.get('image');
    }
    ngOnInit() {
    }
    close() {
        this.navCtrl.pop();
    }
};
EnlargeImagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
EnlargeImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enlarge-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./enlarge-image.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/enlarge-image/enlarge-image.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./enlarge-image.page.scss */ "./src/app/pages/enlarge-image/enlarge-image.page.scss")).default]
    })
], EnlargeImagePage);



/***/ })

}]);
//# sourceMappingURL=pages-enlarge-image-enlarge-image-module-es2015.js.map