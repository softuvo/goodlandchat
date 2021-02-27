(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-initia-initia-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/initia/initia.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/initia/initia.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesInitiaInitiaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"label\">\n    <ion-label>Initializing...</ion-label>\n  </div>\n  <div style=\"text-align: center;\">Please wait a moment</div>\n\n\n  <div class=\"logo\">\n    <img src=\"assets/logo.png\" alt=\"\">\n  </div>\n\n  <div class=\"button\">\n    <div class=\"style\">\n      <ion-spinner></ion-spinner>\n    </div>\n  </div>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/initia/initia-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/initia/initia-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InitiaPageRoutingModule */

    /***/
    function srcAppPagesInitiaInitiaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiaPageRoutingModule", function () {
        return InitiaPageRoutingModule;
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


      var _initia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./initia.page */
      "./src/app/pages/initia/initia.page.ts");

      var routes = [{
        path: '',
        component: _initia_page__WEBPACK_IMPORTED_MODULE_3__["InitiaPage"]
      }];

      var InitiaPageRoutingModule = function InitiaPageRoutingModule() {
        _classCallCheck(this, InitiaPageRoutingModule);
      };

      InitiaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InitiaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/initia/initia.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/initia/initia.module.ts ***!
      \***********************************************/

    /*! exports provided: InitiaPageModule */

    /***/
    function srcAppPagesInitiaInitiaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiaPageModule", function () {
        return InitiaPageModule;
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


      var _initia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./initia-routing.module */
      "./src/app/pages/initia/initia-routing.module.ts");
      /* harmony import */


      var _initia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./initia.page */
      "./src/app/pages/initia/initia.page.ts");

      var InitiaPageModule = function InitiaPageModule() {
        _classCallCheck(this, InitiaPageModule);
      };

      InitiaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _initia_routing_module__WEBPACK_IMPORTED_MODULE_5__["InitiaPageRoutingModule"]],
        declarations: [_initia_page__WEBPACK_IMPORTED_MODULE_6__["InitiaPage"]]
      })], InitiaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/initia/initia.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/initia/initia.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesInitiaInitiaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label {\n  text-align: center;\n  font-size: larger;\n  font-weight: 800;\n  margin: 15px;\n  color: #4d9061;\n  font-family: sans-serif;\n}\n\n.logo {\n  padding-top: 50px;\n  text-align: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n\n.button {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 15px;\n  bottom: 0;\n}\n\n.style {\n  text-align: center;\n  margin: 0px auto;\n  color: #4d9061;\n  padding-top: 22px;\n}\n\nion-spinner {\n  color: #4d9061;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pdGlhL2luaXRpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbml0aWEvaW5pdGlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBjb2xvcjogIzRkOTA2MTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcbi5zdHlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgY29sb3I6ICM0ZDkwNjE7XHJcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcclxufVxyXG5pb24tc3Bpbm5lciB7XHJcbiAgICBjb2xvcjogIzRkOTA2MTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/initia/initia.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/initia/initia.page.ts ***!
      \*********************************************/

    /*! exports provided: InitiaPage */

    /***/
    function srcAppPagesInitiaInitiaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitiaPage", function () {
        return InitiaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var InitiaPage = /*#__PURE__*/function () {
        function InitiaPage(router) {
          _classCallCheck(this, InitiaPage);

          this.router = router;
        }

        _createClass(InitiaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.router.navigateByUrl('/verify');
            }, 5000);
          }
        }]);

        return InitiaPage;
      }();

      InitiaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      InitiaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-initia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./initia.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/initia/initia.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./initia.page.scss */
        "./src/app/pages/initia/initia.page.scss"))["default"]]
      })], InitiaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-initia-initia-module-es5.js.map