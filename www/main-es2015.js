(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./super-tab-button_2.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js",
		"common",
		0
	],
	"./super-tab-indicator.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-indicator.entry.js",
		1
	],
	"./super-tab_3.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab_3.entry.js",
		"common",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		3
	],
	"./ion-alert.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		4
	],
	"./ion-app_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		5
	],
	"./ion-avatar_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		6
	],
	"./ion-back-button.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		7
	],
	"./ion-backdrop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		8
	],
	"./ion-button_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		9
	],
	"./ion-card_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		10
	],
	"./ion-checkbox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		11
	],
	"./ion-chip.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		12
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		13
	],
	"./ion-datetime_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		14
	],
	"./ion-fab_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		15
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		16
	],
	"./ion-infinite-scroll_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		17
	],
	"./ion-input.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		18
	],
	"./ion-item-option_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		19
	],
	"./ion-item_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		20
	],
	"./ion-loading.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		21
	],
	"./ion-menu_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		22
	],
	"./ion-modal.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		23
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		24
	],
	"./ion-popover.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		25
	],
	"./ion-progress-bar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		26
	],
	"./ion-radio_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		27
	],
	"./ion-range.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		28
	],
	"./ion-refresher_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		29
	],
	"./ion-reorder_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		30
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		31
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		32
	],
	"./ion-searchbar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		33
	],
	"./ion-segment_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		34
	],
	"./ion-select_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		35
	],
	"./ion-slide_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		36
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		37
	],
	"./ion-split-pane.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		38
	],
	"./ion-tab-bar_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		39
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		40
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		41
	],
	"./ion-textarea.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		42
	],
	"./ion-toast.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		43
	],
	"./ion-toggle.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		44
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		45
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/broadcast/broadcast.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/broadcast/broadcast.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-list>\n    <ion-item lines=\"none\" (click)=\"broadcastInfo()\">\n      Broadcast list info\n    </ion-item>\n    <ion-item lines=\"none\">\n      Search\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"deleteBroadcast()\">\n      Delete broadcast\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/chatmore/chatmore.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/chatmore/chatmore.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-margin\">\n  <ion-list>\n    <ion-item lines=\"none\" (click)=\"contacts()\">\n      View contact\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"report()\">\n      Report\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"!isBlock\" (click)=\"block()\">\n      Block\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"isBlock\" (click)=\"unBlock()\">\n      UnBlock\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"deleteChat()\">\n      Clear chat\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/groupopt/groupopt.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/groupopt/groupopt.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-margin\">\n  <ion-list>\n    <ion-item lines=\"none\" (click)=\"groupInfo()\">\n      Group info\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"report()\">\n      Report\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"exit()\">\n      Exit group\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/setting/setting.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/setting/setting.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-margin\">\n  <ion-list>\n    <ion-item lines=\"none\" *ngIf=\"tabs === 'chat'\" (click)=\"newGroup()\">\n      New group\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"tabs === 'chat'\" (click)=\"newBroadCast()\">\n      New broadcast\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"tabs === 'chat'\">\n      WhatsApp Web\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"tabs === 'status'\" (click)=\"statusPrivacy()\">\n      Status privacy\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"tabs === 'calls'\" (click)=\"clearCallLog()\">\n      Clear call log\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"settings()\">\n      Settings\n    </ion-item>\n\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of call\">\n      <div class=\"profileimageViewed\">\n        <img src=\"{{item.img}}\" alt=\"\">\n      </div>\n      <ion-label style=\"font-weight: bold;\">\n        <span style=\"font-size:16px; padding-left: 10px;\" text-capitalize>\n          {{item.nikeName}}\n        </span>\n        <span style=\"float:right;font-size:12px;color:#ccc\">\n          <ion-icon *ngIf=\"item.icon == 'call'\" (click)=\"call(item)\" class=\"icons\" color=\"secondary\" name=\"{{item.icon}}\">\n          </ion-icon>\n          <ion-icon class=\"icons\" *ngIf=\"item.icon == 'videocam'\" (click)=\"videoCall(item)\" color=\"secondary\"\n            name=\"{{item.icon}}\"></ion-icon>\n\n        </span>\n        <p style=\"color:#ccc; padding-left: 10px;\">\n          <ion-icon *ngIf=\"item.call == 'misscall'\" color=\"danger\" slot=\"icon-only\" src=\"assets/icon/call-received.svg\">\n          </ion-icon>\n          <ion-icon *ngIf=\"item.call == 'call'\" color=\"secondary\" slot=\"icon-only\" src=\"assets/icon/call-made.svg\">\n          </ion-icon>\n          {{item.date | moment:'h:mm A'}}\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container>\n      <ion-fab-button (click)=\"callList()\">\n        <ion-icon name=\"call\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div style=\"padding-top: 50%;\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" (click)=\"cameraOption()\">\n          <div style=\"text-align: center; font-size: 50px;\">\n            <ion-icon color=\"primary\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"galleryOption()\">\n          <div style=\"text-align: center; font-size: 50px;\">\n            <ion-icon color=\"primary\" slot=\"icon-only\" name=\"images\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"conversations.length == 0\">\n    <div style=\"padding-top: 50%;\">\n      <div class=\"thumnail\">\n        <div class=\"list-thumbnail\">\n          <div class=\"img-thumb\" *ngFor=\"let user of userList\">\n            <ion-avatar>\n              <img [src]=\"user.img\" />\n            </ion-avatar>\n          </div>\n        </div>\n      </div>\n      <p style=\"text-align: center;\"> Chat with the current user from firebase build by <strong>Pagas</strong>\n      </p>\n    </div>\n\n    <div class=\"button\">\n      <p color=\"secondary\" style=\"font-size: larger; font-style: normal; font-weight: bolder;\">\n        Start a chat\n        <ion-icon slot=\"icon-only\" name=\"arrow-forward\"></ion-icon>\n      </p>\n    </div>\n  </div>\n  <div class=\"style\" *ngIf=\"isLoading\">\n    <ion-spinner color=\"secondary\" name=\"bubbles\"></ion-spinner>\n  </div>\n  <ion-list *ngFor=\"let item of Conversations\">\n\n    <div *ngIf=\"item.view == 'group'\">\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        (click)=\"groupChat(item.groupKey)\">\n        <ion-avatar>\n          <img src=\"{{item.groupImage || img}}\">\n        </ion-avatar>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{item.groupName}}\n          </span>\n          <span style=\"float:right;font-size:12px;opacity: 0.7;\">\n            {{item.date | moment:'h:mm A'}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'text'\">\n              {{item.groupMessage}}\n            </span>\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type === 'image'\">\n              <ion-icon slot=\"start\" name=\"camera\"></ion-icon>Photo\n            </span>\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'audio'\">\n              <ion-icon slot=\"start\" name=\"mic\"></ion-icon>Voice\n            </span>\n          </span>\n          <span style=\"display: flex;margin-top: -20px; float: right;\">\n            <div *ngIf=\"item.unreadGroupCount >= 1\">\n              <p style=\"float:right;font-size:12px;opacity: 0.7;\">\n                <ion-badge color=\"primary\" mode=\"ios\">{{item.unreadGroupCount}}</ion-badge>\n              </p>\n            </div>\n          </span>\n        </ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"item.view == 'chat'\">\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        (click)=\"doChat(item.userId)\">\n        <ion-avatar>\n          <img src=\"{{item.img}}\">\n        </ion-avatar>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{item.nikeName}}\n          </span>\n          <span style=\"float:right;font-size:12px;opacity: 0.7;\">\n            {{item.date | moment:'h:mm A'}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <div *ngIf=\"item.me == 'me'\">\n              <div *ngIf=\"item.read == 'read'\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" id=\"msg-dblcheck\" x=\"2047\" y=\"2061\">\n                  <path\n                    d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"\n                    fill=\"#6a64ff\" />\n                </svg>\n              </div>\n              <div *ngIf=\"item.read == 'unread'\">\n                <ion-icon slot=\"icon-only\" class=\"iconsRead\" name=\"checkmark-done-outline\"></ion-icon>\n              </div>\n            </div>\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'text'\">\n              {{item.message}}\n            </span>\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'image'\">\n              <ion-icon slot=\"start\" name=\"camera\"></ion-icon>Photo\n            </span>\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'audio'\">\n              <ion-icon slot=\"start\" name=\"mic\"></ion-icon>Voice\n            </span>\n          </span>\n          <span style=\"display: flex;margin-top: -20px; float: right;\" *ngIf=\"item.me != 'me' \">\n            <div *ngIf=\"item.read == 'unread'\">\n              <p style=\"float:right;font-size:12px;opacity: 0.7;\">\n                <ion-badge color=\"primary\" mode=\"ios\">{{item.unreadMessagesCount}}</ion-badge>\n              </p>\n            </div>\n          </span>\n        </ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"item.view == 'broadcast'\">\n      <ion-item style=\"background-color:transparent !important; padding-left:0 !important; margin-left:0 !important;\"\n        (click)=\"broadcast(item.groupKey)\">\n        <ion-avatar>\n          <img src=\"{{item.groupImage || img}}\">\n        </ion-avatar>\n        <ion-label style=\"font-weight: 600; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{item.groupName}}\n          </span>\n          <span style=\"float:right;font-size:12px;opacity: 0.7;\">\n            {{item.date | moment:'h:mm A'}}\n          </span>\n          <span style=\"display: flex;margin-top: 6px;\">\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'text'\">\n              {{item.groupMessage}}\n            </span>\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'image'\">\n              <ion-icon slot=\"start\" name=\"camera\"></ion-icon>Photo\n            </span>\n            <span style=\"opacity: 0.6;font-size: 13px;margin-left: 2px;\" *ngIf=\"item.type == 'audio'\">\n              <ion-icon slot=\"start\" name=\"mic\"></ion-icon>Voice\n            </span>\n          </span>\n          <span style=\"display: flex;margin-top: -20px; float: right;\">\n            <div *ngIf=\"item.unreadGroupCount >= 1\">\n              <p style=\"float:right;font-size:12px;opacity: 0.7;\">\n                <ion-badge color=\"primary\" mode=\"ios\">{{item.unreadGroupCount}}</ion-badge>\n              </p>\n            </div>\n          </span>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container>\n      <ion-fab-button (click)=\"userpagas()\">\n        <ion-icon name=\"chatbox-ellipses\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/status/status.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/status/status.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-item lines=\"none\">\n    <div class=\"profileimage\">\n      <img src=\"{{image}}\" alt=\"\">\n      <ion-icon st slot=\"start\" name=\"add-circle\" color=\"primary\"\n        style=\"margin-bottom:0 !important;margin-left:21px !important;margin-top:13px !important; position: absolute; font-size: x-large;\">\n      </ion-icon>\n    </div>\n    <ion-label style=\"font-weight: bold; padding-left: 10px;\">\n      <span style=\"font-size:16px\">\n        My status\n      </span>\n      <p style=\"color:#ccc;\">\n        Tap to add status update\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-list *ngIf=\"storypost.length >= 1\">\n    <p class=\"statusTitleLabel\">Recent updates</p>\n    <div *ngFor=\"let story of storypost\"\n      style=\"background-color:transparent !important;padding-left:0 !important;margin-left:0 !important;\">\n      <ion-item *ngIf=\"!story.isView\" (click)=\"viewStory(story)\" lines=\"none\">\n        <ion-avatar>\n          <img class=\"profile\" src=\"{{story.image}}\" alt=\"\">\n        </ion-avatar>\n        <ion-label style=\"font-weight: bold; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{story.name}}\n          </span>\n          <p style=\"color:#ccc;\">\n            {{story.date | moment:'h:mm A'}}\n          </p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-list>\n\n    <p class=\"statusTitleLabel\" *ngIf=\"storypost.postBy != userId\">Viewed updates</p>\n    <div *ngFor=\"let story of storypost\"\n      style=\"background-color:transparent !important;padding-left:0 !important;margin-left:0 !important;\">\n      <ion-item *ngIf=\"story.isView\" (click)=\"viewStoryView(story)\" lines=\"none\">\n        <ion-avatar>\n          <img src=\"{{story.image}}\" alt=\"\">\n        </ion-avatar>\n\n        <ion-label style=\"font-weight: bold; padding-left: 10px;\">\n          <span style=\"font-size:16px; text-transform: capitalize;\">\n            {{story.name}}\n          </span>\n          <p style=\"color:#ccc;\">\n            {{story.date |  moment:'h:mm A'}}\n          </p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container>\n      <ion-fab-button (click)=\"postStory()\">\n        <ion-icon name=\"camera\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n  </ion-fab>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginPageModule)
    },
    {
        path: 'verify',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-verify-verify-module */ "pages-verify-verify-module").then(__webpack_require__.bind(null, /*! ./pages/verify/verify.module */ "./src/app/pages/verify/verify.module.ts")).then(m => m.VerifyPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-welcome-welcome-module */ "pages-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ./pages/welcome/welcome.module */ "./src/app/pages/welcome/welcome.module.ts")).then(m => m.WelcomePageModule)
    },
    {
        path: 'initia',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-initia-initia-module */ "pages-initia-initia-module").then(__webpack_require__.bind(null, /*! ./pages/initia/initia.module */ "./src/app/pages/initia/initia.module.ts")).then(m => m.InitiaPageModule)
    },
    {
        path: 'home',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsPageModule)
    },
    {
        path: 'do-chat',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-do-chat-do-chat-module */ "pages-do-chat-do-chat-module").then(__webpack_require__.bind(null, /*! ./pages/do-chat/do-chat.module */ "./src/app/pages/do-chat/do-chat.module.ts")).then(m => m.DoChatPageModule)
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-account-account-module */ "pages-account-account-module").then(__webpack_require__.bind(null, /*! ./pages/account/account.module */ "./src/app/pages/account/account.module.ts")).then(m => m.AccountPageModule)
    },
    {
        path: 'chatsetting',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-chatsetting-chatsetting-module */ "pages-chatsetting-chatsetting-module").then(__webpack_require__.bind(null, /*! ./pages/chatsetting/chatsetting.module */ "./src/app/pages/chatsetting/chatsetting.module.ts")).then(m => m.ChatsettingPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ./pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    },
    {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-help-help-module */ "pages-help-help-module").then(__webpack_require__.bind(null, /*! ./pages/help/help.module */ "./src/app/pages/help/help.module.ts")).then(m => m.HelpPageModule)
    },
    {
        path: 'changenumber',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-changenumber-changenumber-module */ "pages-changenumber-changenumber-module").then(__webpack_require__.bind(null, /*! ./pages/changenumber/changenumber.module */ "./src/app/pages/changenumber/changenumber.module.ts")).then(m => m.ChangenumberPageModule)
    },
    {
        path: 'security',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-security-security-module */ "pages-security-security-module").then(__webpack_require__.bind(null, /*! ./pages/security/security.module */ "./src/app/pages/security/security.module.ts")).then(m => m.SecurityPageModule)
    },
    {
        path: 'update',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-update-update-module */ "pages-update-update-module").then(__webpack_require__.bind(null, /*! ./pages/update/update.module */ "./src/app/pages/update/update.module.ts")).then(m => m.UpdatePageModule)
    },
    {
        path: 'userpage',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-userpage-userpage-module */ "pages-userpage-userpage-module").then(__webpack_require__.bind(null, /*! ./pages/userpage/userpage.module */ "./src/app/pages/userpage/userpage.module.ts")).then(m => m.UserpagePageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-contact-contact-module */ "pages-contact-contact-module").then(__webpack_require__.bind(null, /*! ./pages/contact/contact.module */ "./src/app/pages/contact/contact.module.ts")).then(m => m.ContactPageModule)
    },
    {
        path: 'newgroup',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-newgroup-newgroup-module */ "pages-newgroup-newgroup-module").then(__webpack_require__.bind(null, /*! ./pages/newgroup/newgroup.module */ "./src/app/pages/newgroup/newgroup.module.ts")).then(m => m.NewgroupPageModule)
    },
    {
        path: 'show-status',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-show-status-show-status-module */ "pages-show-status-show-status-module").then(__webpack_require__.bind(null, /*! ./pages/show-status/show-status.module */ "./src/app/pages/show-status/show-status.module.ts")).then(m => m.ShowStatusPageModule)
    },
    {
        path: 'group-chat',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-group-chat-group-chat-module */ "pages-group-chat-group-chat-module").then(__webpack_require__.bind(null, /*! ./pages/group-chat/group-chat.module */ "./src/app/pages/group-chat/group-chat.module.ts")).then(m => m.GroupChatPageModule)
    },
    {
        path: 'group-info',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-group-info-group-info-module */ "pages-group-info-group-info-module").then(__webpack_require__.bind(null, /*! ./pages/group-info/group-info.module */ "./src/app/pages/group-info/group-info.module.ts")).then(m => m.GroupInfoPageModule)
    },
    {
        path: 'group-info-edite',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-group-info-edite-group-info-edite-module */ "pages-group-info-edite-group-info-edite-module").then(__webpack_require__.bind(null, /*! ./pages/group-info-edite/group-info-edite.module */ "./src/app/pages/group-info-edite/group-info-edite.module.ts")).then(m => m.GroupInfoEditePageModule)
    },
    {
        path: 'calling',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-calling-calling-module */ "pages-calling-calling-module").then(__webpack_require__.bind(null, /*! ./pages/calling/calling.module */ "./src/app/pages/calling/calling.module.ts")).then(m => m.CallingPageModule)
    },
    {
        path: 'broadcast',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-broadcast-broadcast-module */ "pages-broadcast-broadcast-module").then(__webpack_require__.bind(null, /*! ./pages/broadcast/broadcast.module */ "./src/app/pages/broadcast/broadcast.module.ts")).then(m => m.BroadcastPageModule)
    },
    {
        path: 'newbroadcast',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-newbroadcast-newbroadcast-module */ "pages-newbroadcast-newbroadcast-module").then(__webpack_require__.bind(null, /*! ./pages/newbroadcast/newbroadcast.module */ "./src/app/pages/newbroadcast/newbroadcast.module.ts")).then(m => m.NewbroadcastPageModule)
    },
    {
        path: 'broadcast-info',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-broadcast-info-broadcast-info-module */ "pages-broadcast-info-broadcast-info-module").then(__webpack_require__.bind(null, /*! ./pages/broadcast-info/broadcast-info.module */ "./src/app/pages/broadcast-info/broadcast-info.module.ts")).then(m => m.BroadcastInfoPageModule)
    },
    {
        path: 'addmembers',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-addmembers-addmembers-module */ "pages-addmembers-addmembers-module").then(__webpack_require__.bind(null, /*! ./pages/addmembers/addmembers.module */ "./src/app/pages/addmembers/addmembers.module.ts")).then(m => m.AddmembersPageModule)
    },
    {
        path: 'requestinfo',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-requestinfo-requestinfo-module */ "pages-requestinfo-requestinfo-module").then(__webpack_require__.bind(null, /*! ./pages/requestinfo/requestinfo.module */ "./src/app/pages/requestinfo/requestinfo.module.ts")).then(m => m.RequestinfoPageModule)
    },
    {
        path: 'accountinfo',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-accountinfo-accountinfo-module */ "pages-accountinfo-accountinfo-module").then(__webpack_require__.bind(null, /*! ./pages/accountinfo/accountinfo.module */ "./src/app/pages/accountinfo/accountinfo.module.ts")).then(m => m.AccountinfoPageModule)
    },
    {
        path: 'calllist',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-calllist-calllist-module */ "pages-calllist-calllist-module").then(__webpack_require__.bind(null, /*! ./pages/calllist/calllist.module */ "./src/app/pages/calllist/calllist.module.ts")).then(m => m.CalllistPageModule)
    },
    {
        path: 'delete-account',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-delete-account-delete-account-module */ "pages-delete-account-delete-account-module").then(__webpack_require__.bind(null, /*! ./pages/delete-account/delete-account.module */ "./src/app/pages/delete-account/delete-account.module.ts")).then(m => m.DeleteAccountPageModule)
    },
    {
        path: 'enlarge-image',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-enlarge-image-enlarge-image-module */ "pages-enlarge-image-enlarge-image-module").then(__webpack_require__.bind(null, /*! ./pages/enlarge-image/enlarge-image.module */ "./src/app/pages/enlarge-image/enlarge-image.module.ts")).then(m => m.EnlargeImagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/status.service */ "./src/app/services/status.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/






let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, statusService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.statusService = statusService;
        this.initializeApp();
        this.darkMode = window.localStorage.getItem('dark');
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.checkDarkTheme();
            this.splashScreen.hide();
            this.statusService.offlineStatus();
        });
    }
    checkDarkTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
            this.statusBar.styleBlackTranslucent();
        }
        else if (this.darkMode) {
            document.body.classList.toggle('dark');
            this.statusBar.styleBlackTranslucent();
        }
        else {
            this.statusBar.styleLightContent();
            this.statusBar.backgroundColorByHexString('#054D44');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _services_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_country_code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/country-code.service */ "./src/app/services/country-code.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/__ivy_ngcc__/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var ionic_header_parallax__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ionic-header-parallax */ "./node_modules/ionic-header-parallax/__ivy_ngcc__/fesm2015/ionic-header-parallax.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _component_setting_setting_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/setting/setting.component */ "./src/app/component/setting/setting.component.ts");
