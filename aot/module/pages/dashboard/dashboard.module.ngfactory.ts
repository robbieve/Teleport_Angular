/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../module/pages/dashboard/dashboard.module';
import * as i2 from '@angular/common';
import * as i3 from '@angular/platform-browser';
import * as i4 from '@angular/animations/browser';
import * as i5 from '@angular/platform-browser/animations';
import * as i6 from '@angular/animations';
import * as i7 from '@angular/forms';
import * as i8 from '@angular/http';
import * as i9 from '../../../../module/services/account.credentials.service';
import * as i10 from '@ngrx/store';
import * as i11 from '../../../../module/services/alerts.service';
import * as i12 from '../../../../module/services/message.service';
import * as i13 from '../../../../module/services/billing.service';
import * as i14 from '../../../../module/services/integrations.aws.service';
import * as i15 from '../../../../module/services/integrations.watson.service';
import * as i16 from '../../../../module/services/logs.service';
import * as i17 from '../../../../module/services/modal.service';
import * as i18 from '../../../../module/services/perms-guard.service';
import * as i19 from '@angular/router';
import * as i20 from '../../../../module/services/top-up.service';
import * as i21 from '../../../../module/services/usage.service';
import * as i22 from '../../../../module/services/user.service';
import * as i23 from '../../../../module/md2/datepicker/dateUtil';
import * as i24 from '../../../../module/components/components.module';
import * as i25 from '../../../../module/pages/dashboard/profile/users/role-picker.module';
import * as i26 from '../../../../module/md2/datepicker/datepicker';
import * as i27 from '../../../../module/services/services.module';
export const DevPortalDashboardModuleNgFactory:i0.NgModuleFactory<i1.DevPortalDashboardModule> = i0.ɵcmf(i1.DevPortalDashboardModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(5120,
          i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i2.NgLocalization,i2.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(4608,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(5120,
          i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i3.DomSanitizer,
              i3.ɵe,[i2.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i3.DomSanitizer]),
          i0.ɵmpd(4608,i3.HAMMER_GESTURE_CONFIG,i3.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i3.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i3.ɵDomEventsPlugin(p0_0),new i3.ɵKeyEventsPlugin(p1_0),new i3.ɵHammerGesturesPlugin(p2_0,
                p2_1)];
          },[i2.DOCUMENT,i2.DOCUMENT,i2.DOCUMENT,i3.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i3.EventManager,i3.EventManager,[i3.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i3.ɵDomSharedStylesHost,i3.ɵDomSharedStylesHost,[i2.DOCUMENT]),
          i0.ɵmpd(4608,i3.ɵDomRendererFactory2,i3.ɵDomRendererFactory2,[i3.EventManager,
              i3.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i4.AnimationDriver,i5.ɵc,([] as any[])),
          i0.ɵmpd(5120,i4.ɵAnimationStyleNormalizer,i5.ɵd,([] as any[])),i0.ɵmpd(4608,
              i4.ɵAnimationEngine,i5.ɵb,[i4.AnimationDriver,i4.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i5.ɵe,[i3.ɵDomRendererFactory2,i4.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i3.ɵSharedStylesHost,(null as any),[i3.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i3.Meta,
              i3.Meta,[i2.DOCUMENT]),i0.ɵmpd(4608,i3.Title,i3.Title,[i2.DOCUMENT]),
          i0.ɵmpd(4608,i6.AnimationBuilder,i5.ɵBrowserAnimationBuilder,[i0.RendererFactory2]),
          i0.ɵmpd(4608,i7.ɵi,i7.ɵi,([] as any[])),i0.ɵmpd(4608,i8.BrowserXhr,i8.BrowserXhr,
              ([] as any[])),i0.ɵmpd(4608,i8.ResponseOptions,i8.BaseResponseOptions,
              ([] as any[])),i0.ɵmpd(5120,i8.XSRFStrategy,i8.ɵb,([] as any[])),i0.ɵmpd(4608,
              i8.XHRBackend,i8.XHRBackend,[i8.BrowserXhr,i8.ResponseOptions,i8.XSRFStrategy]),
          i0.ɵmpd(4608,i8.RequestOptions,i8.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i8.Http,i8.ɵc,[i8.XHRBackend,i8.RequestOptions]),i0.ɵmpd(4608,i9.AccountCredentialsService,
              i9.AccountCredentialsService,[i8.Http,i10.Store]),i0.ɵmpd(4608,i11.AlertsService,
              i11.AlertsService,[i8.Http,i10.Store]),i0.ɵmpd(4608,i12.MessageService,
              i12.MessageService,[i3.DOCUMENT,i10.Store,i10.ReducerManagerDispatcher]),
          i0.ɵmpd(4608,i13.BillingService,i13.BillingService,[i8.Http,i12.MessageService,
              i10.Store]),i0.ɵmpd(4608,i14.IntegrationsAWSService,i14.IntegrationsAWSService,
              [i8.Http,i10.Store]),i0.ɵmpd(4608,i15.IntegrationsWatsonService,i15.IntegrationsWatsonService,
              [i8.Http,i10.Store]),i0.ɵmpd(4608,i16.LogsService,i16.LogsService,[i8.Http,
              i10.Store]),i0.ɵmpd(4608,i17.ModalService,i17.ModalService,[i3.DOCUMENT]),
          i0.ɵmpd(4608,i18.PermsGuardCanActivate,i18.PermsGuardCanActivate,[i19.Router,
              i10.Store]),i0.ɵmpd(4608,i20.TopUpService,i20.TopUpService,[i8.Http,
              i10.Store]),i0.ɵmpd(4608,i21.UsageService,i21.UsageService,[i8.Http,
              i10.Store]),i0.ɵmpd(4608,i22.UserService,i22.UserService,[i8.Http,i10.Store]),
          i0.ɵmpd(4608,i23.Md2DateUtil,i23.Md2DateUtil,([] as any[])),i0.ɵmpd(512,
              i2.CommonModule,i2.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i3.ɵa,([] as any[])),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any) => {
            return [i3.ɵc(p0_0,p0_1)];
          },[[2,i3.NgProbeToken],[2,i0.NgProbeToken]]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i3.BrowserModule,i3.BrowserModule,[[3,i3.BrowserModule]]),i0.ɵmpd(512,
              i5.BrowserAnimationsModule,i5.BrowserAnimationsModule,([] as any[])),
          i0.ɵmpd(512,i7.ɵba,i7.ɵba,([] as any[])),i0.ɵmpd(512,i7.FormsModule,i7.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i8.HttpModule,i8.HttpModule,([] as any[])),
          i0.ɵmpd(512,i19.RouterModule,i19.RouterModule,[[2,i19.ɵa],[2,i19.Router]]),
          i0.ɵmpd(512,i24.DevPortalComponentsModule,i24.DevPortalComponentsModule,
              ([] as any[])),i0.ɵmpd(512,i25.RolePickerModule,i25.RolePickerModule,
              ([] as any[])),i0.ɵmpd(512,i26.Md2DatepickerModule,i26.Md2DatepickerModule,
              ([] as any[])),i0.ɵmpd(512,i27.DevPortalServicesModule,i27.DevPortalServicesModule,
              ([] as any[])),i0.ɵmpd(512,i1.DevPortalDashboardModule,i1.DevPortalDashboardModule,
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcGF0cmlja21hcnRpbi9Eb2N1bWVudHMvU2hvdXRQb2ludFByb2plY3RzL1RlbGVQb3J0L3RlbGVwb3J0LWFwcC1tb2R1bGVzL3RlbGVwb3J0LW1vZHVsZS1kZXYtcG9ydGFsL21vZHVsZS9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3BhdHJpY2ttYXJ0aW4vRG9jdW1lbnRzL1Nob3V0UG9pbnRQcm9qZWN0cy9UZWxlUG9ydC90ZWxlcG9ydC1hcHAtbW9kdWxlcy90ZWxlcG9ydC1tb2R1bGUtZGV2LXBvcnRhbC9tb2R1bGUvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
