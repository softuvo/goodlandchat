(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-info-group-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info/group-info.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info/group-info.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header parallax imageUrl=\"{{group.img}}\" maximumHeight=\"350\" expandedColor=\"#AAA\" titleColor=\"white\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addMembers()\" *ngIf=\"isAdmin\">\n        <ion-icon slot=\"icon-only\" name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <span style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">{{group.name}}</span>\n    </ion-title>\n    <span style=\"padding-left: 19px;\">Created by {{group.createdBy }} , {{ group.dateCreated | moment:'h:mm A'}}</span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card (click)=\"changeGroupInfoDec()\">\n    <ion-card-header>\n      <ion-card-title>Add group description</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card (click)=\"addMembers()\" *ngIf=\"isAdmin\">\n    <ion-card-header>\n      <ion-card-title>Add members</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card (click)=\"changeGroupInfoName()\">\n    <ion-card-header>\n      <ion-card-title>Change group name</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card (click)=\"changeGroupInfoPhoto()\">\n    <ion-card-header>\n      <ion-card-title>Change group photo</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <span style=\"padding-left: 10px; color: var(--ion-color-primary); font-size: larger;\">Media</span>\n    <div class=\"thumnails\">\n      <div class=\"list-thumbnail\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <div class=\"img-thumb\" *ngFor=\"let item of Gallery\">\n              <div class=\"profileimage\">\n                <img src=\"{{item.message}}\" alt=\"\">\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label>Mute notifications</ion-label>\n      <ion-toggle slot=\"end\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Custom notifications</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Media visibility</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Encryption</ion-label>\n      <ion-icon color=\"secondary\" name=\"lock-closed\" slot=\"end\"></ion-icon>\n      <ion-label>Message to this chat and calls are secured with end-to-end encryption. Tap to verify</ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <ion-label>\n        <span style=\"padding-left: 10px; color: var(--ion-color-secondary);\">{{members}} participate</span>\n      </ion-label>\n      <ion-item *ngFor=\"let member of groupMembers\" (click)=\"assignAdmin(member)\"\n        style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\">\n        <ion-avatar>\n          <img src=\"{{member.img}}\">\n        </ion-avatar>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{member.nikeName}}\n          </span>\n          <span *ngIf=\"isAdminOrNotAdmin(member)\" style=\"float:right;font-size:12px;opacity: 0.7;\">\n            <div class=\"adminColor\">\n              Group Admin\n            </div>\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n              {{member.description}}\n            </span>\n          </span>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-button (click)=\"exit()\" color=\"danger\" fill=\"clear\">Exit group\n      <ion-icon slot=\"start\" color=\"danger\" name=\"exit-outline\"></ion-icon>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button color=\"danger\" fill=\"clear\">Report group\n      <ion-icon slot=\"start\" color=\"danger\" src=\"assets/icon/dislike.svg\"></ion-icon>\n    </ion-button>\n  </ion-card>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/group-info/group-info-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/group-info/group-info-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GroupInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInfoPageRoutingModule", function() { return GroupInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _group_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-info.page */ "./src/app/pages/group-info/group-info.page.ts");




const routes = [
    {
        path: '',
        component: _group_info_page__WEBPACK_IMPORTED_MODULE_3__["GroupInfoPage"]
    }
];
let GroupInfoPageRoutingModule = class GroupInfoPageRoutingModule {
};
GroupInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/group-info/group-info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/group-info/group-info.module.ts ***!
  \*******************************************************/
/*! exports provided: GroupInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInfoPageModule", function() { return GroupInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic_header_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-header-parallax */ "./node_modules/ionic-header-parallax/__ivy_ngcc__/fesm2015/ionic-header-parallax.js");
/* harmony import */ var _group_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-info-routing.module */ "./src/app/pages/group-info/group-info-routing.module.ts");
/* harmony import */ var _group_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-info.page */ "./src/app/pages/group-info/group-info.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let GroupInfoPageModule = class GroupInfoPageModule {
};
GroupInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            ionic_header_parallax__WEBPACK_IMPORTED_MODULE_5__["IonicHeaderParallaxModule"],
            _group_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["GroupInfoPageRoutingModule"]
        ],
        declarations: [_group_info_page__WEBPACK_IMPORTED_MODULE_7__["GroupInfoPage"]]
    })
], GroupInfoPageModule);