/* harmony import */ var _component_chatmore_chatmore_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/chatmore/chatmore.component */ "./src/app/component/chatmore/chatmore.component.ts");
/* harmony import */ var _component_groupopt_groupopt_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/groupopt/groupopt.component */ "./src/app/component/groupopt/groupopt.component.ts");
/* harmony import */ var _component_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/broadcast/broadcast.component */ "./src/app/component/broadcast/broadcast.component.ts");
/* harmony import */ var _pages_call_call_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/call/call.module */ "./src/app/pages/call/call.module.ts");
/* harmony import */ var _pages_chat_chat_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/chat/chat.module */ "./src/app/pages/chat/chat.module.ts");
/* harmony import */ var _pages_status_status_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/status/status.module */ "./src/app/pages/status/status.module.ts");
/* harmony import */ var _pages_camera_camera_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/camera/camera.module */ "./src/app/pages/camera/camera.module.ts");
/* harmony import */ var _services_phone_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/phone.service */ "./src/app/services/phone.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_webrtc_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/webrtc.service */ "./src/app/services/webrtc.service.ts");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/audio.service */ "./src/app/services/audio.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/status.service */ "./src/app/services/status.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");













































// for the camera site user to be provider
firebase__WEBPACK_IMPORTED_MODULE_23__["initializeApp"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_43__["environment"].firebaseConfig);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _component_setting_setting_component__WEBPACK_IMPORTED_MODULE_24__["SettingComponent"], _component_chatmore_chatmore_component__WEBPACK_IMPORTED_MODULE_25__["ChatmoreComponent"], _component_groupopt_groupopt_component__WEBPACK_IMPORTED_MODULE_26__["GroupoptComponent"], _component_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_27__["BroadcastComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_43__["environment"].firebaseConfig),
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_17__["SuperTabsModule"].forRoot(),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_20__["AngularFireDatabaseModule"],
            ionic_header_parallax__WEBPACK_IMPORTED_MODULE_22__["IonicHeaderParallaxModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _pages_call_call_module__WEBPACK_IMPORTED_MODULE_28__["CallPageModule"],
            _pages_chat_chat_module__WEBPACK_IMPORTED_MODULE_29__["ChatPageModule"],
            _pages_status_status_module__WEBPACK_IMPORTED_MODULE_30__["StatusPageModule"],
            _pages_camera_camera_module__WEBPACK_IMPORTED_MODULE_31__["CameraPageModule"],
        ],
        providers: [
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuth"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeAudio"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_16__["StreamingMedia"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_14__["CallNumber"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_17__["SuperTabs"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"],
            _services_phone_service__WEBPACK_IMPORTED_MODULE_32__["PhoneService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_33__["AlertService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_34__["LoginService"],
            _services_webrtc_service__WEBPACK_IMPORTED_MODULE_35__["WebrtcService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_37__["UserService"],
            _services_country_code_service__WEBPACK_IMPORTED_MODULE_1__["CountryCodeService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_38__["ChatService"],
            _services_audio_service__WEBPACK_IMPORTED_MODULE_36__["AudioService"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_39__["EventService"],
            _services_status_service__WEBPACK_IMPORTED_MODULE_40__["StatusService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_41__["LoadingService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_42__["DataService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/broadcast/broadcast.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/broadcast/broadcast.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9icm9hZGNhc3QvYnJvYWRjYXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/broadcast/broadcast.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/broadcast/broadcast.component.ts ***!
  \************************************************************/
/*! exports provided: BroadcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastComponent", function() { return BroadcastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/







let BroadcastComponent = class BroadcastComponent {
    constructor(router, navParams, popoverController, afDB, navCtrl, loading) {
        this.router = router;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.afDB = afDB;
        this.navCtrl = navCtrl;
        this.loading = loading;
        // get the broadcast ID
        this.broadcastId = this.navParams.get("broadcastId");
        // console.log(this.broadcastId)
    }
    ngOnInit() { }
    // this handel the navigaion to the broadcast info page
    broadcastInfo() {
        // before it proceed will be close the popOver controller
        this.eventFromPopover();
        // the router page
        this.router.navigate(['/broadcast-info', { 'broadcastId': this.broadcastId }]);
    }
    // close popOver function
    eventFromPopover() {
        this.popoverController.dismiss();
    }
    // this will delete the conversation content;
    deleteBroadcast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // before it proceed will be close the popOver controller
            this.eventFromPopover();
            // before it proceed loading service will show 
            this.loading.show();
            // this. handle the database from firebase  query methode
            yield this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).orderByChild('key').equalTo(this.broadcastId).once('value', snap => {
                // convert to object valuse
                var res = snap.val();
                if (res != null) {
                    let store = Object.keys(res);
                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).child(store[0]).remove();
                }
            }).then(() => {
                this.afDB.database.ref('groups').child(this.broadcastId).remove();
                //hide the loading service
                this.loading.hide();
                // pop back
                this.navCtrl.pop();
            });
        });
    }
};
BroadcastComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
BroadcastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-broadcast',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./broadcast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/broadcast/broadcast.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./broadcast.component.scss */ "./src/app/component/broadcast/broadcast.component.scss")).default]
    })
], BroadcastComponent);



/***/ }),

/***/ "./src/app/component/chatmore/chatmore.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/chatmore/chatmore.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jaGF0bW9yZS9jaGF0bW9yZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/chatmore/chatmore.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/chatmore/chatmore.component.ts ***!
  \**********************************************************/
/*! exports provided: ChatmoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatmoreComponent", function() { return ChatmoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/










let ChatmoreComponent = class ChatmoreComponent {
    constructor(navParams, popoverController, router, toastController, dataService, loading, userService, alertCtrl, afDB) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.router = router;
        this.toastController = toastController;
        this.dataService = dataService;
        this.loading = loading;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        // get userId from pass parameter
        this.userId = this.navParams.get("userId");
        //invoke the current firebase ID for UserID
        this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid;
        // console.log(this.userId)
    }
    ngOnInit() {
        // fetch the database from firebase 
        this.dataService.getCurrentUser(this.userId).valueChanges().subscribe((user) => {
            this.nikeName = user.nikeName;
        });
        // get the data,
        // to handle the block methode
        this.dataService.getUser(this.userId).valueChanges().subscribe((user) => {
            this.dataService.userBock(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).valueChanges().subscribe((blocks) => {
                this.isBlock = lodash__WEBPACK_IMPORTED_MODULE_8__["findKey"](blocks, block => {
                    return block = firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid;
                });
                if (this.isBlock) {
                    this.isBlock = true;
                }
                else {
                    this.isBlock = false;
                }
            });
        });
    }
    // will be close the popOver controller
    eventFromPopover() {
        this.popoverController.dismiss();
    }
    unBlock() {
        // show loading service
        this.loading.show();
        // get block methode from firebase fetch
        this.userService.unblock(this.currentUserId, this.userId).then(() => {
            //hide the loading service
            this.loading.hide();
            // will be close the popOver controller
            this.eventFromPopover();
        });
    }
    // to the block the user funtion
    block() {
        // show loading service
        this.loading.show();
        this.userService.block(this.currentUserId, this.userId).then(() => {
            //hide the loading service
            this.loading.hide();
            // will be close the popOver controller
            this.eventFromPopover();
        });
    }
    // report the user contact to owner 
    // this methode is an alertController
    report() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Report this contact to WhatsApp from Pagas',
                message: "Block contact and delete this chat's messages",
                buttons: [
                    {
                        text: "CANCEL",
                        handler: () => {
                        }
                    },
                    {
                        text: "REPORT",
                        handler: () => {
                            this.loading.show();
                            this.deleteChat().then(() => {
                                this.presentToast();
                                this.loading.hide();
                                if (!this.isBlock) {
                                    this.block();
                                }
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    // this funttion handle the delete chat from firebase 
    deleteChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.show();
            this.eventFromPopover();
            yield this.afDB.database.ref('messages').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).child(this.userId).remove().then(() => {
                this.deleteConversation();
                this.loading.hide();
            });
        });
    }
    // this will delete the conversation content;
    deleteConversation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).orderByChild('userId').equalTo(this.userId).once('value', snap => {
                var res = snap.val();
                if (res != null) {
                    let store = Object.keys(res);
                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).child(store[0]).remove();
                }
            });
        });
    }
    // if something goes wrong, will toast handle
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Report sent and' + this.nikeName + 'has been blocked',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    }
    // this navigate to the contact page.....
    contacts() {
        this.router.navigate(['/contact', { 'userId': this.userId }]);
        this.eventFromPopover();
    }
};
ChatmoreComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"] }
];
ChatmoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chatmore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chatmore.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/chatmore/chatmore.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chatmore.component.scss */ "./src/app/component/chatmore/chatmore.component.scss")).default]
    })
], ChatmoreComponent);



