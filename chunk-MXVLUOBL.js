import {
  PasswordComponent
} from "./chunk-4GNCX3WB.js";
import {
  AuthService
} from "./chunk-BBXHRONA.js";
import {
  FormValidationService
} from "./chunk-WJUQWZ3K.js";
import "./chunk-OOG2NZWG.js";
import {
  ButtonComponent
} from "./chunk-7XJLG7MZ.js";
import "./chunk-5MDQ6W3U.js";
import "./chunk-ZUKZCXFN.js";
import {
  APP_STORAGE
} from "./chunk-ET6XCIB7.js";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VSLF65Y7.js";
import "./chunk-BX323W7Q.js";
import "./chunk-JJ5YZZNZ.js";
import {
  TranslocoPipe
} from "./chunk-YBU5AOQC.js";
import {
  Component,
  Subscription,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MW4S3Q6I.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/features/auth/pages/set-password/set-password.component.ts
var SetPasswordComponent = class _SetPasswordComponent {
  _AuthService = inject(AuthService);
  _FormValidationService = inject(FormValidationService);
  // Reactive form
  form;
  // Subscription container
  subscriptions = new Subscription();
  // Computed properties for form errors
  passwordErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["password"], {
    required: "Password is required.",
    minlength: "Password must be at least 8 characters."
  }), ...ngDevMode ? [{ debugName: "passwordErrors" }] : []);
  confirmPasswordErrors = computed(() => {
    const control = this.form.controls["confirmPassword"];
    const errors = this._FormValidationService.getErrors(control, {
      required: "Confirm password is required."
    });
    if (this.form.hasError("passwordMismatch") && control.touched) {
      return ["Passwords do not match."];
    }
    return errors;
  }, ...ngDevMode ? [{ debugName: "confirmPasswordErrors" }] : []);
  /** Custom validator to check if password and confirmPassword match */
  passwordMatchValidator(control) {
    const formGroup = control;
    const password = formGroup.get("password")?.value;
    const confirmPassword = formGroup.get("confirmPassword")?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /** Initialize reactive form with validators */
  initializeForm() {
    this.form = new FormGroup({
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    });
    this.form.setValidators(this.passwordMatchValidator);
  }
  /** Submit login form */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = __spreadValues({}, this.form.value);
    const sub = this._AuthService.login(payload).subscribe({
      next: (res) => {
        localStorage.setItem(APP_STORAGE.token, res.token);
        localStorage.setItem(APP_STORAGE.user, JSON.stringify(res.user));
        console.log("Login successful:", res);
      },
      error: (err) => {
        console.error("Login failed:", err);
      }
    });
    this.subscriptions.add(sub);
  }
  static \u0275fac = function SetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetPasswordComponent, selectors: [["app-set-password"]], decls: 25, vars: 38, consts: [[1, "text-zinc-800", "font-semibold", "text-2xl", "dark:text-soft-pink-300"], [1, "text-zinc-800", "font-normal", "text-base", "dark:text-white"], [1, "border-b", "py-1", "border-zinc-200"], ["novalidate", "", 1, "mt-10", "w-full", "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], ["id", "password", "type", "password", "fieldControlName", "password", 3, "label", "placeholder", "required", "errorMessages"], ["id", "confirmPassword", "type", "password", "fieldControlName", "confirmPassword", 3, "label", "placeholder", "required", "errorMessages"], [1, "w-full", "mt-5"], [3, "label", "type", "disabled"], [1, "border-b", "py-3", "border-zinc-200"], [1, "flex", "my-5", "gap-1", "justify-center"], [1, "text-zinc-800", "dark:text-zinc-200", "font-bold", "text-sm"], [1, "text-maroon-700", "dark:text-soft-pink-300", "font-bold", "text-sm"]], template: function SetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 2);
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function SetPasswordComponent_Template_form_ngSubmit_7_listener() {
        return ctx.submit();
      });
      \u0275\u0275element(8, "app-password", 4);
      \u0275\u0275pipe(9, "transloco");
      \u0275\u0275pipe(10, "transloco");
      \u0275\u0275element(11, "app-password", 5);
      \u0275\u0275pipe(12, "transloco");
      \u0275\u0275pipe(13, "transloco");
      \u0275\u0275elementStart(14, "div", 6);
      \u0275\u0275element(15, "shared-ui-button", 7);
      \u0275\u0275pipe(16, "transloco");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "div", 8);
      \u0275\u0275elementStart(18, "div", 9)(19, "p", 10);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 11);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "transloco");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 20, "create_password"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 22, "password_paragraph"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(9, 24, "password")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(10, 26, "password_placeholder")))("required", true)("errorMessages", ctx.passwordErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(12, 28, "confirm_password")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(13, 30, "confirm_password_placeholder")))("required", true)("errorMessages", ctx.confirmPasswordErrors());
      \u0275\u0275advance(4);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 32, "reset_password"))("type", "submit")("disabled", !ctx.form.valid);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 34, "need_help"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 36, "contact_us"), " ");
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    FormsModule,
    PasswordComponent,
    ButtonComponent,
    TranslocoPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-set-password", imports: [
      ReactiveFormsModule,
      FormsModule,
      PasswordComponent,
      TranslocoPipe,
      ButtonComponent
    ], template: `<!-- Page title -->
<p class="text-zinc-800 font-semibold  text-2xl dark:text-soft-pink-300">{{'create_password' | transloco}}</p>
<p class="text-zinc-800 font-normal text-base dark:text-white">{{'password_paragraph' | transloco}}</p>


<!-- Divider -->
<div class="border-b py-1 border-zinc-200"></div>
<!-- Login form -->
<form
  class="mt-10 w-full flex flex-col gap-4"
  [formGroup]="form"
  (ngSubmit)="submit()"
  novalidate
>

  <!-- Password field -->
  <app-password
    id="password"
    type="password"
    label="{{ 'password' | transloco }}"
    placeholder="{{ 'password_placeholder' | transloco }}"
    [required]="true"
    fieldControlName="password"
    [errorMessages]="passwordErrors()"
  />


     <!-- Confirm Password -->
    <app-password
      id="confirmPassword"
      type="password"
      label="{{ 'confirm_password' | transloco }}"
      placeholder="{{ 'confirm_password_placeholder' | transloco }}"
      [required]="true"
      fieldControlName="confirmPassword"
      [errorMessages]="confirmPasswordErrors()"
    />


  <!-- Submit button -->
  <div class="w-full mt-5">
    <shared-ui-button
      [label]="'reset_password' | transloco"
      [type]="'submit'"
      [disabled]="!form.valid"
    ></shared-ui-button>
  </div>
</form>

<!-- Divider -->
<div class="border-b py-3 border-zinc-200"></div>

<!-- No account / Create account link -->
<div class="flex my-5 gap-1 justify-center">
  <p class="text-zinc-800 dark:text-zinc-200 font-bold text-sm">
    {{ 'need_help' | transloco }}
  </p>
  <a
    class="text-maroon-700 dark:text-soft-pink-300 font-bold text-sm"
  >
    {{ 'contact_us' | transloco }}
  </a>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetPasswordComponent, { className: "SetPasswordComponent", filePath: "apps/angular-c4-team3/src/app/features/auth/pages/set-password/set-password.component.ts", lineNumber: 41 });
})();
export {
  SetPasswordComponent
};
//# sourceMappingURL=chunk-MXVLUOBL.js.map