/***/ }),

/***/ "./src/app/pages/group-info/group-info.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/group-info/group-info.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  width: 100%;\n  margin: 0;\n  margin-bottom: 10px;\n  position: relative;\n  top: 50px;\n  padding-top: 20px;\n}\n\nion-icon {\n  font-size: x-large;\n  padding: 10px;\n}\n\ndiv.profileimage {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.profileimage img {\n  height: 6pc;\n  padding: 2px;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.thumnails .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n}\n\n.adminColor {\n  border: solid 2px var(--ion-color-primary);\n  border-radius: 6px;\n  padding: 1px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvdXAtaW5mby9ncm91cC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQVE7RUFDSSxxQkFBQTtBQUVaOztBQUdBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JvdXAtaW5mby9ncm91cC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5kaXYucHJvZmlsZWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNnBjO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRodW1uYWlscyB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAubGlzdC10aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC5pbWctdGh1bWIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWRtaW5Db2xvciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/group-info/group-info.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/group-info/group-info.page.ts ***!
  \*****************************************************/
/*! exports provided: GroupInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInfoPage", function() { return GroupInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/














let GroupInfoPage = class GroupInfoPage {
    constructor(actRoute, dataService, camera, angularDb, loading, alertController, alertService, actionSheetController, router, imageService, afstorage) {
        this.actRoute = actRoute;
        this.dataService = dataService;
        this.camera = camera;
        this.angularDb = angularDb;
        this.loading = loading;
        this.alertController = alertController;
        this.alertService = alertService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.imageService = imageService;
        this.afstorage = afstorage;
        this.group = {};
        // get groupId 
        this.groupId = this.actRoute.snapshot.paramMap.get('groupId');
        // group photo Option 
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
        //get the member length
        this.dataService.members(this.groupId).valueChanges().subscribe((length) => {
            this.members = length.length;
        });
        // list the image order by image
        this.getGroupGallery();
        // list image base image type
        this.dataService.groups(this.groupId).valueChanges().subscribe((group) => {
            this.group = group;
            if (group.admin) {
                let index = lodash__WEBPACK_IMPORTED_MODULE_8__["indexOf"](group.admin, firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid);
                if (index > -1) {
                    this.isAdmin = true;
                }
            }
            // list the member from the group member
            if (group.members) {
                group.members.forEach((memberId) => {
                    this.dataService.getUser(memberId).valueChanges().subscribe((member) => {
                        this.addUpdateOrRemoveMember(member);
                    });
                });
            }
        });
        //let get the user details
        this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid).valueChanges().subscribe((user) => {
            this.user = user;
        });
    }
    // if is Admin or not
    isAdminOrNotAdmin(member) {
        let index = lodash__WEBPACK_IMPORTED_MODULE_8__["indexOf"](this.group.admin, member.userId);
        if (index > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    // get post timeline for the gallery
    getGroupGallery() {
        this.dataService.groupImage(this.groupId).valueChanges().subscribe((post) => {
            this.Gallery = [];
            this.imageCount = post.length;
            post.forEach((timeline) => {
                let tempData = {};
                tempData = timeline;
                this.Gallery.unshift(tempData);
            });
        });
    }
    // let create  a assign the admin member
    assignAdmin(member) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user.userId != member.userId) {
                if (this.isAdmin && this.user.userId !== member.userId) {
                    if (this.isAdminOrNotAdmin(member)) {
                        const actionSheet = yield this.actionSheetController.create({
                            buttons: [
                                {
                                    text: 'Remove Admin',
                                    handler: () => {
                                        this.loading.show();
                                        let index = lodash__WEBPACK_IMPORTED_MODULE_8__["indexOf"](this.group.admin, member.userId);
                                        if (index >= 0) {
                                            this.group.admin.splice(index, 1);
                                            this.dataService.groups(this.groupId).update({
                                                admin: this.group.admin,
                                            }).then(() => {
                                                firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                                    date: new Date().toString(),
                                                    sender: this.user.userId,
                                                    type: 'system',
                                                    message: this.user.nikeName + ' has removed ' + member.nikeName + ' as admin.',
                                                    icon: 'person-remove'
                                                }).then((sucess) => {
                                                    let key = sucess.key;
                                                    for (let i = 0; i < this.group.members.length; i++) {
                                                        firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                                            key: key
                                                        });
                                                    }
                                                }).then(() => {
                                                    // Back.
                                                    this.loading.hide();
                                                });
                                            });
                                        }
                                        else {
                                            this.loading.hide();
                                            this.alertService.showAlert('Failed', "Member not admin.");
                                        }
                                    },
                                },
                                {
                                    // it invoke the message chat page
                                    text: 'Message ' + member.nikeName,
                                    handler: () => {
                                        this.router.navigate(['/do-chat', { 'userId': member.userId }]);
                                    }
                                },
                                {
                                    text: 'View ' + member.nikeName,
                                    handler: () => {
                                        this.router.navigate(['/do-chat', { 'userId': member.userId }]);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: () => { }
                                }
                            ]
                        });
                        actionSheet.present();
                    }
                    else {
                        const actionSheet = yield this.actionSheetController.create({
                            buttons: [
                                {
                                    text: 'Make Admin',
                                    role: 'share',
                                    handler: () => {
                                        this.loading.show();
                                        let index = lodash__WEBPACK_IMPORTED_MODULE_8__["indexOf"](this.group.admin, member.userId);
                                        if (index < 0) {
                                            let _tempAdmin = this.group.admin;
                                            _tempAdmin.push(member.userId);
                                            this.dataService.groups(this.groupId).update({
                                                admin: _tempAdmin,
                                            }).then(() => {
                                                // this handle thne message page send chat notifation
                                                firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                                    date: new Date().toString(),
                                                    sender: this.user.userId,
                                                    type: 'system',
                                                    message: this.user.nikeName + ' has make ' + member.nikeName + ' as admin.',
                                                    icon: 'person-add'
                                                }).then((sucess) => {
                                                    let key = sucess.key;
                                                    for (let i = 0; i < this.group.members.length; i++) {
                                                        firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                                            key: key
                                                        });
                                                    }
                                                }).then(() => {
                                                    // Back.
                                                    this.loading.hide();
                                                });
                                            });
                                        }
                                        else {
                                            this.loading.hide();
                                            this.alertService.showAlert('Failed', "Member alerday admin.");
                                        }
                                    }
                                },
                                {
                                    text: 'Message ' + member.nikeName,
                                    handler: () => {
                                        this.router.navigate(['/do-chat', { 'userId': member.userId }]);
                                    }
                                },
                                {
                                    text: 'View ' + member.nikeName,
                                    handler: () => {
                                        this.router.navigate(['/do-chat', { 'userId': member.userId }]);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: () => { }
                                }
                            ]
                        });
                        actionSheet.present();
                    }
                }
                else {
                    const actionSheet = yield this.actionSheetController.create({
                        buttons: [
                            {
                                text: 'Message ' + member.nikeName,
                                handler: () => {
                                    this.router.navigate(['/do-chat', { 'userId': member.userId }]);
                                }
                            },
                            {
                                text: 'View ' + member.nikeName,
                                handler: () => {
                                    this.router.navigate(['/do-chat', { 'userId': member.userId }]);
                                }
                            },
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => { }
                            }
                        ]
                    });
                    actionSheet.present();
                }
            }
        });
    }
    // Get names of the members to be added to the group.
    // Check if user exists in the group then add/update user.
    // If the user has already left the group, remove user from the list.
    addUpdateOrRemoveMember(member) {
        if (this.group) {
            if (this.group.members.indexOf(member.userId) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                    this.groupMembers = [member];
                }
                else {
                    var index = -1;
                    for (var i = 0; i < this.groupMembers.length; i++) {
                        if (this.groupMembers[i].userId == member.userId) {
                            index = i;
                        }
                    }
                    // Add/Update User.
                    if (index > -1) {
                        this.groupMembers[index] = member;
                    }
                    else {
                        this.groupMembers.push(member);
                    }
                }
            }
            else {
                // User already left the group, remove member from list.
                var index = -1;
                for (var i = 0; i < this.groupMembers.length; i++) {
                    if (this.groupMembers[i].userId == member.userId) {
                        index = i;
                    }
                }
                if (index > -1) {
                    this.groupMembers.splice(index, 1);
                }
            }
        }
    }
    //handel ot delete the groups
    deleteGroup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: ' Confirm Delete',
                message: "Are you sure you want delete this group",
                buttons: [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'Delete',
                        handler: (data) => {
                            // Delete group image.
                            this.angularDb.object('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid + '/groups/' + this.groupId).remove().then(() => {
                                this.dataService.groups(this.groupId).remove();
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // change the group Name
    changeGroupInfoName() {
        // pass the parameter is name
        let name = 'name';
        // route to the page to the group edite
        this.router.navigate(['/group-info-edite', { 'groupId': this.groupId, 'name': name }]);
    }
    // change the group decription
    changeGroupInfoDec() {
        // pass the parameter is dec means description
        let name = 'dec';
        // route to the page to the group edite
        this.router.navigate(['/group-info-edite', { 'groupId': this.groupId, 'name': name }]);
    }
    //Set the photo 
    changeGroupPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Group Picture',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.loading.show();
                            this.imageService.setGroupPhotoProfile(this.groupId, this.camera.PictureSourceType.CAMERA).then((group) => {
                                this.dataService.groups(this.groupId).update({
                                    img: group,
                                }).then(() => {
                                    // then let add to systme massage can any one see in the group
                                    firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                        date: new Date().toString(),
                                        userId: firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid,
                                        type: 'system',
                                        message: this.user.nikeName + ' has changed the group photo.',
                                        icon: 'camera'
                                    }).then((sucess) => {
                                        let key = sucess.key;
                                        for (let i = 0; i < this.group.members.length; i++) {
                                            firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                                key: key
                                            });
                                        }
                                        this.loading.hide();
                                        this.alertService.showGroupUpdatedMessage();
                                    }).catch((error) => {
                                        this.loading.hide();
                                        this.alertService.showErrorMessage('group/error-update-group');
                                    });
                                });
                            });
                        }
                    },
                    {
                        text: 'Gallery',
                        icon: 'images',
                        handler: () => {
                            this.loading.show();
                            this.imageService.setGroupPhotoProfile(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((group) => {
                                this.dataService.groups(this.groupId).update({
                                    img: group,
                                }).then(() => {
                                    // then let add to systme massage can any one see in the group
                                    firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                        date: new Date().toString(),
                                        userId: firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid,
                                        type: 'system',
                                        message: this.user.nikeName + ' has changed the group photo.',
                                        icon: 'camera'
                                    }).then((sucess) => {
                                        let key = sucess.key;
                                        for (let i = 0; i < this.group.members.length; i++) {
                                            firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                                key: key
                                            });
                                        }
                                        this.loading.hide();
                                        this.alertService.showGroupUpdatedMessage();
                                    }).catch((error) => {
                                        this.loading.hide();
                                        this.alertService.showErrorMessage('group/error-update-group');
                                    });
                                });
                            });
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'help-circle',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    //handel the leave the gr\oups
    exit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm Leave',
                message: 'Are you sure you want to leave this group?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => { }
                    },
                    {
                        text: 'Leave',
                        handler: () => {
                            this.loading.show();
                            // Remove member from group.
                            this.group.members.splice(this.group.members.indexOf(this.user.userId), 1);
                            this.dataService.groups(this.groupId).update({
                                members: this.group.members,
                            }).then(() => {
                                // Add system message.
                                firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                    date: new Date().toString(),
                                    sender: firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid,
                                    type: 'system',
                                    message: this.user.nikeName + ' has left this group.',
                                    icon: 'exit-outline'
                                }).then((sucess) => {
                                    let key = sucess.key;
                                    for (let i = 0; i < this.group.members.length; i++) {
                                        firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                            key: key
                                        }).then(() => {
                                            this.deleteConversation();
                                        });
                                    }
                                    // Remove group from user's group list.
                                    this.dataService.accountsGroups(this.user.userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe((groups) => {
                                        groups.splice(groups.indexOf(this.groupId), 1);
                                        this.router.navigateByUrl('/home');
                                    });
                                }).catch((error) => {
                                    this.loading.hide();
                                    this.alertService.showErrorMessage('group/error-leave-group');
                                });
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    // this will delete the conversation content;
    deleteConversation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.angularDb.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid).orderByChild('key').equalTo(this.groupId).once('value', snap => {
                var res = snap.val();
                if (res != null) {
                    let store = Object.keys(res);
                    this.angularDb.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid).child(store[0]).remove();
                }
            });
        });
    }
    // naviget to the members pages
    addMembers() {
        this.router.navigate(['/addmembers', { 'Id': this.groupId }]);
    }
    // change the group photo
    changeGroupInfoPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Group Picture',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.loading.show();
                            this.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((group) => {
                                this.dataService.groups(this.groupId).update({
                                    img: group,
                                }).then(() => {
                                    // then let add to systme massage can any one see in the group
                                    firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                        date: new Date().toString(),
                                        userId: firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid,
                                        type: 'system',
                                        message: this.user.nikeName + ' has changed the group photo.',
                                        icon: 'camera'
                                    }).then((sucess) => {
                                        let key = sucess.key;
                                        for (let i = 0; i < this.group.members.length; i++) {
                                            firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                                key: key
                                            });
                                        }
                                        this.loading.hide();
                                        this.alertService.showGroupUpdatedMessage();
                                    }).catch((error) => {
                                        this.loading.hide();
                                        this.alertService.showErrorMessage('group/error-update-group');
                                    });
                                });
                            });
                        }
                    },
                    {
                        text: 'Gallery',
                        icon: 'images',
                        handler: () => {
                            this.loading.show();
                            this.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((group) => {
                                this.dataService.groups(this.groupId).update({
                                    img: group,
                                }).then(() => {
                                    // then let add to systme massage can any one see in the group
                                    firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                        date: new Date().toString(),
                                        userId: firebase__WEBPACK_IMPORTED_MODULE_13__["auth"]().currentUser.uid,
                                        type: 'system',
                                        message: this.user.nikeName + ' has changed the group photo.',
                                        icon: 'camera'
                                    }).then((sucess) => {
                                        let key = sucess.key;
                                        for (let i = 0; i < this.group.members.length; i++) {
                                            firebase__WEBPACK_IMPORTED_MODULE_13__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                                key: key
                                            });
                                        }
                                        this.loading.hide();
                                        this.alertService.showGroupUpdatedMessage();
                                    }).catch((error) => {
                                        this.loading.hide();
                                        this.alertService.showErrorMessage('group/error-update-group');
                                    });
                                });
                            });
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'help-circle',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    // this handle the upload to the firebase 
    // it handle the selection from the image after will be upload to firebase storage 
    // also will be return the download url
    uploadGroupPhotoMessage(groupId, sourceType) {
        return new Promise((resolve) => {
            this.groupPhotoOption.sourceType = sourceType;
            this.loading.show();
            this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
                let url = "data:image/jpeg;base64," + imageData;
                let imgBlob = this.imgURItoBlob(url);
                let metadata = {
                    'contentType': imgBlob.type
                };
                const ref = this.afstorage.ref('/groupsMessage/' + groupId + this.generateFilename());
                const task = ref.put(imgBlob, metadata);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    ref.getDownloadURL().subscribe((url) => {
                        resolve(url);
                        this.loading.hide();
                    });
                }))).subscribe();
            });
        });
    }
    // convert the image to the blob
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
    //generate the random name return to jpg
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
GroupInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }
];
GroupInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-group-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./group-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-info/group-info.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./group-info.page.scss */ "./src/app/pages/group-info/group-info.page.scss")).default]
    })
], GroupInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-group-info-group-info-module-es2015.js.map