/***/ }),

/***/ "./src/app/component/groupopt/groupopt.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/groupopt/groupopt.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ncm91cG9wdC9ncm91cG9wdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/groupopt/groupopt.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/groupopt/groupopt.component.ts ***!
  \**********************************************************/
/*! exports provided: GroupoptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupoptComponent", function() { return GroupoptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/










let GroupoptComponent = class GroupoptComponent {
    constructor(navParams, popoverController, router, toastController, dataService, loading, 
    // public userService: UserService,
    alertCtrl, alertController, afDB, alertService) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.router = router;
        this.toastController = toastController;
        this.dataService = dataService;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.alertController = alertController;
        this.afDB = afDB;
        this.alertService = alertService;
        this.group = {};
        this.groupId = this.navParams.get("groupId");
        // this.currentUserId = firebase.auth().currentUser.uid;
    }
    ngOnInit() {
        // fetch the database from firebase
        this.dataService.groups(this.groupId).valueChanges().subscribe((group) => {
            this.group = group;
        });
        //let get the user details
        this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid).valueChanges().subscribe((user) => {
            this.user = user;
        });
    }
    groupInfo() {
        // router pages
        this.router.navigate(['/group-info', { 'groupId': this.groupId }]);
        // close popOver Methode 
        this.eventFromPopover();
    }
    // close popOver Function 
    eventFromPopover() {
        this.popoverController.dismiss();
    }
    // report case to user will be able erase the data from firebase
    report() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popoverController.dismiss();
            const alert = yield this.alertCtrl.create({
                header: 'Report this group to WhatsApp?',
                message: "Exit group and delete this group's messages",
                buttons: [
                    {
                        text: "CANCEL",
                        handler: () => {
                        }
                    },
                    {
                        text: "REPORT",
                        handler: () => {
                            // loading show
                            this.loading.show();
                            // Remove member from group.
                            this.group.members.splice(this.group.members.indexOf(this.user.userId), 1);
                            this.dataService.groups(this.groupId).update({
                                members: this.group.members,
                            }).then(() => {
                                // Add system message.
                                firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                    date: new Date().toString(),
                                    sender: firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
                                    type: 'system',
                                    message: this.user.nikeName + ' has send report on this group, also left.',
                                    icon: 'megaphone'
                                }).then((sucess) => {
                                    let key = sucess.key;
                                    for (let i = 0; i < this.group.members.length; i++) {
                                        firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                            key: key
                                        }).then(() => {
                                            this.deleteConversation();
                                        });
                                    }
                                    // Remove group from user's group list.
                                    this.dataService.accountsGroups(this.user.userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((groups) => {
                                        groups.splice(groups.indexOf(this.groupId), 1);
                                        this.router.navigateByUrl('/home');
                                    });
                                }).catch((error) => {
                                    // if something goes wrong catch handle this methode
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
    //handel the leave the gr\oups
    exit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popoverController.dismiss();
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
                                firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('groups').child(this.groupId).child('messages').push({
                                    date: new Date().toString(),
                                    sender: firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
                                    type: 'system',
                                    message: this.user.nikeName + ' has left this group.',
                                    icon: 'exit-outline'
                                }).then((sucess) => {
                                    let key = sucess.key;
                                    for (let i = 0; i < this.group.members.length; i++) {
                                        firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                                            key: key
                                        }).then(() => {
                                            this.deleteConversation();
                                        });
                                    }
                                    // Remove group from user's group list.
                                    this.dataService.accountsGroups(this.user.userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((groups) => {
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
            yield this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid).orderByChild('key').equalTo(this.groupId).once('value', snap => {
                var res = snap.val();
                if (res != null) {
                    let store = Object.keys(res);
                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid).child(store[0]).remove();
                }
            });
        });
    }
};
GroupoptComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
];
GroupoptComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-groupopt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./groupopt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/groupopt/groupopt.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./groupopt.component.scss */ "./src/app/component/groupopt/groupopt.component.scss")).default]
    })
], GroupoptComponent);



