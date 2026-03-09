import {
  InputComponent
} from "./chunk-ZW7ESYUU.js";
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
  APP_ROUTES
} from "./chunk-XS4O3NDQ.js";
import {
  Router,
  RouterLink
} from "./chunk-DVFFD4F4.js";
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
  ɵɵpureFunction2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MW4S3Q6I.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/features/auth/pages/forget-password/forget-password.component.ts
var _c0 = (a0, a1) => ["/", a0, a1];
var ForgetPasswordComponent = class _ForgetPasswordComponent {
  _AuthService = inject(AuthService);
  _FormValidationService = inject(FormValidationService);
  _Router = inject(Router);
  APP_ROUTES = APP_ROUTES;
  // Reactive form
  form;
  // Subscription container
  subscriptions = new Subscription();
  // Computed properties for form errors
  emailErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["email"], {
    required: "Email is required.",
    email: "Enter a valid email address."
  }), ...ngDevMode ? [{ debugName: "emailErrors" }] : []);
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /** Initialize reactive form with validators */
  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email])
    });
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
        console.log("Login successful:", res);
        this._Router.navigate(["/", APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.SET_PASSWORD]);
      },
      error: (err) => {
        console.error("Login failed:", err);
      }
    });
    this.subscriptions.add(sub);
  }
  static \u0275fac = function ForgetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 22, vars: 32, consts: [[1, "text-zinc-800", "font-semibold", "text-2xl", "dark:text-soft-pink-300"], [1, "text-zinc-800", "font-normal", "text-base", "dark:text-white"], [1, "border-b", "py-1", "border-zinc-200"], ["novalidate", "", 1, "mt-10", "w-full", "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], ["id", "email", "type", "email", "fieldControlName", "email", 3, "label", "placeholder", "required", "errorMessages"], [1, "w-full", "mt-5"], [3, "clicked", "label", "type", "disabled"], [1, "border-b", "py-3", "border-zinc-200"], [1, "flex", "my-5", "gap-1", "justify-center"], [1, "text-zinc-800", "dark:text-zinc-200", "font-bold", "text-sm"], [1, "text-maroon-700", "dark:text-soft-pink-300", "font-bold", "text-sm", 3, "routerLink"]], template: function ForgetPasswordComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("ngSubmit", function ForgetPasswordComponent_Template_form_ngSubmit_7_listener() {
        return ctx.submit();
      });
      \u0275\u0275element(8, "app-input", 4);
      \u0275\u0275pipe(9, "transloco");
      \u0275\u0275pipe(10, "transloco");
      \u0275\u0275elementStart(11, "div", 5)(12, "shared-ui-button", 6);
      \u0275\u0275pipe(13, "transloco");
      \u0275\u0275listener("clicked", function ForgetPasswordComponent_Template_shared_ui_button_clicked_12_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(14, "div", 7);
      \u0275\u0275elementStart(15, "div", 8)(16, "p", 9);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 10);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "transloco");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 15, "forgot_password"), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 17, "forget_paragraph"), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(9, 19, "email")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(10, 21, "email_placeholder")))("required", true)("errorMessages", ctx.emailErrors());
      \u0275\u0275advance(4);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(13, 23, "continue"))("type", "submit")("disabled", !ctx.form.valid);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 25, "no_account"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(29, _c0, ctx.APP_ROUTES.AUTH.ROOT, ctx.APP_ROUTES.AUTH.REGISTER));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 27, "create_account"), " ");
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    FormsModule,
    InputComponent,
    RouterLink,
    ButtonComponent,
    TranslocoPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forget-password", imports: [
      ReactiveFormsModule,
      FormsModule,
      InputComponent,
      RouterLink,
      TranslocoPipe,
      ButtonComponent
    ], template: `<!-- Page title -->
<p class="text-zinc-800 font-semibold text-2xl dark:text-soft-pink-300">
  {{ 'forgot_password' | transloco }}
</p>
<p class="text-zinc-800 font-normal text-base dark:text-white">
  {{ 'forget_paragraph' | transloco }}
</p>

<!-- Divider -->
<div class="border-b py-1 border-zinc-200"></div>
<!-- Login form -->
<form
  class="mt-10 w-full flex flex-col gap-4"
  [formGroup]="form"
  (ngSubmit)="submit()"
  novalidate
>
  <!-- Email field -->
  <app-input
    id="email"
    type="email"
    label="{{ 'email' | transloco }}"
    placeholder="{{ 'email_placeholder' | transloco }}"
    [required]="true"
    fieldControlName="email"
    [errorMessages]="emailErrors()"
  />

  <!-- Submit button -->
  <div class="w-full mt-5">
    <shared-ui-button
      [label]="'continue' | transloco"
      [type]="'submit'"
      [disabled]="!form.valid"
      (clicked)="submit()"
    ></shared-ui-button>
  </div>
</form>

<!-- Divider -->
<div class="border-b py-3 border-zinc-200"></div>

<!-- No account / Create account link -->
<div class="flex my-5 gap-1 justify-center">
  <p class="text-zinc-800 dark:text-zinc-200 font-bold text-sm">
    {{ 'no_account' | transloco }}
  </p>
  <a
    [routerLink]="['/', APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.REGISTER]"
    class="text-maroon-700 dark:text-soft-pink-300 font-bold text-sm"
  >
    {{ 'create_account' | transloco }}
  </a>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgetPasswordComponent, { className: "ForgetPasswordComponent", filePath: "apps/angular-c4-team3/src/app/features/auth/pages/forget-password/forget-password.component.ts", lineNumber: 40 });
})();
export {
  ForgetPasswordComponent
};
//# sourceMappingURL=chunk-MOHMR5DG.js.map
