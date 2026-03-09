import {
  AuthService,
  DecoratedTitleComponent
} from "./chunk-OUJ4CZFI.js";
import {
  InputComponent
} from "./chunk-ZW7ESYUU.js";
import {
  PasswordComponent
} from "./chunk-4GNCX3WB.js";
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

// apps/angular-c4-team3/src/app/features/auth/pages/login-page/login-page.ts
var _c0 = (a0, a1) => ["/", a0, a1];
var LoginPage = class _LoginPage {
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
  passwordErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["password"], {
    required: "Password is required.",
    minlength: "Password must be at least 8 characters."
  }), ...ngDevMode ? [{ debugName: "passwordErrors" }] : []);
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /** Initialize reactive form with validators */
  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
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
        localStorage.setItem(APP_STORAGE.token, res.token);
        localStorage.setItem(APP_STORAGE.user, JSON.stringify(res.user));
        this._Router.navigate(["/", APP_ROUTES.LANDING.ROOT, APP_ROUTES.LANDING.HOME]);
      },
      error: (err) => {
        console.error("Login failed:", err);
      }
    });
    this.subscriptions.add(sub);
  }
  static \u0275fac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login-page"]], decls: 31, vars: 49, consts: [[3, "title"], ["novalidate", "", 1, "mt-10", "w-full", "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], ["id", "email", "type", "email", "fieldControlName", "email", 3, "label", "placeholder", "required", "errorMessages"], ["id", "password", "type", "password", "fieldControlName", "password", 3, "label", "placeholder", "required", "errorMessages"], [1, "text-maroon-700", "dark:text-soft-pink-300", "text-sm", "font-semibold", "flex", "justify-end", 3, "routerLink"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "checkbox", "id", "rememberMe", "onchange", "this.nextElementSibling.querySelector('span').classList.toggle('hidden')", 1, "hidden"], [1, "size-6", "border-2", "border-maroon-700", "dark:border-soft-pink-300", "rounded-lg", "flex", "items-center", "justify-center"], [1, "text-maroon-700", "dark:text-soft-pink-300", "text-xl", "font-bold", "hidden", "leading-none"], [1, "text-zinc-800", "dark:text-zinc-200", "text-sm"], [1, "w-full", "mt-5"], [3, "label", "type", "disabled"], [1, "border-b", "py-3", "border-zinc-200"], [1, "flex", "my-5", "gap-1"], [1, "text-zinc-800", "dark:text-zinc-200", "font-bold", "text-sm"], [1, "text-maroon-700", "dark:text-soft-pink-300", "font-bold", "text-sm", 3, "routerLink"]], template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-decorated-title", 0);
      \u0275\u0275pipe(1, "transloco");
      \u0275\u0275elementStart(2, "form", 1);
      \u0275\u0275listener("ngSubmit", function LoginPage_Template_form_ngSubmit_2_listener() {
        return ctx.submit();
      });
      \u0275\u0275element(3, "app-input", 2);
      \u0275\u0275pipe(4, "transloco");
      \u0275\u0275pipe(5, "transloco");
      \u0275\u0275element(6, "app-password", 3);
      \u0275\u0275pipe(7, "transloco");
      \u0275\u0275pipe(8, "transloco");
      \u0275\u0275elementStart(9, "a", 4);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 5);
      \u0275\u0275element(13, "input", 6);
      \u0275\u0275elementStart(14, "div", 7)(15, "span", 8);
      \u0275\u0275text(16, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "transloco");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10);
      \u0275\u0275element(21, "shared-ui-button", 11);
      \u0275\u0275pipe(22, "transloco");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 12);
      \u0275\u0275elementStart(24, "div", 13)(25, "p", 14);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 15);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "transloco");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 23, "welcome_back"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(4, 25, "email")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(5, 27, "email_placeholder")))("required", true)("errorMessages", ctx.emailErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 29, "password")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(8, 31, "password_placeholder")))("required", true)("errorMessages", ctx.passwordErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(43, _c0, ctx.APP_ROUTES.AUTH.ROOT, ctx.APP_ROUTES.AUTH.FORGET_PASSWORD));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 33, "forgot_password"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 35, "remember_me"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(22, 37, "login"))("type", "submit")("disabled", !ctx.form.valid);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 39, "no_account"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(46, _c0, ctx.APP_ROUTES.AUTH.ROOT, ctx.APP_ROUTES.AUTH.REGISTER));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 41, "create_account"), " ");
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    FormsModule,
    InputComponent,
    PasswordComponent,
    RouterLink,
    ButtonComponent,
    DecoratedTitleComponent,
    TranslocoPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login-page", imports: [
      ReactiveFormsModule,
      FormsModule,
      InputComponent,
      PasswordComponent,
      RouterLink,
      TranslocoPipe,
      ButtonComponent,
      DecoratedTitleComponent
    ], standalone: true, template: `<!-- Page title -->
<app-decorated-title [title]="'welcome_back' | transloco" />

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

  <!-- Forgot password link -->
  <a
    class="text-maroon-700 dark:text-soft-pink-300 text-sm font-semibold flex justify-end"
    [routerLink]="['/', APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.FORGET_PASSWORD]"
  >
    {{ 'forgot_password' | transloco }}
  </a>

  <!-- Remember me checkbox -->
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      class="hidden"
      id="rememberMe"
      onchange="this.nextElementSibling.querySelector('span').classList.toggle('hidden')"
    />

    <!-- Custom checkbox visual -->
    <div
      class="size-6 border-2 border-maroon-700 dark:border-soft-pink-300 rounded-lg flex items-center justify-center"
    >
      <span
        class="text-maroon-700 dark:text-soft-pink-300 text-xl font-bold hidden leading-none"
        >\u2713</span
      >
    </div>

    <!-- Remember me text -->
    <span class="text-zinc-800 dark:text-zinc-200 text-sm">
      {{ 'remember_me' | transloco }}
    </span>
  </label>

  <!-- Submit button -->
  <div class="w-full mt-5">
    <shared-ui-button
      [label]="'login' | transloco"
      [type]="'submit'"
      [disabled]="!form.valid"
    ></shared-ui-button>
  </div>
</form>

<!-- Divider -->
<div class="border-b py-3 border-zinc-200"></div>

<!-- No account / Create account link -->
<div class="flex my-5 gap-1">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "apps/angular-c4-team3/src/app/features/auth/pages/login-page/login-page.ts", lineNumber: 47 });
})();
export {
  LoginPage
};
//# sourceMappingURL=chunk-TMROSRRN.js.map