/***/ }),

/***/ "./src/app/component/setting/setting.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/setting/setting.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/setting/setting.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/setting/setting.component.ts ***!
  \********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/






let SettingComponent = class SettingComponent {
    constructor(
    // private events: Events,
    navParams, popoverController, router, toast, alertController, loading) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.router = router;
        this.toast = toast;
        this.alertController = alertController;
        this.loading = loading;
    }
    ngAfterViewInit() {
        this.tabs = this.navParams.get("tabs");
        // console.log(this.tabs)
    }
    ngOnInit() {
        // Get the Data from the popover page
        // this.tabs = this.navParams.get("tabs")
        // console.log(this.tabs)
    }
    // close popOver funtion
    eventFromPopover() {
        this.popoverController.dismiss();
    }
    settings() {
        // close popOver methdoe
        this.eventFromPopover();
        // router page to setting 
        this.router.navigateByUrl('/settings');
    }
    newGroup() {
        // close popOver methdoe
        this.eventFromPopover();
        //router page to new Group page
        this.router.navigateByUrl('/newgroup');
    }
    newBroadCast() {
        // close popOver methdoe
        this.eventFromPopover();
        //router page to new Broadecast
        this.router.navigateByUrl('/newbroadcast');
    }
    //pop a notification
    statusPrivacy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // close popOver methdoe
            this.eventFromPopover();
            // this is toast notification to the user 
            const toast = yield this.toast.create({
                message: 'Oops, This feature is not availabe on this version.',
                duration: 3000,
                position: "top"
            });
            toast.present();
        });
    }
    // clear the call log page  from the database
    clearCallLog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.eventFromPopover();
            const alert = yield this.alertController.create({
                message: 'Do you want to clear your entire call log?',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            //loading show
                            this.loading.show();
                            // databse from the entire call log s
                            firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('accounts').child(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).child("call").remove().then(() => {
                                //loading hide
                                this.loading.hide();
                            });
                        }
                    },
                    {
                        text: 'CANCEL',
                        handler: () => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SettingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"] }
];
SettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/setting/setting.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting.component.scss */ "./src/app/component/setting/setting.component.scss")).default]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/






let AuthGuard = class AuthGuard {
    constructor(afAuth, dataService, router) {
        this.afAuth = afAuth;
        this.dataService = dataService;
        this.router = router;
    }
    // this methode handle when user already login will be able to navigate to home page
    // if not navigate to welcome pages
    canActivate(next, state) {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => !!user), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(logging => {
            if (!logging) {
                this.router.navigateByUrl('/welcome');
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/pages/call/call.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/call/call.module.ts ***!
  \*******************************************/
/*! exports provided: CallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallPageModule", function() { return CallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _call_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call.page */ "./src/app/pages/call/call.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");







let CallPageModule = class CallPageModule {
};
CallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
        ],
        declarations: [_call_page__WEBPACK_IMPORTED_MODULE_5__["CallPage"]],
        entryComponents: [_call_page__WEBPACK_IMPORTED_MODULE_5__["CallPage"]]
    })
], CallPageModule);



/***/ }),

/***/ "./src/app/pages/call/call.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/call/call.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab {\n  bottom: 20px !important;\n  right: 15px !important;\n}\n\ndiv.profileimageViewed {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\n\ndiv.profileimageViewed img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n\nion-icon.icons {\n  font-size: xx-large;\n}\n\n.top-video {\n  position: absolute;\n  top: 100px;\n  right: 100px;\n  max-width: 100px;\n  z-index: 2;\n}\n\n.main-video {\n  width: 100%;\n  max-height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFUjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsbC9jYWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWIge1xyXG4gICAgYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vICBmb3IgdGhlIHByZmlsZSBwYWdlIGhhbmRsZSBcclxuZGl2LnByb2ZpbGVpbWFnZVZpZXdlZCB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pY29uLmljb25ze1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLnRvcC12aWRlb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICByaWdodDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1haW4tdmlkZW97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDcwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/call/call.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/call/call.page.ts ***!
  \*****************************************/
/*! exports provided: CallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallPage", function() { return CallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_webrtc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/webrtc.service */ "./src/app/services/webrtc.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/









let CallPage = class CallPage {
    constructor(webRTC, elRef, dataService, router, callNumber, afDB, toast) {
        this.webRTC = webRTC;
        this.elRef = elRef;
        this.dataService = dataService;
        this.router = router;
        this.callNumber = callNumber;
        this.afDB = afDB;
        this.toast = toast;
        //invoke the current user ID pass to the variable userId
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
    }
    //Initialize when first enter the view
    ngOnInit() {
        // then load the data from the firebase 
        this.dataService.call(this.userId).valueChanges().subscribe((call) => {
            this.call = [];
            // let make list forEach of item from the list
            call.forEach((callData) => {
                // make the tempData to an Object to whole the data
                let tempData = {};
                // pass to the tempData
                tempData = callData;
                // also find user Info with his userId
                this.dataService.getUser(callData.userId).valueChanges().subscribe((user) => {
                    // pass all data to the tempData
                    tempData.nikeName = user.nikeName;
                    tempData.img = user.img;
                    tempData.userId = user.userId;
                    tempData.phoneNumber = user.phoneNumber;
                });
                this.call.unshift(tempData);
            });
            // }
        });
        // this.myEl = this.elRef.nativeElement.querySelector('#my-video');
        // this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
        // this.webRTC.init(this.userId, this.myEl, this.partnerEl);
    }
    // call() {
    //   this.webRTC.call(this.partnerId);
    //   this.swapVideo('my-video');
    // }
    // swapVideo(topVideo: string) {
    //   this.topVideoFrame = topVideo;
    // }
    // make the router to the calling list
    callList() {
        this.router.navigateByUrl('/calllist');
    }
    // router to the video call
    videoCall(item) {
        this.router.navigate(["/calling", { 'image': item.img, 'name': item.nikeName, 'userId': item.userId }]);
    }
    // make a dial call
    callPhoneNumber(item) {
        this.callNumber.callNumber(`${item.phoneNumber}`, true).then(() => {
            //pass the info to each make call
            this.afDB.list('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/call/').push({
                date: new Date().toString(),
                userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                type: 'calling',
                icon: 'call',
                call: 'call'
            }).then(() => {
                this.afDB.list('/accounts/' + this.userId + '/call/').push({
                    date: new Date().toString(),
                    userId: firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid,
                    type: 'calling',
                    icon: 'call',
                    call: 'misscall'
                });
            });
            //if something goes wrong, the toast notification will handel
        }).catch(err => this.something());
    }
    // toast notification
    something() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Something going wrong.',
                duration: 2000
            });
            toast.present();
        });
    }
};
CallPage.ctorParameters = () => [
    { type: _services_webrtc_service__WEBPACK_IMPORTED_MODULE_5__["WebrtcService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
CallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-call',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./call.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/call/call.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./call.page.scss */ "./src/app/pages/call/call.page.scss")).default]
    })
], CallPage);



/***/ }),

/***/ "./src/app/pages/camera/camera.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/camera/camera.module.ts ***!
  \***********************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera.page */ "./src/app/pages/camera/camera.page.ts");






let CameraPageModule = class CameraPageModule {
};
CameraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_5__["CameraPage"]],
        entryComponents: [_camera_page__WEBPACK_IMPORTED_MODULE_5__["CameraPage"]]
    })
], CameraPageModule);



/***/ }),

/***/ "./src/app/pages/camera/camera.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/camera/camera.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/camera/camera.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/camera/camera.page.ts ***!
  \*********************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/








let CameraPage = class CameraPage {
    constructor(camera, loading, afstorage, angularDb) {
        this.camera = camera;
        this.loading = loading;
        this.afstorage = afstorage;
        this.angularDb = angularDb;
        this.cameraStatus = {
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
    }
    // selete from the gallery part
    galleryOption() {
        this.uploadPhotoStatus(this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
            this.send(url);
        });
    }
    // selete from the camera part
    cameraOption() {
        this.uploadPhotoStatus(this.camera.PictureSourceType.CAMERA).then((url) => {
            this.send(url);
        });
    }
    // this handle the upload to the firebase 
    // it handle the selection from the image after will be upload to firebase storage 
    // also will be return the download url
    uploadPhotoStatus(sourceType) {
        return new Promise((resolve) => {
            this.cameraStatus.sourceType = sourceType;
            this.camera.getPicture(this.cameraStatus).then((imageData) => {
                let url = "data:image/jpeg;base64," + imageData;
                let imgBlob = this.imgURItoBlob(url);
                let metadata = {
                    'contentType': imgBlob.type
                };
                this.loading.showPro();
                const ref = this.afstorage.ref('/status/' + firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid + this.generateFilename());
                const task = ref.put(imgBlob, metadata);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    ref.getDownloadURL().subscribe((url) => {
                        resolve(url);
                        this.loading.hidePro();
                    });
                }))).subscribe();
            });
        });
    }
    // set the random name
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    //reduce the quality of the image
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
    // post the story 
    send(url) {
        var promise = new Promise((resolve) => {
            this.angularDb.database.ref('/story').push({
                date: new Date().toString(),
                postBy: firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid,
                image: url
            }).then((success) => {
                resolve(true);
                let timelineId = success.key;
                success.update({
                    key: timelineId
                });
                this.loading.hidePro();
            });
        });
        return promise;
    }
};
CameraPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
];
CameraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-camera',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./camera.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./camera.page.scss */ "./src/app/pages/camera/camera.page.scss")).default]
    })
], CameraPage);



/***/ }),

