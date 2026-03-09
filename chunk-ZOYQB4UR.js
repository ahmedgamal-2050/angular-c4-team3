import {
  Select,
  SelectModule
} from "./chunk-XLF7ASOG.js";
import "./chunk-5F2C77Q4.js";
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
import {
  FormDefaultClasses,
  LabelComponent,
  PhonePT,
  SelectPT
} from "./chunk-OOG2NZWG.js";
import {
  ButtonComponent
} from "./chunk-7XJLG7MZ.js";
import {
  InputText,
  InputTextModule
} from "./chunk-5MDQ6W3U.js";
import "./chunk-ZUKZCXFN.js";
import "./chunk-U2YA5TFS.js";
import "./chunk-FBY6JISU.js";
import {
  APP_STORAGE
} from "./chunk-ET6XCIB7.js";
import {
  ControlContainer,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NG_VALIDATORS,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VSLF65Y7.js";
import {
  $t,
  PrimeTemplate,
  xt
} from "./chunk-BX323W7Q.js";
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
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Subscription,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  isPlatformBrowser,
  linkedSignal,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MW4S3Q6I.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/shared/components/form-components/select/select.component.ts
function SelectComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-label", 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.label())("for", ctx_r0.id())("disabled", ctx_r0.disabled())("error", !!((tmp_4_0 = ctx_r0.errorMessages()) == null ? null : tmp_4_0.length));
  }
}
function SelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
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
var SelectComponent = class _SelectComponent {
  controlContainer = inject(ControlContainer);
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : []);
  fieldControlName = input.required(...ngDevMode ? [{ debugName: "fieldControlName" }] : []);
  options = input.required(...ngDevMode ? [{ debugName: "options" }] : []);
  optionLabel = input(...ngDevMode ? [void 0, { debugName: "optionLabel" }] : []);
  optionValue = input(...ngDevMode ? [void 0, { debugName: "optionValue" }] : []);
  placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  label = input("", ...ngDevMode ? [{ debugName: "label" }] : []);
  required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
  errorMessages = input(...ngDevMode ? [void 0, { debugName: "errorMessages" }] : []);
  defaultClass = signal(FormDefaultClasses.input.default, ...ngDevMode ? [{ debugName: "defaultClass" }] : []);
  errorClass = signal(FormDefaultClasses.input.error, ...ngDevMode ? [{ debugName: "errorClass" }] : []);
  pt = signal(SelectPT, ...ngDevMode ? [{ debugName: "pt" }] : []);
  get parentFormGroup() {
    return this.controlContainer.control;
  }
  get control() {
    return this.parentFormGroup.get(this.fieldControlName());
  }
  name = computed(() => this.fieldControlName() || this.id(), ...ngDevMode ? [{ debugName: "name" }] : []);
  disabled = computed(() => this.control.disabled ?? false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  inputClass = computed(() => this.errorMessages()?.length ? this.errorClass() : this.defaultClass(), ...ngDevMode ? [{ debugName: "inputClass" }] : []);
  static \u0275fac = function SelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], inputs: { id: [1, "id"], fieldControlName: [1, "fieldControlName"], options: [1, "options"], optionLabel: [1, "optionLabel"], optionValue: [1, "optionValue"], placeholder: [1, "placeholder"], label: [1, "label"], required: [1, "required"], errorMessages: [1, "errorMessages"] }, features: [\u0275\u0275ProvidersFeature([], [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ])], decls: 5, vars: 12, consts: [[1, "flex", "flex-col", "gap-[0.375rem]", "w-full"], [3, "text", "for", "disabled", "error"], [1, "relative"], [3, "options", "optionLabel", "optionValue", "placeholder", "formControlName", "id", "inputId", "pt"], [1, "text-red-500", "text-xs", "font-normal"]], template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, SelectComponent_Conditional_1_Template, 1, 4, "app-label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "p-select", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, SelectComponent_Conditional_4_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.inputClass());
      \u0275\u0275property("options", ctx.options())("optionLabel", ctx.optionLabel())("optionValue", ctx.optionValue())("placeholder", ctx.placeholder())("formControlName", ctx.fieldControlName())("id", ctx.id())("inputId", ctx.id())("pt", ctx.pt());
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.errorMessages()) == null ? null : tmp_10_0.length) ? 4 : -1);
    }
  }, dependencies: [SelectModule, Select, LabelComponent, ReactiveFormsModule, NgControlStatus, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{ selector: "app-select", imports: [SelectModule, LabelComponent, ReactiveFormsModule], viewProviders: [
      {
        provide: ControlContainer,
        useFactory: () => inject(ControlContainer, { skipSelf: true })
      }
    ], template: '<div class="flex flex-col gap-[0.375rem] w-full">\n  @if (label()) {\n    <app-label\n      [text]="label()"\n      [for]="id()"\n      [disabled]="disabled()"\n      [error]="!!errorMessages()?.length"\n    />\n  }\n\n  <div class="relative">\n    <p-select\n      [options]="options()"\n      [optionLabel]="optionLabel()"\n      [optionValue]="optionValue()"\n      [placeholder]="placeholder()"\n      [formControlName]="fieldControlName()"\n      [id]="id()"\n      [inputId]="id()"\n      [class]="inputClass()"\n      [pt]="pt()"\n    />\n  </div>\n\n  @if (errorMessages()?.length) {\n    <p class="text-red-500 text-xs font-normal">{{ errorMessages()?.[0] }}</p>\n  }\n</div>\n' }]
  }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], fieldControlName: [{ type: Input, args: [{ isSignal: true, alias: "fieldControlName", required: true }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true }] }], optionLabel: [{ type: Input, args: [{ isSignal: true, alias: "optionLabel", required: false }] }], optionValue: [{ type: Input, args: [{ isSignal: true, alias: "optionValue", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], errorMessages: [{ type: Input, args: [{ isSignal: true, alias: "errorMessages", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/form-components/select/select.component.ts", lineNumber: 24 });
})();

// node_modules/primeng/fesm2022/primeng-keyfilter.mjs
var KEYFILTER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => KeyFilter),
  multi: true
};
var DEFAULT_MASKS = {
  pint: /^[\d]*$/,
  int: /^[-]?[\d]*$/,
  pnum: /^[\d\.]*$/,
  money: /^[\d\.\s,]*$/,
  num: /^[-]?[\d\.]*$/,
  hex: /^[0-9a-f]*$/i,
  email: /^[a-z0-9_\.\-@]*$/i,
  alpha: /^[a-z_]*$/i,
  alphanum: /^[a-z0-9_]*$/i
};
var KEYS = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  BACKSPACE: 8,
  DELETE: 46
};
var SAFARI_KEYS = {
  63234: 37,
  // left
  63235: 39,
  // right
  63232: 38,
  // up
  63233: 40,
  // down
  63276: 33,
  // page up
  63277: 34,
  // page down
  63272: 46,
  // delete
  63273: 36,
  // home
  63275: 35
  // end
};
var KeyFilter = class _KeyFilter {
  document;
  platformId;
  el;
  /**
   * When enabled, instead of blocking keys, input is validated internally to test against the regular expression.
   * @group Props
   */
  pValidateOnly;
  /**
   * Sets the pattern for key filtering.
   * @group Props
   */
  set pattern(_pattern) {
    this._pattern = _pattern;
    if (_pattern instanceof RegExp) {
      this.regex = _pattern;
    } else if (_pattern && _pattern in DEFAULT_MASKS) {
      this.regex = DEFAULT_MASKS[_pattern];
    } else {
      this.regex = /./;
    }
  }
  get pattern() {
    return this._pattern;
  }
  /**
   * Emits a value whenever the ngModel of the component changes.
   * @param {(string | number)} modelValue - Custom model change event.
   * @group Emits
   */
  ngModelChange = new EventEmitter();
  regex = /./;
  _pattern;
  isAndroid;
  lastValue;
  constructor(document, platformId, el) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    if (isPlatformBrowser(this.platformId)) {
      this.isAndroid = $t();
    } else {
      this.isAndroid = false;
    }
  }
  isNavKeyPress(e) {
    let k = e.keyCode;
    k = xt().safari ? SAFARI_KEYS[k] || k : k;
    return k >= 33 && k <= 40 || k == KEYS.RETURN || k == KEYS.TAB || k == KEYS.ESC;
  }
  isSpecialKey(e) {
    let k = e.keyCode || e.charCode;
    return k == 9 || k == 13 || k == 27 || k == 16 || k == 17 || k >= 18 && k <= 20 || xt().opera && !e.shiftKey && (k == 8 || k >= 33 && k <= 35 || k >= 36 && k <= 39 || k >= 44 && k <= 45);
  }
  getKey(e) {
    let k = e.keyCode || e.charCode;
    return xt().safari ? SAFARI_KEYS[k] || k : k;
  }
  getCharCode(e) {
    return e.charCode || e.keyCode || e.which;
  }
  findDelta(value, prevValue) {
    let delta = "";
    for (let i = 0; i < value.length; i++) {
      let str = value.substr(0, i) + value.substr(i + value.length - prevValue.length);
      if (str === prevValue) delta = value.substr(i, value.length - prevValue.length);
    }
    return delta;
  }
  isValidChar(c) {
    return this.regex.test(c);
  }
  isValidString(str) {
    for (let i = 0; i < str.length; i++) {
      if (!this.isValidChar(str.substr(i, 1))) {
        return false;
      }
    }
    return true;
  }
  onInput(e) {
    if (this.isAndroid && !this.pValidateOnly) {
      let val = this.el.nativeElement.value;
      let lastVal = this.lastValue || "";
      let inserted = this.findDelta(val, lastVal);
      let removed = this.findDelta(lastVal, val);
      let pasted = inserted.length > 1 || !inserted && !removed;
      if (pasted) {
        if (!this.isValidString(val)) {
          this.el.nativeElement.value = lastVal;
          this.ngModelChange.emit(lastVal);
        }
      } else if (!removed) {
        if (!this.isValidChar(inserted)) {
          this.el.nativeElement.value = lastVal;
          this.ngModelChange.emit(lastVal);
        }
      }
      val = this.el.nativeElement.value;
      if (this.isValidString(val)) {
        this.lastValue = val;
      }
    }
  }
  onKeyPress(e) {
    if (this.isAndroid || this.pValidateOnly) {
      return;
    }
    let browser = xt();
    let k = this.getKey(e);
    if (browser.mozilla && (e.ctrlKey || e.altKey)) {
      return;
    } else if (k == 17 || k == 18) {
      return;
    }
    if (k == 13) {
      return;
    }
    let c = this.getCharCode(e);
    let cc = String.fromCharCode(c);
    let ok = true;
    if (!browser.mozilla && (this.isSpecialKey(e) || !cc)) {
      return;
    }
    let existingValue = this.el.nativeElement.value || "";
    let combinedValue = existingValue + cc;
    ok = this.regex.test(combinedValue);
    if (!ok) {
      e.preventDefault();
    }
  }
  onPaste(e) {
    let clipboardData = e.clipboardData;
    if (!clipboardData && this.document.defaultView) {
      const windowClipboard = this.document.defaultView.clipboardData;
      if (windowClipboard) {
        clipboardData = {
          getData: (_format) => windowClipboard.getData("text")
        };
      }
    }
    if (clipboardData) {
      let pattern = /\{[0-9]+\}/;
      const pastedText = clipboardData.getData("text");
      if (pattern.test(this.regex.toString())) {
        if (!this.regex.test(pastedText)) {
          e.preventDefault();
          return;
        }
      } else {
        for (let char of pastedText.toString()) {
          if (!this.regex.test(char)) {
            e.preventDefault();
            return;
          }
        }
      }
    }
  }
  validate(_c) {
    if (this.pValidateOnly) {
      let value = this.el.nativeElement.value;
      if (value && !this.regex.test(value)) {
        return {
          validatePattern: false
        };
      }
    }
  }
  static \u0275fac = function KeyFilter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyFilter)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _KeyFilter,
    selectors: [["", "pKeyFilter", ""]],
    hostBindings: function KeyFilter_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function KeyFilter_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("keypress", function KeyFilter_keypress_HostBindingHandler($event) {
          return ctx.onKeyPress($event);
        })("paste", function KeyFilter_paste_HostBindingHandler($event) {
          return ctx.onPaste($event);
        });
      }
    },
    inputs: {
      pValidateOnly: [2, "pValidateOnly", "pValidateOnly", booleanAttribute],
      pattern: [0, "pKeyFilter", "pattern"]
    },
    outputs: {
      ngModelChange: "ngModelChange"
    },
    features: [\u0275\u0275ProvidersFeature([KEYFILTER_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyFilter, [{
    type: Directive,
    args: [{
      selector: "[pKeyFilter]",
      standalone: true,
      providers: [KEYFILTER_VALIDATOR]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }], {
    pValidateOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pattern: [{
      type: Input,
      args: ["pKeyFilter"]
    }],
    ngModelChange: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onKeyPress: [{
      type: HostListener,
      args: ["keypress", ["$event"]]
    }],
    onPaste: [{
      type: HostListener,
      args: ["paste", ["$event"]]
    }]
  });
})();
var KeyFilterModule = class _KeyFilterModule {
  static \u0275fac = function KeyFilterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyFilterModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _KeyFilterModule,
    imports: [KeyFilter],
    exports: [KeyFilter]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyFilterModule, [{
    type: NgModule,
    args: [{
      imports: [KeyFilter],
      exports: [KeyFilter]
    }]
  }], null, null);
})();

