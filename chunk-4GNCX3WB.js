import {
  FormDefaultClasses,
  LabelComponent
} from "./chunk-OOG2NZWG.js";
import {
  InputText,
  InputTextModule
} from "./chunk-5MDQ6W3U.js";
import {
  ControlContainer,
  DefaultValueAccessor,
  FormControlName,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-VSLF65Y7.js";
import {
  Eye,
  EyeOff,
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-JJ5YZZNZ.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MW4S3Q6I.js";

// apps/angular-c4-team3/src/app/shared/components/form-components/password/password.component.ts
function PasswordComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-label", 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.label())("for", ctx_r0.id())("disabled", ctx_r0.disabled())("error", !!((tmp_4_0 = ctx_r0.errorMessages()) == null ? null : tmp_4_0.length));
  }
}
function PasswordComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.errorMessages()) == null ? null : tmp_1_0[0]);
  }
}
var PasswordComponent = class _PasswordComponent {
  controlContainer = inject(ControlContainer);
  Eye = Eye;
  EyeOff = EyeOff;
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : []);
  fieldControlName = input.required(...ngDevMode ? [{ debugName: "fieldControlName" }] : []);
  placeholder = input("********", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  label = input("", ...ngDevMode ? [{ debugName: "label" }] : []);
  required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
  errorMessages = input(...ngDevMode ? [void 0, { debugName: "errorMessages" }] : []);
  defaultClass = signal(FormDefaultClasses.input.default, ...ngDevMode ? [{ debugName: "defaultClass" }] : []);
  errorClass = signal(FormDefaultClasses.input.error, ...ngDevMode ? [{ debugName: "errorClass" }] : []);
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  get parentFormGroup() {
    return this.controlContainer.control;
  }
  get control() {
    return this.parentFormGroup.get(this.fieldControlName());
  }
  name = computed(() => this.fieldControlName() || this.id(), ...ngDevMode ? [{ debugName: "name" }] : []);
  disabled = computed(() => this.control.disabled ?? false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  inputType = computed(() => this.showPassword() ? "text" : "password", ...ngDevMode ? [{ debugName: "inputType" }] : []);
  inputClass = computed(() => this.errorMessages()?.length ? this.errorClass() : this.defaultClass(), ...ngDevMode ? [{ debugName: "inputClass" }] : []);
  toggleVisibility() {
    this.showPassword.update((value) => !value);
  }
  static \u0275fac = function PasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordComponent, selectors: [["app-password"]], inputs: { id: [1, "id"], fieldControlName: [1, "fieldControlName"], placeholder: [1, "placeholder"], label: [1, "label"], required: [1, "required"], errorMessages: [1, "errorMessages"] }, features: [\u0275\u0275ProvidersFeature([], [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ])], decls: 7, vars: 12, consts: [[1, "flex", "flex-col", "gap-[0.375rem]", "w-full"], [3, "text", "for", "disabled", "error"], [1, "relative"], ["pInputText", "", 3, "type", "id", "name", "placeholder", "disabled", "formControlName"], ["type", "button", 1, "absolute", "end-3", "top-1/2", "-translate-y-1/2", "text-zinc-400", "hover:text-zinc-600", "dark:text-zinc-500", "dark:hover:text-zinc-300", "focus:outline-hidden", 3, "click"], [1, "size-5", 3, "name"], [1, "text-red-500", "text-xs", "font-normal"]], template: function PasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PasswordComponent_Conditional_1_Template, 1, 4, "app-label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "input", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function PasswordComponent_Template_button_click_4_listener() {
        return ctx.toggleVisibility();
      });
      \u0275\u0275element(5, "lucide-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, PasswordComponent_Conditional_6_Template, 2, 1, "p", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.inputClass());
      \u0275\u0275property("type", ctx.inputType())("id", ctx.id())("name", ctx.name())("placeholder", ctx.placeholder())("disabled", ctx.disabled())("formControlName", ctx.fieldControlName());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Hide password" : "Show password");
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.showPassword() ? ctx.EyeOff : ctx.Eye);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.errorMessages()) == null ? null : tmp_10_0.length) ? 6 : -1);
    }
  }, dependencies: [
    InputTextModule,
    InputText,
    LabelComponent,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    FormControlName,
    LucideAngularModule,
    LucideAngularComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordComponent, [{
    type: Component,
    args: [{ selector: "app-password", imports: [
      InputTextModule,
      LabelComponent,
      ReactiveFormsModule,
      LucideAngularModule
    ], viewProviders: [
      {
        provide: ControlContainer,
        useFactory: () => inject(ControlContainer, { skipSelf: true })
      }
    ], template: `<div class="flex flex-col gap-[0.375rem] w-full">
  @if (label()) {
    <app-label
      [text]="label()"
      [for]="id()"
      [disabled]="disabled()"
      [error]="!!errorMessages()?.length"
    />
  }

  <div class="relative">
    <input
      pInputText
      [type]="inputType()"
      [id]="id()"
      [name]="name()"
      [placeholder]="placeholder()"
      [disabled]="disabled()"
      [formControlName]="fieldControlName()"
      [class]="inputClass()"
    />

    <button
      type="button"
      (click)="toggleVisibility()"
      class="absolute end-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 focus:outline-hidden"
      [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'"
    >
      <lucide-icon [name]="showPassword() ? EyeOff : Eye" class="size-5" />
    </button>
  </div>

  @if (errorMessages()?.length) {
    <p class="text-red-500 text-xs font-normal">{{ errorMessages()?.[0] }}</p>
  }
</div>
` }]
  }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], fieldControlName: [{ type: Input, args: [{ isSignal: true, alias: "fieldControlName", required: true }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], errorMessages: [{ type: Input, args: [{ isSignal: true, alias: "errorMessages", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordComponent, { className: "PasswordComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/form-components/password/password.component.ts", lineNumber: 30 });
})();

export {
  PasswordComponent
};
//# sourceMappingURL=chunk-4GNCX3WB.js.map