/***/ "./src/app/pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/chat/chat.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]],
        entryComponents: [_chat_page__WEBPACK_IMPORTED_MODULE_5__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab {\n  bottom: 20px !important;\n  right: 15px !important;\n}\n\n.scroll-content {\n  padding-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\nion-title {\n  font-size: medium;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nion-fab-button {\n  color: #25d366;\n}\n\n.style {\n  text-align: center;\n  margin: 0px auto;\n  color: var(--ion-color-primary);\n  padding-top: 20px;\n}\n\n.thumnail {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  text-align: center;\n}\n\n.thumnail .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.thumnail .list-thumbnail .img-thumb {\n  display: inline-block;\n  border-radius: 4px;\n  width: 50px;\n  margin: 0 -5px 0 0;\n  line-height: 60px;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.button {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 15px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EscURBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUpJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBTU47O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiIHtcclxuICBib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICByaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgY29sb3I6ICMyNWQzNjY7XHJcbn1cclxuXHJcbi5zdHlsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRodW1uYWlsIHtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAubGlzdC10aHVtYm5haWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC5pbWctdGh1bWIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMCAtNXB4IDAgMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/status.service */ "./src/app/services/status.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/













let ChatPage = class ChatPage {
    constructor(router, alertService, events, ngZone, loading, chatService, afDB, dataService, toast, network, platform, statusService) {
        this.router = router;
        this.alertService = alertService;
        this.events = events;
        this.ngZone = ngZone;
        this.loading = loading;
        this.chatService = chatService;
        this.afDB = afDB;
        this.dataService = dataService;
        this.toast = toast;
        this.network = network;
        this.platform = platform;
        this.statusService = statusService;
        this.Conversations = [].reverse();
        this.allUser = [];
        this.isLoading = true;
        this.img = 'assets/profile.png';
        this.currentUserId = firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]().currentUser.uid;
        // calling the connetion to invoke 
        this.connection();
        // when the platform is ready
        this.platform.ready().then(() => {
            // this handle the  online methode or offline
            this.statusService.onlineStatus();
        });
    }
    ngOnInit() {
        // initialized the view message conversation and group and broadcast 
        this.viewMessaging();
        //get the conversations length
        this.dataService.conversation(firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]().currentUser.uid).valueChanges().subscribe((lengths) => {
            this.conversations = lengths;
            this.isLoading = false;
        });
        this.dataService.getUsers().valueChanges().subscribe((userlist) => {
            // slipe the maximun length to view
            this.userList = userlist.slice(0, 5);
        });
    }
    // this will delete the conversation content;
    deleteConversation(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]().currentUser.uid).orderByChild('userId').equalTo(item.userId).once('value', snap => {
                var res = snap.val();
                if (res != null) {
                    let store = Object.keys(res);
                    this.afDB.database.ref('conversations').child(firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]().currentUser.uid).child(store[0]).remove();
                }
            });
        });
    }
    // after leave the page from chat will be
    ionViewDidLeave() {
        this.events.subscribe('conversations', () => { });
    }
    // when view did enter 
    ionViewDidEnter() {
        // this will initial the conversation item for the list
        this.viewMessaging();
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
    // this handle also route to chat module pagas
    doChat(userId) {
        // if the cuurent user tap route to the profile page
        if (userId === this.currentUserId) {
            this.router.navigateByUrl("/profile");
        }
        else {
            // route to chat message
            this.router.navigate(['/do-chat', { 'userId': userId }]);
        }
    }
    // this handle also route to group chat module pagas
    groupChat(groupKey) {
        this.router.navigate(['/group-chat', { 'key': groupKey }]);
    }
    // this handle also route to broadcast chat module pagas
    broadcast(broadcastKey) {
        this.router.navigate(['/broadcast', { 'key': broadcastKey }]);
    }
    // user can navigate form other page//
    userpagas() {
        this.router.navigateByUrl("/userpage");
    }
    // this will notify the option
    notification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Oops, wait for the developer update for next version.',
                duration: 3000,
            });
            toast.present();
        });
    }
    viewMessaging() {
        // let the message  chat bot with the group chat
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]().currentUser.uid;
        this.dataService.chat(this.userId).valueChanges().subscribe((groupIds) => {
            this.Conversations = [];
            // let make list forEach of item from the list
            groupIds.forEach((groupId) => {
                let tempData = {};
                tempData = groupId;
                this.dataService.getUser(groupId.userId).valueChanges().subscribe((user) => {
                    tempData.nikeName = user.nikeName;
                    tempData.img = user.img;
                    this.dataService.listUnreadStatus(groupId.userId).once('value', snap => {
                        var res = snap.val();
                        let store = Object.keys(res);
                        tempData.unreadMessagesCount = store.length;
                    });
                });
                // console.log("userDAta", tempData)
                this.dataService.groups(groupId.key).valueChanges().subscribe((group) => {
                    tempData.groupName = group.name;
                    tempData.groupImage = group.img;
                    tempData.groupKey = group.key;
                    this.dataService.listMessage(groupId.key).valueChanges().subscribe((message) => {
                        let messages = message.slice(-1)[0];
                        tempData.groupMessage = messages.message;
                    });
                    this.dataService.listUnread(groupId.key).valueChanges().subscribe((unread) => {
                        tempData.unreadGroupCount = unread.length;
                        // console.log("num", unread.length)
                    });
                    // console.log("userData", this.groups)
                });
                // console.log("Data", tempData)
                this.Conversations.unshift(tempData);
            });
            // }
        });
    }
    //Add or update friend data fro real-time sync.
    addOrUpdategroups(group) {
        if (!this.groups) {
            this.groups = [group];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groups[index] = group;
            }
            else {
                this.groups.push(group);
            }
        }
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _services_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"] }
];
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/chat/chat.page.scss")).default]
    })
], ChatPage);



/***/ }),

/***/ "./src/app/pages/status/status.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/status/status.module.ts ***!
  \***********************************************/
/*! exports provided: StatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageModule", function() { return StatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _status_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status.page */ "./src/app/pages/status/status.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");







let StatusPageModule = class StatusPageModule {
};
StatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_status_page__WEBPACK_IMPORTED_MODULE_5__["StatusPage"]],
        entryComponents: [_status_page__WEBPACK_IMPORTED_MODULE_5__["StatusPage"]]
    })
], StatusPageModule);



/***/ }),

/***/ "./src/app/pages/status/status.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/status/status.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".firstFab {\n  bottom: 20px !important;\n}\n\n.secondFab {\n  bottom: 85px !important;\n}\n\n.scroll-content {\n  padding-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.statusTitleLabel {\n  background: gainsboro;\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n  padding-left: 30px !important;\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n  color: #757272;\n}\n\n.item-md.item-block .item-inner {\n  border-bottom: 0 !important;\n}\n\ndiv.profileimage {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #06534a;\n  border-radius: 100%;\n}\n\ndiv.profileimage img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n\ndiv.profileimageViewed {\n  padding: 3px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n}\n\ndiv.profileimageViewed img {\n  height: 50px;\n  width: 58px;\n  border-radius: 100%;\n}\n\n.profile {\n  border: 1px solid #06534a;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdHVzL3N0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx1QkFBQTtBQUZGOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhdHVzL3N0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tZmFiIHtcclxuLy8gICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLmZpcnN0RmFiIHtcclxuICBib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uc2Vjb25kRmFiIHtcclxuICBib3R0b206IDg1cHggIWltcG9ydGFudDtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uc3RhdHVzVGl0bGVMYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzU3MjcyO1xyXG59XHJcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2LnByb2ZpbGVpbWFnZSB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA2NTM0YTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfVxyXG59XHJcbmRpdi5wcm9maWxlaW1hZ2VWaWV3ZWQge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDY1MzRhO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/status/status.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/status/status.page.ts ***!
  \*********************************************/
/*! exports provided: StatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPage", function() { return StatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/











let StatusPage = class StatusPage {
    constructor(actionSheetController, imageService, camera, angularDb, loading, dataService, router) {
        this.actionSheetController = actionSheetController;
        this.imageService = imageService;
        this.camera = camera;
        this.angularDb = angularDb;
        this.loading = loading;
        this.dataService = dataService;
        this.router = router;
        this.currentPostStory = true;
    }
    ngOnInit() {
        this.dataService.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]().currentUser.uid).valueChanges().subscribe((user) => {
            this.userId = firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]().currentUser.uid;
            this.image = user.img;
        });
        // get the current status from firebase database
        this.dataService.getStoryCurrent(firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]().currentUser.uid).once("value", snap => {
            let Data = snap.val();
            this.userStory = Data.image;
            if (Data.postBy == this.userId) {
                this.currentPostStory = false;
            }
        });
        this.dataService.getStory().valueChanges().subscribe((storylist) => {
            this.storypost = [];
            storylist.slice(-1);
            storylist.forEach((post) => {
                let tempData = {};
                tempData = post;
                //let get the user Info
                this.dataService.getUser(tempData.postBy).valueChanges().subscribe((user) => {
                    tempData.userId = user.userId,
                        tempData.avatar = user.img,
                        tempData.name = user.nikeName;
                });
                /* ===================== check the like list ========================*/
                this.dataService.getview(tempData.key).valueChanges().subscribe((likes) => {
                    tempData.likes = likes.length;
                    //====== check weather like or not ============//
                    let isView = lodash__WEBPACK_IMPORTED_MODULE_9__["findKey"](likes, view => {
                        return view == firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]().currentUser.uid;
                    });
                    // let do some logic
                    if (isView) {
                        tempData.isView = true;
                    }
                    else {
                        tempData.isView = false;
                    }
                });
                this.storypost.unshift(tempData);
            });
        });
    }
    postStory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albums',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.imageService.setGroupPhotoProfile(this.userId, this.camera.PictureSourceType.CAMERA).then((url) => {
                                this.send(url);
                            });
                        }
                    }, {
                        text: 'Gallery',
                        icon: 'images',
                        role: 'cancel',
                        handler: () => {
                            this.imageService.setGroupPhotoProfile(this.userId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
                                this.send(url);
                            });
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    //Post the status 
    send(url) {
        var promise = new Promise((resolve, reject) => {
            this.angularDb.database.ref('/story').push({
                date: new Date().toString(),
                postBy: firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]().currentUser.uid,
                image: url
            }).then((success) => {
                resolve(true);
                let timelineId = success.key;
                success.update({
                    key: timelineId
                });
                this.loading.hidePro();
            });
        });
        return promise;
    }
    //View the Story posted
    viewStory(story) {
        this.router.navigate(['show-status/', { 'storyId': story.key, 'username': story.name, 'image': story.avatar, 'imagePost': story.image, 'date': story.date }]);
    }
    //View the Story posted
    viewStoryCurrent(story) {
        this.router.navigate(['show-status/', { 'storyId': story.key, 'username': story.name, 'image': story.avatar, 'imagePost': story.image, 'date': story.date }]);
    }
    // this handle when the user already view the status then we can't pass the storyId Key
    viewStoryView(story) {
        this.router.navigate(['show-status/', { 'username': story.name, 'image': story.avatar, 'imagePost': story.image, 'date': story.date }]);
    }
};
StatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
StatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-status',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./status.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/status/status.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./status.page.scss */ "./src/app/pages/status/status.page.scss")).default]
    })
], StatusPage);



/***/ }),

/***/ "./src/app/pipes/moment/moment.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/moment/moment.ts ***!
  \****************************************/
