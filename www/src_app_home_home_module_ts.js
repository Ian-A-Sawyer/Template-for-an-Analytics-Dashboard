"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6046:
/*!****************************************!*\
  !*** ./src/app/central-api.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralApiService": () => (/* binding */ CentralApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);



let CentralApiService = class CentralApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.countapi.xyz/hit/fearless/1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
        this.currentCount = '';
    }
    setCurrentCount(count) {
        const displayValue = count;
        this.currentCount = displayValue;
    }
    getCurrentCount() {
        const displayValue = this.currentCount;
        return displayValue;
    }
    retrieveResponse() {
        const apiUrl = this.apiUrl;
        return this.http.get(apiUrl);
    }
};
CentralApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CentralApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CentralApiService);



/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Ian_source_repos_Happiness_CounterApplication_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _central_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../central-api.service */ 6046);





let HomePage = class HomePage {
    constructor(api) {
        this.api = api;
        this.currentCount = 0;
    }
    checkLength() {
        const n = this.currentCount;
        const bool = n > 0;
        return bool;
    }
    retrieveCount(e) {
        this.api.retrieveResponse().subscribe((res) => {
            const value = res['value'];
            this.currentCount = value;
        });
    }
    ionViewDidEnter() {
    }
};
HomePage.ctorParameters = () => [
    { type: _central_api_service__WEBPACK_IMPORTED_MODULE_2__.CentralApiService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _C_Users_Ian_source_repos_Happiness_CounterApplication_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header id=\"TODO-future-header\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content id=\"HomeContent\" [fullscreen]=\"true\">\n  <div id=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              Number of A.P.I. Hits\n            </ion-card-header>\n            <ion-card-subtitle>\n              Value:\n              <span [hidden]=\"checkLength()\">Click Button To Retrieve Count</span>\n              <span class=\"value\" [hidden]=\"!checkLength()\">{{ currentCount }}</span>\n            </ion-card-subtitle>\n            <ion-card-content>\n              <ion-button class=\"btn\" id=\"MainCenterButton\" size=\"md\" (click)=\"retrieveCount($event)\">\n                Retrieve Api Number of Sent Responses\n              </ion-button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.value {\n  font-size: 1.5rem;\n  color: #780078;\n}\n\nion-card-header {\n  font-size: 1.5rem;\n  color: black;\n}\n\nion-card-subtitle {\n  font-size: 1.125rem;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzc4MDA3ODtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map