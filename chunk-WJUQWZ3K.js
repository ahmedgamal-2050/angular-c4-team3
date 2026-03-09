import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MW4S3Q6I.js";

// apps/angular-c4-team3/src/app/features/auth/services/FormValidationService.ts
var FormValidationService = class _FormValidationService {
  /**
   * Get error messages for a form control
   * @param control - AbstractControl (FormControl)
   * @param messages - Object with error keys and messages
   * @returns string[]
   */
  getErrors(control, messages) {
    if (!control || !(control.touched || control.dirty)) {
      return [];
    }
    const errors = [];
    const controlErrors = control.errors;
    if (!controlErrors)
      return errors;
    for (const key in controlErrors) {
      if (messages[key]) {
        errors.push(messages[key]);
      }
    }
    return errors;
  }
  static \u0275fac = function FormValidationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormValidationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormValidationService, factory: _FormValidationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormValidationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  FormValidationService
};
//# sourceMappingURL=chunk-WJUQWZ3K.js.map