/*! exports provided: MomentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentPipe", function() { return MomentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/



let MomentPipe = class MomentPipe {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(date, format) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format);
    }
};
MomentPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'moment',
    })
], MomentPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _time_format_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-format/time-format */ "./src/app/pipes/time-format/time-format.ts");
/* harmony import */ var _moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moment/moment */ "./src/app/pipes/moment/moment.ts");




let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_time_format_time_format__WEBPACK_IMPORTED_MODULE_2__["TimeFormatPipe"],
            _moment_moment__WEBPACK_IMPORTED_MODULE_3__["MomentPipe"]],
        imports: [],
        exports: [_time_format_time_format__WEBPACK_IMPORTED_MODULE_2__["TimeFormatPipe"],
            _moment_moment__WEBPACK_IMPORTED_MODULE_3__["MomentPipe"]]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/pipes/time-format/time-format.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/time-format/time-format.ts ***!
  \**************************************************/
/*! exports provided: TimeFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatPipe", function() { return TimeFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/


/**
 * Generated class for the TimeFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
let TimeFormatPipe = class TimeFormatPipe {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value) {
        if (typeof value === "undefined" || value == null || value == "") {
            return "";
        }
        else {
            return value.slice(12, 16);
        }
    }
};
TimeFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "timeFormat"
    })
], TimeFormatPipe);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/



// this handel for the error massage outout
const errorMessages = {
    // Alert Service
    // This is the Service class for most of the success and error messages in the app.
    // i control the all alert in this content 
    // Firebase Error Messages
    // for the error connection failed
    connectionFailed: {
        header: "Connection failed",
        message: "A network error such as timeout, interrupted connection or unreachable."
    },
    invalideNumber: {
        header: "Invalide",
        messages: "The SMS verification code used to create the phone auth credential is invalid. Resend the verification code SMS, and be sure to use the verification code provided by the user."
    },
    missingPhoneNumber: {
        header: "Missing",
        messages: "To send verification codes, provide a phone number for the recipient."
    },
    missingVerifyCode: {
        header: "Missing code",
        messages: "The phone auth credential was created with an empty verification ID."
    },
    invalideVerifyCode: {
        header: "Invalide",
        messages: "The verification ID used to create the phone auth credential is invalid."
    },
    invalideVerifyId: {
        header: "Invalide",
        messages: "The verification ID used to create the phone auth credential is invalid."
    },
    codeExpired: {
        header: "Expired",
        messages: "The SMS code has expired. Re-send the verification code to try again."
    },
    captcha: {
        header: "reCAPTCHA",
        messages: "The reCAPTCHA response token provided is either invalid, expired, already used, or the domain associated with it do not match the list of whitelisted domains."
    },
    exceeded: {
        header: "EXCEEDED",
        messages: "The phone verification quota for this project has been exceeded."
    },
    // Group Error Messages
    groupUpdate: {
        header: "Update Group Failed!",
        message: "Sorry, but we've encountered an error updating this group."
    },
    groupLeave: {
        header: "Leave Group Failed!",
        message: "Sorry, but you've encountered an error leaving this group."
    },
    groupDelete: {
        header: "Delete Group Failed!",
        message: "Sorry, but we've encountered an error deleting this group."
    },
    updateProfile: {
        header: "Update Profile Failed",
        message: "Sorry, but we'va encountered an error updating your profile. "
    },
};
const successMessages = {
    groupUpdated: {
        header: "Group Updated!",
        message: "This group has been successfully updated!"
    },
    groupLeft: {
        header: "Leave Group",
        message: "You have successfully left this group."
    }
};
let AlertService = class AlertService {
    constructor(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    // Show error messages depending on the code
    // If you added custom error codes on top, make sure to add a case block for it.
    showErrorMessage(code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (code) {
                case "auth/invalid-phone-number":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.invalideNumber.header,
                        message: errorMessages.invalideNumber.messages,
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/missing-phone-number":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.missingPhoneNumber.header,
                        message: errorMessages.missingPhoneNumber.messages,
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/missing-verification-code":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.missingVerifyCode.header,
                        message: errorMessages.missingVerifyCode.messages,
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/invalid-verification-code":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.invalideVerifyCode.header,
                        message: errorMessages.invalideVerifyCode.messages,
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/invalid-verification-id":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.invalideVerifyId.header,
                        message: errorMessages.invalideVerifyId.messages,
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/code-expired":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.codeExpired.header,
                        message: errorMessages.codeExpired.messages,
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/captcha-check-failed":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.captcha.header,
                        message: errorMessages.captcha.messages,
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/quota-exceeded":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.captcha["header"],
                        message: errorMessages.captcha["messages"],
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
                case "auth/network-request-failed":
                    this.toast = yield this.toastCtrl.create({
                        message: errorMessages.connectionFailed["message"],
                        duration: 3000,
                        position: 'top'
                    });
                    this.toast.present();
                    break;
                case "group/error-update-group":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.groupUpdate["header"],
                        message: errorMessages.groupUpdate["message"],
                        buttons: ["Ok"],
                    });
                    this.alert.present();
                    break;
                case "group/error-leave-group":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.groupLeave["header"],
                        message: errorMessages.groupLeave["message"],
                        buttons: ["Ok"],
                    });
                    this.alert.present();
                    break;
                case "group/error-delete-group":
                    this.alert = yield this.alertCtrl.create({
                        header: errorMessages.groupDelete["header"],
                        message: errorMessages.groupDelete["message"],
                        buttons: ["OK"],
                    });
                    this.alert.present();
                    break;
            }
        });
    }
    //show alert 
    showAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header,
                message: message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    // show group updated
    showGroupUpdatedMessage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: successMessages.groupUpdated["header"],
                message: successMessages.groupUpdated["message"],
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/services/audio.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/


let AudioService = class AudioService {
    constructor() { }
};
AudioService.ctorParameters = () => [];
AudioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AudioService);



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.service */ "./src/app/services/event.service.ts");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/






let ChatService = class ChatService {
    constructor(agAuth, eventService, afDB, angularDb) {
        this.agAuth = agAuth;
        this.eventService = eventService;
        this.afDB = afDB;
        this.angularDb = angularDb;
        this.buddymessages = [];
        this.Conversations = [];
    }
    // get the message list from message page invoke
    getMessage(userId) {
        let res;
        this.afDB.database.ref('/messages').child(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid).child(userId).on('value', (snapshot) => {
            this.buddymessages = [];
            res = snapshot.val();
            for (var i in res) {
                this.buddymessages.push(res[i]);
            }
            this.eventService.publish('messages');
        });
    }
    // for the conversation list from page list
    getConversations() {
        this.afDB.database.ref('/conversations/').child(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid).on('value', snap => {
            this.Conversations = [];
            var array1 = [];
            var res = snap.val();
            for (var i in res) {
                this.Conversations.push(res[i]);
                array1.push(res[i].userId);
            }
            // this.eventService.publish('conversations');
            this.afDB.database.ref('/accounts/').on('value', snap => {
                this.boddyUser = [];
                var res = snap.val();
                var array = [];
                for (var i in res) {
                    array.push(res[i]);
                }
                for (var d in array1) {
                    for (var c in array) {
                        if (array[c].userId === array1[d]) {
                            this.boddyUser.push(array[c]);
                        }
                    }
                }
                this.eventService.publish('conversations');
            });
        });
    }
};
ChatService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ "./src/app/services/country-code.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/country-code.service.ts ***!
  \**************************************************/
