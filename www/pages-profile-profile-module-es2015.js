(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n   <ion-buttons slot=\"start\">\n     <ion-back-button></ion-back-button>\n   </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"profileimage\">\n    <img src=\"{{image}}\" alt=\"\" (click)=\"cameraOption()\">\n  </div>\n\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"person\" class=\"settingsIcons\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"pencil\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">Name\n      <p>{{nikeName}}</p>\n      <p>this is not your username or pin, this name will be visible to your WhatsApp contacts</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" (click)=\"changeDescription()\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"alert-circle-outline\" class=\"settingsIcons\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"pencil\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">About\n      <p>{{description}}</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"start\" color=\"secondary\" name=\"call\" class=\"settingsIcons\"></ion-icon>\n    <ion-label class=\"settingsText\">Phone\n      <p>+2348034524290</p>\n    </ion-label>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.profileimage {\n  padding: 3px;\n  display: flex;\n  padding-top: 25px;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  width: 40%;\n  height: 100%;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnByb2ZpbGVpbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/










let ProfilePage = class ProfilePage {
    constructor(alertCtrl, dataService, camera, angularDb, toast, loading, navCtrl, afstorage) {
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.camera = camera;
        this.angularDb = angularDb;
        this.toast = toast;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.afstorage = afstorage;
        // te user id
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid;
    }
    ngOnInit() {
        // get the current user from firebase
        this.dataService.getCurrentUser(this.userId).valueChanges().subscribe((user) => {
            this.nikeName = user.nikeName;
            this.description = user.description;
            this.image = user.img;
        });
    }
    // change the name of profile
    changeName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Enter your name',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Your name',
                        value: this.nikeName
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            let name = data["name"];
                            this.loading.show();
                            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref("accounts/").child(this.userId).once("value").then((user) => {
                                if (user.val()) {
                                    this.angularDb.object("accounts/" + this.userId).update({
                                        nikeName: name
                                    }).then(() => {
                                        this.loading.hide();
                                        this.updateProfileToast();
                                    });
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // this notify the user when updated the profile
    updateProfileToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Your profile has been update? Please refresh the page, to view what you update',
                duration: 4000,
                position: 'top'
            });
            toast.present();
        });
    }
    //change the description
    changeDescription() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Change description',
                inputs: [
                    {
                        name: 'description',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'Your about',
                        value: this.description
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            let description = data['description'];
                            this.loading.show();
                            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref("accounts/").child(this.userId).once("value").then((user) => {
                                if (user.val()) {
                                    this.angularDb.object("accounts/" + this.userId).update({
                                        description: description,
                                        dateDec: new Date().toString()
                                    }).then(() => {
                                        this.loading.hide();
                                        this.updateProfileToast();
                                    });
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // back button
    back() {
        this.navCtrl.pop();
    }
    // change the photo Option
    cameraOption() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.alertCtrl.create({
                header: 'Select Profile Picture',
                buttons: [
                    {
                        text: 'Camera',
                        role: 'camera',
                        handler: () => {
                            this.profilePictureCamera();
                        }
                    },
                    {
                        text: 'Gallery',
                        cssClass: 'secondary',
                        role: 'gallery',
                        handler: () => {
                            this.profilePictureGallery();
                        }
                    },
                ]
            });
            yield actionSheet.present();
        });
    }
    //for update the profile picture 
    profilePictureCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const option = {
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
                this.camera.getPicture(option).then((imageData) => {
                    this.loading.showPro();
                    let url = "data:image/jpeg;base64," + imageData;
                    let imgBlob = this.imgURItoBlob(url);
                    let metadata = {
                        'contentType': imgBlob.type
                    };
                    const ref = this.afstorage.ref('/myProfile/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid);
                    const task = ref.put(imgBlob, metadata);
                    //this will be delete for ther existing one
                    task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        ref.getDownloadURL().subscribe((image) => {
                            this.angularDb.object('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).update({
                                img: image
                            }).then(() => {
                                this.loading.hidePro();
                                this.showAlert('Profile', 'Your profile picture has been updated');
                            });
                        });
                    }))).subscribe();
                });
            }
            catch (error) {
            }
        });
    }
    profilePictureGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const option = {
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
                this.camera.getPicture(option).then((imageData) => {
                    this.loading.showPro();
                    let url = "data:image/jpeg;base64," + imageData;
                    let imgBlob = this.imgURItoBlob(url);
                    let metadata = {
                        'contentType': imgBlob.type
                    };
                    const ref = this.afstorage.ref('/myProfile/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid + this.generateFilename());
                    const task = ref.put(imgBlob, metadata);
                    //this will be delete for ther existing one
                    task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        ref.getDownloadURL().subscribe((image) => {
                            this.angularDb.object('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).update({
                                img: image
                            }).then(() => {
                                this.loading.hidePro();
                                this.showAlert('Profile', 'Your profile picture has been updated');
                            });
                        });
                    }))).subscribe();
                });
            }
            catch (error) {
            }
        });
    }
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
    //Show the Alert 
    showAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    //Generate the random Name
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map