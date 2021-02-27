(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" no-border>\n  <ion-toolbar>\n    <ion-title>WhatsApp</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button cache-view=\"false\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button> -->\n      <ion-button cache-view=\"false\" (click)=\"showPopover($event)\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <preferences slot=\"end\"></preferences> -->\n</ion-header>\n<super-tabs activeTabIndex=\"1\" #superTabs (tabChange)=\"onTabChange($event)\">\n  <super-tabs-toolbar slot=\"top\">\n    <super-tab-button class=\"marging\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label>CHATS</ion-label>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label>STATUS</ion-label>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-label>CALLS</ion-label>\n    </super-tab-button>\n  </super-tabs-toolbar>\n\n  <super-tabs-container>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"camera\"></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"chat\"></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"status\"></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"calls\"></ion-nav>\n      </ion-content>\n    </super-tab>\n  </super-tabs-container>\n</super-tabs>");

/***/ }),

/***/ "./src/app/directives/header-decleration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/header-decleration.module.ts ***!
  \*********************************************************/
/*! exports provided: HeaderDeclerationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDeclerationModule", function() { return HeaderDeclerationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_scroll_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-scroll.directive */ "./src/app/directives/header-scroll.directive.ts");




let HeaderDeclerationModule = class HeaderDeclerationModule {
};
HeaderDeclerationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_scroll_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderScrollDirective"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _header_scroll_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderScrollDirective"]
        ]
    })
], HeaderDeclerationModule);



/***/ }),

/***/ "./src/app/directives/header-scroll.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/header-scroll.directive.ts ***!
  \*******************************************************/
/*! exports provided: HeaderScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderScrollDirective", function() { return HeaderScrollDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/



let HeaderScrollDirective = class HeaderScrollDirective {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastValue = 0;
    }
    ngOnChanges(changes) {
        if (this.scrollContent && this.config) {
            this.scrollContent.scrollEvents = true;
            let scrollStartFunc = (ev) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const el = yield this.scrollContent.getScrollElement();
                this.contentHeight = el.offsetHeight;
                this.scrollHeight = el.scrollHeight;
                if (this.config.maxValue === undefined) {
                    this.config.maxValue = this.element.nativeElement.offsetHeight;
                }
                this.lastScrollPosition = el.scrollTop;
            });
            if (this.scrollContent && this.scrollContent instanceof _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]) {
                this.scrollContent.ionScrollStart.subscribe(scrollStartFunc);
                this.scrollContent.ionScroll.subscribe((ev) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.adjustElementOnScroll(ev); }));
                this.scrollContent.ionScrollEnd.subscribe((ev) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.adjustElementOnScroll(ev); }));
            }
            else if (this.scrollContent instanceof HTMLElement) {
                this.scrollContent.addEventListener('ionScrollStart', scrollStartFunc);
                this.scrollContent.addEventListener('ionScroll', (ev) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.adjustElementOnScroll(ev); }));
                this.scrollContent.addEventListener('ionScrollEnd', (ev) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.adjustElementOnScroll(ev); }));
            }
        }
    }
    adjustElementOnScroll(ev) {
        if (ev) {
            this.domCtrl.write(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const el = yield this.scrollContent.getScrollElement();
                let scrollTop = el.scrollTop > 0 ? el.scrollTop : 0;
                let scrolldiff = scrollTop - this.lastScrollPosition;
                this.lastScrollPosition = scrollTop;
                let newValue = this.lastValue + scrolldiff;
                newValue = Math.max(0, Math.min(newValue, this.config.maxValue));
                this.renderer.setStyle(this.element.nativeElement, this.config.cssProperty, `-${newValue}px`);
                this.lastValue = newValue;
            }));
        }
    }
};
HeaderScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
HeaderScrollDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['scrollHide',] }],
    scrollContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['scrollContent',] }]
};
HeaderScrollDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[scrollHide]'
    })
], HeaderScrollDirective);



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _directives_header_decleration_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../directives/header-decleration.module */ "./src/app/directives/header-decleration.module.ts");
/* harmony import */ var _camera_camera_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../camera/camera.module */ "./src/app/pages/camera/camera.module.ts");
/* harmony import */ var _status_status_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../status/status.module */ "./src/app/pages/status/status.module.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../chat/chat.module */ "./src/app/pages/chat/chat.module.ts");
/* harmony import */ var _call_call_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../call/call.module */ "./src/app/pages/call/call.module.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/__ivy_ngcc__/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");













let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsModule"],
            _directives_header_decleration_module__WEBPACK_IMPORTED_MODULE_1__["HeaderDeclerationModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_11__["HomePageRoutingModule"],
            _call_call_module__WEBPACK_IMPORTED_MODULE_5__["CallPageModule"],
            _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatPageModule"],
            _status_status_module__WEBPACK_IMPORTED_MODULE_3__["StatusPageModule"],
            _camera_camera_module__WEBPACK_IMPORTED_MODULE_2__["CameraPageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_12__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/status.service */ "./src/app/services/status.service.ts");
/* harmony import */ var _component_setting_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../component/setting/setting.component */ "./src/app/component/setting/setting.component.ts");
/* harmony import */ var _camera_camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../camera/camera.page */ "./src/app/pages/camera/camera.page.ts");
/* harmony import */ var _call_call_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../call/call.page */ "./src/app/pages/call/call.page.ts");
/* harmony import */ var _status_status_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../status/status.page */ "./src/app/pages/status/status.page.ts");
/* harmony import */ var _chat_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../chat/chat.page */ "./src/app/pages/chat/chat.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/








// import { SuperTabs } from '@ionic-super-tabs/angular';


let HomePage = class HomePage {
    constructor(popoverController, network, statusService, platform) {
        this.popoverController = popoverController;
        this.network = network;
        this.statusService = statusService;
        this.platform = platform;
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 60 };
        this.tabs = 'chat';
        this.camera = _camera_camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"];
        this.chat = _chat_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"];
        this.status = _status_status_page__WEBPACK_IMPORTED_MODULE_5__["StatusPage"];
        this.calls = _call_call_page__WEBPACK_IMPORTED_MODULE_4__["CallPage"];
        // calling the connetion to invoke 
        this.connection();
        this.platform.pause.subscribe(() => {
            this.statusService.offlineStatusLog();
        });
        this.platform.resume.subscribe(() => {
            this.statusService.onlineStatus();
        });
    }
    ngOnInit() {
    }
    // set the connection when the data offline   
    connection() {
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.statusService.offlineStatusLog();
        });
        disconnectSubscription.unsubscribe;
        let connectSubscription = this.network.onConnect().subscribe(() => {
            this.statusService.onlineStatus();
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                }
            }, 3000);
        });
        connectSubscription.unsubscribe();
    }
    showPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_setting_setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"],
                cssClass: 'my-custom-class',
                event: ev,
                componentProps: { tabs: this.tabs },
                translucent: true
            });
            return yield popover.present();
        });
    }
    // this handle the swipebale tab
    onTabChange(ev) {
        this.activeTabIndex = ev.detail.index;
        switch (this.activeTabIndex) {
            case 0:
                this.tabs = 'camera';
                break;
            case 1:
                this.tabs = 'chat';
                break;
            case 2:
                this.tabs = 'status';
                break;
            case 3:
                this.tabs = 'calls';
                break;
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _services_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
HomePage.propDecorators = {
    st: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ['superTabs', { static: false },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map