// apps/angular-c4-team3/src/app/shared/constants/countries.ts
var COUNTRIES = [
  {
    name: "Egypt",
    code: "EG",
    phone: "+20",
    flag: "https://flagcdn.com/w20/eg.png"
  },
  {
    name: "United States",
    code: "US",
    phone: "+1",
    flag: "https://flagcdn.com/w20/us.png"
  },
  {
    name: "United Kingdom",
    code: "UK",
    phone: "+44",
    flag: "https://flagcdn.com/w20/gb.png"
  }
];

// apps/angular-c4-team3/src/app/shared/components/form-components/phone/phone.component.ts
var _c0 = () => ({ standalone: true });
function PhoneComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-label", 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.label())("for", ctx_r0.id())("disabled", ctx_r0.disabled())("error", !!((tmp_4_0 = ctx_r0.errorMessages()) == null ? null : tmp_4_0.length));
  }
}
function PhoneComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r2.flag, \u0275\u0275sanitizeUrl)("alt", country_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", country_r2.code, " (", country_r2.phone, ")");
  }
}
function PhoneComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r3.flag, \u0275\u0275sanitizeUrl)("alt", country_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", country_r3.name, " (", country_r3.phone, ")");
  }
}
function PhoneComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
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
var PhoneComponent = class _PhoneComponent {
  controlContainer = inject(ControlContainer);
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : []);
  fieldControlName = input.required(...ngDevMode ? [{ debugName: "fieldControlName" }] : []);
  placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  label = input("", ...ngDevMode ? [{ debugName: "label" }] : []);
  required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
  errorMessages = input(...ngDevMode ? [void 0, { debugName: "errorMessages" }] : []);
  defaultClass = signal(FormDefaultClasses.input.default, ...ngDevMode ? [{ debugName: "defaultClass" }] : []);
  errorClass = signal(FormDefaultClasses.input.error, ...ngDevMode ? [{ debugName: "errorClass" }] : []);
  defaultCountry = input(...ngDevMode ? [void 0, { debugName: "defaultCountry" }] : []);
  countries = signal(COUNTRIES, ...ngDevMode ? [{ debugName: "countries" }] : []);
  selectedCountry = linkedSignal(() => this.countries().find((c) => c.code === this.defaultCountry()) ?? this.countries()[0], ...ngDevMode ? [{ debugName: "selectedCountry" }] : []);
  pt = signal(PhonePT, ...ngDevMode ? [{ debugName: "pt" }] : []);
  phoneNumber = signal("", ...ngDevMode ? [{ debugName: "phoneNumber" }] : []);
  constructor() {
    effect(() => {
      const country = this.selectedCountry();
      const number = this.phoneNumber();
      if (this.control) {
        this.control.setValue(`${country.phone}${number}`, { emitEvent: true });
        this.control.markAsDirty();
      }
    });
  }
  get parentFormGroup() {
    return this.controlContainer.control;
  }
  get control() {
    return this.parentFormGroup.get(this.fieldControlName());
  }
  name = computed(() => this.fieldControlName() || this.id(), ...ngDevMode ? [{ debugName: "name" }] : []);
  disabled = computed(() => this.control.disabled ?? false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  // Custom class to merge with dropdown
  inputClass = computed(() => {
    const base = this.errorMessages()?.length ? this.errorClass() : this.defaultClass();
    return `${base.replace("rounded-lg!", "rounded-s-lg!")} w-[calc(100%-8.75rem)] border-e-0 rounded-e-none!`;
  }, ...ngDevMode ? [{ debugName: "inputClass" }] : []);
  dropdownClass = computed(() => {
    const base = this.errorMessages()?.length ? this.errorClass() : this.defaultClass();
    return `${base.replace("rounded-lg!", "rounded-s-lg!").replace("w-full!", "w-[8.75rem]!")} border-e-0! rounded-e-none! focus:ring-0`;
  }, ...ngDevMode ? [{ debugName: "dropdownClass" }] : []);
  static \u0275fac = function PhoneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhoneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PhoneComponent, selectors: [["app-phone"]], inputs: { id: [1, "id"], fieldControlName: [1, "fieldControlName"], placeholder: [1, "placeholder"], label: [1, "label"], required: [1, "required"], errorMessages: [1, "errorMessages"], defaultCountry: [1, "defaultCountry"] }, features: [\u0275\u0275ProvidersFeature([], [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ])], decls: 8, vars: 20, consts: [[1, "flex", "flex-col", "gap-[0.375rem]", "w-full"], [3, "text", "for", "disabled", "error"], [1, "relative", "flex", "items-stretch"], ["optionLabel", "name", "filterBy", "name", "placeholder", "Select", 3, "ngModelChange", "options", "ngModel", "filter", "disabled", "pt", "ngModelOptions"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["pInputText", "", "type", "tel", "pKeyFilter", "num", 1, "flex-1", "!rounded-l-none", 3, "ngModelChange", "id", "name", "placeholder", "disabled", "ngModel", "ngModelOptions"], [1, "text-red-500", "text-xs", "font-normal"], [1, "flex", "items-center", "gap-2"], [1, "w-5", "h-auto", "rounded-sm", "border", "border-zinc-200", 3, "src", "alt"], [1, "text-sm", "font-medium", "text-zinc-700", "dark:text-zinc-200"], [1, "text-sm", "text-zinc-700", "dark:text-zinc-200"]], template: function PhoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PhoneComponent_Conditional_1_Template, 1, 4, "app-label", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "p-select", 3);
      \u0275\u0275listener("ngModelChange", function PhoneComponent_Template_p_select_ngModelChange_3_listener($event) {
        return ctx.selectedCountry.set($event);
      });
      \u0275\u0275template(4, PhoneComponent_ng_template_4_Template, 4, 4, "ng-template", 4)(5, PhoneComponent_ng_template_5_Template, 4, 4, "ng-template", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 6);
      \u0275\u0275listener("ngModelChange", function PhoneComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.phoneNumber.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, PhoneComponent_Conditional_7_Template, 2, 1, "p", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_15_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.dropdownClass());
      \u0275\u0275property("options", ctx.countries())("ngModel", ctx.selectedCountry())("filter", true)("disabled", ctx.disabled())("pt", ctx.pt())("ngModelOptions", \u0275\u0275pureFunction0(18, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.inputClass());
      \u0275\u0275property("id", ctx.id())("name", ctx.name())("placeholder", ctx.placeholder())("disabled", ctx.disabled())("ngModel", ctx.phoneNumber())("ngModelOptions", \u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_15_0 = ctx.errorMessages()) == null ? null : tmp_15_0.length) ? 7 : -1);
    }
  }, dependencies: [
    InputTextModule,
    InputText,
    SelectModule,
    Select,
    PrimeTemplate,
    LabelComponent,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    KeyFilterModule,
    KeyFilter,
    FormsModule,
    NgModel
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneComponent, [{
    type: Component,
    args: [{ selector: "app-phone", imports: [
      InputTextModule,
      SelectModule,
      LabelComponent,
      ReactiveFormsModule,
      KeyFilterModule,
      FormsModule
    ], viewProviders: [
      {
        provide: ControlContainer,
        useFactory: () => inject(ControlContainer, { skipSelf: true })
      }
    ], template: '<div class="flex flex-col gap-[0.375rem] w-full">\n  @if (label()) {\n    <app-label\n      [text]="label()"\n      [for]="id()"\n      [disabled]="disabled()"\n      [error]="!!errorMessages()?.length"\n    />\n  }\n\n  <div class="relative flex items-stretch">\n    <p-select\n      [options]="countries()"\n      [ngModel]="selectedCountry()"\n      (ngModelChange)="selectedCountry.set($any($event))"\n      optionLabel="name"\n      [filter]="true"\n      filterBy="name"\n      [disabled]="disabled()"\n      [class]="dropdownClass()"\n      placeholder="Select"\n      [pt]="pt()"\n      [ngModelOptions]="{ standalone: true }"\n    >\n      <ng-template pTemplate="selectedItem" let-country>\n        <div class="flex items-center gap-2">\n          <img\n            [src]="country.flag"\n            [alt]="country.name"\n            class="w-5 h-auto rounded-sm border border-zinc-200"\n          />\n          <span class="text-sm font-medium text-zinc-700 dark:text-zinc-200"\n            >{{ country.code }} ({{ country.phone }})</span\n          >\n        </div>\n      </ng-template>\n      <ng-template pTemplate="item" let-country>\n        <div class="flex items-center gap-2">\n          <img\n            [src]="country.flag"\n            [alt]="country.name"\n            class="w-5 h-auto rounded-sm border border-zinc-200"\n          />\n          <span class="text-sm text-zinc-700 dark:text-zinc-200"\n            >{{ country.name }} ({{ country.phone }})</span\n          >\n        </div>\n      </ng-template>\n    </p-select>\n\n    <input\n      pInputText\n      type="tel"\n      [id]="id()"\n      [name]="name()"\n      [placeholder]="placeholder()"\n      [disabled]="disabled()"\n      [ngModel]="phoneNumber()"\n      (ngModelChange)="phoneNumber.set($any($event))"\n      [ngModelOptions]="{ standalone: true }"\n      [class]="inputClass()"\n      pKeyFilter="num"\n      class="flex-1 !rounded-l-none"\n    />\n  </div>\n\n  @if (errorMessages()?.length) {\n    <p class="text-red-500 text-xs font-normal">{{ errorMessages()?.[0] }}</p>\n  }\n</div>\n' }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], fieldControlName: [{ type: Input, args: [{ isSignal: true, alias: "fieldControlName", required: true }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], errorMessages: [{ type: Input, args: [{ isSignal: true, alias: "errorMessages", required: false }] }], defaultCountry: [{ type: Input, args: [{ isSignal: true, alias: "defaultCountry", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PhoneComponent, { className: "PhoneComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/form-components/phone/phone.component.ts", lineNumber: 43 });
})();

// apps/angular-c4-team3/src/app/shared/constants/regex-patterns.ts
var REGEX_PATTERNS = {
  PHONE: /^\+\d{10,15}$/,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
};

// apps/angular-c4-team3/src/app/features/auth/pages/register-page/register-page.ts
var _c02 = (a0, a1) => ["/", a0, a1];
var RegisterPage = class _RegisterPage {
  _AuthService = inject(AuthService);
  _FormValidationService = inject(FormValidationService);
  _Router = inject(Router);
  APP_ROUTES = APP_ROUTES;
  // Form Group
  form;
  // Subscription container for unsubscribing
  subscriptions = new Subscription();
  // Gender options for dropdown
  genderOptions = signal([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" }
  ], ...ngDevMode ? [{ debugName: "genderOptions" }] : []);
  // Computed properties for form errors
  firstNameErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["firstName"], {
    required: "First name is required."
  }), ...ngDevMode ? [{ debugName: "firstNameErrors" }] : []);
  lastNameErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["lastName"], {
    required: "Last name is required."
  }), ...ngDevMode ? [{ debugName: "lastNameErrors" }] : []);
  emailErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["email"], {
    required: "Email is required.",
    email: "Enter a valid email address."
  }), ...ngDevMode ? [{ debugName: "emailErrors" }] : []);
  phoneErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["phone"], {
    required: "Phone number is required.",
    pattern: "Enter a valid phone number."
  }), ...ngDevMode ? [{ debugName: "phoneErrors" }] : []);
  genderErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["gender"], {
    required: "Gender is required."
  }), ...ngDevMode ? [{ debugName: "genderErrors" }] : []);
  passwordErrors = computed(() => this._FormValidationService.getErrors(this.form.controls["password"], {
    required: "Password is required.",
    pattern: "Password must contain uppercase, lowercase, number and special character."
  }), ...ngDevMode ? [{ debugName: "passwordErrors" }] : []);
  rePasswordErrors = computed(() => {
    const control = this.form.controls["rePassword"];
    const errors = this._FormValidationService.getErrors(control, {
      required: "Confirm password is required."
    });
    if (this.form.hasError("passwordMismatch") && control.touched) {
      return ["Passwords do not match."];
    }
    return errors;
  }, ...ngDevMode ? [{ debugName: "rePasswordErrors" }] : []);
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /** Initialize the form and validators */
  initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(REGEX_PATTERNS.PHONE)
      ]),
      gender: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.pattern(REGEX_PATTERNS.PASSWORD)]),
      rePassword: new FormControl("", [Validators.required])
    });
    this.form.setValidators(this.passwordMatchValidator);
  }
  /** Custom validator to check if password and rePassword match */
  passwordMatchValidator(control) {
    const formGroup = control;
    const password = formGroup.get("password")?.value;
    const rePassword = formGroup.get("rePassword")?.value;
    return password === rePassword ? null : { passwordMismatch: true };
  }
  /** Submit form data to the backend */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = __spreadValues({}, this.form.value);
    const sub = this._AuthService.register(payload).subscribe({
      next: (res) => {
        localStorage.setItem(APP_STORAGE.token, res.token);
        localStorage.setItem(APP_STORAGE.user, JSON.stringify(res.user));
        this._Router.navigate(["/", APP_ROUTES.LANDING.ROOT, APP_ROUTES.LANDING.HOME]);
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.subscriptions.add(sub);
  }
  static \u0275fac = function RegisterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPage, selectors: [["app-register-page"]], decls: 35, vars: 90, consts: [[1, "min-h-screen", "flex", "flex-col", "items-center", "justify-center"], [3, "title"], [1, "mt-10", "w-full", "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], ["id", "firstName", "type", "text", "fieldControlName", "firstName", 3, "label", "placeholder", "required", "errorMessages"], ["id", "lastName", "type", "text", "fieldControlName", "lastName", 3, "label", "placeholder", "required", "errorMessages"], ["id", "email", "type", "email", "fieldControlName", "email", 3, "label", "placeholder", "required", "errorMessages"], ["id", "phone", "fieldControlName", "phone", "defaultCountry", "EG", 3, "label", "placeholder", "required", "errorMessages"], ["id", "gender", "optionLabel", "label", "optionValue", "value", "fieldControlName", "gender", 3, "label", "options", "placeholder", "required", "errorMessages"], ["id", "password", "type", "password", "fieldControlName", "password", 3, "label", "placeholder", "required", "errorMessages"], ["id", "rePassword", "type", "password", "fieldControlName", "rePassword", 3, "label", "placeholder", "required", "errorMessages"], [3, "label", "type", "disabled"], [1, "border-b", "py-3", "border-zinc-200", "dark:border-zinc-700"], [1, "flex", "mb-8", "gap-1"], [1, "text-zinc-800", "dark:text-zinc-200", "font-bold", "text-sm"], [1, "text-maroon-700", "dark:text-soft-pink-300", "font-bold", "text-sm", 3, "routerLink"]], template: function RegisterPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "app-decorated-title", 1);
      \u0275\u0275pipe(2, "transloco");
      \u0275\u0275elementStart(3, "form", 2);
      \u0275\u0275listener("ngSubmit", function RegisterPage_Template_form_ngSubmit_3_listener() {
        return ctx.submit();
      });
      \u0275\u0275element(4, "app-input", 3);
      \u0275\u0275pipe(5, "transloco");
      \u0275\u0275pipe(6, "transloco");
      \u0275\u0275element(7, "app-input", 4);
      \u0275\u0275pipe(8, "transloco");
      \u0275\u0275pipe(9, "transloco");
      \u0275\u0275element(10, "app-input", 5);
      \u0275\u0275pipe(11, "transloco");
      \u0275\u0275pipe(12, "transloco");
      \u0275\u0275element(13, "app-phone", 6);
      \u0275\u0275pipe(14, "transloco");
      \u0275\u0275pipe(15, "transloco");
      \u0275\u0275element(16, "app-select", 7);
      \u0275\u0275pipe(17, "transloco");
      \u0275\u0275pipe(18, "transloco");
      \u0275\u0275element(19, "app-password", 8);
      \u0275\u0275pipe(20, "transloco");
      \u0275\u0275pipe(21, "transloco");
      \u0275\u0275element(22, "app-password", 9);
      \u0275\u0275pipe(23, "transloco");
      \u0275\u0275pipe(24, "transloco");
      \u0275\u0275element(25, "shared-ui-button", 10);
      \u0275\u0275pipe(26, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "div", 11);
      \u0275\u0275elementStart(28, "div", 12)(29, "p", 13);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 14);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "transloco");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 51, "register_back"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(5, 53, "first_name")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(6, 55, "first_name_placeholder")))("required", true)("errorMessages", ctx.firstNameErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(8, 57, "last_name")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(9, 59, "last_name_placeholder")))("required", true)("errorMessages", ctx.lastNameErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(11, 61, "email")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(12, 63, "email_placeholder")))("required", true)("errorMessages", ctx.emailErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(14, 65, "phone")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(15, 67, "phone_placeholder")))("required", true)("errorMessages", ctx.phoneErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(17, 69, "gender")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(18, 71, "select_gender")))("options", ctx.genderOptions())("required", true)("errorMessages", ctx.genderErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(20, 73, "password")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(21, 75, "password_placeholder")))("required", true)("errorMessages", ctx.passwordErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(23, 77, "confirm_password")))("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(24, 79, "confirm_password_placeholder")))("required", true)("errorMessages", ctx.rePasswordErrors());
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(26, 81, "create_account"))("type", "submit")("disabled", ctx.form.invalid);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 83, "already_account"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(87, _c02, ctx.APP_ROUTES.AUTH.ROOT, ctx.APP_ROUTES.AUTH.LOGIN));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 85, "login"), " ");
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
    PasswordComponent,
    SelectComponent,
    PhoneComponent,
    DecoratedTitleComponent,
    TranslocoPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPage, [{
    type: Component,
    args: [{ selector: "app-register-page", imports: [
      ReactiveFormsModule,
      FormsModule,
      InputComponent,
      RouterLink,
      TranslocoPipe,
      ButtonComponent,
      PasswordComponent,
      SelectComponent,
      PhoneComponent,
      DecoratedTitleComponent
    ], standalone: true, template: `<section class="min-h-screen flex flex-col items-center justify-center">
  <!-- Page Title -->
  <app-decorated-title [title]="'register_back' | transloco" />

  <!-- Registration Form -->
  <form
    class="mt-10 w-full flex flex-col gap-4"
    [formGroup]="form"
    (ngSubmit)="submit()"
  >
    <!-- First Name -->
    <app-input
      id="firstName"
      type="text"
      label="{{ 'first_name' | transloco }}"
      placeholder="{{ 'first_name_placeholder' | transloco }}"
      [required]="true"
      fieldControlName="firstName"
      [errorMessages]="firstNameErrors()"
    />

    <!-- Last Name -->
    <app-input
      id="lastName"
      type="text"
      label="{{ 'last_name' | transloco }}"
      placeholder="{{ 'last_name_placeholder' | transloco }}"
      [required]="true"
      fieldControlName="lastName"
      [errorMessages]="lastNameErrors()"
    />

    <!-- Email -->
    <app-input
      id="email"
      type="email"
      label="{{ 'email' | transloco }}"
      placeholder="{{ 'email_placeholder' | transloco }}"
      [required]="true"
      fieldControlName="email"
      [errorMessages]="emailErrors()"
    />

    <!-- Phone -->
    <app-phone
      id="phone"
      label="{{ 'phone' | transloco }}"
      placeholder="{{ 'phone_placeholder' | transloco }}"
      [required]="true"
      fieldControlName="phone"
      defaultCountry="EG"
      [errorMessages]="phoneErrors()"
    />

    <!-- Gender -->
    <app-select
      id="gender"
      label="{{ 'gender' | transloco }}"
      [options]="genderOptions()"
      optionLabel="label"
      optionValue="value"
      placeholder="{{ 'select_gender' | transloco }}"
      [required]="true"
      fieldControlName="gender"
      [errorMessages]="genderErrors()"
    />

    <!-- Password -->
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
      id="rePassword"
      type="password"
      label="{{ 'confirm_password' | transloco }}"
      placeholder="{{ 'confirm_password_placeholder' | transloco }}"
      [required]="true"
      fieldControlName="rePassword"
      [errorMessages]="rePasswordErrors()"
    />

    <!-- Submit Button -->
    <shared-ui-button
      [label]="'create_account' | transloco"
      [type]="'submit'"
      [disabled]="form.invalid"
    />
  </form>

  <!-- Divider -->
  <div class="border-b py-3 border-zinc-200 dark:border-zinc-700"></div>

  <!-- Already have account -->
  <div class="flex mb-8 gap-1">
    <p class="text-zinc-800 dark:text-zinc-200 font-bold text-sm">
      {{ 'already_account' | transloco }}
    </p>

    <a
      [routerLink]="['/', APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.LOGIN]"
      class="text-maroon-700 dark:text-soft-pink-300 font-bold text-sm"
    >
      {{ 'login' | transloco }}
    </a>
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPage, { className: "RegisterPage", filePath: "apps/angular-c4-team3/src/app/features/auth/pages/register-page/register-page.ts", lineNumber: 54 });
})();
export {
  RegisterPage
};
//# sourceMappingURL=chunk-ZOYQB4UR.js.map