/*! exports provided: CountryCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCodeService", function() { return CountryCodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/


let CountryCodeService = class CountryCodeService {
    constructor() { }
    getCountryCode() {
        return [{
                dial_code: "+1"
            }, {
                dial_code: "+972"
            }, {
                dial_code: "+93",
            }, {
                dial_code: "+355",
            }, {
                dial_code: "+213",
            }, {
                dial_code: "+1 684",
            }, {
                dial_code: "+376"
            }, {
                dial_code: "+244",
            }, {
                dial_code: "+1 264",
            }, {
                dial_code: "+1268",
            }, {
                dial_code: "+54",
            }, {
                dial_code: "+374",
            }, {
                dial_code: "+297",
            }, {
                dial_code: "+61",
            }, {
                dial_code: "+43",
            }, {
                dial_code: "+994",
            }, {
                dial_code: "+1 242",
            }, {
                dial_code: "+973",
            }, {
                dial_code: "+880",
            }, {
                dial_code: "+1 246",
            }, {
                dial_code: "+375",
            }, {
                dial_code: "+32",
            }, {
                dial_code: "+501",
            }, {
                dial_code: "+229",
            }, {
                dial_code: "+1 441",
            }, {
                dial_code: "+975",
            }, {
                dial_code: "+387",
            }, {
                dial_code: "+267",
            }, {
                dial_code: "+55",
            }, {
                dial_code: "+246",
            }, {
                dial_code: "+359",
            }, {
                dial_code: "+226",
            }, {
                dial_code: "+257",
            }, {
                dial_code: "+855",
            }, {
                dial_code: "+237",
            }, {
                dial_code: "+1",
            }, {
                dial_code: "+238",
            }, {
                dial_code: "+ 345",
            }, {
                dial_code: "+236",
            }, {
                dial_code: "+56",
            }, {
                dial_code: "+86",
            }, {
                dial_code: "+61",
            }, {
                dial_code: "+57",
            }, {
                dial_code: "+269",
            }, {
                dial_code: "+242",
            }, {
                dial_code: "+682",
            }, {
                dial_code: "+506",
            }, {
                dial_code: "+385",
            }, {
                dial_code: "+537",
            }, {
                dial_code: "+420",
            }, {
                dial_code: "+45",
            }, {
                dial_code: "+253",
            }, {
                dial_code: "+1 767",
            }, {
                dial_code: "+1 849",
            }, {
                dial_code: "+593",
            }, {
                dial_code: "+20",
            }, {
                dial_code: "+503",
            }, {
                dial_code: "+240",
            }, {
                dial_code: "+291",
            }, {
                dial_code: "+372",
            }, {
                dial_code: "+251",
            }, {
                dial_code: "+298",
            }, {
                dial_code: "+358",
            }, {
                dial_code: "+33",
            }, {
                dial_code: "+594",
            }, {
                dial_code: "+689",
            }, {
                dial_code: "+241",
            }, {
                dial_code: "+220",
            }, {
                dial_code: "+995",
            }, {
                dial_code: "+49",
            }, {
                dial_code: "+233",
            }, {
                dial_code: "+350",
            }, {
                dial_code: "+30",
            }, {
                dial_code: "+299",
            }, {
                dial_code: "+1 473",
            }, {
                dial_code: "+590",
            }, {
                dial_code: "+502",
            }, {
                dial_code: "+224",
            }, {
                dial_code: "+245",
            }, {
                dial_code: "+595",
            }, {
                dial_code: "+509",
            }, {
                dial_code: "+504",
            }, {
                dial_code: "+36",
            }, {
                dial_code: "+354",
            }, {
                dial_code: "+91",
            }, {
                dial_code: "+62",
            }, {
                dial_code: "+353",
            }, {
                dial_code: "+972",
            }, {
                dial_code: "+39",
            }, {
                dial_code: "+1 876",
            }, {
                dial_code: "+81",
            }, {
                dial_code: "+962",
            }, {
                dial_code: "+7 7",
            }, {
                dial_code: "+254",
            }, {
                dial_code: "+686",
            }, {
                dial_code: "+965",
            }, {
                dial_code: "+996",
            }, {
                dial_code: "+371",
            }, {
                dial_code: "+961",
            }, {
                dial_code: "+266",
            }, {
                dial_code: "+231",
            }, {
                dial_code: "+423",
            }, {
                dial_code: "+370",
            }, {
                dial_code: "+352",
            }, {
                dial_code: "+261",
            }, {
                dial_code: "+265",
            }, {
                dial_code: "+60",
            }, {
                dial_code: "+960",
            }, {
                dial_code: "+356",
            }, {
                dial_code: "+692",
            }, {
                dial_code: "+596",
            }, {
                dial_code: "+222",
            }, {
                dial_code: "+230",
            }, {
                dial_code: "+262",
            }, {
                dial_code: "+52",
            }, {
                dial_code: "+377",
            }, {
                dial_code: "+976",
            }, {
                dial_code: "+382",
            }, {
                dial_code: "+1664",
            }, {
                dial_code: "+212",
            }, {
                dial_code: "+95",
            }, {
                dial_code: "+264",
            }, {
                dial_code: "+674",
            }, {
                dial_code: "+977",
            }, {
                dial_code: "+31",
            }, {
                dial_code: "+599",
            }, {
                dial_code: "+687",
            }, {
                dial_code: "+64",
            }, {
                dial_code: "+505",
            }, {
                dial_code: "+227",
            }, {
                dial_code: "+234",
            }, {
                dial_code: "+672",
            }, {
                dial_code: "+1 670",
            }, {
                dial_code: "+47",
            }, {
                dial_code: "+92",
            }, {
                dial_code: "+680",
            }, {
                dial_code: "+507",
            }, {
                dial_code: "+675",
            }, {
                dial_code: "+595",
            }, {
                dial_code: "+63",
            }, {
                dial_code: "+48",
            }, {
                dial_code: "+351",
            }, {
                dial_code: "+1 939",
            }, {
                dial_code: "+974",
            }, {
                dial_code: "+40",
            }, {
                dial_code: "+250",
            }, {
                dial_code: "+685",
            }, {
                dial_code: "+378",
            }, {
                dial_code: "+966",
            }, {
                dial_code: "+221",
            }, {
                dial_code: "+381",
            }, {
                dial_code: "+248",
            }, {
                dial_code: "+232",
            }, {
                dial_code: "+65",
            }, {
                dial_code: "+421",
            }, {
                dial_code: "+386",
            }, {
                dial_code: "+677",
            }, {
                dial_code: "+27",
            }, {
                dial_code: "+500",
            }, {
                dial_code: "+34",
            }, {
                dial_code: "+94",
            }, {
                dial_code: "+249",
            }, {
                dial_code: "+268",
            }, {
                dial_code: "+46",
            }, {
                dial_code: "+41",
            }, {
                dial_code: "+992",
            }, {
                dial_code: "+66",
            }, {
                dial_code: "+690",
            }, {
                dial_code: "+676",
            }, {
                dial_code: "+1 868",
            }, {
                dial_code: "+216",
            }, {
                dial_code: "+90",
            }, {
                dial_code: "+993",
            }, {
                dial_code: "+1 649",
            }, {
                dial_code: "+688",
            }, {
                dial_code: "+256",
            }, {
                dial_code: "+380",
            }, {
                dial_code: "+971",
            }, {
                dial_code: "+44",
            }, {
                dial_code: "+598",
            }, {
                dial_code: "+998",
            }, {
                dial_code: "+678",
            }, {
                dial_code: "+681",
            }, {
                dial_code: "+967",
            }, {
                dial_code: "+260",
            }, {
                dial_code: "+263",
            }, {
                dial_code: "+591",
            }, {
                dial_code: "+673",
            }, {
                dial_code: "+61",
            }, {
                dial_code: "+243",
            }, {
                dial_code: "+225",
            }, {
                dial_code: "+500",
            }, {
                dial_code: "+44",
            }, {
                dial_code: "+379",
            }, {
                dial_code: "+852",
            }, {
                dial_code: "+98",
            }, {
                dial_code: "+44",
            }, {
                dial_code: "+44",
            }, {
                dial_code: "+850",
            }, {
                dial_code: "+82",
            }, {
                dial_code: "+856",
            }, {
                dial_code: "+218",
            }, {
                dial_code: "+853",
            }, {
                dial_code: "+389",
            }, {
                dial_code: "+691",
            }, {
                dial_code: "+373",
            }, {
                dial_code: "+258",
            }, {
                dial_code: "+970",
            }, {
                dial_code: "+872",
            }, {
                dial_code: "+262",
            }, {
                dial_code: "+7",
            }, {
                dial_code: "+590",
            }, {
                dial_code: "+290",
            }, {
                dial_code: "+1 869",
            }, {
                dial_code: "+1 758",
            }, {
                dial_code: "+590",
            }, {
                dial_code: "+508",
            }, {
                dial_code: "+1 784",
            }, {
                dial_code: "+239",
            }, {
                dial_code: "+252",
            }, {
                dial_code: "+47",
            }, {
                dial_code: "+963",
            }, {
                dial_code: "+886",
            }, {
                dial_code: "+255",
            }, {
                dial_code: "+670",
            }, {
                dial_code: "+58",
            }, {
                dial_code: "+84",
            }, {
                dial_code: "+1 284",
            }, {
                dial_code: "+1 340",
            }];
    }
};
CountryCodeService.ctorParameters = () => [];
CountryCodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CountryCodeService);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/





let DataService = class DataService {
    constructor(angularDb, afAuth) {
        this.angularDb = angularDb;
        this.afAuth = afAuth;
    }
    listUnread(groupId) {
        return this.list = this.angularDb.list('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + '/groups/' + groupId + '/messagesRead/');
    }
    listMessage(groupId) {
        return this.list = this.angularDb.list('/groups/' + groupId + '/messages/');
    }
    // list of story post from the angular firedatabase
    getStory() {
        return this.list = this.angularDb.list('story/');
    }
    // list of story post from the angular firedatabase
    getStoryCurrent(userId) {
        return this.angularDb.list('story/').query.orderByChild("postBy").equalTo(userId);
    }
    //get view list
    getview(viewId) {
        return this.list = this.angularDb.list("/views/" + viewId);
    }
    //post when a seen a story
    postView(postId) {
        return this.user = this.angularDb.object("/views/" + postId);
    }
    //Get user by userId
    //get the accounts group
    accountsGroups(userId) {
        return this.user = this.angularDb.object('/accounts/' + userId + '/groups/');
    }
    // Get messages of the group given the Id.
    getGroupMessage(groupId) {
        return this.list = this.angularDb.list('/groups/' + groupId + '/messages/');
    }
    listUnreadStatus(userId) {
        return this.angularDb.list('/messages/' + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + '/' + userId + '/').query.orderByChild( true && 'userId').equalTo( true && userId);
    }
    listUnreadChat(userId, key) {
        return this.list = this.angularDb.list('/messages/' + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + '/' + userId + '/' + key);
    }
    // get the current user, load all data from the Database
    getCurrentUser(user) {
        return this.user = this.angularDb.object('accounts/' + user);
    }
    chat(userId) {
        return this.list = this.angularDb.list('/conversations/' + userId);
    }
    call(userId) {
        return this.list = this.angularDb.list('/accounts/' + userId + '/call');
    }
    // let invoke data from the firebase;
    groups(userId) {
        return this.user = this.angularDb.object('/groups/' + userId);
    }
    //get timline Post for the current user
    groupImage(userId) {
        return this.list = this.angularDb.list("groups/" + userId + "/message/", ref => ref.orderByChild('image'));
    }
    members(userId) {
        return this.list = this.angularDb.list("groups/" + userId + "/members/");
    }
    //Get user by userId
    getUser(userId) {
        return this.user = this.angularDb.object('accounts/' + userId);
    }
    userBock(userId) {
        return this.list = this.angularDb.list("/accounts/" + userId + "/userblocks/");
    }
    readSender(currerntUser) {
        return this.user = this.angularDb.object("/messages/" + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + '/' + currerntUser);
    }
    userBocks(userId) {
        return this.list = this.angularDb.list("/accounts/" + userId + "/blocks/");
    }
    conversation(userId) {
        return this.list = this.angularDb.list("/conversations/" + userId);
    }
    postuserBock(userId) {
        return this.user = this.angularDb.object("/accounts/" + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + "/blocks/");
    }
    postsenderBock(userId) {
        return this.user = this.angularDb.object("/accounts/" + userId + "/blocks/");
    }
    userblocksBy(userId) {
        return this.user = this.angularDb.object("/accounts/" + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + "/userblocks/");
    }
    //get all users
    getUsers() {
        return this.list = this.angularDb.list('accounts', ref => ref.orderByChild('username'));
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/



let EventService = class EventService {
    constructor() {
        this.channels = {};
    }
    /**
       * Subscribe to a topic and provide a single handler/observer.
       * @param topic The name of the topic to subscribe to.
       * @param observer The observer or callback function to listen when changes are published.
       *
       * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
       */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(topic);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
};
EventService.ctorParameters = () => [];
EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/








let ImageService = class ImageService {
    constructor(camera, afstorage, loading, alertCtrl, angularDb) {
        this.camera = camera;
        this.afstorage = afstorage;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.angularDb = angularDb;
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
    setGroupPhotoProfile(groupId, sourceType) {
        return new Promise((resolve, reject) => {
            this.groupPhotoOption.sourceType = sourceType;
            this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
                let url = "data:image/jpeg;base64," + imageData;
                let imgBlob = this.imgURItoBlob(url);
                let metadata = {
                    'contentType': imgBlob.type
                };
                this.loading.showPro();
                const ref = this.afstorage.ref('/groupsMessage/' + groupId + this.generateFilename());
                const task = ref.put(imgBlob, metadata);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    ref.getDownloadURL().subscribe((url) => {
                        resolve(url);
                        this.loading.hidePro();
                    });
                }))).subscribe();
            });
        });
    }
    setGroupPhoto(groupId, sourceType) {
        this.groupPhotoOption.sourceType = sourceType;
        this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
            let url = "data:image/jpeg;base64," + imageData;
            let imgBlob = this.imgURItoBlob(url);
            let metadata = {
                'contentType': imgBlob.type
            };
            this.loading.showPro();
            const ref = this.afstorage.ref('/groups/' + this.generateFilename());
            const task = ref.put(imgBlob, metadata);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                ref.getDownloadURL().subscribe((url) => {
                    groupId.img = url;
                    this.loading.hidePro();
                    this.showAlert('Photo', 'Your profile groups has been updated');
                });
            }))).subscribe();
        });
        // })
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
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
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
};
ImageService.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }
];
ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ImageService);



/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/



