import {
  Component,
  HttpClient,
  Injectable,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MW4S3Q6I.js";

// auth/src/lib/auth/base/auth-api.ts
var AuthApiBase = class {
};

// auth/src/lib/auth/enums/flower-auth-endpoints.ts
var AuthEndpoints = class {
  static REGISTER = "https://flower.elevateegy.com/api/v1/auth/signup";
  static LOGIN = "https://flower.elevateegy.com/api/v1/auth/signin";
  static CHANGE_PASSWORD = "https://flower.elevateegy.com/api/v1/auth/change-password";
  static DELETE_MY_ACCOUNT = "https://flower.elevateegy.com/api/v1/auth/deleteMe";
  static EDIT_PROFILE = "https://flower.elevateegy.com/api/v1/auth/editProfile";
  static UPLOAD_PROFILE_PHOTO = "https://flower.elevateegy.com/api/v1/auth/upload-photo";
  static LOGOUT = "https://flower.elevateegy.com/api/v1/auth/logout";
  static PROFILE_DATA = "https://flower.elevateegy.com/api/v1/auth/profile-data";
  static FORGOT_PASSWORD = "https://flower.elevateegy.com/api/v1/auth/forgotPassword";
  static VERIFY_OTP = "https://flower.elevateegy.com/api/v1/auth/verifyResetCode";
  static RESET_PASSWORD = "https://flower.elevateegy.com/api/v1/auth/resetPassword";
  static CHANGE_USER_ROLE = "https://flower.elevateegy.com/api/v1/auth/update-role/{userId}";
};

// auth/src/lib/auth/services/auth.service.ts
var AuthService = class _AuthService extends AuthApiBase {
  http = inject(HttpClient);
  register(data) {
    return this.http.post(AuthEndpoints.REGISTER, data);
  }
  login(data) {
    return this.http.post(AuthEndpoints.LOGIN, data);
  }
  changePassword(data) {
    return this.http.patch(AuthEndpoints.CHANGE_PASSWORD, data);
  }
  deleteMyAccount() {
    return this.http.delete(AuthEndpoints.DELETE_MY_ACCOUNT);
  }
  uploadProfilePhoto(data) {
    return this.http.put(AuthEndpoints.UPLOAD_PROFILE_PHOTO, data);
  }
  changeUserRole(data) {
    return this.http.patch(AuthEndpoints.CHANGE_USER_ROLE, data);
  }
  editProfile(data) {
    return this.http.put(AuthEndpoints.EDIT_PROFILE, data);
  }
  logout() {
    return this.http.get(AuthEndpoints.LOGOUT);
  }
  profileData() {
    return this.http.get(AuthEndpoints.PROFILE_DATA);
  }
  forgotPassword(data) {
    return this.http.post(AuthEndpoints.FORGOT_PASSWORD, data);
  }
  verifyOtp(data) {
    return this.http.post(AuthEndpoints.VERIFY_OTP, data);
  }
  resetPassword(data) {
    return this.http.put(AuthEndpoints.RESET_PASSWORD, data);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AuthService_BaseFactory;
    return function AuthService_Factory(__ngFactoryType__) {
      return (\u0275AuthService_BaseFactory || (\u0275AuthService_BaseFactory = \u0275\u0275getInheritedFactory(_AuthService)))(__ngFactoryType__ || _AuthService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// auth/src/lib/auth/enums/auth-routes.ts
var AuthRoutes = {
  root: "auth",
  login: "login",
  register: "register",
  forgotPassword: "forgot-password",
  verifyOtp: "verify-otp",
  resetPassword: "reset-password"
};

// auth/src/lib/auth.routes.ts
var authRoutes = [
  {
    path: AuthRoutes.login
  },
  {
    path: AuthRoutes.register
  },
  {
    path: AuthRoutes.forgotPassword
  },
  {
    path: "",
    redirectTo: AuthRoutes.login,
    pathMatch: "full"
  }
];

// apps/angular-c4-team3/src/app/shared/components/decorated-title/decorated-title.component.ts
function DecoratedTitleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
  }
}
var DecoratedTitleComponent = class _DecoratedTitleComponent {
  title = input("", ...ngDevMode ? [{ debugName: "title" }] : []);
  static \u0275fac = function DecoratedTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DecoratedTitleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DecoratedTitleComponent, selectors: [["app-decorated-title"]], inputs: { title: [1, "title"] }, decls: 1, vars: 1, consts: [[1, "mb-7", "text-maroon-700", "dark:text-soft-pink-300", "text-center", "text-5xl", "pb-4", "border-b", "border-zinc-200", "font-edwardian", "rtl:font-zain"]], template: function DecoratedTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DecoratedTitleComponent_Conditional_0_Template, 2, 1, "p", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.title() ? 0 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecoratedTitleComponent, [{
    type: Component,
    args: [{ selector: "app-decorated-title", imports: [], template: '@if (title()) {\n  <p\n    class="mb-7 text-maroon-700 dark:text-soft-pink-300 text-center text-5xl pb-4 border-b border-zinc-200 font-edwardian rtl:font-zain"\n  >\n    {{ title() }}\n  </p>\n}\n' }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DecoratedTitleComponent, { className: "DecoratedTitleComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/decorated-title/decorated-title.component.ts", lineNumber: 9 });
})();

export {
  AuthService,
  DecoratedTitleComponent
};
//# sourceMappingURL=chunk-OUJ4CZFI.js.map
