function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n    <ion-toolbar>      \r\n      <ion-title>{{\"Account\" | translate}}</ion-title>\r\n    </ion-toolbar>\r\n    <!--ion-grid class=\"my-account-header\">\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item color=\"transperant\" lines=\"none\">\r\n                    <ion-icon class=\"icon-header-icon ion-margin-end\" name=\"person\" slot=\"start\"></ion-icon>\r\n                    <ion-label class=\"account-name\">{{\"Account\" | translate}}</ion-label>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"header-menus\" justify-content-between=\"\">\r\n            <ion-col>\r\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wishlist')\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\r\n                    <ion-icon class=\"ion-margin-end\" name=\"heart\" slot=\"start\"></ion-icon>\r\n                    <ion-label>{{\"Wishlist\" | translate}}</ion-label>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wallet')\" *ngIf=\"settings.customer?.id && settings.settings?.enable_wallet\" class=\"ion-activatable\">\r\n                    <ion-icon class=\"ion-margin-end\" name=\"wallet\" slot=\"start\"></ion-icon>\r\n                    <ion-label>{{\"Wallet\" | translate}}</ion-label>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid-->\r\n</ion-header>\r\n<ion-content>\r\n\r\n      <ion-header mode=\"ios\" collapse=\"condense\">              \r\n        <ion-toolbar>      \r\n          <ion-title size=\"large\">{{\"Account\" | translate}}</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n    <ion-list>\r\n        \r\n        <ion-item (click)=\"goTo('tabs/account/wallet')\" *ngIf=\"settings.customer?.id && settings.settings?.enable_wallet\"  detail=\"true\" lines=\"inset\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"wallet\" mode=\"md\" slot=\"start\"></ion-icon>\r\n              <ion-label>{{\"Wallet\" | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item (click)=\"goTo('tabs/account/wishlist')\" *ngIf=\"settings.customer?.id\" detail=\"true\" lines=\"inset\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-success, #2dd36f); color: white\" class=\"icon-start ion-margin-end\" name=\"heart\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Wishlist\" | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item (click)=\"goTo('tabs/account/login')\" detail=\"true\" lines=\"inset\" *ngIf=\"!settings.customer?.id\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"log-in\" mode=\"md\" slot=\"start\"></ion-icon>\r\n              <ion-label>{{\"Login\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"goTo('tabs/account/register')\" detail=\"true\" lines=\"inset\" *ngIf=\"!settings.customer?.id\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-success, #2dd36f); color: white\" class=\"icon-start ion-margin-end\" name=\"person\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Register\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"goTo('tabs/account/points')\" detail=\"true\" lines=\"inset\" *ngIf=\"settings.reward\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"card\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Points\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"goTo('tabs/account/address')\" detail=\"true\" lines=\"inset\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-secondary, #3dc2ff); color: white\" class=\"icon-start ion-margin-end\" name=\"location\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Address\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"goTo('tabs/account/orders')\" detail=\"true\" lines=\"inset\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Orders\" | translate}}</ion-label>\r\n        </ion-item>\r\n       <ion-item lines=\"inset\" class=\"ion-activatable\" href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\" detail=\"true\">\r\n            <ion-icon style=\"background-color: var(--ion-color-success, #2dd36f); color: white\" class=\"icon-start ion-margin-end\" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Whatsapp us\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"email(settings?.settings?.support_email)\" detail=\"true\"  *ngIf=\"settings?.settings?.support_email\" lines=\"inset\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-secondary, #3dc2ff); color: white\" class=\"icon-start ion-margin-end\" name=\"mail\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Email us\" | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/map')\" detail=\"true\"  class=\"ion-activatable\" *ngIf=\"settings.settings?.switchLocations\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"compass\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Locations\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"inset\" class=\"ion-activatable\" detail=\"true\"  (click)=\"shareApp()\">\r\n            <ion-icon style=\"background-color: var(--ion-color-secondary, #3dc2ff); color: white\" class=\"icon-start ion-margin-end\" name=\"share\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Invite Friends\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"inset\" class=\"ion-activatable\" detail=\"true\"  (click)=\"rateApp()\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #428xff); color: white\" class=\"icon-start ion-margin-end\" name=\"star\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Rate us\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/blogs')\" detail=\"true\"  lines=\"inset\" class=\"ion-activatable\">\r\n          <ion-icon style=\"background-color: var(--ion-color-primary, #428xff); color: white\" class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{\"Blog\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"settings.languages?.length\" detail=\"true\"  lines=\"inset\" (click)=\"goTo('tabs/account/setting')\" lines=\"inset\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"globe\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Language\" | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"settings.currencies?.length\" detail=\"true\"  lines=\"inset\" (click)=\"goTo('tabs/account/currencies')\" lines=\"inset\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-secondary, #3dc2ff); color: white\" class=\"icon-start ion-margin-end\" name=\"logo-usd\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Currency\" | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let page of settings.pages\" lines=\"inset\" [hidden]=\"!page.url\" (click)=\"goTo('/tabs/account/post/'+page.url)\" detail=\"true\"  lines=\"inset\" class=\"ion-activatable\">\r\n            <ion-icon style=\"background-color: var(--ion-color-secondary, #428xff); color: white\" class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{page.title}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item detail=\"true\"  lines=\"inset\" class=\"ion-activatable\" (click)=\"log_out()\" *ngIf=\"settings.customer?.id\">\r\n            <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"log-out\" mode=\"md\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{\"Logout\" | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-activatable\">\r\n          <ion-icon style=\"background-color: var(--ion-color-primary, #428xff); color: white\" class=\"icon-start ion-margin-end\" slot=\"start\" name=\"moon\" mode=\"md\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            {{\"Dark Theme\" | translate}}\r\n          </ion-label>\r\n          <ion-toggle id=\"themeToggle\" slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    <br/>\r\n      \r\n    <div *ngIf=\"settings.vendor || settings.administrator\">\r\n      <ion-list-header>\r\n        <ion-label>{{\"Vendor\" | translate}}</ion-label>\r\n      </ion-list-header>\r\n      <ion-list>\r\n      <ion-item detail=\"true\" lines=\"inset\" (click)=\"goTo('tabs/account/vendor-orders')\" class=\"ion-activatable\">\r\n        <ion-icon style=\"background-color: var(--ion-color-success, #2dd36f); color: white\" class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{\"Orders\" | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item detail=\"true\" lines=\"inset\" (click)=\"goTo('tabs/account/vendor-products')\" class=\"ion-activatable\">\r\n        <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{\"Products\" | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item detail=\"true\" lines=\"inset\" (click)=\"goTo('tabs/account/add-products')\" class=\"ion-activatable\">\r\n        <ion-icon style=\"background-color: var(--ion-color-danger, #eb445a); color: white\" class=\"icon-start ion-margin-end\" name=\"add-circle\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{\"Add Products\" | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Address\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<div *ngIf=\"settings.customer\">\r\n\t<ion-list-header>\r\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item detail (click)=\"editAddress()\">\r\n    <ion-label text-wrap>\r\n    <p>\r\n    <span>{{settings.customer.billing.first_name}}</span>&nbsp;<span>{{settings.customer.billing.last_name}}</span>&nbsp;<span>{{settings.customer.billing.company}}</span>&nbsp;<span>{{settings.customer.billing.address_1}}</span>&nbsp;<span>{{settings.customer.billing.address_2}}</span>&nbsp;<span>{{settings.customer.billing.city}}</span>\r\n    <span>{{settings.customer.billing.state}}</span>&nbsp;<span>{{settings.customer.billing.postcode}}</span>&nbsp;<span>{{settings.customer.billing.country}}</span>\r\n    &nbsp;<span>{{settings.customer.billing.email}}</span>&nbsp;<span>{{settings.customer.billing.phone}}</span>\r\n    </p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item detail (click)=\"editAddress()\">\r\n    <ion-label text-wrap>\r\n      <p>\r\n    <span>{{settings.customer.shipping.first_name}}</span>&nbsp;<span>{{settings.customer.shipping.last_name}}</span>&nbsp;<span>{{settings.customer.shipping.company}}</span>&nbsp;<span>{{settings.customer.shipping.address_1}}</span>&nbsp;<span>{{settings.customer.shipping.address_2}}</span>&nbsp;<span>{{settings.customer.shipping.city}}</span>&nbsp;\r\n    <span>{{settings.customer.shipping.state}}</span>&nbsp;<span>{{settings.customer.shipping.postcode}}</span>&nbsp;<span>{{settings.customer.shipping.country}}</span>&nbsp;\r\n    <span>{{settings.customer.shipping.email}}</span>&nbsp;<span>{{settings.customer.shipping.phone}}</span>\r\n  </p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blog/blog.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/blog/blog.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountBlogBlogPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/blogs\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"post.post?.title?.rendered\">{{post.post.title.rendered}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"post\">\r\n<div class=\"spinner\" *ngIf=\"!post.post\"><ion-spinner> </ion-spinner></div>\r\n<div *ngIf=\"post.post\">\r\n<ion-card>\r\n  <div *ngIf=\"post.post._embedded && post.post._embedded['wp:featuredmedia'] && post.post._embedded['wp:featuredmedia'].length\">\r\n    <ion-img alt=\"\" src=\"{{post.post._embedded['wp:featuredmedia'][0].source_url}}\"></ion-img>\r\n  </div>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>{{post.post.date | datepipe}}</ion-card-subtitle>\r\n    <ion-card-title>{{post.post.title.rendered}}</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content [innerHTML]=\"post.post.content.rendered\">\r\n  </ion-card-content>\r\n</ion-card>\r\n</div>\r\n\r\n<div *ngFor=\"let item of comments\" class=\"comments\">\r\n<ion-item lines=\"none\">\r\n  <ion-avatar slot=\"start\">\r\n    <ion-img [src]=\"item.author_avatar_urls['96']\"></ion-img>\r\n    <!--ion-icon color=\"medium\" name=\"person\" mode=\"ios\"></ion-icon-->\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2>{{item.author_name}}</h2>\r\n  <p>{{item.date | datepipe}}</p>\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item><ion-label><p text-wrap [innerHTML]=\"item.content.rendered\"></p></ion-label></ion-item>\r\n</div>\r\n\r\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && comments?.length\" (ionInfinite)=\"getMoreComments($event)\">\r\n  <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blogs/blogs.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/blogs/blogs.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountBlogsBlogsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios' >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Blogs\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"blogs\">\r\n\r\n<div class=\"spinner\" *ngIf=\"!posts\"><ion-spinner> </ion-spinner></div>\r\n\r\n<div *ngIf=\"posts\">\r\n<div *ngIf=\"posts.length == 0\" text-center class=\"empty\">\r\n  <ion-icon name=\"document\"></ion-icon>\r\n</div>\r\n\r\n\r\n<ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable {{settings.settings.product_shadow}}\" *ngFor=\"let post of posts\" (click)=\"getDetail(post)\">\r\n  <div *ngIf=\"post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length\">\r\n    <ion-img alt=\"\" src=\"{{post._embedded['wp:featuredmedia'][0].source_url}}\"></ion-img>\r\n  </div>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>{{post.date | datepipe}}</ion-card-subtitle>\r\n    <ion-card-title>{{post.title.rendered}}</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content [innerHTML]=\"post.excerpt.rendered\">\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && posts.length\" (ionInfinite)=\"loadData($event)\">\r\n  <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/currencies/currencies.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/currencies/currencies.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountCurrenciesCurrenciesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n   <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n      <ion-title>{{\"Currency\" | translate}}</ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"settings\">\r\n   <div *ngIf=\"settings.currencies.length\">\r\n      <ion-list >\r\n         <ion-radio-group [(ngModel)]=\"settings.currency\" name=\"currencies\" ngDefaultControl>\r\n         <ion-item *ngFor=\"let item of settings.currencies\">\r\n            <ion-label class=\"payment-method-title\"><span style=\"padding: 10px\">{{item.code}}</span></ion-label>\r\n            <ion-radio value=\"{{item.code}}\"> </ion-radio>\r\n         </ion-item>\r\n         </ion-radio-group>\r\n         <ion-button shape=\"undefined\" mode=\"md\" padding color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"applyCurrency()\" >{{\"Apply\" | translate}}</ion-button>\r\n      </ion-list>\r\n   </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/edit-address/edit-address.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/edit-address/edit-address.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountEditAddressEditAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/address\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Edit Address\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\t<ion-list no-margin *ngIf=\"settings.customer?.billing\">\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.first_name\" name=\"firstname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.last_name\" name=\"lastname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Phone\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.phone\" name=\"telephone\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.company\" name=\"company\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} P.O. box, etc.</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.address_1\" name=\"address_1\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2, Apartment, Suite, Unit etc. (optional)</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.address_2\" name=\"address_2\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Email\" | translate}}</ion-label>\r\n            <ion-input required type=\"email\" [(ngModel)]=\"settings.customer.billing.email\" name=\"email\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"City\" | translate}}/ Town/ Village</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.city\" name=\"city\"> </ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}/ ZIP</ion-label>\r\n            <ion-input required type=\"number\" [(ngModel)]=\"settings.customer.billing.postcode\" name=\"postcode\"> </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"countries && countries.length > 1\">\r\n            <ion-label>{{\"Country\" | translate}}</ion-label>\r\n            <ion-select [(ngModel)]=\"settings.customer.billing.country\" (ngModelChange)=\"getBillingRegion()\" name=\"billing_country\">\r\n                <div *ngFor=\"let field of countries\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"billingStates?.regions.length\">\r\n            <ion-label>{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-select [(ngModel)]=\"settings.customer.billing.state\" name=\"billing_state\">\r\n                <div *ngFor=\"let field of billingStates.regions\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"!billingStates?.regions.length\">\r\n            <ion-label position=\"stacked\">{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.state\" name=\"billing_state\"> </ion-input>\r\n        </ion-item>\r\n\r\n\r\n</ion-list>\r\n\r\n\r\n<ion-list no-margin *ngIf=\"settings.customer?.shipping\">\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.first_name\" name=\"firstname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.last_name\" name=\"lastname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.company\" name=\"company\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}, P.O. box, etc.</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.address_1\" name=\"address_1\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2, Apartment, Suite, Unit etc. (optional)</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.address_2\" name=\"address_2\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"City\" | translate}}/ Town/ Village</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.city\" name=\"city\"> </ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}/ ZIP</ion-label>\r\n            <ion-input required type=\"number\" [(ngModel)]=\"settings.customer.shipping.postcode\" name=\"postcode\"> </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"countries && countries.length > 1\">\r\n            <ion-label>{{\"Country\" | translate}}</ion-label>\r\n            <ion-select [(ngModel)]=\"settings.customer.shipping.country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping_country\">\r\n                <div *ngFor=\"let field of countries\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"shippingStates?.regions.length\">\r\n            <ion-label>{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-select [(ngModel)]=\"settings.customer.shipping.state\" name=\"shipping_state\">\r\n                <div *ngFor=\"let field of shippingStates.regions\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"!shippingStates?.regions.length\">\r\n            <ion-label position=\"stacked\">{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.state\" name=\"shipping_state\"> </ion-input>\r\n        </ion-item>\r\n\r\n</ion-list>\r\n\r\n\r\n<ion-button *ngIf=\"settings.customer\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"processAddress()\" [disabled]=\"disableButton\" fill=\"solid\">{{\"Save\" | translate}}</ion-button>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgotten/forgotten.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgotten/forgotten.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountForgottenForgottenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Forgotten\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"forgotten\">\r\n<div class=\"form\">  \r\n<ion-list *ngIf=\"!status.status\">\r\n  <form [formGroup]=\"email\">\r\n  <ion-item>\r\n  <ion-input required type=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\r\n  </ion-item>\r\n</form>\r\n</ion-list>\r\n\r\n <ion-button *ngIf=\"!status.status\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"forgotten()\" [disabled]=\"!email.valid || disableSubmit\" fill=\"solid\">{{\"Send OTP\" | translate}}</ion-button>\r\n\r\n<ion-list *ngIf=\"status.status\">\r\n    <form [formGroup]=\"form\">\r\n  <ion-item>\r\n  <ion-input required type=\"number\" formControlName=\"otp\" placeholder=\"OTP\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-input required type=\"password\" formControlName=\"password\" placeholder=\"New Password\"></ion-input>\r\n  </ion-item>\r\n</form>\r\n</ion-list>\r\n\r\n <ion-button *ngIf=\"status.status\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"resetPassword()\" [disabled]=\"!form.valid || disableSubmit\" fill=\"solid\">{{\"Reset Password\" | translate}}</ion-button>\r\n\r\n\r\n <ion-item *ngIf=\"status?.status\" lines=\"none\">\r\n <ion-label text-center text-wrap [ngClass]=\"status.status?'success':'error'\">{{status.message}}</ion-label>\r\n</ion-item>\r\n</div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Login\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  <!-- Top header image. uncomment if not using background image in scss file -->\r\n  <!--div class=\"login-logo\">\r\n    <img src=\"assets/image/login_logo2.jpg\">\r\n  </div-->\r\n\r\n<!-- Login Form 1 -->\r\n<div class=\"login1\">\r\n  <ion-card mode=\"{{settings.settings.mode}}\">\r\n  <div class=\"form\">\r\n        <p><ion-text color=\"medium\">-- {{\"continue with\" | translate}} --</ion-text></p>\r\n        <ion-grid>\r\n        <ion-row>\r\n        <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"solid\" color=\"google\" (click)=\"googleLogin()\" [disabled]=\"googleLogingInn\">\r\n        <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>{{\"Google\"| translate}}</ion-button>\r\n        <br/>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"solid\" color=\"facebook\" (click)=\"facebookLogin()\" [disabled]=\"facebookLogingInn\">\r\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>{{\"Facebook\"| translate}}</ion-button>\r\n        </ion-col>\r\n        </ion-row>\r\n\r\n        <!--ion-row>\r\n          <ion-col size=\"12\">\r\n          <ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"solid\" color=\"apple\" (click)=\"appleLogin()\" [disabled]=\"appleLogingInn\">\r\n          <ion-icon slot=\"start\" name=\"logo-apple\"></ion-icon>{{\"Apple\"| translate}}</ion-button>\r\n          </ion-col>\r\n    \r\n          </ion-row-->\r\n        </ion-grid>\r\n\r\n        <p><ion-text color=\"medium\">-- {{\"or use email address\" | translate}} --</ion-text></p>\r\n        <ion-list>\r\n        <form [formGroup]=\"form\">\r\n          <ion-item mode=\"md\">\r\n          <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\r\n          <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Email/Username\"></ion-input>\r\n          </ion-item>\r\n          <ion-item mode=\"md\">\r\n          <ion-icon slot=\"start\" name=\"key\" mode=\"md\"></ion-icon>\r\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\r\n          </ion-item>\r\n         </form>\r\n        </ion-list>\r\n        <ion-button shape=\"undefined\" fill=\"solid\" color=\"{{settings.theme.button}}\" expand=\"block\" [disabled]=\"disableSubmit\" (click)=\"onSubmit()\">{{\"Login\"| translate}}</ion-button>\r\n        <ion-button color=\"{{settings.theme.button}}\" expand=\"full\" fill=\"clear\" (click)=\"forgotton()\">{{\"Forgot Password\"| translate}}?</ion-button>\r\n        <br/>\r\n        <div class=\"errors\" *ngIf=\"errors\">\r\n          <div *ngFor=\"let error of errors | keys\" style=\"text-align: center; padding-top: 10px;\">\r\n            <ion-label color=\"danger\" [innerHTML]=\"error.value\"></ion-label>\r\n          </div>\r\n        </div>\r\n  </div>\r\n  </ion-card>\r\n</div>\r\n\r\n<!-- Login Form 2 -->\r\n<!--div class=\"login1\">\r\n  <ion-card mode=\"{{settings.settings.mode}}\">\r\n  <div class=\"form\"> \r\n        <ion-list>\r\n        <form [formGroup]=\"form\">\r\n\r\n          <p><ion-text color=\"medium\">-- {{\"continue with\" | translate}} --</ion-text></p>\r\n          <ion-grid>\r\n          <ion-row>\r\n          <ion-col size=\"6\">\r\n          <ion-button expand=\"full\" shape=\"round\" mode=\"ios\" fill=\"outline\" color=\"google\" (click)=\"googleLogin()\" [disabled]=\"googleLogingInn\">\r\n          <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>{{\"Google\"| translate}}</ion-button>\r\n          <br/>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n          <ion-button expand=\"full\" shape=\"round\" mode=\"ios\" fill=\"outline\" color=\"facebook\" (click)=\"facebookLogin()\" [disabled]=\"facebookLogingInn\">\r\n          <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>{{\"Facebook\"| translate}}</ion-button>\r\n          </ion-col>\r\n          </ion-row>\r\n          </ion-grid>\r\n          <p><ion-text color=\"medium\">-- {{\"or use email address\" | translate}} --</ion-text></p>\r\n\r\n          <ion-item mode=\"md\">\r\n          <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\r\n          <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\"></ion-input>\r\n          </ion-item>\r\n          <ion-item mode=\"md\">\r\n          <ion-icon slot=\"start\" name=\"key\" mode=\"md\"></ion-icon>\r\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\r\n          </ion-item>\r\n         </form>  \r\n        </ion-list>\r\n        <ion-button shape=\"round\" mode=\"ios\" fill=\"solid\" color=\"{{settings.theme.button}}\" expand=\"full\" [disabled]=\"disableSubmit\" (click)=\"onSubmit()\">{{\"Login\"| translate}}</ion-button>\r\n        <ion-button color=\"{{settings.theme.button}}\" expand=\"full\" fill=\"clear\" (click)=\"forgotton()\">{{\"Forgot Password\"| translate}}?</ion-button>\r\n        <br/>\r\n        <br/>\r\n        <div class=\"errors\" *ngIf=\"errors\">\r\n          <div *ngFor=\"let error of errors | keys\">\r\n            <span [innerHTML]=\"error.value\"></span>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</ion-card>\r\n</div-->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/map/map.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/map/map.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountMapMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Locations\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapCanvas class=\"map-canvas\"></div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountOrderOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/orders\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Order\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"order\">\r\n<ion-list *ngIf=\"order\">\r\n  <ion-list-header>\r\n    <ion-label style=\"font-weight: 900;\">{{order.number}} - <span style=\"text-transform: uppercase;\">{{order.status}}</span></ion-label>\r\n  </ion-list-header>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Date\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n  <ion-item lines=\"full\">\r\n    <ion-label text-wrap>\r\n      <p>{{order.date_created | date:'MMM d, y hh:mm a'}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n  <ion-item lines=\"full\">\r\n    <ion-label text-wrap>\r\n      <p>\r\n    <span>{{order.billing.first_name}}</span>&nbsp;<span>{{order.billing.last_name}}</span>&nbsp;<span>{{order.billing.company}}</span>&nbsp;<span>{{order.billing.address_1}}</span>&nbsp;<span>{{order.billing.address_2}}</span>&nbsp;<span>{{order.billing.city}}</span>\r\n    <span>{{order.billing.state}}</span>&nbsp;<span>{{order.billing.postcode}}</span>&nbsp;<span>{{order.billing.country}}</span>\r\n    &nbsp;<span>{{order.billing.email}}</span>&nbsp;<span>{{order.billing.phone}}</span>\r\n  </p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n  <ion-item lines=\"full\">\r\n    <ion-label text-wrap>\r\n      <p>\r\n    <span>{{order.shipping.first_name}}</span>&nbsp;<span>{{order.shipping.last_name}}</span>&nbsp;<span>{{order.shipping.company}}</span>&nbsp;<span>{{order.shipping.address_1}}</span>&nbsp;<span>{{order.shipping.address_2}}</span>&nbsp;<span>{{order.shipping.city}}</span>&nbsp;\r\n    <span>{{order.shipping.state}}</span>&nbsp;<span>{{order.shipping.postcode}}</span>&nbsp;<span>{{order.shipping.country}}</span>&nbsp;\r\n    <span>{{order.shipping.email}}</span>&nbsp;<span>{{order.shipping.phone}}</span>\r\n  </p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Method\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n  <ion-item lines=\"full\">\r\n    <ion-label text-wrap *ngFor=\"let item of order.shipping_lines | keys\">\r\n    <p>{{item.value.method_title}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Payment Method\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n  <ion-item lines=\"full\">\r\n    <ion-label text-wrap>\r\n    <p [innerHTML]=\"order.payment_method_title\"></p>\r\n    </ion-label>\r\n      <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" fill=\"clear\" *ngIf=\"(order.status != 'refunded' || order.status != 'cancelled' || order.status != 'failed') && settings.settings?.enable_refund\" (click)=\"showField()\" [disabled]=\"disableRefundButton\">\r\n        {{\"Refund\" | translate}}\r\n      </ion-button>\r\n      <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" fill=\"clear\" *ngIf=\"order.status == 'refunded' && settings.settings?.enable_refund\" disabled>\r\n        {{\"Refunded\" | translate}}\r\n      </ion-button>\r\n  </ion-item>\r\n  <div *ngIf=\"showRefund\">\r\n    <ion-item lines=\"none\">\r\n        <ion-input required type=\"text\" [(ngModel)]=\"refund.ywcars_form_reason\" name=\"amount\" placeholder=\"Reason for refund\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" color=\"{{settings.theme.button}}\" (click)=\"requestRefund()\">Request refund</ion-button>\r\n</div>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Items\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n  <ion-item lines=\"full\">\r\n    <ion-label text-wrap>\r\n    <p *ngFor=\"let item of order.line_items\">{{item.name}} <span *ngFor=\"let meta of item.meta_data\">{{meta.value}} </span> x {{item.quantity}} <span style=\"float: right\">{{item.total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Totals\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n  <ion-item lines=\"full\">\r\n    <ion-label text-wrap>\r\n    <p>{{\"Shipping\" | translate}}<span style=\"float: right\">{{order.shipping_total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\r\n    <p>{{\"Discount\" | translate}}<span style=\"float: right\">{{order.discount_total | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\r\n    <p>{{\"Tax\" | translate}}<span style=\"float: right\">{{order.total_tax | currency:settings.currency:'symbol':'1.2-2'}}</span></p>\r\n    <ion-label class=\"grand-total\">Total<span style=\"float: right\">{{order.total | currency:settings.currency:'symbol':'1.2-2'}}</span></ion-label>\r\n  </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/orders/orders.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/orders/orders.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Orders\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"orders\">\r\n\r\n<div class=\"spinner\" *ngIf=\"!orders\"><ion-spinner> </ion-spinner></div>\r\n\r\n<div *ngIf=\"orders\">\r\n<div *ngIf=\"orders.length == 0\" text-center class=\"empty\">\r\n  <ion-icon name=\"document\"></ion-icon>\r\n</div>\r\n\r\n  <ion-card *ngFor=\"let item of orders\" (click)=\"getDetail(item)\" class=\"ion-activatable ion-focusable {{settings.settings.product_shadow}}\" mode=\"{{settings.settings.mode}}\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>{{item.number}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\r\n      <ion-card-title>{{item.total | currency:settings.currency:'symbol':'1.2-2'}}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\r\n      <p [innerHTML]=\"item.payment_method_title\"></p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\t<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && orders.length\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n\t</ion-infinite-scroll>\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/points/points.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/points/points.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountPointsPointsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Points\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n      <div class=\"spinner\" *ngIf=\"!points.points\"><ion-spinner> </ion-spinner></div>\r\n      <ion-list *ngIf=\"points.points\">\r\n        <ion-item lines=\"none\" *ngIf=\"settings.reward == ''\">\r\n          <ion-label text-wrap>{{\"You currently have no loyalty points. Place a order with us today to start earning loyalty points.\" | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n          <ion-label class=\"bold\">{{\"Points\" | translate}} - {{points.points}} ({{1*points.points_vlaue | currency:settings.currency:'symbol':'1.2-2'}})</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list>\r\n      <ion-item *ngFor=\"let item of points.items\">\r\n        <ion-label text-wrap>\r\n          <ion-text>\r\n            <h3>{{item.description}}</h3>\r\n          </ion-text>\r\n          <ion-text>\r\n            <p>{{item.date | date:'MMM d, y hh:mm a'}}</p>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-text slot=\"end\"><p>{{item.points}}</p></ion-text>\r\n      </ion-item>\r\n      </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Register\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n    <!-- Top header image. uncomment if not using background image in scss file -->\r\n  <!--div class=\"login-logo\">\r\n    <img src=\"assets/image/login_logo2.jpg\">\r\n  </div-->\r\n\r\n<!-- Login Form 1 -->\r\n<div class=\"login1\">\r\n \r\n<div class=\"form\">\r\n\r\n\r\n<ion-list>\r\n  <form [formGroup]=\"form\">\r\n  <ion-item>\r\n  <ion-input required type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-input required type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-input required type=\"text\" formControlName=\"phone\" placeholder=\"Phone\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-input required type=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-input required type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\r\n  </ion-item>\r\n</form>\r\n</ion-list>\r\n <ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" [disabled]=\"!form.valid || disableSubmit\" (click)=\"onSubmit()\">{{\"Register\" | translate}}</ion-button>\r\n\r\n <!--ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"clear\" color=\"facebook\" (click)=\"loginWithPhone()\" [disabled]=\"phoneLogingInn\"><ion-spinner name=\"dots\" color=\"{{settings.theme.button}}\" *ngIf=\"phoneLogingInn\"></ion-spinner><span *ngIf=\"!phoneLogingInn\">{{\"Register with OTP\"| translate}}</span></ion-button-->\r\n\r\n<div class=\"errors\" *ngIf=\"errors\">\r\n  <div *ngFor=\"let error of errors | keys\" style=\"text-align: center; padding-top: 20px;\">\r\n    <ion-label color=\"danger\" class=\"error\" [innerHTML]=\"error.value\"></ion-label>\r\n  </div>\r\n </div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/setting/setting.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/setting/setting.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountSettingSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n   <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n      <ion-title>{{\"Language\" | translate}}</ion-title>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"settings\">\r\n   <div *ngIf=\"settings.languages.length\">\r\n      <ion-list >\r\n         <ion-radio-group [(ngModel)]=\"config.lang\" name=\"language\" ngDefaultControl>\r\n         <ion-item *ngFor=\"let item of settings.languages\">\r\n            <ion-label class=\"payment-method-title\"><img src=\"{{item.country_flag_url}}\" width=\"20\"><span style=\"padding: 10px\">{{item.native_name}}</span></ion-label>\r\n            <ion-radio value=\"{{item.language_code}}\"> </ion-radio>\r\n         </ion-item>\r\n         </ion-radio-group>\r\n         <ion-button padding color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"applyLanguage()\" >{{\"Apply\" | translate}}</ion-button>\r\n      </ion-list>\r\n   </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wallet/wallet.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/wallet/wallet.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>{{\"Wallet\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"spinner\" *ngIf=\"!wallet?.balance\"><ion-spinner> </ion-spinner></div>  \r\n\r\n<ion-list *ngIf=\"wallet.balance\">\r\n\r\n<ion-item lines=\"none\">\r\n  <ion-label class=\"bold\">{{\"Balance\" | translate}} {{wallet.balance}}</ion-label>\r\n  <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" (click)=\"showField()\">\r\n    {{\"Add balance\" | translate}}\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<div *ngIf=\"show\">\r\n<ion-item lines=\"none\">\r\n    <ion-input required type=\"number\" [(ngModel)]=\"amount\" name=\"amount\" placeholder=\"Enter Amount\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-button style=\"margin-right: 16px; margin-left: 16px;\" expand=\"block\" color=\"{{settings.theme.button}}\" (click)=\"addTopup()\">{{\"Add\" | translate}}</ion-button>\r\n</div>\r\n\r\n<ion-item *ngFor=\"let item of wallet.transactions\">\r\n    <ion-label text-wrap>\r\n      <ion-text>\r\n        <h3>{{item.type.toUpperCase()}} {{item.amount}}</h3>\r\n      </ion-text>\r\n      <p>{{item.details}}</p>\r\n      <ion-text>\r\n        <p>{{item.date}}</p>\r\n      </ion-text>\r\n    </ion-label>\r\n    <ion-text slot=\"end\"><p>{{item.balance}}</p></ion-text>\r\n</ion-item>\r\n\r\n</ion-list>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wishlist/wishlist.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/wishlist/wishlist.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountWishlistWishlistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Wishlist\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"wishlist\">\r\n\r\n<div class=\"spinner\" *ngIf=\"!wishlist && settings.customer?.id\"><ion-spinner> </ion-spinner></div>\r\n\r\n<div *ngIf=\"!settings.customer?.id\" class=\"empty\">\r\n  <ion-icon name=\"heart-outline\"></ion-icon>\r\n</div>\r\n\r\n<div *ngIf=\"settings.customer?.id\">\r\n    <div *ngIf=\"wishlist\">\r\n        <div *ngIf=\"!wishlist.length\" text-center class=\"empty\">\r\n            <ion-icon name=\"heart-outline\"></ion-icon>\r\n        </div>\r\n        <div *ngIf=\"wishlist.length\">\r\n            <!-- Products List Layout -->\r\n            <!-- For different list layouts change class name product-list1, product-list2, product-list3 -->  \r\n              <ion-list  *ngIf=\"wishlist?.length\" class=\"product-list3\">\r\n                <ion-item *ngFor=\"let product of wishlist\" lines=\"none\">\r\n                    <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\r\n                        <img *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\">\r\n                    </ion-thumbnail>\r\n                    <ion-grid class=\"details\">\r\n                        <ion-row (click)=\"getProduct(product)\">\r\n                            <ion-col>\r\n                                <ion-label>\r\n                                    {{product.name}}\r\n                                </ion-label>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row (click)=\"getProduct(product)\">\r\n                            <ion-col>\r\n                                <p class=\"price\">\r\n                                    <span *ngIf=\"!product.sale_price\" class=\"regular-price\">\r\n                                        {{1*product.price | currency:settings.currency:'symbol':'1.2-2'}}\r\n                                    </span>\r\n                                    <span *ngIf=\"product.sale_price\" class=\"regular-price\">\r\n                                        {{1*product.sale_price | currency:settings.currency:'symbol':'1.2-2'}}\r\n                                    </span>\r\n                                    <span *ngIf=\"product.sale_price\" class=\"special-price\">\r\n                                        <del>\r\n                                            {{1*product.regular_price | currency:settings.currency:'symbol':'1.2-2'}}\r\n                                        </del>\r\n                                    </span>\r\n                                </p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                    <ion-button fill=\"clear\" (click)=\"removeFromWishlist(product.id)\" class=\"trash\"><ion-icon name=\"trash\" style=\"font-size:22px;\"></ion-icon></ion-button>\r\n                    <!--ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n                      <div *ngIf=\"product.stock_status == 'instock'\">\r\n                      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n                      </div-->\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{\"Cart\" | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"cart\">\r\n  <div class=\"spinner\" *ngIf=\"!cart?.cart_contents\"><ion-spinner> </ion-spinner></div>\r\n<div *ngIf=\"cart.cart_contents?.length == 0\" class=\"empty\">\r\n  <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\r\n</div>\r\n\r\n<div *ngIf=\"cart.cart_contents\">\r\n<div *ngIf=\"cart.cart_contents?.length != 0\">\r\n  <ion-item *ngFor=\"let item of cart.cart_contents | keys\">\r\n    <ion-thumbnail slot=\"start\" (click)=\"getProduct(item.value.product_id)\">\r\n      <img src=\"{{item.value.thumb}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\r\n    </ion-thumbnail>\r\n    <ion-label class=\"name-label\">\r\n      <ion-text style=\"font-size:14px;\" text-wrap class=\"clamp\">{{item.value.name}}</ion-text>\r\n      <p *ngFor=\"let variation of item.value.variation | keys\" style=\"font-size:13px;\">{{variation.value}}</p>\r\n      <p style=\"font-size:13px;\">{{item.value.tax_price | currency:settings.currency:'symbol':'1.2-2'}} x {{item.value.quantity}}</p>\r\n      <span *ngIf=\"item.value.addons?.length\">Addons</span>\r\n      <span *ngFor=\"let items of item.value.addons\">\r\n        <p style=\"font-size:13px;\">{{items.value}} {{items.price | currency:settings.currency:'symbol':'1.2-2'}}</p>\r\n      </span>\r\n       \r\n      <ion-grid style=\"padding: 0px\" class=\"add-remove-button\">\r\n      <ion-row class=\"ion-align-items-start\">\r\n        <ion-col class=\"align-self-start\">\r\n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\" (click)=\"deleteFromCart(item.value.product_id, item.key)\">\r\n              <ion-icon slot=\"icon-only\" name=\"remove-circle-outline\" mode=\"md\"></ion-icon>\r\n          </ion-button> \r\n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\">{{item.value.quantity}}</ion-button> \r\n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\" (click)=\"addToCart(item.value.product_id, item)\">\r\n              <ion-icon slot=\"icon-only\" name=\"add-circle-outline\" mode=\"md\">\r\n              </ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button style=\"float: right;\" color=\"{{settings.theme.button}}\" fill=\"clear\" (click)=\"deleteItem(item.key, item.value.quantity)\"><ion-icon name=\"trash\" style=\"font-size:22px;\"></ion-icon></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    </ion-label>\r\n    \r\n  </ion-item>\r\n\r\n<form #f=\"ngForm\" class=\"coupon\">\r\n    <ion-item>\r\n        <ion-input type=\"text\" [(ngModel)]=\"cart.coupon\" name=\"coupon\" placeholder=\"{{'Enter coupon here' | translate}}\"> </ion-input>\r\n        <h2 item-right> \r\n            <ion-button block color=\"{{settings.theme.button}}\" type=\"submit\" text-uppercase (click)=\"submitCoupon(cart.coupon)\">{{\"Apply\" | translate}}\r\n            </ion-button>\r\n        </h2>\r\n    </ion-item>\r\n</form>\r\n\r\n      <div class=\"redeem\">\r\n\r\n      <div *ngIf=\"cart && settings.reward > '0' \" style=\"margin-bottom: 3px\">\r\n      <ion-item>\r\n          <ion-label>{{\"Complete this order and you will earn\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.purchase_point}}</span> {{\"points\" | translate}}, {{\"you can use on future order.\" | translate}}</ion-label>\r\n      </ion-item>\r\n      </div>\r\n\r\n      <div *ngIf=\"settings.reward > '0' \" style=\"padding: 10px 0;\">\r\n      <ion-item>\r\n        <ion-label>{{\"Use\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.points.points}}</span> {{\"Reward Points for a\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.points.discount_available | currency:settings.currency:'symbol':'1.2-2'}}</span> {{\"discount on this order!\" | translate}}\r\n          <ion-button color=\"{{settings.theme.button}}\" fill=\"solid\" type=\"submit\" text-uppercase small (click)=\"redeem()\"> {{\"Redeem Points\" | translate}}\r\n          </ion-button> \r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      \r\n      </div>\r\n\r\n  </div>\r\n\r\n<ion-list lines=\"none\">\r\n  <ion-item>\r\n    <ion-label>\r\n     {{\"Sub total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.subtotal | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"cart.cart_totals.total_tax != 0\">\r\n    <ion-label>\r\n      {{\"Tax total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.total_tax | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item *ngFor=\"let coupon of cart.coupon_discount_totals | keys\">\r\n    <ion-label>\r\n      {{\"Coupon\" | translate}} <span *ngIf=\"!coupon.key.includes('_')\">- {{coupon.key}}</span> <ion-text (click)=\"removeCoupon(coupon.key)\" color=\"{{settings.theme.button}}\">(Remove)</ion-text><span class=\"totals-amount\">-{{1*coupon.value | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"cart.cart_totals.discount_total != 0\">\r\n    <ion-label>\r\n      {{\"Discount\" | translate}}<span class=\"totals-amount\">-{{1*cart.cart_totals.discount_total | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      {{\"Shipping\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.shipping_total | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label class=\"grand-total\">\r\n      {{\"Grand Total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.total | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n\r\n<ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"checkout()\" style=\"margin: 16px;\">{{\"Continue\" | translate}}</ion-button>\r\n</div>\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' >\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      {{\"Categories\" | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"categories\">\r\n\r\n  <!-- Default category block -->\r\n\t<!--ion-row>\r\n    <ion-col size='6' size-sm=\"4\" size-md=\"3\" *ngFor=\"let category of data.mainCategories\" (click)=\"getProducts(category.id)\">\r\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\r\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\r\n      <ion-card-header>\r\n        <ion-card-title [innerHTML]=\"category.name\"></ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row-->\r\n\r\n\r\n\r\n<!-- Drop down type category block -->\r\n<div *ngFor=\"let main of data.mainCategories; let i = index\" class=\"category-container\">\r\n  <ion-grid class=\"categories-card5\" no-padding>\r\n  <ion-row><ion-col class=\"ion-text-center\">\r\n  <ion-item lines=\"none\" button=\"true\" (click)=\"showSubCategory(i)\" detail=\"false\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <img *ngIf=\"main.image?.src\" src=\"{{main.image.src}}\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2 [innerHTML]=\"main.name\"></h2>\r\n      <p [innerHTML]=\"main.description\"></p>\r\n    </ion-label>\r\n    <ion-icon *ngIf=\"main.show\" name=\"chevron-up-outline\" mode=\"ios\" color=\"medium\"></ion-icon>\r\n    <ion-icon *ngIf=\"!main.show\" name=\"chevron-down-outline\" mode=\"ios\" color=\"medium\"></ion-icon>\r\n  </ion-item>\r\n</ion-col>\r\n</ion-row>\r\n  <ion-row *ngIf=\"main.show\" class=\"sub-category-items\">\r\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of subCategories(main.id)\" fixed>\r\n    <ion-card button=\"true\" (click)=\"getProducts(item.id)\"  class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"{{settings.settings.mode}}\">\r\n      <ion-card-content>\r\n        <img alt=\"\" src=\"{{item.image?.src}}\">\r\n      </ion-card-content>\r\n      <ion-card-header>\r\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</div>  \r\n\r\n\r\n<!-- Catgories Grid 1 -->\r\n<!--ion-grid class=\"categories-card1\">\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of data.mainCategories\" (click)=\"getProducts(item.id)\" fixed>\r\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\r\n      <ion-card-content>\r\n      <img alt=\"\" src=\"{{item.image?.src}}\">\r\n      </ion-card-content>\r\n      <ion-card-header>\r\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid-->\r\n\r\n<!-- Catgories Grid 2 -->\r\n<!--ion-grid class=\"categories-card2\">\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of data.mainCategories\" (click)=\"getProducts(item.id)\" fixed>\r\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\r\n      <ion-card-content>\r\n      <img alt=\"\" src=\"{{item.image?.src}}\">\r\n      </ion-card-content>\r\n      <ion-card-header>\r\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid-->\r\n\r\n<!-- Catgories Grid 3 -->\r\n<!--ion-grid class=\"categories-card3\">\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of data.mainCategories\" (click)=\"getProducts(item.id)\" fixed>\r\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\r\n      <ion-card-content>\r\n      <img alt=\"\" src=\"{{item.image?.src}}\">\r\n      </ion-card-content>\r\n      <ion-card-header>\r\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid-->\r\n\r\n\r\n<!-- Catgories Grid 4 -->\r\n<!--ion-grid class=\"categories-card4\" *ngFor=\"let main of data.mainCategories\">\r\n  <ion-row><ion-col class=\"ion-text-center\" [innerHTML]=\"main.name\"></ion-col></ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of subCategories(main.id)\" (click)=\"getProducts(item.id)\" fixed>\r\n    <ion-card class=\"item-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\r\n      <ion-card-content>\r\n      <img alt=\"\" src=\"{{item.image?.src}}\">\r\n      </ion-card-content>\r\n      <ion-card-header>\r\n        <ion-card-title [innerHTML]=\"item.name\"></ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid-->\r\n\r\n<!-- Catgories List 1 -->\r\n<!--ion-grid class=\"categories-list1\">\r\n  <ion-item *ngFor=\"let item of data?.mainCategories\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2 [innerHTML]=\"item.name\"></h2>\r\n      <p>{{item.description}}</p>\r\n    </ion-label>\r\n    <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\r\n  </ion-item>\r\n</ion-grid-->\r\n\r\n<!-- Catgories List 2 -->\r\n<!--ion-grid class=\"categories-list2\">\r\n  <ion-item *ngFor=\"let item of data?.mainCategories\">\r\n    <ion-label>\r\n      <h2 [innerHTML]=\"item.name\"></h2>\r\n      <p>{{item.description}}</p>\r\n    </ion-label>\r\n    <ion-thumbnail slot=\"end\">\r\n      <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\r\n    </ion-thumbnail>\r\n  </ion-item>\r\n</ion-grid-->\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/address/address.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/address/address.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/cart\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Address\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\r\n\r\n<div *ngIf=\"!loader\">\r\n<ion-list no-margin>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_first_name\" name=\"firstname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_last_name\" name=\"lastname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Phone\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_phone\" name=\"telephone\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_company\" name=\"company\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} P.O. box, etc.</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_address_1\" name=\"street1\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2, Apartment, Suite, Unit etc. (optional)</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_address_2\" name=\"street2\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Email\" | translate}}</ion-label>\r\n            <ion-input required type=\"email\" [(ngModel)]=\"checkoutData.form.billing_email\" name=\"email\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"City\" | translate}}/ Town/ Village</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_city\" name=\"city\"> </ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}/ ZIP</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_postcode\" name=\"postcode\"> </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"checkoutData.form?.countries && checkoutData.form?.countries.length > 1\">\r\n            <ion-label>{{\"Country\" | translate}}</ion-label>\r\n            <ion-select [(ngModel)]=\"checkoutData.form.billing_country\" (ngModelChange)=\"getBillingRegion()\" name=\"billing_country\">\r\n                <div *ngFor=\"let field of checkoutData.form.countries\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"checkoutData.billingStates?.regions.length\">\r\n            <ion-label>{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-select [(ngModel)]=\"checkoutData.form.billing_state\" name=\"billing_state\">\r\n                <div *ngFor=\"let field of checkoutData.billingStates.regions\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"!checkoutData.billingStates?.regions.length\">\r\n            <ion-label position=\"stacked\">{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_state\" name=\"billing_state\"> </ion-input>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item>\r\n            <ion-label>{{\"Ship to different address\" | translate}}</ion-label>\r\n            <ion-toggle color=\"{{settings.theme.button}}\" [(ngModel)]=\"checkoutData.form.ship_to_different_address\"></ion-toggle>\r\n        </ion-item>\r\n\r\n</ion-list>\r\n\r\n\r\n<ion-list no-margin *ngIf=\"checkoutData.form.ship_to_different_address\">\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_first_name\" name=\"firstname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_last_name\" name=\"lastname\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_company\" name=\"company\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} P.O. box, etc.</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_address_1\" name=\"street1\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2, Apartment, Suite, Unit etc. (optional)</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_address_2\" name=\"street2\"> </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"City\" | translate}}/ Town/ Village</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_city\" name=\"city\"> </ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}/ ZIP</ion-label>\r\n            <ion-input required type=\"number\" [(ngModel)]=\"checkoutData.form.shipping_postcode\" name=\"postcode\"> </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"checkoutData.form?.countries && checkoutData.form?.countries.length > 1\">\r\n            <ion-label>{{\"Country\" | translate}}</ion-label>\r\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping_country\">\r\n                <div *ngFor=\"let field of checkoutData.form.countries\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span> </ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"checkoutData.shippingStates?.regions.length\">\r\n            <ion-label>{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\">\r\n                <div *ngFor=\"let field of checkoutData.shippingStates.regions\">\r\n                    <ion-select-option value=\"{{field.value}}\"><span [innerHTML]=\"field.label\"></span></ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"!checkoutData.shippingStates?.regions.length\">\r\n            <ion-label position=\"stacked\">{{\"State\" | translate}}/ Province/ County/ Parish</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\"> </ion-input>\r\n        </ion-item>\r\n\r\n\r\n        <!--ion-item *ngIf=\"countries?.options\">\r\n            <ion-label>{{\"Country\" | translate}}</ion-label>\r\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping_country\">\r\n                <div *ngFor=\"let field of countries.options | keys\">\r\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span></ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <div *ngIf=\"checkoutData.form?.shipping_country\">\r\n        <ion-item *ngIf=\"checkoutData.form?.state[checkoutData.form.shipping_country]\">\r\n            <ion-label>{{\"State\" | translate}}</ion-label>\r\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\">\r\n                <div *ngFor=\"let field of checkoutData.form.state[checkoutData.form.shipping_country] | keys\">\r\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span></ion-select-option>\r\n                </div>\r\n            </ion-select>\r\n        </ion-item>\r\n        \r\n\r\n        <ion-item *ngIf=\"!checkoutData.shippingStates\">\r\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\r\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\"> </ion-input>\r\n        </ion-item>\r\n        </div-->\r\n\r\n\r\n</ion-list>\r\n<div *ngIf=\"errorMessage\">\r\n  <h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red;margin: 16px;\"></h2>\r\n</div>\r\n<div class=\"submit-button\">\r\n<ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"continueCheckout()\">{{\"Continue\" | translate}}</ion-button>\r\n</div>\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout/checkout.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout/checkout.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/cart/address\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Checkout\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n<div class=\"spinner\" *ngIf=\"!orderReview\"><ion-spinner></ion-spinner></div>\r\n\r\n<div *ngIf=\"orderReview\">\r\n<ion-list>\r\n\t<ion-list-header>\r\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      <p>\r\n    <span>{{checkoutData.form.billing_first_name}}</span>&nbsp;<span>{{checkoutData.form.billing_last_name}}</span>&nbsp;<span>{{checkoutData.form.billing_company}}</span>&nbsp;<span>{{checkoutData.form.billing_address_1}}</span>&nbsp;<span>{{checkoutData.form.billing_address_2}}</span>&nbsp;<span>{{checkoutData.form.billing_city}}</span>\r\n    <span>{{checkoutData.form.billing_state}}</span>&nbsp;<span>{{checkoutData.form.billing_postcode}}</span>&nbsp;<span>{{checkoutData.form.billing_country}}</span>\r\n    &nbsp;<span>{{checkoutData.form.billing_email}}</span>&nbsp;<span>{{checkoutData.form.billing_phone}}</span>\r\n  </p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      <p>\r\n    <span>{{checkoutData.form.shipping_first_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_last_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_company}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_1}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_2}}</span>&nbsp;<span>{{checkoutData.form.shipping_city}}</span>&nbsp;\r\n    <span>{{checkoutData.form.shipping_state}}</span>&nbsp;<span>{{checkoutData.form.shipping_postcode}}</span>&nbsp;<span>{{checkoutData.form.shipping_country}}</span>&nbsp;\r\n    <span>{{checkoutData.form.shipping_email}}</span>&nbsp;<span>{{checkoutData.form.shipping_phone}}</span>\r\n  </p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"orderReview?.shipping\">\r\n  <ion-radio-group *ngFor=\"let package of orderReview.shipping\" [(ngModel)]=\"package.chosen_method\" (ngModelChange)=\"updateOrderReview()\">\r\n    <ion-list-header>\r\n      <span [innerHTML]=\"package.package_name\"></span>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"isEmptyObject(package.shipping)\">\r\n      <ion-label><p>{{\"No Shipping Available\" | translate}}</p></ion-label>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let method of package.shipping | keys\">\r\n      <ion-label class=\"ion-text-wrap\"><span [innerHTML]=\"method.value.label\"></span> <b>-</b> <span>{{method.value.cost | currency:settings.currency:true:'1.2-2'}}</span></ion-label>\r\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"orderReview?.payment\">\r\n  <ion-radio-group [(ngModel)]=\"checkoutData.form.payment_method\" (ngModelChange)=\"onChangePayment()\">\r\n    <ion-list-header>\r\n      {{\"Payment Method\" | translate}}\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let method of orderReview.payment | keys\">\r\n      <ion-label class=\"ion-text-wrap\"><span [innerHTML]=\"method.value.title\"></span></ion-label>\r\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n</ion-list>\r\n\r\n  <div *ngIf=\"cardResponse.cardNumber && checkoutData.form.payment_method == 'stripe'\">\r\n      <ion-card mode=\"{{settings.settings.mode}}\">\r\n          <ion-item *ngIf=\"cardResponse.cardNumber\">\r\n            <ion-label text-wrap>\r\n              <ion-text>\r\n                <h3>{{\"Card Number\" | translate}}</h3>\r\n              </ion-text>\r\n              <p>{{cardResponse.cardNumber}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n            <ion-item>\r\n            <ion-label text-wrap>\r\n              <ion-text>\r\n                <h3>{{\"Expiry Date\" | translate}}</h3>\r\n              </ion-text>\r\n              <p>{{cardResponse.expiryMonth}}/{{cardResponse.expiryYear}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n            <ion-item>\r\n            <ion-label text-wrap>\r\n              <ion-text>\r\n                <h3>{{\"CVV\" | translate}}</h3>\r\n              </ion-text>\r\n              <p>{{cardResponse.cvv}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n  </div>\r\n\r\n    <div *ngIf=\"checkoutData.form.payment_method =='authnet'\" class=\"card-payment\">\r\n        <form #f=\"ngForm\">\r\n            <ion-list no-margin>\r\n                <ion-item class=\"side-heading-background\">\r\n                    <ion-label color=\"side-heading-color\">Card Details </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Card Number\" | translate}} </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form['authnet-card-number']\" name=\"stripe_number\"> </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Expiry Month\" | translate}} (MM) </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.expiryMonth\" name=\"stripe_exp_year\"> </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Expiry Year\" |translate}} (YY) </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.expiryYear\" name=\"stripe_exp_year\"> </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Card Code\" | translate}} </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form['authnet-card-cvc']\" name=\"stripe_code\"> </ion-input>\r\n                </ion-item>\r\n            </ion-list>\r\n        </form>\r\n    </div>\r\n\r\n    <ion-item style=\"padding-top: 16px;\" lines=\"none\" *ngIf=\"checkoutData.form.payment_method =='stripe'\">\r\n      <ion-label>{{\"Use a new Card\" | translate}}</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"checkoutData.form.card\" (ngModelChange)=\"onUseNewCard()\" slot=\"end\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"checkoutData.form.payment_method =='stripe'\" class=\"stripe-payment\">\r\n      <form action=\"/charge\" method=\"post\" id=\"payment-form\">\r\n        <div class=\"form-row\">\r\n\r\n          <div id=\"card-element\">\r\n            <!-- A Stripe Element will be inserted here. -->\r\n          </div>\r\n\r\n          <!-- Used to display form errors. -->\r\n          <div id=\"card-errors\" class=\"card-error\" role=\"alert\"></div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <!--div *ngIf=\"checkoutData.form.payment_method =='stripe'\" class=\"card-payment\">\r\n        <form #f=\"ngForm\">\r\n            <ion-list no-margin>\r\n                <ion-item class=\"side-heading-background\">\r\n                    <ion-label color=\"side-heading-color\">Card Details </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Card Number\" | translate}} </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_number\" name=\"stripe_number\"> </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Expiry Month\" | translate}} (MM) </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_exp_month\" name=\"stripe_exp_year\"> </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Expiry Year\" |translate}} (YYYY) </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_exp_year\" name=\"stripe_exp_year\"> </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">{{\"Card Code\" | translate}} </ion-label>\r\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.stripe_code\" name=\"stripe_code\"> </ion-input>\r\n                </ion-item>\r\n            </ion-list>\r\n        </form>\r\n    </div-->\r\n\r\n    <!--ion-row class=\"check-box-bottom\" style=\"margin-top:0\" *ngIf=\"form.show_terms\">\r\n      <ion-col no-lines class=\"col1\">\r\n          <ion-checkbox checked=\"true\" [(ngModel)]=\"form.terms\" name=\"terms\"> </ion-checkbox>\r\n      </ion-col>\r\n      <ion-col class=\"col2\">\r\n          <ion-label>{{\"I Agree\" | translate}} <a  (click)=\"terms()\">{{\"Terms & Conditions\" | translate}}</a> </ion-label>\r\n      </ion-col>\r\n    </ion-row-->\r\n<ion-item *ngIf=\"orderReview.payment[checkoutData.form.payment_method]?.description\" lines=\"none\">\r\n  <ion-label class=\"ion-text-wrap payment-description\"> \r\n  <span [innerHTML]=\"orderReview.payment[checkoutData.form.payment_method]?.description\"></span>\r\n   </ion-label>\r\n </ion-item>\r\n\r\n<div *ngIf=\"errorMessage\">\r\n<h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red; text-align: center;\"></h2>\r\n</div>\r\n\r\n<div class=\"button-place-order submit-button\" *ngIf=\"checkoutData.form.payment_method == 'stripe'\">\r\n  <ion-button color=\"{{settings.theme.button}}\" (click)=\"onClickStripeSubmit()\" expand=\"block\" fill=\"solid\" text-uppercase id=\"card-button\">{{'Place order' | translate}}</ion-button>\r\n</div>\r\n<div class=\"submit-button\">\r\n<ion-button [disabled]=\"disableButton\" *ngIf=\"checkoutData.form.payment_method != 'stripe'\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"placeOrder()\">{{'Place order' | translate}}</ion-button>\r\n</div>\r\n</div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-back-button defaultHref=\"/tabs/categories/products\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>Contact</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\t<ion-item>\r\n        <ion-label position=\"stacked\">{{\"Your Name\" | translate}}</ion-label>\r\n        <ion-input required type=\"text\" [(ngModel)]=\"form.yourName\" name=\"name\"> </ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">{{\"Your Email\" | translate}}</ion-label>\r\n        <ion-input required type=\"text\" [(ngModel)]=\"form.yourEmail\" name=\"email\"> </ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">{{\"Your Phone\" | translate}}</ion-label>\r\n        <ion-input required type=\"text\" [(ngModel)]=\"form.yourTel\" name=\"phone\"> </ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"status?.message\" lines=\"none\">\r\n    <ion-label text-wrap>{{status.message}}</ion-label>\r\n    </ion-item>\r\n    <ion-button [disabled]=\"disableButton\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"submit()\">{{\"Submit\" | translate}}</ion-button>\t\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"post?.post_title\">\r\n      {{post.post_title}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"post\">\r\n  <div class=\"spinner\" *ngIf=\"!post\"><ion-spinner> </ion-spinner></div>\r\n    <ion-card *ngIf=\"post\">\r\n      <ion-img alt=\"\" *ngIf=\"post.image\" src=\"{{post.image}}\"></ion-img>\r\n      <ion-card-header>\r\n        <ion-card-title>{{post.post_title}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n          <div [innerHTML]=\"post.post_content\"></div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' class=\"product-header\" >\r\n   <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n         <ion-back-button defaultHref=\"/tabs/categories/products\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n         {{product?.name}}\r\n      </ion-title>\r\n      <ion-buttons slot=\"end\" (click)=\"share()\">\r\n         <ion-icon name=\"share\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon>\r\n      </ion-buttons>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"product\">\r\n   <div class=\"spinner\" *ngIf=\"!product.id\">\r\n      <ion-spinner> </ion-spinner>\r\n   </div>\r\n   <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"settings.settings?.enable_product_chat\">\r\n      <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\r\n         <ion-fab-button size=\"small\" color=\"whatsapp\">\r\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n         </ion-fab-button>\r\n      </a>\r\n   </ion-fab>\r\n   <div *ngIf=\"product.id\">\r\n      <div style=\"display: flex;\">\r\n      <ion-slides pager=\"true\" *ngIf=\"!product.image\" dir=\"{{settings.dir}}\">\r\n      <ion-slide *ngFor=\"let item of product.images\">\r\n         <img src=\"{{item.src}}\"/>\r\n      </ion-slide>\r\n      </ion-slides>\r\n      <div *ngIf=\"product.image\">\r\n         <ion-img src=\"{{product.image}}\"></ion-img>\r\n      </div>\r\n      <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n      </div>\r\n      <div class=\"product-details\">\r\n         <ion-item lines=\"none\">\r\n            <ion-label text-wrap>\r\n               {{product.name}}\r\n            </ion-label>\r\n            <ion-icon name=\"heart-outline\" class=\"heartempty onpress\" slot=\"end\" (click)=\"settings.addToWishlist(product.id)\" *ngIf=\"!settings.wishlist[product.id]\"></ion-icon>\r\n            <ion-icon name=\"heart\" class=\"heartempty onpress\" slot=\"end\" color=\"{{settings.theme.button}}\" (click)=\"settings.removeFromWishlist(product.id)\" *ngIf=\"settings.wishlist[product.id]\"></ion-icon>\r\n         </ion-item>\r\n\r\n         <!--WCMP-->\r\n         <ion-chip color=\"primary\" (click)='getDetail(product.vendor)' *ngIf=\"product.vendor?.id\">\r\n         <ion-icon name=\"person\"></ion-icon>\r\n         <ion-label>{{\"SoldBy\" | translate }} - {{product.vendor.name}}</ion-label>\r\n         </ion-chip>\r\n\r\n         <ion-item lines=\"none\">\r\n            <ion-label *ngIf=\"product.sale_price\">\r\n               <span class=\"price\" [innerHTML]=\"product.formated_sales_price\"></span><del><span class=\"special-price\" [innerHTML]=\"product.formated_price\"></span></del>\r\n               <span *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\" class=\"percent-off\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}% OFF</span>\r\n            </ion-label>\r\n            <ion-label *ngIf=\"!product.sale_price\">\r\n               <span class=\"price\" [innerHTML]=\"product.formated_price\"></span>\r\n            </ion-label>\r\n         </ion-item>\r\n\r\n         <div class=\"variation-block\" *ngIf=\"product.variationOptions && product.variationOptions.length\">\r\n            <div *ngFor=\"let attribute of product.variationOptions; let i = index\" class=\"variation-product\">\r\n               <h6 style=\"margin-left: 16px;font-size: 14px;\">{{\"Select\" | translate}} {{attribute.name}}</h6>\r\n               <div *ngIf=\"attribute.options.length\" class=\"option-box\">\r\n                  <ion-button class=\"option-button\" fill=\"outline\" color=\"{{settings.theme.button}}\" *ngFor=\"let option of attribute.options\" (click)=\"chooseVariation2(i, option)\" [ngClass]=\"{'selected-option': attribute.selected == option}\">{{option}}</ion-button>\r\n               </div>\r\n            </div>\r\n         </div>\r\n\r\n         <!-- USE WHEN ABOVE ONE NOT WORKING PROPERLY -->\r\n         <!--div class=\"variation-block\" *ngIf=\"variations.length\">\r\n            <div *ngFor=\"let attribute of usedVariationAttributes\" class=\"variation-product\">\r\n               <h6 style=\"margin-left: 16px;font-size: 14px;\">{{\"Select\" | translate}} {{attribute.name}}</h6>\r\n               <div *ngIf=\"attribute.options.length\" class=\"option-box\">\r\n                  <ion-button class=\"option-button\" fill=\"outline\" color=\"{{settings.theme.button}}\" *ngFor=\"let option of attribute.options\" (click)=\"chooseVariation(attribute, option)\" [ngClass]=\"{'selected-option': attribute.selected == option}\">{{option}}</ion-button>\r\n               </div>\r\n            </div>\r\n         </div-->\r\n\r\n         <div class=\"grouped-block\" *ngIf=\"groupedProducts.length\">\r\n            <div *ngFor=\"let item of groupedProducts\" class=\"variation-product\">\r\n               <ion-input style=\"margin-left: 16px;margin-right: 16px;\" type=\"number\" [(ngModel)]=\"item.selected\" value=\"0\" placeholder=\"Quantity\"></ion-input>\r\n               <h6 style=\"margin-left: 16px;font-size: 14px;\">{{item.name}}</h6>\r\n            </div>\r\n         </div>\r\n\r\n         <!-- Product Addons -->\r\n         <div *ngIf=\"addonsList.length\">\r\n            <div *ngFor=\"let item of addonsList; let i = index\">\r\n               <ion-item lines=\"none\" *ngIf=\"item.description !== ''\"><ion-label>{{item.description}}</ion-label></ion-item>\r\n               <ion-item *ngIf=\"item.type == 'checkbox' || item.type == 'multiple_choice' || item.type == 'radiobutton'  || item.type == 'select'\" class=\"addons\" lines=\"none\">\r\n                  <ion-label>{{item.name}}</ion-label>\r\n                  <ion-select [(ngModel)]=\"item.selected\" multiple=\"true\" *ngIf=\"(item.type == 'checkbox' || item.type == 'multiple_choice') && item.options.length\">\r\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\r\n                  </ion-select>\r\n                  <ion-select [(ngModel)]=\"item.selected\" *ngIf=\"item.type == 'radiobutton' && item.options.length\">\r\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\r\n                  </ion-select>\r\n                  <ion-select [(ngModel)]=\"item.selected\" *ngIf=\"item.type == 'select' && item.options.length\">\r\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\r\n                  </ion-select>\r\n               </ion-item>\r\n               <div style=\"padding: 0 16px;\" *ngFor=\"let option of item.options; let j = index\">\r\n                  <div *ngIf=\"item.type == 'custom_textarea'\">\r\n                  <textarea [(ngModel)]=\"item.options[j].input\" placeholder=\"{{item.name}}\" type =\"text\" style=\"width: 100%; height: 80px;\"></textarea>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div *ngFor=\"let item of addonsList; let i = index\">\r\n               <div *ngFor=\"let option of item.options; let j = index\">\r\n                  <ion-item *ngIf=\"item.type == 'custom' && item.options.length\" class=\"addon-options\">\r\n                     <ion-label floating>{{option.label}} {{option.price}}</ion-label>\r\n                     <ion-input required type=\"text\" name=\"data\" [(ngModel)]=\"item.options[j].input\">\r\n                     </ion-input>\r\n                  </ion-item>\r\n               </div>\r\n            </div>\r\n            <div *ngFor=\"let item of addonsList; let i = index\">\r\n               <ion-item *ngIf=\"item.type == 'custom_text'\" class=\"addon-options\">\r\n                  <ion-label floating>{{item.name}} {{item.price}}</ion-label>\r\n                  <ion-input required type=\"text\" name=\"data\" [(ngModel)]=\"item.input\">\r\n                  </ion-input>\r\n               </ion-item>\r\n            </div>\r\n         </div>\r\n\r\n         <ion-item lines=\"none\" *ngIf=\"product.showPoints\">\r\n            <ion-label>Earn {{product.showPoints}} Royalty Points</ion-label>\r\n         </ion-item>\r\n\r\n         <ion-item lines=\"none\" *ngIf=\"product.type == 'simple' || product.type == 'variable'\">\r\n           <ion-label position=\"fixed\">{{\"Quantity\" | translate}}</ion-label>\r\n           <ion-input [(ngModel)]=\"quantity\" type=\"number\" value=\"1\"></ion-input>\r\n         </ion-item>\r\n\r\n         <ion-button *ngIf=\"product.type != 'external'\" class=\"add-to-cart-button\" expand=\"block\" [disabled]=\"disableButton || product.stock_status == 'outofstock' || (product.type == 'grouped' && !groupedProducts.length)\" (click)=\"addToCart()\">{{\"ADD TO CART\" | translate}}</ion-button>\r\n         <ion-button *ngIf=\"product.type == 'external'\" class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" [disabled]=\"disableButton || product.stock_status == 'outofstock'\" (click)=\"buyExternalProduct(product.id)\">{{\"BUY NOW\" | translate}}</ion-button>\r\n         <ion-item lines=\"none\" *ngIf=\"product.short_description\" class=\"description\">\r\n            <ion-label text-justify text-wrap [innerHTML]=\"product.short_description\">\r\n            </ion-label>\r\n         </ion-item>\r\n         <ion-item lines=\"none\" *ngIf=\"product.description\" class=\"description\">\r\n            <ion-label text-justify text-wrap [innerHTML]=\"product.description\">\r\n            </ion-label>\r\n         </ion-item>\r\n      </div>\r\n      <div *ngIf=\"relatedProducts?.relatedProducts?.length\" class=\"related-products\">\r\n         <ion-list-header>\r\n            <ion-label>{{\"More like this\" | translate}}</ion-label>\r\n         </ion-list-header>\r\n         <div class=\"scroll-related-products\">\r\n            <div class=\"product\" *ngFor=\"let item of relatedProducts.relatedProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\r\n            <ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"goToProduct(item)\">\r\n               <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img><ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id); $event.stopPropagation()\"></ion-icon>\r\n               <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id); $event.stopPropagation()\"></ion-icon>\r\n               <ion-card-header>\r\n                  <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\r\n               </ion-card-header>\r\n               <ion-card-content>\r\n                  <p class=\"price\">\r\n                     <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                     <span class=\"regular-price\" *ngIf=\"item.sale_price\" [innerHTML]=\"item.formated_sales_price\"><span class=\"special-price\" [innerHTML]=\"item.formated_price\"><del></del></span></span>\r\n                  </p>\r\n               </ion-card-content>\r\n            </ion-card>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div *ngIf=\"upsellProducts?.upsellProducts?.length\" class=\"related-products\">\r\n      <ion-list-header>\r\n         <ion-label>{{\"You might love\" | translate}}</ion-label>\r\n      </ion-list-header>\r\n      <div class=\"scroll-related-products\">\r\n         <div class=\"product\" *ngFor=\"let item of upsellProducts.upsellProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\r\n         <ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"goToProduct(item)\">\r\n            <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img>\r\n            <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id); $event.stopPropagation()\"></ion-icon>\r\n            <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id); $event.stopPropagation()\"></ion-icon> \r\n            <ion-card-header>\r\n               <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n               <p class=\"price\">\r\n                  <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                  <span class=\"regular-price\" *ngIf=\"item.sale_price\" [innerHTML]=\"item.formated_sales_price\"><span class=\"special-price\" [innerHTML]=\"item.formated_price\"><del></del></span></span>\r\n               </p>\r\n            </ion-card-content>\r\n         </ion-card>\r\n      </div>\r\n   </div>\r\n   </div>\r\n   <div *ngIf=\"crossSellProducts?.crossSellProducts?.length\" class=\"related-products\">\r\n      <ion-list-header>\r\n         <ion-label>{{\"Recommended\" | translate}}</ion-label>\r\n      </ion-list-header>\r\n      <div class=\"scroll-related-products\">\r\n         <div class=\"product\" *ngFor=\"let item of crossSellProducts.crossSellProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\r\n         <ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"goToProduct(item)\">\r\n            <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img><ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id); $event.stopPropagation()\"></ion-icon>\r\n            <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id); $event.stopPropagation()\"></ion-icon>\r\n            <ion-card-header>\r\n               <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n               <p class=\"price\">\r\n                  <span class=\"regular-price\" *ngIf=\"!item.sale_price\" [innerHTML]=\"item.formated_price\"></span>\r\n                  <span class=\"regular-price\" *ngIf=\"item.sale_price\" [innerHTML]=\"item.formated_sales_price\"><span class=\"special-price\" [innerHTML]=\"item.formated_price\"><del></del></span></span>\r\n               </p>\r\n            </ion-card-content>\r\n         </ion-card>\r\n      </div>\r\n   </div>\r\n   </div>\r\n   <ion-item detail=\"true\" (click)=\"getReviewsPage()\" class=\"review-item ion-activatable\">\r\n   <ion-label>{{reviews.length}} {{\"Customer Reviews\" | translate}}</ion-label>\r\n   <ion-icon name=\"ios-arrow-forward\" item-end></ion-icon>\r\n   </ion-item>\r\n   <div *ngFor=\"let item of reviews\">\r\n      <ion-item lines=\"none\">\r\n         <ion-avatar slot=\"start\">\r\n            <ion-img alt=\"\" src=\"https://www.gravatar.com/avatar/{{item.avatar}}\"></ion-img>\r\n         </ion-avatar>\r\n         <ion-label>\r\n            {{item.author}}\r\n            <span class=\"rating review-star\">\r\n            <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 1, half: item.rating == 0.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 2, half: item.rating == 1.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 3, half: item.rating == 2.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 4, half: item.rating == 3.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 5, half: item.rating == 4.5}\">&#x2605;</span></span>\r\n            <p>{{item.date | datepipe}}</p>\r\n         </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n         <ion-label class=\"review-content\">\r\n            <p text-wrap [innerHTML]=\"item.content\"></p>\r\n         </ion-label>\r\n      </ion-item>\r\n   </div>\r\n   </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/categories\"></ion-back-button>\r\n    </ion-buttons>\r\n      <ion-searchbar mode=\"ios\" animated *ngIf=\"showSearch\" [(ngModel)]=\"searchInput\" (ionChange)=\"onInput()\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\" (click)=\"getFilter()\"><ion-icon name=\"funnel\" style=\"margin: 0 8px;font-size: 23px\"></ion-icon></ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"toggleGridView()\"><ion-icon name=\"{{gridView ? 'menu' : 'grid' }}\" style=\"margin: 0 8px;font-size: 23px\"></ion-icon></ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"subCategories.length\" class=\"scrollmenu2\">\r\n    <div *ngFor=\"let item of subCategories\" class=\"scroll ion-activatable ion-focusable hydrated\" (click)=\"getCategory(item.id)\">\r\n      <img alt=\"\" *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\" [style.border-radius.px]=\"settings.dimensions.suCatBorderRadius\">\r\n      <h5><span [innerHTML]=\"item.name\"></span></h5>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\r\n  <div class=\"spinner\" *ngIf=\"!loader && products.length == 0\">{{\"No Results\" | translate}}</div>\r\n\r\n  <!-- GRID VIEW --> \r\n  <ion-list style=\"padding-bottom: 0; padding-top: 0;\" *ngIf=\"products && gridView\">\r\n    <ion-row>\r\n    <ion-col size=\"{{settings.colWidthProducts}}\" size-sm=\"4\" size-md=\"3\" [style.padding.px]=\"settings.dimensions.productPadding\" *ngFor=\"let product of products\">\r\n    <ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"getProduct(product)\">\r\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\"></ion-img>\r\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" *ngIf=\"!product.images?.length\" src=\"assets/image/logo.png\"></ion-img>\r\n      <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[product.id]\" (click)=\"settings.addToWishlist(product.id); $event.stopPropagation()\"></ion-icon>\r\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[product.id]\" (click)=\"settings.removeFromWishlist(product.id); $event.stopPropagation()\"></ion-icon>\r\n\r\n       <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n      <div *ngIf=\"product.stock_status == 'instock'\">\r\n      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) / product.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n      </div>\r\n                        \r\n      <ion-card-header class=\"ion-activatable ion-focusable hydrated\">\r\n        <ion-card-title>{{product.name}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-activatable ion-focusable hydrated\">\r\n        <p class=\"price\">\r\n          <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\r\n          <span class=\"regular-price\" *ngIf=\"product.formated_sales_price\" [innerHTML]=\"product.formated_sales_price\"></span>\r\n            <del><span *ngIf=\"product.sale_price\" class=\"special-price\" [innerHTML]=\"product.formated_price\"></span></del>\r\n          </p>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-list>\r\n  <!-- END OF GRID VIEW -->\r\n\r\n  <!-- LIST VIEW -->\r\n  <ion-list style=\"padding-bottom: 0; padding-top: 0;\" class=\"product-list3\" *ngIf=\"products && !gridView\">\r\n  <ion-item *ngFor=\"let product of products\" lines=\"none\">\r\n        <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\r\n            <img *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\">\r\n        </ion-thumbnail>\r\n        <ion-grid class=\"details\">\r\n            <ion-row (click)=\"getProduct(product)\">\r\n                <ion-col>\r\n                    <ion-label>\r\n                        {{product.name}}\r\n                    </ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row (click)=\"getProduct(product)\">\r\n                <ion-col>\r\n                    <p class=\"price\">\r\n                    <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\r\n                    <span class=\"regular-price\" *ngIf=\"product.sale_price\" [innerHTML]=\"product.formated_sales_price\"></span>\r\n                      <del><span *ngIf=\"product.sale_price\" class=\"special-price\" [innerHTML]=\"product.formated_price\">{{product.formated_price}}</span></del>\r\n                    <span class=\"percent-off\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}% OFF\r\n                    </span>\r\n                    </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-icon (click)=\"settings.addToWishlist(product.id)\" *ngIf=\"!settings.wishlist[product.id]\" class=\"wishlist-button-list\" mode=\"md\" name=\"heart-outline\">\r\n                    </ion-icon>\r\n                    <ion-icon (click)=\"settings.removeFromWishlist(product.id)\" *ngIf=\"settings.wishlist[product.id]\" class=\"wishlist-button-list\" color=\"{{settings.theme.button}}\" mode=\"md\" name=\"heart\">\r\n                    </ion-icon>\r\n                </ion-col>\r\n            <ion-row class=\"ion-align-items-end ion-justify-content-end\" style=\"float: right;\">\r\n                <ion-col align-self-end *ngIf=\"data.cart[product.id] == undefined || data.cart[product.id] == 0\">\r\n                    <ion-button style=\"--border-radius: 4px;\" size=\"small\" fill=\"outline\" color=\"{{settings.theme.button}}\" [disabled]=\"product.stock_status == 'outofstock'\" (click)=\"addToCart(product)\">\r\n                      {{product.stock_status == 'outofstock' ? \"No Stock\" : \"ADD\"  | translate}}\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"data.cart[product.id] >= 1\" align-self-end>\r\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" fill=\"clear\" (click)=\"deleteFromCart(product)\">\r\n                    <ion-icon slot=\"icon-only\" color=\"{{settings.theme.button}}\" name=\"remove-circle-outline\"></ion-icon>\r\n                    </ion-button>\r\n\r\n                    <ion-button style=\"padding-left: 0; padding-right: 0; width: 30px;\"color=\"{{settings.theme.button}}\" fill=\"clear\" *ngIf=\"data.cart[product.id] >= 1\">{{data.cart[product.id]}}\r\n                    </ion-button>\r\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" size=\"small\" fill=\"clear\" color=\"{{settings.theme.button}}\"  *ngIf=\"data.cart[product.id] >= 1\" (click)=\"updateToCart(product)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            </ion-row >\r\n        </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- END OF LIST VIEW -->\r\n\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products.length\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReviewReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/home/product\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Review\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"spinner\" *ngIf=\"!reviews\">\r\n    <ion-spinner> </ion-spinner>\r\n  </div>\r\n\r\n<div *ngIf=\"reviews && showReviews\">\r\n\r\n<ion-grid class=\"review-percent-block\">\r\n<ion-row>\r\n  <ion-list-header>\r\n    <ion-label mode=\"ios\" style=\"text-align: center; padding-bottom: 10px;\">Review Summary</ion-label>\r\n  </ion-list-header>\r\n</ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\r\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span></span><span style=\"padding: 0 6px\">({{count5 | number : '1.0-0'}})</span> </h3>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count5Percentage\"></span></div>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <ion-text item-right> <span style=\"padding: 0 6px\">{{count5Percentage | number : '1.0-0'}}%</span> </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\"><span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span></span><span style=\"padding: 0 6px\">({{count4 | number : '1.0-0'}})</span></h3>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count4Percentage\"></span></div>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <h3 item-right><span style=\"padding: 0 6px\">{{count4Percentage | number : '1.0-0'}}%</span> </h3>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\r\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> </span><span style=\"padding: 0 6px\">({{count3 | number : '1.0-0'}})</span></h3>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count3Percentage\"></span></div>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <h3 item-right><span style=\"padding: 0 6px\">{{count3Percentage | number : '1.0-0'}}%</span> </h3>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\r\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> </span><span style=\"padding: 0 6px\">({{count2 | number : '1.0-0'}})</span></h3>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count2Percentage\"></span></div>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <h3 item-right><span style=\"padding: 0 6px\">{{count2Percentage | number : '1.0-0'}}%</span> </h3>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <h3 class=\"review-stars\"><span class=\"rating review-star\" style=\"float:none\">\r\n      <span class=\"star-icon full\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> <span class=\"star-icon\">&#x2605;</span> </span><span style=\"padding: 0 6px\">({{count1 | number : '1.0-0'}})</span></h3>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <div class=\"progress-bar\" item-right><span [style.width.%]=\"count1Percentage\"></span></div>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <h3 item-right><span style=\"padding: 0 6px;\">{{count1Percentage | number : '1.0-0'}}%</span> </h3>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n            <ion-card mode=\"{{settings.settings.mode}}\">\r\n                <ion-card-content>\r\n                    <div class=\"new-review\">\r\n                        <ion-label style=\"margin: 0px 0 6px 18px; font-size:13px\">{{form.name}} <span style=\"margin-right: 10px\">{{\"YOUR RATING\" | translate}}</span> <span class=\"rating review-star\" style=\"float:none;\">\r\n              <span tappable (click)=\"yourRating(1)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 1, half: form.value.rating == 0.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(2)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 2, half: form.value.rating == 1.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(3)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 3, half: form.value.rating == 2.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(4)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 4, half: form.value.rating == 3.5}\">&#x2605;</span> <span tappable (click)=\"yourRating(5)\" class=\"star-icon\" [ngClass]=\"{full: form.value.rating >= 5, half: form.value.rating == 4.5}\">&#x2605;</span> </span>\r\n                        </ion-label>\r\n                        <div class=\"comment-form\">\r\n                            <form [formGroup]=\"form\">\r\n                                <ion-list>\r\n                                    <ion-item *ngIf=\"!settings.customer?.id\">\r\n                                        <ion-input type=\"text\" formControlName=\"author\"  placeholder=\"{{'Name' | translate}}\"> </ion-input>\r\n                                    </ion-item>\r\n                                    <ion-item *ngIf=\"!settings.customer?.id\">\r\n                                        <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{'Email' | translate}}\"> </ion-input>\r\n                                    </ion-item>\r\n                                    <ion-item>\r\n                                        <ion-input required formControlName=\"comment\" placeholder=\"{{'Comment' | translate}}\">\r\n                                        </ion-input>\r\n                                    </ion-item>\r\n                                </ion-list>\r\n                                <div>\r\n                                    <ion-button [disabled]=\"!form.valid || disableSubmit\" expand=\"block\" (click)=\"onSubmit()\">{{\"Submit\" | translate}}\r\n                                    </ion-button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n\r\n<div *ngFor=\"let item of reviews\">\r\n<ion-item lines=\"none\">\r\n  <ion-avatar slot=\"start\">\r\n    <ion-img alt=\"\" src=\"https://www.gravatar.com/avatar/{{item.avatar}}\"></ion-img>\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2>{{item.author}}\r\n     <span class=\"rating review-star\">\r\n     <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 1, half: item.rating == 0.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 2, half: item.rating == 1.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 3, half: item.rating == 2.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 4, half: item.rating == 3.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 5, half: item.rating == 4.5}\">&#x2605;</span></span>\r\n    </h2>\r\n  <p>{{item.date | datepipe}}</p>\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item><ion-label class=\"review-content\"><p text-wrap [innerHTML]=\"item.content\"></p></ion-label></ion-item>\r\n</div>\r\n\r\n  <!--ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll-->\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-searchbar mode=\"ios\" animated [(ngModel)]=\"searchInput\" (ionChange)=\"onInput()\"></ion-searchbar>\r\n  <!--ion-buttons slot=\"primary\">\r\n    <ion-icon slot=\"end\" color=\"medium\" (click)=\"scanBarcode()\" slot=\"icon-only\" name=\"barcode-outline\"></ion-icon>\r\n  </ion-buttons-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"search\">\r\n\r\n<div *ngIf=\"!loading && !products.length && !searchInput\" class=\"empty\">\r\n  <ion-icon color=\"light\" name=\"search\"></ion-icon>\r\n</div>  \r\n\r\n<div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\r\n\r\n<div *ngIf=\"!products.length && !loading && searchInput\" class=\"no-products\">\r\n  <h2>{{\"No Products found\" | translate}}!</h2>\r\n</div>\r\n\r\n<ion-list *ngIf=\"!loading && products\">\r\n  <ion-row>\r\n    <ion-col size=\"{{settings.colWidthSearch}}\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let product of products\" [style.padding.px]=\"settings.dimensions.productPadding\">\r\n    <ion-card mode=\"{{settings.settings.mode}}\" button=\"true\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\" (click)=\"getProduct(product)\">\r\n      <ion-img alt=\"\" *ngIf=\"product.images\" [style.height.px]=\"settings.dimensions.searchGridViewHeight\" src=\"{{product.images[0]?.src}}\"></ion-img>\r\n      <ion-icon name=\"heart-outline\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[product.id]\" (click)=\"settings.addToWishlist(product.id); $event.stopPropagation()\"></ion-icon>\r\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[product.id]\" (click)=\"settings.removeFromWishlist(product.id); $event.stopPropagation()\"></ion-icon>\r\n\r\n      <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\r\n      <div *ngIf=\"product.stock_status == 'instock'\">\r\n      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}%</ion-button>\r\n      </div>\r\n      \r\n      <ion-card-header>\r\n        <ion-card-title mode=\"md\">{{product.name}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <p class=\"price\">\r\n            <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\r\n            <span class=\"regular-price\" *ngIf=\"product.sale_price\" [innerHTML]=\"product.formated_price\">{{product.formated_sales_price}}<span class=\"special-price\"><del [innerHTML]=\"product.formated_price\">{{product.formated_price}}</del></span></span>\r\n        </p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-list>\r\n\r\n  <!-- LIST VIEW -->\r\n  <!--ion-list style=\"padding-bottom: 0; padding-top: 0;\" class=\"product-list3\" *ngIf=\"!loading && products\">\r\n  <ion-item *ngFor=\"let product of products\" lines=\"none\">\r\n        <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\r\n            <img *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\">\r\n        </ion-thumbnail>\r\n        <ion-grid class=\"details\">\r\n            <ion-row (click)=\"getProduct(product)\">\r\n                <ion-col>\r\n                    <ion-label>\r\n                        {{product.name}}\r\n                    </ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row (click)=\"getProduct(product)\">\r\n                <ion-col>\r\n                    <p class=\"price\">\r\n                    <span class=\"regular-price\" *ngIf=\"!product.sale_price\" [innerHTML]=\"product.formated_price\"></span>\r\n                    <span class=\"regular-price\" *ngIf=\"product.sale_price\" [innerHTML]=\"product.formated_sales_price\"></span>\r\n                      <del><span *ngIf=\"product.sale_price\" class=\"special-price\" [innerHTML]=\"product.formated_price\">{{product.formated_price}}</span></del>\r\n                    <span class=\"percent-off\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= 1\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}% OFF\r\n                    </span>\r\n                    </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-icon (click)=\"settings.addToWishlist(product.id)\" *ngIf=\"!settings.wishlist[product.id]\" class=\"wishlist-button-list\" mode=\"md\" name=\"heart-outline\">\r\n                    </ion-icon>\r\n                    <ion-icon (click)=\"settings.removeFromWishlist(product.id)\" *ngIf=\"settings.wishlist[product.id]\" class=\"wishlist-button-list\" color=\"{{settings.theme.button}}\" mode=\"md\" name=\"heart\">\r\n                    </ion-icon>\r\n                </ion-col>\r\n            <ion-row class=\"ion-align-items-end ion-justify-content-end\" style=\"float: right;\">\r\n                <ion-col align-self-end *ngIf=\"data.cart[product.id] == undefined || data.cart[product.id] == 0\">\r\n                    <ion-button style=\"--border-radius: 4px;\" size=\"small\" fill=\"outline\" color=\"{{settings.theme.button}}\" [disabled]=\"product.stock_status == 'outofstock'\" (click)=\"addToCart(product)\">\r\n                      {{product.stock_status == 'outofstock' ? \"No Stock\" : \"ADD\"  | translate}}\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"data.cart[product.id] >= 1\" align-self-end>\r\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" fill=\"clear\" (click)=\"deleteFromCart(product)\">\r\n                    <ion-icon slot=\"icon-only\" color=\"{{settings.theme.button}}\" name=\"remove-circle-outline\"></ion-icon>\r\n                    </ion-button>\r\n\r\n                    <ion-button style=\"padding-left: 0; padding-right: 0; width: 30px;\"color=\"{{settings.theme.button}}\" fill=\"clear\" *ngIf=\"data.cart[product.id] >= 1\">{{data.cart[product.id]}}\r\n                    </ion-button>\r\n                    <ion-button style=\"--padding-end: 0; --padding-start: 0\" size=\"small\" fill=\"clear\" color=\"{{settings.theme.button}}\"  *ngIf=\"data.cart[product.id] >= 1\" (click)=\"updateToCart(product)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            </ion-row >\r\n        </ion-grid>\r\n    </ion-item>\r\n  </ion-list-->\r\n  <!-- END OF LIST VIEW -->\r\n\r\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products.length\" (ionInfinite)=\"loadData($event)\">\r\n  <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"home\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>{{'Home' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"vendor\">\r\n      <ion-icon name=\"apps\"></ion-icon>\r\n      <ion-label>{{'Vendors' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!--ion-tab-button tab=\"search\">\r\n      <ion-icon name=\"search\"></ion-icon>\r\n      <ion-label>{{'Search' | translate}}</ion-label>\r\n    </ion-tab-button-->\r\n\r\n    <ion-tab-button tab=\"categories\">\r\n      <ion-icon name=\"grid-outline\" mode=\"md\"></ion-icon>\r\n      <ion-label>{{'Category' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"cart\">\r\n      <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\r\n      <ion-label>{{'Cart' | translate}}</ion-label>\r\n      <ion-badge color=\"danger\" *ngIf=\"data.count != 0\">{{data.count}}</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"account\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-label>{{'Account' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-order/edit-order.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-order/edit-order.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorEditOrderEditOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/order-list\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{\"Edit Order\" | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\t<div *ngIf=\"orders\">\r\n\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label>{{\"Order ID\" | translate}} - {{orders.id}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item style=\"padding-top:10px\">\r\n      <ion-label position=\"floating\"y>Status</ion-label>\r\n      <ion-select [(ngModel)]=\"orders.status\" name=\"status\" okText=\"OK\" cancelText=\"Cancel\">\r\n                <ion-select-option value=\"processing\">{{\"processing\" | translate}}</ion-select-option>\r\n                <ion-select-option value=\"on-hold\">{{\"on-hold\" | translate}}</ion-select-option>\r\n                <ion-select-option value=\"completed\">{{\"completed\" | translate}}</ion-select-option>\r\n                <ion-select-option value=\"cancelled\">{{\"cancelled\" | translate}}</ion-select-option>\r\n                <ion-select-option value=\"refunded\">{{\"refunded\" | translate}}</ion-select-option>\r\n                <ion-select-option value=\"failed\">{{\"failed\" | translate}}</ion-select-option>\r\n                <ion-select-option value=\"pending\">{{\"pending\" | translate}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Discount Total\" | translate}}</ion-label>\r\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.discount_total\" name=\"discount_total\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Shipping Total\" | translate}}</ion-label>\r\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.shipping_total\" name=\"shipping_total\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Total\" | translate}}</ion-label>\r\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.total\" name=\"total\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n\t  <ion-label position=\"floating\">{{\"customer note\" | translate}}</ion-label>\r\n\t  <ion-textarea rows=\"3\" required type=\"text\" [(ngModel)]=\"orders.customer_note\" name=\"customer_note\"></ion-textarea>\r\n\t</ion-item>\r\n\r\n    <ion-item style=\"background: #f2f2f2\">\r\n      <ion-label>{{\"Billing Address\" | translate}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"First Name\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.first_name\" name=\"billing_first_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Last Name\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.last_name\" name=\"billing_last_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Company\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.company\" name=\"billing_company\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Address\" | translate}}1</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.address_1\" name=\"billing_address_1\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Address\" | translate}}2</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.address_2\" name=\"billing_address_2\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"City\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.city\" name=\"billing_city\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"State\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.state\" name=\"billing_state\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Postcode\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.postcode\" name=\"billing_postcode\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Country\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.country\" name=\"billing_country\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Email\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.email\" name=\"billing_email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Phone\" | translate}}</ion-label>\r\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.billing.phone\" name=\"billing_phone\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item style=\"background: #f2f2f2\">\r\n      <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"First Name\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.first_name\" name=\"shipping_first_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Last Name\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.last_name\" name=\"shipping_last_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Company\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.company\" name=\"shipping_company\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Address\" | translate}}1</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.address_1\" name=\"shipping_address_1\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Address\" | translate}}2</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.address_2\" name=\"shipping_address_2\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"City\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.city\" name=\"shipping_city\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"State\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.state\" name=\"shipping_state\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Postcode\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.postcode\" name=\"shipping_postcode\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">{{\"Country\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.country\" name=\"shipping_country\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item style=\"background: #f2f2f2\">\r\n      <h2 item-left style=\"font-size: 19px\">{{\"Line Items\" | translate}}</h2>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"orders.line_items.length\">\r\n          <div *ngFor=\"let item of orders.line_items\">\r\n                <ion-list style=\"margin-bottom: 5px;\">\r\n                    <ion-item>\r\n                      <ion-label>{{item.name}}</ion-label>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label position=\"floating\">{{\"Price\" | translate}}</ion-label>\r\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.price\" name=\"price\"></ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\r\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.quantity\" name=\"quantity\"></ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label position=\"floating\">{{\"Sub Total\" | translate}}</ion-label>\r\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.subtotal\" name=\"subtotal\"></ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label position=\"floating\">{{\"Total\" | translate}}</ion-label>\r\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.total\" name=\"total\"></ion-input>\r\n                    </ion-item>\r\n                </ion-list>\r\n          </div>\r\n    </div>\r\n\r\n\r\n  </ion-list>\r\n\r\n  <div style=\"text-align: center;\">\r\n    <ion-button size=\"full\" color=\"{{settings.theme.button}}\" (click)=\"save()\" [disabled]=\"disableButton\">{{\"Save\" | translate}}</ion-button>\r\n  </div>\r\n\r\n</div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-product/edit-product.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-product/edit-product.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorEditProductEditProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' class=\"product-header\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/products-list\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{product?.name}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"product\">\r\n\r\n  <div *ngIf=\"product\" class=\"margin\">\r\n\r\n  <ion-list>\r\n  <ion-list-header>\r\n    <ion-label>{{\"Product ID\" | translate}} - {{product.id}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Name\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"product.name\" name=\"name\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"padding-top:10px\">\r\n      <ion-label position=\"floating\">{{\"Type\" | translate}}</ion-label>\r\n      <ion-select [(ngModel)]=\"product.type\" name=\"type\" okText=\"OK\" cancelText=\"Cancel\">\r\n                 <ion-select-option value=\"simple\">{{\"Simple\" | translate}}</ion-select-option>\r\n               <ion-select-option value=\"grouped\">{{\"Grouped\" | translate}}</ion-select-option>\r\n               <ion-select-option value=\"external\">{{\"External\" | translate}}</ion-select-option>\r\n               <!--ion-select-option value=\"variable\">Variable</ion-select-option-->\r\n      </ion-select>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item style=\"padding-top:10px\">\r\n      <ion-label position=\"floating\">{{\"Status\" | translate}}</ion-label>\r\n      <ion-select [(ngModel)]=\"product.status\" name=\"status\" okText=\"OK\" cancelText=\"Cancel\">\r\n                 <ion-select-option value=\"draft\">{{\"Draft\" | translate}}</ion-select-option>\r\n               <ion-select-option value=\"pending\">{{\"Pending\" | translate}}</ion-select-option>\r\n               <!--ion-select-option value=\"public\">public</ion-select-option-->\r\n               <ion-select-option value=\"publish\">{{\"Publish\" | translate}}</ion-select-option>\r\n      </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"product.type == 'external'\">\r\n    <ion-label position=\"floating\">{{\"External Url\" | translate}}</ion-label>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"product.external_url\" name=\"external_url\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Short Description\" | translate}}</ion-label>\r\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.short_description\" name=\"short_description\"></ion-textarea>\r\n  </ion-item>  \r\n\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\r\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.description\" name=\"description\"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <ion-list-header>\r\n    <ion-label>{{\"Image\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n      <div style=\"padding: 8px 16px;\">\r\n      <div *ngIf=\"product?.images && product.images.length\">\r\n      <img tappable *ngFor=\"let item of product.images; let i = index;\" src=\"{{item.src}}\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"replaceImage(i)\">\r\n      </div>\r\n\r\n      <ion-spinner *ngIf=\"uploadingImage\" name=\"circles\" style=\"float: left; margin: 27px 27px 27px 27px; padding: 3px; display: inline;\"></ion-spinner>\r\n      \r\n      <img tappable src=\"assets/image/upload_placeholder.png\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"picker()\"/>\r\n    </div>\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"product.regular_price\" name=\"regular_price\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"product.sale_price\" name=\"sale_price\"></ion-input>\r\n  </ion-item>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Weight\" | translate}}</ion-label>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"product.weight\" name=\"weight\"></ion-input>\r\n</ion-item>\r\n\r\n  <ion-item class=\"date\">\r\n      <ion-label position=\"floating\">{{\"Date On Sale From\" | translate}}</ion-label>\r\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"date\">\r\n      <ion-label position=\"floating\">{{\"Date On Sale To\" | translate}}</ion-label>\r\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Purchasable\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.purchasable\" name=\"purchasable\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.in_stock\" name=\"in_stock\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Shipping Required\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.shipping_required\" name=\"shipping_required\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Sold Individually\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.sold_individually\" name=\"sold_individually\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"option\" *ngIf=\"product.type != 'external'\">\r\n    <ion-label>{{\"Manage Stock\" | translate}}</ion-label>\r\n    <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.manage_stock\" name=\"manage_stock\"></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"product.manage_stock && product.type != 'external'\">\r\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\r\n    <ion-input required type=\"number\" [(ngModel)]=\"product.stock_quantity\" name=\"stock_quantity\"></ion-input>\r\n</ion-item>\r\n\r\n  <ion-item style=\"padding-top:10px\" *ngIf=\"data?.categories\">\r\n      <ion-label position=\"floating\">{{\"Categories\" | translate}}</ion-label>\r\n      <ion-select [(ngModel)]=\"categories\" name=\"categories\" multiple=\"true\" okText=\"OK\" cancelText=\"Cancel\">\r\n                <div *ngFor=\"let field of data.categories\">\r\n                 <ion-select-option value=\"{{field.id}}\"><span [innerHTML]=\"field.name\"></span></ion-select-option>\r\n                </div>\r\n      </ion-select>\r\n  </ion-item>\r\n\r\n  <div *ngIf=\"variations?.length\" class=\"related-products\">\r\n    <ion-item *ngIf=\"variations\" class=\"related-item-name\">{{\"Variations\" | translate}}</ion-item>\r\n    <div class=\"scroll-related-products\">\r\n        <div class=\"product\" *ngFor=\"let item of variations\" [style.width.%]=\"settings.dimensions.productSliderWidth\">\r\n            <ion-card class=\"ion-activatable ion-focusable hydrated\">\r\n              <ion-img alt=\"\" (click)=\"editProduct(item)\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" src=\"{{item.image.src}}\"></ion-img>\r\n              <ion-card-header (click)=\"editProduct(item)\">\r\n                  <ion-card-subtitle mode=\"md\" style=\"text-align: center;\">{{item.id}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content (click)=\"editProduct(item)\">\r\n                  <p class=\"price\">\r\n                    <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n                      <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:'symbol':'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:'symbol':'1.2-2'}}</del></span></span>\r\n                  </p>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n    <div padding>\r\n    <ion-button class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"saveProduct()\">{{\"SAVE\" | translate}}</ion-button>\r\n    </div>\r\n\r\n  </ion-list>\r\n\r\n</div>\r\n\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-variation/edit-variation.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-variation/edit-variation.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorEditVariationEditVariationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/vendor-products/edit-product\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{product?.name}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"product\">\r\n\r\n  <div *ngIf=\"product\" class=\"margin\">\r\n\r\n    <ion-list>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Product ID\" | translate}} - {{product.id}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\r\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.description\" name=\"description\"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <ion-list-header>\r\n      <ion-label>{{\"Image\" | translate}}</ion-label>\r\n  </ion-list-header>\r\n\r\n  <img tappable *ngFor=\"let item of product.images; let i = index;\" src=\"{{item.src}}\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"replaceImage(i)\">\r\n\r\n  <ion-spinner *ngIf=\"uploadingImage\" name=\"circles\" style=\"float: left; margin: 27px 27px 27px 27px; padding: 3px; display: inline;\"></ion-spinner>\r\n  \r\n  <img tappable src=\"assets/image/upload_placeholder.png\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"picker()\"/>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Price\" | translate}}</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"product.price\" name=\"price\" readonly></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label>\r\n      <ion-input required type=\"number\" [(ngModel)]=\"product.regular_price\" name=\"regular_price\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\r\n      <ion-input required type=\"number\" [(ngModel)]=\"product.sale_price\" name=\"sale_price\"></ion-input>\r\n  </ion-item>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"weight\" | translate}}</ion-label>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"product.weight\" name=\"weight\"></ion-input>\r\n</ion-item>\r\n\r\n  <ion-item class=\"date\">\r\n      <ion-label position=\"floating\">{{\"Date on sale from\" | translate}}</ion-label>\r\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"date\">\r\n      <ion-label position=\"floating\">{{\"Date on sale to\" | translate}}</ion-label>\r\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\r\n      <ion-toggle checked=\"true\" [(ngModel)]=\"product.in_stock\" name=\"in_stock\"></ion-toggle>\r\n  </ion-item>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\r\n    <ion-input required type=\"number\" [(ngModel)]=\"product.stock_quantity\" name=\"stock_quantity\"></ion-input>\r\n</ion-item>\r\n\r\n<!--div *ngIf=\"product.attributes?.length\">\r\n  <ion-label>Attributes</ion-label>\r\n  <ion-item *ngFor=\"let item of product.attributes\">\r\n  <ion-grid>\r\n  <ion-row>\r\n  <ion-col>\r\n  {{item.name}}\r\n  </ion-col>\r\n  <ion-col>\r\n  {{item.option}}\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n  </ion-item>\r\n</div-->\r\n\r\n  </ion-list>\r\n\r\n</div>\r\n\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-list/order-list.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-list/order-list.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorOrderListOrderListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n  \t<ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"Orders\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding order-list\">\r\n\r\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\r\n\r\n\r\n    <div *ngIf=\"orders\">\r\n      <div *ngIf=\"!loader && orders.length == 0\" text-center class=\"empty\">\r\n      <ion-icon name=\"document\"></ion-icon>\r\n    </div>\r\n\r\n    <div *ngIf=\"settings.settings?.vendorType !== 'product_vendor'\">\r\n    <ion-card *ngFor=\"let item of orders\" mode=\"{{settings.settings.mode}}\" button=\"true\" (click)=\"getDetail(item)\" class=\"ion-activatable ion-focusable {{settings.settings.product_shadow}}\">\r\n      <ion-card-header (click)=\"getDetail(item)\">\r\n        <ion-card-subtitle>{{item.id}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\r\n        <ion-card-title>{{item.total | currency:settings.currency:'symbol':'1.2-2'}}</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\r\n        <p [innerHTML]=\"item.payment_method_title\"></p>\r\n        <ion-button size=\"small\" (click)=\"getDetail(item); $event.stopPropagation()\" color=\"{{settings.theme.button}}\" fill=\"outline\" slot=\"start\">\r\n        <ion-icon slot=\"icon-only\" name=\"eye\"></ion-icon>\r\n        {{\"View\" | translate}}\r\n        </ion-button>\r\n        <ion-button size=\"small\" (click)=\"editOrder(item); $event.stopPropagation()\" color=\"{{settings.theme.button}}\" fill=\"outline\" slot=\"end\">\r\n        <ion-icon slot=\"icon-only\" name=\"create\" mode=\"ios\"></ion-icon>\r\n        {{\"Edit\" | translate}}\r\n        </ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </div>\r\n\r\n\r\n    <!-- WOOCOMMERCE PRODUCT VENDOR -->\r\n    <div *ngIf=\"settings.settings?.vendorType === 'product_vendor'\">\r\n    <ion-card *ngFor=\"let item of orders\" mode=\"{{settings.settings.mode}}\" button=\"true\">\r\n      <ion-card-header class=\"ion-activatable ion-focusable hydrated\">\r\n        <ion-card-subtitle>{{item.id}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\r\n        <ion-card-title>{{item.total_commission_amount | currency:settings.currency:'symbol':'1.2-2'}}</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\r\n        <p [innerHTML]=\"item.payment_method_title\"></p>\r\n        <p>{{item.shipping.first_name}} {{item.shipping.last_name}} {{item.shipping.company}} {{item.shipping.address_1}} {{item.shipping.address_2}} {{item.shipping.city}} {{item.shipping.state}} {{item.shipping.postcode}} {{item.shipping.country}}</p>\r\n        <ion-button size=\"small\" color=\"{{item.fulfillment_status === 'fulfilled' ? 'success': 'danger'}}\" fill=\"outline\" slot=\"start\" (click)=\"updateOrderStatus(item)\">\r\n        {{item.fulfillment_status.toUpperCase() | translate}}\r\n        </ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </div>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && orders.length\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-note-list/order-note-list.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-note-list/order-note-list.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorOrderNoteListOrderNoteListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-title>{{\"Order Note List\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/category/category.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/category/category.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddCategoryCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios' class=\"product-header\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{\"Select Category\" | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"categories\">\r\n\t<ion-row>\r\n    <ion-col size='6' *ngFor=\"let category of data.mainCategories\" (click)=\"getCategory(category.id, category.slug, category.name)\">\r\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\r\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\r\n      <ion-card-header>\r\n        <ion-card-subtitle [innerHTML]=\"category.name\"></ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/details/details.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/details/details.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/category\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{\"Details\" | translate}}\r\n    </ion-title>\r\n\r\n     <ion-buttons slot=\"end\">\r\n\t    <ion-button style=\"margin-right: 10px; text-transform: capitalize;\" (click)=\"next()\">{{\"Next\" | translate}}</ion-button>\r\n\t  </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Product Name\" | translate}}</ion-label>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.name\" name=\"name\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n    <ion-label>{{\"Type\" | translate}}</ion-label>\r\n    <ion-select [(ngModel)]=\"vendor.product.type\" name=\"type\" okText=\"OK\" cancelText=\"Cancel\">\r\n               <ion-select-option value=\"simple\">{{\"Simple\" | translate}}</ion-select-option>\r\n               <ion-select-option value=\"external\">{{\"External\" | translate}}</ion-select-option>\r\n    </ion-select>\r\n</ion-item>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label> \r\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.regular_price\" name=\"regular_price\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.sale_price\" name=\"sale_price\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Short Description\" | translate}}</ion-label>\r\n    <ion-textarea  rows=\"2\" required type=\"text\" [(ngModel)]=\"vendor.product.short_description\" name=\"short_description\"></ion-textarea>\r\n</ion-item> \r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\r\n    <ion-textarea rows=\"3\" required type=\"text\" [(ngModel)]=\"vendor.product.description\" name=\"short_description\"></ion-textarea>\r\n</ion-item>\r\n\r\n<ion-item>\r\n    <ion-label position=\"floating\">{{\"Weight\" | translate}}</ion-label>\r\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.weight\" name=\"weight\"></ion-input>\r\n</ion-item>\r\n\r\n  <ion-item class=\"date\">\r\n      <ion-label position=\"floating\">{{\"Date On Sale From\" | translate}}</ion-label>\r\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"vendor.product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"date\">\r\n      <ion-label position=\"floating\">{{\"Date On Sale To\" | translate}}</ion-label>\r\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"vendor.product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Purchasable\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.purchasable\" name=\"purchasable\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.in_stock\" name=\"in_stock\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Shipping Required\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.shipping_required\" name=\"shipping_required\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n      <ion-label>{{\"Sold Individually\" | translate}}</ion-label>\r\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.sold_individually\" name=\"sold_individually\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"option\" *ngIf=\"vendor.product.type != 'external'\">\r\n    <ion-label>{{\"Manage Stock\" | translate}}</ion-label>\r\n    <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.manage_stock\" name=\"manage_stock\"></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item *ngIf=\"vendor.product.manage_stock && vendor.product.type != 'external'\">\r\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\r\n    <ion-input required type=\"number\" [(ngModel)]=\"vendor.product.stock_quantity\" name=\"stock_quantity\"></ion-input>\r\n</ion-item>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/photos/photos.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/photos/photos.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddPhotosPhotosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/category/{{vendor.product.categories[0]}}/details\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{\"Photos\" | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\t<div class=\"camera\">\r\n\t  <ion-button fill=\"clear\" color=\"{{settings.theme.button}}\"  (click)=\"picker()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\r\n\t</div>\r\n{{err | json}}\r\n\t<div style=\"text-align: center; margin: 20px 0;\">\r\n\t    <ion-spinner *ngIf=\"uploadingImageSpinner\"></ion-spinner>\r\n\t</div>\r\n\r\n  <div class=\"images\" *ngIf=\"vendor.product.images.length\">\r\n    <ion-row class=\"row\">\r\n      <ion-col *ngFor=\"let item of vendor.product.images; let i = index;\" class=\"col\">\r\n        <img tappable src=\"{{item.src}}\" (click)=\"replaceImage(i)\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n  <ion-footer>\r\n    <ion-toolbar>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button size=\"full\" (click)=\"publish()\" color=\"{{settings.theme.button}}\">{{\"Publish\" | translate}}</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button size=\"full\" (click)=\"draft()\" color=\"{{settings.theme.button}}\">{{\"Draft\" | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/subcategory/subcategory.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/subcategory/subcategory.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorProductAddSubcategorySubcategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account/category\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{\"Select Subcategory\" | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\t<ion-row>\r\n    <ion-col size='6' *ngFor=\"let category of subCategories\" (click)=\"getCategory(category.id)\">\r\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\r\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\r\n      <ion-card-header>\r\n        <ion-card-subtitle><span [innerHTML]=\"category.name\"></span></ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-list/product-list.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-list/product-list.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorProductListProductListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      {{\"Products\" | translate}}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" fill=\"clear\" (click)=\"getFilter()\"><ion-icon name=\"funnel\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon></ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\r\n\r\n  <div class=\"spinner\" *ngIf=\"!loader && products?.length == 0\">{{\"No Results\" | translate}}</div>\r\n\r\n  <!--ion-row>\r\n    <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let product of products\">\r\n    <ion-card mode=\"{{settings.settings.mode}}\">\r\n\r\n    <ion-img src=\"{{product.images[0].src}}\" *ngIf=\"product.images.length\"></ion-img>\r\n\r\n    <ion-card-header>\r\n      <ion-card-title>{{product.name}}</ion-card-title>\r\n      <ion-card-subtitle><span class=\"regular-price\">{{1*product.price | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n            <span *ngIf=\"product.sale_price\" class=\"special-price\"><del>{{1*product.sale_price | currency:settings.currency:'symbol':'1.2-2'}}</del></span>\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-icon style=\"float: right; padding: 10px 10px;\" color=\"primary\" slot=\"icon-only\" (click)=\"editProduct(product)\" name=\"create\"></ion-icon>\r\n      <ion-icon style=\"float: left; padding: 10px 10px;\" color=\"danger\" slot=\"icon-only\" (click)=\"delete(product)\" name=\"trash\"></ion-icon>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n</ion-col>\r\n</ion-row-->\r\n\r\n<ion-item *ngFor=\"let product of products\">\r\n  <ion-thumbnail slot=\"start\" style=\"width: 80px; height: 80px;\">\r\n    <img src=\"{{product.images[0].src}}\" *ngIf=\"product.images.length\">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n  <h4>{{product.name}}</h4>\r\n  <p [innerHTML]=\"product.description\"></p>\r\n  <h4><span class=\"regular-price\">{{1*product.price | currency:settings.currency:'symbol':'1.2-2'}}</span>\r\n            <span *ngIf=\"product.sale_price\" class=\"special-price\"><del>{{1*product.sale_price | currency:settings.currency:'symbol':'1.2-2'}}</del></span></h4>\r\n          <ion-icon style=\"float: right; padding: 10px 10px;\" color=\"primary\" slot=\"icon-only\" (click)=\"editProduct(product)\" name=\"create\"></ion-icon>\r\n      <ion-icon style=\"float: left; padding: 10px 10px;\" color=\"danger\" slot=\"icon-only\" (click)=\"delete(product)\" name=\"trash\"></ion-icon>\r\n</ion-label>\r\n\r\n</ion-item>\r\n  \r\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products?.length\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\t\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-info/vendor-info.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-info/vendor-info.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorVendorInfoVendorInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-title>{{\"Vendor Detail\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n{{vendor.vendor.shop.title}}\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-list/vendor-list.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-list/vendor-list.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorVendorListVendorListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      {{\"Vendors\" | translate}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"vendor-list\">\r\n\t<div class=\"spinner\" *ngIf=\"!vendors\"><ion-spinner> </ion-spinner></div>\r\n\r\n\t<!-- Common -->\r\n\t<ion-row *ngIf=\"vendors?.length\">\r\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\r\n\t    <ion-card class=\"category-card\" mode=\"{{settings.settings.mode}}\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\">\r\n\t      <ion-img *ngIf=\"item.icon\" src=\"{{item.icon}}\"></ion-img>\r\n\t      <ion-card-header>\r\n\t        <ion-card-title>{{item.name}}</ion-card-title>\r\n\t      </ion-card-header>\r\n\t    </ion-card>\r\n\t    </ion-col>\r\n  \t</ion-row>\r\n\t<!-- Common -->\r\n\r\n\t<!-- WC Marketplace -->\r\n\t<!--ion-row *ngIf=\"!vendors?.length\">\r\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\r\n\t    <ion-card class=\"category-card\" mode=\"md\" class=\"ion-activatable ion-focusable hydrated\">\r\n\t      <ion-img *ngIf=\"item.shop?.logo\" src=\"{{item.shop?.logo}}\"></ion-img>\r\n\t      <ion-card-header>\r\n\t        <ion-card-title>{{item.shop.title}}</ion-card-title>\r\n\t      </ion-card-header>\r\n\t    </ion-card>\r\n\t    </ion-col>\r\n  \t</ion-row-->\r\n\t<!-- WC Marketplace -->\r\n\r\n\t<!--DOKAN-->\r\n\t<!--ion-row>\r\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\r\n\t    <ion-card class=\"category-card\" mode=\"md\" class=\"ion-activatable ion-focusable hydrated\">\r\n\t      <ion-img *ngIf=\"item.logo\" src=\"{{item.logo}}\"></ion-img>\r\n\t      <ion-img *ngIf=\"!item.logo\" src=\"assets/image/logo.png\"></ion-img>\r\n\t      <ion-card-header>\r\n\t        <ion-card-title>{{item.store_name}}</ion-card-title>\r\n\t      </ion-card-header>\r\n\t    </ion-card>\r\n\t    </ion-col>\r\n  \t</ion-row-->\r\n\t<!--DOKAN-->\r\n\r\n\t<!-- WCFM -->\r\n\t<!--ion-row>\r\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\r\n\t    <ion-card class=\"category-card\" mode=\"md\" class=\"ion-activatable ion-focusable hydrated\">\r\n\t      <ion-img *ngIf=\"item?.banner\" src=\"{{item?.banner}}\"></ion-img>\r\n\t      <ion-card-header>\r\n\t        <ion-card-title>{{item.store_info.store_name}}</ion-card-title>\r\n\t      </ion-card-header>\r\n\t    </ion-card>\r\n\t    </ion-col>\r\n  \t</ion-row-->\r\n\t<!-- WCFM -->\r\n\r\n\r\n\t<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && vendors?.length\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n\t</ion-infinite-scroll>\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/account/account.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/account/account.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon-start {\n  font-size: 22px;\n}\n\n.my-account-header {\n  background-color: var(--account-header, #36454f);\n  color: var(--account-header-text, #000);\n  padding-top: 20px;\n}\n\n.my-account-header .account-name {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--account-header-text, #000);\n}\n\n.my-account-header .header-menus ion-item {\n  color: var(--account-header-text, #000);\n}\n\n.my-account-header .header-menus ion-icon {\n  margin-right: 10px;\n}\n\n.icon-header-icon {\n  padding: 15px;\n  background-color: var(--account-header-text, #000);\n  border-radius: 50%;\n  font-size: xx-large;\n  color: var(--account-header, #36454f);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-list a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n@media (min-width: 700px) {\n  ion-list {\n    max-width: 600px;\n    margin: auto;\n    margin-top: 40px;\n  }\n}\n\nion-list ion-item:first-child {\n  --border-width: 0.55px 0 0 0;\n}\n\nion-list ion-item:last-child {\n  --border-width: 0 0 0.55px 0;\n  --inner-border-width: 0 0 0 0;\n}\n\nion-list ion-icon {\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n\n.list-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGFjY291bnRcXGFjY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksZUFBQTtBQ0hKOztBREtBO0VBQ0ksZ0RBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0FDRko7O0FER0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQ0RSOztBRElRO0VBQ0ksdUNBQUE7QUNGWjs7QURJUTtFQUNJLGtCQUFBO0FDRlo7O0FETUE7RUFDSSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwrR0FBQTtBQ0hKOztBRE1JO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtBQ0hSOztBREtJO0VBSko7SUFLUSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0ZOO0FBQ0Y7O0FER0k7RUFDSSw0QkFBQTtBQ0RSOztBREdJO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQ0RSOztBREdJO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXN0YXJ0IHtcclxuICAgIC8vcGFkZGluZzogNnB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlciwgIzM2NDU0Zik7IC8vIFVuQ29tbWVudCB0aGlzIHRvIGFkZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIGljb25cclxuICAgIC8vY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiA1MCU7IC8vIFR1bmUgdGhpcyB0byBhZGQgcm91bmRlZCBjb3JuZXIgd2hlbiBhZGRlZCBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBmb250LXNpemU6IDIycHg7IC8vIEFkanVzdCB0aGUgc2l6ZSBvZiB0aGUgaWNvblxyXG59XHJcbi5teS1hY2NvdW50LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlciwgIzM2NDU0Zik7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC5hY2NvdW50LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlci10ZXh0LCAjMDAwKTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbWVudXMge1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmljb24taGVhZGVyLWljb24ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlciwgIzM2NDU0Zik7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwLjU1cHggMCAwIDA7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAwO1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICM0Mjh4ZmYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuLmxpc3QtbWQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn0iLCIuaWNvbi1zdGFydCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm15LWFjY291bnQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXIsICMzNjQ1NGYpO1xuICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLm15LWFjY291bnQtaGVhZGVyIC5hY2NvdW50LW5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlci10ZXh0LCAjMDAwKTtcbn1cbi5teS1hY2NvdW50LWhlYWRlciAuaGVhZGVyLW1lbnVzIGlvbi1pdGVtIHtcbiAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xufVxuLm15LWFjY291bnQtaGVhZGVyIC5oZWFkZXItbWVudXMgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pY29uLWhlYWRlci1pY29uIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLCAjMzY0NTRmKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5pb24tbGlzdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgaW9uLWxpc3Qge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn1cbmlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAuNTVweCAwIDAgMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweCAwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbn1cbmlvbi1saXN0IGlvbi1pY29uIHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/account.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/account/account.page.ts ***!
    \*****************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/app-rate/ngx */
    "./node_modules/@ionic-native/app-rate/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AccountPage =
    /*#__PURE__*/
    function () {
      function AccountPage(statusBar, config, api, navCtrl, settings, platform, appRate, emailComposer, socialSharing) {
        _classCallCheck(this, AccountPage);

        this.statusBar = statusBar;
        this.config = config;
        this.api = api;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.platform = platform;
        this.appRate = appRate;
        this.emailComposer = emailComposer;
        this.socialSharing = socialSharing;
      }

      _createClass(AccountPage, [{
        key: "goTo",
        value: function goTo(path) {
          this.navCtrl.navigateForward(path);
        }
      }, {
        key: "log_out",
        value: function log_out() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.settings.customer.id = undefined;
                    this.settings.vendor = false;
                    this.settings.administrator = false;
                    this.settings.wishlist = [];
                    _context.next = 6;
                    return this.api.postItem('logout').subscribe(function (res) {}, function (err) {
                      console.log(err);
                    });

                  case 6:
                    if (window.AccountKitPlugin) window.AccountKitPlugin.logout();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "rateApp",
        value: function rateApp() {
          if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
              ios: this.settings.settings.rate_app_ios_id,
              android: this.settings.settings.rate_app_android_id,
              windows: 'ms-windows-store://review/?ProductId=' + this.settings.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(false);
          }
        }
      }, {
        key: "shareApp",
        value: function shareApp() {
          if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android')) url = this.settings.settings.share_app_android_link;else url = this.settings.settings.share_app_ios_link;
            var options = {
              message: '',
              subject: '',
              files: ['', ''],
              url: url,
              chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
          }
        }
      }, {
        key: "email",
        value: function email(contact) {
          var email = {
            to: contact,
            attachments: [],
            subject: '',
            body: '',
            isHtml: true
          };
          this.emailComposer.open(email);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.toggle = document.querySelector('#themeToggle');
          this.toggle.addEventListener('ionChange', function (ev) {
            document.body.classList.toggle('dark', ev.detail.checked);

            if (ev.detail.checked) {
              _this.statusBar.backgroundColorByHexString('#121212');

              _this.statusBar.styleLightContent();
            } else {
              _this.statusBar.backgroundColorByHexString('#ffffff');

              _this.statusBar.styleDefault();
            }
          });
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
          prefersDark.addListener(function (e) {
            return checkToggle(e.matches);
          });

          function loadApp() {
            checkToggle(prefersDark.matches);
          }

          function checkToggle(shouldCheck) {
            this.toggle.checked = shouldCheck;
          }
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_8__["Config"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__["AppRate"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]
      }];
    };

    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.page.scss */
      "./src/app/account/account.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _config__WEBPACK_IMPORTED_MODULE_8__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__["AppRate"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])], AccountPage);
    /***/
  },

  /***/
  "./src/app/account/address/address.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/account/address/address.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/address/address.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/account/address/address.page.ts ***!
    \*************************************************/

  /*! exports provided: AddressPage */

  /***/
  function srcAppAccountAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
      return AddressPage;
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

    var AddressPage =
    /*#__PURE__*/
    function () {
      function AddressPage(platform, api, settings, router, loadingController, navCtrl, route) {
        _classCallCheck(this, AddressPage);

        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
      }

      _createClass(AddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCustomer();
        }
      }, {
        key: "getCustomer",
        value: function getCustomer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    if (!this.platform.is('hybrid')) {
                      _context2.next = 10;
                      break;
                    }

                    _context2.next = 8;
                    return this.api.getItemIonic('customers/' + this.settings.customer.id).then(function (res) {
                      _this2.settings.customer = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 8:
                    _context2.next = 12;
                    break;

                  case 10:
                    _context2.next = 12;
                    return this.api.getItem('customers/' + this.settings.customer.id).subscribe(function (res) {
                      _this2.settings.customer = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "editAddress",
        value: function editAddress() {
          this.navCtrl.navigateForward('/tabs/account/address/edit-address');
        }
      }]);

      return AddressPage;
    }();

    AddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
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

    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/account/address/address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], AddressPage);
    /***/
  },

  /***/
  "./src/app/account/blog/blog.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/account/blog/blog.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountBlogBlogPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".post a {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n}\n.post ion-card {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.post .comments ion-icon {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9ibG9nL0Q6XFx3b290b3BcXFdvb1Rvb3AtQXBwQW5kcm9pZC9zcmNcXGFwcFxcYWNjb3VudFxcYmxvZ1xcYmxvZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYmxvZy9ibG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQVI7QURFSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2Jsb2cvYmxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XHJcbiAgICBhIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHMge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIucG9zdCBhIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnBvc3QgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucG9zdCAuY29tbWVudHMgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/blog/blog.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/blog/blog.page.ts ***!
    \*******************************************/

  /*! exports provided: BlogPage */

  /***/
  function srcAppAccountBlogBlogPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPage", function () {
      return BlogPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../data/post */
    "./src/app/data/post.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var BlogPage =
    /*#__PURE__*/
    function () {
      function BlogPage(api, router, post, settings, route) {
        _classCallCheck(this, BlogPage);

        this.api = api;
        this.router = router;
        this.post = post;
        this.settings = settings;
        this.route = route;
        this.commentFilter = {
          page: 1
        };
        this.hasMoreItems = true;
      }

      _createClass(BlogPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.getPost();
          this.getComments();
        }
      }, {
        key: "getPost",
        value: function getPost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.api.getPosts('/wp-json/wp/v2/posts/' + this.id + '?_embed').subscribe(function (res) {
                      _this3.post.post = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.post.post = {};
        }
      }, {
        key: "getComments",
        value: function getComments() {
          var _this4 = this;

          this.api.getPosts('/wp-json/wp/v2/comments?post=' + this.id + '&page=' + this.commentFilter.page).subscribe(function (res) {
            _this4.comments = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getMoreComments",
        value: function getMoreComments(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.commentFilter.page = this.commentFilter.page + 1;
                    this.api.getPosts('/wp-json/wp/v2/comments?post=' + this.id + '&page=' + this.commentFilter.page).subscribe(function (res) {
                      _this5.results = res;

                      _this5.comments.push.apply(_this5.comments, _this5.results);

                      event.target.complete();
                      if (_this5.results.length == 0) _this5.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return BlogPage;
    }();

    BlogPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _data_post__WEBPACK_IMPORTED_MODULE_4__["Post"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blog/blog.page.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.page.scss */
      "./src/app/account/blog/blog.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_post__WEBPACK_IMPORTED_MODULE_4__["Post"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], BlogPage);
    /***/
  },

  /***/
  "./src/app/account/blogs/blogs.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/account/blogs/blogs.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountBlogsBlogsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blogs a {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none;\n}\n.blogs .activated {\n  opacity: 0.4;\n}\n.blogs .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.blogs .empty ion-icon {\n  font-size: 7.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9ibG9ncy9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGFjY291bnRcXGJsb2dzXFxibG9ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYmxvZ3MvYmxvZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FERUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLGdCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2Jsb2dzL2Jsb2dzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ncyB7XHJcbiAgICBhIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2YXRlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgfVxyXG4gICAgLmVtcHR5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNy4yZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJsb2dzIGEge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmxvZ3MgLmFjdGl2YXRlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5ibG9ncyAuZW1wdHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmxvZ3MgLmVtcHR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA3LjJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/blogs/blogs.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/account/blogs/blogs.page.ts ***!
    \*********************************************/

  /*! exports provided: BlogsPage */

  /***/
  function srcAppAccountBlogsBlogsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogsPage", function () {
      return BlogsPage;
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


    var _data_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/post */
    "./src/app/data/post.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var BlogsPage =
    /*#__PURE__*/
    function () {
      function BlogsPage(api, router, post, settings, navCtrl) {
        _classCallCheck(this, BlogsPage);

        this.api = api;
        this.router = router;
        this.post = post;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.filter = {};
        this.hasMoreItems = true;
        this.filter.page = 1;
      }

      _createClass(BlogsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPosts();
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.api.getPosts('/wp-json/wp/v2/posts?_embed&per_page=10&page=' + this.filter.page).subscribe(function (res) {
                      if (res) _this6.posts = res;else _this6.posts.posts = [];
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    _context6.next = 3;
                    return this.api.getPosts('/wp-json/wp/v2/posts?_embed&per_page=10&page=' + this.filter.page).subscribe(function (res) {
                      if (res) {
                        _this7.results = res;

                        _this7.posts.push.apply(_this7.posts, _this7.results);

                        event.target.complete();
                      } else _this7.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getDetail",
        value: function getDetail(post) {
          this.post.post = post;
          this.navCtrl.navigateForward('/tabs/account/blogs/blog/' + post.id);
        }
      }]);

      return BlogsPage;
    }();

    BlogsPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_post__WEBPACK_IMPORTED_MODULE_5__["Post"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    BlogsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blogs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blogs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/blogs/blogs.page.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blogs.page.scss */
      "./src/app/account/blogs/blogs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_post__WEBPACK_IMPORTED_MODULE_5__["Post"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], BlogsPage);
    /***/
  },

  /***/
  "./src/app/account/currencies/currencies.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/account/currencies/currencies.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountCurrenciesCurrenciesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY3VycmVuY2llcy9jdXJyZW5jaWVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/currencies/currencies.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/account/currencies/currencies.page.ts ***!
    \*******************************************************/

  /*! exports provided: CurrenciesPage */

  /***/
  function srcAppAccountCurrenciesCurrenciesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrenciesPage", function () {
      return CurrenciesPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var CurrenciesPage =
    /*#__PURE__*/
    function () {
      function CurrenciesPage(api, home, router, settings, navCtrl) {
        _classCallCheck(this, CurrenciesPage);

        this.api = api;
        this.home = home;
        this.router = router;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.params = {};
        this.params.action = 'wcml_switch_currency';
        this.params.currency = settings.currency;
        this.params.force_switch = '0';
      }

      _createClass(CurrenciesPage, [{
        key: "applyCurrency",
        value: function applyCurrency() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.params.currency = this.settings.currency;
                    _context7.next = 3;
                    return this.api.ajaxCall('/wp-admin/admin-ajax.php', this.params).subscribe(function (res) {});

                  case 3:
                    this.home.getBlocks();
                    this.navCtrl.pop();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return CurrenciesPage;
    }();

    CurrenciesPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CurrenciesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currencies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currencies.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/currencies/currencies.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currencies.page.scss */
      "./src/app/account/currencies/currencies.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CurrenciesPage);
    /***/
  },

  /***/
  "./src/app/account/edit-address/edit-address.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/account/edit-address/edit-address.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountEditAddressEditAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZWRpdC1hZGRyZXNzL2VkaXQtYWRkcmVzcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/edit-address/edit-address.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/account/edit-address/edit-address.page.ts ***!
    \***********************************************************/

  /*! exports provided: EditAddressPage */

  /***/
  function srcAppAccountEditAddressEditAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAddressPage", function () {
      return EditAddressPage;
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

    var EditAddressPage =
    /*#__PURE__*/
    function () {
      function EditAddressPage(api, settings, router, navCtrl, route) {
        _classCallCheck(this, EditAddressPage);

        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.address = [];
        this.disableButton = false;
      }

      _createClass(EditAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.api.postItem('countries').subscribe(function (res) {
                      _this8.countries = res;

                      if (_this8.countries && _this8.countries.length == 1) {
                        _this8.address['billing_country'] = _this8.countries[0].value;
                        _this8.address['shipping_country'] = _this8.countries[0].value;
                        _this8.billingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.address['billing_country'];
                        });
                        _this8.shippingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.address['billing_country'];
                        });
                      } else {
                        _this8.billingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.settings.customer.billing.country;
                        });
                        _this8.shippingStates = _this8.countries.find(function (item) {
                          return item.value == _this8.settings.customer.shipping.country;
                        });
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "processAddress",
        value: function processAddress() {
          for (var key in this.settings.customer.billing) {
            this.address['billing_' + key] = this.settings.customer.billing[key];
          }

          for (var key in this.settings.customer.shipping) {
            this.address['shipping_' + key] = this.settings.customer.shipping[key];
          }

          this.updateAddress();
        }
      }, {
        key: "updateAddress",
        value: function updateAddress() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.disableButton = true;
                    _context9.next = 3;
                    return this.api.postItem('update-address', this.address).subscribe(function (res) {
                      _this9.status = res; // this.navCtrl.pop();

                      _this9.disableButton = false;
                    }, function (err) {
                      _this9.disableButton = false;
                    });

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getBillingRegion",
        value: function getBillingRegion() {
          var _this10 = this;

          this.billingStates = this.countries.find(function (item) {
            return item.value == _this10.settings.customer.billing.country;
          });
          this.settings.customer.billing.state = '';
        }
      }, {
        key: "getShippingRegion",
        value: function getShippingRegion() {
          var _this11 = this;

          this.shippingStates = this.countries.find(function (item) {
            return item.value == _this11.settings.customer.shipping.country;
          });
          this.settings.customer.shipping.state = '';
        }
      }]);

      return EditAddressPage;
    }();

    EditAddressPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EditAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/edit-address/edit-address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-address.page.scss */
      "./src/app/account/edit-address/edit-address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], EditAddressPage);
    /***/
  },

  /***/
  "./src/app/account/forgotten/forgotten.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/account/forgotten/forgotten.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountForgottenForgottenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forgotten {\n  position: relative;\n}\n.forgotten .form {\n  margin: 0;\n  position: absolute;\n  width: 90%;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.forgotten .form ion-list {\n  margin-bottom: 16px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9mb3Jnb3R0ZW4vRDpcXHdvb3RvcFxcV29vVG9vcC1BcHBBbmRyb2lkL3NyY1xcYXBwXFxhY2NvdW50XFxmb3Jnb3R0ZW5cXGZvcmdvdHRlbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvZm9yZ290dGVuL2ZvcmdvdHRlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDRVI7QUREUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZm9yZ290dGVuL2ZvcmdvdHRlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290dGVuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgLmVycm9yIHtcclxuICAgICAgICAvL2NvbG9yOiAjQjAwMDIwO1xyXG4gICAgfVxyXG59IiwiLmZvcmdvdHRlbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3Jnb3R0ZW4gLmZvcm0ge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZm9yZ290dGVuIC5mb3JtIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/forgotten/forgotten.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/account/forgotten/forgotten.page.ts ***!
    \*****************************************************/

  /*! exports provided: ForgottenPage */

  /***/
  function srcAppAccountForgottenForgottenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgottenPage", function () {
      return ForgottenPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ForgottenPage =
    /*#__PURE__*/
    function () {
      function ForgottenPage(api, loadingController, navCtrl, settings, fb) {
        _classCallCheck(this, ForgottenPage);

        this.api = api;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.fb = fb;
        this.status = {};
        this.disableSubmit = false;
        this.email = this.fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]
        });
        this.form = this.fb.group({
          otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          email: ['', '']
        });
      }

      _createClass(ForgottenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "forgotten",
        value: function forgotten() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context10.next = 3;
                    return this.api.postItem('email-otp', this.email.value).subscribe(function (res) {
                      _this12.status = res;

                      _this12.form.patchValue({
                        email: _this12.email.value.email
                      });

                      console.log(_this12.form.value.email);
                      _this12.disableSubmit = false;
                    }, function (err) {
                      _this12.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context11.next = 3;
                    return this.api.postItem('reset-user-password', this.form.value).subscribe(function (res) {
                      _this13.status = res; //this.navCtrl.navigateBack('/tabs/account');

                      _this13.disableSubmit = false;
                    }, function (err) {
                      _this13.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return ForgottenPage;
    }();

    ForgottenPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    ForgottenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgotten',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgotten.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/forgotten/forgotten.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgotten.page.scss */
      "./src/app/account/forgotten/forgotten.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], ForgottenPage);
    /***/
  },

  /***/
  "./src/app/account/login/login.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/account/login/login.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login1 {\n  padding: 0 16px;\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.login1 ion-list {\n  margin: 16px 8px;\n  background: transparent;\n}\n.login1 ion-list ion-item {\n  --background: transparent;\n}\n.login1 ion-button {\n  --border-radius: 4px;\n}\n.login1 p {\n  text-align: center;\n}\n.login1 ion-card {\n  padding: 10px;\n  margin: 0;\n}\n.login1 .my-account-text {\n  color: black;\n  font-size: x-large;\n  font-weight: 800;\n}\n.login-logo {\n  position: absolute;\n  margin: auto;\n}\n.login-logo img {\n  margin-top: -90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGFjY291bnRcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDRVI7QUREUTtFQUNJLHlCQUFBO0FDR1o7QURBSTtFQUNJLG9CQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0FDRVI7QURBSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURDQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSxpQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4xIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbjogMTZweCA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm15LWFjY291bnQtdGV4dCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG59XHJcbi5sb2dpbi1sb2dvIHtcclxuICAgIC8vd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOTBweDtcclxuICAgIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMkIzMkIyLCAjMTQ4OENDKSAhaW1wb3J0YW50OyAvL2dyYWRpZW50IGJhY2tncm91bmRcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2xvZ2luX2JhY2tncm91bmQ0LmpwZykgMCAwL2F1dG8gMTAwJSBuby1yZXBlYXQ7IC8vaW1hZ2UgYmFja2dyb3VuZFxyXG59IiwiLmxvZ2luMSB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubG9naW4xIGlvbi1saXN0IHtcbiAgbWFyZ2luOiAxNnB4IDhweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubG9naW4xIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5sb2dpbjEgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmxvZ2luMSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luMSBpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2dpbjEgLm15LWFjY291bnQtdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWFyZ2luLXRvcDogLTkwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/login/login.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/account/login/login.page.ts ***!
    \*********************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppAccountLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(platform, oneSignal, api, settings, loadingController, router, navCtrl, fb, googlePlus, facebook) {
        _classCallCheck(this, LoginPage);

        this.platform = platform;
        this.oneSignal = oneSignal;
        this.api = api;
        this.settings = settings;
        this.loadingController = loadingController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.status = {};
        this.disableSubmit = false;
        this.pushForm = {};
        this.googleStatus = {};
        this.faceBookStatus = {};
        this.googleLogingInn = false;
        this.appleLogingInn = false; // userData:any = {};

        this.facebookLogingInn = false;
        this.phoneLogingInn = false;
        this.form = this.fb.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this14 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context12.next = 3;
                    return this.api.postItem('login', this.form.value).subscribe(function (res) {
                      _this14.status = res;

                      if (_this14.status.errors) {
                        _this14.errors = _this14.status.errors;

                        for (var key in _this14.errors) {
                          _this14.errors[key].forEach(function (item) {
                            return item.replace('<strong>ERROR<\/strong>:', '');
                          });
                        }
                      } else if (_this14.status.data) {
                        _this14.settings.customer.id = _this14.status.ID;

                        if (_this14.platform.is('cordova')) {
                          _this14.oneSignal.getIds().then(function (data) {
                            _this14.form.onesignal_user_id = data.userId;
                            _this14.form.onesignal_push_token = data.pushToken;

                            _this14.api.postItem('update_user_notification', _this14.form).subscribe(function (res) {});
                          });
                        }

                        if (_this14.status.allcaps.dc_vendor || _this14.status.allcaps.seller || _this14.status.allcaps.wcfm_vendor) {
                          _this14.settings.vendor = true;
                        }

                        if (_this14.status.allcaps.administrator) {
                          _this14.settings.administrator = true;
                        }

                        _this14.navCtrl.navigateBack('/tabs/account');
                      }

                      _this14.disableSubmit = false;
                    }, function (err) {
                      _this14.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "forgotton",
        value: function forgotton() {
          this.navCtrl.navigateForward('/tabs/account/login/forgotten');
        }
      }, {
        key: "appleLogin",
        value: function appleLogin() {
          console.log('apple signin');
          var self = this;
          cordova.plugins.SignInWithApple.signin({
            requestedScopes: [0, 1]
          }, function (succ) {
            console.log(succ); //    alert(JSON.stringify(succ))

            var userData = {
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              password: ''
            };
            var user = succ;
            userData.first_name = user.fullName.givenName;
            userData.last_name = user.fullName.familyName;
            userData.email = user.email;
            userData.password = "123456";
            userData.phone = " ";
            console.log("-------- apple login user ---------: ", userData);
            self.api.postItem('create-user', userData).subscribe(function (res) {
              self.status = res;
              console.log('apple register-status-------');
              console.log(res);

              if (self.status.errors) {
                self.errors = self.status.errors;
                self.disableSubmit = false;

                for (var key in self.errors) {
                  self.errors[key].forEach(function (item) {
                    return item.replace('<strong>ERROR<\/strong>:', '');
                  });
                }
              } else if (self.status.data != undefined) {
                self.settings.customer.id = self.status.ID;
                if (self.platform.is('cordova')) self.oneSignal.getIds().then(function (data) {
                  self.pushForm.onesignal_user_id = data.userId;
                  self.pushForm.onesignal_push_token = data.pushToken;
                  self.api.postItem('update_user_notification', self.pushForm).subscribe(function (res) {});
                });
                self.navCtrl.navigateBack('/tabs/account');
                self.disableSubmit = false;
              } else self.disableSubmit = false;
            }, function (err) {
              self.disableSubmit = false;
            });
          }, function (err) {
            console.error(err);
            console.log(JSON.stringify(err));
          });
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this15 = this;

          this.googleLogingInn = true;
          this.googlePlus.login({}).then(function (res) {
            _this15.googleStatus = res;

            _this15.api.postItem('google_login', {
              "access_token": _this15.googleStatus.userId,
              "email": _this15.googleStatus.email,
              "first_name": _this15.googleStatus.givenName,
              "last_name": _this15.googleStatus.familyName,
              "display_name": _this15.googleStatus.displayName,
              "image": _this15.googleStatus.imageUrl
            }).subscribe(function (res) {
              _this15.status = res;

              if (_this15.status.errors) {
                _this15.errors = _this15.status.errors;
              } else if (_this15.status.data) {
                _this15.settings.customer.id = _this15.status.ID;

                if (_this15.platform.is('cordova')) {
                  _this15.oneSignal.getIds().then(function (data) {
                    _this15.form.onesignal_user_id = data.userId;
                    _this15.form.onesignal_push_token = data.pushToken;
                  });

                  _this15.api.postItem('update_user_notification', _this15.form).subscribe(function (res) {});
                }

                if (_this15.status.allcaps.dc_vendor || _this15.status.allcaps.seller || _this15.status.allcaps.wcfm_vendor) {
                  _this15.settings.vendor = true;
                }

                if (_this15.status.allcaps.administrator) {
                  _this15.settings.administrator = true;
                }

                _this15.navCtrl.navigateBack('/tabs/account');
              }

              _this15.googleLogingInn = false;
            }, function (err) {
              _this15.googleLogingInn = false;
            });

            _this15.googleLogingInn = false;
          }).catch(function (err) {
            _this15.googleStatus = err;
            _this15.googleLogingInn = false;
          });
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this16 = this;

          this.facebookLogingInn = true;
          this.facebook.login(['public_profile', 'email']).then(function (res) {
            _this16.faceBookStatus = res;

            _this16.api.postItem('facebook_login', {
              "access_token": _this16.faceBookStatus.authResponse.accessToken
            }).subscribe(function (res) {
              _this16.status = res;

              if (_this16.status.errors) {
                _this16.errors = _this16.status.errors;
              } else if (_this16.status.data) {
                _this16.settings.customer.id = _this16.status.ID;

                if (_this16.platform.is('cordova')) {
                  _this16.oneSignal.getIds().then(function (data) {
                    _this16.form.onesignal_user_id = data.userId;
                    _this16.form.onesignal_push_token = data.pushToken;
                  });

                  _this16.api.postItem('update_user_notification', _this16.form).subscribe(function (res) {});
                }

                if (_this16.status.allcaps.dc_vendor || _this16.status.allcaps.seller || _this16.status.allcaps.wcfm_vendor) {
                  _this16.settings.vendor = true;
                }

                if (_this16.status.allcaps.administrator) {
                  _this16.settings.administrator = true;
                }

                _this16.navCtrl.navigateBack('/tabs/account');
              }

              _this16.facebookLogingInn = false;
            }, function (err) {
              _this16.facebookLogingInn = false;
            });

            _this16.facebookLogingInn = false;
          }).catch(function (e) {
            _this16.faceBookStatus = e;
            _this16.facebookLogingInn = false;
          });
        }
      }, {
        key: "loginWithPhone",
        value: function loginWithPhone() {
          var _this17 = this;

          this.phoneLogingInn = true;
          window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "IN",
            facebookNotificationsEnabled: true
          }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) {
              return _this17.handlePhoneLogin(info);
            }, function (err) {
              return _this17.handlePhoneLogin(err);
            });
          });
        }
      }, {
        key: "handlePhoneLogin",
        value: function handlePhoneLogin(info) {
          var _this18 = this;

          if (info.phoneNumber) {
            this.api.postItem('phone_number_login', {
              "phone": info.phoneNumber
            }).subscribe(function (res) {
              _this18.status = res;

              if (_this18.status.errors) {
                _this18.errors = _this18.status.errors;
              } else if (_this18.status.data) {
                _this18.settings.customer.id = _this18.status.ID;

                if (_this18.platform.is('cordova')) {
                  _this18.oneSignal.getIds().then(function (data) {
                    _this18.form.onesignal_user_id = data.userId;
                    _this18.form.onesignal_push_token = data.pushToken;
                  });

                  _this18.api.postItem('update_user_notification', _this18.form).subscribe(function (res) {});
                }

                if (_this18.status.allcaps.dc_vendor || _this18.status.allcaps.seller || _this18.status.allcaps.wcfm_vendor) {
                  _this18.settings.vendor = true;
                }

                if (_this18.status.allcaps.administrator) {
                  _this18.settings.administrator = true;
                }

                _this18.navCtrl.navigateBack('/tabs/account');
              }

              _this18.phoneLogingInn = false;
            }, function (err) {
              _this18.phoneLogingInn = false;
            });
          } else this.phoneLogingInn = false;
        }
      }, {
        key: "handlePhoneLoginError",
        value: function handlePhoneLoginError(error) {
          this.phoneVerificationError = error;
          this.phoneLogingInn = false;
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/account/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/account/map/map.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/account/map/map.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountMapMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9tYXAvRDpcXHdvb3RvcFxcV29vVG9vcC1BcHBBbmRyb2lkL3NyY1xcYXBwXFxhY2NvdW50XFxtYXBcXG1hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsNkJBQUE7RUFFQSxVQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2hvdy1tYXAge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/map/map.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/account/map/map.page.ts ***!
    \*****************************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppAccountMapMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var MapPage =
    /*#__PURE__*/
    function () {
      function MapPage(api, platform, settings) {
        _classCallCheck(this, MapPage);

        this.api = api;
        this.platform = platform;
        this.settings = settings;
        this.mapData = [];
      }

      _createClass(MapPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var _this19 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.api.postItem('locations').subscribe(function (res) {
                      _this19.processData(res);

                      console.log(res);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "processData",
        value: function processData(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this20 = this;

            var googleMaps, mapEle, map;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return getGoogleMaps(data.mapApiKey);

                  case 2:
                    googleMaps = _context14.sent;
                    data.locations.map(function (item, index) {
                      _this20.mapData[index] = {};
                      _this20.mapData[index].name = item.title;
                      _this20.mapData[index].lat = parseFloat(item.description);
                      _this20.mapData[index].lng = parseFloat(item.url);
                      if (index == 0) _this20.mapData[index].center = true;
                      console.log(_this20.mapData);
                    });
                    mapEle = this.mapElement.nativeElement;
                    map = new googleMaps.Map(mapEle, {
                      center: this.mapData.find(function (d) {
                        return d.center;
                      }),
                      zoom: data.mapZoom
                    });
                    this.mapData.forEach(function (markerData) {
                      var infoWindow = new googleMaps.InfoWindow({
                        content: "<h5>".concat(markerData.name, "</h5>")
                      });
                      var marker = new googleMaps.Marker({
                        position: markerData,
                        map: map,
                        title: markerData.name
                      });
                      marker.addListener('click', function () {
                        infoWindow.open(map, marker);
                      });
                    });
                    googleMaps.event.addListenerOnce(map, 'idle', function () {
                      mapEle.classList.add('show-map');
                    });

                  case 8:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/map/map.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.page.scss */
      "./src/app/account/map/map.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]])], MapPage);

    function getGoogleMaps(apiKey) {
      var win = window;
      var googleModule = win.google;

      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&v=3.31");
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = function () {
          var googleModule2 = win.google;

          if (googleModule2 && googleModule2.maps) {
            resolve(googleModule2.maps);
          } else {
            reject('google maps not available');
          }
        };
      });
    }
    /***/

  },

  /***/
  "./src/app/account/order/order.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/account/order/order.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountOrderOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order .grand-total {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcmRlci9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGFjY291bnRcXG9yZGVyXFxvcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyIHtcclxuICAgIC5ncmFuZC10b3RhbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxufSIsIi5vcmRlciAuZ3JhbmQtdG90YWwge1xuICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/order/order.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/account/order/order.page.ts ***!
    \*********************************************/

  /*! exports provided: OrderPage */

  /***/
  function srcAppAccountOrderOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPage", function () {
      return OrderPage;
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var OrderPage =
    /*#__PURE__*/
    function () {
      function OrderPage(translate, api, settings, toastController, router, loadingController, navCtrl, route) {
        _classCallCheck(this, OrderPage);

        this.translate = translate;
        this.api = api;
        this.settings = settings;
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.refundKeys = {};
        this.refund = {};
        this.showRefund = false;
        this.disableRefundButton = false;
        this.refundResponse = {};
        this.lan = {};
      }

      _createClass(OrderPage, [{
        key: "refundKey",
        value: function refundKey() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var _this21 = this;

            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.api.postItem('woo_refund_key').subscribe(function (res) {
                      _this21.refundKeys = res;
                      console.log(_this21.refundKeys);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.translate.get(['Refund request submitted!', 'Unable to submit the refund request']).subscribe(function (translations) {
            _this22.lan.refund = translations['Refund request submitted!'];
            _this22.lan.unable = translations['Unable to submit the refund request'];
          });
          this.id = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (params) {
            _this22.order = params["order"];
          });
          this.refundKey();
        }
      }, {
        key: "showField",
        value: function showField() {
          this.showRefund = !this.showRefund;
        }
      }, {
        key: "requestRefund",
        value: function requestRefund() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.disableRefundButton = true;
                    this.refund.ywcars_form_order_id = this.id;
                    this.refund.ywcars_form_whole_order = '1';
                    this.refund.ywcars_form_product_id = '';
                    this.refund.ywcars_form_line_total = this.order.total;
                    this.refund.ywcars_form_reason = this.refund.ywcars_form_reason;
                    this.refund.action = 'ywcars_submit_request';
                    this.refund.security = this.refundKeys.ywcars_submit_request;
                    _context16.next = 10;
                    return this.api.postItem('woo_refund_key', this.refund).subscribe(function (res) {
                      _this23.refundResponse = res;
                      _this23.disableRefundButton = false;
                      if (_this23.refundResponse.success) _this23.presentToast(_this23.lan.refund);else _this23.presentToast(_this23.lan.unable);
                    }, function (err) {
                      console.log(err);
                      _this23.disableRefundButton = false;
                    });

                  case 10:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var toast;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 2:
                    toast = _context17.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return OrderPage;
    }();

    OrderPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
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

    OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/order/order.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order.page.scss */
      "./src/app/account/order/order.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], OrderPage);
    /***/
  },

  /***/
  "./src/app/account/orders/orders.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/account/orders/orders.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orders .activated {\n  opacity: 0.6;\n}\n.orders .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.orders .empty ion-icon {\n  font-size: 7.2em;\n}\n.orders ion-card-title {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.orders ion-card-subtitle {\n  font-weight: 500;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9vcmRlcnMvRDpcXHdvb3RvcFxcV29vVG9vcC1BcHBBbmRyb2lkL3NyY1xcYXBwXFxhY2NvdW50XFxvcmRlcnNcXG9yZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FDQVI7QURFSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7QUNDWjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVycyB7XHJcbiAgICAuYWN0aXZhdGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAuZW1wdHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3LjJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59IiwiLm9yZGVycyAuYWN0aXZhdGVkIHtcbiAgb3BhY2l0eTogMC42O1xufVxuLm9yZGVycyAuZW1wdHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3JkZXJzIC5lbXB0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNy4yZW07XG59XG4ub3JkZXJzIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLm9yZGVycyBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/orders/orders.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/account/orders/orders.page.ts ***!
    \***********************************************/

  /*! exports provided: OrdersPage */

  /***/
  function srcAppAccountOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
      return OrdersPage;
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

    var OrdersPage =
    /*#__PURE__*/
    function () {
      function OrdersPage(api, settings, router, loadingController, navCtrl, route) {
        _classCallCheck(this, OrdersPage);

        this.api = api;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
        this.hasMoreItems = true;
        this.filter.page = 1;
        this.filter.customer = this.settings.customer.id;
      }

      _createClass(OrdersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.settings.customer) this.getOrders();
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var _this24 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.api.postFlutterItem('orders', this.filter).subscribe(function (res) {
                      _this24.orders = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var _this25 = this;

            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    _context19.next = 3;
                    return this.api.postFlutterItem('orders', this.filter).subscribe(function (res) {
                      _this25.orders.push.apply(_this25.orders, res);

                      event.target.complete();
                      if (!res) _this25.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                    console.log('Done');

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "getDetail",
        value: function getDetail(order) {
          var navigationExtras = {
            queryParams: {
              order: order
            }
          };
          this.navCtrl.navigateForward('/tabs/account/orders/order/' + order.id, navigationExtras);
        }
      }]);

      return OrdersPage;
    }();

    OrdersPage.ctorParameters = function () {
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

    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/orders/orders.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.page.scss */
      "./src/app/account/orders/orders.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], OrdersPage);
    /***/
  },

  /***/
  "./src/app/account/points/points.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/account/points/points.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountPointsPointsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcG9pbnRzL3BvaW50cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/points/points.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/account/points/points.page.ts ***!
    \***********************************************/

  /*! exports provided: PointsPage */

  /***/
  function srcAppAccountPointsPointsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointsPage", function () {
      return PointsPage;
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
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PointsPage =
    /*#__PURE__*/
    function () {
      function PointsPage(api, settings, navCtrl) {
        _classCallCheck(this, PointsPage);

        this.api = api;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.points = {};
        this.points.items = [];
      }

      _createClass(PointsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            var _this26 = this;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.api.postItem('getPointsHistory').subscribe(function (res) {
                      _this26.points = res;
                      _this26.settings.reward = res.points;
                      _this26.settings.rewardValue = res.points_vlaue;
                    });

                  case 2:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }]);

      return PointsPage;
    }();

    PointsPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    PointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-points',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./points.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/points/points.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./points.page.scss */
      "./src/app/account/points/points.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], PointsPage);
    /***/
  },

  /***/
  "./src/app/account/register/register.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/account/register/register.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login1 {\n  padding: 16px;\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  --inner-padding-start: 0;\n}\n.login1 ion-list {\n  margin: 16px 8px;\n  background: transparent;\n}\n.login1 ion-list ion-item {\n  --background: transparent;\n}\n.login1 ion-button {\n  --border-radius: 4px;\n}\n.login1 p {\n  text-align: center;\n}\n.login1 ion-card {\n  padding: 10px;\n  margin: 0;\n  background: white;\n}\n.login1 ion-item {\n  --padding-start: 0;\n}\n.login-logo {\n  position: absolute;\n  margin: auto;\n}\n.login-logo img {\n  margin-top: -90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGFjY291bnRcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQWNBLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQVNBLHdCQUFBO0FDcEJKO0FETEk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDT1I7QUROUTtFQUNJLHlCQUFBO0FDUVo7QURMSTtFQUNJLG9CQUFBO0FDT1I7QURMSTtFQUNJLGtCQUFBO0FDT1I7QURESTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNHUjtBRERJO0VBQ0ksa0JBQUE7QUNHUjtBRENBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbjEge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBtYXJnaW46IDE2cHggOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIH1cclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxufVxyXG4ubG9naW4tbG9nbyB7XHJcbiAgICAvL3dpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTkwcHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJCMzJCMiwgIzE0ODhDQykgIWltcG9ydGFudDsgLy9ncmFkaWVudCBiYWNrZ3JvdW5kXHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dpbl9iYWNrZ3JvdW5kNC5qcGcpIDAgMC9hdXRvIDEwMCUgbm8tcmVwZWF0OyAvL2ltYWdlIGJhY2tncm91bmRcclxufSIsIi5sb2dpbjEge1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLmxvZ2luMSBpb24tbGlzdCB7XG4gIG1hcmdpbjogMTZweCA4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmxvZ2luMSBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubG9naW4xIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5sb2dpbjEgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbjEgaW9uLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmxvZ2luMSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1hcmdpbi10b3A6IC05MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/register/register.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/register/register.page.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppAccountRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");

    var RegisterPage =
    /*#__PURE__*/
    function () {
      function RegisterPage(platform, oneSignal, api, data, loadingController, settings, navCtrl, fb) {
        _classCallCheck(this, RegisterPage);

        this.platform = platform;
        this.oneSignal = oneSignal;
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.status = {};
        this.disableSubmit = false;
        this.phoneLogingInn = false;
        this.form = this.fb.group({
          first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var _this27 = this;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context21.next = 3;
                    return this.api.postItem('create-user', this.form.value).subscribe(function (res) {
                      _this27.status = res;

                      if (_this27.status.errors) {
                        _this27.errors = _this27.status.errors;
                        _this27.disableSubmit = false;

                        for (var key in _this27.errors) {
                          _this27.errors[key].forEach(function (item) {
                            return item.replace('<strong>ERROR<\/strong>:', '');
                          });
                        }
                      } else if (_this27.status.data != undefined) {
                        _this27.settings.customer.id = _this27.status.ID;
                        if (_this27.platform.is('cordova')) _this27.oneSignal.getIds().then(function (data) {
                          _this27.pushForm.onesignal_user_id = data.userId;
                          _this27.pushForm.onesignal_push_token = data.pushToken;

                          _this27.api.postItem('update_user_notification', _this27.pushForm).subscribe(function (res) {});
                        });

                        _this27.navCtrl.navigateBack('/tabs/account');

                        _this27.disableSubmit = false;
                      } else _this27.disableSubmit = false;
                    }, function (err) {
                      _this27.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "loginWithPhone",
        value: function loginWithPhone() {
          var _this28 = this;

          this.phoneLogingInn = true;
          window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "ID",
            facebookNotificationsEnabled: true
          }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) {
              return _this28.handlePhoneLogin(info);
            }, function (err) {
              return _this28.handlePhoneLogin(err);
            });
          });
        }
      }, {
        key: "handlePhoneLogin",
        value: function handlePhoneLogin(info) {
          var _this29 = this;

          if (info.phoneNumber) {
            this.api.postItem('phone_number_login', {
              "phone": info.phoneNumber
            }).subscribe(function (res) {
              _this29.status = res;

              if (_this29.status.errors) {
                _this29.errors = _this29.status.errors;
              } else if (_this29.status.data) {
                _this29.settings.customer.id = _this29.status.ID;

                if (_this29.platform.is('cordova')) {
                  _this29.oneSignal.getIds().then(function (data) {
                    _this29.form.onesignal_user_id = data.userId;
                    _this29.form.onesignal_push_token = data.pushToken;
                  });

                  _this29.api.postItem('update_user_notification', _this29.form).subscribe(function (res) {});
                }

                if (_this29.status.allcaps.wc_product_vendors_admin_vendor || _this29.status.allcaps.dc_vendor || _this29.status.allcaps.seller || _this29.status.allcaps.wcfm_vendor) {
                  _this29.settings.vendor = true;
                }

                if (_this29.status.allcaps.administrator) {
                  _this29.settings.administrator = true;
                }

                _this29.navCtrl.navigateBack('/tabs/account');
              }

              _this29.phoneLogingInn = false;
            }, function (err) {
              _this29.phoneLogingInn = false;
            });
          } else this.phoneLogingInn = false;
        }
      }, {
        key: "handlePhoneLoginError",
        value: function handlePhoneLoginError(error) {
          this.phoneVerificationError = error;
          this.phoneLogingInn = false;
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_4__["Data"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/account/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_4__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], RegisterPage);
    /***/
  },

  /***/
  "./src/app/account/setting/setting.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/account/setting/setting.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountSettingSettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/setting/setting.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/account/setting/setting.page.ts ***!
    \*************************************************/

  /*! exports provided: SettingPage */

  /***/
  function srcAppAccountSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
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


    var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/home/home.page.ts");

    var SettingPage =
    /*#__PURE__*/
    function () {
      function SettingPage(home, ionicConfig, router, settings, navCtrl, translateService, nativeStorage, config) {
        _classCallCheck(this, SettingPage);

        this.home = home;
        this.ionicConfig = ionicConfig;
        this.router = router;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.nativeStorage = nativeStorage;
        this.config = config;
      }

      _createClass(SettingPage, [{
        key: "applyLanguage",
        value: function applyLanguage() {
          var _this30 = this;

          this.translateService.setDefaultLang(this.config.lang);

          if (this.config.lang == 'ar') {
            this.settings.dir = 'rtl';
          } else this.settings.dir = 'ltr';

          this.translateService.get(['Back']).subscribe(function (translations) {
            _this30.ionicConfig.set('backButtonText', translations['Back']);
          });
          document.documentElement.setAttribute('dir', this.settings.dir);
          this.nativeStorage.setItem('settings', {
            lang: this.config.lang,
            dir: this.settings.dir
          }).then(function () {
            return console.log();
          }, function (error) {
            return console.error(error);
          });
          this.home.getBlocks();
          this.navCtrl.pop();
        }
      }]);

      return SettingPage;
    }();

    SettingPage.ctorParameters = function () {
      return [{
        type: _home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_2__["Config"]
      }];
    };

    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./setting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/setting/setting.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./setting.page.scss */
      "./src/app/account/setting/setting.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _config__WEBPACK_IMPORTED_MODULE_2__["Config"]])], SettingPage);
    /***/
  },

  /***/
  "./src/app/account/wallet/wallet.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/account/wallet/wallet.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/wallet/wallet.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/account/wallet/wallet.page.ts ***!
    \***********************************************/

  /*! exports provided: WalletPage */

  /***/
  function srcAppAccountWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
      return WalletPage;
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
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WalletPage =
    /*#__PURE__*/
    function () {
      function WalletPage(loadingController, router, route, navCtrl, data, api, settings, alertController) {
        _classCallCheck(this, WalletPage);

        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.data = data;
        this.api = api;
        this.settings = settings;
        this.alertController = alertController;
        this.show = false;
        this.wallet = {};
      }

      _createClass(WalletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWallet();
        }
      }, {
        key: "getWallet",
        value: function getWallet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var _this31 = this;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.api.postItem('wallet').subscribe(function (res) {
                      _this31.wallet = res;
                      console.log(res);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "showField",
        value: function showField() {
          this.show = !this.show;
        }
      }, {
        key: "addTopup",
        value: function addTopup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            var _this32 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    if (!this.validateForm()) {
                      _context23.next = 8;
                      break;
                    }

                    _context23.next = 3;
                    return this.loadingController.create({
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 3:
                    loading = _context23.sent;
                    _context23.next = 6;
                    return loading.present();

                  case 6:
                    _context23.next = 8;
                    return this.api.ajaxCall('/wp-admin/admin-ajax.php', {
                      woo_wallet_balance_to_add: this.amount,
                      woo_wallet_topup: this.wallet.woo_wallet_topup,
                      _wp_http_referer: '/my-account/woo-wallet/add/',
                      woo_add_to_wallet: 'Add'
                    }).subscribe(function (res) {
                      _this32.api.postItem('cart').subscribe(function (res) {
                        _this32.cart = res;

                        _this32.data.updateCart(_this32.cart.cart_contents);

                        _this32.show = false;
                        loading.dismiss();

                        _this32.navCtrl.navigateForward(_this32.router.url + '/cart');
                      }, function (err) {
                        console.log(err);
                        loading.dismiss();
                      });
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 8:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          if (this.amount == undefined || this.amount == "") {
            this.presentAlert('Please enter Amount');
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(alertMessage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var alert;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.alertController.create({
                      header: 'Oops!',
                      message: alertMessage,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context24.sent;
                    _context24.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }]);

      return WalletPage;
    }();

    WalletPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wallet/wallet.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet.page.scss */
      "./src/app/account/wallet/wallet.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], WalletPage);
    /***/
  },

  /***/
  "./src/app/account/wishlist/wishlist.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/account/wishlist/wishlist.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountWishlistWishlistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-list3 ion-item {\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));\n  --border-width: 0 0 0.55px;\n  --padding-start: 0px;\n  padding: 10xp;\n}\n.product-list3 ion-item ion-thumbnail {\n  width: 28%;\n  height: 100%;\n  margin-top: 0;\n  margin-bottom: -4px;\n  padding: 10px;\n}\n.product-list3 ion-item .details {\n  align-self: flex-start;\n  padding: 0;\n  width: 104%;\n}\n.product-list3 ion-item .details ion-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n.product-list3 ion-item .details p {\n  margin: 0;\n}\n.product-list3 ion-item .details .special-price {\n  font-size: x-small;\n  padding: 0 5px;\n}\n.product-list3 ion-item .details ion-icon {\n  font-size: x-large;\n  font-weight: 300;\n}\n.trash {\n  position: absolute;\n  top: 16px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC93aXNobGlzdC9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGFjY291bnRcXHdpc2hsaXN0XFx3aXNobGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksdUhBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0FSO0FEQ1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDWjtBRENRO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NaO0FEQVk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRWhCO0FEQVk7RUFDSSxTQUFBO0FDRWhCO0FEQVk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNFaEI7QURBWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdDMge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjIpKSkpO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEweHA7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTA0JTtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zcGVjaWFsLXByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnRyYXNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iLCIucHJvZHVjdC1saXN0MyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjIpKSkpO1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmc6IDEweHA7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDI4JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTA0JTtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIC5zcGVjaWFsLXByaWNlIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udHJhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/wishlist/wishlist.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/wishlist/wishlist.page.ts ***!
    \***************************************************/

  /*! exports provided: WishlistPage */

  /***/
  function srcAppAccountWishlistWishlistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistPage", function () {
      return WishlistPage;
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
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");

    var WishlistPage =
    /*#__PURE__*/
    function () {
      function WishlistPage(api, router, settings, loadingController, navCtrl, route, productData) {
        _classCallCheck(this, WishlistPage);

        this.api = api;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
        this.wishlist = [];
      }

      _createClass(WishlistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (this.settings.customer.id) {
            this.getWishlist();
          }
        }
      }, {
        key: "getWishlist",
        value: function getWishlist() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var _this33 = this;

            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.api.postItem('get_wishlist').subscribe(function (res) {
                      _this33.wishlist = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "removeFromWishlist",
        value: function removeFromWishlist(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            var _this34 = this;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.api.postItem('remove_wishlist', {
                      product_id: id
                    }).subscribe(function (res) {
                      _this34.wishlist = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.productData.product = product;
          this.navCtrl.navigateForward('/tabs/account/wishlist/product/');
        }
      }]);

      return WishlistPage;
    }();

    WishlistPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_6__["Product"]
      }];
    };

    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wishlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishlist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/wishlist/wishlist.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishlist.page.scss */
      "./src/app/account/wishlist/wishlist.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_6__["Product"]])], WishlistPage);
    /***/
  },

  /***/
  "./src/app/cart/cart.page.scss":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cart ion-thumbnail {\n  height: auto;\n  width: 100px;\n}\n.cart .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.cart .empty ion-icon {\n  font-size: 7.2em;\n}\n.cart .grand-total {\n  font-weight: 500;\n}\n.cart .coupon h2 {\n  margin: 10px;\n}\n.cart .clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n}\n.cart .add-remove-button {\n  padding: 0px;\n}\n.cart .add-remove-button ion-col {\n  padding: 0px;\n}\n.cart .add-remove-button ion-col ion-button {\n  margin: 0px;\n}\n.button-native {\n  padding: 0;\n}\n.redeem {\n  margin: 3px 0;\n}\n.redeem .item {\n  margin: 0;\n}\n.redeem ion-label {\n  margin: 16px 0;\n  overflow: visible;\n  white-space: normal;\n  font-size: 15px;\n}\n.redeem .item.item-block .item-inner {\n  border-bottom: 0;\n}\n.redeem .button {\n  margin: 0 30px;\n  width: calc(100% - 60px);\n  border-radius: 4px;\n}\n.name-label {\n  margin-right: 16px;\n}\n.name-label ion-button {\n  --box-shadow: none;\n  height: 24px;\n  width: 24px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.name-label ion-button ion-icon {\n  font-size: 22px;\n}\nion-item {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGNhcnRcXGNhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FERUk7RUFDSSxnQkFBQTtBQ0FSO0FER1E7RUFDSSxZQUFBO0FDRFo7QURJSTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDRlI7QURJSTtFQUNJLFlBQUE7QUNGUjtBREdRO0VBQ0ksWUFBQTtBQ0RaO0FERVk7RUFDSSxXQUFBO0FDQWhCO0FES0E7RUFDSSxVQUFBO0FDRko7QURJQTtFQUNJLGFBQUE7QUNESjtBREVJO0VBQ0ksU0FBQTtBQ0FSO0FERUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREVJO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRFFBO0VBQ0ksa0JBQUE7QUNMSjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FET0E7RUFDSSx5QkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0IHtcclxuICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuZW1wdHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3LjJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ3JhbmQtdG90YWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuY291cG9uIHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xhbXAge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcbiAgICAuYWRkLXJlbW92ZS1idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idXR0b24tbmF0aXZlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnJlZGVlbSB7XHJcbiAgICBtYXJnaW46IDNweCAwO1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxufVxyXG4udHJhc2gge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gdG9wOiAxMHB4O1xyXG4gICAgLy8gcmlnaHQ6IDA7XHJcbn1cclxuLm5hbWUtbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufSIsIi5jYXJ0IGlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jYXJ0IC5lbXB0eSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJ0IC5lbXB0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNy4yZW07XG59XG4uY2FydCAuZ3JhbmQtdG90YWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQgLmNvdXBvbiBoMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jYXJ0IC5jbGFtcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4uY2FydCAuYWRkLXJlbW92ZS1idXR0b24ge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY2FydCAuYWRkLXJlbW92ZS1idXR0b24gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJ0IC5hZGQtcmVtb3ZlLWJ1dHRvbiBpb24tY29sIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmVkZWVtIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cbi5yZWRlZW0gLml0ZW0ge1xuICBtYXJnaW46IDA7XG59XG4ucmVkZWVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnJlZGVlbSAuaXRlbS5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5yZWRlZW0gLmJ1dHRvbiB7XG4gIG1hcmdpbjogMCAzMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm5hbWUtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubmFtZS1sYWJlbCBpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4ubmFtZS1sYWJlbCBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/cart/cart.page.ts":
  /*!***********************************!*\
    !*** ./src/app/cart/cart.page.ts ***!
    \***********************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
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


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var CartPage =
    /*#__PURE__*/
    function () {
      function CartPage(translate, alertCtrl, toastController, config, api, data, router, settings, loadingController, navCtrl, route, productData) {
        _classCallCheck(this, CartPage);

        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.config = config;
        this.api = api;
        this.data = data;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
        this.cart = {};
        this.loginForm = {};
        this.lan = {};
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.translate.get(['Requested quantity not available']).subscribe(function (translations) {
            _this35.lan.lowQuantity = translations['Requested quantity not available'];
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getCart();
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            var _this36 = this;

            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.api.postItem('cart').subscribe(function (res) {
                      _this36.cart = res;

                      _this36.data.updateCart(_this36.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "checkout",
        value: function checkout() {
          if (this.settings.customer.id) {
            this.navCtrl.navigateForward('/tabs/cart/address');
          } else this.login();
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          this.productData.product = {};
          this.navCtrl.navigateForward(this.router.url + '/product/' + id);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(itemKey, qty) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            var _this37 = this;

            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.api.postItem('remove_cart_item&item_key=' + itemKey).subscribe(function (res) {
                      _this37.cart = res;

                      _this37.data.updateCart(_this37.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "submitCoupon",
        value: function submitCoupon(coupon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            var _this38 = this;

            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return this.api.postItem('apply_coupon', {
                      coupon_code: coupon
                    }).subscribe(function (res) {
                      _this38.couponMessage = res;

                      if (_this38.couponMessage != null && _this38.couponMessage.notice) {
                        _this38.presentToast(_this38.couponMessage.notice);
                      }

                      _this38.getCart();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "removeCoupon",
        value: function removeCoupon(coupon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            var _this39 = this;

            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.api.postItem('remove_coupon', {
                      coupon: coupon
                    }).subscribe(function (res) {
                      _this39.getCart();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "addToCart",
        value: function addToCart(id, item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee31() {
            var _this40 = this;

            var params;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    console.log(this.data.cart[id]);
                    console.log(item.value.manage_stock);

                    if (!(item.value.manage_stock && item.value.stock_quantity <= item.value.quantity)) {
                      _context31.next = 6;
                      break;
                    }

                    this.presentToast(this.lan.lowQuantity);
                    _context31.next = 17;
                    break;

                  case 6:
                    if (this.data.cartItem[item.key].quantity != undefined && this.data.cartItem[item.key].quantity == 0) {
                      this.data.cartItem[item.key].quantity = 0;
                    } else {
                      this.data.cartItem[item.key].quantity += 1;
                    }

                    ;

                    if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                      this.data.cart[id] = 0;
                    } else {
                      this.data.cart[id] += 1;
                    }

                    ;
                    params = {};
                    params.key = item.key;
                    params.quantity = this.data.cartItem[item.key].quantity;
                    params.update_cart = 'Update Cart';
                    params._wpnonce = this.cart.cart_nonce;
                    _context31.next = 17;
                    return this.api.postItem('update-cart-item-qty', params).subscribe(function (res) {
                      _this40.cart = res;

                      _this40.data.updateCart(_this40.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 17:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(id, key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            var _this41 = this;

            var params;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                      this.data.cartItem[key].quantity = 0;
                    } else {
                      this.data.cartItem[key].quantity -= 1;
                    }

                    ;

                    if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                      this.data.cart[id] = 0;
                    } else {
                      this.data.cart[id] -= 1;
                    }

                    ;
                    params = {};
                    params.key = key;
                    params.quantity = this.data.cartItem[key].quantity;
                    params.update_cart = 'Update Cart';
                    params._wpnonce = this.cart.cart_nonce;
                    _context32.next = 11;
                    return this.api.postItem('update-cart-item-qty', params).subscribe(function (res) {
                      _this41.cart = res;

                      _this41.data.updateCart(_this41.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 11:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        } //----------Rewrad-----------------//

      }, {
        key: "redeem",
        value: function redeem() {
          var _this42 = this;

          // wc_points_rewards_apply_discount_amount: 
          // wc_points_rewards_apply_discount: Apply Discount
          this.api.postItem('ajax_maybe_apply_discount').subscribe(function (res) {
            console.log(res);

            _this42.getCart();
          });
        }
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            var _this43 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return this.alertCtrl.create({
                      header: 'Login and continue',
                      inputs: [{
                        name: 'username',
                        placeholder: 'Email/Username',
                        type: 'text'
                      }, {
                        name: 'password',
                        placeholder: 'Password',
                        type: 'text'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler(data) {
                          _this43.navCtrl.navigateForward('/tabs/cart/address');
                        }
                      }, {
                        text: 'Login',
                        handler: function handler(data) {
                          _this43.onSubmit(data);
                        }
                      }]
                    });

                  case 2:
                    alert = _context33.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(userData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee34() {
            var _this44 = this;

            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    this.loginForm.username = userData.username;
                    this.loginForm.password = userData.password;
                    console.log(this.loginForm);
                    _context34.next = 5;
                    return this.api.postItem('login', this.loginForm).subscribe(function (res) {
                      _this44.status = res;

                      if (_this44.status.errors != undefined) {
                        _this44.errors = _this44.status.errors;

                        _this44.inValidUsername();
                      } else if (_this44.status.data) {
                        _this44.settings.customer.id = _this44.status.ID;

                        if (_this44.status.allcaps.dc_vendor || _this44.status.allcaps.seller || _this44.status.allcaps.wcfm_vendor) {
                          _this44.settings.vendor = true;
                        }

                        if (_this44.status.allcaps.administrator) {
                          _this44.settings.administrator = true;
                        }

                        _this44.navCtrl.navigateForward('/tabs/cart/address');
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 5:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "inValidUsername",
        value: function inValidUsername() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee35() {
            var alert;
            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    _context35.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Invalid Username or Password',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context35.sent;
                    _context35.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee36() {
            var toast;
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    _context36.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'top'
                    });

                  case 2:
                    toast = _context36.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_5__["Config"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_6__["Data"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_8__["Product"]
      }];
    };

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/cart/cart.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _config__WEBPACK_IMPORTED_MODULE_5__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_6__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_8__["Product"]])], CartPage);
    /***/
  },

  /***/
  "./src/app/categories/categories.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/categories/categories.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".categories ion-card {\n  margin: 4px 8px;\n}\n.categories ion-card-header {\n  padding: 10px;\n}\n.categories ion-card-content {\n  padding: 0;\n}\n/****\nCopy respective block css block\n***/\n.categories-card1 ion-card {\n  margin: 0;\n  border-radius: 4px;\n}\n.categories-card1 ion-card-header {\n  padding: 10px;\n}\n.categories-card1 ion-card-content {\n  padding: 0;\n}\n.categories-card1 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n.categories-card1 img {\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n.categories-card2 {\n  padding: 0;\n}\n.categories-card2 ion-col {\n  padding: 0;\n}\n.categories-card2 ion-card {\n  margin: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.categories-card2 ion-card-header {\n  padding: 10px;\n}\n.categories-card2 ion-card-content {\n  padding: 0;\n}\n.categories-card2 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n.categories-card2 img {\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n.categories-card3 {\n  padding: 0;\n}\n.categories-card3 ion-col {\n  padding: 16px;\n}\n.categories-card3 ion-card {\n  margin: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.categories-card3 ion-card-header {\n  padding: 10px;\n}\n.categories-card3 ion-card-content {\n  padding: 0;\n}\n.categories-card3 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n.categories-card3 img {\n  border-radius: 4px;\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n.categories-card4 {\n  margin: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n}\n.categories-card4 ion-col {\n  padding: 16px;\n}\n.categories-card4 ion-card {\n  margin: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.categories-card4 ion-card-header {\n  padding: 10px;\n}\n.categories-card4 ion-card-content {\n  padding: 0;\n}\n.categories-card4 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n.categories-card4 img {\n  border-radius: 50%;\n  height: 80px;\n  width: auto;\n  margin: auto;\n}\n.category-container {\n  padding: 8px;\n}\n.category-container .categories-card5 {\n  box-shadow: 0 1px 1px -5px rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  margin: 0px;\n  padding: 0;\n  ion-col: last-child;\n  ion-col-border-bottom: 0px;\n}\n.category-container .categories-card5 ion-thumbnail {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.category-container .categories-card5 ion-col {\n  padding: 0px;\n}\n.category-container .categories-card5 ion-card {\n  margin: 0;\n  box-shadow: none;\n  box-shadow: none;\n  border: 0.55px solid var(--ion-color-light, #f4f5f8);\n  border-radius: 0;\n}\n.category-container .categories-card5 ion-card-header {\n  padding: 10px;\n  padding-bottom: 20px;\n}\n.category-container .categories-card5 ion-card-content {\n  padding-top: 30px;\n  text-align: center;\n}\n.category-container .categories-card5 ion-card-title {\n  font-size: 13px;\n  text-align: center;\n}\n.category-container .categories-card5 img {\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n}\n.category-container .categories-card5 .sub-category-items img {\n  height: 80px;\n  width: 80px;\n  margin: auto;\n}\n.category-container .categories-card5 .item-native {\n  padding: 10px;\n}\nion-item .item-inner {\n  --inner-border-width: 0.55px;\n}\nion-item img {\n  border-radius: 4px;\n  height: 60px;\n  width: auto;\n  max-width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQ0FSO0FERUk7RUFDSSxhQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7QUNBUjtBRE1BOztHQUFBO0FBT0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUNQUjtBRFVJO0VBQ0ksYUFBQTtBQ1JSO0FEV0k7RUFDSSxVQUFBO0FDVFI7QURXSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEV0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUUjtBRGFBO0VBQ0ksVUFBQTtBQ1ZKO0FEWUk7RUFDSSxVQUFBO0FDVlI7QURjSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWlI7QURlSTtFQUNJLGFBQUE7QUNiUjtBRGdCSTtFQUNJLFVBQUE7QUNkUjtBRGdCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEZ0JJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZFI7QURrQkE7RUFDSSxVQUFBO0FDZko7QURpQkk7RUFDSSxhQUFBO0FDZlI7QURtQkk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2pCUjtBRG9CSTtFQUNJLGFBQUE7QUNsQlI7QURxQkk7RUFDSSxVQUFBO0FDbkJSO0FEcUJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEcUJJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNuQlI7QUR1QkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFLQSxVQUFBO0FDeEJKO0FEeUJJO0VBQ0ksYUFBQTtBQ3ZCUjtBRDRCSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDMUJSO0FENkJJO0VBQ0ksYUFBQTtBQzNCUjtBRDZCSTtFQUNJLFVBQUE7QUMzQlI7QUQ2Qkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUMzQlI7QUQ2Qkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzNCUjtBRCtCQTtFQUNJLFlBQUE7QUM1Qko7QUQ2Qkk7RUFDSSw2R0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBUUEsbUJBQUE7RUFDSSwwQkFBQTtBQ2xDWjtBRDBCUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUN4Qlo7QUQwQlE7RUFDSSxZQUFBO0FDeEJaO0FENkJRO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLGdCQUFBO0FDM0JaO0FENkJRO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FDM0JaO0FENkJRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQzNCWjtBRDZCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQzNCWjtBRDZCUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQlo7QUQ4Qlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM1QmhCO0FEK0JRO0VBQ0ksYUFBQTtBQzdCWjtBRHVDSTtFQUVJLDRCQUFBO0FDdENSO0FEd0NJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN0Q1IiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpZXMge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDhweDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuLyoqKipcclxuQ29weSByZXNwZWN0aXZlIGJsb2NrIGNzcyBibG9ja1xyXG4qKiovXHJcblxyXG4vLyBDYXRnb3JpZXMgR3JpZCAxXHJcbi5jYXRlZ29yaWVzLWNhcmQxIHtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC8vZGlzcGxheTogbm9uZTsgLy9Db21tZW50IG9yIFVuY29tbWVudCB0aGlzIHRvIHNob3cgb3IgaGlkZSBjYXRlZ29yeSBuYW1lXHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vQ29tbWVudCB0aGlzIGZvciB0ZXh0IGFsaWduIHN0YXJ0XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuLy8gQ2F0Z29yaWVzIEdyaWQgMlxyXG4uY2F0ZWdvcmllcy1jYXJkMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDAuNTVweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC8vZGlzcGxheTogbm9uZTsgLy9Db21tZW50IG9yIFVuY29tbWVudCB0aGlzIHRvIHNob3cgb3IgaGlkZSBjYXRlZ29yeSBuYW1lXHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vQ29tbWVudCB0aGlzIGZvciB0ZXh0IGFsaWduIHN0YXJ0XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuLy8gQ2F0Z29yaWVzIEdyaWQgM1xyXG4uY2F0ZWdvcmllcy1jYXJkMyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDAuNTVweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC8vZGlzcGxheTogbm9uZTsgLy9Db21tZW50IG9yIFVuY29tbWVudCB0aGlzIHRvIHNob3cgb3IgaGlkZSBjYXRlZ29yeSBuYW1lXHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vQ29tbWVudCB0aGlzIGZvciB0ZXh0IGFsaWduIHN0YXJ0XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi8vIENhdGdvcmllcyBHcmlkIDRcclxuLmNhdGVnb3JpZXMtY2FyZDQge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8vYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICAvL2JvcmRlci1sZWZ0OiAwLjU1cHggc29saWQgI2Y3ZjdmNztcclxuICAgIC8vYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDAuNTVweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNmN2Y3Zjc7XHJcbiAgICAgICAgLy9jb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IC8vZGlzcGxheTogbm9uZTsgLy9Db21tZW50IG9yIFVuY29tbWVudCB0aGlzIHRvIHNob3cgb3IgaGlkZSBjYXRlZ29yeSBuYW1lXHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vQ29tbWVudCB0aGlzIGZvciB0ZXh0IGFsaWduIHN0YXJ0XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi8vIERyb3AgZG93biB0eXBlIGNhdGVnb3J5IGJsb2NrXHJcbi5jYXRlZ29yeS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgLmNhdGVnb3JpZXMtY2FyZDUge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbDogbGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IC8vZGlzcGxheTogbm9uZTsgLy9Db21tZW50IG9yIFVuY29tbWVudCB0aGlzIHRvIHNob3cgb3IgaGlkZSBjYXRlZ29yeSBuYW1lXHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy9Db21tZW50IHRoaXMgZm9yIHRleHQgYWxpZ24gc3RhcnRcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWNhdGVnb3J5LWl0ZW1zIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgLy9tYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIENhdGdvcmllcyBMaXN0IDJcclxuaW9uLWl0ZW0ge1xyXG4gICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIC8vYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwLjU1cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG59IiwiLmNhdGVnb3JpZXMgaW9uLWNhcmQge1xuICBtYXJnaW46IDRweCA4cHg7XG59XG4uY2F0ZWdvcmllcyBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhdGVnb3JpZXMgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKioqXG5Db3B5IHJlc3BlY3RpdmUgYmxvY2sgY3NzIGJsb2NrXG4qKiovXG4uY2F0ZWdvcmllcy1jYXJkMSBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNhdGVnb3JpZXMtY2FyZDEgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQxIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDEgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXRlZ29yaWVzLWNhcmQxIGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhdGVnb3JpZXMtY2FyZDIge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDIgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2F0ZWdvcmllcy1jYXJkMiBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQyIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2F0ZWdvcmllcy1jYXJkMiBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2F0ZWdvcmllcy1jYXJkMiBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXRlZ29yaWVzLWNhcmQzIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQzIGlvbi1jb2wge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNhdGVnb3JpZXMtY2FyZDMgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2F0ZWdvcmllcy1jYXJkMyBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhdGVnb3JpZXMtY2FyZDMgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2F0ZWdvcmllcy1jYXJkMyBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhdGVnb3JpZXMtY2FyZDMgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXRlZ29yaWVzLWNhcmQ0IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmNhdGVnb3JpZXMtY2FyZDQgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY2F0ZWdvcmllcy1jYXJkNCBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQ0IGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2F0ZWdvcmllcy1jYXJkNCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXRlZ29yaWVzLWNhcmQ0IGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2F0ZWdvcmllcy1jYXJkNCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhdGVnb3J5LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3JpZXMtY2FyZDUge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMDtcbiAgaW9uLWNvbDogbGFzdC1jaGlsZDtcbiAgaW9uLWNvbC1ib3JkZXItYm90dG9tOiAwcHg7XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IGlvbi10aHVtYm5haWwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcmllcy1jYXJkNSBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcmllcy1jYXJkNSBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAwLjU1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXRlZ29yeS1jb250YWluZXIgLmNhdGVnb3JpZXMtY2FyZDUgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcmllcy1jYXJkNSBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcmllcy1jYXJkNSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2F0ZWdvcnktY29udGFpbmVyIC5jYXRlZ29yaWVzLWNhcmQ1IC5zdWItY2F0ZWdvcnktaXRlbXMgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhdGVnb3J5LWNvbnRhaW5lciAuY2F0ZWdvcmllcy1jYXJkNSAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWl0ZW0gLml0ZW0taW5uZXIge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMC41NXB4O1xufVxuaW9uLWl0ZW0gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/categories/categories.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/categories/categories.page.ts ***!
    \***********************************************/

  /*! exports provided: CategoriesPage */

  /***/
  function srcAppCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
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

    var CategoriesPage =
    /*#__PURE__*/
    function () {
      function CategoriesPage(api, data, loadingController, navCtrl, router, settings, route) {
        _classCallCheck(this, CategoriesPage);

        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.settings = settings;
        this.route = route;
      }

      _createClass(CategoriesPage, [{
        key: "getProducts",
        value: function getProducts(id) {
          this.navCtrl.navigateForward('/tabs/categories/products/' + id);
        }
      }, {
        key: "subCategories",
        value: function subCategories(id) {
          return this.data.categories.filter(function (item) {
            return item.parent == id;
          });
        }
      }, {
        key: "showSubCategory",
        value: function showSubCategory(i) {
          var _this45 = this;

          var intial = this.data.mainCategories[i].show;
          this.data.mainCategories[i].show = !intial;

          if (this.data.categories.filter(function (item) {
            return item.parent == _this45.data.mainCategories[i].id;
          }).length == 0) {
            this.data.mainCategories.forEach(function (item) {
              return item.show = false;
            });
            this.getProducts(this.data.mainCategories[i].id);
          }
        }
      }]);

      return CategoriesPage;
    }();

    CategoriesPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.page.scss */
      "./src/app/categories/categories.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CategoriesPage);
    /***/
  },

  /***/
  "./src/app/checkout/address/address.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/checkout/address/address.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/address/address.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/checkout/address/address.page.ts ***!
    \**************************************************/

  /*! exports provided: CheckoutAddressPage */

  /***/
  function srcAppCheckoutAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutAddressPage", function () {
      return CheckoutAddressPage;
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


    var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data/checkout */
    "./src/app/data/checkout.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");

    var CheckoutAddressPage =
    /*#__PURE__*/
    function () {
      function CheckoutAddressPage(api, checkoutData, router, navCtrl, settings, route) {
        _classCallCheck(this, CheckoutAddressPage);

        this.api = api;
        this.checkoutData = checkoutData;
        this.router = router;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.route = route;
        this.loader = false;
      }

      _createClass(CheckoutAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCheckoutForm(); //this.getCountries();
        }
      }, {
        key: "getCheckoutForm",
        value: function getCheckoutForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee37() {
            var _this46 = this;

            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    this.loader = true;
                    _context37.next = 3;
                    return this.api.postItem('get_checkout_form').subscribe(function (res) {
                      _this46.checkoutData.form = res;
                      _this46.checkoutData.form.sameForShipping = true;

                      if (_this46.checkoutData.form.countries.length == 1) {
                        _this46.checkoutData.form.billing_country = _this46.checkoutData.form.countries[0].value;
                        _this46.checkoutData.form.shipping_country = _this46.checkoutData.form.countries[0].value;
                      }

                      _this46.checkoutData.billingStates = _this46.checkoutData.form.countries.find(function (item) {
                        return item.value == _this46.checkoutData.form.billing_country;
                      });
                      _this46.checkoutData.shippingStates = _this46.checkoutData.form.countries.find(function (item) {
                        return item.value == _this46.checkoutData.form.shipping_country;
                      });
                      _this46.loader = false;
                    }, function (err) {
                      console.log(err);
                      _this46.loader = false;
                    });

                  case 3:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this47 = this;

          this.api.getItem('settings/general/woocommerce_specific_allowed_countries').subscribe(function (res) {
            _this47.countries = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getBillingRegion",
        value: function getBillingRegion() {
          var _this48 = this;

          this.checkoutData.billingStates = this.checkoutData.form.countries.find(function (item) {
            return item.value == _this48.checkoutData.form.billing_country;
          });
          this.checkoutData.form.billing_state = '';
        }
      }, {
        key: "getShippingRegion",
        value: function getShippingRegion() {
          var _this49 = this;

          this.checkoutData.shippingStates = this.checkoutData.form.countries.find(function (item) {
            return item.value == _this49.checkoutData.form.shipping_country;
          });
          this.checkoutData.form.shipping_state = '';
        }
      }, {
        key: "updateOrderReview",
        value: function updateOrderReview() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee38() {
            var _this50 = this;

            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    _context38.next = 2;
                    return this.api.postItem('update_order_review').subscribe(function (res) {
                      _this50.checkoutData.orderReview = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "continueCheckout",
        value: function continueCheckout() {
          this.errorMessage = '';

          if (this.validateForm()) {
            if (!this.checkoutData.form.ship_to_different_address) this.assgnShippingAddress();
            this.navCtrl.navigateForward('/tabs/cart/checkout');
          }
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          if (this.checkoutData.form.billing_first_name == '' || this.checkoutData.form.billing_first_name == undefined) {
            this.errorMessage = 'Billing first name is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_last_name == '' || this.checkoutData.form.billing_last_name == undefined) {
            this.errorMessage = 'Billing last name is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_phone == '' || this.checkoutData.form.billing_phone == undefined) {
            this.errorMessage = 'Billing phone is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_address_1 == '' || this.checkoutData.form.billing_address_1 == undefined) {
            this.errorMessage = 'Billing Street address is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_city == '' || this.checkoutData.form.billing_city == undefined) {
            this.errorMessage = 'Billing city is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_postcode == '' || this.checkoutData.form.billing_postcode == undefined) {
            this.errorMessage = 'Billing post code is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_country == '' || this.checkoutData.form.billing_country == undefined) {
            this.errorMessage = 'Billing country is a required field';
            return false;
          }

          if (this.checkoutData.form.billing_state == '' || this.checkoutData.form.billing_state == undefined) {
            this.errorMessage = 'Billing state is a required field';
            return false;
          }

          if (this.checkoutData.form.ship_to_different_address) {
            if (this.checkoutData.form.shipping_first_name == '' || this.checkoutData.form.shipping_first_name == undefined) {
              this.errorMessage = 'Shipping first name is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_last_name == '' || this.checkoutData.form.shipping_last_name == undefined) {
              this.errorMessage = 'Shipping last name is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_address_1 == '' || this.checkoutData.form.shipping_address_1 == undefined) {
              this.errorMessage = 'Shipping Street address is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_city == '' || this.checkoutData.form.shipping_city == undefined) {
              this.errorMessage = 'Shipping city is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_postcode == '' || this.checkoutData.form.shipping_postcode == undefined) {
              this.errorMessage = 'Shipping post code is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_country == '' || this.checkoutData.form.shipping_country == undefined) {
              this.errorMessage = 'Shipping country is a required field';
              return false;
            }

            if (this.checkoutData.form.shipping_state == '' || this.checkoutData.form.shipping_state == undefined) {
              this.errorMessage = 'Shipping state is a required field';
              return false;
            }

            return true;
          } else return true;
        }
      }, {
        key: "assgnShippingAddress",
        value: function assgnShippingAddress() {
          this.checkoutData.form.shipping_first_name = this.checkoutData.form.billing_first_name;
          this.checkoutData.form.shipping_last_name = this.checkoutData.form.billing_last_name;
          this.checkoutData.form.shipping_company = this.checkoutData.form.billing_company;
          this.checkoutData.form.shipping_address_1 = this.checkoutData.form.billing_address_1;
          this.checkoutData.form.shipping_address_2 = this.checkoutData.form.billing_address_2;
          this.checkoutData.form.shipping_city = this.checkoutData.form.billing_city;
          this.checkoutData.form.shipping_postcode = this.checkoutData.form.billing_postcode;
          this.checkoutData.form.shipping_country = this.checkoutData.form.billing_country;
          this.checkoutData.form.shipping_state = this.checkoutData.form.billing_state;
          return true;
        }
      }]);

      return CheckoutAddressPage;
    }();

    CheckoutAddressPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CheckoutAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/address/address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/checkout/address/address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CheckoutAddressPage);
    /***/
  },

  /***/
  "./src/app/checkout/checkout/checkout.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/checkout/checkout/checkout.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".payment-description {\n  --ion-background-color: var(--ion-color-step-50,#f2f2f2);\n  margin: 16px;\n  --border-radius: 5px;\n}\n\n.StripeElement {\n  background-color: white;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.billing-header .toolbar-title-md {\n  padding-right: 75px;\n}\n\n.billing-header .toolbar-ios-header .toolbar-background-ios {\n  height: calc(44px + 20px);\n  min-height: calc(44px + 20px);\n  padding-top: 20px;\n}\n\n.StripeElement {\n  box-sizing: border-box;\n  height: 40px;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.stripe-payment {\n  margin: 10px 0 0 0;\n}\n\n.stripe-payment ion-list {\n  border-left: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n}\n\n.card-error {\n  padding: 10px 10px 10px;\n  text-align: center;\n  color: var(--ion-color-danger, #eb445a);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvRDpcXHdvb3RvcFxcV29vVG9vcC1BcHBBbmRyb2lkL3NyY1xcYXBwXFxjaGVja291dFxcY2hlY2tvdXRcXGNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0RBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7QUNJSjs7QURGQTtFQUNJLG9DQUFBO0FDS0o7O0FERkk7RUFDSSxtQkFBQTtBQ0tSOztBREZJO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEQUE7RUFDRSxzQkFBQTtFQUVBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLCtCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtBQ0RGOztBRElBO0VBQ0UsK0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtBQ0RGOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURFSTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7QUNBUjs7QURJQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2YyZjJmMik7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uU3RyaXBlRWxlbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZTZlYmYxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XHJcbn1cclxuLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XHJcbn1cclxuLlN0cmlwZUVsZW1lbnQtLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xyXG59XHJcbi5TdHJpcGVFbGVtZW50LS13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xyXG59XHJcbi5iaWxsaW5nLWhlYWRlciB7XHJcbiAgICAudG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNzVweDtcclxuICAgIH1cclxuXHJcbiAgICAudG9vbGJhci1pb3MtaGVhZGVyIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICAgIGhlaWdodDogY2FsYyg0NHB4ICsgMjBweCk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDQ0cHggKyAyMHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uU3RyaXBlRWxlbWVudCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2U2ZWJmMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NmZDdkZjtcclxufVxyXG5cclxuLlN0cmlwZUVsZW1lbnQtLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZhNzU1YTtcclxufVxyXG5cclxuLlN0cmlwZUVsZW1lbnQtLXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RyaXBlLXBheW1lbnQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1lcnJvciB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKTtcclxufVxyXG4iLCIucGF5bWVudC1kZXNjcmlwdGlvbiB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCNmMmYyZjIpO1xuICBtYXJnaW46IDE2cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uU3RyaXBlRWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2U2ZWJmMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcbn1cblxuLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NmZDdkZjtcbn1cblxuLlN0cmlwZUVsZW1lbnQtLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNmYTc1NWE7XG59XG5cbi5TdHJpcGVFbGVtZW50LS13ZWJraXQtYXV0b2ZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XG59XG5cbi5iaWxsaW5nLWhlYWRlciAudG9vbGJhci10aXRsZS1tZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDc1cHg7XG59XG4uYmlsbGluZy1oZWFkZXIgLnRvb2xiYXItaW9zLWhlYWRlciAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGhlaWdodDogY2FsYyg0NHB4ICsgMjBweCk7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoNDRweCArIDIwcHgpO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLlN0cmlwZUVsZW1lbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xufVxuXG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufVxuXG4uc3RyaXBlLXBheW1lbnQge1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG4uc3RyaXBlLXBheW1lbnQgaW9uLWxpc3Qge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMmYyZjI7XG59XG5cbi5jYXJkLWVycm9yIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNlYjQ0NWEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout/checkout.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/checkout/checkout/checkout.page.ts ***!
    \****************************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppCheckoutCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../data/checkout */
    "./src/app/data/checkout.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");

    var CheckoutPage =
    /*#__PURE__*/
    function () {
      function CheckoutPage(oneSignal, toastController, platform, api, checkoutData, settings, router, iab, loadingController, navCtrl, route
      /*, private braintree: Braintree*/
      ) {
        _classCallCheck(this, CheckoutPage);

        this.oneSignal = oneSignal;
        this.toastController = toastController;
        this.platform = platform;
        this.api = api;
        this.checkoutData = checkoutData;
        this.settings = settings;
        this.router = router;
        this.iab = iab;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.stripeStatus = {};
        this.buttonSubmit = false;
        this.results = {};
        this.disableButton = false;
        this.cardResponse = {};
        this.stripeForm = {};
      }

      _createClass(CheckoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateOrder();
        }
      }, {
        key: "updateOrder",
        value: function updateOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee39() {
            var _this51 = this;

            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                    this.checkoutData.form['woocommerce-process-checkout-nonce'] = this.checkoutData.form._wpnonce;
                    this.checkoutData.form['wc-ajax'] = 'update_order_review';
                    this.setOldWooCommerceVersionData();
                    _context39.next = 6;
                    return this.api.updateOrderReview('update_order_review', this.checkoutData.form).subscribe(function (res) {
                      _this51.orderReview = res;

                      if (_this51.orderReview.payment && _this51.orderReview.payment.stripe) {
                        _this51.stripe = Stripe(_this51.orderReview.payment.stripe.publishable_key);
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 6:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39, this);
          }));
        }
      }, {
        key: "updateOrderReview",
        value: function updateOrderReview() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee40() {
            var _this52 = this;

            return regeneratorRuntime.wrap(function _callee40$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    this.checkoutData.form.shipping_method = [];
                    this.orderReview.shipping.forEach(function (item, index) {
                      _this52.checkoutData.form['shipping_method[' + index + ']'] = item.chosen_method;
                    });
                    this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                    this.checkoutData.form['woocommerce-process-checkout-nonce'] = this.checkoutData.form._wpnonce;
                    this.checkoutData.form['wc-ajax'] = 'update_order_review';
                    this.setOldWooCommerceVersionData();
                    _context40.next = 8;
                    return this.api.updateOrderReview('update_order_review', this.checkoutData.form).subscribe(function (res) {
                      _this52.handleData(res);
                    }, function (err) {
                      console.log(err);
                    });

                  case 8:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee40, this);
          }));
        }
      }, {
        key: "setOldWooCommerceVersionData",
        value: function setOldWooCommerceVersionData() {
          this.checkoutData.form.city = this.checkoutData.form.billing_city;
          this.checkoutData.form.postcode = this.checkoutData.form.billing_postcode;
          this.checkoutData.form.country = this.checkoutData.form.billing_country;
          this.checkoutData.form.address = this.checkoutData.form.billing_address_1;
          this.checkoutData.form.address_2 = this.checkoutData.form.billing_address_2;
          this.checkoutData.form.s_city = this.checkoutData.form.shipping_city;
          this.checkoutData.form.s_postcode = this.checkoutData.form.shipping_postcode;
          this.checkoutData.form.s_country = this.checkoutData.form.shipping_country;
          this.checkoutData.form.s_address = this.checkoutData.form.shipping_address_1;
          this.checkoutData.form.s_address_2 = this.checkoutData.form.shipping_address_2;
          this.checkoutData.form.has_full_address = true;
        }
      }, {
        key: "handleData",
        value: function handleData(results) {
          console.log(results); //
        }
      }, {
        key: "placeOrder",
        value: function placeOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee41() {
            var _this53 = this;

            return regeneratorRuntime.wrap(function _callee41$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    this.disableButton = true;
                    this.errorMessage = undefined;
                    /** Comment this if not using OneSignal Push notification ***/

                    if (!(this.platform.is('cordova') && this.settings.settings.onesignal_app_id && this.settings.settings.google_project_id)) {
                      _context41.next = 5;
                      break;
                    }

                    _context41.next = 5;
                    return this.oneSignal.getIds().then(function (data) {
                      _this53.checkoutData.form.onesignal_user_id = data.userId;
                    });

                  case 5:
                    if (this.checkoutData.form.payment_method == 'authnet') {
                      this.checkoutData.form['authnet-card-expiry'] = this.checkoutData.form.expiryMonth + ' / ' + this.checkoutData.form.expiryYear;
                    }

                    if (!(this.checkoutData.form.payment_method == 'stripe')) {
                      _context41.next = 12;
                      break;
                    }

                    this.setStripeForm();
                    _context41.next = 10;
                    return this.api.getExternalData('https://api.stripe.com/v1/tokens', this.stripeForm).subscribe(function (res) {
                      _this53.handleStipeToken(res);
                    }, function (err) {
                      if (err.error.error.message) _this53.errorMessage = err.error.error.message;
                      _this53.disableButton = false;
                    });

                  case 10:
                    _context41.next = 14;
                    break;

                  case 12:
                    _context41.next = 14;
                    return this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).subscribe(function (res) {
                      _this53.results = res;

                      _this53.handleOrder();
                    }, function (err) {
                      _this53.disableButton = false;
                      console.log(err);
                    });

                  case 14:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee41, this);
          }));
        }
      }, {
        key: "handleOrder",
        value: function handleOrder() {
          if (this.results.result == 'success') {
            if (this.checkoutData.form.payment_method == 'wallet' || this.checkoutData.form.payment_method == 'paypalpro' || this.checkoutData.form.payment_method == 'stripe' || this.checkoutData.form.payment_method == 'bacs' || this.checkoutData.form.payment_method == 'cheque' || this.checkoutData.form.payment_method == 'cod' || this.checkoutData.form.payment_method == 'authnet') {
              this.orderSummary(this.results.redirect);
            } else if (this.checkoutData.form.payment_method == 'payuindia') {
              this.handlePayUPayment();
            } else if (this.checkoutData.form.payment_method == 'paytm') {
              this.handlePaytmPayment();
            } else if (this.checkoutData.form.payment_method == 'paytm-qr') {
              this.handlePaytmQRPayment();
            } else this.handlePayment();
          } else if (this.results.result == 'failure') {
            this.disableButton = false;
            this.errorMessage = this.results.messages;
          }
        }
      }, {
        key: "orderSummary",
        value: function orderSummary(address) {
          var str = address;
          var pos1 = str.lastIndexOf("-received/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 10);
          var order_id = str.substr(pos1 + 10, pos3);
          this.navCtrl.navigateRoot('/order-summary/' + order_id);
        }
      }, {
        key: "handlePayment",
        value: function handlePayment() {
          var _this54 = this;

          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.results.redirect, '_blank', options);
          browser.show();
          browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
              _this54.orderSummary(data.url);

              browser.hide();
            } else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
              browser.close();
              _this54.disableButton = false;
            }
          });
          browser.on('exit').subscribe(function (data) {
            _this54.disableButton = false;
          });
        }
      }, {
        key: "handlePayUPayment",
        value: function handlePayUPayment() {
          var _this55 = this;

          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.results.redirect, '_blank', options);
          var str = this.results.redirect;
          var pos1 = str.lastIndexOf("/order-pay/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 11);
          this.orderId = str.substr(pos1 + 11, pos3);
          var browserActive = false;
          browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('payumoney.com/transact') != -1 && !browserActive) {
              browserActive = true;
              browser.show();
            } else if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
              if (_this55.orderId) _this55.navCtrl.navigateRoot('/order-summary/' + _this55.orderId);
              browser.hide();
            } else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
              browser.close();
              _this55.disableButton = false;
            }
          });
          browser.on('exit').subscribe(function (data) {
            _this55.disableButton = false;
          });
        }
      }, {
        key: "handlePaytmPayment",
        value: function handlePaytmPayment() {
          var _this56 = this;

          var str = this.results.redirect;
          var pos1 = str.lastIndexOf("/order-pay/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 11);
          this.orderId = str.substr(pos1 + 11, pos3);
          var browserActive = false;

          if (this.results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser = this.iab.create(this.results.redirect, '_blank', options);
            browser.on('loadstart').subscribe(function (data) {
              if ((data.url.indexOf('securegw-stage.paytm.in/theia') != -1 || data.url.indexOf('processTransaction') != -1) && !browserActive) {
                browserActive = true;
                browser.show();
              } else if (data.url.indexOf('type=success') != -1) {
                if (_this56.orderId) _this56.navCtrl.navigateRoot('/order-summary/' + _this56.orderId);
                browser.hide();
              } else if (data.url.indexOf('type=error') != -1 || data.url.indexOf('Failed') != -1 || data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this56.disableButton = false;
              } else if (data.url.indexOf('Thank+you+for+your+order') != -1) {
                browser.close();
                _this56.disableButton = false;
              }
            });
            browser.on('exit').subscribe(function (data) {
              _this56.disableButton = false;
            });
          } else if (this.results.result == 'failure') {
            this.errorMessage = this.results.messages;
            this.disableButton = false;
          }
        }
      }, {
        key: "handlePaytmQRPayment",
        value: function handlePaytmQRPayment() {
          var _this57 = this;

          var str = this.results.redirect;
          var pos1 = str.lastIndexOf("/order-received/");
          var pos2 = str.lastIndexOf("/?key=wc_order");
          var pos3 = pos2 - (pos1 + 16);
          var order_id = str.substr(pos1 + 16, pos3);

          if (this.results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser = this.iab.create(this.results.redirect, '_blank', options);
            browser.on('loadstart').subscribe(function (data) {
              browser.show();

              if (data.url.indexOf('/order-received/') == -1) {
                browser.close();
                _this57.disableButton = false;

                _this57.navCtrl.navigateRoot('/order-summary/' + _this57.orderId);
              }
            });
            browser.on('exit').subscribe(function (data) {
              _this57.disableButton = false;
            });
          } else if (this.results.result == 'failure') {
            this.errorMessage = this.results.messages;
            this.disableButton = false;
          }
        }
      }, {
        key: "onChangePayment",
        value: function onChangePayment() {
          this.disableButton = false;

          if (
          /*this.checkoutData.form.payment_method == 'stripe' || */
          this.checkoutData.form.payment_method == 'paypalpro' && this.platform.is('cordova')) {// this.enterCard();
          }
        }
        /*enterCard() {
            this.cardIO.canScan()
            .then(
            (res: boolean) => {
              if(res){
                let options = {
                    requireExpiry: true,
                    requireCVV: true,
                    scanInstructions: "Scan the front of your card",
                    scanExpiry: true,
                    hideCardIOLogo: true,
                    noCamera: true,
                };
                this.cardIO.scan(options)
                .then((data) => {
                   this.cardResponse = data;
                   this.setCardData();
                }, err => {
                   console.log(err);
                });
              }
            }
            );
        }
        setCardData(){
            if(this.checkoutData.form.payment_method == 'stripe'){
                this.checkoutData.form['moneris-card-number'] = this.cardResponse.cardNumber;
                this.cardResponse.expiryYear =  this.cardResponse.expiryYear.slice(0, 2); //2030
                this.checkoutData.form['moneris-card-expiry'] = this.cardResponse.expiryMonth + ' / ' + this.cardResponse.expiryYear;//;'04 / 30'
                this.checkoutData.form['moneris-card-cvc'] = this.cardResponse.cvv;
            } else if(this.checkoutData.form.payment_method == 'paypalpro'){
                this.checkoutData.form['billing_credircard'] = this.cardResponse.cardNumber;
                this.checkoutData.form['billing_cardtype'] = this.cardResponse.cardType;
                this.checkoutData.form['moneris-card-expiry'] = this.cardResponse.expiryYear;
                this.checkoutData.form['billing_expdatemonth'] = this.cardResponse.expiryMonth;
                this.checkoutData.form['billing_ccvnumber'] = this.cardResponse.cvv;
            }
        }*/

      }, {
        key: "setStripeForm",
        value: function setStripeForm() {
          this.stripeForm.key = this.orderReview.payment.stripe.publishable_key;
          this.stripeForm.payment_user_agent = 'stripe.js/6ea8d55';
          this.stripeForm['card[number]'] = this.cardResponse.cardNumber; //'4242424242424242';//this.cardResponse.cardNumber;

          this.stripeForm['card[exp_month]'] = this.cardResponse.expiryMonth; //'04';//this.cardResponse.expiryMonth;

          this.stripeForm['card[exp_year]'] = this.cardResponse.expiryYear; ////this.cardResponse.expiryYear;

          this.stripeForm['card[cvc]'] = this.cardResponse.cvv; //this.cardResponse.cvc;

          this.stripeForm['card[name]'] = this.checkoutData.form.billing_first_name + this.checkoutData.form.billing_last_name;
          this.stripeForm['card[address_line1]'] = this.checkoutData.form.billing_address_1;
          this.stripeForm['card[address_line2]'] = this.checkoutData.form.billing_address_2;
          this.stripeForm['card[address_state]'] = this.checkoutData.form.billing_state;
          this.stripeForm['card[address_city]'] = this.checkoutData.form.billing_city;
          this.stripeForm['card[address_zip]'] = this.checkoutData.form.billing_postcode;
          this.stripeForm['card[address_country]'] = this.checkoutData.form.billing_country;
          return true;
        }
      }, {
        key: "handleStipeToken",
        value: function handleStipeToken(token) {
          var _this58 = this;

          if (token && token.id) {
            var form = {
              type: 'card',
              token: '',
              key: ''
            };
            form.type = 'card';
            form.token = token.id;
            form.key = this.orderReview.payment.stripe.publishable_key;
            this.checkoutData.form['wc-stripe-payment-token'] = token.id; //For Existing Cards add api

            this.api.getExternalData('https://api.stripe.com/v1/sources', form).subscribe(function (res) {
              _this58.stripePlaceOrder(res);
            }, function (err) {
              if (err.error.error.message) _this58.errorMessage = err.error.error.message;
              _this58.disableButton = false;
            });
          } else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
          }
        }
      }, {
        key: "stripePlaceOrder",
        value: function stripePlaceOrder(src) {
          var _this59 = this;

          if (src && src.id) {
            this.checkoutData.form['stripe_source'] = src.id;
            this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).subscribe(function (res) {
              _this59.results = res;

              _this59.handleOrder();
            }, function (err) {
              _this59.disableButton = false;
              console.log(err);
            });
          } else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
          }
        }
      }, {
        key: "isEmptyObject",
        value: function isEmptyObject(obj) {
          return Object.keys(obj).length === 0;
        }
      }, {
        key: "onUseNewCard",
        value: function onUseNewCard() {
          this.setupStripe();
        }
      }, {
        key: "setupStripe",
        value: function setupStripe() {
          var _this60 = this;

          var style = {
            base: {
              color: '#32325d',
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            }
          };
          var elements = this.stripe.elements();
          this.cardElement = elements.create('card', {
            hidePostalCode: true,
            style: style
          });
          this.cardElement.mount('#card-element'); //this.card.mount('#card-element');

          var form = document.getElementById('payment-form');
          console.log('test start');
          form.addEventListener('submit', function (event) {
            console.log('loading start');
            event.preventDefault();
            /*this.stripe.createToken(this.cardElement).then((result) => {
              console.log(result.token.id);
                  this.service.getStripeSource(this.form, result.token)
                    .then((results) => {
                    console.log(results)
                });
              });*/

            var ownerInfo = {
              owner: {
                name: _this60.checkoutData.form.billing_first_name + ' ' + _this60.checkoutData.form.billing_last_name,
                address: {
                  line1: _this60.checkoutData.form.billing_address_1,
                  city: _this60.checkoutData.form.billing_city,
                  postal_code: _this60.checkoutData.form.billing_postcode,
                  country: 'US'
                },
                email: _this60.checkoutData.form.billing_email
              }
            };

            if (!_this60.checkoutData.form.shipping) {
              _this60.checkoutData.form.shipping_first_name = _this60.checkoutData.form.billing_first_name;
              _this60.checkoutData.form.shipping_last_name = _this60.checkoutData.form.billing_last_name;
              _this60.checkoutData.form.shipping_company = _this60.checkoutData.form.billing_company;
              _this60.checkoutData.form.shipping_address_1 = _this60.checkoutData.form.billing_address_1;
              _this60.checkoutData.form.shipping_address_2 = _this60.checkoutData.form.billing_address_2;
              _this60.checkoutData.form.shipping_city = _this60.checkoutData.form.billing_city;
              _this60.checkoutData.form.shipping_country = _this60.checkoutData.form.billing_country;
              _this60.checkoutData.form.shipping_state = _this60.checkoutData.form.billing_state;
              _this60.checkoutData.form.shipping_postcode = _this60.checkoutData.form.billing_postcode;
            }

            _this60.loading = _this60.loadingController.create({});

            _this60.loading.present();

            _this60.buttonSubmit = true;
            _this60.PlaceOrder = "Placing Order";

            _this60.stripe.createSource(_this60.cardElement, ownerInfo).then(function (result) {
              if (result.error) {
                _this60.loading.dismiss(); // Inform the user if there was an error


                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
              } else {
                _this60.checkoutData.form.stripe_source = result.source.id;

                _this60.stripNewPayment();
              }
            });
            /*    */

          });
        }
      }, {
        key: "onClickStripeSubmit",
        value: function onClickStripeSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee42() {
            var _this61 = this;

            var ownerInfo;
            return regeneratorRuntime.wrap(function _callee42$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    ownerInfo = {
                      owner: {
                        name: this.checkoutData.form.billing_first_name + ' ' + this.checkoutData.form.billing_last_name,
                        address: {
                          line1: this.checkoutData.form.billing_address_1,
                          city: this.checkoutData.form.billing_city,
                          postal_code: this.checkoutData.form.billing_postcode,
                          country: 'US'
                        },
                        email: this.checkoutData.form.billing_email
                      }
                    };

                    if (!this.checkoutData.form.shipping) {
                      this.checkoutData.form.shipping_first_name = this.checkoutData.form.billing_first_name;
                      this.checkoutData.form.shipping_last_name = this.checkoutData.form.billing_last_name;
                      this.checkoutData.form.shipping_company = this.checkoutData.form.billing_company;
                      this.checkoutData.form.shipping_address_1 = this.checkoutData.form.billing_address_1;
                      this.checkoutData.form.shipping_address_2 = this.checkoutData.form.billing_address_2;
                      this.checkoutData.form.shipping_city = this.checkoutData.form.billing_city;
                      this.checkoutData.form.shipping_country = this.checkoutData.form.billing_country;
                      this.checkoutData.form.shipping_state = this.checkoutData.form.billing_state;
                      this.checkoutData.form.shipping_postcode = this.checkoutData.form.billing_postcode;
                    }

                    this.buttonSubmit = true;
                    this.PlaceOrder = "Placing Order";
                    _context42.next = 6;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      animated: true,
                      backdropDismiss: true
                    });

                  case 6:
                    this.loading = _context42.sent;
                    _context42.next = 9;
                    return this.loading.present();

                  case 9:
                    this.stripe.createSource(this.cardElement, ownerInfo).then(function (result) {
                      if (result.error) {
                        _this61.loading.dismiss(); // Inform the user if there was an error


                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                      } else {
                        _this61.checkoutData.form.stripe_source = result.source.id;

                        _this61.stripNewPayment();
                      }
                    });

                  case 10:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee42, this);
          }));
        }
      }, {
        key: "stripNewPayment",
        value: function stripNewPayment() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee43() {
            var _this62 = this;

            return regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    //IF for new Card Payment
                    if (this.checkoutData.form.card) {
                      this.checkoutData.form['wc-stripe-payment-token'] = 'new';
                    } //For Existing Card
                    //if(!form.card)
                    //this.checkoutData.form['wc-stripe-payment-token'] = form.payment_token);


                    this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).subscribe(function (res) {
                      _this62.stripeStatus = res;

                      if (_this62.stripeStatus.result == 'success') {
                        if (_this62.stripeStatus.redirect.indexOf('confirm-pi-') != -1) {
                          // PI from resuct redirect text
                          var clientSecret = _this62.stripeStatus.redirect.substring(_this62.stripeStatus.redirect.lastIndexOf("confirm-pi-") + 11, _this62.stripeStatus.redirect.lastIndexOf(":%2F")); //var clientSecret = 'pi_1EqKUlAMZtK61uwq79jdiVMt_secret_DitxeVf8vWt05K6kUS71alvrS';


                          _this62.stripe.handleCardPayment(clientSecret, _this62.cardElement, {
                            payment_method_data: {
                              billing_details: {
                                name: _this62.checkoutData.form.billing_first_name + ' ' + _this62.checkoutData.form.billing_last_name,
                                address: {
                                  line1: _this62.checkoutData.form.billing_address_1,
                                  city: _this62.checkoutData.form.billing_city,
                                  postal_code: _this62.checkoutData.form.billing_postcode,
                                  country: 'GB'
                                },
                                email: _this62.checkoutData.form.billing_email
                              }
                            }
                          }).then(function (result) {
                            _this62.loading.dismiss();

                            if (result.error) {
                              _this62.buttonSubmit = false; // Display error.message in your UI.
                            } else {
                              _this62.buttonSubmit = false;
                              var str = _this62.stripeStatus.redirect;
                              var pos1 = str.lastIndexOf("received%252F");
                              var pos2 = str.lastIndexOf("%252F%253Fkey");
                              var pos3 = pos2 - (pos1 + 13);
                              var order_id = str.substr(pos1 + 13, pos3);

                              _this62.api.ajaxCall('/?wc-ajax=wc_stripe_verify_intent&order=' + order_id + '&nonce=' + _this62.checkoutData.form.stripe_confirm_pi + '&redirect_to=').subscribe(function (res) {
                                _this62.navCtrl.navigateRoot('/order-summary/' + order_id);
                              }, function (err) {});
                            }
                          });
                        } else if (_this62.stripeStatus.redirect.indexOf('order-received') != -1 && _this62.stripeStatus.redirect.indexOf('key=wc_order') != -1) {
                          var str = _this62.stripeStatus.redirect;
                          var pos1 = str.lastIndexOf("/order-received/");
                          var pos2 = str.lastIndexOf("/?key=wc_order");
                          var pos3 = pos2 - (pos1 + 16);
                          var order_id = str.substr(pos1 + 16, pos3);
                          _this62.buttonSubmit = false;

                          _this62.loading.dismiss();

                          _this62.navCtrl.navigateRoot('/order-summary/' + order_id);
                        }
                      } else if (_this62.stripeStatus.result == 'failure') {
                        _this62.presentToast(_this62.stripeStatus.messages);

                        _this62.buttonSubmit = false;

                        _this62.loading.dismiss();
                      }
                    }, function (err) {
                      _this62.disableButton = false;
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee44() {
            var toast;
            return regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    _context44.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'top'
                    });

                  case 2:
                    toast = _context44.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, this);
          }));
        }
      }, {
        key: "brainTreePayment",
        value: function brainTreePayment() {
          /*console.log('Braintree payment.......');
          
          const BRAINTREE_TOKEN = 'sandbox_7b74zrbp_zm8j7dwnjqqzzgxn';
          
          const appleOptions: ApplePayOptions = {
            merchantId: 'zm8j7dwnjqqzzgxn',
            currency: 'USD',
            country: 'US'
          }
            const paymentOptions: PaymentUIOptions = {
            amount: '14.99',
            primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
          }
            this.braintree.initialize(BRAINTREE_TOKEN)
            .then(() => this.braintree.setupApplePay(appleOptions))
            .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
            .then((result: PaymentUIResult) => {
              if (result.userCancelled) {
                console.log("User cancelled payment dialog.");
              } else {
                console.log("User successfully completed payment!");
                console.log("Payment Nonce: " + result.nonce);
                console.log("Payment Result.", result);
              }
            })
            .catch((error: string) => console.error(error));*/
        }
      }]);

      return CheckoutPage;
    }();

    CheckoutPage.ctorParameters = function () {
      return [{
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        /*, private braintree: Braintree*/

      }];
    };

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout/checkout.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/checkout/checkout/checkout.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    /*, private braintree: Braintree*/
    ])], CheckoutPage);
    /***/
  },

  /***/
  "./src/app/contact/contact.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/contact/contact.page.ts ***!
    \*****************************************/

  /*! exports provided: ContactPage */

  /***/
  function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data/product */
    "./src/app/data/product.ts");

    var ContactPage =
    /*#__PURE__*/
    function () {
      function ContactPage(settings, api, productData) {
        _classCallCheck(this, ContactPage);

        this.settings = settings;
        this.api = api;
        this.productData = productData;
        this.form = {};
        this.status = {};
        this.disableButton = false;
        this.contactUsLink = '';
      }

      _createClass(ContactPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this63 = this;

          this.disableButton = true;
          this.form['your-name'] = this.form.yourName;
          this.form['your-email'] = this.form.yourEmail;
          this.form['your-tel'] = this.form.yourTel;
          this.api.ajaxCall(this.contactUsLink, this.form).subscribe(function (res) {
            _this63.disableButton = false;
            _this63.status = res;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ContactPage;
    }();

    ContactPage.ctorParameters = function () {
      return [{
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_4__["Product"]
      }];
    };

    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.page.scss */
      "./src/app/contact/contact.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _data_product__WEBPACK_IMPORTED_MODULE_4__["Product"]])], ContactPage);
    /***/
  },

  /***/
  "./src/app/data/checkout.ts":
  /*!**********************************!*\
    !*** ./src/app/data/checkout.ts ***!
    \**********************************/

  /*! exports provided: CheckoutData */

  /***/
  function srcAppDataCheckoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutData", function () {
      return CheckoutData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckoutData = function CheckoutData() {
      _classCallCheck(this, CheckoutData);

      this.form = {};
      this.billingStates = {};
      this.shippingStates = {};
      this.orderReview = {}; //this.orderReview.payment = {};
    };

    CheckoutData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CheckoutData);
    /***/
  },

  /***/
  "./src/app/data/post.ts":
  /*!******************************!*\
    !*** ./src/app/data/post.ts ***!
    \******************************/

  /*! exports provided: Post */

  /***/
  function srcAppDataPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Post = function Post() {
      _classCallCheck(this, Post);

      this.post = {};
      this.post.post = {};
    };

    Post = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Post);
    /***/
  },

  /***/
  "./src/app/data/vendor.ts":
  /*!********************************!*\
    !*** ./src/app/data/vendor.ts ***!
    \********************************/

  /*! exports provided: Vendor */

  /***/
  function srcAppDataVendorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vendor", function () {
      return Vendor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Vendor = function Vendor() {
      _classCallCheck(this, Vendor);

      this.vendor = {};
      this.product = {};
      this.product.categories = [];
      this.product.images = [];
    };

    Vendor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Vendor);
    /***/
  },

  /***/
  "./src/app/post/post.page.scss":
  /*!*************************************!*\
    !*** ./src/app/post/post.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".post ion-card {\n  box-shadow: none;\n}\n.post h2 {\n  margin: 20px 0 10px 16px;\n  font-size: 18px;\n}\n.post h3 {\n  font-size: 15px;\n  margin: 5px 16px 8px 16px;\n  line-height: 1.6;\n}\n.post p {\n  line-height: 1.6;\n  text-indent: 0px;\n  font-size: 14px;\n  text-align: justify;\n  margin: 14px 16px 16px;\n  font-weight: 500;\n}\n.post ion-img {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXHBvc3RcXHBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUNBUjtBREVJO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0FDRFI7QURHSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURHSTtFQUNJLFlBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMCAxMHB4IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBtYXJnaW46IDVweCAxNnB4IDhweCAxNnB4O1xyXG4gICAgICAgIC8vY29sb3I6ICMyMjI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBtYXJnaW46IDE0cHggMTZweCAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iLCIucG9zdCBpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucG9zdCBoMiB7XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnBvc3QgaDMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDE2cHggOHB4IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4ucG9zdCBwIHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IDE0cHggMTZweCAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBvc3QgaW9uLWltZyB7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/post/post.page.ts":
  /*!***********************************!*\
    !*** ./src/app/post/post.page.ts ***!
    \***********************************/

  /*! exports provided: PostPage */

  /***/
  function srcAppPostPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPage", function () {
      return PostPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");

    var PostPage =
    /*#__PURE__*/
    function () {
      function PostPage(api, router, navCtrl, settings, route) {
        _classCallCheck(this, PostPage);

        this.api = api;
        this.router = router;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.route = route;
      }

      _createClass(PostPage, [{
        key: "getPost",
        value: function getPost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee45() {
            var _this64 = this;

            return regeneratorRuntime.wrap(function _callee45$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _context45.next = 2;
                    return this.api.postItem('page_content', {
                      page_id: this.id
                    }).subscribe(function (res) {
                      _this64.post = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee45, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.getPost();
        }
      }]);

      return PostPage;
    }();

    PostPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.page.scss */
      "./src/app/post/post.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], PostPage);
    /***/
  },

  /***/
  "./src/app/product/md5.ts":
  /*!********************************!*\
    !*** ./src/app/product/md5.ts ***!
    \********************************/

  /*! exports provided: md5 */

  /***/
  function srcAppProductMd5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "md5", function () {
      return md5;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var md5 = function md5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }

        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;

        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }

        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      ;

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      }

      ;

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }

        return utftext;
      }

      ;
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    };
    /***/

  },

  /***/
  "./src/app/product/product.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/product/product.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.product-header .badge {\n  position: absolute;\n  margin-top: -10px;\n  margin-left: 9px;\n}\n.product-header .cart-icon {\n  font-size: 30px;\n}\nion-card-title {\n  font-size: 40px;\n}\nion-card-header {\n  padding: 10px;\n}\nion-card-content {\n  padding: 0;\n}\nion-card-content .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: 500;\n}\nion-card-content .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n.product .product-details ion-chip {\n  margin-left: 10px;\n}\n.product .price {\n  font-weight: bold;\n  font-size: 16px;\n}\n.product .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 400;\n}\n.product .add-to-cart-button {\n  margin: 16px;\n}\n.product .variation-block {\n  margin: 13px 0px 0 0px;\n}\n.product .variation-block .variation-product {\n  margin-bottom: 5px;\n}\n.product .variation-block .variation-product ion-label {\n  color: #000;\n}\n.product .variation-block .variation-product .item {\n  border: 2px solid #fff;\n  background-color: #f9f9f9;\n}\n.product .variation-block .variation-product ion-select {\n  font-size: 12px;\n  color: #ffa41c;\n}\n.product .variation-block .variation-product .option-box {\n  padding: 0 10px;\n}\n.product .variation-block .variation-product .option-box .option-button {\n  height: 1.8em;\n  --border-width: 1px;\n  font-weight: 400;\n  --border-radius: 25px;\n  font-size: 12px;\n  opacity: 0.5;\n}\n.product .variation-block .variation-product .option-box .selected-option {\n  --border-width: 2px;\n  font-weight: 600;\n  opacity: 1;\n}\n.product .variation-block .variation-product .option-box textarea {\n  border: 1px solid #f4f4f4;\n  border-radius: 3px;\n  width: 100%;\n}\n.product .related-products .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.product .related-products .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n.product .related-products .related-item-name {\n  padding: 16px 0 0 0;\n  font-weight: 400;\n}\n.product .related-products .scroll-related-products {\n  padding: 16px 0;\n  overflow: auto;\n  white-space: nowrap;\n}\n.product .related-products .scroll-related-products .product {\n  display: inline-block;\n  text-decoration: none;\n  width: 50%;\n  margin: 0 0 0 10px;\n}\n.product .related-products .scroll-related-products .product:last-child {\n  margin-right: 10px;\n}\n@media (min-width: 481px) and (max-width: 768px) {\n  .product .related-products .scroll-related-products .product {\n    width: 33.333%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .product .related-products .scroll-related-products .product {\n    width: 25%;\n  }\n}\n@media (min-width: 1025px) {\n  .product .related-products .scroll-related-products .product {\n    width: 20%;\n  }\n}\n.product .related-products .scroll-related-products ion-img {\n  height: auto;\n  width: 100%;\n}\n.product .related-products .scroll-related-products ion-card {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  margin-left: 2px;\n}\n.product .review-star {\n  float: right;\n}\n.product .review-star .star-icon {\n  color: #f7f7f7;\n  font-size: 1em;\n  position: relative;\n}\n.product .review-star .star-icon.full:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n}\n.product .review-star .star-icon.half:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n  width: 50%;\n  overflow: hidden;\n}\n@-moz-document url-prefix() {\n  .product .review-star .star-icon {\n    font-size: 50px;\n    line-height: 34px;\n  }\n}\n.onpress {\n  white-space: nowrap;\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.onpress:active {\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-transform: scale(2, 2);\n          transform: scale(2, 2);\n}\n.review-item h2 {\n  font-size: 18px;\n  width: 100%;\n}\n.stock {\n  margin-left: 0px;\n  z-index: 5;\n  position: absolute;\n  --box-shadow: none;\n  left: 0px;\n  top: 10px;\n  width: 64px;\n  font-size: 8px;\n  height: 17px;\n  --border-radius: 0 2px 2px 0;\n}\n.grouped-block {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.description img {\n  max-width: 100%;\n  border: 0;\n  height: auto !important;\n}\n.percent-off {\n  padding: 1px 4px;\n  margin: 7px;\n  background: var(--ion-color-secondary-tint, #50c8ff) !important;\n  border-radius: 2px;\n  color: var(--ion-color-secondary-contrast, #fff) !important;\n  font-size: 10px;\n}\nion-item {\n  --background: transparent;\n}\n.review-content {\n  white-space: normal;\n  overflow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXHByb2R1Y3RcXHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NaO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEQ1I7QUNDSTtFQUNJLGVBQUE7QURDUjtBQ0VBO0VBQ0ksZUFBQTtBRENKO0FDQ0E7RUFDSSxhQUFBO0FERUo7QUNBQTtFQUNJLFVBQUE7QURHSjtBQ0ZJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBREdSO0FDRlE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREdaO0FDQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNHUTtFQUNJLGlCQUFBO0FEQVo7QUNHSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRERSO0FDR0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRERSO0FDR0k7RUFDSSxZQUFBO0FERFI7QUNHSTtFQUNJLHNCQUFBO0FERFI7QUNHUTtFQUNJLGtCQUFBO0FERFo7QUNFWTtFQUNJLFdBQUE7QURBaEI7QUNFWTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QURBaEI7QUNFWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FEQWhCO0FDRVk7RUFDSSxlQUFBO0FEQWhCO0FDQ2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEQ3BCO0FDQ2dCO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QURDcEI7QUNDZ0I7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRENwQjtBQ0tRO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QURKWjtBQ0tZO0VBRUksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURKaEI7QUNPUTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7QUROWjtBQ1FRO0VBQ0ksZUFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtBRFBaO0FDUVk7RUFDSSxxQkFBQTtFQUVBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEUGhCO0FDU1k7RUFDSSxrQkFBQTtBRFBoQjtBQ1NZO0VBQ0k7SUFDSSxjQUFBO0VEUGxCO0FBQ0Y7QUNTWTtFQUNJO0lBQ0ksVUFBQTtFRFBsQjtBQUNGO0FDU1k7RUFDSTtJQUNJLFVBQUE7RURQbEI7QUFDRjtBQ1NZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURQaEI7QUNTWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FEUGhCO0FDV0k7RUFDSSxZQUFBO0FEVFI7QUNVUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURSWjtBQ1VRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QURSWjtBQ1VRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QURSWjtBQ1VRO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RURSZDtBQUNGO0FDWUE7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBRFRKO0FDV0E7RUFDSSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QURSSjtBQ1dJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QURSUjtBQ1dBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QURSSjtBQ1VBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBRFBKO0FDVUk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FEUFI7QUNVQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLCtEQUFBO0VBQ0Esa0JBQUE7RUFDQSwyREFBQTtFQUNBLGVBQUE7QURQSjtBQ1NBO0VBQ0kseUJBQUE7QUROSjtBQ1FBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FETEoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2R1Y3QtaGVhZGVyIC5iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG4ucHJvZHVjdC1oZWFkZXIgLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNhcmQtY29udGVudCAucHJpY2Uge1xuICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWNhcmQtY29udGVudCAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1kZXRhaWxzIGlvbi1jaGlwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucHJvZHVjdCAucHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnByb2R1Y3QgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnByb2R1Y3QgLmFkZC10by1jYXJ0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTZweDtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sge1xuICBtYXJnaW46IDEzcHggMHB4IDAgMHB4O1xufVxuLnByb2R1Y3QgLnZhcmlhdGlvbi1ibG9jayAudmFyaWF0aW9uLXByb2R1Y3Qge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZHVjdCAudmFyaWF0aW9uLWJsb2NrIC52YXJpYXRpb24tcHJvZHVjdCBpb24tbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sgLnZhcmlhdGlvbi1wcm9kdWN0IC5pdGVtIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sgLnZhcmlhdGlvbi1wcm9kdWN0IGlvbi1zZWxlY3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZhNDFjO1xufVxuLnByb2R1Y3QgLnZhcmlhdGlvbi1ibG9jayAudmFyaWF0aW9uLXByb2R1Y3QgLm9wdGlvbi1ib3gge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ucHJvZHVjdCAudmFyaWF0aW9uLWJsb2NrIC52YXJpYXRpb24tcHJvZHVjdCAub3B0aW9uLWJveCAub3B0aW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMS44ZW07XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucHJvZHVjdCAudmFyaWF0aW9uLWJsb2NrIC52YXJpYXRpb24tcHJvZHVjdCAub3B0aW9uLWJveCAuc2VsZWN0ZWQtb3B0aW9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9kdWN0IC52YXJpYXRpb24tYmxvY2sgLnZhcmlhdGlvbi1wcm9kdWN0IC5vcHRpb24tYm94IHRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0IC5yZWxhdGVkLXByb2R1Y3RzIC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZHVjdCAucmVsYXRlZC1wcm9kdWN0cyAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcbiAgcGFkZGluZzogMTZweCAwIDAgMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wcm9kdWN0IC5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucHJvZHVjdCAucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdCAucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0IHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5wcm9kdWN0IC5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIGlvbi1pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLnByb2R1Y3QgLnJldmlldy1zdGFyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2R1Y3QgLnJldmlldy1zdGFyIC5zdGFyLWljb24ge1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0IC5yZXZpZXctc3RhciAuc3Rhci1pY29uLmZ1bGw6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmNlMDA7XG4gIGNvbnRlbnQ6IFwi4piFXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cbi5wcm9kdWN0IC5yZXZpZXctc3RhciAuc3Rhci1pY29uLmhhbGY6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmNlMDA7XG4gIGNvbnRlbnQ6IFwi4piFXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gIC5wcm9kdWN0IC5yZXZpZXctc3RhciAuc3Rhci1pY29uIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIH1cbn1cblxuLm9ucHJlc3Mge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLm9ucHJlc3M6YWN0aXZlIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIsIDIpO1xufVxuXG4ucmV2aWV3LWl0ZW0gaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RvY2sge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA2NHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICAtLWJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xufVxuXG4uZ3JvdXBlZC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5kZXNjcmlwdGlvbiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5wZXJjZW50LW9mZiB7XG4gIHBhZGRpbmc6IDFweCA0cHg7XG4gIG1hcmdpbjogN3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucmV2aWV3LWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogdW5zZXQ7XG59IiwiLnByb2R1Y3QtaGVhZGVyIHtcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICB9XHJcbiAgICAuY2FydC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5wcmljZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAvL2NvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIC5zcGVjaWFsLXByaWNlIHtcclxuICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgLy9jb2xvcjogYmxhY2s7XHJcbn1cclxuLnByb2R1Y3Qge1xyXG4gICAgLnByb2R1Y3QtZGV0YWlscyB7XHJcbiAgICAgICAgaW9uLWNoaXAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5zcGVjaWFsLXByaWNlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5hZGQtdG8tY2FydC1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTZweDtcclxuICAgIH1cclxuICAgIC52YXJpYXRpb24tYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbjogMTNweCAwcHggMCAwcHg7XHJcbiAgICAgICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnZhcmlhdGlvbi1wcm9kdWN0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmYTQxYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3B0aW9uLWJveCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAub3B0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQtb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWxhdGVkLXByb2R1Y3RzIHtcclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgLy9jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAuc3BlY2lhbC1wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAjODY4Njg2O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWxhdGVkLWl0ZW0tbmFtZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMCAwIDA7XHJcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmY7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXZpZXctc3RhciB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC5zdGFyLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXItaWNvbi5mdWxsOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjZTAwO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3Rhci1pY29uLmhhbGY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmNlMDA7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDI2MDUnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XHJcbiAgICAgICAgICAgIC5zdGFyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm9ucHJlc3Mge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLm9ucHJlc3M6YWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMiwgMik7XHJcbn1cclxuLnJldmlldy1pdGVtIHtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuLnN0b2NrIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XHJcbn1cclxuLmdyb3VwZWQtYmxvY2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4ucGVyY2VudC1vZmYge1xyXG4gICAgcGFkZGluZzogMXB4IDRweDtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjNTBjOGZmKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ucmV2aWV3LWNvbnRlbnR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/product/product.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/product/product.page.ts ***!
    \*****************************************/

  /*! exports provided: ProductPage */

  /***/
  function srcAppProductProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPage", function () {
      return ProductPage;
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


    var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./md5 */
    "./src/app/product/md5.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var ProductPage =
    /*#__PURE__*/
    function () {
      function ProductPage(translate, toastController, socialSharing, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, vendor, iab) {
        _classCallCheck(this, ProductPage);

        this.translate = translate;
        this.toastController = toastController;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.vendor = vendor;
        this.iab = iab;
        this.filter = {};
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.groupedProducts = [];
        this.relatedProducts = {};
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.addonsList = []; //ADDONS

        this.lan = {};
        this.filter.page = 1;
        this.quantity = "1";
      }

      _createClass(ProductPage, [{
        key: "getReviewsPage",
        value: function getReviewsPage() {
          this.navCtrl.navigateForward(this.router.url + '/review/' + this.product.id);
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          var _this65 = this;

          this.api.postFlutterItem('product', {
            'product_id': this.id
          }).subscribe(function (res) {
            _this65.product = res;

            _this65.handleProduct();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this66 = this;

          this.translate.get(['Oops!', 'Please Select', 'Please wait', 'Options', 'Option', 'Select', 'Item added to cart', 'Message', 'Requested quantity not available']).subscribe(function (translations) {
            _this66.lan.oops = translations['Oops!'];
            _this66.lan.PleaseSelect = translations['Please Select'];
            _this66.lan.Pleasewait = translations['Please wait'];
            _this66.lan.options = translations['Options'];
            _this66.lan.option = translations['Option'];
            _this66.lan.select = translations['Select'];
            _this66.lan.addToCart = translations['Item added to cart'];
            _this66.lan.message = translations['Message'];
            _this66.lan.lowQuantity = translations['Requested quantity not available'];
          });
          this.product = this.productData.product;
          this.id = this.route.snapshot.paramMap.get('id');
          if (this.product.id) this.handleProduct();else this.getProduct();
        }
      }, {
        key: "handleProduct",
        value: function handleProduct() {
          var _this67 = this;

          /* Reward Points */
          if (this.settings.settings.switchRewardPoints && this.product.meta_data) this.product.meta_data.forEach(function (item) {
            if (item.key == '_wc_points_earned') {
              _this67.product.showPoints = item.value;
            }
          });
          /* Product Addons */

          if (this.settings.settings.switchAddons === 1) this.getAddons();
          this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
          }); //if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();

          if (this.product.type == 'grouped' && this.product.grouped_products.length) this.getGroupedProducts();
          this.getRelatedProducts();
          this.getReviews();
        }
      }, {
        key: "getVariationProducts",
        value: function getVariationProducts() {
          var _this68 = this;

          this.api.getItem('products/' + this.product.id + '/variations', {
            per_page: 100
          }).subscribe(function (res) {
            _this68.variations = res;
          }, function (err) {});
        }
      }, {
        key: "getGroupedProducts",
        value: function getGroupedProducts() {
          var _this69 = this;

          if (this.product.grouped_products.length) {
            var filter = [];

            for (var item in this.product.grouped_products) {
              filter['include[' + item + ']'] = this.product.grouped_products[item];
            }

            this.api.getItem('products', filter).subscribe(function (res) {
              _this69.groupedProducts = res;
            }, function (err) {});
          }
        }
      }, {
        key: "getRelatedProducts",
        value: function getRelatedProducts() {
          var _this70 = this;

          var filter = [];
          filter['product_id'] = this.product.id;
          this.api.postFlutterItem('product_details', filter).subscribe(function (res) {
            _this70.relatedProducts = res;
          }, function (err) {});
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          var _this71 = this;

          this.api.postFlutterItem('product_reviews', {
            'product_id': this.product.id
          }).subscribe(function (res) {
            _this71.reviews = res;

            for (var item in _this71.reviews) {
              _this71.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_8__["md5"])(_this71.reviews[item].email);
            }
          }, function (err) {});
        }
      }, {
        key: "goToProduct",
        value: function goToProduct(product) {
          this.productData.product = product;
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + product.id);
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee46() {
            var _this72 = this;

            return regeneratorRuntime.wrap(function _callee46$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    if (!(this.product.manage_stock && this.product.stock_quantity < this.data.cart[this.product.id])) {
                      _context46.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context46.next = 10;
                    break;

                  case 4:
                    if (!(this.selectAdons() && this.setVariations2() && this.setGroupedProducts())) {
                      _context46.next = 10;
                      break;
                    }

                    if (this.product.type != 'grouped') {
                      this.options.quantity = this.quantity;
                    }

                    this.options.product_id = this.product.id;
                    this.disableButton = true;
                    _context46.next = 10;
                    return this.api.postItem('add_to_cart', this.options).subscribe(function (res) {
                      _this72.results = res;

                      if (_this72.results.error) {
                        _this72.presentToast(_this72.results.notice);
                      } else {
                        _this72.cart = res;

                        _this72.presentToast(_this72.lan.addToCart);

                        _this72.data.updateCart(_this72.cart.cart);
                      }

                      _this72.disableButton = false;
                    }, function (err) {
                      console.log(err);
                      _this72.disableButton = false;
                    });

                  case 10:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee47() {
            var toast;
            return regeneratorRuntime.wrap(function _callee47$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    _context47.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'top'
                    });

                  case 2:
                    toast = _context47.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee47, this);
          }));
        }
      }, {
        key: "setVariations",
        value: function setVariations() {
          var _this73 = this;

          if (this.variationId) {
            this.options.variation_id = this.variationId;
          }

          this.product.attributes.forEach(function (item) {
            if (item.selected) {
              _this73.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
          });

          for (var i = 0; i < this.product.attributes.length; i++) {
            if (this.product.attributes[i].variation && this.product.attributes[i].selected == undefined) {
              this.presentAlert(this.lan.options, this.lan.select + ' ' + this.product.attributes[i].name + ' ' + this.lan.option);
              return false;
            }
          }

          return true;
        }
      }, {
        key: "setVariations2",
        value: function setVariations2() {
          var doAdd = true;

          if (this.product.type == 'variable' && this.product.variationOptions != null) {
            for (var i = 0; i < this.product.variationOptions.length; i++) {
              if (this.product.variationOptions[i].selected != null) {
                this.options['variation[attribute_' + this.product.variationOptions[i].attribute + ']'] = this.product.variationOptions[i].selected;
              } else if (this.product.variationOptions[i].selected == null && this.product.variationOptions[i].options.length != 0) {
                this.presentAlert(this.lan.options, this.lan.select + ' ' + this.product.variationOptions[i].name);
                doAdd = false;
                break;
              } else if (this.product.variationOptions[i].selected == null && this.product.variationOptions[i].options.length == 0) {
                this.product.stock_status = 'outofstock';
                doAdd = false;
                break;
              }
            }

            if (this.product.variation_id) {
              this.options['variation_id'] = this.product.variation_id;
            }
          }

          return doAdd;
        }
      }, {
        key: "chooseVariation2",
        value: function chooseVariation2(index, value) {
          this.product.variationOptions[index].selected = value;
          this.product.stock_status = 'instock';

          if (this.product.variationOptions.every(function (option) {
            return option.selected != null;
          })) {
            var selectedOptions = [];
            var matchedOptions = [];

            for (var i = 0; i < this.product.variationOptions.length; i++) {
              selectedOptions.push(this.product.variationOptions[i].selected);
            }

            for (var i = 0; i < this.product.availableVariations.length; i++) {
              matchedOptions = [];

              for (var j = 0; j < this.product.availableVariations[i].option.length; j++) {
                if (selectedOptions.includes(this.product.availableVariations[i].option[j].value) || this.product.availableVariations[i].option[j].value == '') {
                  matchedOptions.push(this.product.availableVariations[i].option[j].value);
                }
              }

              if (matchedOptions.length == selectedOptions.length) {
                this.product.variation_id = this.product.availableVariations[i].variation_id;
                this.product.price = this.product.availableVariations[i].display_price;
                this.product.regular_price = this.product.availableVariations[i].display_regular_price;
                this.product.formated_price = this.product.availableVariations[i].formated_price;
                this.product.formated_sales_price = this.product.availableVariations[i].formated_sales_price;
                if (this.product.availableVariations[i].display_regular_price != this.product.availableVariations[i].display_price) this.product.sale_price = this.product.availableVariations[i].display_price;else this.product.sale_price = null;

                if (!this.product.availableVariations[i].is_in_stock) {
                  this.product.stock_status = 'outofstock';
                }

                break;
              }
            }

            if (matchedOptions.length != selectedOptions.length) {
              this.product.stock_status = 'outofstock';
            }
          }
        }
      }, {
        key: "chooseVariation",
        value: function chooseVariation(att, value) {
          var _this74 = this;

          this.product.attributes.forEach(function (item) {
            item.selected = undefined;
          });
          this.product.attributes.forEach(function (item) {
            if (item.name == att.name) {
              item.selected = value;
            }
          });
          if (this.usedVariationAttributes.every(function (a) {
            return a.selected !== undefined;
          })) this.variations.forEach(function (variation) {
            var test = new Array(_this74.usedVariationAttributes.length);
            test.fill(false);

            _this74.usedVariationAttributes.forEach(function (attribute) {
              if (variation.attributes.length == 0) {
                _this74.variationId = variation.id;
                _this74.product.stock_status = variation.stock_status;
                _this74.product.price = variation.price;
                _this74.product.sale_price = variation.sale_price;
                _this74.product.regular_price = variation.regular_price;
                _this74.product.manage_stock = variation.manage_stock;
                _this74.product.stock_quantity = variation.stock_quantity; //this.product.images[0] = variation.image; /* Uncomment this if you want to use variation images */
              } else {
                variation.attributes.forEach(function (item, index) {
                  if (item.name == attribute.name && item.option == attribute.selected) {
                    test[index] = true;
                  }
                });

                if (test.every(function (v) {
                  return v == true;
                })) {
                  _this74.variationId = variation.id;
                  _this74.product.stock_status = variation.stock_status;
                  _this74.product.price = variation.price;
                  _this74.product.sale_price = variation.sale_price;
                  _this74.product.regular_price = variation.regular_price;
                  _this74.product.manage_stock = variation.manage_stock;
                  _this74.product.stock_quantity = variation.stock_quantity; //this.product.images[0] = variation.image;  /* Uncomment this if you want to use variation images */

                  test.fill(false);
                } else if (variation.attributes.length != 1 && variation.attributes.length == _this74.usedVariationAttributes.length && test.some(function (v) {
                  return v == false;
                })) {//this.product.stock_status = 'outofstock';
                  //this.options.variation_id = variation.id;
                }
              }
            });
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee48() {
            var alert;
            return regeneratorRuntime.wrap(function _callee48$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                    _context48.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context48.sent;
                    _context48.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee48, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.productData.product = {};
        }
      }, {
        key: "share",
        value: function share() {
          var options = {
            message: "Check this out!",
            subject: this.product.name,
            files: ['', ''],
            url: this.product.permalink,
            chooserTitle: 'Choose an App'
          };
          this.socialSharing.shareWithOptions(options);
        }
      }, {
        key: "getDetail",
        value: function getDetail(vendor) {
          console.log(vendor);
          this.vendor.vendor = vendor;
          var pages = this.router.url.split('/');
          this.navCtrl.navigateForward('/tabs/' + pages[2] + '/vendor-products');
        }
      }, {
        key: "buyExternalProduct",
        value: function buyExternalProduct(id) {
          var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
          var browser = this.iab.create(this.product.external_url, '_blank', options);
          browser.show();
        }
      }, {
        key: "setGroupedProducts",
        value: function setGroupedProducts() {
          var _this75 = this;

          if (this.product.type == 'grouped') {
            this.options['add-to-cart'] = this.product.id;
            this.groupedProducts.forEach(function (item) {
              if (item.selected) {
                _this75.options['quantity[' + item.id + ']'] = item.selected;
              }
            });
            return true;
          } else return true;
        }
        /* PRODUCT ADDONS */

      }, {
        key: "getAddons",
        value: function getAddons() {
          if (this.product.meta_data) {
            for (var item in this.product.meta_data) {
              if (this.product.meta_data[item].key == '_product_addons' && this.product.meta_data[item].value.length) {
                var _this$addonsList;

                (_this$addonsList = this.addonsList).push.apply(_this$addonsList, _toConsumableArray(this.product.meta_data[item].value));
              }
            }
          }

          this.getGlobalAddons();
        }
      }, {
        key: "getGlobalAddons",
        value: function getGlobalAddons() {
          var _this76 = this;

          this.api.getAddonsList('product-add-ons').subscribe(function (res) {
            _this76.handleAddonResults(res);
          });
        }
      }, {
        key: "handleAddonResults",
        value: function handleAddonResults(results) {
          var _this77 = this;

          if (results && results.length) results.forEach(function (item) {
            var _this77$addonsList;

            (_this77$addonsList = _this77.addonsList).push.apply(_this77$addonsList, _toConsumableArray(item.fields));
          });
        }
      }, {
        key: "selectAdons",
        value: function selectAdons() {
          var _this78 = this;

          this.options = {};
          var valid = this.validateform();

          if (valid) {
            this.addonsList.forEach(function (value, i) {
              value.selectedName = value.name.toLowerCase();
              value.selectedName = value.selectedName.split(' ').join('-');
              value.selectedName = value.selectedName.split('.').join('');
              value.selectedName = value.selectedName.replace(':', '');
              value.options.forEach(function (option, j) {
                option.selectedLabel = option.label.toLowerCase();
                option.selectedLabel = option.selectedLabel.split(' ').join('-');
                option.selectedLabel = option.selectedLabel.split('.').join('');
                option.selectedLabel = option.selectedLabel.replace(':', '');

                if (value.selected instanceof Array) {
                  if (value.selected.includes(option.label)) {
                    _this78.options['addon-' + _this78.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                  }
                } else if (option.label == value.selected && value.type == 'select') {
                  _this78.options['addon-' + _this78.product.id + '-' + value.selectedName + '-' + i] = option.selectedLabel + '-' + (j + 1);
                } else if (option.label == value.selected && value.type == 'radiobutton') {
                  _this78.options['addon-' + _this78.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                } else if (value.type === 'custom_textarea' && option.input && option.input !== '') {
                  _this78.options['addon-' + _this78.product.id + '-' + value.selectedName + '-' + i + '[' + option.selectedLabel + ']'] = option.input;
                }
              });

              if (value.type == 'custom_text') {
                var label = value.name;
                label = label.toLowerCase();
                label = label.split(' ').join('-');
                label = label.split('.').join('');
                label = label.replace(':', '');
                _this78.options['addon-' + _this78.product.id + '-' + label + '-' + i] = value.input;
              }
            });
          }

          return valid;
        }
      }, {
        key: "validateform",
        value: function validateform() {
          if (this.addonsList) {
            for (var addon in this.addonsList) {
              for (var item in this.addonsList[addon].fields) {
                if (this.addonsList[addon].fields[item].required == 1 && this.addonsList[addon].fields[item].selected == '') {
                  this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].fields[item].name);
                  return false;
                }
              }

              if (this.addonsList[addon].type == 'custom_text') {
                if (this.addonsList[addon].required == 1 && (!this.addonsList[addon].input || this.addonsList[addon].input == '')) {
                  this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].name);
                  return false;
                }
              }
            }

            return true;
          }

          return true;
        }
      }]);

      return ProductPage;
    }();

    ProductPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_10__["Vendor"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]
      }];
    };

    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.page.scss */
      "./src/app/product/product.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_vendor__WEBPACK_IMPORTED_MODULE_10__["Vendor"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]])], ProductPage);
    /***/
  },

  /***/
  "./src/app/products/products.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/products/products.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n  height: 100%;\n}\n\nion-card-header {\n  padding: 10px;\n}\n\nion-card-content {\n  padding: 0;\n}\n\nion-card-content .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\nion-card-content .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n\n.scrollmenu2 {\n  margin: 5px 0;\n  z-index: 1;\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.scrollmenu2 h5 {\n  margin: 0;\n  padding: 5px;\n  font-size: 12px;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.scrollmenu2 .scroll {\n  display: inline-block;\n  text-align: center;\n  padding: 8px 8px 0 8px;\n  text-decoration: none;\n  width: 21%;\n}\n\n.list-md {\n  padding-top: 0;\n}\n\n.stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  height: 19px;\n  --box-shadow: none;\n}\n\n.offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n}\n\n.percent-off {\n  padding: 1px 4px;\n  margin: 7px;\n  background: var(--ion-color-secondary-tint, #50c8ff) !important;\n  border-radius: 2px;\n  color: var(--ion-color-secondary-contrast, #fff) !important;\n  font-size: 10px;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  box-shadow: none;\n}\n\n.products-header ion-searchbar {\n  height: 40px;\n}\n\n.products-header ion-searchbar ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.product-list3 ion-item {\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-50, rgba(0, 0, 0, 0.2))));\n  --border-width: 0 0 0.55px;\n  --padding-start: 0px;\n  padding: 10xp;\n}\n\n.product-list3 ion-item ion-thumbnail {\n  width: 28%;\n  height: 100%;\n  padding: 10px;\n  margin: 0px;\n}\n\n.product-list3 ion-item .details {\n  align-self: flex-start;\n  width: 100%;\n}\n\n.product-list3 ion-item .details ion-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n\n.product-list3 ion-item .details p {\n  margin: 0;\n}\n\n.product-list3 ion-item .details .price {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.product-list3 ion-item .details .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n\n.product-list3 ion-item .details ion-icon {\n  font-size: x-large;\n  font-weight: 300;\n}\n\n.product-list3 ion-item .offer {\n  font-size: 8px;\n  --border-radius: 2px;\n  width: 46px;\n  min-height: 16px;\n  font-weight: 600;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRDpcXHdvb3RvcFxcV29vVG9vcC1BcHBBbmRyb2lkL3NyY1xcYXBwXFxwcm9kdWN0c1xccHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBREZJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNJUjs7QURIUTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSVo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREhJO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDS1I7O0FESEk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNLUjs7QURGQTtFQUNJLGNBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0RBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7QUNTSjs7QUROSTtFQUNJLFlBQUE7QUNTUjs7QURSUTtFQUNJLGlCQUFBO0FDVVo7O0FETEk7RUFDSSxzSEFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDUVI7O0FEUFE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDU1o7O0FEUFE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUNTWjs7QURSWTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNVaEI7O0FEUlk7RUFDSSxTQUFBO0FDVWhCOztBRFJZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDVWhCOztBRFRnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDV3BCOztBRFJZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ1VoQjs7QURQUTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNTWiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8vY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIC5zcGVjaWFsLXByaWNlIHtcclxuICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsOyAvL2NvbG9yOiBibGFjaztcclxufVxyXG4uc2Nyb2xsbWVudTIge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHotaW5kZXg6IDE7IC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGg1IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnNjcm9sbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvL2NvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB3aWR0aDogMjElO1xyXG4gICAgfVxyXG59XHJcbi5saXN0LW1kIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5zdG9jayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTM5cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5vZmZlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5wZXJjZW50LW9mZiB7XHJcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ucHJvZHVjdHMtaGVhZGVyIHtcclxuICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wcm9kdWN0LWxpc3QzIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgcmdiYSgwLCAwLCAwLCAwLjIpKSkpO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEweHA7XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgLy9wYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIC5zcGVjaWFsLXByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vZmZlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgLnByaWNlIHtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgLnByaWNlIC5zcGVjaWFsLXByaWNlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLnNjcm9sbG1lbnUyIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc2Nyb2xsbWVudTIgaDUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2Nyb2xsbWVudTIgLnNjcm9sbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAyMSU7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5zdG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAtNnB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMzlweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBoZWlnaHQ6IDE5cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm9mZmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucGVyY2VudC1vZmYge1xuICBwYWRkaW5nOiAxcHggNHB4O1xuICBtYXJnaW46IDdweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjNTBjOGZmKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wcm9kdWN0cy1oZWFkZXIgaW9uLXNlYXJjaGJhciB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5wcm9kdWN0cy1oZWFkZXIgaW9uLXNlYXJjaGJhciBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIHJnYmEoMCwgMCwgMCwgMC4yKSkpKTtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBwYWRkaW5nOiAxMHhwO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAyOCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIC5wcmljZSAuc3BlY2lhbC1wcmljZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5vZmZlciB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIG1pbi1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/products/products.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/products/products.page.ts ***!
    \*******************************************/

  /*! exports provided: ProductsPage */

  /***/
  function srcAppProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
      return ProductsPage;
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


    var _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../filter/filter.page */
    "./src/app/filter/filter.page.ts");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductsPage =
    /*#__PURE__*/
    function () {
      function ProductsPage(config, alertController, translate, vendor, modalController, api, data, product, settings, router, navCtrl, route) {
        _classCallCheck(this, ProductsPage);

        this.config = config;
        this.alertController = alertController;
        this.translate = translate;
        this.vendor = vendor;
        this.modalController = modalController;
        this.api = api;
        this.data = data;
        this.product = product;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.products = [];
        this.tempProducts = [];
        this.subCategories = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.loader = false;
        this.showSearch = true;
        this.cart = {};
        this.options = {};
        this.lan = {};
        this.gridView = true;
        this.filter.page = 1;
        this.filter.status = 'publish';
        this.options.quantity = 1;
      }

      _createClass(ProductsPage, [{
        key: "getFilter",
        value: function getFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee49() {
            var _this79 = this;

            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee49$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    _context49.next = 2;
                    return this.modalController.create({
                      component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                      componentProps: {
                        filter: this.filter,
                        attributes: this.attributes
                      }
                    });

                  case 2:
                    modal = _context49.sent;
                    modal.present();
                    _context49.next = 6;
                    return modal.onDidDismiss();

                  case 6:
                    _ref = _context49.sent;
                    data = _ref.data;

                    if (data) {
                      this.filter = data;
                      Object.keys(this.filter).forEach(function (key) {
                        return _this79.filter[key] === undefined ? delete _this79.filter[key] : '';
                      });
                      this.filter.page = 1;
                      this.getProducts();
                    }

                  case 9:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee49, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this80 = this;

          this.filter.page = this.filter.page + 1;
          this.api.postFlutterItem('products', this.filter).subscribe(function (res) {
            _this80.tempProducts = res;

            _this80.products.push.apply(_this80.products, _this80.tempProducts);

            event.target.complete();
            if (_this80.tempProducts.length == 0) _this80.hasMoreItems = false;
          }, function (err) {
            event.target.complete();
          });
          console.log('Done');
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this81 = this;

          this.loader = true;
          this.api.postFlutterItem('products', this.filter).subscribe(function (res) {
            console.log(res);
            _this81.products = res;
            _this81.loader = false;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAttributes",
        value: function getAttributes() {
          var _this82 = this;

          this.api.postItem('product-attributes', {
            category: this.filter.id
          }).subscribe(function (res) {
            _this82.attributes = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this83 = this;

          if (this.route.snapshot.paramMap.get('id')) {
            this.filter.id = this.route.snapshot.paramMap.get('id');
          }

          if (this.vendor.vendor.id) {
            this.filter.vendor = this.vendor.vendor.id ? this.vendor.vendor.id : this.vendor.vendor.ID;
          }

          if (this.vendor.vendor.wcpv_product_vendors) {
            delete this.filter.vendor;
            this.filter.wcpv_product_vendors = this.vendor.vendor.wcpv_product_vendors;
          }

          if (this.data.categories && this.data.categories.length) {
            for (var i = 0; i < this.data.categories.length; i++) {
              if (this.data.categories[i].parent == this.filter.id) {
                this.subCategories.push(this.data.categories[i]);
              }
            }
          }

          if (this.settings.colWidthProducts == 4) this.filter.per_page = 15;
          this.getProducts();
          this.getAttributes();
          this.translate.get(['Oops!', 'Please Select', 'Please wait', 'Options', 'Option', 'Select', 'Item added to cart', 'Message', 'Requested quantity not available']).subscribe(function (translations) {
            _this83.lan.oops = translations['Oops!'];
            _this83.lan.PleaseSelect = translations['Please Select'];
            _this83.lan.Pleasewait = translations['Please wait'];
            _this83.lan.options = translations['Options'];
            _this83.lan.option = translations['Option'];
            _this83.lan.select = translations['Select'];
            _this83.lan.addToCart = translations['Item added to cart'];
            _this83.lan.message = translations['Message'];
            _this83.lan.lowQuantity = translations['Requested quantity not available'];
          });
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward(this.router.url + '/product/' + product.id);
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + id);
        }
      }, {
        key: "loaded",
        value: function loaded(product) {
          console.log('Loaded');
          product.loaded = true;
        }
      }, {
        key: "onInput",
        value: function onInput() {
          if (this.searchInput.length) {
            this.products = '';
            this.filter.q = this.searchInput;
            this.filter.page = 1;
            this.getProducts();
          } else {
            this.products = '';
            this.filter.q = undefined;
            this.filter.page = 1;
            this.getProducts();
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.showSearch = false;
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.vendor.vendor = {};
          this.showSearch = true;
        }
      }, {
        key: "toggleGridView",
        value: function toggleGridView() {
          this.gridView = !this.gridView;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee50() {
            var _this84 = this;

            return regeneratorRuntime.wrap(function _callee50$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context50.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context50.next = 13;
                    break;

                  case 4:
                    if (!(product.type == 'variable')) {
                      _context50.next = 8;
                      break;
                    }

                    this.getProduct(product);
                    _context50.next = 13;
                    break;

                  case 8:
                    if (!this.setVariations(product)) {
                      _context50.next = 13;
                      break;
                    }

                    if (this.data.cart[product.id] != undefined) this.data.cart[product.id] += 1;else this.data.cart[product.id] = 1;
                    this.options.product_id = product.id;
                    _context50.next = 13;
                    return this.api.postItem('add_to_cart', this.options).subscribe(function (res) {
                      _this84.cart = res;

                      _this84.data.updateCart(_this84.cart.cart);
                    }, function (err) {
                      console.log(err);
                    });

                  case 13:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee50, this);
          }));
        }
      }, {
        key: "setVariations",
        value: function setVariations(product) {
          var _this85 = this;

          if (product.variationId) {
            this.options.variation_id = product.variationId;
          }

          product.attributes.forEach(function (item) {
            if (item.selected) {
              _this85.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
          });

          for (var i = 0; i < product.attributes.length; i++) {
            if (product.type == 'variable' && product.attributes[i].variation && product.attributes[i].selected == undefined) {
              this.presentAlert(this.lan.options, this.lan.select + ' ' + product.attributes[i].name + ' ' + this.lan.option);
              return false;
            }
          }

          return true;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee51() {
            var alert;
            return regeneratorRuntime.wrap(function _callee51$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    _context51.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context51.sent;
                    _context51.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context51.stop();
                }
              }
            }, _callee51, this);
          }));
        }
      }, {
        key: "updateToCart",
        value: function updateToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee52() {
            var _this86 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context52.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context52.next = 11;
                    break;

                  case 4:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpParams"]();

                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity += 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] += 1;
                        }

                        ;
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                      }
                    }

                    params = params.set('_wpnonce', this.data.cartNonce);
                    params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                    params = params.set('update_cart', 'Update Cart');
                    _context52.next = 11;
                    return this.api.updateCart('/cart/', params).subscribe(function (res) {
                      console.log(res);
                      _this86.cart = res;

                      _this86.data.updateCart(_this86.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 11:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, this);
          }));
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee53() {
            var _this87 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee53$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpParams"]();

                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity -= 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] -= 1;
                        }

                        ;
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                      }
                    }

                    params = params.set('_wpnonce', this.data.cartNonce);
                    params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                    params = params.set('update_cart', 'Update Cart');
                    _context53.next = 7;
                    return this.api.updateCart('/cart/', params).subscribe(function (res) {
                      console.log(res);
                      _this87.cart = res;

                      _this87.data.updateCart(_this87.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee53, this);
          }));
        }
      }]);

      return ProductsPage;
    }();

    ProductsPage.ctorParameters = function () {
      return [{
        type: _config__WEBPACK_IMPORTED_MODULE_11__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_9__["Vendor"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.page.scss */
      "./src/app/products/products.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_11__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _data_vendor__WEBPACK_IMPORTED_MODULE_9__["Vendor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ProductsPage);
    /***/
  },

  /***/
  "./src/app/review/md5.ts":
  /*!*******************************!*\
    !*** ./src/app/review/md5.ts ***!
    \*******************************/

  /*! exports provided: md5 */

  /***/
  function srcAppReviewMd5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "md5", function () {
      return md5;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var md5 = function md5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }

        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;

        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }

        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      ;

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      }

      ;

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }

        return utftext;
      }

      ;
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    };
    /***/

  },

  /***/
  "./src/app/review/review.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/review/review.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppReviewReviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.review-star {\n  float: right;\n}\n.review-star .star-icon {\n  color: #f7f7f7;\n  font-size: 1em;\n  position: relative;\n}\n.review-star .star-icon.full:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n}\n.review-star .star-icon.half:before {\n  color: #ffce00;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n  width: 50%;\n  overflow: hidden;\n}\n@-moz-document url-prefix() {\n  .review-star .star-icon {\n    font-size: 50px;\n    line-height: 34px;\n  }\n}\n.review-content {\n  white-space: normal;\n  overflow: unset;\n}\n.review-percent-block {\n  max-width: 400px;\n  margin: auto;\n  padding-bottom: 20px;\n}\n.review-percent-block h3 {\n  margin-top: 6px;\n  font-size: 14px;\n}\n.review-percent-block .progress-bar {\n  background-color: var(--ion-color-light, #92949c);\n  height: 4px;\n  width: 100%;\n  padding: 0;\n  margin-right: 0%;\n  margin-top: 11px;\n  box-shadow: none;\n  border-radius: 5px;\n}\n.review-percent-block .progress-bar span {\n  text-align: center;\n  display: table;\n  height: 100%;\n  border-radius: 3px 0 0 3px;\n  box-shadow: none;\n  background-color: var(--ion-color-dark, #222428);\n  -webkit-transition: width 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out;\n}\n.review-percent-block .review-stars {\n  float: right;\n}\n.review-percent-block ion-col {\n  padding: 0;\n}\n.new-review .rating .star-icon {\n  color: #ddd;\n  font-size: 18px;\n  position: relative;\n}\n.new-review .rating .star-icon.full:before {\n  color: #FFC107;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n}\n.new-review .rating .star-icon.half:before {\n  color: #FFC107;\n  content: \"★\";\n  position: absolute;\n  left: 0;\n  width: 50%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jldmlldy9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXHJldmlld1xccmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxZQUFBO0FERUo7QUNESTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURHUjtBQ0RJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QURHUjtBQ0RJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QURHUjtBQ0RJO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RURHVjtBQUNGO0FDQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QURHSjtBQ0RBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QURJSjtBQ0hJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QURLUjtBQ0hJO0VBQ0ksaURBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREtSO0FDSlE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtBRE1aO0FDSEk7RUFDSSxZQUFBO0FES1I7QUNISTtFQUNJLFVBQUE7QURLUjtBQ0FRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREdaO0FDRFE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBREdaO0FDRFE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBREdaIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucmV2aWV3LXN0YXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmV2aWV3LXN0YXIgLnN0YXItaWNvbiB7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJldmlldy1zdGFyIC5zdGFyLWljb24uZnVsbDpiZWZvcmUge1xuICBjb2xvcjogI2ZmY2UwMDtcbiAgY29udGVudDogXCLimIVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuLnJldmlldy1zdGFyIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xuICBjb2xvcjogI2ZmY2UwMDtcbiAgY29udGVudDogXCLimIVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgLnJldmlldy1zdGFyIC5zdGFyLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgfVxufVxuXG4ucmV2aWV3LWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5yZXZpZXctcGVyY2VudC1ibG9jayB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ucmV2aWV3LXBlcmNlbnQtYmxvY2sgaDMge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZXZpZXctcGVyY2VudC1ibG9jayAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjOTI5NDljKTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucmV2aWV3LXBlcmNlbnQtYmxvY2sgLnByb2dyZXNzLWJhciBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLnJldmlldy1wZXJjZW50LWJsb2NrIC5yZXZpZXctc3RhcnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmV2aWV3LXBlcmNlbnQtYmxvY2sgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uZXctcmV2aWV3IC5yYXRpbmcgLnN0YXItaWNvbiB7XG4gIGNvbG9yOiAjZGRkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uZXctcmV2aWV3IC5yYXRpbmcgLnN0YXItaWNvbi5mdWxsOmJlZm9yZSB7XG4gIGNvbG9yOiAjRkZDMTA3O1xuICBjb250ZW50OiBcIuKYhVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG59XG4ubmV3LXJldmlldyAucmF0aW5nIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xuICBjb2xvcjogI0ZGQzEwNztcbiAgY29udGVudDogXCLimIVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIi5yZXZpZXctc3RhciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAuc3Rhci1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuc3Rhci1pY29uLmZ1bGw6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogI2ZmY2UwMDtcclxuICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZjZTAwO1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXDI2MDUnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XHJcbiAgICAgICAgLnN0YXItaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5yZXZpZXctY29udGVudCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG59XHJcbi5yZXZpZXctcGVyY2VudC1ibG9jayB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgIzkyOTQ5Yyk7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXZpZXctc3RhcnMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuLm5ldy1yZXZpZXcge1xyXG4gICAgLnJhdGluZyB7XHJcbiAgICAgICAgLnN0YXItaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXItaWNvbi5mdWxsOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZDMTA3O1xyXG4gICAgICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3Rhci1pY29uLmhhbGY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDI2MDUnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/review/review.page.ts":
  /*!***************************************!*\
    !*** ./src/app/review/review.page.ts ***!
    \***************************************/

  /*! exports provided: ReviewPage */

  /***/
  function srcAppReviewReviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewPage", function () {
      return ReviewPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./md5 */
    "./src/app/review/md5.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ReviewPage =
    /*#__PURE__*/
    function () {
      function ReviewPage(api, router, route, settings, fb) {
        _classCallCheck(this, ReviewPage);

        this.api = api;
        this.router = router;
        this.route = route;
        this.settings = settings;
        this.fb = fb;
        this.reviews = [];
        this.hasMoreItems = true;
        this.filter = {};
        this.showReviews = false;
        this.count5 = 0;
        this.count4 = 0;
        this.count3 = 0;
        this.count2 = 0;
        this.count1 = 0;
        this.count5Percentage = 0;
        this.count4Percentage = 0;
        this.count3Percentage = 0;
        this.count2Percentage = 0;
        this.count1Percentage = 0;
        this.disableSubmit = false;
        this.isLoggedIn = false;
        console.log(this.settings.customer.id);

        if (this.settings.customer && this.settings.customer.id > 0) {
          this.isLoggedIn = true;
        }
      }

      _createClass(ReviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter.page = 1;
          this.id = this.route.snapshot.paramMap.get('id');
          this.filter.product_id = this.id;
          this.form = this.fb.group({
            rating: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            author: ['', this.isLoggedIn ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', this.isLoggedIn ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            comment_post_ID: [this.id, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.getReviews();
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee54() {
            var _this88 = this;

            return regeneratorRuntime.wrap(function _callee54$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    _context54.next = 3;
                    return this.api.postFlutterItem('product_reviews', this.filter).subscribe(function (res) {
                      _this88.tempReviews = res;

                      _this88.reviews.push.apply(_this88.reviews, _this88.tempReviews);

                      event.target.complete();
                      if (!res) _this88.hasMoreItems = false;

                      for (var item in _this88.reviews) {
                        _this88.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_4__["md5"])(_this88.reviews[item].email);
                      }
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee54, this);
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee55() {
            var _this89 = this;

            return regeneratorRuntime.wrap(function _callee55$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    _context55.next = 2;
                    return this.api.postFlutterItem('product_reviews', this.filter).subscribe(function (res) {
                      _this89.reviews = res;

                      for (var item in _this89.reviews) {
                        _this89.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_4__["md5"])(_this89.reviews[item].email);
                      }

                      _this89.count = _this89.reviews.length;

                      _this89.reviews.forEach(function (review) {
                        if (parseInt(review.rating) == 5) {
                          _this89.count5 = _this89.count5 + 1;
                        } else if (parseInt(review.rating) >= 4) {
                          _this89.count4 = _this89.count4 + 1;
                        } else if (parseInt(review.rating) >= 3) {
                          _this89.count3 = _this89.count3 + 1;
                        } else if (parseInt(review.rating) >= 2) {
                          _this89.count2 = _this89.count2 + 1;
                        } else if (parseInt(review.rating) == 1) {
                          _this89.count1 = _this89.count1 + 1;
                        }
                      });

                      _this89.showReviews = true;
                      _this89.count5Percentage = _this89.count5 / _this89.count * 100;
                      _this89.count4Percentage = _this89.count4 / _this89.count * 100;
                      _this89.count3Percentage = _this89.count3 / _this89.count * 100;
                      _this89.count2Percentage = _this89.count2 / _this89.count * 100;
                      _this89.count1Percentage = _this89.count1 / _this89.count * 100;
                    }, function (err) {});

                  case 2:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee55, this);
          }));
        }
      }, {
        key: "yourRating",
        value: function yourRating(rating) {
          this.form.value.rating = rating;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee56() {
            var _this90 = this;

            return regeneratorRuntime.wrap(function _callee56$(_context56) {
              while (1) {
                switch (_context56.prev = _context56.next) {
                  case 0:
                    this.disableSubmit = true;
                    _context56.next = 3;
                    return this.api.ajaxCall('/wp-comments-post.php', this.form.value).subscribe(function (res) {
                      _this90.disableSubmit = false;
                    }, function (err) {
                      _this90.disableSubmit = false;
                    });

                  case 3:
                  case "end":
                    return _context56.stop();
                }
              }
            }, _callee56, this);
          }));
        }
      }]);

      return ReviewPage;
    }();

    ReviewPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    ReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/review/review.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review.page.scss */
      "./src/app/review/review.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], ReviewPage);
    /***/
  },

  /***/
  "./src/app/search/search.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/search/search.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search ion-card {\n  margin: 0;\n  height: 100%;\n}\n.search ion-card-header {\n  padding: 10px;\n}\n.search ion-card-content {\n  padding: 0;\n}\n.search ion-card-content .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.search ion-card-content .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n.search ion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n.search ion-card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: unset;\n}\n.search .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.search .empty ion-icon {\n  font-size: 7.2em;\n}\n.search ion-list {\n  padding: 0;\n}\n.no-products h2 {\n  text-align: center;\n  font-size: 15px;\n  width: 100%;\n  margin: 30px 0;\n}\n.stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  height: 19px;\n  box-shadow: none;\n}\n.offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n}\n.product-list3 ion-item {\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-50, rgba(0, 0, 0, 0.2))));\n  --border-width: 0 0 0.55px;\n  --padding-start: 0px;\n  padding: 10xp;\n}\n.product-list3 ion-item ion-thumbnail {\n  width: 28%;\n  height: 100%;\n  padding: 10px;\n  margin: 0px;\n}\n.product-list3 ion-item .details {\n  align-self: flex-start;\n  width: 100%;\n}\n.product-list3 ion-item .details ion-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small;\n}\n.product-list3 ion-item .details p {\n  margin: 0;\n}\n.product-list3 ion-item .details .price {\n  font-weight: bold;\n  font-size: 14px;\n}\n.product-list3 ion-item .details .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n.product-list3 ion-item .details ion-icon {\n  font-size: x-large;\n  font-weight: 300;\n}\n.product-list3 ion-item .offer {\n  font-size: 8px;\n  --border-radius: 2px;\n  width: 46px;\n  min-height: 16px;\n  font-weight: 600;\n  -webkit-box-shadow: none;\n  --box-shadow: none;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFx3b290b3BcXFdvb1Rvb3AtQXBwQW5kcm9pZC9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLFNBQUE7RUFDQSxZQUFBO0FDSFI7QURLSTtFQUNJLGFBQUE7QUNIUjtBREtJO0VBQ0ksVUFBQTtBQ0hSO0FESVE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZaO0FER1k7RUFFSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBRE1JO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pSO0FETUk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0pSO0FETUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURLUTtFQUNJLGdCQUFBO0FDSFo7QURNSTtFQUNJLFVBQUE7QUNKUjtBRFFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNMUjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0xKO0FET0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9JO0VBQ0ksc0hBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0pSO0FES1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSFo7QURLUTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQ0haO0FESVk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRmhCO0FESVk7RUFDSSxTQUFBO0FDRmhCO0FESVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNGaEI7QURHZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RwQjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBREtRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcclxuICAgIC8vaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5zZWFyY2gge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvL2NvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC5zcGVjaWFsLXByaWNlIHtcclxuICAgICAgICAgICAgICAgIC8vY29sb3I6ICM4Njg2ODY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDsgLy9jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcclxuICAgIH1cclxuICAgIC5lbXB0eSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtOyAvL2NvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcbi5uby1wcm9kdWN0cyB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIH1cclxufVxyXG4uc3RvY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgbGVmdDogLTZweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zOXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLm9mZmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLnByb2R1Y3QtbGlzdDMge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCByZ2JhKDAsIDAsIDAsIDAuMikpKSk7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTB4cDtcclxuICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyAvL3BhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9mZmVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDZweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5zZWFyY2ggaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zZWFyY2ggaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZWFyY2ggaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2VhcmNoIGlvbi1jYXJkLWNvbnRlbnQgLnByaWNlIHtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zZWFyY2ggaW9uLWNhcmQtY29udGVudCAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNlYXJjaCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLnNlYXJjaCBpb24tY2FyZC10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG59XG4uc2VhcmNoIC5lbXB0eSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWFyY2ggLmVtcHR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA3LjJlbTtcbn1cbi5zZWFyY2ggaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubm8tcHJvZHVjdHMgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4uc3RvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTZweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTM5cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ub2ZmZXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDM2cHg7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIHJnYmEoMCwgMCwgMCwgMC4yKSkpKTtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBwYWRkaW5nOiAxMHhwO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAyOCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2R1Y3QtbGlzdDMgaW9uLWl0ZW0gLmRldGFpbHMgLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5kZXRhaWxzIC5wcmljZSAuc3BlY2lhbC1wcmljZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucHJvZHVjdC1saXN0MyBpb24taXRlbSAuZGV0YWlscyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wcm9kdWN0LWxpc3QzIGlvbi1pdGVtIC5vZmZlciB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIG1pbi1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search/search.page.ts":
  /*!***************************************!*\
    !*** ./src/app/search/search.page.ts ***!
    \***************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
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


    var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); //import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


    var SearchPage =
    /*#__PURE__*/
    function () {
      function SearchPage(config, alertController, api, data, router, product, settings, loadingController, navCtrl, route
      /*, private barcodeScanner: BarcodeScanner*/
      ) {
        _classCallCheck(this, SearchPage);

        this.config = config;
        this.alertController = alertController;
        this.api = api;
        this.data = data;
        this.router = router;
        this.product = product;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.products = [];
        this.tempProducts = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.searchInput = "";
        this.loading = false;
        this.cart = {};
        this.options = {};
        this.lan = {};
        this.gridView = true;
        this.filter.page = 1;
        if (this.settings.colWidthProducts == 4) this.filter.per_page = 15;
        this.filter.status = 'publish';
      }

      _createClass(SearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee57() {
            var _this91 = this;

            return regeneratorRuntime.wrap(function _callee57$(_context57) {
              while (1) {
                switch (_context57.prev = _context57.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    this.api.postFlutterItem('products', this.filter).subscribe(function (res) {
                      _this91.tempProducts = res;

                      _this91.products.push.apply(_this91.products, _this91.tempProducts);

                      event.target.complete();
                      if (_this91.tempProducts.length == 0) _this91.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });
                    console.log('Done');

                  case 3:
                  case "end":
                    return _context57.stop();
                }
              }
            }, _callee57, this);
          }));
        }
      }, {
        key: "onInput",
        value: function onInput() {
          this.loading = true;
          this.hasMoreItems = true;
          this.filter.page = 1;
          delete this.filter.sku;
          this.filter.q = this.searchInput;

          if (this.searchInput.length) {
            this.getProducts();
          } else {
            this.products = '';
            this.loading = false;
          }
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee58() {
            var _this92 = this;

            return regeneratorRuntime.wrap(function _callee58$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    this.api.postFlutterItem('products', this.filter).subscribe(function (res) {
                      _this92.products = res;
                      _this92.loading = false;
                    }, function (err) {
                      console.log(err);
                    });

                  case 1:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee58, this);
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward('/tabs/search/product/' + product.id);
        }
      }, {
        key: "scanBarcode",
        value: function scanBarcode() {
          /*this.barcodeScanner.scan().then(barcodeData => {
              if(barcodeData.text != '') {
                  this.loading = true;
                  this.hasMoreItems = true;
                  this.filter.page = 1;
                  delete this.filter.q;
                  this.filter.sku = barcodeData.text;
                  this.getProducts();
              }
          }).catch(err => {
              console.log('Error', err);
          });*/
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee59() {
            var _this93 = this;

            return regeneratorRuntime.wrap(function _callee59$(_context59) {
              while (1) {
                switch (_context59.prev = _context59.next) {
                  case 0:
                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context59.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context59.next = 13;
                    break;

                  case 4:
                    if (!(product.type == 'variable')) {
                      _context59.next = 8;
                      break;
                    }

                    this.getProduct(product);
                    _context59.next = 13;
                    break;

                  case 8:
                    if (!this.setVariations(product)) {
                      _context59.next = 13;
                      break;
                    }

                    if (this.data.cart[product.id] != undefined) this.data.cart[product.id] += 1;else this.data.cart[product.id] = 1;
                    this.options.product_id = product.id;
                    _context59.next = 13;
                    return this.api.postItem('add_to_cart', this.options).subscribe(function (res) {
                      _this93.cart = res;

                      _this93.data.updateCart(_this93.cart.cart);
                    }, function (err) {
                      console.log(err);
                    });

                  case 13:
                  case "end":
                    return _context59.stop();
                }
              }
            }, _callee59, this);
          }));
        }
      }, {
        key: "setVariations",
        value: function setVariations(product) {
          var _this94 = this;

          if (product.variationId) {
            this.options.variation_id = product.variationId;
          }

          product.attributes.forEach(function (item) {
            if (item.selected) {
              _this94.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
          });

          for (var i = 0; i < product.attributes.length; i++) {
            if (product.type == 'variable' && product.attributes[i].variation && product.attributes[i].selected == undefined) {
              this.presentAlert(this.lan.options, this.lan.select + ' ' + product.attributes[i].name + ' ' + this.lan.option);
              return false;
            }
          }

          return true;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee60() {
            var alert;
            return regeneratorRuntime.wrap(function _callee60$(_context60) {
              while (1) {
                switch (_context60.prev = _context60.next) {
                  case 0:
                    _context60.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context60.sent;
                    _context60.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context60.stop();
                }
              }
            }, _callee60, this);
          }));
        }
      }, {
        key: "updateToCart",
        value: function updateToCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee61() {
            var _this95 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee61$(_context61) {
              while (1) {
                switch (_context61.prev = _context61.next) {
                  case 0:
                    if (!(product.manage_stock && product.stock_quantity < this.data.cart[product.id])) {
                      _context61.next = 4;
                      break;
                    }

                    this.presentAlert(this.lan.message, this.lan.lowQuantity);
                    _context61.next = 11;
                    break;

                  case 4:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]();

                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity += 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] += 1;
                        }

                        ;
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                      }
                    }

                    params = params.set('_wpnonce', this.data.cartNonce);
                    params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                    params = params.set('update_cart', 'Update Cart');
                    _context61.next = 11;
                    return this.api.updateCart('/cart/', params).subscribe(function (res) {
                      console.log(res);
                      _this95.cart = res;

                      _this95.data.updateCart(_this95.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 11:
                  case "end":
                    return _context61.stop();
                }
              }
            }, _callee61, this);
          }));
        }
      }, {
        key: "deleteFromCart",
        value: function deleteFromCart(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee62() {
            var _this96 = this;

            var params, key;
            return regeneratorRuntime.wrap(function _callee62$(_context62) {
              while (1) {
                switch (_context62.prev = _context62.next) {
                  case 0:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpParams"]();

                    for (key in this.data.cartItem) {
                      if (this.data.cartItem[key].product_id == product.id) {
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                          this.data.cartItem[key].quantity = 0;
                        } else {
                          this.data.cartItem[key].quantity -= 1;
                        }

                        ;

                        if (this.data.cart[product.id] != undefined && this.data.cart[product.id] == 0) {
                          this.data.cart[product.id] = 0;
                        } else {
                          this.data.cart[product.id] -= 1;
                        }

                        ;
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                      }
                    }

                    params = params.set('_wpnonce', this.data.cartNonce);
                    params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                    params = params.set('update_cart', 'Update Cart');
                    _context62.next = 7;
                    return this.api.updateCart('/cart/', params).subscribe(function (res) {
                      console.log(res);
                      _this96.cart = res;

                      _this96.data.updateCart(_this96.cart.cart_contents);
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context62.stop();
                }
              }
            }, _callee62, this);
          }));
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _config__WEBPACK_IMPORTED_MODULE_8__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        /*, private barcodeScanner: BarcodeScanner*/

      }];
    };

    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.page.scss */
      "./src/app/search/search.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_8__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    /*, private barcodeScanner: BarcodeScanner*/
    ])], SearchPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../cart/cart.page */
    "./src/app/cart/cart.page.ts");
    /* harmony import */


    var _search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../search/search.page */
    "./src/app/search/search.page.ts");
    /* harmony import */


    var _categories_categories_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../categories/categories.page */
    "./src/app/categories/categories.page.ts");
    /* harmony import */


    var _products_products_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../products/products.page */
    "./src/app/products/products.page.ts");
    /* harmony import */


    var _product_product_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../product/product.page */
    "./src/app/product/product.page.ts");
    /* harmony import */


    var _review_review_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../review/review.page */
    "./src/app/review/review.page.ts");
    /* harmony import */


    var _post_post_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../post/post.page */
    "./src/app/post/post.page.ts");
    /* harmony import */


    var _contact_contact_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../contact/contact.page */
    "./src/app/contact/contact.page.ts");
    /* harmony import */


    var _account_account_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../account/account.page */
    "./src/app/account/account.page.ts");
    /* harmony import */


    var _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./../checkout/address/address.page */
    "./src/app/checkout/address/address.page.ts");
    /* harmony import */


    var _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./../checkout/checkout/checkout.page */
    "./src/app/checkout/checkout/checkout.page.ts");
    /* harmony import */


    var _account_address_address_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./../account/address/address.page */
    "./src/app/account/address/address.page.ts");
    /* harmony import */


    var _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./../account/blog/blog.page */
    "./src/app/account/blog/blog.page.ts");
    /* harmony import */


    var _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./../account/blogs/blogs.page */
    "./src/app/account/blogs/blogs.page.ts");
    /* harmony import */


    var _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./../account/edit-address/edit-address.page */
    "./src/app/account/edit-address/edit-address.page.ts");
    /* harmony import */


    var _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./../account/forgotten/forgotten.page */
    "./src/app/account/forgotten/forgotten.page.ts");
    /* harmony import */


    var _account_login_login_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./../account/login/login.page */
    "./src/app/account/login/login.page.ts");
    /* harmony import */


    var _account_map_map_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./../account/map/map.page */
    "./src/app/account/map/map.page.ts");
    /* harmony import */


    var _account_order_order_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./../account/order/order.page */
    "./src/app/account/order/order.page.ts");
    /* harmony import */


    var _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./../account/orders/orders.page */
    "./src/app/account/orders/orders.page.ts");
    /* harmony import */


    var _account_points_points_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./../account/points/points.page */
    "./src/app/account/points/points.page.ts");
    /* harmony import */


    var _account_register_register_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./../account/register/register.page */
    "./src/app/account/register/register.page.ts");
    /* harmony import */


    var _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./../account/setting/setting.page */
    "./src/app/account/setting/setting.page.ts");
    /* harmony import */


    var _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./../account/currencies/currencies.page */
    "./src/app/account/currencies/currencies.page.ts");
    /* harmony import */


    var _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./../account/wallet/wallet.page */
    "./src/app/account/wallet/wallet.page.ts");
    /* harmony import */


    var _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./../account/wishlist/wishlist.page */
    "./src/app/account/wishlist/wishlist.page.ts");
    /* harmony import */


    var _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./../vendor/edit-order/edit-order.page */
    "./src/app/vendor/edit-order/edit-order.page.ts");
    /* harmony import */


    var _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./../vendor/edit-product/edit-product.page */
    "./src/app/vendor/edit-product/edit-product.page.ts");
    /* harmony import */


    var _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./../vendor/edit-variation/edit-variation.page */
    "./src/app/vendor/edit-variation/edit-variation.page.ts");
    /* harmony import */


    var _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./../vendor/order-list/order-list.page */
    "./src/app/vendor/order-list/order-list.page.ts");
    /* harmony import */


    var _vendor_order_note_list_order_note_list_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./../vendor/order-note-list/order-note-list.page */
    "./src/app/vendor/order-note-list/order-note-list.page.ts");
    /* harmony import */


    var _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./../vendor/product-list/product-list.page */
    "./src/app/vendor/product-list/product-list.page.ts");
    /* harmony import */


    var _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./../vendor/vendor-info/vendor-info.page */
    "./src/app/vendor/vendor-info/vendor-info.page.ts");
    /* harmony import */


    var _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./../vendor/vendor-list/vendor-list.page */
    "./src/app/vendor/vendor-list/vendor-list.page.ts");
    /* harmony import */


    var _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./../vendor/product-add/category/category.page */
    "./src/app/vendor/product-add/category/category.page.ts");
    /* harmony import */


    var _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./../vendor/product-add/details/details.page */
    "./src/app/vendor/product-add/details/details.page.ts");
    /* harmony import */


    var _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./../vendor/product-add/photos/photos.page */
    "./src/app/vendor/product-add/photos/photos.page.ts");
    /* harmony import */


    var _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./../vendor/product-add/subcategory/subcategory.page */
    "./src/app/vendor/product-add/subcategory/subcategory.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["KeysPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _home_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"], _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__["CartPage"], _categories_categories_page__WEBPACK_IMPORTED_MODULE_12__["CategoriesPage"], _search_search_page__WEBPACK_IMPORTED_MODULE_11__["SearchPage"], _products_products_page__WEBPACK_IMPORTED_MODULE_13__["ProductsPage"], _product_product_page__WEBPACK_IMPORTED_MODULE_14__["ProductPage"], _review_review_page__WEBPACK_IMPORTED_MODULE_15__["ReviewPage"], _post_post_page__WEBPACK_IMPORTED_MODULE_16__["PostPage"], _contact_contact_page__WEBPACK_IMPORTED_MODULE_17__["ContactPage"], _account_account_page__WEBPACK_IMPORTED_MODULE_18__["AccountPage"], _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_19__["CheckoutAddressPage"], _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_20__["CheckoutPage"], _account_address_address_page__WEBPACK_IMPORTED_MODULE_21__["AddressPage"], _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_22__["BlogPage"], _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_23__["BlogsPage"], _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_24__["EditAddressPage"], _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_25__["ForgottenPage"], _account_login_login_page__WEBPACK_IMPORTED_MODULE_26__["LoginPage"], _account_map_map_page__WEBPACK_IMPORTED_MODULE_27__["MapPage"], _account_order_order_page__WEBPACK_IMPORTED_MODULE_28__["OrderPage"], _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_29__["OrdersPage"], _account_points_points_page__WEBPACK_IMPORTED_MODULE_30__["PointsPage"], _account_register_register_page__WEBPACK_IMPORTED_MODULE_31__["RegisterPage"], _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_32__["SettingPage"], _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_33__["CurrenciesPage"], _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_34__["WalletPage"], _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_35__["WishlistPage"], // Vendors
      _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_36__["EditOrderPage"], _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_37__["EditProductPage"], _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_38__["EditVariationPage"], _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_39__["OrderListPage"], _vendor_order_note_list_order_note_list_page__WEBPACK_IMPORTED_MODULE_40__["OrderNoteListPage"], _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_41__["ProductListPage"], _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_42__["VendorInfoPage"], _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_43__["VendorListPage"], _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_44__["CategoryPage"], _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_45__["DetailsPage"], _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_46__["PhotosPage"], _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_47__["SubcategoryPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-badge {\n  min-width: 18px;\n  font-size: 12px;\n  left: calc(50% + 3px);\n}\n\nion-label {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0MsOERBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gICAgbWluLXdpZHRoOiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgKyAzcHgpO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1iYWRnZSB7XG4gIG1pbi13aWR0aDogMThweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZWZ0OiBjYWxjKDUwJSArIDNweCk7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/settings */
    "./src/app/data/settings.ts");

    var TabsPage = function TabsPage(data, settings) {
      _classCallCheck(this, TabsPage);

      this.data = data;
      this.settings = settings;
    };

    TabsPage.ctorParameters = function () {
      return [{
        type: _data__WEBPACK_IMPORTED_MODULE_2__["Data"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data__WEBPACK_IMPORTED_MODULE_2__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/tabs.router.module.ts ***!
    \********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../home/home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../cart/cart.page */
    "./src/app/cart/cart.page.ts");
    /* harmony import */


    var _categories_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../categories/categories.page */
    "./src/app/categories/categories.page.ts");
    /* harmony import */


    var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../search/search.page */
    "./src/app/search/search.page.ts");
    /* harmony import */


    var _products_products_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../products/products.page */
    "./src/app/products/products.page.ts");
    /* harmony import */


    var _product_product_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../product/product.page */
    "./src/app/product/product.page.ts");
    /* harmony import */


    var _review_review_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../review/review.page */
    "./src/app/review/review.page.ts");
    /* harmony import */


    var _post_post_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../post/post.page */
    "./src/app/post/post.page.ts");
    /* harmony import */


    var _account_account_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../account/account.page */
    "./src/app/account/account.page.ts");
    /* harmony import */


    var _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../checkout/address/address.page */
    "./src/app/checkout/address/address.page.ts");
    /* harmony import */


    var _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../checkout/checkout/checkout.page */
    "./src/app/checkout/checkout/checkout.page.ts");
    /* harmony import */


    var _account_address_address_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../account/address/address.page */
    "./src/app/account/address/address.page.ts");
    /* harmony import */


    var _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../account/blog/blog.page */
    "./src/app/account/blog/blog.page.ts");
    /* harmony import */


    var _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../account/blogs/blogs.page */
    "./src/app/account/blogs/blogs.page.ts");
    /* harmony import */


    var _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../account/edit-address/edit-address.page */
    "./src/app/account/edit-address/edit-address.page.ts");
    /* harmony import */


    var _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./../account/forgotten/forgotten.page */
    "./src/app/account/forgotten/forgotten.page.ts");
    /* harmony import */


    var _account_login_login_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./../account/login/login.page */
    "./src/app/account/login/login.page.ts");
    /* harmony import */


    var _account_map_map_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./../account/map/map.page */
    "./src/app/account/map/map.page.ts");
    /* harmony import */


    var _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./../account/order/order.page */
    "./src/app/account/order/order.page.ts");
    /* harmony import */


    var _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./../account/orders/orders.page */
    "./src/app/account/orders/orders.page.ts");
    /* harmony import */


    var _account_points_points_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./../account/points/points.page */
    "./src/app/account/points/points.page.ts");
    /* harmony import */


    var _account_register_register_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./../account/register/register.page */
    "./src/app/account/register/register.page.ts");
    /* harmony import */


    var _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./../account/setting/setting.page */
    "./src/app/account/setting/setting.page.ts");
    /* harmony import */


    var _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./../account/currencies/currencies.page */
    "./src/app/account/currencies/currencies.page.ts");
    /* harmony import */


    var _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./../account/wallet/wallet.page */
    "./src/app/account/wallet/wallet.page.ts");
    /* harmony import */


    var _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./../account/wishlist/wishlist.page */
    "./src/app/account/wishlist/wishlist.page.ts");
    /* harmony import */


    var _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./../vendor/edit-order/edit-order.page */
    "./src/app/vendor/edit-order/edit-order.page.ts");
    /* harmony import */


    var _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./../vendor/edit-product/edit-product.page */
    "./src/app/vendor/edit-product/edit-product.page.ts");
    /* harmony import */


    var _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./../vendor/edit-variation/edit-variation.page */
    "./src/app/vendor/edit-variation/edit-variation.page.ts");
    /* harmony import */


    var _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./../vendor/order-list/order-list.page */
    "./src/app/vendor/order-list/order-list.page.ts");
    /* harmony import */


    var _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./../vendor/product-list/product-list.page */
    "./src/app/vendor/product-list/product-list.page.ts");
    /* harmony import */


    var _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./../vendor/vendor-info/vendor-info.page */
    "./src/app/vendor/vendor-info/vendor-info.page.ts");
    /* harmony import */


    var _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./../vendor/vendor-list/vendor-list.page */
    "./src/app/vendor/vendor-list/vendor-list.page.ts");
    /* harmony import */


    var _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./../vendor/product-add/category/category.page */
    "./src/app/vendor/product-add/category/category.page.ts");
    /* harmony import */


    var _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./../vendor/product-add/details/details.page */
    "./src/app/vendor/product-add/details/details.page.ts");
    /* harmony import */


    var _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./../vendor/product-add/photos/photos.page */
    "./src/app/vendor/product-add/photos/photos.page.ts");
    /* harmony import */


    var _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./../vendor/product-add/subcategory/subcategory.page */
    "./src/app/vendor/product-add/subcategory/subcategory.page.ts"); //import { ContactPage } from './../contact/contact.page';
    //Vendor


    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'home',
        children: [{
          path: '',
          component: _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]
        }, {
          path: 'products/:id',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'product/:id',
          children: [{
            path: '',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }, {
            path: 'review/:id',
            component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'post/:id',
          component: _post_post_page__WEBPACK_IMPORTED_MODULE_11__["PostPage"]
        }]
      }, {
        path: 'categories',
        children: [{
          path: '',
          component: _categories_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
        }, {
          path: 'products/:id',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }]
      }, {
        path: 'search',
        children: [{
          path: '',
          component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]
        }, {
          path: 'product/:id',
          children: [{
            path: '',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }, {
            path: 'review/:id',
            component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }]
      }, {
        path: 'cart',
        children: [{
          path: '',
          component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
        }, {
          path: 'address',
          component: _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_13__["CheckoutAddressPage"]
        }, {
          path: 'checkout',
          component: _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_14__["CheckoutPage"]
        }, {
          path: 'product/:id',
          children: [{
            path: '',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }, {
            path: 'review/:id',
            component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
          }]
        }]
      }, {
        path: 'account',
        children: [{
          path: '',
          component: _account_account_page__WEBPACK_IMPORTED_MODULE_12__["AccountPage"]
        }, {
          path: 'address',
          children: [{
            path: '',
            component: _account_address_address_page__WEBPACK_IMPORTED_MODULE_15__["AddressPage"]
          }, {
            path: 'edit-address',
            component: _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_18__["EditAddressPage"]
          }]
        }, {
          path: 'register',
          component: _account_register_register_page__WEBPACK_IMPORTED_MODULE_25__["RegisterPage"]
        }, {
          path: 'points',
          component: _account_points_points_page__WEBPACK_IMPORTED_MODULE_24__["PointsPage"]
        }, {
          path: 'setting',
          component: _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_26__["SettingPage"]
        }, {
          path: 'currencies',
          component: _account_currencies_currencies_page__WEBPACK_IMPORTED_MODULE_27__["CurrenciesPage"]
        }, {
          path: 'wallet',
          children: [{
            path: '',
            component: _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_28__["WalletPage"]
          }, {
            path: 'cart',
            component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
          }]
        }, {
          path: 'post/:id',
          component: _post_post_page__WEBPACK_IMPORTED_MODULE_11__["PostPage"]
        }, {
          path: 'map',
          component: _account_map_map_page__WEBPACK_IMPORTED_MODULE_21__["MapPage"]
        }, {
          path: 'orders',
          children: [{
            path: '',
            component: _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_23__["OrdersPage"]
          }, {
            path: 'order/:id',
            component: _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__["OrderPage"]
          }]
        }, {
          path: 'login',
          children: [{
            path: '',
            component: _account_login_login_page__WEBPACK_IMPORTED_MODULE_20__["LoginPage"]
          }, {
            path: 'forgotten',
            component: _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_19__["ForgottenPage"]
          }]
        }, {
          path: 'wishlist',
          children: [{
            path: '',
            component: _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_29__["WishlistPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'blogs',
          children: [{
            path: '',
            component: _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_17__["BlogsPage"]
          }, {
            path: 'blog/:id',
            component: _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_16__["BlogPage"]
          }]
        }, {
          path: 'vendor-orders',
          children: [{
            path: '',
            component: _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_33__["OrderListPage"]
          }, {
            path: 'edit-order/:id',
            component: _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_30__["EditOrderPage"]
          }, {
            path: 'view-order/:id',
            component: _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__["OrderPage"]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_34__["ProductListPage"]
          }, {
            path: 'edit-product/:id',
            children: [{
              path: '',
              component: _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_31__["EditProductPage"]
            }, {
              path: 'edit-variation-product/:id',
              component: _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_32__["EditVariationPage"]
            }]
          }, {
            path: 'view-product/:id',
            component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
          }]
        }, {
          path: 'add-products',
          children: [{
            path: '',
            component: _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_37__["CategoryPage"]
          }, {
            path: 'subcategory/:id',
            component: _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_40__["SubcategoryPage"]
          }, {
            path: 'details/:id',
            children: [{
              path: '',
              component: _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_38__["DetailsPage"]
            }, {
              path: 'photos',
              component: _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_39__["PhotosPage"]
            }]
          }]
        }]
      }, {
        path: 'vendor',
        children: [{
          path: '',
          component: _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_36__["VendorListPage"]
        }, {
          path: 'vendor-info/:id',
          component: _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_35__["VendorInfoPage"]
        }, {
          path: 'products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }, {
          path: 'vendor-products',
          children: [{
            path: '',
            component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
          }, {
            path: 'product/:id',
            children: [{
              path: '',
              component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
            }, {
              path: 'review/:id',
              component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
            }]
          }]
        }]
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/vendor/edit-order/edit-order.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/vendor/edit-order/edit-order.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorEditOrderEditOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LW9yZGVyL2VkaXQtb3JkZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/vendor/edit-order/edit-order.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/vendor/edit-order/edit-order.page.ts ***!
    \******************************************************/

  /*! exports provided: EditOrderPage */

  /***/
  function srcAppVendorEditOrderEditOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOrderPage", function () {
      return EditOrderPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var EditOrderPage =
    /*#__PURE__*/
    function () {
      function EditOrderPage(platform, api, settings, route, loadingController, navCtrl) {
        _classCallCheck(this, EditOrderPage);

        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.route = route;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.disableButton = false;
      }

      _createClass(EditOrderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          this.getOrder();
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee63() {
            var _this97 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee63$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    _context63.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context63.sent;
                    _context63.next = 5;
                    return loading.present();

                  case 5:
                    if (!this.platform.is('hybrid')) {
                      _context63.next = 10;
                      break;
                    }

                    _context63.next = 8;
                    return this.api.getItemIonic('orders/' + this.id).then(function (res) {
                      _this97.orders = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 8:
                    _context63.next = 12;
                    break;

                  case 10:
                    _context63.next = 12;
                    return this.api.getItem('orders/' + this.id).subscribe(function (res) {
                      _this97.orders = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 12:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee63, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this98 = this;

          this.disableButton = true;
          if (this.platform.is('hybrid')) this.api.postItemIonic('orders/' + this.id, this.orders).then(function (res) {
            _this98.disableButton = false;

            _this98.navCtrl.navigateBack('/tabs/account/vendor-orders');
          }, function (err) {
            console.log(err);
            _this98.disableButton = false;
          });else {
            this.api.put('orders/' + this.id, this.orders).subscribe(function (res) {
              _this98.disableButton = false;

              _this98.navCtrl.navigateBack('/tabs/account/vendor-orders');
            }, function (err) {
              console.log(err);
              _this98.disableButton = false;
            });
          }
        }
      }]);

      return EditOrderPage;
    }();

    EditOrderPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    EditOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-order/edit-order.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-order.page.scss */
      "./src/app/vendor/edit-order/edit-order.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], EditOrderPage);
    /***/
  },

  /***/
  "./src/app/vendor/edit-product/edit-product.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/vendor/edit-product/edit-product.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorEditProductEditProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".related-products .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.related-products .price .special-price {\n  padding-left: 5px;\n  font-size: 10px;\n  font-weight: 300;\n}\n.related-products .related-item-name {\n  padding: 16px 0 0 0;\n  background-color: transparent;\n  font-weight: 400;\n}\n.related-products .scroll-related-products {\n  padding: 16px 0;\n  background-color: #fffff;\n  overflow: auto;\n  white-space: nowrap;\n}\n.related-products .scroll-related-products .product {\n  display: inline-block;\n  text-decoration: none;\n  width: 50%;\n  margin: 0 0 0 10px;\n}\n.related-products .scroll-related-products .product:last-child {\n  margin-right: 10px;\n}\n@media (min-width: 481px) and (max-width: 768px) {\n  .related-products .scroll-related-products .product {\n    width: 33.333%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .related-products .scroll-related-products .product {\n    width: 25%;\n  }\n}\n@media (min-width: 1025px) {\n  .related-products .scroll-related-products .product {\n    width: 20%;\n  }\n}\n.related-products .scroll-related-products ion-img {\n  height: auto;\n  width: 100%;\n}\n.related-products .scroll-related-products ion-card {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  margin-left: 2px;\n  box-shadow: none;\n}\n.related-products .scroll-related-products .card-content-md {\n  padding: 0 16px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: center;\n}\n.related-products .scroll-related-products ion-card-header {\n  padding: 8px 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL2VkaXQtcHJvZHVjdC9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXHZlbmRvclxcZWRpdC1wcm9kdWN0XFxlZGl0LXByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3IvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtBQ0RaO0FERVk7RUFFSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RoQjtBRElRO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDRlo7QURJUTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FER1k7RUFDSSxxQkFBQTtFQUVBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRmhCO0FESVk7RUFDSSxrQkFBQTtBQ0ZoQjtBRElZO0VBQ0k7SUFDSSxjQUFBO0VDRmxCO0FBQ0Y7QURJWTtFQUNJO0lBQ0ksVUFBQTtFQ0ZsQjtBQUNGO0FESVk7RUFDSTtJQUNJLFVBQUE7RUNGbEI7QUFDRjtBRElZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNGaEI7QURJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURLWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hoQjtBRE1ZO0VBQ0ksaUJBQUE7QUNKaEIiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnJlbGF0ZWQtcHJvZHVjdHMge1xyXG4gICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAvL2NvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIC5zcGVjaWFsLXByaWNlIHtcclxuICAgICAgICAgICAgICAgIC8vY29sb3I6ICM4Njg2ODY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwIDAgMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgLnByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3Q6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50LW1kIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSIsIi5yZWxhdGVkLXByb2R1Y3RzIC5wcmljZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAucHJpY2UgLnNwZWNpYWwtcHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcbiAgcGFkZGluZzogMTZweCAwIDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMge1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmVsYXRlZC1wcm9kdWN0cyAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMgLnByb2R1Y3Qge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5wcm9kdWN0IHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5yZWxhdGVkLXByb2R1Y3RzIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyAucHJvZHVjdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIGlvbi1pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIC5jYXJkLWNvbnRlbnQtbWQge1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlbGF0ZWQtcHJvZHVjdHMgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDhweCAxM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/edit-product/edit-product.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vendor/edit-product/edit-product.page.ts ***!
    \**********************************************************/

  /*! exports provided: EditProductPage */

  /***/
  function srcAppVendorEditProductEditProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductPage", function () {
      return EditProductPage;
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
    /*! ./../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./md5 */
    "./src/app/vendor/edit-product/md5.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../../config */
    "./src/app/config.ts");

    var EditProductPage =
    /*#__PURE__*/
    function () {
      function EditProductPage(platform, actionSheetController, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, config, transfer, imagePicker, crop) {
        _classCallCheck(this, EditProductPage);

        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.config = config;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.filter = {};
        this.categories = [];
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.uploadingImage = false;
        this.imageIndex = 0;
        this.filter.page = 1;
        this.filter.status = 'publish';
      }

      _createClass(EditProductPage, [{
        key: "getProduct",
        value: function getProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee64() {
            var _this99 = this;

            return regeneratorRuntime.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    _context64.next = 2;
                    return this.api.getItem('products/' + this.id).subscribe(function (res) {
                      _this99.product = res;

                      _this99.handleProduct();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.product = this.productData.product;

          if (this.product.images) {
            if (this.product.images.length == 0) {
              this.product.images = {};
            } else this.imageIndex = this.product.images.length;
          }

          this.id = this.route.snapshot.paramMap.get('id');
          if (this.product.id) this.handleProduct();else this.getProduct();
        }
      }, {
        key: "handleProduct",
        value: function handleProduct() {
          for (var item in this.product.categories) {
            this.categories[item] = this.product.categories[item].id.toString();
          }

          this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
          });
          this.options.product_id = this.product.id;
          if (this.product.type == 'variable' && this.product.variations.length) this.getVariationProducts();
          /*this.getRelatedProducts();
          this.getUpsellProducts();
          this.getCrossSellProducts();
          this.getReviews();*/
        }
      }, {
        key: "getVariationProducts",
        value: function getVariationProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee65() {
            var _this100 = this;

            return regeneratorRuntime.wrap(function _callee65$(_context65) {
              while (1) {
                switch (_context65.prev = _context65.next) {
                  case 0:
                    _context65.next = 2;
                    return this.api.getItem('products/' + this.product.id + '/variations').subscribe(function (res) {
                      _this100.variations = res;
                    }, function (err) {});

                  case 2:
                  case "end":
                    return _context65.stop();
                }
              }
            }, _callee65, this);
          }));
        }
      }, {
        key: "getRelatedProducts",
        value: function getRelatedProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee66() {
            var _this101 = this;

            var filter, item;
            return regeneratorRuntime.wrap(function _callee66$(_context66) {
              while (1) {
                switch (_context66.prev = _context66.next) {
                  case 0:
                    if (!(this.product.related_ids != 0)) {
                      _context66.next = 5;
                      break;
                    }

                    filter = [];

                    for (item in this.product.related_ids) {
                      filter['include[' + item + ']'] = this.product.related_ids[item];
                    }

                    _context66.next = 5;
                    return this.api.getItem('products', filter).subscribe(function (res) {
                      _this101.relatedProducts = res;
                    }, function (err) {});

                  case 5:
                  case "end":
                    return _context66.stop();
                }
              }
            }, _callee66, this);
          }));
        }
      }, {
        key: "getUpsellProducts",
        value: function getUpsellProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee67() {
            var _this102 = this;

            var filter, item;
            return regeneratorRuntime.wrap(function _callee67$(_context67) {
              while (1) {
                switch (_context67.prev = _context67.next) {
                  case 0:
                    if (!(this.product.upsell_ids != 0)) {
                      _context67.next = 5;
                      break;
                    }

                    filter = [];

                    for (item in this.product.upsell_ids) {
                      filter['include[' + item + ']'] = this.product.upsell_ids[item];
                    }

                    _context67.next = 5;
                    return this.api.getItem('products', filter).subscribe(function (res) {
                      _this102.upsellProducts = res;
                    }, function (err) {});

                  case 5:
                  case "end":
                    return _context67.stop();
                }
              }
            }, _callee67, this);
          }));
        }
      }, {
        key: "getCrossSellProducts",
        value: function getCrossSellProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee68() {
            var _this103 = this;

            var filter, item;
            return regeneratorRuntime.wrap(function _callee68$(_context68) {
              while (1) {
                switch (_context68.prev = _context68.next) {
                  case 0:
                    if (!(this.product.cross_sell_ids != 0)) {
                      _context68.next = 5;
                      break;
                    }

                    filter = [];

                    for (item in this.product.cross_sell_ids) {
                      filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
                    }

                    _context68.next = 5;
                    return this.api.getItem('products', filter).subscribe(function (res) {
                      _this103.crossSellProducts = res;
                    }, function (err) {});

                  case 5:
                  case "end":
                    return _context68.stop();
                }
              }
            }, _callee68, this);
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee69() {
            var _this104 = this;

            return regeneratorRuntime.wrap(function _callee69$(_context69) {
              while (1) {
                switch (_context69.prev = _context69.next) {
                  case 0:
                    _context69.next = 2;
                    return this.api.getItem('products/' + this.product.id + '/reviews').subscribe(function (res) {
                      _this104.reviews = res;

                      for (var item in _this104.reviews) {
                        _this104.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_8__["md5"])(_this104.reviews[item].email);
                      }
                    }, function (err) {});

                  case 2:
                  case "end":
                    return _context69.stop();
                }
              }
            }, _callee69, this);
          }));
        }
      }, {
        key: "goToProduct",
        value: function goToProduct(product) {
          this.productData.product = product;
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + product.id);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee70() {
            var alert;
            return regeneratorRuntime.wrap(function _callee70$(_context70) {
              while (1) {
                switch (_context70.prev = _context70.next) {
                  case 0:
                    _context70.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context70.sent;
                    _context70.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context70.stop();
                }
              }
            }, _callee70, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {//this.productData.product = {};
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee71() {
            var _this105 = this;

            var id;
            return regeneratorRuntime.wrap(function _callee71$(_context71) {
              while (1) {
                switch (_context71.prev = _context71.next) {
                  case 0:
                    this.disableButton = true;
                    this.product.categories = [];

                    for (id in this.categories) {
                      this.product.categories[id] = {
                        id: parseInt(this.categories[id])
                      };
                    }

                    if (this.product.images.length) this.product.images[0].position = 0;
                    if (this.product.type == 'external') this.product.manage_stock = false;

                    if (!this.platform.is('hybrid')) {
                      _context71.next = 10;
                      break;
                    }

                    _context71.next = 8;
                    return this.api.putItemIonic('products/' + this.id, this.product).then(function (res) {
                      _this105.product = res;
                      _this105.productData.product = {};

                      _this105.navCtrl.navigateBack('/tabs/account/vendor-products');
                    }, function (err) {
                      console.log(err);
                    });

                  case 8:
                    _context71.next = 12;
                    break;

                  case 10:
                    _context71.next = 12;
                    return this.api.put('products/' + this.id, this.product).subscribe(function (res) {
                      _this105.product = res;
                      _this105.productData.product = {};

                      _this105.navCtrl.navigateBack('/tabs/account/vendor-products');
                    }, function (err) {
                      console.log(err);
                    });

                  case 12:
                  case "end":
                    return _context71.stop();
                }
              }
            }, _callee71, this);
          }));
        }
      }, {
        key: "picker",
        value: function picker() {
          var _this106 = this;

          console.log('hello');
          var options = {
            maximumImagesCount: 1
          };
          this.photos = new Array();
          this.imagePicker.getPictures(options).then(function (results) {
            _this106.reduceImages(results).then(function (results) {
              return _this106.handleUpload(results);
            });
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "handleUpload",
        value: function handleUpload(results) {
          this.upload();
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this107 = this;

          return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
              return _this107.crop.crop(item, {
                quality: 75,
                targetHeight: 100,
                targetWidth: 100
              }).then(function (cropped_image) {
                return _this107.photos = cropped_image;
              });
            });
          }, Promise.resolve());
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this108 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this108.uploadingImage = false;
            _this108.imageresult = JSON.parse(data.response);
            _this108.product.images[_this108.imageIndex] = {};
            _this108.product.images[_this108.imageIndex].src = _this108.imageresult.url;
            _this108.imageIndex = _this108.imageIndex + 1; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "replaceImage",
        value: function replaceImage(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee72() {
            var _this109 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee72$(_context72) {
              while (1) {
                switch (_context72.prev = _context72.next) {
                  case 0:
                    _context72.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Delete Image',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this109.product.images.splice(index, 1);

                          _this109.imageIndex = _this109.imageIndex - 1;
                        }
                      }, {
                        text: 'Edit Image',
                        icon: 'create',
                        handler: function handler() {
                          var options = {
                            maximumImagesCount: 1
                          };
                          _this109.photos = new Array();

                          _this109.imagePicker.getPictures(options).then(function (results) {
                            _this109.reduceImages(results).then(function (results) {
                              return _this109.replaceUpload(index);
                            });
                          }, function (err) {//this.functions.showAlert("error", err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context72.sent;
                    _context72.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context72.stop();
                }
              }
            }, _callee72, this);
          }));
        }
      }, {
        key: "replaceUpload",
        value: function replaceUpload(index) {
          var _this110 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this110.uploadingImage = false;
            _this110.imageresult = JSON.parse(data.response);
            _this110.product.images[index].src = _this110.imageresult.url; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "editProduct",
        value: function editProduct(product) {
          this.productData.variationProduct = product;
          this.navCtrl.navigateForward(this.router.url + '/edit-variation-product/' + product.id);
        }
      }]);

      return EditProductPage;
    }();

    EditProductPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_13__["Config"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]
      }];
    };

    EditProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-product/edit-product.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-product.page.scss */
      "./src/app/vendor/edit-product/edit-product.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config__WEBPACK_IMPORTED_MODULE_13__["Config"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]])], EditProductPage); // 2) Add plugin related to image upload 3) Test Upload image 4) Test Put product 

    /***/
  },

  /***/
  "./src/app/vendor/edit-product/md5.ts":
  /*!********************************************!*\
    !*** ./src/app/vendor/edit-product/md5.ts ***!
    \********************************************/

  /*! exports provided: md5 */

  /***/
  function srcAppVendorEditProductMd5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "md5", function () {
      return md5;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var md5 = function md5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }

        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;

        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }

        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      ;

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      }

      ;

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }

        return utftext;
      }

      ;
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    };
    /***/

  },

  /***/
  "./src/app/vendor/edit-variation/edit-variation.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/vendor/edit-variation/edit-variation.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorEditVariationEditVariationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LXZhcmlhdGlvbi9lZGl0LXZhcmlhdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/edit-variation/edit-variation.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/vendor/edit-variation/edit-variation.page.ts ***!
    \**************************************************************/

  /*! exports provided: EditVariationPage */

  /***/
  function srcAppVendorEditVariationEditVariationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditVariationPage", function () {
      return EditVariationPage;
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
    /*! ./../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../config */
    "./src/app/config.ts");

    var EditVariationPage =
    /*#__PURE__*/
    function () {
      function EditVariationPage(actionSheetController, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, config, transfer, imagePicker, crop) {
        _classCallCheck(this, EditVariationPage);

        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.config = config;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.filter = {};
        this.categories = [];
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.uploadingImage = false;
        this.imageIndex = 0;
        this.filter.page = 1;
        this.filter.status = 'publish';
      }

      _createClass(EditVariationPage, [{
        key: "getProduct",
        value: function getProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee73() {
            var _this111 = this;

            return regeneratorRuntime.wrap(function _callee73$(_context73) {
              while (1) {
                switch (_context73.prev = _context73.next) {
                  case 0:
                    _context73.next = 2;
                    return this.api.getItem('products/' + this.id).subscribe(function (res) {
                      _this111.product = res;

                      _this111.handleProduct();
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context73.stop();
                }
              }
            }, _callee73, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          /*this.product = this.productData.variationProduct;
          console.log(this.product);
          
            if(this.product.images){
              if (this.product.images.length == 0) {
                  this.product.images = {};
              } else this.imageIndex = this.product.images.length;
          }
            if (this.product.id) this.handleProduct();
          else */

          this.getProduct();
        }
      }, {
        key: "handleProduct",
        value: function handleProduct() {
          for (var item in this.product.categories) {
            this.categories[item] = this.product.categories[item].id.toString();
          }

          this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
          });
          this.options.product_id = this.product.id;
          /*if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();
          this.getRelatedProducts();
          this.getUpsellProducts();
          this.getCrossSellProducts();
          this.getReviews();*/
        }
        /*async getVariationProducts() {
            await this.api.getItem('products/' + this.product.id + '/variations').subscribe(res => {
                this.variations = res;
            }, err => {});
        }
        async getRelatedProducts() {
            if (this.product.related_ids != 0) {
                var filter = [];
                for (let item in this.product.related_ids) filter['include[' + item + ']'] = this.product.related_ids[item];
                await this.api.getItem('products', filter).subscribe(res => {
                    this.relatedProducts = res;
                }, err => {});
            }
        }
        async getUpsellProducts() {
            if (this.product.upsell_ids != 0) {
                var filter = [];
                for (let item in this.product.upsell_ids) filter['include[' + item + ']'] = this.product.upsell_ids[item];
                await this.api.getItem('products', filter).subscribe(res => {
                    this.upsellProducts = res;
                }, err => {});
            }
        }
        async getCrossSellProducts() {
            if (this.product.cross_sell_ids != 0) {
                var filter = [];
                for (let item in this.product.cross_sell_ids) filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
                await this.api.getItem('products', filter).subscribe(res => {
                    this.crossSellProducts = res;
                }, err => {});
            }
        }
        async getReviews() {
            await this.api.getItem('products/' + this.product.id + '/reviews').subscribe(res => {
                this.reviews = res;
                for (let item in this.reviews) {
                    this.reviews[item].avatar = md5(this.reviews[item].email);
                }
            }, err => {});
        }
        goToProduct(product) {
            this.productData.vendorProduct = product;
            var endIndex = this.router.url.lastIndexOf('/');
            var path = this.router.url.substring(0, endIndex);
            this.navCtrl.navigateForward(path + '/' + product.id);
        }*/

      }, {
        key: "presentAlert",
        value: function presentAlert(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee74() {
            var alert;
            return regeneratorRuntime.wrap(function _callee74$(_context74) {
              while (1) {
                switch (_context74.prev = _context74.next) {
                  case 0:
                    _context74.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context74.sent;
                    _context74.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context74.stop();
                }
              }
            }, _callee74, this);
          }));
        }
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.productData.variationProduct = {};
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee75() {
            var _this112 = this;

            var id;
            return regeneratorRuntime.wrap(function _callee75$(_context75) {
              while (1) {
                switch (_context75.prev = _context75.next) {
                  case 0:
                    this.disableButton = true;
                    this.product.categories = [];

                    for (id in this.categories) {
                      this.product.categories[id] = {
                        id: parseInt(this.categories[id])
                      };
                    }

                    if (this.product.images.length) this.product.images[0].position = 0;
                    if (this.product.type == 'external') this.product.manage_stock = false;
                    _context75.next = 7;
                    return this.api.put('products/' + this.id, this.product).subscribe(function (res) {
                      _this112.product = res;

                      _this112.navCtrl.navigateBack('/tabs/account/vendor-products/edit-product/' + _this112.productData.product.id);
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context75.stop();
                }
              }
            }, _callee75, this);
          }));
        }
      }, {
        key: "picker",
        value: function picker() {
          var _this113 = this;

          console.log('hello');
          var options = {
            maximumImagesCount: 1
          };
          this.photos = new Array();
          this.imagePicker.getPictures(options).then(function (results) {
            _this113.reduceImages(results).then(function (results) {
              return _this113.handleUpload(results);
            });
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "handleUpload",
        value: function handleUpload(results) {
          this.upload();
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this114 = this;

          return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
              return _this114.crop.crop(item, {
                quality: 75,
                targetHeight: 100,
                targetWidth: 100
              }).then(function (cropped_image) {
                return _this114.photos = cropped_image;
              });
            });
          }, Promise.resolve());
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this115 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this115.uploadingImage = false;
            _this115.imageresult = JSON.parse(data.response);
            _this115.product.images[_this115.imageIndex] = {};
            _this115.product.images[_this115.imageIndex].src = _this115.imageresult.url;
            _this115.imageIndex = _this115.imageIndex + 1; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "replaceImage",
        value: function replaceImage(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee76() {
            var _this116 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee76$(_context76) {
              while (1) {
                switch (_context76.prev = _context76.next) {
                  case 0:
                    _context76.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Delete Image',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this116.product.images.splice(index, 1);

                          _this116.imageIndex = _this116.imageIndex - 1;
                        }
                      }, {
                        text: 'Edit Image',
                        icon: 'create',
                        handler: function handler() {
                          var options = {
                            maximumImagesCount: 1
                          };
                          _this116.photos = new Array();

                          _this116.imagePicker.getPictures(options).then(function (results) {
                            _this116.reduceImages(results).then(function (results) {
                              return _this116.replaceUpload(index);
                            });
                          }, function (err) {//this.functions.showAlert("error", err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context76.sent;
                    _context76.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context76.stop();
                }
              }
            }, _callee76, this);
          }));
        }
      }, {
        key: "replaceUpload",
        value: function replaceUpload(index) {
          var _this117 = this;

          this.uploadingImage = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this117.uploadingImage = false;
            _this117.imageresult = JSON.parse(data.response);
            _this117.product.images[index].src = _this117.imageresult.url; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }]);

      return EditVariationPage;
    }();

    EditVariationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_12__["Config"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]
      }];
    };

    EditVariationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-variation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-variation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/edit-variation/edit-variation.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-variation.page.scss */
      "./src/app/vendor/edit-variation/edit-variation.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config__WEBPACK_IMPORTED_MODULE_12__["Config"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]])], EditVariationPage);
    /***/
  },

  /***/
  "./src/app/vendor/order-list/order-list.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/vendor/order-list/order-list.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorOrderListOrderListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-list ion-card {\n  margin: 0;\n  margin-bottom: 20px;\n}\n.order-list ion-card:has(> .activated) {\n  opacity: 0.8;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  box-shadow: none;\n}\n.order-list ion-card-title {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.order-list .empty {\n  margin-top: 50px;\n  text-align: center;\n}\n.order-list .empty ion-icon {\n  font-size: 7.2em;\n}\n.order-list ion-card-subtitle {\n  font-weight: 500;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL29yZGVyLWxpc3QvRDpcXHdvb3RvcFxcV29vVG9vcC1BcHBBbmRyb2lkL3NyY1xcYXBwXFx2ZW5kb3JcXG9yZGVyLWxpc3RcXG9yZGVyLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3Ivb3JkZXItbGlzdC9vcmRlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNJLGdCQUFBO0FDQVo7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItbGlzdCB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZDpoYXMoPiAuYWN0aXZhdGVkKXtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcHR5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNy4yZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59IiwiLm9yZGVyLWxpc3QgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ub3JkZXItbGlzdCBpb24tY2FyZDpoYXMoPiAuYWN0aXZhdGVkKSB7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm9yZGVyLWxpc3QgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ub3JkZXItbGlzdCAuZW1wdHkge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3JkZXItbGlzdCAuZW1wdHkgaW9uLWljb24ge1xuICBmb250LXNpemU6IDcuMmVtO1xufVxuLm9yZGVyLWxpc3QgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/vendor/order-list/order-list.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/vendor/order-list/order-list.page.ts ***!
    \******************************************************/

  /*! exports provided: OrderListPage */

  /***/
  function srcAppVendorOrderListOrderListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListPage", function () {
      return OrderListPage;
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

    var OrderListPage =
    /*#__PURE__*/
    function () {
      function OrderListPage(actionSheetController, platform, api, settings, router, navCtrl, route) {
        _classCallCheck(this, OrderListPage);

        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
        this.orders = [];
        this.hasMoreItems = true;
        this.loader = true;
        this.filter.page = 1;
        this.filter.vendorid = this.settings.customer.id;

        if (this.settings.administrator) {
          delete this.filter.vendorid;
        }
      }

      _createClass(OrderListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.settings.settings.vendorType === 'product_vendor') {
            this.getWooCommerceProductVendorOrders();
          } else {
            this.getOrders(); //THIS WORKS FOE WCFM ALSO, DO NOT CHANEG THIS. WCFM API NOT WORKING
          } //WCFM DO NOT USE THIS. WCFM API THIS IS NOT WORKING
          //this.getWCFMOrders();

        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this118 = this;

          if (this.platform.is('hybrid')) this.api.getItemIonic('orders', this.filter).then(function (res) {
            _this118.orders = res;
            _this118.loader = false;
          }, function (err) {
            console.log(err);
          });else {
            this.api.getItem('orders', this.filter).subscribe(function (res) {
              _this118.orders = res;
              _this118.loader = false;
            }, function (err) {
              console.log(err);
            });
          }
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this119 = this;

          this.filter.page = this.filter.page + 1;
          if (this.platform.is('hybrid')) this.api.getItemIonic('orders', this.filter).then(function (res) {
            _this119.orders.push.apply(_this119.orders, res);

            event.target.complete();
            if (!res) _this119.hasMoreItems = false;
          }, function (err) {
            event.target.complete();
          });else {
            this.api.getItem('orders', this.filter).subscribe(function (res) {
              _this119.orders.push.apply(_this119.orders, res);

              event.target.complete();
              if (!res) _this119.hasMoreItems = false;
            }, function (err) {
              event.target.complete();
            });
          }
        }
      }, {
        key: "getDetail",
        value: function getDetail(order) {
          var navigationExtras = {
            queryParams: {
              order: order
            }
          };
          this.navCtrl.navigateForward('/tabs/account/vendor-orders/view-order/' + order.id, navigationExtras);
        }
      }, {
        key: "editOrder",
        value: function editOrder(order) {
          this.navCtrl.navigateForward('/tabs/account/vendor-orders/edit-order/' + order.id);
        }
      }, {
        key: "getWooCommerceProductVendorOrders",
        value: function getWooCommerceProductVendorOrders() {
          var _this120 = this;

          this.api.postItem('vendor-order-list', this.filter).subscribe(function (res) {
            _this120.orders = res;
            _this120.loader = false;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updateOrderStatus",
        value: function updateOrderStatus(order) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee77() {
            var _this121 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee77$(_context77) {
              while (1) {
                switch (_context77.prev = _context77.next) {
                  case 0:
                    _context77.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Fulfilled',
                        icon: 'checkmark',
                        handler: function handler() {
                          _this121.api.postItem('set_fulfill_status', {
                            status: 'fulfilled',
                            order_item_id: order.order_item_id
                          }).subscribe(function (res) {
                            order.fulfillment_status = res;
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }, {
                        text: 'Unfulfilled',
                        icon: 'close',
                        handler: function handler() {
                          _this121.api.postItem('set_fulfill_status', {
                            status: 'unfulfilled',
                            order_item_id: order.order_item_id
                          }).subscribe(function (res) {
                            order.fulfillment_status = res;
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context77.sent;
                    _context77.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context77.stop();
                }
              }
            }, _callee77, this);
          }));
        }
      }]);

      return OrderListPage;
    }();

    OrderListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    OrderListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-list/order-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-list.page.scss */
      "./src/app/vendor/order-list/order-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], OrderListPage);
    /***/
  },

  /***/
  "./src/app/vendor/order-note-list/order-note-list.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/vendor/order-note-list/order-note-list.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorOrderNoteListOrderNoteListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9vcmRlci1ub3RlLWxpc3Qvb3JkZXItbm90ZS1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/vendor/order-note-list/order-note-list.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/vendor/order-note-list/order-note-list.page.ts ***!
    \****************************************************************/

  /*! exports provided: OrderNoteListPage */

  /***/
  function srcAppVendorOrderNoteListOrderNoteListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderNoteListPage", function () {
      return OrderNoteListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderNoteListPage =
    /*#__PURE__*/
    function () {
      function OrderNoteListPage() {
        _classCallCheck(this, OrderNoteListPage);
      }

      _createClass(OrderNoteListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderNoteListPage;
    }();

    OrderNoteListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-note-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-note-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/order-note-list/order-note-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-note-list.page.scss */
      "./src/app/vendor/order-note-list/order-note-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrderNoteListPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/category/category.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/vendor/product-add/category/category.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorProductAddCategoryCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL2NhdGVnb3J5L0Q6XFx3b290b3BcXFdvb1Rvb3AtQXBwQW5kcm9pZC9zcmNcXGFwcFxcdmVuZG9yXFxwcm9kdWN0LWFkZFxcY2F0ZWdvcnlcXGNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFNBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuXHRtYXJnaW46IDA7XHJcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/category/category.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/vendor/product-add/category/category.page.ts ***!
    \**************************************************************/

  /*! exports provided: CategoryPage */

  /***/
  function srcAppVendorProductAddCategoryCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
      return CategoryPage;
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
    /*! ./../../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");

    var CategoryPage =
    /*#__PURE__*/
    function () {
      function CategoryPage(vendor, api, data, loadingController, navCtrl, router, settings, route) {
        _classCallCheck(this, CategoryPage);

        this.vendor = vendor;
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.settings = settings;
        this.route = route;
        this.items = {};
        this.subcategories = [];
        this.categories = [];
      }

      _createClass(CategoryPage, [{
        key: "getCategory",
        value: function getCategory(ID, slug, name) {
          this.subcategories = [];
          this.vendor.product.categories[0] = {
            id: ID
          };
          this.items.id = ID;
          this.items.name = name;
          this.items.slug = slug;
          this.items.categories = this.data.categories;

          for (var item in this.items.categories) {
            if (this.items.categories[item].parent == ID) {
              this.subcategories.push(this.items.categories[item]);
            }
          }

          if (this.subcategories.length) {
            this.navCtrl.navigateForward('/tabs/account/add-products/subcategory/' + ID);
          } else this.navCtrl.navigateForward('/tabs/account/add-products/details/' + ID);
        }
      }]);

      return CategoryPage;
    }();

    CategoryPage.ctorParameters = function () {
      return [{
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/category/category.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.page.scss */
      "./src/app/vendor/product-add/category/category.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CategoryPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/details/details.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/vendor/product-add/details/details.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorProductAddDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/details/details.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/vendor/product-add/details/details.page.ts ***!
    \************************************************************/

  /*! exports provided: DetailsPage */

  /***/
  function srcAppVendorProductAddDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
      return DetailsPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");

    var DetailsPage =
    /*#__PURE__*/
    function () {
      function DetailsPage(alertController, vendor, settings, loadingController, navCtrl, router, route) {
        _classCallCheck(this, DetailsPage);

        this.alertController = alertController;
        this.vendor = vendor;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
      }

      _createClass(DetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.vendor.product);
        }
      }, {
        key: "next",
        value: function next() {
          if (this.validateForm()) {
            this.navCtrl.navigateForward('/tabs/account/add-products/details/' + this.vendor.product.categories[0].id + '/photos');
          }
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          if (this.vendor.product.name == '' || this.vendor.product.name == undefined) {
            this.presentAlert('Please enter name');
            return false;
          }

          if (this.vendor.product.type == '' || this.vendor.product.type == undefined) {
            this.presentAlert('Please select product type');
            return false;
          }

          if (this.vendor.product.regular_price == '' || this.vendor.product.regular_price == undefined) {
            this.presentAlert('Please enter regular price');
            return false;
          } else return true;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee78() {
            var alert;
            return regeneratorRuntime.wrap(function _callee78$(_context78) {
              while (1) {
                switch (_context78.prev = _context78.next) {
                  case 0:
                    _context78.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context78.sent;
                    _context78.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context78.stop();
                }
              }
            }, _callee78, this);
          }));
        }
      }]);

      return DetailsPage;
    }();

    DetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/details/details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.page.scss */
      "./src/app/vendor/product-add/details/details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], DetailsPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/photos/photos.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/vendor/product-add/photos/photos.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorProductAddPhotosPhotosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".camera {\n  text-align: center;\n}\n.camera ion-icon {\n  font-size: 40px;\n}\n.images {\n  width: 100%;\n}\n.images .col {\n  padding: 0 5px 5px 0;\n  margin: 0;\n  min-width: 33.33%;\n  max-width: 33.33%;\n  width: 33.33%;\n  height: 120px;\n  border: 2px solid #eee;\n}\n.images .row {\n  padding: 5px 0 0 5px;\n}\n.images img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3Bob3Rvcy9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXHZlbmRvclxccHJvZHVjdC1hZGRcXHBob3Rvc1xccGhvdG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3Bob3Rvcy9waG90b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUNDRDtBRENDO0VBQ0MsZUFBQTtBQ0NGO0FER0E7RUFFSSxXQUFBO0FDREo7QURFSTtFQUNJLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQVI7QURFSTtFQUNJLG9CQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvcHJvZHVjdC1hZGQvcGhvdG9zL3Bob3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtZXJhe1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0aW9uLWljb257XHJcblx0XHRmb250LXNpemU6IDQwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uaW1hZ2VzIHtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHggNXB4IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzMuMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMuMzMlO1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgfVxyXG4gICAgLnJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDAgMCA1cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSIsIi5jYW1lcmEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FtZXJhIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uaW1hZ2VzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1hZ2VzIC5jb2wge1xuICBwYWRkaW5nOiAwIDVweCA1cHggMDtcbiAgbWFyZ2luOiAwO1xuICBtaW4td2lkdGg6IDMzLjMzJTtcbiAgbWF4LXdpZHRoOiAzMy4zMyU7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG59XG4uaW1hZ2VzIC5yb3cge1xuICBwYWRkaW5nOiA1cHggMCAwIDVweDtcbn1cbi5pbWFnZXMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/photos/photos.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vendor/product-add/photos/photos.page.ts ***!
    \**********************************************************/

  /*! exports provided: PhotosPage */

  /***/
  function srcAppVendorProductAddPhotosPhotosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosPage", function () {
      return PhotosPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../../config */
    "./src/app/config.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../api.service */
    "./src/app/api.service.ts");

    var PhotosPage =
    /*#__PURE__*/
    function () {
      function PhotosPage(platform, api, actionSheetController, config, vendor, settings, loadingController, navCtrl, router, transfer, imagePicker, crop) {
        _classCallCheck(this, PhotosPage);

        this.platform = platform;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.config = config;
        this.vendor = vendor;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.uploadingImageSpinner = false;
        this.imageIndex = 0;
      }

      _createClass(PhotosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "picker",
        value: function picker() {
          var _this122 = this;

          var options = {
            maximumImagesCount: 1
          };
          this.photos = new Array();
          this.imagePicker.getPictures(options).then(function (results) {
            console.log(results);

            _this122.reduceImages(results).then(function (results) {
              return _this122.handleUpload(results);
            });
          }, function (err) {
            _this122.err = err;
          });
        }
      }, {
        key: "handleUpload",
        value: function handleUpload(results) {
          this.upload();
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this123 = this;

          return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
              return _this123.crop.crop(item, {
                quality: 75,
                targetHeight: 100,
                targetWidth: 100
              }).then(function (cropped_image) {
                return _this123.photos = cropped_image;
              }, function (error) {
                return _this123.err = error;
              });
            });
          }, Promise.resolve());
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this124 = this;

          this.uploadingImageSpinner = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_8__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this124.uploadingImageSpinner = false;
            _this124.imageresult = JSON.parse(data.response);
            _this124.vendor.product.images[_this124.imageIndex] = {};
            _this124.vendor.product.images[_this124.imageIndex].src = _this124.imageresult.url;
            _this124.imageIndex = _this124.imageIndex + 1; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "replaceImage",
        value: function replaceImage(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee79() {
            var _this125 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee79$(_context79) {
              while (1) {
                switch (_context79.prev = _context79.next) {
                  case 0:
                    _context79.next = 2;
                    return this.actionSheetController.create({
                      header: 'Albums',
                      buttons: [{
                        text: 'Delete Image',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this125.vendor.product.images.splice(index, 1);

                          _this125.imageIndex = _this125.imageIndex - 1;
                        }
                      }, {
                        text: 'Edit Image',
                        icon: 'create',
                        handler: function handler() {
                          var options = {
                            maximumImagesCount: 1
                          };
                          _this125.photos = new Array();

                          _this125.imagePicker.getPictures(options).then(function (results) {
                            _this125.reduceImages(results).then(function (results) {
                              return _this125.replaceUpload(index);
                            });
                          }, function (err) {//this.functions.showAlert("error", err);
                          });
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context79.sent;
                    _context79.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context79.stop();
                }
              }
            }, _callee79, this);
          }));
        }
      }, {
        key: "replaceUpload",
        value: function replaceUpload(index) {
          var _this126 = this;

          this.uploadingImageSpinner = true;
          var fileTransfer = this.transfer.create();
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_8__["Headers"]();
          headers.append('Content-Type', 'multipart/form-data');
          var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
              headers: headers
            }
          };
          fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options).then(function (data) {
            _this126.uploadingImageSpinner = false;
            _this126.imageresult = JSON.parse(data.response);
            _this126.vendor.product.images[index].src = _this126.imageresult.url; // success
          }, function (err) {//this.functions.showAlert("error", err);
          });
        }
      }, {
        key: "publish",
        value: function publish() {
          this.vendor.product.status = 'publish';
          this.submit();
        }
      }, {
        key: "draft",
        value: function draft() {
          this.vendor.product.status = 'draft';
          this.submit();
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee80() {
            var _this127 = this;

            return regeneratorRuntime.wrap(function _callee80$(_context80) {
              while (1) {
                switch (_context80.prev = _context80.next) {
                  case 0:
                    this.vendor.product.vendor = this.settings.customer.id;
                    _context80.next = 3;
                    return this.loadingController.create({
                      spinner: 'crescent',
                      translucent: true,
                      animated: true,
                      backdropDismiss: true
                    });

                  case 3:
                    this.loading = _context80.sent;
                    _context80.next = 6;
                    return this.loading.present();

                  case 6:
                    if (this.platform.is('hybrid')) {
                      this.api.postItemIonic('products', this.vendor.product).then(function (res) {
                        //DOKAN AND WCFM Plugin
                        _this127.res = res;
                        console.log(res);

                        _this127.api.postItem('update-vendor-product', {
                          id: _this127.res.id
                        }).subscribe(function (res) {
                          console.log(res);
                        }, function (err) {
                          console.log(err);
                        }); //DOKAN AND WCFM Plugin


                        _this127.vendor.product = {};
                        _this127.vendor.product.categories = [];
                        _this127.vendor.product.images = [];
                        _this127.vendor.product.dimensions = {};

                        _this127.loading.dismiss();

                        _this127.navCtrl.navigateBack('tabs/account');
                      }, function (err) {
                        _this127.loading.dismiss();

                        console.log(err);
                      });
                    } else this.api.wcpost('products', this.vendor.product).subscribe(function (res) {
                      //DOKAN AND WCFM Plugin
                      _this127.res = res;

                      _this127.api.postItem('update-vendor-product', {
                        id: _this127.res.id
                      }).subscribe(function (res) {
                        console.log(res);
                      }, function (err) {
                        console.log(err);
                      }); //DOKAN AND WCFM Plugin


                      _this127.vendor.product = {};
                      _this127.vendor.product.categories = [];
                      _this127.vendor.product.images = [];
                      _this127.vendor.product.dimensions = {};

                      _this127.loading.dismiss();

                      _this127.navCtrl.navigateBack('tabs/account');
                    }, function (err) {
                      _this127.loading.dismiss();

                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context80.stop();
                }
              }
            }, _callee80, this);
          }));
        }
      }]);

      return PhotosPage;
    }();

    PhotosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _config__WEBPACK_IMPORTED_MODULE_10__["Config"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]
      }];
    };

    PhotosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/photos/photos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photos.page.scss */
      "./src/app/vendor/product-add/photos/photos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _config__WEBPACK_IMPORTED_MODULE_10__["Config"], _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]])], PhotosPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-add/subcategory/subcategory.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/vendor/product-add/subcategory/subcategory.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorProductAddSubcategorySubcategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3N1YmNhdGVnb3J5L0Q6XFx3b290b3BcXFdvb1Rvb3AtQXBwQW5kcm9pZC9zcmNcXGFwcFxcdmVuZG9yXFxwcm9kdWN0LWFkZFxcc3ViY2F0ZWdvcnlcXHN1YmNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFNBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9zdWJjYXRlZ29yeS9zdWJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuXHRtYXJnaW46IDA7XHJcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vendor/product-add/subcategory/subcategory.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/vendor/product-add/subcategory/subcategory.page.ts ***!
    \********************************************************************/

  /*! exports provided: SubcategoryPage */

  /***/
  function srcAppVendorProductAddSubcategorySubcategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function () {
      return SubcategoryPage;
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


    var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../data/vendor */
    "./src/app/data/vendor.ts");

    var SubcategoryPage =
    /*#__PURE__*/
    function () {
      function SubcategoryPage(vendor, data, settings, loadingController, navCtrl, router, route) {
        _classCallCheck(this, SubcategoryPage);

        this.vendor = vendor;
        this.data = data;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.subCategories = [];
      }

      _createClass(SubcategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('id');
          console.log(this.id);

          for (var i = 0; i < this.data.categories.length; i++) {
            if (this.data.categories[i].parent == this.id) {
              this.subCategories.push(this.data.categories[i]);
            }
          }
        }
      }, {
        key: "getCategory",
        value: function getCategory(ID) {
          this.vendor.product.categories[0] = {
            id: ID
          };
          this.navCtrl.navigateForward('/tabs/account/add-products/details/' + ID);
        }
      }]);

      return SubcategoryPage;
    }();

    SubcategoryPage.ctorParameters = function () {
      return [{
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subcategory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subcategory.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-add/subcategory/subcategory.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subcategory.page.scss */
      "./src/app/vendor/product-add/subcategory/subcategory.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], SubcategoryPage);
    /***/
  },

  /***/
  "./src/app/vendor/product-list/product-list.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/vendor/product-list/product-list.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorProductListProductListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n.regular-price {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.special-price {\n  padding: 4px;\n  font-size: smaller;\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtbGlzdC9EOlxcd29vdG9wXFxXb29Ub29wLUFwcEFuZHJvaWQvc3JjXFxhcHBcXHZlbmRvclxccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3IvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5yZWd1bGFyLXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnNwZWNpYWwtcHJpY2V7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC40KTtcclxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnJlZ3VsYXItcHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zcGVjaWFsLXByaWNlIHtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuNCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/vendor/product-list/product-list.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vendor/product-list/product-list.page.ts ***!
    \**********************************************************/

  /*! exports provided: ProductListPage */

  /***/
  function srcAppVendorProductListProductListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPage", function () {
      return ProductListPage;
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
    /*! ./../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../data */
    "./src/app/data.ts");
    /* harmony import */


    var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/settings */
    "./src/app/data/settings.ts");
    /* harmony import */


    var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../data/product */
    "./src/app/data/product.ts");
    /* harmony import */


    var _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../filter/filter.page */
    "./src/app/filter/filter.page.ts");

    var ProductListPage =
    /*#__PURE__*/
    function () {
      function ProductListPage(platform, alertController, modalController, api, data, product, settings, router, navCtrl, route) {
        _classCallCheck(this, ProductListPage);

        this.platform = platform;
        this.alertController = alertController;
        this.modalController = modalController;
        this.api = api;
        this.data = data;
        this.product = product;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.tempProducts = [];
        this.subCategories = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.loader = false;
        this.filter.page = 1;
        this.filter.vendor = this.settings.customer.id;

        if (this.settings.administrator) {
          delete this.filter.vendor;
        }
      }

      _createClass(ProductListPage, [{
        key: "getFilter",
        value: function getFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee81() {
            var modal, _ref2, data;

            return regeneratorRuntime.wrap(function _callee81$(_context81) {
              while (1) {
                switch (_context81.prev = _context81.next) {
                  case 0:
                    _context81.next = 2;
                    return this.modalController.create({
                      component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                      componentProps: {
                        filter: this.filter,
                        attributes: this.attributes
                      }
                    });

                  case 2:
                    modal = _context81.sent;
                    modal.present();
                    _context81.next = 6;
                    return modal.onDidDismiss();

                  case 6:
                    _ref2 = _context81.sent;
                    data = _ref2.data;

                    if (data) {
                      this.filter = data;
                      this.filter.page = 1;
                      this.getProducts();
                    }

                  case 9:
                  case "end":
                    return _context81.stop();
                }
              }
            }, _callee81, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee82() {
            var _this128 = this;

            return regeneratorRuntime.wrap(function _callee82$(_context82) {
              while (1) {
                switch (_context82.prev = _context82.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;

                    if (!this.platform.is('hybrid')) {
                      _context82.next = 6;
                      break;
                    }

                    _context82.next = 4;
                    return this.api.getItemIonic('products', this.filter).then(function (res) {
                      _this128.tempProducts = res;

                      _this128.products.push.apply(_this128.products, _this128.tempProducts);

                      event.target.complete();
                      if (_this128.tempProducts.length == 0) _this128.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 4:
                    _context82.next = 8;
                    break;

                  case 6:
                    _context82.next = 8;
                    return this.api.getItem('products', this.filter).subscribe(function (res) {
                      _this128.tempProducts = res;

                      _this128.products.push.apply(_this128.products, _this128.tempProducts);

                      event.target.complete();
                      if (_this128.tempProducts.length == 0) _this128.hasMoreItems = false;
                    }, function (err) {
                      event.target.complete();
                    });

                  case 8:
                  case "end":
                    return _context82.stop();
                }
              }
            }, _callee82, this);
          }));
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee83() {
            var _this129 = this;

            return regeneratorRuntime.wrap(function _callee83$(_context83) {
              while (1) {
                switch (_context83.prev = _context83.next) {
                  case 0:
                    this.loader = true;

                    if (!this.platform.is('hybrid')) {
                      _context83.next = 6;
                      break;
                    }

                    _context83.next = 4;
                    return this.api.getItemIonic('products', this.filter).then(function (res) {
                      _this129.products = res;
                      _this129.loader = false;
                    }, function (err) {
                      console.log(err);
                    });

                  case 4:
                    _context83.next = 8;
                    break;

                  case 6:
                    _context83.next = 8;
                    return this.api.getItem('products', this.filter).subscribe(function (res) {
                      _this129.products = res;
                      _this129.loader = false;
                    }, function (err) {
                      console.log(err);
                    });

                  case 8:
                  case "end":
                    return _context83.stop();
                }
              }
            }, _callee83, this);
          }));
        }
      }, {
        key: "getAttributes",
        value: function getAttributes() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee84() {
            var _this130 = this;

            return regeneratorRuntime.wrap(function _callee84$(_context84) {
              while (1) {
                switch (_context84.prev = _context84.next) {
                  case 0:
                    _context84.next = 2;
                    return this.api.postItem('product-attributes', {
                      category: this.filter.category
                    }).subscribe(function (res) {
                      _this130.attributes = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context84.stop();
                }
              }
            }, _callee84, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter.category = this.route.snapshot.paramMap.get('id');

          if (this.data.categories && this.data.categories.length) {
            for (var i = 0; i < this.data.categories.length; i++) {
              if (this.data.categories[i].parent == this.filter.category) {
                this.subCategories.push(this.data.categories[i]);
              }
            }
          }

          if (this.settings.colWidthProducts == 4) this.filter.per_page = 15;
          this.getProducts();
          this.getAttributes();
        }
      }, {
        key: "getProduct",
        value: function getProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward(this.router.url + '/view-product/' + product.id);
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          var endIndex = this.router.url.lastIndexOf('/');
          var path = this.router.url.substring(0, endIndex);
          this.navCtrl.navigateForward(path + '/' + id);
        }
      }, {
        key: "editProduct",
        value: function editProduct(product) {
          this.product.product = product;
          this.navCtrl.navigateForward(this.router.url + '/edit-product/' + product.id);
        }
      }, {
        key: "delete",
        value: function _delete(product) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee85() {
            var _this131 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee85$(_context85) {
              while (1) {
                switch (_context85.prev = _context85.next) {
                  case 0:
                    _context85.next = 2;
                    return this.alertController.create({
                      header: 'Delete',
                      message: 'Are you sure you want to delete this product?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Delete',
                        handler: function handler() {
                          if (_this131.platform.is('hybrid')) _this131.api.deleteItemIonic('products', product.id).then(function (res) {
                            _this131.getProducts();
                          }, function (err) {
                            console.log(err);
                          });else _this131.api.deleteItem('products', product.id).subscribe(function (res) {
                            _this131.getProducts();
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context85.sent;
                    _context85.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context85.stop();
                }
              }
            }, _callee85, this);
          }));
        }
      }]);

      return ProductListPage;
    }();

    ProductListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data__WEBPACK_IMPORTED_MODULE_5__["Data"]
      }, {
        type: _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/product-list/product-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.page.scss */
      "./src/app/vendor/product-list/product-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ProductListPage);
    /***/
  },

  /***/
  "./src/app/vendor/vendor-info/vendor-info.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/vendor/vendor-info/vendor-info.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorVendorInfoVendorInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci92ZW5kb3ItaW5mby92ZW5kb3ItaW5mby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/vendor/vendor-info/vendor-info.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/vendor/vendor-info/vendor-info.page.ts ***!
    \********************************************************/

  /*! exports provided: VendorInfoPage */

  /***/
  function srcAppVendorVendorInfoVendorInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorInfoPage", function () {
      return VendorInfoPage;
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


    var _data_vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../data/vendor */
    "./src/app/data/vendor.ts");

    var VendorInfoPage =
    /*#__PURE__*/
    function () {
      function VendorInfoPage(vendor) {
        _classCallCheck(this, VendorInfoPage);

        this.vendor = vendor;
      }

      _createClass(VendorInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnDestroy",
        value: function OnDestroy() {
          this.vendor.vendor = {};
        }
      }]);

      return VendorInfoPage;
    }();

    VendorInfoPage.ctorParameters = function () {
      return [{
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_2__["Vendor"]
      }];
    };

    VendorInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vendor-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-info/vendor-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vendor-info.page.scss */
      "./src/app/vendor/vendor-info/vendor-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_2__["Vendor"]])], VendorInfoPage);
    /***/
  },

  /***/
  "./src/app/vendor/vendor-list/vendor-list.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/vendor/vendor-list/vendor-list.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorVendorListVendorListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-list ion-card {\n  margin: 0;\n}\n\nion-card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n}\n\nion-card-header {\n  padding: 16px 8px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZlbmRvci1saXN0L0Q6XFx3b290b3BcXFdvb1Rvb3AtQXBwQW5kcm9pZC9zcmNcXGFwcFxcdmVuZG9yXFx2ZW5kb3ItbGlzdFxcdmVuZG9yLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3IvdmVuZG9yLWxpc3QvdmVuZG9yLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtBQ0FSOztBREdBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNHLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREVBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL3ZlbmRvci1saXN0L3ZlbmRvci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItbGlzdCB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbmlvbi1jYXJkLXRpdGxle1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlcntcclxuXHRwYWRkaW5nOiAxNnB4IDhweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLnZlbmRvci1saXN0IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vendor/vendor-list/vendor-list.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/vendor/vendor-list/vendor-list.page.ts ***!
    \********************************************************/

  /*! exports provided: VendorListPage */

  /***/
  function srcAppVendorVendorListVendorListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorListPage", function () {
      return VendorListPage;
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
    /* harmony import */


    var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../data/vendor */
    "./src/app/data/vendor.ts");

    var VendorListPage =
    /*#__PURE__*/
    function () {
      function VendorListPage(platform, api, settings, router, navCtrl, route, vendor) {
        _classCallCheck(this, VendorListPage);

        this.platform = platform;
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.vendor = vendor;
        this.filter = {};
        this.hasMoreItems = true;
        this.tempVendor = [];
        this.filter.page = 1;
        this.filter.per_page = 30;
        this.filter.wc_vendor = true;
      }

      _createClass(VendorListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Commaon
          this.getVendors(); // Delete all these once above is working fine
          //WCMP
          //this.getWcVendors();
          //DOKAN
          //this.getDokanVendors();
          //WCFM
          //this.getWCFMVendors();
        }
      }, {
        key: "getVendors",
        value: function getVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee86() {
            var _this132 = this;

            return regeneratorRuntime.wrap(function _callee86$(_context86) {
              while (1) {
                switch (_context86.prev = _context86.next) {
                  case 0:
                    _context86.next = 2;
                    return this.api.postItem('vendors', this.filter).subscribe(function (res) {
                      _this132.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context86.stop();
                }
              }
            }, _callee86, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee87() {
            var _this133 = this;

            return regeneratorRuntime.wrap(function _callee87$(_context87) {
              while (1) {
                switch (_context87.prev = _context87.next) {
                  case 0:
                    this.filter.page = this.filter.page + 1;
                    /* Common */

                    _context87.next = 3;
                    return this.api.postItem('vendors', this.filter).subscribe(function (res) {
                      _this133.tempVendor = res;

                      _this133.vendors.push.apply(_this133.vendors, res);

                      event.target.complete();
                      if (_this133.tempVendor && _this133.tempVendor.length == 0) _this133.hasMoreItems = false;else if (!_this133.tempVendor || !_this133.tempVendor.length) event.target.complete();
                    }, function (err) {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context87.stop();
                }
              }
            }, _callee87, this);
          }));
        }
        /* WC Marketplace */

      }, {
        key: "getWcVendors",
        value: function getWcVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee88() {
            var _this134 = this;

            return regeneratorRuntime.wrap(function _callee88$(_context88) {
              while (1) {
                switch (_context88.prev = _context88.next) {
                  case 0:
                    if (!this.platform.is('hybrid')) {
                      _context88.next = 5;
                      break;
                    }

                    _context88.next = 3;
                    return this.api.WCMPVendorIonic('vendors', this.filter).then(function (res) {
                      _this134.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                    _context88.next = 7;
                    break;

                  case 5:
                    _context88.next = 7;
                    return this.api.WCMPVendor('vendors', this.filter).subscribe(function (res) {
                      _this134.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 7:
                  case "end":
                    return _context88.stop();
                }
              }
            }, _callee88, this);
          }));
        }
      }, {
        key: "getDokanVendors",
        value: function getDokanVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee89() {
            var _this135 = this;

            return regeneratorRuntime.wrap(function _callee89$(_context89) {
              while (1) {
                switch (_context89.prev = _context89.next) {
                  case 0:
                    _context89.next = 2;
                    return this.api.postItem('vendors-list', this.filter).subscribe(function (res) {
                      _this135.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context89.stop();
                }
              }
            }, _callee89, this);
          }));
        }
      }, {
        key: "getWCFMVendors",
        value: function getWCFMVendors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee90() {
            var _this136 = this;

            return regeneratorRuntime.wrap(function _callee90$(_context90) {
              while (1) {
                switch (_context90.prev = _context90.next) {
                  case 0:
                    _context90.next = 2;
                    return this.api.postItem('wcfm-vendor-list', this.filter).subscribe(function (res) {
                      _this136.vendors = res;
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context90.stop();
                }
              }
            }, _callee90, this);
          }));
        }
      }, {
        key: "getDetail",
        value: function getDetail(item) {
          this.vendor.vendor = item;
          this.navCtrl.navigateForward('/tabs/vendor/products');
        }
      }]);

      return VendorListPage;
    }();

    VendorListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]
      }];
    };

    VendorListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vendor-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor/vendor-list/vendor-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vendor-list.page.scss */
      "./src/app/vendor/vendor-list/vendor-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]])], VendorListPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map