let LoadingService = class LoadingService {
    constructor(loadCtrl) {
        this.loadCtrl = loadCtrl;
        this.isLoading = false;
    }
    // loading system;
    show() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadCtrl.create({
                duration: 5000,
                spinner: "circles",
                message: 'Please wait...',
                cssClass: 'custom-class custom-loading'
            }).then(a => {
                a.present()
                    .then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    // after loading will be hide.
    hide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadCtrl.dismiss();
        });
    }
    // i for the loading pro 
    showPro() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadCtrl.create({
                spinner: "circles",
                message: 'Please wait...',
                cssClass: 'custom-class custom-loading'
            }).then(a => {
                a.present()
                    .then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    hidePro() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadCtrl.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/









let LoginService = class LoginService {
    constructor(loading, afAuth, angulaeDb, alertService, alert, router) {
        this.loading = loading;
        this.afAuth = afAuth;
        this.angulaeDb = angulaeDb;
        this.alertService = alertService;
        this.alert = alert;
        this.router = router;
    }
    // this help us to create the user database to firebase
    loginPhoneNumber(phoneNUmber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield firebase__WEBPACK_IMPORTED_MODULE_8__["database"]().ref("accounts/" + firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid)
                .once('value').then((accounts) => {
                // this action when the user not created account,
                // it measn if not
                if (!accounts.val()) {
                    let userId = firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid;
                    // Set the image url link defualt
                    let img = "assets/profile.png";
                    // Set default description.
                    let description = "Hello! I am a new Communicaters user.";
                    let tempData = {
                        img: img,
                        username: phoneNUmber,
                        phoneNumber: phoneNUmber,
                        description: description,
                        nikeName: '',
                        userId: userId,
                        status: '',
                        dateCreated: new Date().toString(),
                    };
                    this.angulaeDb.object("accounts/" + firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid).set(tempData).then(() => {
                        this.loading.hide();
                        this.router.navigateByUrl('/verify');
                    }).then(() => {
                        this.angulaeDb.object("accounts/" + firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid).update({
                            status: "Online"
                        });
                    });
                }
                else {
                    this.router.navigateByUrl('/verify').then(() => {
                        this.loading.hide();
                        this.angulaeDb.object("accounts/" + firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid).update({
                            status: "Online"
                        });
                    });
                }
            });
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/phone.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/phone.service.ts ***!
  \*******************************************/
/*! exports provided: PhoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneService", function() { return PhoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/


let PhoneService = class PhoneService {
    constructor() { }
};
PhoneService.ctorParameters = () => [];
PhoneService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhoneService);



/***/ }),

/***/ "./src/app/services/status.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/status.service.ts ***!
  \********************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/






let StatusService = class StatusService {
    constructor(dataService, afDB) {
        this.dataService = dataService;
        this.afDB = afDB;
    }
    view(key) {
        return new Promise((resolve, reject) => {
            this.dataService.postView(key).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe((view) => {
                var views = view;
                if (!views) {
                    views = [firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid];
                }
                else {
                    views.push(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid);
                }
                this.dataService.postView(key).update(views).then((success) => {
                    resolve(true);
                }).catch((error) => {
                    reject(false);
                });
            });
        });
    }
    offlineStatus() {
        var promise = new Promise((resolve, reject) => {
            var ref = this.afDB.database.ref('accounts').child(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid);
            ref.onDisconnect().update({
                status: new Date().toString()
            }).then(() => {
                resolve(true);
            }).catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
    offlineStatusLog() {
        var promise = new Promise((resolve, reject) => {
            this.afDB.database.ref('accounts').child(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).update({
                status: new Date().toString()
            }).then(() => {
                resolve(true);
            }).catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
    onlineStatus() {
        var promise = new Promise((resolve, reject) => {
            this.afDB.database.ref('accounts').child(firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid).update({
                status: 'Online'
            }).then(() => {
                resolve(true);
            }).catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
};
StatusService.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
];
StatusService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], StatusService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/






let UserService = class UserService {
    constructor(dataService, angularDb) {
        this.dataService = dataService;
        this.angularDb = angularDb;
    }
    block(userId, senderId) {
        return new Promise((resolve, reject) => {
            // send the user block to the current database fetch
            // 1 the user will be block id 
            // 2 the current userId
            // this handle for the only current fetch user ID
            this.dataService.postuserBock(userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((like) => {
                var likes = like;
                if (!likes) {
                    likes = [senderId];
                }
                else {
                    likes.push(senderId);
                }
                this.dataService.postuserBock(userId).set(likes).then((success) => {
                    resolve(true);
                }).then(() => {
                    // this handel for the sender block will be notify to the who blocks bt others?
                    this.dataService.postsenderBock(senderId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((like) => {
                        var likes = like;
                        if (!likes) {
                            likes = [firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid];
                        }
                        else {
                            likes.push(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid);
                        }
                        this.dataService.postsenderBock(senderId).set(likes).then((success) => {
                            resolve(true);
                        }).then(() => {
                            // this handle for the only who block the user by?
                            this.dataService.userblocksBy(userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((like) => {
                                var likes = like;
                                if (!likes) {
                                    likes = [senderId];
                                }
                                else {
                                    likes.push(senderId);
                                }
                                this.dataService.userblocksBy(userId).update(likes).then((success) => {
                                    resolve(true);
                                }).catch((error) => {
                                    reject(false);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    // used to block thne system
    unblock(userId, senderId) {
        return new Promise((resolve, reject) => {
            // send the user unblock to the current database fetch
            // 1 the user will be unblock id 
            // 2 the current userId
            // this handle for the only current fetch user ID
            // it will be remove from the data block scops
            this.dataService.postuserBock(userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((like) => {
                like.splice(like.indexOf(senderId), 1);
                if (like.length) {
                    this.angularDb.object('accounts/' + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + '/blocks/').remove();
                    this.dataService.postuserBock(userId).set(like).then((success) => {
                        resolve(true);
                    }).catch((err) => {
                        reject(false);
                    });
                }
                else {
                    this.angularDb.object('accounts/' + firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid + '/blocks/').remove();
                }
            });
            // end for the block one: **************************************************
            // this handel for the sender block will be notify to the who blocks bt others?
            this.dataService.postsenderBock(senderId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((like) => {
                like.splice(like.indexOf(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid), 1);
                if (like.length) {
                    this.angularDb.object('accounts/' + senderId + '/blocks/').remove();
                    this.dataService.postsenderBock(senderId).set(like).then((success) => {
                        resolve(true);
                    }).catch((err) => {
                        reject(false);
                    });
                }
                else {
                    this.angularDb.object('accounts/' + senderId + '/blocks/').remove();
                }
            });
            // end of the blobk sender user: ***************************************
            // this handle for the only who block the user by?
            // this is main one for the block of the admin?
            this.dataService.userblocksBy(userId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((like) => {
                like.splice(like.indexOf(senderId), 1);
                if (like.length) {
                    this.angularDb.object('accounts/' + userId + '/userblocks/').remove();
                    this.dataService.userblocksBy(userId).update(like).then((success) => {
                        resolve(true);
                    }).catch((error) => {
                        reject(false);
                    });
                }
                else {
                    this.angularDb.object('accounts/' + userId + '/userblocks/').remove();
                }
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/webrtc.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/webrtc.service.ts ***!
  \********************************************/
/*! exports provided: WebrtcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebrtcService", function() { return WebrtcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
* WhatsApp in Ionic 5 application  (https://github.com/habupagas/ionic-5-WhatsApp)
* Copyright  @2020-present. All right reserved.
* Author: Abubakar Pagas
*/


// import Peer from 'peerjs';
let WebrtcService = class WebrtcService {
    // stun = 'stun.l.google.com:19302';
    // mediaConnection: Peer.MediaConnection;
    // options: Peer.PeerJSOption;
    // stunServer: RTCIceServer = {
    //   urls: 'stun:' + this.stun,
    // };
    constructor() {
        //   this.options = {  // not used, by default it'll use peerjs server
        //     key: 'cd1ft79ro8g833di',
        //     debug: 3
        //   };
        // }
        // getMedia() {
        //   navigator.getUserMedia({ audio: true, video: true }, (stream) => {
        //     this.handleSuccess(stream);
        //   }, (error) => {
        //     this.handleError(error);
        //   });
        // }
        // async init(userId: string, myEl: HTMLMediaElement, partnerEl: HTMLMediaElement) {
        //   this.myEl = myEl;
        //   this.partnerEl = partnerEl;
        //   try {
        //     this.getMedia();
        //   } catch (e) {
        //     this.handleError(e);
        //   }
        //   await this.createPeer(userId);
        // }
        // async createPeer(userId: string) {
        //   this.peer = new Peer(userId);
        //   this.peer.on('open', () => {
        //     this.wait();
        //   });
        // }
        // call(partnerId: string) {
        //   const call = this.peer.call(partnerId, this.myStream);
        //   call.on('stream', (stream) => {
        //     this.partnerEl.srcObject = stream;
        //   });
        // }
        // wait() {
        //   this.peer.on('call', (call) => {
        //     call.answer(this.myStream);
        //     call.on('stream', (stream) => {
        //       this.partnerEl.srcObject = stream;
        //     });
        //   });
        // }
        // handleSuccess(stream: MediaStream) {
        //   this.myStream = stream;
        //   this.myEl.srcObject = stream;
        // }
        // handleError(error: any) {
        //   if (error.name === 'ConstraintNotSatisfiedError') {
        //     // const v = constraints.video;
        //     // this.errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
        //     this.errorMsg(`The resolution px is not supported by your device.`);
        //   } else if (error.name === 'PermissionDeniedError') {
        //     this.errorMsg('Permissions have not been granted to use your camera and ' +
        //       'microphone, you need to allow the page access to your devices in ' +
        //       'order for the demo to work.');
        //   }
        //   this.errorMsg(`getUserMedia error: ${error.name}`, error);
        // }
        // errorMsg(msg: string, error?: any) {
        //   const errorElement = document.querySelector('#errorMsg');
        //   errorElement.innerHTML += `<p>${msg}</p>`;
        //   if (typeof error !== 'undefined') {
        //     console.error(error);
        //   }
        // }
    }
};
WebrtcService.ctorParameters = () => [];
WebrtcService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebrtcService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyB0JYYVOejregk0FC3TZgZpXXGHC6FPoSU",
        authDomain: "goodland-chat.firebaseapp.com",
        projectId: "goodland-chat",
        storageBucket: "goodland-chat.appspot.com",
        messagingSenderId: "674030220120",
        appId: "1:674030220120:web:2bc2fbb93119d1ddf76b2d",
        measurementId: "G-KF05T8D6FM",
    },
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB0JYYVOejregk0FC3TZgZpXXGHC6FPoSU",
        authDomain: "goodland-chat.firebaseapp.com",
        projectId: "goodland-chat",
        storageBucket: "goodland-chat.appspot.com",
        messagingSenderId: "674030220120",
        appId: "1:674030220120:web:2bc2fbb93119d1ddf76b2d",
        measurementId: "G-KF05T8D6FM",
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macmini/Downloads/Archive/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map