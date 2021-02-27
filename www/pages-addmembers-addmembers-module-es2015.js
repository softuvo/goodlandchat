(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addmembers-addmembers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addmembers/addmembers.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addmembers/addmembers.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div style=\"padding-left: 5px;\">\n      <span style=\"font-size: 17px;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    letter-spacing: 0.3px;\n    overflow: hidden;\n    white-space: nowrap;\n    display: block;\">Edit recipients</span>\n      <ion-label class=\"ion-text-center\">{{members + membersUpdate.length}} of 256 selected</ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div style=\"padding-top: 10px; padding-bottom: 20px;\">\n    <div class=\"groupAdded\">\n      <div class=\"thumnails\" *ngIf=\"memberslist\">\n        <div class=\"list-thumbnail\">\n          <div class=\"img-thumb\" *ngFor=\"let member of memberslist\" (click)=\"removeFromGroup(member)\">\n            <ion-avatar>\n              <img [src]=\"member.img\" />\n            </ion-avatar>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-list *ngFor=\"let account of accounts\">\n    <div *ngIf=\"account.userId != userId \">\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        *ngIf=\"!isMember(account)\" (click)=\"addToGroup(account); $event.stopPropagation();\">\n        <div class=\"profileimage\">\n          <img src=\"{{account.img}}\" alt=\"\">\n        </div>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{account.nikeName}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n              {{account.description}}\n            </span>\n          </span>\n        </ion-label>\n      </ion-item>\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        *ngIf=\"isMember(account)\" (click)=\"removeFromGroup(account); $event.stopPropagation();\">\n        <div class=\"profileimage\">\n          <img src=\"{{account.img}}\" alt=\"\">\n          <ion-icon slot=\"start\" name=\"checkmark-circle\" color=\"primary\"\n            style=\"margin-bottom:0 !important;margin-left:21px !important;margin-top:13px !important; position: absolute; font-size: x-large;\">\n          </ion-icon>\n        </div>\n\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{account.nikeName}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\">\n              {{account.description}}\n            </span>\n          </span>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container>\n      <ion-fab-button (click)=\"update()\">\n        <ion-icon expand=\"icon-only\" name=\"checkmark\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/addmembers/addmembers-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/addmembers/addmembers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddmembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPageRoutingModule", function() { return AddmembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addmembers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addmembers.page */ "./src/app/pages/addmembers/addmembers.page.ts");




const routes = [
    {
        path: '',
        component: _addmembers_page__WEBPACK_IMPORTED_MODULE_3__["AddmembersPage"]
    }
];
let AddmembersPageRoutingModule = class AddmembersPageRoutingModule {
};
AddmembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddmembersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/addmembers/addmembers.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addmembers/addmembers.module.ts ***!
  \*******************************************************/
/*! exports provided: AddmembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPageModule", function() { return AddmembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addmembers-routing.module */ "./src/app/pages/addmembers/addmembers-routing.module.ts");
/* harmony import */ var _addmembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmembers.page */ "./src/app/pages/addmembers/addmembers.page.ts");







let AddmembersPageModule = class AddmembersPageModule {
};
AddmembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddmembersPageRoutingModule"]
        ],
        declarations: [_addmembers_page__WEBPACK_IMPORTED_MODULE_6__["AddmembersPage"]]
    })
], AddmembersPageModule);



/***/ }),

/***/ "./src/app/pages/addmembers/addmembers.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/addmembers/addmembers.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.thumnails .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border-radius: 4px;\n  width: 50px;\n  margin: 0 15px 0 0;\n  line-height: 60px;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nion-content ion-toolbar {\n  --background: translucent;\n}\n.usernameView {\n  text-align: center;\n  font-size: small;\n  font-weight: bolder;\n}\ndiv.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.profileimage img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\ndiv.headers {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\ndiv.headers img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n.backgrondColor {\n  padding-top: 10px;\n  background: #dbdada;\n  height: 80vh;\n}\n.img-wrapper {\n  min-height: 100px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkbWVtYmVycy9hZGRtZW1iZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUdaO0FBQ0E7RUFDSSxhQUFBO0FBRUo7QUFBQTtFQUNJLHlCQUFBO0FBR0o7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlKO0FBRkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBS0o7QUFKSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFNUjtBQUZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTVI7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBS0o7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkbWVtYmVycy9hZGRtZW1iZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aHVtbmFpbHMge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgLmxpc3QtdGh1bWJuYWlsIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAuaW1nLXRodW1iIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxufVxyXG4udXNlcm5hbWVWaWV3IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbmRpdi5wcm9maWxlaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuaGVhZGVycyB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvbmRDb2xvciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkYmRhZGE7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5pbWctd3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/addmembers/addmembers.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/addmembers/addmembers.page.ts ***!
  \*****************************************************/
