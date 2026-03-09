import {
  APP_STORAGE,
  DEFAULT_LANGUAGE
} from "./chunk-ET6XCIB7.js";
import {
  TranslocoService,
  provideTransloco
} from "./chunk-YBU5AOQC.js";
import {
  APP_ROUTES
} from "./chunk-XS4O3NDQ.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-DVFFD4F4.js";
import {
  Component,
  HttpClient,
  Injectable,
  catchError,
  inject,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement
} from "./chunk-MW4S3Q6I.js";
import "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/app.routes.ts
var appRoutes = [
  { path: "", redirectTo: APP_ROUTES.AUTH.ROOT, pathMatch: "full" },
  {
    path: APP_ROUTES.AUTH.ROOT,
    loadComponent: () => import("./chunk-4IWRZIF6.js").then((m) => m.AuthWrapperComponent),
    loadChildren: () => import("./chunk-OFOCR6HJ.js").then((m) => m.authRoutes)
  },
  {
    path: APP_ROUTES.LANDING.ROOT,
    loadComponent: () => import("./chunk-DIWSAHHB.js").then((m) => m.LandingWrapperComponent),
    loadChildren: () => import("./chunk-MVPFBI6E.js").then((m) => m.landingRoutes)
  }
];

// apps/angular-c4-team3/src/app/transloco-loader.ts
var TranslocoHttpLoader = class _TranslocoHttpLoader {
  http = inject(HttpClient);
  getTranslation(lang) {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
  static \u0275fac = function TranslocoHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslocoHttpLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslocoHttpLoader, factory: _TranslocoHttpLoader.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslocoHttpLoader, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// apps/angular-c4-team3/src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = localStorage.getItem(APP_STORAGE.token) ?? "";
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        token
      }
    });
    return next(cloned);
  }
  return next(req);
};

// apps/angular-c4-team3/src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const _router = inject(Router);
  return next(req).pipe(catchError((error) => {
    let errorMessage = "An unexpected error occurred";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
      console.error("Client-side error:", error.error.message);
    } else {
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message || "Bad Request";
          console.error("Bad Request (400):", errorMessage);
          break;
        case 401:
          errorMessage = "Unauthorized. Please log in again.";
          console.error("Unauthorized (401):", errorMessage);
          localStorage.removeItem(APP_STORAGE.token);
          _router.navigate([`/${APP_ROUTES.AUTH.ROOT}/${APP_ROUTES.AUTH.LOGIN}`]);
          break;
        case 403:
          errorMessage = "Forbidden. You do not have permission to access this resource.";
          console.error("Forbidden (403):", errorMessage);
          break;
        case 404:
          errorMessage = error.error?.message || "Resource not found";
          console.error("Not Found (404):", errorMessage);
          break;
        case 500:
          errorMessage = "Internal Server Error. Please try again later.";
          console.error("Internal Server Error (500):", error.error);
          break;
        case 503:
          errorMessage = "Service Unavailable. Please try again later.";
          console.error("Service Unavailable (503):", error.error);
          break;
        default:
          errorMessage = error.error?.message || `Error: ${error.status} - ${error.statusText}`;
          console.error(`HTTP Error (${error.status}):`, error.error);
          break;
      }
    }
    return throwError(() => ({
      status: error.status,
      message: errorMessage,
      originalError: error,
      apiErrorMessage: error.error?.message ?? ""
    }));
  }));
};

// apps/angular-c4-team3/src/app/app.config.ts
function preloadTranslation(transloco) {
  return function() {
    const savedLang = localStorage.getItem(APP_STORAGE.language) ?? DEFAULT_LANGUAGE;
    transloco.setActiveLang(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    return transloco.load(savedLang);
  };
}
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    provideTransloco({
      config: {
        availableLangs: ["en", "ar"],
        defaultLang: "en",
        fallbackLang: "en",
        reRenderOnLangChange: true,
        prodMode: !isDevMode()
      },
      loader: TranslocoHttpLoader
    }),
    provideAppInitializer(() => {
      const initializerFn = preloadTranslation(inject(TranslocoService));
      return initializerFn();
    })
  ]
};

// apps/angular-c4-team3/src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ imports: [RouterOutlet], selector: "app-root", template: "<router-outlet />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "apps/angular-c4-team3/src/app/app.ts", lineNumber: 10 });
})();

// apps/angular-c4-team3/src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
