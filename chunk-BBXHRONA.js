import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MW4S3Q6I.js";

// apps/angular-c4-team3/src/app/features/auth/services/auth.ts
var AuthService = class _AuthService {
  http;
  baseUrl = "https://flower.elevateegy.com/api/v1/auth";
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(http) {
    this.http = http;
  }
  login(payload) {
    return this.http.post(`${this.baseUrl}/signin`, payload);
  }
  register(payload) {
    return this.http.post(`${this.baseUrl}/signup`, payload);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-BBXHRONA.js.map
