(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verify-verify-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n    <div class=\"label\">\n        <ion-label>Profile info</ion-label>\n    </div>\n    <p class=\"p\">\n        Please provide your name and an optional profile photo\n    </p>\n    \n    <div class=\"profileimage\" *ngIf=\"image === 'assets/profile.png'\">\n        <img src=\"assets/camera.png\" alt=\"\" (click)=\"cameraOption()\">\n    </div>\n    <div class=\"profileimage\" *ngIf=\"image != 'assets/profile.png'\">\n        <img src=\"{{image}}\" alt=\"\" (click)=\"cameraOption()\">\n    </div>\n\n    <div style=\"padding-top: 50px;\">\n        <form [formGroup]=\"name\">\n            <ion-item>\n                <ion-input formControlName=\"updateName\" value={{nikeName}} type=\"text\" placeholder=\"Type your name here\" [(ngModel)]=\"nikeName\"></ion-input>\n                <ion-icon slot=\"end\" src=\"assets/smile.svg\"></ion-icon>\n            </ion-item>\n        </form>\n       \n    </div>\n\n    <div class=\"button\">\n        <ion-button expand=\"block\" (click)=\"update()\" [disabled]=\"!name.valid\">\n            NEXT\n        </ion-button>\n    </div>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/verify/verify-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/verify/verify-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: VerifyPageRoutingModule */

    /***/
    function srcAppPagesVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
        return VerifyPageRoutingModule;
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


      var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify.page */
      "./src/app/pages/verify/verify.page.ts");

      var routes = [{
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
      }];

      var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
        _classCallCheck(this, VerifyPageRoutingModule);
      };

      VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerifyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/verify/verify.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/verify/verify.module.ts ***!
      \***********************************************/

    /*! exports provided: VerifyPageModule */

    /***/
    function srcAppPagesVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
        return VerifyPageModule;
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


      var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verify-routing.module */
      "./src/app/pages/verify/verify-routing.module.ts");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify.page */
      "./src/app/pages/verify/verify.page.ts");

      var VerifyPageModule = function VerifyPageModule() {
        _classCallCheck(this, VerifyPageModule);
      };

      VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"]],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
      })], VerifyPageModule);
      /***/
    },

    /***/
    "./src/app/pages/verify/verify.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/verify/verify.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label {\n  text-align: center;\n  font-size: larger;\n  font-weight: 700;\n  margin: 15px;\n  color: #4d9061;\n}\n\n.p {\n  text-align: center;\n  font-size: medium;\n  padding-top: 15px;\n}\n\nhr {\n  background: #4d9061;\n  width: 180px;\n}\n\n.button {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 15px;\n  bottom: 0;\n}\n\ndiv.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\n\ndiv.profileimage img {\n  width: 35%;\n  height: 100%;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUZJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUlSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgY29sb3I6ICM0ZDkwNjE7XHJcbiAgICAvLyBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4ucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbmhyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZDkwNjE7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbmRpdi5wcm9maWxlaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/verify/verify.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/verify/verify.page.ts ***!
      \*********************************************/

    /*! exports provided: VerifyPage */

    /***/
    function srcAppPagesVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
        return VerifyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /*
      * WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
      * Copyright  @2020-present. All right reserved.
      * Author: Abubakar Pagas
      */


      var VerifyPage = /*#__PURE__*/function () {
        function VerifyPage(router, dataService, angularDb, loading, formBuilder, alertCtrl, afstorage, camera) {
          _classCallCheck(this, VerifyPage);

          this.router = router;
          this.dataService = dataService;
          this.angularDb = angularDb;
          this.loading = loading;
          this.formBuilder = formBuilder;
          this.alertCtrl = alertCtrl;
          this.afstorage = afstorage;
          this.camera = camera;
          this.name = this.formBuilder.group({
            updateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]))
          }); // this.userId = firebase.auth().currentUser.uid;
        }

        _createClass(VerifyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // if already open an account
            // or get the current account
            this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).valueChanges().subscribe(function (user) {
              _this.image = user.img;
              _this.nikeName = user.nikeName;
            });
          } // this handle fi already authenticate will be exit the app

        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            this.loading.show();
            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref("accounts/" + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).once("value").then(function (profile) {
              if (profile.val()) {
                _this2.angularDb.object("accounts/" + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).update({
                  nikeName: _this2.nikeName
                }).then(function () {
                  _this2.loading.hide();

                  _this2.router.navigateByUrl("/home");
                });
              }
            });
          } //handle the camera option

        }, {
          key: "cameraOption",
          value: function cameraOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Select Profile Picture',
                        buttons: [{
                          text: 'Camera',
                          role: 'camera',
                          handler: function handler() {
                            _this3.profilePictureCamera();
                          }
                        }, {
                          text: 'Gallery',
                          cssClass: 'secondary',
                          role: 'gallery',
                          handler: function handler() {
                            _this3.profilePictureGallery();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
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
          }
        }, {
          key: "showAlert",
          value: function showAlert(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: header,
                        message: message,
                        buttons: ["OK"]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
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
          } //for update the profile picture 

        }, {
          key: "profilePictureCamera",
          value: function profilePictureCamera() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var option;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      option = {
                        quality: 100,
                        targetHeight: 530,
                        targetWidth: 530,
                        sourceType: this.camera.PictureSourceType.CAMERA,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        correctOrientation: true,
                        allowEdit: true
                      };

                      try {
                        // this handle the upload to the firebase 
                        // it handle the selection from the image after will be upload to firebase storage 
                        this.camera.getPicture(option).then(function (imageData) {
                          _this4.loading.showPro();

                          var url = "data:image/jpeg;base64," + imageData;

                          var imgBlob = _this4.imgURItoBlob(url);

                          var metadata = {
                            'contentType': imgBlob.type
                          };

                          var ref = _this4.afstorage.ref('/myProfile/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid);

                          var task = ref.put(imgBlob, metadata); //this will be delete for ther existing one

                          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              var _this5 = this;

                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      ref.getDownloadURL().subscribe(function (image) {
                                        _this5.angularDb.object('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).update({
                                          img: image
                                        }).then(function () {
                                          _this5.loading.hidePro();

                                          _this5.showAlert('Profile', 'Your profile picture has been updated');
                                        });
                                      });

                                    case 1:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3);
                            }));
                          })).subscribe();
                        });
                      } catch (error) {}

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "profilePictureGallery",
          value: function profilePictureGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var option;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      option = {
                        quality: 100,
                        targetHeight: 530,
                        targetWidth: 530,
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        correctOrientation: true,
                        allowEdit: true
                      };

                      try {
                        // this handle the upload to the firebase 
                        // it handle the selection from the image after will be upload to firebase storage 
                        this.camera.getPicture(option).then(function (imageData) {
                          _this6.loading.showPro();

                          var url = "data:image/jpeg;base64," + imageData;

                          var imgBlob = _this6.imgURItoBlob(url);

                          var metadata = {
                            'contentType': imgBlob.type
                          };

                          var ref = _this6.afstorage.ref('/myProfile/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + _this6.generateFilename());

                          var task = ref.put(imgBlob, metadata); //this will be delete for ther existing one

                          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                              var _this7 = this;

                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      ref.getDownloadURL().subscribe(function (image) {
                                        _this7.angularDb.object('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).update({
                                          img: image
                                        }).then(function () {
                                          _this7.loading.hidePro();

                                          _this7.showAlert('Profile', 'Your profile picture has been updated');
                                        });
                                      });

                                    case 1:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5);
                            }));
                          })).subscribe();
                        });
                      } catch (error) {}

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return VerifyPage;
      }();

      VerifyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
        }, {
          type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
        }];
      };

      VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./verify.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./verify.page.scss */
        "./src/app/pages/verify/verify.page.scss"))["default"]]
      })], VerifyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-verify-verify-module-es5.js.map