/*! exports provided: AddmembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPage", function() { return AddmembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/








let AddmembersPage = class AddmembersPage {
    constructor(actRoute, dataService, loading, angularDb, navCtrl) {
        this.actRoute = actRoute;
        this.dataService = dataService;
        this.loading = loading;
        this.angularDb = angularDb;
        this.navCtrl = navCtrl;
        this.memberslist = [];
        this.membersUpdate = [];
        this.ID = this.actRoute.snapshot.paramMap.get('Id');
        // console.log("broadcastId", this.ID);
    }
    ngOnInit() {
        this.members;
        this.toAdd = [];
        //get the member length
        this.dataService.members(this.ID).valueChanges().subscribe((length) => {
            this.members = length.length;
        });
        // list image base image type
        this.dataService.groups(this.ID).valueChanges().subscribe((broadcast) => {
            this.broadcast = broadcast;
            if (broadcast.members) {
                broadcast.members.forEach((memberId) => {
                    this.dataService.getUser(memberId).valueChanges().subscribe((member) => {
                        // console.log('members', member)
                        this.addOrUpdateMember(member);
                    });
                });
            }
        });
        //Get User's to add
        this.dataService.getUsers().valueChanges().subscribe((accounts) => {
            this.accounts = accounts;
            // this.addOrUpdateAccount(accounts)
        });
        //let get the user details
        this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid).valueChanges().subscribe((user) => {
            this.user = user;
            this.userId = user.userId;
        });
    }
    // Add or update member information for real-time sync.
    addOrUpdateMember(member) {
        if (!this.memberslist) {
            this.memberslist = [member];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.memberslist.length; i++) {
                if (this.memberslist[i].userId == member.userId) {
                    index = i;
                }
            }
            if (index > -1) {
                this.memberslist[index] = member;
            }
            else {
                this.memberslist.push(member);
            }
        }
    }
    // Add or update member information for real-time sync.
    addOrUpdateAccount(member) {
        if (!this.accounts) {
            this.accounts = [member];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.accounts.length; i++) {
                if (this.accounts[i].userId == member.userId) {
                    index = i;
                }
            }
            if (index > -1) {
                this.accounts[index] = member;
            }
            else {
                this.accounts.push(member);
            }
        }
    }
    // Check if user is a member of the group or not.
    isMember(account) {
        if (this.memberslist) {
            for (var i = 0; i < this.memberslist.length; i++) {
                if (this.memberslist[i].userId == account.userId) {
                    return true;
                }
            }
        }
        return false;
    }
    //Add friend to member of groups
    addToGroup(account) {
        this.memberslist.push(account);
        this.membersUpdate.push(account);
    }
    // Remove friend from members of group.
    removeFromGroup(account) {
        var index = -1;
        for (var i = 0; i < this.memberslist.length; i++) {
            if (this.memberslist[i].userId == account.userId) {
                index = i;
            }
        }
        if (index > -1) {
            this.memberslist.splice(index, 1);
        }
        // Remove friend from membersUpdate of group.
        //second step;
        var index = -1;
        for (var i = 0; i < this.membersUpdate.length; i++) {
            if (this.membersUpdate[i].userId == account.userId) {
                index = i;
            }
        }
        if (index > -1) {
            this.membersUpdate.splice(index, 1);
        }
    }
    // update the member added to the platform
    update() {
        //loading show
        this.loading.show();
        this.membersUpdate.forEach((user) => {
            //push the member to the platform
            this.broadcast.members.push(user.userId);
            // system message notify to the user
            this.broadcast.messages.push({
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                type: 'system',
                message: this.user.nikeName + 'has added ' + this.getNames(),
                icon: 'contacts'
            });
        });
        // Update group data on the database.
        this.dataService.groups(this.ID).update({
            members: this.broadcast.members,
            messages: this.broadcast.messages
        }).then(() => {
            //loading hide 
            this.loading.hide();
            // Back.
            this.navCtrl.pop();
        });
    }
    // Get names of the members to be added to the group.
    getNames() {
        var names = '';
        this.membersUpdate.forEach((userData) => {
            names += userData.nikeName + ', ';
        });
        return names.substring(0, names.length - 2);
    }
};
AddmembersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
AddmembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-addmembers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmembers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addmembers/addmembers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmembers.page.scss */ "./src/app/pages/addmembers/addmembers.page.scss")).default]
    })
], AddmembersPage);



/***/ })

}]);
//# sourceMappingURL=pages-addmembers-addmembers-module-es2015.js.map