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
  ReactiveFormsModule,
  RequiredValidator
} from "./chunk-VSLF65Y7.js";
import {
  Component,
  Input,
  NgTemplateOutlet,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MW4S3Q6I.js";

// apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component.ts
function InputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-label", 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.label())("for", ctx_r0.id())("disabled", ctx_r0.disabled())("error", !!((tmp_4_0 = ctx_r0.errorMessages()) == null ? null : tmp_4_0.length));
  }
}
function InputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.endIconTemplate());
  }
}
function InputComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
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
var InputComponent = class _InputComponent {
  controlContainer = inject(ControlContainer);
  endIconTemplate = input(null, ...ngDevMode ? [{ debugName: "endIconTemplate" }] : []);
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : []);
  fieldControlName = input.required(...ngDevMode ? [{ debugName: "fieldControlName" }] : []);
  placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  label = input("", ...ngDevMode ? [{ debugName: "label" }] : []);
  type = input("text", ...ngDevMode ? [{ debugName: "type" }] : []);
  invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : []);
  required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
  inputClass = input(...ngDevMode ? [void 0, { debugName: "inputClass" }] : []);
  labelClass = input(...ngDevMode ? [void 0, { debugName: "labelClass" }] : []);
  autocomplete = input("off", ...ngDevMode ? [{ debugName: "autocomplete" }] : []);
  error = input(false, ...ngDevMode ? [{ debugName: "error" }] : []);
  errorMessages = input(...ngDevMode ? [void 0, { debugName: "errorMessages" }] : []);
  defaultClass = signal(FormDefaultClasses.input.default, ...ngDevMode ? [{ debugName: "defaultClass" }] : []);
  errorClass = signal(FormDefaultClasses.input.error, ...ngDevMode ? [{ debugName: "errorClass" }] : []);
  value = signal("", ...ngDevMode ? [{ debugName: "value" }] : []);
  get parentFormGroup() {
    return this.controlContainer.control;
  }
  get control() {
    return this.parentFormGroup.get(this.fieldControlName());
  }
  name = computed(() => this.fieldControlName() || this.id(), ...ngDevMode ? [{ debugName: "name" }] : []);
  disabled = computed(() => this.control.disabled ?? false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  defaultInputClass = computed(() => this.errorMessages()?.length ? this.errorClass() : this.defaultClass(), ...ngDevMode ? [{ debugName: "defaultInputClass" }] : []);
  static \u0275fac = function InputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputComponent, selectors: [["app-input"]], inputs: { endIconTemplate: [1, "endIconTemplate"], id: [1, "id"], fieldControlName: [1, "fieldControlName"], placeholder: [1, "placeholder"], label: [1, "label"], type: [1, "type"], invalid: [1, "invalid"], required: [1, "required"], inputClass: [1, "inputClass"], labelClass: [1, "labelClass"], autocomplete: [1, "autocomplete"], error: [1, "error"], errorMessages: [1, "errorMessages"] }, features: [\u0275\u0275ProvidersFeature([], [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ])], decls: 6, vars: 14, consts: [[1, "flex", "flex-col", "gap-[0.375rem]", "w-full"], [3, "text", "for", "disabled", "error"], [1, "relative"], ["pInputText", "", 3, "type", "id", "name", "placeholder", "value", "disabled", "required", "formControlName", "autocomplete"], [3, "ngTemplateOutlet"], [1, "text-red-500", "text-xs", "font-normal"]], template: function InputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, InputComponent_Conditional_1_Template, 1, 4, "app-label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "input", 3);
      \u0275\u0275conditionalCreate(4, InputComponent_Conditional_4_Template, 1, 1, "ng-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, InputComponent_Conditional_5_Template, 2, 1, "p", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_12_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.inputClass() ?? ctx.defaultInputClass());
      \u0275\u0275property("type", ctx.type())("id", ctx.id())("name", ctx.name())("placeholder", ctx.placeholder())("value", ctx.value())("disabled", ctx.disabled())("required", ctx.required())("formControlName", ctx.fieldControlName())("autocomplete", ctx.autocomplete());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.endIconTemplate() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_12_0 = ctx.errorMessages()) == null ? null : tmp_12_0.length) ? 5 : -1);
    }
  }, dependencies: [
    InputTextModule,
    InputText,
    LabelComponent,
    NgTemplateOutlet,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    FormControlName
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{ selector: "app-input", imports: [
      InputTextModule,
      LabelComponent,
      NgTemplateOutlet,
      ReactiveFormsModule
    ], viewProviders: [
      {
        provide: ControlContainer,
        useFactory: () => inject(ControlContainer, { skipSelf: true })
      }
    ], template: '<div class="flex flex-col gap-[0.375rem] w-full">\n  @if (label()) {\n    <app-label\n      [text]="label()"\n      [for]="id()"\n      [disabled]="disabled()"\n      [error]="!!errorMessages()?.length"\n    />\n  }\n\n  <div class="relative">\n    <input\n      pInputText\n      [type]="type()"\n      [id]="id()"\n      [name]="name()"\n      [placeholder]="placeholder()"\n      [value]="value()"\n      [disabled]="disabled()"\n      [required]="required()"\n      [formControlName]="fieldControlName()"\n      [autocomplete]="autocomplete()"\n      [class]="inputClass() ?? defaultInputClass()"\n    />\n\n    @if (endIconTemplate()) {\n      <ng-container [ngTemplateOutlet]="endIconTemplate()" />\n    }\n  </div>\n\n  @if (errorMessages()?.length) {\n    <p class="text-red-500 text-xs font-normal">{{ errorMessages()?.[0] }}</p>\n  }\n</div>\n' }]
  }], null, { endIconTemplate: [{ type: Input, args: [{ isSignal: true, alias: "endIconTemplate", required: false }] }], id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], fieldControlName: [{ type: Input, args: [{ isSignal: true, alias: "fieldControlName", required: true }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], invalid: [{ type: Input, args: [{ isSignal: true, alias: "invalid", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], inputClass: [{ type: Input, args: [{ isSignal: true, alias: "inputClass", required: false }] }], labelClass: [{ type: Input, args: [{ isSignal: true, alias: "labelClass", required: false }] }], autocomplete: [{ type: Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], errorMessages: [{ type: Input, args: [{ isSignal: true, alias: "errorMessages", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputComponent, { className: "InputComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component.ts", lineNumber: 33 });
})();

export {
  InputComponent
};
//# sourceMappingURL=chunk-ZW7ESYUU.js.map
