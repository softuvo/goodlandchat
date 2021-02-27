(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newgroup-newgroup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newgroup/newgroup.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newgroup/newgroup.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"padding-left: 5px;\">\n      <span style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">New group</span>\n      <div *ngIf=\"!processe\">\n        <div *ngIf=\"groupMembers.length <= 1\">\n          <span>Add participants</span>\n        </div>\n        <div *ngIf=\"groupMembers.length >= 2\">\n          <ion-label class=\"ion-text-center\">Group Members ({{groupMembers.length}})</ion-label>\n        </div>\n      </div>\n      <div *ngIf=\"processe\">\n        <span>Add subject</span>\n      </div>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"!processe\" style=\"padding-top: 10px; padding-bottom: 20px;\">\n    <div class=\"groupAdded\">\n      <!-- Members -->\n      <!-- <ion-item lines=\"none\" *ngIf=\"groupMembers\">\n      </ion-item> -->\n      <div class=\"thumnails\" *ngIf=\"groupMembers\">\n        <div class=\"list-thumbnail\">\n          <div class=\"img-thumb\" *ngFor=\"let member of groupMembers\" (click)=\"removeFromGroup(member)\">\n            <ion-avatar>\n              <img [src]=\"member.img\" />\n            </ion-avatar>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ion-list *ngFor=\"let account of accounts\">\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        *ngIf=\"!inGroup(account)\" (click)=\"addToGroup(account); $event.stopPropagation();\">\n        <div class=\"profileimage\">\n          <img src=\"{{account.img}}\" alt=\"\">\n        </div>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{account.nikeName}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n              {{account.description}}\n            </span>\n          </span>\n        </ion-label>\n      </ion-item>\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        *ngIf=\"inGroup(account)\" (click)=\"removeFromGroup(account); $event.stopPropagation();\">\n        <div class=\"profileimage\">\n          <img src=\"{{account.img}}\" alt=\"\">\n          <ion-icon slot=\"start\" name=\"checkmark-circle\" color=\"primary\"\n            style=\"margin-bottom:0 !important;margin-left:29px !important;margin-top:33px !important; position: absolute; font-size: x-large;\">\n          </ion-icon>\n        </div>\n\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{account.nikeName}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n              {{account.description}}\n            </span>\n          </span>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"!processe\">\n    <ng-container>\n      <ion-fab-button (click)=\"presentToast()\">\n        <ion-icon expand=\"icon-only\" name=\"arrow-forward-outline\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n  </ion-fab>\n  <div *ngIf=\"processe\">\n    <div style=\"padding-top: 10px;\">\n      <form [formGroup]=\"formGroup\">\n        <ion-item lines=\"none\">\n          <div class=\"headers\">\n            <img src=\"assets/camera.png\" *ngIf=\"group.img == ''\" (click)=\"setGroupPhoto()\">\n            <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" (click)=\"setGroupPhoto()\">\n          </div>\n\n          <ion-item>\n            <ion-input type=\"text\" formControlName=\"name\" placeholder=\"Type group sub here\" [(ngModel)]=\"groupName\">\n            </ion-input>\n            <ion-icon slot=\"end\" src=\"assets/smile.svg\"></ion-icon>\n          </ion-item>\n        </ion-item>\n        <p style=\"text-align: center;\">Provide a group subject and optional group icon</p>\n        <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n          <ng-container>\n            <ion-fab-button style=\"margin-top: 6pc;\" [disabled]=\"!formGroup.valid\" (click)=\"newGroup()\">\n              <ion-icon expand=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-fab-button>\n          </ng-container>\n        </ion-fab>\n      </form>\n    </div>\n\n    <div class=\"backgrondColor\">\n      <ion-grid>\n        <ion-row>\n          <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let account of groupMembers\">\n            <div class=\"img-wrapper\" [style.background-image]=\"'url('+ account.img +')'\">\n            </div>\n            <div class=\"usernameView\">{{account.nikeName}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/newgroup/newgroup-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/newgroup/newgroup-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewgroupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPageRoutingModule", function() { return NewgroupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _newgroup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newgroup.page */ "./src/app/pages/newgroup/newgroup.page.ts");




const routes = [
    {
        path: '',
        component: _newgroup_page__WEBPACK_IMPORTED_MODULE_3__["NewgroupPage"]
    }
];
let NewgroupPageRoutingModule = class NewgroupPageRoutingModule {
};
NewgroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewgroupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/newgroup/newgroup.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/newgroup/newgroup.module.ts ***!
  \***************************************************/
/*! exports provided: NewgroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPageModule", function() { return NewgroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _newgroup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newgroup-routing.module */ "./src/app/pages/newgroup/newgroup-routing.module.ts");
/* harmony import */ var _newgroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newgroup.page */ "./src/app/pages/newgroup/newgroup.page.ts");







let NewgroupPageModule = class NewgroupPageModule {
};
NewgroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _newgroup_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewgroupPageRoutingModule"]
        ],
        declarations: [_newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]]
    })
], NewgroupPageModule);



/***/ }),

/***/ "./src/app/pages/newgroup/newgroup.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/newgroup/newgroup.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.thumnails .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border-radius: 4px;\n  width: 50px;\n  margin: 0 15px 0 0;\n  line-height: 60px;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nion-content ion-toolbar {\n  --background: translucent;\n}\n.usernameView {\n  text-align: center;\n  font-size: small;\n  font-weight: bolder;\n}\ndiv.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\ndiv.headers {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.headers img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n.backgrondColor {\n  padding-top: 10px;\n  background: #dbdada;\n  height: 80vh;\n}\n.img-wrapper {\n  min-height: 100px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3Z3JvdXAvbmV3Z3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBR1o7QUFDQTtFQUNJLGFBQUE7QUFFSjtBQUFBO0VBQ0kseUJBQUE7QUFHSjtBQURBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUpJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU1SO0FBRkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBS0o7QUFKSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFNUjtBQUZBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFLSjtBQUZBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdncm91cC9uZXdncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bW5haWxzIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC5saXN0LXRodW1ibmFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLmltZy10aHVtYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbn1cclxuLnVzZXJuYW1lVmlldyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5kaXYucHJvZmlsZWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDU4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LmhlYWRlcnMge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFja2dyb25kQ29sb3Ige1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJkYWRhO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4uaW1nLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/newgroup/newgroup.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/newgroup/newgroup.page.ts ***!
  \*************************************************/
