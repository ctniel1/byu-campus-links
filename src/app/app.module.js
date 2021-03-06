"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var school_component_1 = require("./school/school.component");
var work_component_1 = require("./work/work.component");
var communication_component_1 = require("./communication/communication.component");
var favorites_component_1 = require("./favorites/favorites.component");
var settings_component_1 = require("./settings/settings.component");
var campus_links_service_1 = require("./campus-links.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                school_component_1.SchoolComponent,
                work_component_1.WorkComponent,
                communication_component_1.CommunicationComponent,
                favorites_component_1.FavoritesComponent,
                settings_component_1.SettingsComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [campus_links_service_1.CampusLinksService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map