function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./tabs/tabs.module": ["./src/app/tabs/tabs.module.ts", "tabs-tabs-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/order-summary/order-summary.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/order-summary/order-summary.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutOrderSummaryOrderSummaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-title>{{\"Order Summary\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"order\">\r\n\r\n<ion-list *ngIf=\"order\">\r\n\r\n  <ion-list-header>\r\n    <ion-label style=\"font-weight: 900;\">{{order.id}} - <span style=\"text-transform: uppercase;\">{{order.status}}</span></ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Date\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      <p>{{order.date_created | date:'MMM d, y hh:mm a'}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      <p>\r\n    <span>{{order.billing.first_name}}</span>&nbsp;<span>{{order.billing.last_name}}</span>&nbsp;<span>{{order.billing.company}}</span>&nbsp;<span>{{order.billing.address_1}}</span>&nbsp;<span>{{order.billing.address_2}}</span>&nbsp;<span>{{order.billing.city}}</span>\r\n    <span>{{order.billing.state}}</span>&nbsp;<span>{{order.billing.postcode}}</span>&nbsp;<span>{{order.billing.country}}</span>\r\n    &nbsp;<span>{{order.billing.email}}</span>&nbsp;<span>{{order.billing.phone}}</span>\r\n  </p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  \r\n  <div *ngIf=\"order.shipping?.first_name || order.shipping?.last_name\">\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      <p>\r\n    <span>{{order.shipping.first_name}}</span>&nbsp;<span>{{order.shipping.last_name}}</span>&nbsp;<span>{{order.shipping.company}}</span>&nbsp;<span>{{order.shipping.address_1}}</span>&nbsp;<span>{{order.shipping.address_2}}</span>&nbsp;<span>{{order.shipping.city}}</span>&nbsp;\r\n    <span>{{order.shipping.state}}</span>&nbsp;<span>{{order.shipping.postcode}}</span>&nbsp;<span>{{order.shipping.country}}</span>&nbsp;\r\n    <span>{{order.shipping.email}}</span>&nbsp;<span>{{order.shipping.phone}}</span>\r\n  </p>\r\n    </ion-label>\r\n  </ion-item>\r\n  </div>\r\n\r\n  <div *ngIf=\"order.shipping_lines && order.shipping_lines.length != 0\">\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Method\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap *ngFor=\"let item of order.shipping_lines | keys\">\r\n    <p>{{item.value.method_title}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n  </div>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Payment Method\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n    <p>{{order.payment_method_title}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Items\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n    <p *ngFor=\"let item of order.line_items\">{{item.name}} <span *ngFor=\"let meta of item.meta_data\">{{meta.value}} </span> x {{item.quantity}}\r\n      <span style=\"float: right\">{{item.total | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n    </p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Totals\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n    <p>{{\"Shipping\" | translate}}<span style=\"float: right\">{{order.shipping_total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\r\n    <p>{{\"Discount\" | translate}}<span style=\"float: right\">{{order.discount_total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\r\n    <p>{{\"Tax\" | translate}}<span style=\"float: right\">{{order.total_tax | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\r\n    <ion-label class=\"grand-total\">Total<span style=\"float: right\">{{order.total | currency:settings.currency:'symbol':'1.2-2'}}</span></ion-label>\r\n  </ion-label>\r\n  </ion-item>\r\n<div class=\"submit-button\">\r\n<ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"continue()\">{{\"Continue\" | translate}}</ion-button>\r\n</div>\r\n  \r\n\r\n</ion-list>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFilterFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-title>{{\"Filter\" | translate}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n\t    <ion-button (click)=\"dismiss()\">\r\n\t        <ion-icon slot=\"end\" name=\"close\" style=\"font-size: 20px;\"></ion-icon>\r\n\t    </ion-button>\r\n\t</ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list-header>\r\n        <ion-label>{{\"Price\" | translate}}</ion-label>\r\n    </ion-list-header>\r\n    <ion-item lines=\"none\">\r\n        <ion-range dualKnobs=\"true\" value=\"{{price}}\" min=\"0\" max=\"{{settings.settings?.max_price}}\" [(ngModel)]=\"price\" name=\"price\" color=\"{{settings.theme.button}}\">\r\n            <ion-label slot=\"start\">{{price.lower}}</ion-label>\r\n            <ion-label slot=\"end\">{{price.upper}}</ion-label>\r\n        </ion-range>\r\n    </ion-item>   \r\n    <div *ngIf=\"attributes\">\r\n      <div *ngFor=\"let attribute of attributes | keys\">\r\n          <div *ngIf=\"attribute.value.terms.length\">\r\n              <ion-list-header>\r\n                  <ion-label>{{attribute.value.name}}</ion-label>\r\n              </ion-list-header>\r\n              <ion-list>\r\n                <ion-item *ngFor=\"let term of attribute.value.terms\" lines=\"none\">\r\n                  <ion-label>{{term.name}} </ion-label>\r\n                  <ion-checkbox [(ngModel)]=\"term.selected\"> </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>  \r\n          </div>\r\n      </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"{{settings.theme.button}}\" (click)=\"applyFilter()\">\r\n    <ion-title style=\"text-align: center;\">{{\"Apply\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' >\r\n    <ion-toolbar>\r\n        <ion-tab-button tab=\"search\">\r\n            <ion-searchbar mode=\"ios\"><img src=\"assets/image/logo.png\"></ion-searchbar>\r\n        </ion-tab-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" *ngIf=\"settings.settings?.pull_to_refresh\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n</ion-refresher>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"settings.settings?.enable_home_chat\">\r\n    <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\r\n        <ion-fab-button size=\"small\" color=\"whatsapp\">\r\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n        </ion-fab-button>\r\n    </a>\r\n</ion-fab>\r\n\r\n    <div class=\"spinner\" *ngIf=\"!data.blocks?.blocks\"><ion-spinner> </ion-spinner></div>\r\n\r\n      <div *ngFor=\"let children of data.blocks?.blocks\" hideWhen=\"loading\" class=\"blocks\">\r\n\r\n        <div *ngIf=\"children.block_type == 'banner_block'\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"banner_block\">\r\n\r\n        <div class=\"{{children.header_align}}\" [style.color]=\"children.title_color\">{{children.title}}</div>    \r\n            <!-- Banner Slider -->\r\n            <div *ngIf=\"children.children?.length && children.style == 'slider'\">\r\n                <ion-slides pager=\"true\" [options]=\"slideOpts\" dir=\"{{settings.dir}}\">\r\n                        <ion-slide *ngFor=\"let image of children.children\"> \r\n                            <img class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" src=\"{{image.image}}\" [style.width.px]=\"screenWidth\" [style.height.px]=\"getHeight(image)\" (click)=\"goto(image)\" [style.border-radius]=\"children.border_radius\" [style.padding]=\"children.margin_between\">\r\n                        </ion-slide>\r\n                </ion-slides>\r\n            </div>\r\n\r\n            <!-- Banner Scroll -->\r\n            <div *ngIf=\"children.children?.length && children.style == 'scroll'\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\" class=\"floating-header banner-scroll {{children.banner_shadow}}\">\r\n                <img class=\"banner ion-activatable ion-focusable hydrated  {{children.banner_shadow}}\" *ngFor=\"let image of children.children ; let i = index\" src=\"{{image.image}}\" (click)=\"goto(image)\" [style.border-radius]=\"children.border_radius\" [style.width.%]=\"children.child_width*this.settings.widthMultipy\" [style.margin-right]=\"children.margin_between\" [style.margin-left]=\" i == 0 ? children.margin_between : 0\">\r\n            </div>\r\n\r\n            <!-- Banner Grid -->\r\n            <div *ngIf=\"children.children?.length && children.style == 'grid'\" class=\"banner-grid\">\r\n                <ion-row class=\"row unlimited-items\">\r\n                    <ion-col *ngFor=\"let image of children.children\" size=\"{{children.child_width/8.33333333}}\" [style.padding]=\"children.margin_between\">\r\n                        <img src=\"{{image.image}}\" (click)=\"goto(image)\" [style.border-radius]=\"children.border_radius\" class=\"{{children.card_style}}  {{children.banner_shadow}} ion-activatable ion-focusable hydrated\">\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>  \r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"children.block_type == 'product_block' && children.products?.length\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"product-block\">\r\n        <div *ngIf=\"children.products?.length\" class=\"header-title {{children.header_align}}\" [style.color]=\"children.title_color\">{{children.title}}</div>\r\n        <!-- Products Scroll -->\r\n        <div *ngIf=\"children.products && children.style == 'scroll'\" class=\"product-scroll\">\r\n            <div class=\"scroller\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\">\r\n                <div class=\"product-item\" *ngFor=\"let item of children.products\" [style.width.%]=\"children.child_width\">\r\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\r\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"item.images?.length\" src=\"{{item.images[0].src}}\">\r\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\">\r\n                        <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\r\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\r\n\r\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n                        <div *ngIf=\"item.stock_status == 'instock'\">\r\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= 1\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n                        </div>\r\n\r\n                        <ion-card-header (click)=\"getProduct(item)\">\r\n                        <ion-card-title mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-title>\r\n                        </ion-card-header>\r\n                        <ion-card-content (click)=\"getProduct(item)\">\r\n                            <p class=\"price\">\r\n                                <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\"><span [innerHTML]=\"item.formated_sales_price\"></span><span class=\"special-price\"><del [innerHTML]=\"item.formated_price\"></del></span></span>\r\n                            </p>\r\n                          </ion-card-content>\r\n                    </ion-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Products  Grid-->\r\n        <div class=\"product-grid\" *ngIf=\"children.products?.length && children.style == 'grid'\">\r\n            <ion-row class=\"row unlimited-items\">\r\n                <ion-col class=\"col\" *ngFor=\"let item of children.products\" [style.padding]=\"children.margin_between\">\r\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\r\n                        <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\"></ion-img>\r\n                        <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img>\r\n                        <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\r\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\r\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n                        <div *ngIf=\"item.stock_status == 'instock'\">\r\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= 1\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n                        </div>\r\n                        <ion-card-header>\r\n                        <ion-card-title mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-title>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                            <p class=\"price\">\r\n                                <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\"><span [innerHTML]=\"item.formated_sales_price\"></span><span class=\"special-price\"><del [innerHTML]=\"item.formated_price\"></del></span></span>\r\n                            </p>\r\n                          </ion-card-content>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        </div>\r\n\r\n        <!--flash sale-->\r\n\r\n        <div *ngIf=\"children.block_type == 'flash_sale_block' && !children.hide && children.products?.length\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"product-block flash_sale\">\r\n\r\n        <div *ngIf=\"children.products\" class=\"{{children.header_align}}\" [style.color]=\"children.title_color\">\r\n            <div no-lines class=\"flash-item-name\">\r\n                <h2 [style.color]=\"children.title_color\">{{children.title}}</h2>\r\n                <div style=\"text-align: center;\">\r\n                    <h3 class='day'><span>{{children.days}}</span></h3> : <h3 class='day'><span>{{children.hours}}</span></h3> : <h3 class='day'><span>{{children.minutes}}</span></h3> : <h3 class='day'><span>{{children.seconds}}</span></h3>                                \r\n                </div>    \r\n            </div>\r\n        </div>\r\n\r\n        <!-- Products Scroll -->\r\n        <div *ngIf=\"children.products && children.style == 'scroll'\" class=\"product-scroll\">\r\n            <div class=\"scroller\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\">\r\n                <div class=\"product-item\" *ngFor=\"let item of children.products\" [style.width.%]=\"children.child_width\" [style.padding]=\"children.margin_between\">\r\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\r\n                        <ion-card-content>\r\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"item.images?.length\" src=\"{{item.images[0].src}}\">\r\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\">\r\n                        <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\r\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\r\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">No Stock</ion-button>\r\n                        <div *ngIf=\"item.stock_status == 'instock'\">\r\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= 1\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n                        </div>\r\n                        </ion-card-content>\r\n                        <ion-card-header (click)=\"getProduct(item)\">\r\n                        <ion-card-title mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-title>\r\n                        </ion-card-header>\r\n                        <ion-card-content (click)=\"getProduct(item)\">\r\n                            <p class=\"price\">\r\n                                <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\"><span [innerHTML]=\"item.formated_sales_price\"></span><span class=\"special-price\"><del [innerHTML]=\"item.formated_price\"></del></span></span>\r\n                            </p>\r\n                          </ion-card-content>\r\n                    </ion-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Products  Grid-->\r\n        <div class=\"product-grid\" *ngIf=\"children.products?.length && children.style == 'grid'\">\r\n            <ion-row class=\"row unlimited-items\">\r\n                <ion-col class=\"col\" *ngFor=\"let item of children.products\" [style.padding]=\"children.margin_between\">\r\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\r\n                        <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\"></ion-img>\r\n                        <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img>\r\n                        <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\r\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\r\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n                        <div *ngIf=\"item.stock_status == 'instock'\">\r\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= 1\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n                        </div>\r\n                        <ion-card-header>\r\n                        <ion-card-title mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-title>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                            <p class=\"price\">\r\n                                <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\"><span [innerHTML]=\"item.formated_sales_price\"></span><span class=\"special-price\"><del [innerHTML]=\"item.formated_price\"></del></span></span>\r\n                            </p>\r\n                          </ion-card-content>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        </div>\r\n\r\n\r\n        <!-- category-block-->\r\n        <div *ngIf=\"children.block_type == 'category_block'\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"category\">\r\n        <div *ngIf=\"data.categories\" class=\"{{children.header_align}}\" [style.color]=\"children.title_color\">{{children.title}}</div>\r\n            <!-- Category Scroll -->\r\n            <div *ngIf=\"data.categories && children.style == 'scroll'\" class=\"category-slider-scroll\">\r\n                <div class=\"scrollmenu2\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\">\r\n                <div class=\"scroll-related-products\">\r\n                  <div class=\"product\" *ngFor=\"let item of getSubCategories(children.link_id)\" [style.width.%]=\"children.child_width\" [style.padding]=\"children.margin_between\">\r\n                      <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"getCategory(item.id)\">\r\n                        <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\r\n                        <ion-card-header>\r\n                            <ion-card-title text-center mode=\"md\" [innerHTML]=\"item.name\">{{item.name}}</ion-card-title>\r\n                        </ion-card-header>\r\n                      </ion-card>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <!-- Category Grid -->\r\n            <div *ngIf=\"data.categories && children.style == 'grid'\" class=\"category-slider-grid\">\r\n                <ion-row class=\"row unlimited-items\">\r\n                    <ion-col class=\"col {{item.slug}}\" *ngFor=\"let item of getSubCategories(children.link_id)\" [style.width.%]=\"children.child_width\" [style.padding]=\"0\" [style.padding]=\"children.margin_between\">\r\n                        <div class=\"ion-activatable ion-focusable hydrated\" (click)=\"getCategory(item.id)\">\r\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\"> \r\n                                <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\r\n                                <ion-card-header>\r\n                                    <ion-card-title text-center mode=\"md\" [innerHTML]=\"item.name\">{{item.name}}</ion-card-title>\r\n                                </ion-card-header>\r\n                            </ion-card>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    <div *ngIf=\"data.blocks?.featured?.length\" class=\"related-products\">\r\n        <ion-list-header>\r\n        <ion-label>{{\"Featured Products\" | translate}}</ion-label>\r\n      </ion-list-header>\r\n      <div class=\"scroll-related-products\">\r\n          <div class=\"product\" *ngFor=\"let item of data.blocks.featured\" [style.width.px]=\"settings.dimensions.homeSliderWidth\">\r\n              <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\r\n                <ion-card-content>\r\n                <ion-img alt=\"\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\" [style.height.px]=\"settings.dimensions.homeSliderHeight\"></ion-img>\r\n                <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img><ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\r\n                <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\r\n                <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n                <div *ngIf=\"item.stock_status == 'instock'\">\r\n                <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= 1\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n                </div>\r\n                </ion-card-content>\r\n                <ion-card-header (click)=\"getProduct(item)\">\r\n                    <ion-card-title mode=\"md\">{{item.name}}</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content (click)=\"getProduct(item)\">\r\n                    <p class=\"price\">\r\n                        <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                        <span class=\"regular-price\" *ngIf=\"item.sale_price\"><span [innerHTML]=\"item.formated_sales_price\"></span><span class=\"special-price\"><del [innerHTML]=\"item.formated_price\"></del></span></span>\r\n                    </p>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"data.blocks?.on_sale?.length\" class=\"related-products\">\r\n        <ion-list-header>\r\n        <ion-label>{{\"Onsale Products\" | translate}}</ion-label>\r\n      </ion-list-header>\r\n      <div class=\"scroll-related-products\">\r\n          <div class=\"product\" *ngFor=\"let item of data.blocks.on_sale\" [style.width.px]=\"settings.dimensions.homeSliderWidth\">\r\n              <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\r\n                <ion-card-content>  <ion-img alt=\"\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\" [style.height.px]=\"settings.dimensions.homeSliderHeight\"></ion-img>\r\n                <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img><ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\r\n                <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\r\n                <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n                <div *ngIf=\"item.stock_status == 'instock'\">\r\n                <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= 1\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n                </div>\r\n                </ion-card-content>\r\n                <ion-card-header (click)=\"getProduct(item)\">\r\n                    <ion-card-title mode=\"md\">{{item.name}}</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content (click)=\"getProduct(item)\">\r\n                    <p class=\"price\">\r\n                        <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                        <span class=\"regular-price\" *ngIf=\"item.sale_price\"><span [innerHTML]=\"item.formated_sales_price\"></span><span class=\"special-price\"><del [innerHTML]=\"item.formated_price\"></del></span></span>\r\n                    </p>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  <ion-row *ngIf=\"data.products?.length\">\r\n    <ion-col size=\"{{settings.colWidthLatest}}\" *ngFor=\"let item of data.products\" [style.padding.px]=\"settings.dimensions.productPadding\">\r\n    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\r\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\"></ion-img>\r\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img>\r\n      <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\r\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\r\n\r\n        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n        <div *ngIf=\"item.stock_status == 'instock'\">\r\n        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= 1\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n        </div>\r\n\r\n      <ion-card-header (click)=\"getProduct(item)\">\r\n        <ion-card-title mode=\"md\">{{item.name}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content (click)=\"getProduct(item)\">\r\n        <p class=\"price\">\r\n            <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n            <span class=\"regular-price\" *ngIf=\"item.sale_price\"><span [innerHTML]=\"item.formated_sales_price\"></span><del><span class=\"special-price\" [innerHTML]=\"item.formated_price\"></span></del></span>\r\n        </p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && data.products?.length\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };
    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http, config, ionicHttp) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.config = config;
        this.ionicHttp = ionicHttp;
        this.options = {};
        this.options.withCredentials = true;
        this.options.headers = headers;
      }

      _createClass(ApiService, [{
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          };
        }
      }, {
        key: "getBlocks",
        value: function getBlocks() {
          var url = "".concat(this.config.url, "/wp-admin/admin-ajax.php?action=mstoreapp-keys");
          return this.http.get(url, this.config.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getBlocks")));
        }
      }, {
        key: "getItem",
        value: function getItem(endPoint) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wc/v3/' + endPoint + '?', filter);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(endPoint, id) {
          var url = this.config.setUrl('DELETE', '/wp-json/wc/v3/' + endPoint + "/" + id + '?', {});
          return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "postFlutterItem",
        value: function postFlutterItem(endPoint) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          for (var key in data) {
            if ('object' !== typeof data[key]) params = params.set(key, data[key]);
          }

          params = params.set('lang', this.config.lang);
          var url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
          return this.http.post(url, params, this.config.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "postItem",
        value: function postItem(endPoint) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          for (var key in data) {
            if ('object' !== typeof data[key]) params = params.set(key, data[key]);
          }

          params = params.set('lang', this.config.lang);
          var url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
          return this.http.post(url, params, this.config.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "updateOrderReview",
        value: function updateOrderReview(endPoint) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          delete data['terms_content'];
          delete data['logout_url'];
          delete data['terms'];
          delete data['terms_url'];
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          for (var key in data) {
            if ('object' !== typeof data[key]) params = params.set(key, data[key]);
          }

          params = params.set('lang', this.config.lang);
          params = params.set('post_data', params.toString());
          var url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
          return this.http.post(url, params, this.config.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "updateCart",
        value: function updateCart(endPoint, params) {
          var url = this.config.url + endPoint;
          params = params.set('lang', this.config.lang);
          return this.http.post(url, params, this.config.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "getItemMstore",
        value: function getItemMstore(endPoint) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-' + endPoint;
          return this.http.get(url, this.config.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "ajaxCall",
        value: function ajaxCall(endPoint) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          for (var key in data) {
            if ('object' !== typeof data[key]) params = params.set(key, data[key]);
          }

          var url = this.config.url + endPoint;
          return this.http.post(url, params, this.config.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "getPosts",
        value: function getPosts(endPoint) {
          return this.http.get(this.config.url + endPoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "WCMPVendor",
        value: function WCMPVendor(endPoint) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wcmp/v1/' + endPoint + '?', params);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "put",
        value: function put(endPoint, data) {
          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var url = this.config.setUrl('PUT', '/wp-json/wc/v3/' + endPoint + '?', params);
          return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "wcpost",
        value: function wcpost(endPoint, data) {
          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var url = this.config.setUrl('POST', '/wp-json/wc/v3/' + endPoint + '?', params);
          return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "getReviews",
        value: function getReviews(endPoint) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wc/v2/' + endPoint + '?', filter);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "getExternalData",
        value: function getExternalData(url) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          for (var key in data) {
            if ('object' !== typeof data[key]) params = params.set(key, data[key]);
          }

          return this.http.post(url, params, this.config.options);
        }
      }, {
        key: "getAddonsList",
        value: function getAddonsList(endPoint) {
          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wc-product-add-ons/v1/' + endPoint + '?', filter);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "getWCFM",
        value: function getWCFM(endPoint) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wcfmmp/v1/' + endPoint + '?', params);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(endPoint)));
        }
      }, {
        key: "getWCFMIonic",
        value: function getWCFMIonic(endPoint) {
          var _this = this;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wcfmmp/v1/' + endPoint + '?', params);
          return new Promise(function (resolve) {
            _this.ionicHttp.get(url, {}, {}).then(function (data) {
              resolve(JSON.parse(data.data));
            }).catch(function (error) {
              resolve(JSON.parse(error.error));
            });
          });
        }
      }, {
        key: "getItemIonic",
        value: function getItemIonic(endPoint) {
          var _this2 = this;

          var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wc/v3/' + endPoint + '?', filter);
          return new Promise(function (resolve) {
            _this2.ionicHttp.get(url, {}, {}).then(function (data) {
              resolve(JSON.parse(data.data));
            }).catch(function (error) {
              resolve(JSON.parse(error.error));
            });
          });
        }
      }, {
        key: "deleteItemIonic",
        value: function deleteItemIonic(endPoint, id) {
          var _this3 = this;

          var url = this.config.setUrl('DELETE', '/wp-json/wc/v3/' + endPoint + "/" + id + '?', {});
          return new Promise(function (resolve) {
            _this3.ionicHttp.delete(url, {}, {}).then(function (data) {
              resolve(JSON.parse(data.data));
            }).catch(function (error) {
              resolve(JSON.parse(error.error));
            });
          });
        }
      }, {
        key: "putItemIonic",
        value: function putItemIonic(endPoint, data) {
          var _this4 = this;

          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.ionicHttp.setHeader(this.options, 'Content-Type', 'application/json; charset=UTF-8');
          this.ionicHttp.setDataSerializer('json');
          var url = this.config.setUrl('PUT', '/wp-json/wc/v3/' + endPoint + '?', params);
          return new Promise(function (resolve) {
            _this4.ionicHttp.put(url, data, {}).then(function (data) {
              resolve(JSON.parse(data.data));
            }).catch(function (error) {
              resolve(JSON.parse(error.error));
            });
          });
        }
      }, {
        key: "postItemIonic",
        value: function postItemIonic(endPoint, data) {
          var _this5 = this;

          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.ionicHttp.setHeader(this.options, 'Content-Type', 'application/json; charset=UTF-8');
          this.ionicHttp.setDataSerializer('json');
          var url = this.config.setUrl('POST', '/wp-json/wc/v3/' + endPoint + '?', params);
          return new Promise(function (resolve) {
            _this5.ionicHttp.post(url, data, {}).then(function (data) {
              console.log(JSON.parse(data.data));
              resolve(JSON.parse(data.data));
            }).catch(function (error) {
              console.log(JSON.parse(error.error));
              resolve(JSON.parse(error.error));
            });
          });
        }
      }, {
        key: "WCMPVendorIonic",
        value: function WCMPVendorIonic(endPoint) {
          var _this6 = this;

          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.config.setUrl('GET', '/wp-json/wcmp/v1/' + endPoint + '?', params);
          return new Promise(function (resolve) {
            _this6.ionicHttp.get(url, {}, {}).then(function (data) {
              resolve(JSON.parse(data.data));
            }).catch(function (error) {
              resolve(JSON.parse(error.error));
            });
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_5__["Config"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config__WEBPACK_IMPORTED_MODULE_5__["Config"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _checkout_order_summary_order_summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./checkout/order-summary/order-summary.page */
    "./src/app/checkout/order-summary/order-summary.page.ts");

    var routes = [{
      path: '',
      loadChildren: './tabs/tabs.module#TabsPageModule'
    }, {
      path: 'order-summary/:id',
      component: _checkout_order_summary_order_summary_page__WEBPACK_IMPORTED_MODULE_3__["OrderSummaryPage"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/app-minimize/ngx */
    "./node_modules/@ionic-native/app-minimize/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./config */
    "./src/app/config.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(config, alertController, router, navCtrl, translateService, platform, splashScreen, statusBar, appMinimize) {
        _classCallCheck(this, AppComponent);

        this.config = config;
        this.alertController = alertController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appMinimize = appMinimize;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.translateService.setDefaultLang('en');
          this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            if (_this7.router.url === '/tabs/home') {//this.backButtonSubscription.unsubscribe();
              //this.presentAlertConfirm();
              //navigator['app'].exitApp();
            } else {
              _this7.navCtrl.navigateForward('/tabs/home');
            }
          });
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this8 = this;

          this.platform.ready().then(function () {
            _this8.statusBar.styleDefault();

            document.addEventListener('deviceready', function () {
              wkWebView.injectCookie(_this8.config.url + '/');
            });

            _this8.statusBar.backgroundColorByHexString('#ffffff');
            /* Add your translation file in src/assets/i18n/ and set your default language here */
            //this.translateService.setDefaultLang('ar');
            //document.documentElement.setAttribute('dir', 'rtl');
            //document.documentElement.setAttribute('dir', 'rtl');
            //this.statusBar.backgroundColorByHexString('#004a91');
            //this.statusBar.backgroundColorByHexString('#ffffff');
            //this.statusBar.styleBlackTranslucent();
            //this.statusBar.styleLightContent();
            //this.minimize();

            /*this.platform.backButton.subscribeWithPriority(0, () => {
               this.appMinimize.minimize();
            });*/

            /* this.platform.backButton.subscribeWithPriority(0, () => {
                //this.platform.backButton.subscribe(() => {
               if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                 this.routerOutlet.pop();
               } else if (this.router.url === '/tabs/home') {
                 this.presentAlertConfirm();
               } else {
                 this.navCtrl.navigateForward('/tabs/home');
                 //this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
               }
             });*/

          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this9 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("working");
                    _context.next = 3;
                    return this.alertController.create({
                      header: 'Exit!',
                      message: 'Do you want to exit the app?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {//
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          _this9.backButtonSubscription.unsubscribe();

                          navigator['app'].exitApp();
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _config__WEBPACK_IMPORTED_MODULE_8__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_5__["AppMinimize"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"])], AppComponent.prototype, "routerOutlet", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_8__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_5__["AppMinimize"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/app-rate/ngx */
    "./node_modules/@ionic-native/app-rate/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/app-minimize/ngx */
    "./node_modules/@ionic-native/app-minimize/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../app/pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _app_filter_filter_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../app/filter/filter.page */
    "./src/app/filter/filter.page.ts");
    /* harmony import */


    var _checkout_order_summary_order_summary_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./checkout/order-summary/order-summary.page */
    "./src/app/checkout/order-summary/order-summary.page.ts");
    /* harmony import */


    var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ionic-native/firebase-analytics/ngx */
    "./node_modules/@ionic-native/firebase-analytics/ngx/index.js"); //import { ScrollingModule } from '@angular/cdk/scrolling/ngx';
    //import { DragDropModule } from '@angular/cdk/drag-drop/ngx';
    //import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
    //import { CardIO } from '@ionic-native/card-io/ngx';
    //import { Braintree } from '@ionic-native/braintree/ngx';
    //Uncomment when you use Google Login
    //vendor
    //pages
    //Firebase analytics


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _app_filter_filter_page__WEBPACK_IMPORTED_MODULE_28__["FilterPage"], _checkout_order_summary_order_summary_page__WEBPACK_IMPORTED_MODULE_29__["OrderSummaryPage"] //HomePage
      ],
      entryComponents: [_app_filter_filter_page__WEBPACK_IMPORTED_MODULE_28__["FilterPage"], _checkout_order_summary_order_summary_page__WEBPACK_IMPORTED_MODULE_29__["OrderSummaryPage"] //HomePage
      ],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_18__["KeysPipeModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_30__["FirebaseAnalytics"], _home_home_page__WEBPACK_IMPORTED_MODULE_21__["HomePage"], //Braintree,
      _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_23__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_24__["Facebook"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], //CardIO,
      _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_12__["AppMinimize"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__["EmailComposer"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_11__["AppRate"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_25__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_26__["Crop"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_27__["FileTransfer"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], //BarcodeScanner,
      _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_22__["HTTP"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/checkout/order-summary/order-summary.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/checkout/order-summary/order-summary.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutOrderSummaryOrderSummaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order .grand-total {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvb3JkZXItc3VtbWFyeS9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGNoZWNrb3V0XFxvcmRlci1zdW1tYXJ5XFxvcmRlci1zdW1tYXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hlY2tvdXQvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyIHtcclxuICAgIC5ncmFuZC10b3RhbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxufSIsIi5vcmRlciAuZ3JhbmQtdG90YWwge1xuICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/order-summary/order-summary.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/checkout/order-summary/order-summary.page.ts ***!
    \**************************************************************/

  /*! exports provided: OrderSummaryPage */

  /***/
  function srcAppCheckoutOrderSummaryOrderSummaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSummaryPage", function () {
      return OrderSummaryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var OrderSummaryPage =
    /*#__PURE__*/
    function () {
      function OrderSummaryPage(api, settings, router, loadingController, navCtrl, route) {
        _classCallCheck(this, OrderSummaryPage);

        this.api = api;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
      }

      _createClass(OrderSummaryPage, [{
        key: "getOrder",
        value: function getOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this10 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      animated: true,
                      backdropDismiss: true
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return this.api.postFlutterItem('order', this.filter).subscribe(function (res) {
                      _this10.order = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter.id = this.route.snapshot.paramMap.get('id');
          this.getOrder();
        }
      }, {
        key: "continue",
        value: function _continue() {
          //Clear Cart
          this.api.postItem('emptyCart').subscribe(function (res) {}, function (err) {});
          this.navCtrl.navigateRoot('/tabs/home');
        }
      }]);

      return OrderSummaryPage;
    }();

    OrderSummaryPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    OrderSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-summary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/order-summary/order-summary.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-summary.page.scss */
      "./src/app/checkout/order-summary/order-summary.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], OrderSummaryPage);
    /***/
  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: Config */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");

    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var Config =
    /*#__PURE__*/
    function () {
      function Config() {
        _classCallCheck(this, Config);

        this.webClientId = '906972187521-1oq0lp1rkl3ajon0of88f49h1r6rhrtj.apps.googleusercontent.com';
        this.avatar = "assets/image/shop-icon.jpg";
        this.options = {};
        this.optionstwo = {};
        this.lang = 'en';
        this.url = 'https://wootoop.com';
        this.consumerKey = 'ck_5b483b736d68df0c00781f2751973058c7800c6b';
        this.consumerSecret = 'cs_92142f93d3571a2cb441054f67dd1768b4579782';
        this.options.withCredentials = true;
        this.options.headers = {};
        this.optionstwo.withCredentials = false;
        this.optionstwo.headers = {};
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
      }

      _createClass(Config, [{
        key: "setOauthNonce",
        value: function setOauthNonce(length, chars) {
          var result = '';

          for (var i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))];
          }

          return result;
        }
      }, {
        key: "setUrl",
        value: function setUrl(method, endpoint, filter) {
          var key;
          var unordered = {};
          var ordered = {};

          if (this.url.indexOf('https') >= 0) {
            unordered = {};

            if (filter) {
              for (key in filter) {
                unordered[key] = filter[key];
              }
            }

            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            unordered['lang'] = this.lang;
            Object.keys(unordered).sort().forEach(function (key) {
              ordered[key] = unordered[key];
            });
            this.searchParams = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();

            for (key in ordered) {
              this.searchParams.set(key, ordered[key]);
            }

            return this.url + endpoint + this.searchParams.toString();
          } else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;

            for (key in this.params) {
              unordered[key] = this.params[key];
            }

            if (filter) {
              for (key in filter) {
                unordered[key] = filter[key];
              }
            }

            unordered['lang'] = this.lang;
            Object.keys(unordered).sort().forEach(function (key) {
              ordered[key] = unordered[key];
            });
            this.searchParams = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();

            for (key in ordered) {
              this.searchParams.set(key, ordered[key]);
            }

            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
          }
        }
      }]);

      return Config;
    }();

    Config = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Config);
    /***/
  },

  /***/
  "./src/app/data.ts":
  /*!*************************!*\
    !*** ./src/app/data.ts ***!
    \*************************/

  /*! exports provided: Data */

  /***/
  function srcAppDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Data", function () {
      return Data;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Data =
    /*#__PURE__*/
    function () {
      function Data() {
        _classCallCheck(this, Data);

        this.categories = [];
        this.mainCategories = [];
        this.blocks = [];
        this.cart = {};
        this.count = 0;
        this.wishlistId = [];
        this.freaturedProducts = [];
        this.onsaleProducts = [];
        this.products = [];
        this.cartNonce = '';
      }

      _createClass(Data, [{
        key: "updateCart",
        value: function updateCart(cart_contents) {
          this.cartItem = cart_contents;
          this.cart = [];
          this.count = 0;

          for (var item in cart_contents) {
            this.cart[cart_contents[item].product_id] = parseInt(cart_contents[item].quantity);
            this.count += parseInt(cart_contents[item].quantity);
          }
        }
      }]);

      return Data;
    }();

    Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Data);
    /***/
  },

  /***/
  "./src/app/data/product.ts":
  /*!*********************************!*\
    !*** ./src/app/data/product.ts ***!
    \*********************************/

  /*! exports provided: Product */

  /***/
  function srcAppDataProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Product = function Product() {
      _classCallCheck(this, Product);

      this.product = {};
      this.variationProduct = {};
    };

    Product = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Product);
    /***/
  },

  /***/
  "./src/app/data/settings.ts":
  /*!**********************************!*\
    !*** ./src/app/data/settings.ts ***!
    \**********************************/

  /*! exports provided: Settings */

  /***/
  function srcAppDataSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var Settings =
    /*#__PURE__*/
    function () {
      function Settings(translate, api, toastController) {
        _classCallCheck(this, Settings);

        this.translate = translate;
        this.api = api;
        this.toastController = toastController; //vendor

        this.vendor = false;
        this.administrator = false; //all

        this.lan = {};
        this.languages = []; //[{"code":"en","id":"1","native_name":"English","major":"1","active":"1","default_locale":"en_US","encode_url":"0","tag":"en","translated_name":"English","url":"https://morslon.com/","country_flag_url":"https://morslon.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png","language_code":"en"},{"code":"ar","id":"5","native_name":"العربية","major":"0","active":0,"default_locale":"ar","encode_url":"0","tag":"ar","translated_name":"Arabic","url":"https://morslon.com/?lang=ar","country_flag_url":"https://morslon.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/ar.png","language_code":"ar"}];

        this.currencies = []; //[{"languages":{"ar":1,"en":1},"rate":0,"position":"left_space","thousand_sep":",","decimal_sep":".","num_decimals":"3","rounding":"disabled","rounding_increment":1,"auto_subtract":0,"code":"BHD"},{"languages":{"ar":1,"en":1},"rate":"10","updated":"2019-11-30 18:43:43","position":"left","thousand_sep":",","decimal_sep":".","num_decimals":"3","rounding":"disabled","rounding_increment":1,"auto_subtract":0,"previous_rate":"0.0001","code":"SAR"},{"languages":{"ar":1,"en":1},"rate":"11","updated":"2019-11-30 18:18:05","position":"left","thousand_sep":",","decimal_sep":".","num_decimals":2,"rounding":"disabled","rounding_increment":1,"auto_subtract":0,"previous_rate":0,"code":"AED"}];

        this.pages = [];
        this.customer = {};
        this.currency = 'USD';
        this.theme = {};
        this.wishlist = [];
        this.colWidthLatest = 6;
        this.colWidthProducts = 6;
        this.colWidthSearch = 6;
        this.widthMultipy = 1;
        this.mode = 'ios';
        this.dir = 'ltr';
        this.dimensions = {
          imageHeight: 100,
          productSliderWidth: 42,
          latestPerRow: 2,
          productsPerRow: 2,
          searchPerRow: 2,
          productBorderRadius: 0,
          productPadding: 0,
          suCatBorderRadius: 0
        };
        this.settings = {};
        this.customer.billing = {};
        this.customer.shipping = {};
        this.theme.tabBar = 'white';
        this.theme.header = 'white';
        this.theme.button = 'custom2';
      }

      _createClass(Settings, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addToWishlist",
        value: function addToWishlist(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.customer.id) {
                      _context3.next = 6;
                      break;
                    }

                    this.wishlist[id] = true;
                    _context3.next = 4;
                    return this.api.postItem('add_wishlist', {
                      product_id: id
                    }).subscribe(function (res) {
                      _this11.wishlist = [];

                      for (var item in res) {
                        _this11.wishlist[res[item].id] = res[item].id;
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 4:
                    _context3.next = 7;
                    break;

                  case 6:
                    this.presentToast(this.lan.login);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this12 = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.translate.get('Please login to add items to the wishlist').subscribe(function (translations) {
                      _this12.lan.login = translations;
                    });
                    _context4.next = 3;
                    return this.toastController.create({
                      message: this.lan.login,
                      duration: 2000
                    });

                  case 3:
                    toast = _context4.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "removeFromWishlist",
        value: function removeFromWishlist(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.wishlist[id] = false;

                    if (!this.customer.id) {
                      _context5.next = 4;
                      break;
                    }

                    _context5.next = 4;
                    return this.api.postItem('remove_wishlist', {
                      product_id: id
                    }).subscribe(function (res) {
                      _this13.wishlist = [];

                      for (var item in res) {
                        _this13.wishlist[res[item].id] = res[item].id;
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "calc",
        value: function calc(width) {
          this.width = width;

          if (width >= 1025) {
            this.colWidthLatest = 12 / 5;
            this.colWidthProducts = 12 / 5;
            this.colWidthSearch = 12 / 5;
            this.dimensions.homeGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 10) / 5);
            this.dimensions.productsGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 10) / 5);
            this.dimensions.searchGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 10) / 5);
            this.dimensions.productSliderWidth = width * 0.20;
            this.dimensions.homeSliderWidth = width * 0.20;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.widthMultipy = 0.4;
          } else if (width >= 769) {
            this.colWidthLatest = 12 / 4;
            this.colWidthProducts = 12 / 4;
            this.colWidthSearch = 12 / 4;
            this.dimensions.homeGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 8) / 4);
            this.dimensions.productsGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 8) / 4);
            this.dimensions.searchGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 8) / 4);
            this.dimensions.productSliderWidth = width * 0.25;
            this.dimensions.homeSliderWidth = width * 0.25;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.widthMultipy = 0.5;
          } else if (width >= 481) {
            this.colWidthLatest = 12 / 3;
            this.colWidthProducts = 12 / 3;
            this.colWidthSearch = 12 / 3;
            this.dimensions.homeGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 6) / 3);
            this.dimensions.productsGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 6) / 3);
            this.dimensions.searchGridViewHeight = this.dimensions.imageHeight / 100 * ((width - this.dimensions.productPadding * 6) / 3);
            this.dimensions.productSliderWidth = width * 0.35;
            this.dimensions.homeSliderWidth = width * 0.35;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.widthMultipy = 0.7;
          } else {
            this.colWidthLatest = 12 / this.dimensions.latestPerRow;
            this.colWidthProducts = 12 / this.dimensions.productsPerRow;
            this.colWidthSearch = 12 / this.dimensions.searchPerRow;
            this.dimensions.homeGridViewHeight = this.dimensions.imageHeight / 100 * (width - this.dimensions.latestPerRow * this.dimensions.productPadding * 2) / this.dimensions.latestPerRow;
            this.dimensions.productsGridViewHeight = this.dimensions.imageHeight / 100 * (width - this.dimensions.productPadding * this.dimensions.latestPerRow * 2) / this.dimensions.productsPerRow;
            this.dimensions.searchGridViewHeight = this.dimensions.imageHeight / 100 * (width - this.dimensions.productPadding * this.dimensions.latestPerRow * 2) / this.dimensions.searchPerRow;
            this.dimensions.productSliderWidth = width * 0.40;
            this.dimensions.homeSliderWidth = width * 0.40;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.dimensions.homeGridViewWidth = width - this.dimensions.latestPerRow * this.dimensions.productPadding * 2 / this.dimensions.latestPerRow;
          }
        }
      }]);

      return Settings;
    }();

    Settings.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    Settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], Settings);
    /***/
  },

  /***/
  "./src/app/filter/filter.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/filter/filter.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFilterFilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/filter/filter.page.ts":
  /*!***************************************!*\
    !*** ./src/app/filter/filter.page.ts ***!
    \***************************************/

  /*! exports provided: FilterPage */

  /***/
  function srcAppFilterFilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPage", function () {
      return FilterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");

    var FilterPage =
    /*#__PURE__*/
    function () {
      function FilterPage(api, loadingController, modalCtrl, settings, navParams) {
        _classCallCheck(this, FilterPage);

        this.api = api;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.settings = settings;
        this.navParams = navParams;
        this.price = {
          lower: 0,
          upper: 1000
        };
      }

      _createClass(FilterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter = this.navParams.data.filter;
          this.attributes = this.navParams.data.attributes;
          console.log(this.attributes);

          if (this.filter.min_price) {
            this.price.lower = this.filter.min_price;
            this.price.upper = this.filter.max_price;
          } else this.price.upper = this.settings.settings.max_price;
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this14 = this;

          var i = 0;

          var _loop = function _loop() {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (_this14.attributes[key].terms.length) _this14.attributes[key].terms.forEach(function (term) {
              if (term.selected && term.selected == true) {
                _this14.filter['attributes' + i] = _this14.attributes[key].id;
                _this14.filter['attribute_term' + i] = term.term_id;
              } else {
                _this14.filter['attributes' + i] = undefined;
                _this14.filter['attribute_term' + i] = undefined;
              }

              i++;
            });
          };

          for (var _i = 0, _Object$entries = Object.entries(this.attributes); _i < _Object$entries.length; _i++) {
            _loop();
          }

          this.filter.min_price = this.price.lower;
          this.filter.max_price = this.price.upper;
          this.modalCtrl.dismiss(this.filter);
        }
      }]);

      return FilterPage;
    }();

    FilterPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    FilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filter.page.scss */
      "./src/app/filter/filter.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], FilterPage);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-card {\n  margin: 0;\n  height: 100%;\n}\n\nion-card-header {\n  padding: 10px;\n}\n\nion-card-content {\n  padding: 0;\n}\n\nion-card-content .price {\n  padding: 0 10px 10px 10px;\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-card-content .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\nion-card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  text-transform: unset;\n}\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n\n.blocks .banner_block {\n  white-space: nowrap;\n  position: relative;\n  z-index: 0;\n}\n\n.blocks .banner_block .banner-scroll {\n  overflow: auto;\n}\n\n.blocks .banner_block .banner-scroll img {\n  text-decoration: none;\n  margin: 0 5px 0 5px;\n  width: 53%;\n  vertical-align: middle;\n}\n\n.blocks .banner_block .banner-scroll img:first-child {\n  margin: 0 5px 0 10px;\n}\n\n.blocks .banner_block .banner-scroll img:last-child {\n  margin: 0 10px 0 5px;\n}\n\n.blocks .banner_block .banner-grid img {\n  vertical-align: middle;\n}\n\n.blocks .banner_block .banner-grid .row.unlimited-items {\n  flex-wrap: wrap;\n}\n\n.blocks .banner_block .banner-grid .row.unlimited-items .col {\n  -webkit-box-flex: 0;\n          flex: none;\n  width: 50%;\n  line-height: 0;\n  padding: 5px;\n}\n\n.blocks .banner_block .floating-header {\n  overflow: auto;\n  white-space: nowrap;\n  z-index: 3;\n  padding-left: 30%;\n}\n\n.blocks .banner_block .floating-header .banner {\n  width: 90%;\n  height: auto;\n}\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .blocks .banner_block .floating-header {\n    padding-left: 25%;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .blocks .banner_block .floating-header {\n    padding-left: 20%;\n  }\n}\n\n@media (min-width: 1025px) {\n  .blocks .banner_block .floating-header {\n    padding-left: 15%;\n  }\n}\n\n.blocks .scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.blocks .scrollmenu a {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n\n.blocks .left_floating {\n  padding: 0 16px;\n  z-index: -1;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  position: absolute;\n  top: 45%;\n  max-width: 30%;\n  width: 40%;\n  text-align: center;\n  white-space: normal;\n}\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .blocks .left_floating {\n    max-width: 30%;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .blocks .left_floating {\n    max-width: 25%;\n  }\n}\n\n@media (min-width: 1025px) {\n  .blocks .left_floating {\n    max-width: 20%;\n  }\n}\n\n.blocks .top_left {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  padding: 10px 16px;\n}\n\n.blocks .top_center {\n  padding: 14px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.blocks .top_right {\n  padding: 10px 16px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-align: right;\n}\n\n.blocks .none {\n  display: none;\n}\n\n.blocks .block-title {\n  margin-top: 10px;\n  font-weight: 400;\n}\n\n.blocks .product-block {\n  overflow: auto;\n  white-space: nowrap;\n  position: relative;\n  z-index: 0;\n}\n\n.blocks .product-block .product-scroll {\n  padding-bottom: 5px;\n}\n\n.blocks .product-block .product-scroll .scroller {\n  padding: 0px 4px 15px 4px;\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.blocks .product-block .product-scroll .scroller h5 {\n  margin: 0;\n  border-radius: 3px;\n  padding: 6px;\n  font-size: 12px;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-weight: 400;\n}\n\n.blocks .product-block .product-scroll .scroller .product-item {\n  display: inline-block;\n  text-decoration: none;\n  width: 42%;\n  padding: 0px 5px 0px 5px;\n}\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .blocks .product-block .product-scroll .scroller .product-item {\n    width: 33.333%;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .blocks .product-block .product-scroll .scroller .product-item {\n    width: 25%;\n  }\n}\n\n@media (min-width: 1025px) {\n  .blocks .product-block .product-scroll .scroller .product-item {\n    width: 20%;\n  }\n}\n\n.blocks .product-block .product-scroll .scroller img {\n  height: auto;\n  width: 100%;\n}\n\n.blocks .product-block .product-scroll .scroller ion-card {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.blocks .product-block .product-scroll .scroller ion-card-content {\n  padding: 0;\n}\n\n.blocks .product-block .product-scroll .scroller .price-regular {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.blocks .product-block .product-scroll .scroller del {\n  font-size: 12px;\n}\n\n.blocks .product-block .product-scroll .scroller ion-label {\n  margin: 0;\n  padding: 0 6px 6px 6px;\n}\n\n.blocks .product-block .product-scroll .floating-header {\n  overflow: auto;\n  white-space: nowrap;\n  z-index: 3;\n  padding-left: 30%;\n}\n\n.blocks .product-block .product-scroll .floating-header .banner {\n  width: 90%;\n  height: auto;\n}\n\n.blocks .product-block .product-grid .wishlist-button-grid1 {\n  position: absolute;\n  top: 2px;\n  right: 20px;\n  font-size: 2em;\n  margin: 0.4rem -5px;\n  color: #f44336;\n}\n\n.blocks .product-block .product-grid .wishlist-button-grid2 {\n  position: absolute;\n  top: 2px;\n  right: 20px;\n  font-size: 2em;\n  margin: 0.4rem -5px;\n  color: #444;\n}\n\n.blocks .product-block .product-grid ion-row {\n  margin: 0;\n  padding: 0 0 0 5px;\n}\n\n.blocks .product-block .product-grid ion-col {\n  margin: 0;\n  padding: 5px 5px 0 0;\n}\n\n.blocks .product-block .product-grid ion-card {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  width: 100%;\n}\n\n.blocks .product-block .product-grid ion-card img {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  padding: 0;\n}\n\n.blocks .product-block .product-grid ion-card ion-card-content {\n  padding: 0px;\n}\n\n.blocks .product-block .product-grid .card-title {\n  position: absolute;\n  top: 80%;\n  font-size: 12px;\n  width: 100%;\n  font-weight: 500;\n}\n\n.blocks .product-block .product-grid .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n}\n\n.blocks .product-block .product-grid .card-name {\n  width: 144px;\n  margin: auto;\n}\n\n.blocks .product-block .product-grid .card-name ion-label {\n  margin: 8px 0;\n  height: 20px;\n  white-space: no-wrap;\n  font-size: 13px;\n}\n\n.blocks .product-block .product-grid .label {\n  margin-bottom: 10px;\n  margin-top: 5px;\n}\n\n.blocks .product-block .product-grid .price-delete {\n  margin: 0 7.5px;\n  font-size: 12px;\n}\n\n.blocks .product-block .product-grid .price-regular {\n  margin: 0 7.5px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.blocks .product-block .product-grid .row.unlimited-items {\n  flex-wrap: wrap;\n  padding-left: 0;\n}\n\n.blocks .product-block .product-grid .row.unlimited-items .col {\n  -webkit-box-flex: 0;\n          flex: none;\n  width: 50%;\n  padding: 0;\n}\n\n.blocks .product-block .product-grid .row.unlimited-items .col:nth-child(2n+0) {\n  border-right: none;\n}\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .blocks .product-block .product-grid .row.unlimited-items .col {\n    width: 33.333%;\n  }\n  .blocks .product-block .product-grid .row.unlimited-items .col:nth-child(3n+0) {\n    border-right: none;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .blocks .product-block .product-grid .row.unlimited-items .col {\n    width: 25%;\n  }\n  .blocks .product-block .product-grid .row.unlimited-items .col:nth-child(4n+0) {\n    border-right: none;\n  }\n}\n\n@media (min-width: 1025px) {\n  .blocks .product-block .product-grid .row.unlimited-items .col {\n    width: 20%;\n  }\n  .blocks .product-block .product-grid .row.unlimited-items .col:nth-child(5n+0) {\n    border-right: none;\n  }\n}\n\n.blocks .flash_sale .floating-header {\n  overflow: auto;\n  white-space: nowrap;\n  z-index: 3;\n  padding-left: 45% !important;\n}\n\n.blocks .flash_sale .left_floating {\n  padding: 0;\n  top: 15%;\n  max-width: 48%;\n  width: 48%;\n}\n\n.blocks .flash_sale .flash-item-name h2 {\n  padding: 0;\n  font-weight: 400;\n  font-size: 14px;\n  text-align: center;\n  margin-left: -7px;\n  margin-bottom: 8px;\n  margin-top: 0;\n}\n\n.blocks .flash_sale .flash-item-name h4 {\n  padding: 4px 4px 8px 4px;\n  font-size: 11px;\n  text-align: center;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.blocks .flash_sale .flash-item-name .day {\n  background: black;\n  color: #fff;\n  width: 25px;\n  min-width: 25px;\n  max-width: 25px;\n  height: 25px;\n  min-height: 25px;\n  max-height: 25px;\n  font-size: 10px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin: auto;\n  text-align: center;\n}\n\n.blocks .flash_sale .flash-item-name .day span {\n  margin: auto;\n}\n\n.blocks .category {\n  z-index: 0;\n}\n\n.blocks .category .floating-header {\n  overflow: auto;\n  white-space: nowrap;\n  z-index: 3;\n  padding-left: 43%;\n}\n\n.blocks .category .floating-header .banner {\n  width: 90%;\n  height: auto;\n}\n\n.blocks .category .category-slider-scroll, .blocks .category .category-scroll {\n  overflow: auto;\n  white-space: nowrap;\n  position: relative;\n  display: -webkit-box;\n}\n\n.blocks .category .category-slider-scroll .scrollmenu2, .blocks .category .category-scroll .scrollmenu2 {\n  margin: 0;\n  padding-bottom: 15px;\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.blocks .category .category-slider-scroll .scrollmenu2 .none, .blocks .category .category-scroll .scrollmenu2 .none {\n  display: none;\n}\n\n.blocks .category .category-slider-scroll .scrollmenu2 h5, .blocks .category .category-scroll .scrollmenu2 h5 {\n  margin: 0;\n  border-radius: 3px;\n  padding: 10px 4px 0 4px;\n  font-size: 11px;\n  text-transform: capitalize;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n  padding: 0 10px 10px 10px;\n  width: 40%;\n}\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n    width: 33.333%;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n    width: 25%;\n  }\n}\n\n@media (min-width: 1025px) {\n  .blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n    width: 20%;\n  }\n}\n\n.blocks .category .category-slider-grid h5, .blocks .category .category-grid h5 {\n  font-size: 13px;\n}\n\n.blocks .category .category-slider-grid ion-card-content, .blocks .category .category-grid ion-card-content {\n  padding: 0px;\n}\n\n.blocks .category .category-slider-grid .card-md ion-card-content, .blocks .category .category-grid .card-md ion-card-content {\n  padding: 0px;\n}\n\n.blocks .category .category-slider-grid .none, .blocks .category .category-grid .none {\n  display: none;\n}\n\n.blocks .category .category-slider-grid ion-card, .blocks .category .category-grid ion-card {\n  margin: 0px;\n  width: 100%;\n  border-radius: 0;\n}\n\n.blocks .category .category-slider-grid ion-card img, .blocks .category .category-grid ion-card img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.blocks .category .category-slider-grid .row.unlimited-items, .blocks .category .category-grid .row.unlimited-items {\n  flex-wrap: wrap;\n  padding-left: 0;\n}\n\n.blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n  -webkit-box-flex: 0;\n          flex: none;\n  padding: 0;\n  width: 50%;\n}\n\n.blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(2n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(2n+0) {\n  border-right: none;\n}\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n    width: 33.333%;\n  }\n  .blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(3n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(3n+0) {\n    border-right: none;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n    width: 25%;\n  }\n  .blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(4n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(4n+0) {\n    border-right: none;\n  }\n}\n\n@media (min-width: 1025px) {\n  .blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n    width: 20%;\n  }\n  .blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(5n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(5n+0) {\n    border-right: none;\n  }\n}\n\n.related-products {\n  padding-bottom: 10px;\n}\n\n.related-products .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.related-products .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\n.related-products .related-item-name {\n  font-weight: 400;\n}\n\n.related-products .scroll-related-products {\n  padding: 16px 0 16px 0;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.related-products .scroll-related-products .product {\n  display: inline-block;\n  text-decoration: none;\n  width: 50%;\n  margin: 0 0 0 10px;\n}\n\n.related-products .scroll-related-products .product:last-child {\n  margin-right: 10px;\n}\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .related-products .scroll-related-products .product {\n    width: 33.333%;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .related-products .scroll-related-products .product {\n    width: 25%;\n  }\n}\n\n@media (min-width: 1025px) {\n  .related-products .scroll-related-products .product {\n    width: 20%;\n  }\n}\n\n.related-products .scroll-related-products ion-img {\n  height: auto;\n  width: 100%;\n}\n\n.related-products .scroll-related-products ion-card {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.related-products .scroll-related-products .border {\n  border: 0.55px solid var(--ion-color-light, #f4f5f8);\n}\n\n.related-products ion-list-header ion-label {\n  font-weight: 600;\n}\n\nion-header img {\n  height: 30px;\n  width: auto;\n}\n\n.stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  height: 19px;\n  --box-shadow: none;\n}\n\n.offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n}\n\n.inner-scroll {\n  padding-top: 0 !important;\n  margin-top: 64px !important;\n}\n\nion-refresher {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7QUNJSjs7QURISTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDS1I7O0FESlE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01aOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ01KOztBREhJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNNUjs7QURMUTtFQUNJLGNBQUE7QUNPWjs7QUROWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNRaEI7O0FETlk7RUFDSSxvQkFBQTtBQ1FoQjs7QUROWTtFQUNJLG9CQUFBO0FDUWhCOztBREpZO0VBQ0ksc0JBQUE7QUNNaEI7O0FESlk7RUFDSSxlQUFBO0FDTWhCOztBREpZO0VBQ0ksbUJBQUE7VUFBQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTWhCOztBREhRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDS1o7O0FESlk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ01oQjs7QURKWTtFQVRKO0lBVVEsaUJBQUE7RUNPZDtBQUNGOztBRE5ZO0VBWko7SUFhUSxpQkFBQTtFQ1NkO0FBQ0Y7O0FEUlk7RUFmSjtJQWdCUSxpQkFBQTtFQ1dkO0FBQ0Y7O0FEUkk7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7QUNTUjs7QURQSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNTUjs7QURQSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1NSOztBRFJRO0VBYko7SUFjUSxjQUFBO0VDV1Y7QUFDRjs7QURWUTtFQWhCSjtJQWlCUSxjQUFBO0VDYVY7QUFDRjs7QURaUTtFQW5CSjtJQW9CUSxjQUFBO0VDZVY7QUFDRjs7QURiSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2VSOztBRGJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNlUjs7QURiSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDZVI7O0FEYkk7RUFDSSxhQUFBO0FDZVI7O0FEYkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDZVI7O0FEYkk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNlUjs7QURkUTtFQUNJLG1CQUFBO0FDZ0JaOztBRGZZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNpQmhCOztBRGhCZ0I7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDa0JwQjs7QURoQmdCO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ2tCcEI7O0FEaEJnQjtFQUNJO0lBQ0ksY0FBQTtFQ2tCdEI7QUFDRjs7QURoQmdCO0VBQ0k7SUFDSSxVQUFBO0VDa0J0QjtBQUNGOztBRGhCZ0I7RUFDSTtJQUNJLFVBQUE7RUNrQnRCO0FBQ0Y7O0FEaEJnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDa0JwQjs7QURoQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDa0JwQjs7QURoQmdCO0VBQ0ksVUFBQTtBQ2tCcEI7O0FEaEJnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ2tCcEI7O0FEaEJnQjtFQUNJLGVBQUE7QUNrQnBCOztBRGhCZ0I7RUFDSSxTQUFBO0VBQ0Esc0JBQUE7QUNrQnBCOztBRGZZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDaUJoQjs7QURoQmdCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNrQnBCOztBRGJZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNlaEI7O0FEYlk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2VoQjs7QURiWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtBQ2VoQjs7QURiWTtFQUNJLFNBQUE7RUFDQSxvQkFBQTtBQ2VoQjs7QURiWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2VoQjs7QURkZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDZ0JwQjs7QURkZ0I7RUFDSSxZQUFBO0FDZ0JwQjs7QURiWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNlaEI7O0FEYlk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ2VoQjs7QURiWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDZWhCOztBRGRnQjtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDZ0JwQjs7QURiWTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ2VoQjs7QURiWTtFQUVJLGVBQUE7RUFDQSxlQUFBO0FDY2hCOztBRFpZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2NoQjs7QURaWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDY2hCOztBRFpZO0VBQ0ksbUJBQUE7VUFBQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNjaEI7O0FEWlk7RUFDSSxrQkFBQTtBQ2NoQjs7QURaWTtFQUNJO0lBQ0ksY0FBQTtFQ2NsQjtFRFpjO0lBQ0ksa0JBQUE7RUNjbEI7QUFDRjs7QURaWTtFQUNJO0lBQ0ksVUFBQTtFQ2NsQjtFRFpjO0lBQ0ksa0JBQUE7RUNjbEI7QUFDRjs7QURaWTtFQUNJO0lBQ0ksVUFBQTtFQ2NsQjtFRFpjO0lBQ0ksa0JBQUE7RUNjbEI7QUFDRjs7QURUUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ1daOztBRFRRO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ1daOztBRFBZO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNTaEI7O0FEUFk7RUFFSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNRaEI7O0FETlk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUWhCOztBRFBnQjtFQUNJLFlBQUE7QUNTcEI7O0FESkk7RUFDSSxVQUFBO0FDTVI7O0FETFE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNPWjs7QUROWTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDUWhCOztBRExRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ09aOztBRE5ZO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDUWhCOztBRFBnQjtFQUNJLGFBQUE7QUNTcEI7O0FEUGdCO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDU3BCOztBRERnQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNHcEI7O0FERGdCO0VBQ0k7SUFDSSxjQUFBO0VDR3RCO0FBQ0Y7O0FERGdCO0VBQ0k7SUFDSSxVQUFBO0VDR3RCO0FBQ0Y7O0FERGdCO0VBQ0k7SUFDSSxVQUFBO0VDR3RCO0FBQ0Y7O0FERVk7RUFDSSxlQUFBO0FDQWhCOztBREVZO0VBQ0ksWUFBQTtBQ0FoQjs7QURFWTtFQUNJLFlBQUE7QUNBaEI7O0FERVk7RUFDSSxhQUFBO0FDQWhCOztBREVZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FoQjs7QURDZ0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDcEI7O0FERVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0FoQjs7QURFWTtFQUNJLG1CQUFBO1VBQUEsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQWhCOztBREVZO0VBQ0ksa0JBQUE7QUNBaEI7O0FERVk7RUFDSTtJQUNJLGNBQUE7RUNBbEI7RURFYztJQUNJLGtCQUFBO0VDQWxCO0FBQ0Y7O0FERVk7RUFDSTtJQUNJLFVBQUE7RUNBbEI7RURFYztJQUNJLGtCQUFBO0VDQWxCO0FBQ0Y7O0FERVk7RUFDSTtJQUNJLFVBQUE7RUNBbEI7RURFYztJQUNJLGtCQUFBO0VDQWxCO0FBQ0Y7O0FES0E7RUFDSSxvQkFBQTtBQ0ZKOztBREdJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREVRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBWjs7QURHSTtFQUVJLGdCQUFBO0FDRlI7O0FESUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURHUTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNEWjs7QURHUTtFQUNJLGtCQUFBO0FDRFo7O0FER1E7RUFDSTtJQUNJLGNBQUE7RUNEZDtBQUNGOztBREdRO0VBQ0k7SUFDSSxVQUFBO0VDRGQ7QUFDRjs7QURHUTtFQUNJO0lBQ0ksVUFBQTtFQ0RkO0FBQ0Y7O0FER1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RaOztBREdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDRFo7O0FER1E7RUFDSSxvREFBQTtBQ0RaOztBREtRO0VBQ0ksZ0JBQUE7QUNIWjs7QURRSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTFI7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTEo7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUNISjs7QURLQTtFQUNJLFVBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24tY2FyZC10aXRsZXtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5ibG9ja3Mge1xyXG4gICAgLmJhbm5lcl9ibG9jayB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAuYmFubmVyLXNjcm9sbCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MyU7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFubmVyLWdyaWQge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbG9hdGluZy1oZWFkZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zY3JvbGxtZW51IHtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5zY3JvbGxtZW51IGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy9jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmxlZnRfZmxvYXRpbmcge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvL2xlZnQ6IDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50b3BfbGVmdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIH1cclxuICAgIC50b3BfY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50b3BfcmlnaHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAubm9uZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5ibG9jay10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtYmxvY2sge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgLnByb2R1Y3Qtc2Nyb2xsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgLnNjcm9sbGVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHggMTVweCA0cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy9jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJpY2UtcmVndWxhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgLy9jb2xvcjogIzUzNTc2NjsgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDZweCA2cHggNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbG9hdGluZy1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xyXG4gICAgICAgICAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtZ3JpZCB7XHJcbiAgICAgICAgICAgIC53aXNobGlzdC1idXR0b24tZ3JpZDEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjRyZW0gLTVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53aXNobGlzdC1idXR0b24tZ3JpZDIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjRyZW0gLTVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgLy9jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MiU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgLy9jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC1uYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vLXdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZS1kZWxldGUge1xyXG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzUzNTc2NjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA3LjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2UtcmVndWxhciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNy41cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCgybiswKSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoM24rMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCg0biswKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCg1biswKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZsYXNoX3NhbGUge1xyXG4gICAgICAgIC5mbG9hdGluZy1oZWFkZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnRfZmxvYXRpbmcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB0b3A6IDE1JTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbGFzaC1pdGVtLW5hbWUge1xyXG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDRweCA4cHggNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGF5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgLmZsb2F0aW5nLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQzJTtcclxuICAgICAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXRlZ29yeS1zbGlkZXItc2Nyb2xsLCAuY2F0ZWdvcnktc2Nyb2xsIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC5zY3JvbGxtZW51MiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIC5ub25lIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA0cHggMCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhdGVnb3J5LXNsaWRlci1ncmlkLCAuY2F0ZWdvcnktZ3JpZCB7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC1tZCBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubm9uZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87IC8vcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoMm4rMCkge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2w6bnRoLWNoaWxkKDNuKzApIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoNG4rMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoNW4rMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucmVsYXRlZC1wcm9kdWN0cyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5wcmljZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgLy9jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAuc3BlY2lhbC1wcmljZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcclxuICAgICAgICAvL3BhZGRpbmc6IDE2cHggMCAwIDA7IC8vYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDE2cHggMDtcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvcmRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24taGVhZGVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi5zdG9jayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTM5cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5vZmZlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5pbm5lci1zY3JvbGwge1xyXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDY0cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tcmVmcmVzaGVyIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0iLCJhLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY2FyZC1jb250ZW50IC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgLnByaWNlIC5zcGVjaWFsLXByaWNlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmJsb2NrcyAuYmFubmVyX2Jsb2NrIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuLmJsb2NrcyAuYmFubmVyX2Jsb2NrIC5iYW5uZXItc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYmxvY2tzIC5iYW5uZXJfYmxvY2sgLmJhbm5lci1zY3JvbGwgaW1nIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDAgNXB4IDAgNXB4O1xuICB3aWR0aDogNTMlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJsb2NrcyAuYmFubmVyX2Jsb2NrIC5iYW5uZXItc2Nyb2xsIGltZzpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCA1cHggMCAxMHB4O1xufVxuLmJsb2NrcyAuYmFubmVyX2Jsb2NrIC5iYW5uZXItc2Nyb2xsIGltZzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDEwcHggMCA1cHg7XG59XG4uYmxvY2tzIC5iYW5uZXJfYmxvY2sgLmJhbm5lci1ncmlkIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYmxvY2tzIC5iYW5uZXJfYmxvY2sgLmJhbm5lci1ncmlkIC5yb3cudW5saW1pdGVkLWl0ZW1zIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmJsb2NrcyAuYmFubmVyX2Jsb2NrIC5iYW5uZXItZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5ibG9ja3MgLmJhbm5lcl9ibG9jayAuZmxvYXRpbmctaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHotaW5kZXg6IDM7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xufVxuLmJsb2NrcyAuYmFubmVyX2Jsb2NrIC5mbG9hdGluZy1oZWFkZXIgLmJhbm5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9ja3MgLmJhbm5lcl9ibG9jayAuZmxvYXRpbmctaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ibG9ja3MgLmJhbm5lcl9ibG9jayAuZmxvYXRpbmctaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuYmxvY2tzIC5iYW5uZXJfYmxvY2sgLmZsb2F0aW5nLWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gIH1cbn1cbi5ibG9ja3MgLnNjcm9sbG1lbnUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ibG9ja3MgLnNjcm9sbG1lbnUgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmxvY2tzIC5sZWZ0X2Zsb2F0aW5nIHtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB6LWluZGV4OiAtMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2NrcyAubGVmdF9mbG9hdGluZyB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYmxvY2tzIC5sZWZ0X2Zsb2F0aW5nIHtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuYmxvY2tzIC5sZWZ0X2Zsb2F0aW5nIHtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgfVxufVxuLmJsb2NrcyAudG9wX2xlZnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbn1cbi5ibG9ja3MgLnRvcF9jZW50ZXIge1xuICBwYWRkaW5nOiAxNHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJsb2NrcyAudG9wX3JpZ2h0IHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmJsb2NrcyAubm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmxvY2tzIC5ibG9jay10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn1cbi5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3Qtc2Nyb2xsIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3Qtc2Nyb2xsIC5zY3JvbGxlciB7XG4gIHBhZGRpbmc6IDBweCA0cHggMTVweCA0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1zY3JvbGwgLnNjcm9sbGVyIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgLnByb2R1Y3QtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogNDIlO1xuICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgLnByb2R1Y3QtaXRlbSB7XG4gICAgd2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgLnByb2R1Y3QtaXRlbSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgLnByb2R1Y3QtaXRlbSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1zY3JvbGwgLnNjcm9sbGVyIGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgLnByaWNlLXJlZ3VsYXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuc2Nyb2xsZXIgZGVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1zY3JvbGwgLnNjcm9sbGVyIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA2cHggNnB4IDZweDtcbn1cbi5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3Qtc2Nyb2xsIC5mbG9hdGluZy1oZWFkZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LXNjcm9sbCAuZmxvYXRpbmctaGVhZGVyIC5iYW5uZXIge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgLndpc2hsaXN0LWJ1dHRvbi1ncmlkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjRyZW0gLTVweDtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgLndpc2hsaXN0LWJ1dHRvbi1ncmlkMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjRyZW0gLTVweDtcbiAgY29sb3I6ICM0NDQ7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgaW9uLXJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1ncmlkIGlvbi1jb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCA1cHggMCAwO1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1ncmlkIGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgaW9uLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1ncmlkIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgLmNhcmQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1ncmlkIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1ncmlkIC5jYXJkLW5hbWUge1xuICB3aWR0aDogMTQ0cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAuY2FyZC1uYW1lIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vLXdyYXA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgLnByaWNlLWRlbGV0ZSB7XG4gIG1hcmdpbjogMCA3LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJsb2NrcyAucHJvZHVjdC1ibG9jayAucHJvZHVjdC1ncmlkIC5wcmljZS1yZWd1bGFyIHtcbiAgbWFyZ2luOiAwIDcuNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMDtcbn1cbi5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCgybiswKSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgICB3aWR0aDogMzMuMzMzJTtcbiAgfVxuICAuYmxvY2tzIC5wcm9kdWN0LWJsb2NrIC5wcm9kdWN0LWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoM24rMCkge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCg0biswKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5ibG9ja3MgLnByb2R1Y3QtYmxvY2sgLnByb2R1Y3QtZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCg1biswKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG4uYmxvY2tzIC5mbGFzaF9zYWxlIC5mbG9hdGluZy1oZWFkZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZy1sZWZ0OiA0NSUgIWltcG9ydGFudDtcbn1cbi5ibG9ja3MgLmZsYXNoX3NhbGUgLmxlZnRfZmxvYXRpbmcge1xuICBwYWRkaW5nOiAwO1xuICB0b3A6IDE1JTtcbiAgbWF4LXdpZHRoOiA0OCU7XG4gIHdpZHRoOiA0OCU7XG59XG4uYmxvY2tzIC5mbGFzaF9zYWxlIC5mbGFzaC1pdGVtLW5hbWUgaDIge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5ibG9ja3MgLmZsYXNoX3NhbGUgLmZsYXNoLWl0ZW0tbmFtZSBoNCB7XG4gIHBhZGRpbmc6IDRweCA0cHggOHB4IDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ibG9ja3MgLmZsYXNoX3NhbGUgLmZsYXNoLWl0ZW0tbmFtZSAuZGF5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMjVweDtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICBtYXgtd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWluLWhlaWdodDogMjVweDtcbiAgbWF4LWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmxvY2tzIC5mbGFzaF9zYWxlIC5mbGFzaC1pdGVtLW5hbWUgLmRheSBzcGFuIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJsb2NrcyAuY2F0ZWdvcnkge1xuICB6LWluZGV4OiAwO1xufVxuLmJsb2NrcyAuY2F0ZWdvcnkgLmZsb2F0aW5nLWhlYWRlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAzO1xuICBwYWRkaW5nLWxlZnQ6IDQzJTtcbn1cbi5ibG9ja3MgLmNhdGVnb3J5IC5mbG9hdGluZy1oZWFkZXIgLmJhbm5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zbGlkZXItc2Nyb2xsLCAuYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG59XG4uYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLXNjcm9sbCAuc2Nyb2xsbWVudTIsIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zY3JvbGwgLnNjcm9sbG1lbnUyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLXNjcm9sbCAuc2Nyb2xsbWVudTIgLm5vbmUsIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zY3JvbGwgLnNjcm9sbG1lbnUyIC5ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zbGlkZXItc2Nyb2xsIC5zY3JvbGxtZW51MiBoNSwgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNjcm9sbCAuc2Nyb2xsbWVudTIgaDUge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweCA0cHggMCA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNsaWRlci1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0sIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICB3aWR0aDogNDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNsaWRlci1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0sIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0ge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNsaWRlci1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0sIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0ge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNsaWRlci1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0sIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zY3JvbGwgLnNjcm9sbG1lbnUyIC5wcm9kdWN0LWl0ZW0ge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbi5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zbGlkZXItZ3JpZCBoNSwgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LWdyaWQgaDUge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLWdyaWQgaW9uLWNhcmQtY29udGVudCwgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LWdyaWQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zbGlkZXItZ3JpZCAuY2FyZC1tZCBpb24tY2FyZC1jb250ZW50LCAuYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktZ3JpZCAuY2FyZC1tZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNsaWRlci1ncmlkIC5ub25lLCAuYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktZ3JpZCAubm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLWdyaWQgaW9uLWNhcmQsIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1ncmlkIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNsaWRlci1ncmlkIGlvbi1jYXJkIGltZywgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LWdyaWQgaW9uLWNhcmQgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMsIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1ncmlkIC5yb3cudW5saW1pdGVkLWl0ZW1zIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCwgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XG4gIGZsZXg6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA1MCU7XG59XG4uYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoMm4rMCksIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1ncmlkIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2w6bnRoLWNoaWxkKDJuKzApIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LXNsaWRlci1ncmlkIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2wsIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1ncmlkIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2wge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICB9XG4gIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zbGlkZXItZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCgzbiswKSwgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoM24rMCkge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zbGlkZXItZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sLCAuYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1zbGlkZXItZ3JpZCAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCg0biswKSwgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoNG4rMCkge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCwgLmJsb2NrcyAuY2F0ZWdvcnkgLmNhdGVnb3J5LWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYmxvY2tzIC5jYXRlZ29yeSAuY2F0ZWdvcnktc2xpZGVyLWdyaWQgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoNW4rMCksIC5ibG9ja3MgLmNhdGVnb3J5IC5jYXRlZ29yeS1ncmlkIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2w6bnRoLWNoaWxkKDVuKzApIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbn1cblxuLnJlbGF0ZWQtcHJvZHVjdHMge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5yZWxhdGVkLXByb2R1Y3RzIC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDE2cHggMCAxNnB4IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Q6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdCB7XG4gICAgd2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0IHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgaW9uLWltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLmJvcmRlciB7XG4gIGJvcmRlcjogMC41NXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCk7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWhlYWRlciBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uc3RvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTZweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTM5cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgaGVpZ2h0OiAxOXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZlciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICB3aWR0aDogMzZweDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlubmVyLXNjcm9sbCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDY0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXJlZnJlc2hlciB7XG4gIHotaW5kZXg6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/firebase-analytics/ngx */
    "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(config, api, splashScreen, platform, translateService, data, settings, product, loadingController, router, navCtrl, route, oneSignal, nativeStorage, firebaseAnalytics) {
        _classCallCheck(this, HomePage);

        this.config = config;
        this.api = api;
        this.splashScreen = splashScreen;
        this.platform = platform;
        this.translateService = translateService;
        this.data = data;
        this.settings = settings;
        this.product = product;
        this.loadingController = loadingController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.oneSignal = oneSignal;
        this.nativeStorage = nativeStorage;
        this.firebaseAnalytics = firebaseAnalytics;
        this.tempProducts = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.screenWidth = 300;
        this.slideOpts = {
          effect: 'flip',
          autoplay: true,
          parallax: true,
          loop: true,
          lazy: true
        };
        this.filter.page = 1;
        this.filter.status = 'publish';
        this.screenWidth = this.platform.width();
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.nativeStorage.getItem('blocks').then(function (data) {
            _this15.data.blocks = data.blocks;
            _this15.data.categories = data.categories;
            _this15.data.mainCategories = _this15.data.categories.filter(function (item) {
              return item.parent == 0;
            });
            _this15.settings.pages = _this15.data.blocks.pages;
            _this15.settings.settings = _this15.data.blocks.settings;
            _this15.settings.dimensions = _this15.data.blocks.dimensions;
            _this15.settings.currency = _this15.data.blocks.settings.currency;
            if (_this15.data.blocks.languages) _this15.settings.languages = Object.keys(_this15.data.blocks.languages).map(function (i) {
              return _this15.data.blocks.languages[i];
            });
            _this15.settings.currencies = _this15.data.blocks.currencies;

            _this15.settings.calc(_this15.platform.width());

            if (_this15.settings.colWidthLatest == 4) _this15.filter.per_page = 15; //this.settings.theme = this.data.blocks.theme;

            _this15.splashScreen.hide();
          }, function (error) {
            return console.error(error);
          });
          this.nativeStorage.getItem('settings').then(function (data) {
            if (data.lang) {
              _this15.config.lang = data.lang;

              _this15.translateService.setDefaultLang(data.lang);

              if (data.lang == 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
              }
            }
          }, function (error) {
            return console.error(error);
          });
          this.getBlocks();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.subscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "getCart",
        value: function getCart() {
          var _this16 = this;

          this.api.postItem('cart').subscribe(function (res) {
            _this16.cart = res;

            _this16.data.updateCart(_this16.cart.cart_contents);

            _this16.data.cartNonce = _this16.cart.cart_nonce;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getBlocks",
        value: function getBlocks() {
          var _this17 = this;

          this.api.postItem('keys').subscribe(function (res) {
            _this17.data.blocks = res;
            if (_this17.data.blocks && _this17.data.blocks.user) _this17.settings.user = _this17.data.blocks.user.data; //this.settings.theme = this.data.blocks.theme;

            _this17.settings.pages = _this17.data.blocks.pages;
            if (_this17.data.blocks.user) _this17.settings.reward = _this17.data.blocks.user.data.points_vlaue;
            if (_this17.data.blocks.languages) _this17.settings.languages = Object.keys(_this17.data.blocks.languages).map(function (i) {
              return _this17.data.blocks.languages[i];
            });
            _this17.settings.currencies = _this17.data.blocks.currencies;
            _this17.settings.settings = _this17.data.blocks.settings;
            _this17.settings.dimensions = _this17.data.blocks.dimensions;
            _this17.settings.currency = _this17.data.blocks.settings.currency;

            if (_this17.data.blocks.categories) {
              _this17.data.categories = _this17.data.blocks.categories.filter(function (item) {
                return item.name != 'Uncategorized';
              });
              _this17.data.mainCategories = _this17.data.categories.filter(function (item) {
                return item.parent == 0;
              });
            }

            _this17.settings.calc(_this17.platform.width());

            if (_this17.settings.colWidthLatest == 4) _this17.filter.per_page = 15;

            _this17.splashScreen.hide();

            _this17.getCart();

            _this17.processOnsignal();

            if (_this17.data.blocks.user) {
              _this17.settings.customer.id = _this17.data.blocks.user.ID;

              if (_this17.data.blocks.user.allcaps.wc_product_vendors_admin_vendor || _this17.data.blocks.user.allcaps.dc_vendor || _this17.data.blocks.user.allcaps.seller || _this17.data.blocks.user.allcaps.wcfm_vendor) {
                _this17.settings.vendor = true;
              }

              if (_this17.data.blocks.user.allcaps.administrator) {
                _this17.settings.administrator = true;
              }
            }

            var _loop2 = function _loop2(item) {
              if (_this17.data.blocks.blocks[item].block_type == 'flash_sale_block') {
                _this17.data.blocks.blocks[item].interval = setInterval(function () {
                  var countDownDate = new Date(_this17.data.blocks.blocks[item].sale_ends).getTime();
                  var now = new Date().getTime();
                  var distance = countDownDate - now;
                  _this17.data.blocks.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  _this17.data.blocks.blocks[item].hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                  _this17.data.blocks.blocks[item].minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                  _this17.data.blocks.blocks[item].seconds = Math.floor(distance % (1000 * 60) / 1000);

                  if (distance < 0) {
                    clearInterval(_this17.data.blocks.blocks[item].interval);
                    _this17.data.blocks.blocks[item].hide = true;
                  }
                }, 1000);
              }
            };

            for (var item in _this17.data.blocks.blocks) {
              var filter;

              _loop2(item);
            }

            if (_this17.data.blocks.settings.show_latest) {
              _this17.data.products = _this17.data.blocks.recentProducts;
            }

            if (_this17.data.blocks.user) {
              _this17.api.postItem('get_wishlist').subscribe(function (res) {
                for (var _item in res) {
                  _this17.settings.wishlist[res[_item].id] = res[_item].id;
                }
              }, function (err) {
                console.log(err);
              });
            }

            _this17.nativeStorage.setItem('blocks', {
              blocks: _this17.data.blocks,
              categories: _this17.data.categories
            }).then(function () {
              return console.log('Stored item!');
            }, function (error) {
              return console.error('Error storing item', error);
            });
            /* Product Addons */


            if (_this17.data.blocks.settings.switchAddons) {
              _this17.api.getAddonsList('product-add-ons').subscribe(function (res) {
                _this17.settings.addons = res;
              });
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "goto",
        value: function goto(item) {
          if (item.description == 'category') this.navCtrl.navigateForward('/tabs/home/products/' + item.url);else if (item.description == 'product') this.navCtrl.navigateForward('/tabs/home/product/' + item.url);else if (item.description == 'post') this.navCtrl.navigateForward('/tabs/home/post/' + item.url);
        }
      }, {
        key: "getProduct",
        value: function getProduct(item) {
          this.product.product = item;
          this.navCtrl.navigateForward('/tabs/home/product/' + item.id);
        }
      }, {
        key: "getSubCategories",
        value: function getSubCategories(id) {
          var results = this.data.categories.filter(function (item) {
            return item.parent === parseInt(id);
          });
          return results;
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          this.navCtrl.navigateForward('/tabs/home/products/' + id);
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this18 = this;

          this.filter.page = this.filter.page + 1;
          this.api.postFlutterItem('products', this.filter).subscribe(function (res) {
            _this18.tempProducts = res;

            _this18.data.products.push.apply(_this18.data.products, _this18.tempProducts);

            event.target.complete();
            if (_this18.tempProducts.length == 0) _this18.hasMoreItems = false;
          }, function (err) {
            event.target.complete();
          });
        }
      }, {
        key: "processOnsignal",
        value: function processOnsignal() {
          var _this19 = this;

          this.oneSignal.startInit(this.data.blocks.settings.onesignal_app_id, this.data.blocks.settings.google_project_id); //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

          this.oneSignal.handleNotificationReceived().subscribe(function () {//do something when notification is received
          });
          this.oneSignal.handleNotificationOpened().subscribe(function (result) {
            if (result.notification.payload.additionalData.category) {
              _this19.navCtrl.navigateForward('/tabs/home/products/' + result.notification.payload.additionalData.category);
            } else if (result.notification.payload.additionalData.product) {
              _this19.navCtrl.navigateForward('/tabs/home/product/' + result.notification.payload.additionalData.product);
            } else if (result.notification.payload.additionalData.post) {
              _this19.navCtrl.navigateForward('/tabs/home/post/' + result.notification.payload.additionalData.post);
            } else if (result.notification.payload.additionalData.order) {
              _this19.navCtrl.navigateForward('/tabs/account/orders/order/' + result.notification.payload.additionalData.order);
            }
          });
          this.oneSignal.endInit();
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.filter.page = 1;
          this.getBlocks();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "getHeight",
        value: function getHeight(child) {
          return child.height * this.screenWidth / child.width;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _config__WEBPACK_IMPORTED_MODULE_11__["Config"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"]
      }, {
        type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseAnalytics"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_11__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseAnalytics"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/pipes/datepipe.ts":
  /*!***********************************!*\
    !*** ./src/app/pipes/datepipe.ts ***!
    \***********************************/

  /*! exports provided: DatePipe */

  /***/
  function srcAppPipesDatepipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePipe", function () {
      return DatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DatePipe =
    /*#__PURE__*/
    function () {
      function DatePipe() {
        _classCallCheck(this, DatePipe);
      }

      _createClass(DatePipe, [{
        key: "transform",
        value: function transform(value, args) {
          var now = new Date().getTime();
          var time = new Date(value.replace(/\s/, 'T')).getTime();
          var seconds = Math.floor((now - time) / 1000);

          if (seconds < 60) {
            return 'just now';
          } else if (seconds < 120) {
            // sent in last minute
            return Math.floor(seconds / 60) + ' minute ago';
          } else if (seconds < 3600) {
            // sent in last minute
            return Math.floor(seconds / 60) + ' minutes ago';
          } else if (seconds < 7200) {
            // sent in last hour
            return Math.floor(seconds / 3600) + ' hour ago';
          } else if (seconds < 86400) {
            // sent in last hour
            return Math.floor(seconds / 3600) + ' hours ago';
          } else if (seconds < 172800) {
            // sent more than one day ago
            return Math.floor(seconds / 86400) + ' day ago';
          } else if (seconds < 2592000) {
            // sent more than one day ago
            return Math.floor(seconds / 86400) + ' days ago';
          } else if (seconds < 5184000) {
            // sent more than one day ago
            return Math.floor(seconds / 2592000) + ' month ago';
          } else if (seconds < 31104000) {
            // sent more than one day ago
            return Math.floor(seconds / 2592000) + ' months ago';
          } else if (seconds < 62208000) {
            // sent more than one day ago
            return Math.floor(seconds / 31104000) + ' year ago';
          } else return Math.floor(seconds / 31104000) + ' years ago';
        }
      }]);

      return DatePipe;
    }();

    DatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'datepipe'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DatePipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipe.module.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/pipe.module.ts ***!
    \**************************************/

  /*! exports provided: KeysPipeModule */

  /***/
  function srcAppPipesPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeysPipeModule", function () {
      return KeysPipeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pipe */
    "./src/app/pipes/pipe.ts");
    /* harmony import */


    var _datepipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./datepipe */
    "./src/app/pipes/datepipe.ts");

    var KeysPipeModule = function KeysPipeModule() {
      _classCallCheck(this, KeysPipeModule);
    };

    KeysPipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pipe__WEBPACK_IMPORTED_MODULE_2__["KeysPipe"], _datepipe__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      exports: [_pipe__WEBPACK_IMPORTED_MODULE_2__["KeysPipe"], _datepipe__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
    })], KeysPipeModule);
    /***/
  },

  /***/
  "./src/app/pipes/pipe.ts":
  /*!*******************************!*\
    !*** ./src/app/pipes/pipe.ts ***!
    \*******************************/

  /*! exports provided: KeysPipe */

  /***/
  function srcAppPipesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeysPipe", function () {
      return KeysPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KeysPipe =
    /*#__PURE__*/
    function () {
      function KeysPipe() {
        _classCallCheck(this, KeysPipe);
      }

      _createClass(KeysPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var keys = [];

          for (var key in value) {
            keys.push({
              key: key,
              value: value[key]
            });
          }

          return keys;
        }
      }]);

      return KeysPipe;
    }();

    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'keys'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], KeysPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\wootop\WooToop-AppAndroid\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map