/*! exports provided: NewgroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPage", function() { return NewgroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/











let NewgroupPage = class NewgroupPage {
    constructor(toastController, dataService, formBuilder, camera, imageService, loading, angularDb, router, actionSheetController, navCtrl) {
        this.toastController = toastController;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.imageService = imageService;
        this.loading = loading;
        this.angularDb = angularDb;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.group = {};
        this.groupMembers = [];
        this.processe = false;
        this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid;
        this.groupPhotoOptionCamera = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        this.groupPhotoOptionGallery = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        }; // for ali erroe side 
        this.formGroup = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(30),
            ]))
        });
    }
    ngOnInit() {
        // Initialize the imagbe fro ther group 
        this.group = {
            img: ''
        };
        //Initialized
        this.searchUser = "";
        this.dataService.getUsers().valueChanges().subscribe((accounts) => {
            this.accounts = accounts;
            this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).valueChanges().subscribe((account) => {
                this.groupMembers = [account];
                this.createName = account.nikeName;
                //add own userId as excludedIds.
                this.account = account;
            });
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.groupMembers.length <= 1) {
                const toast = yield this.toastController.create({
                    message: 'At least 1 user must be selected',
                    position: "middle",
                    duration: 2000
                });
                toast.present();
            }
            else {
                this.processe = true;
            }
        });
    }
    processed() {
        this.presentToast();
    }
    // Check if friend is already added to the group or not.
    inGroup(friend) {
        for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].userId == friend.userId) {
                return true;
            }
        }
        return false;
    }
    //Add friend to member of groups
    addToGroup(account) {
        this.groupMembers.push(account);
    }
    // Remove friend from members of group.
    removeFromGroup(account) {
        var index = -1;
        for (var i = 1; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].userId == account.userId) {
                index = i;
            }
        }
        if (index > -1) {
            this.groupMembers.splice(index, 1);
        }
    }
    // set the image to group photo 
    setImageCamera() {
        return new Promise((resolve) => {
            this.camera.getPicture(this.groupPhotoOptionCamera).then((url) => {
                this.group = "data:image/jpeg;base64," + url;
                resolve(true);
            });
        });
    }
    setImageGallery() {
        return new Promise((resolve) => {
            this.camera.getPicture(this.groupPhotoOptionGallery).then((url) => {
                this.group = "data:image/jpeg;base64," + url;
                resolve(true);
            });
        });
    }
    // action sheet for setPhoto image
    setGroupPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Profile Picture',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.imageService.setGroupPhoto(this.group, this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Gallery',
                        icon: 'images',
                        handler: () => {
                            this.imageService.setGroupPhoto(this.group, this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toastPresent = yield this.toastController.create({
                message: message,
                duration: 300,
                position: 'top'
            });
            toastPresent.present();
        });
    }
    newGroup() {
        var promise = new Promise((resolve, reject) => {
            this.loading.show();
            var messages = [];
            //add system message that group is created
            messages.push({
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid,
                type: 'system',
                message: 'This group has been created by "' + this.createName + '".',
                icon: 'chatbubbles'
            });
            // Add members of the group
            var members = [];
            for (let i = 0; i < this.groupMembers.length; i++) {
                //let push the group member to member with only userId
                members.push(this.groupMembers[i].userId);
            }
            //Add group information and date
            this.group.dateCreated = new Date().toString(),
                this.group.messages = messages;
            this.group.members = members;
            if (this.group.img == '') {
                this.group.img = "assets/profile.png";
            }
            this.group.name = this.formGroup.value["name"];
            this.group.admin = [firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid];
            this.group.createdBy = this.createName;
            // Lets add to firebase database
            this.angularDb.list('/groups/').push(this.group).then((success) => {
                var groupId = success.key;
                //update the key
                success.update({
                    key: groupId
                });
                var conversation = {
                    key: groupId,
                    me: "me",
                    // message: 'This group has been created.',
                    type: 'text',
                    view: 'group',
                    // read: 'unread',
                    date: new Date().toString(),
                };
                var convasation = {
                    key: groupId,
                    // message: 'This group has been created.',
                    me: "you",
                    type: 'text',
                    view: 'group',
                    // read: 'unread',
                    date: new Date().toString(),
                };
                //add group referenceuser to user;
                for (let i = 0; i < this.groupMembers.length; i++) {
                    this.angularDb.object('/accounts/' + this.groupMembers[i].userId + '/groups/' + groupId).update({
                        messagesRead: 1,
                        key: groupId
                    });
                    this.angularDb.database.ref('conversations').child(this.groupMembers[i].userId).push(convasation).then(() => {
                        resolve(true);
                    }).then(() => {
                        this.showToast('Your groups has been created');
                        this.loading.hide();
                        this.navCtrl.pop();
                    });
                }
            });
        });
        return promise;
    }
};
NewgroupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
NewgroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-newgroup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newgroup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newgroup/newgroup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newgroup.page.scss */ "./src/app/pages/newgroup/newgroup.page.scss")).default]
    })
], NewgroupPage);



/***/ })

}]);
//# sourceMappingURL=pages-newgroup-newgroup-module-es2015.js.map