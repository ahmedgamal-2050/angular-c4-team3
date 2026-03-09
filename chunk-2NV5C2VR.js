import {
  ICONS_SVG,
  SliderComponent,
  StyledHomeTitleComponent
} from "./chunk-VMQFCD3Z.js";
import {
  ENDPOINTS
} from "./chunk-PYVPHPIQ.js";
import "./chunk-5F2C77Q4.js";
import {
  InputComponent
} from "./chunk-ZW7ESYUU.js";
import {
  FormDefaultClasses,
  LabelComponent
} from "./chunk-OOG2NZWG.js";
import {
  ButtonComponent
} from "./chunk-7XJLG7MZ.js";
import "./chunk-5MDQ6W3U.js";
import "./chunk-ZUKZCXFN.js";
import "./chunk-ZSIZB4LZ.js";
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-VSLF65Y7.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-BX323W7Q.js";
import {
  LucideAngularComponent,
  LucideAngularModule,
  Star
} from "./chunk-JJ5YZZNZ.js";
import {
  TranslocoPipe
} from "./chunk-YBU5AOQC.js";
import "./chunk-XS4O3NDQ.js";
import {
  ActivatedRoute,
  DomSanitizer
} from "./chunk-DVFFD4F4.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgTemplateOutlet,
  Subscription,
  ViewEncapsulation,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MW4S3Q6I.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/shared/components/form-components/textarea/textarea.component.ts
function TextareaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-label", 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.label())("for", ctx_r0.id())("disabled", ctx_r0.disabled())("error", !!((tmp_4_0 = ctx_r0.errorMessages()) == null ? null : tmp_4_0.length));
  }
}
function TextareaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.endIconTemplate());
  }
}
function TextareaComponent_Conditional_6_Template(rf, ctx) {
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
var TextareaComponent = class _TextareaComponent {
  controlContainer = inject(ControlContainer);
  endIconTemplate = input(null, ...ngDevMode ? [{ debugName: "endIconTemplate" }] : []);
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : []);
  fieldControlName = input.required(...ngDevMode ? [{ debugName: "fieldControlName" }] : []);
  placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  label = input("", ...ngDevMode ? [{ debugName: "label" }] : []);
  invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : []);
  required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
  inputClass = input(...ngDevMode ? [void 0, { debugName: "inputClass" }] : []);
  labelClass = input(...ngDevMode ? [void 0, { debugName: "labelClass" }] : []);
  autocomplete = input("off", ...ngDevMode ? [{ debugName: "autocomplete" }] : []);
  error = input(false, ...ngDevMode ? [{ debugName: "error" }] : []);
  errorMessages = input(...ngDevMode ? [void 0, { debugName: "errorMessages" }] : []);
  rows = input(8, ...ngDevMode ? [{ debugName: "rows" }] : []);
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
  static \u0275fac = function TextareaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextareaComponent, selectors: [["app-textarea"]], inputs: { endIconTemplate: [1, "endIconTemplate"], id: [1, "id"], fieldControlName: [1, "fieldControlName"], placeholder: [1, "placeholder"], label: [1, "label"], invalid: [1, "invalid"], required: [1, "required"], inputClass: [1, "inputClass"], labelClass: [1, "labelClass"], autocomplete: [1, "autocomplete"], error: [1, "error"], errorMessages: [1, "errorMessages"], rows: [1, "rows"] }, features: [\u0275\u0275ProvidersFeature([], [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ])], decls: 7, vars: 13, consts: [[1, "flex", "flex-col", "gap-[0.375rem]", "w-full"], [3, "text", "for", "disabled", "error"], [1, "relative"], [3, "id", "name", "placeholder", "disabled", "required", "formControlName", "rows"], [3, "ngTemplateOutlet"], [1, "text-red-500", "text-xs", "font-normal"]], template: function TextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, TextareaComponent_Conditional_1_Template, 1, 4, "app-label", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "textarea", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, TextareaComponent_Conditional_5_Template, 1, 1, "ng-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, TextareaComponent_Conditional_6_Template, 2, 1, "p", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.inputClass() ?? ctx.defaultInputClass());
      \u0275\u0275property("id", ctx.id())("name", ctx.name())("placeholder", ctx.placeholder())("disabled", ctx.disabled())("required", ctx.required())("formControlName", ctx.fieldControlName())("rows", ctx.rows());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.value());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.endIconTemplate() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_11_0 = ctx.errorMessages()) == null ? null : tmp_11_0.length) ? 6 : -1);
    }
  }, dependencies: [LabelComponent, NgTemplateOutlet, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaComponent, [{
    type: Component,
    args: [{ selector: "app-textarea", imports: [LabelComponent, NgTemplateOutlet, ReactiveFormsModule], viewProviders: [
      {
        provide: ControlContainer,
        useFactory: () => inject(ControlContainer, { skipSelf: true })
      }
    ], template: '<div class="flex flex-col gap-[0.375rem] w-full">\n  <!-- Label -->\n  @if (label()) {\n    <app-label\n      [text]="label()"\n      [for]="id()"\n      [disabled]="disabled()"\n      [error]="!!errorMessages()?.length"\n    />\n  }\n\n  <!-- Textarea -->\n  <div class="relative">\n    <textarea\n      [id]="id()"\n      [name]="name()"\n      [placeholder]="placeholder()"\n      [disabled]="disabled()"\n      [required]="required()"\n      [formControlName]="fieldControlName()"\n      [class]="inputClass() ?? defaultInputClass()"\n      [rows]="rows()"\n    >{{ value() }}</textarea>\n\n    <!-- End Icon Template -->\n    @if (endIconTemplate()) {\n      <ng-container [ngTemplateOutlet]="endIconTemplate()" />\n    }\n  </div>\n\n  <!-- Error Message -->\n  @if (errorMessages()?.length) {\n    <p class="text-red-500 text-xs font-normal">{{ errorMessages()?.[0] }}</p>\n  }\n</div>\n' }]
  }], null, { endIconTemplate: [{ type: Input, args: [{ isSignal: true, alias: "endIconTemplate", required: false }] }], id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], fieldControlName: [{ type: Input, args: [{ isSignal: true, alias: "fieldControlName", required: true }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], invalid: [{ type: Input, args: [{ isSignal: true, alias: "invalid", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], inputClass: [{ type: Input, args: [{ isSignal: true, alias: "inputClass", required: false }] }], labelClass: [{ type: Input, args: [{ isSignal: true, alias: "labelClass", required: false }] }], autocomplete: [{ type: Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], errorMessages: [{ type: Input, args: [{ isSignal: true, alias: "errorMessages", required: false }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextareaComponent, { className: "TextareaComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/form-components/textarea/textarea.component.ts", lineNumber: 26 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/product-details/services/product-details.service.ts
var ProductDetailsService = class _ProductDetailsService {
  _http = inject(HttpClient);
  getProductReviews() {
    return this._http.get(`${ENDPOINTS.REVIEWS}`);
  }
  getProductReviewById(productId) {
    const url = ENDPOINTS.GET_REVIEW_BY_ID.replace("{productId}", productId ?? "");
    return this._http.get(url);
  }
  createReview(data) {
    return this._http.post(`${ENDPOINTS.REVIEWS}`, data);
  }
  getRelatedProdacts(productId) {
    return this._http.get(`${ENDPOINTS.CATEGORY_PRODUCT}/${productId}`);
  }
  static \u0275fac = function ProductDetailsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductDetailsService, factory: _ProductDetailsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/progressspinner/index.mjs
var style = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var classes = {
  root: () => ["p-progressspinner"],
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var PROGRESSSPINNER_INSTANCE = new InjectionToken("PROGRESSSPINNER_INSTANCE");
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  componentName = "ProgressSpinner";
  $pcProgressSpinner = inject(PROGRESSSPINNER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    hostVars: 5,
    hostBindings: function ProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("role", "progressbar")("aria-busy", true);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle, {
      provide: PROGRESSSPINNER_INSTANCE,
      useExisting: _ProgressSpinner
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressSpinner
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 10,
    consts: [["viewBox", "25 25 50 50", 3, "pBind"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 3, "pBind"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "circle", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("spin"));
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275property("pBind", ctx.ptm("spin"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("circle"));
        \u0275\u0275property("pBind", ctx.ptm("circle"));
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <svg [class]="cx('spin')" [pBind]="ptm('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
            <circle [class]="cx('circle')" [pBind]="ptm('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle, {
        provide: PROGRESSSPINNER_INSTANCE,
        useExisting: ProgressSpinner
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressSpinner
      }],
      host: {
        "[attr.aria-label]": "ariaLabel",
        "[attr.role]": "'progressbar'",
        "[attr.aria-busy]": "true",
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// apps/angular-c4-team3/src/app/features/landing/pages/product-details/components/product-review/product-review.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function ProductReviewComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    \u0275\u0275property("innerHTML", star_r1, \u0275\u0275sanitizeHtml);
  }
}
function ProductReviewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "p-progress-spinner");
    \u0275\u0275elementEnd();
  }
}
function ProductReviewComponent_Conditional_20_For_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    \u0275\u0275property("innerHTML", star_r2, \u0275\u0275sanitizeHtml);
  }
}
function ProductReviewComponent_Conditional_20_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div");
    \u0275\u0275element(3, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 30);
    \u0275\u0275repeaterCreate(11, ProductReviewComponent_Conditional_20_For_1_For_12_Template, 1, 1, "div", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(13, "span", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "p", 32);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", review_r3 == null ? null : review_r3.user == null ? null : review_r3.user.photo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", review_r3 == null ? null : review_r3.user == null ? null : review_r3.user.firstName, " ", review_r3 == null ? null : review_r3.user == null ? null : review_r3.user.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 7, review_r3.createdAt, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.getStarsArray(review_r3.rating));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" (", review_r3.rating, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", review_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r3.comment, " ");
  }
}
function ProductReviewComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductReviewComponent_Conditional_20_For_1_Template, 20, 10, "div", 25, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.reviews());
  }
}
function ProductReviewComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 18);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r3.single_star);
  }
}
function ProductReviewComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login_paragraph"), " ");
  }
}
var ProductReviewComponent = class _ProductReviewComponent {
  single_star = Star;
  _productDetailsService = inject(ProductDetailsService);
  sanitizer = inject(DomSanitizer);
  productId = input("", ...ngDevMode ? [{ debugName: "productId" }] : []);
  reviews = signal([], ...ngDevMode ? [{ debugName: "reviews" }] : []);
  rating = signal(0, ...ngDevMode ? [{ debugName: "rating" }] : []);
  totalRatings = signal(0, ...ngDevMode ? [{ debugName: "totalRatings" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  isLoggedIn = computed(() => localStorage.getItem(APP_STORAGE.token) !== null, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
  form;
  subscription = new Subscription();
  ngOnInit() {
    this.initializeForm();
    this.getProductReviewById();
  }
  getStarsArray(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.fullStar));
      } else if (i === fullStars && hasHalfStar) {
        stars.push(this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.halfStar));
      }
    }
    return stars;
  }
  initializeForm() {
    this.form = new FormGroup({
      title: new FormControl("", [Validators.required]),
      comment: new FormControl("", [Validators.required]),
      product: new FormControl("673e2e1f1159920171828153"),
      rating: new FormControl(5, [Validators.required])
    });
  }
  getProductReviewById() {
    this.loading.set(true);
    const sub = this._productDetailsService.getProductReviewById(this.productId()).subscribe({
      next: (res) => {
        this.reviews.set(res?.reviews);
        this.totalRatings.set(this.reviews().length);
        if (this.totalRatings() > 0) {
          const total = this.reviews().reduce((sum, r) => sum + r.rating, 0);
          this.rating.set(+(total / this.totalRatings()).toFixed(1));
        } else {
          this.rating.set(0);
        }
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading.set(false);
      }
    });
    this.subscription.add(sub);
  }
  createReview() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = __spreadValues({}, this.form.value);
    const sub = this._productDetailsService.createReview(payload).subscribe({
      next: () => {
        this.getProductReviewById();
      }
    });
    this.subscription.add(sub);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function ProductReviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductReviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductReviewComponent, selectors: [["app-product-review"]], inputs: { productId: [1, "productId"] }, decls: 41, vars: 39, consts: [[1, "px-6", "py-10"], [1, "border-b", "border-zinc-200", "pb-4", "my-4"], [1, "mb-2.5"], [3, "title"], [1, "font-semibold", "text-xl", "text-zinc-800", "dark:text-soft-pink-300"], [1, "flex", "gap-1", "my-2"], [1, "text-zinc-800", "dark:text-soft-pink-300", "font-medium", "text-sm", "ml-2"], [1, "text-zinc-500", "font-medium", "text-sm"], [1, "flex"], [3, "innerHTML"], [1, "grid", "grid-cols-12", "gap-5"], [1, "col-span-12", "lg:col-span-7", "px-5", "border-zinc-200", "border-r"], [1, "card", "flex", "justify-center"], [1, "col-span-12", "lg:col-span-5", "pt-5"], ["novalidate", "", 1, "mt-10", "w-full", "flex", "flex-col", "gap-4", 3, "formGroup"], [1, "mb-6", "flex", "gap-1"], [1, "text-base", "font-medium", "text-zinc-800", "dark:text-white"], [1, "flex", "gap-1", "text-3xl"], [1, "size-5", "text-amber-300", 3, "name"], [1, "mb-3"], ["id", "Title", "type", "Title", "fieldControlName", "title", 3, "label", "placeholder", "required"], ["id", "ReviewControl", "type", "ReviewControl", "fieldControlName", "comment", 3, "label", "placeholder", "required"], [1, "text-zinc-800", "dark:text-soft-pink-300", "font-semibold", "text-base", "relative", "l-5", "b-11"], [1, "w-full", "mt-5"], [3, "clicked", "label", "type"], [1, "border-b", "border-zinc-200", "py-5"], [1, "flex", "items-center", "gap-3"], ["alt", "", 1, "w-10", "h-10", "rounded-full", 3, "src"], [1, "font-semibold", "text-gray-900", "dark:text-soft-pink-300"], [1, "text-sm", "text-gray-500", "dark:text-white"], [1, "flex", "my-3"], [1, "text-zinc-800", "dark:text-soft-pink-300", "font-semibold", "text-base"], [1, "text-black", "dark:text-white", "text-base", "font-semibold", "mb-1"], [1, "text-zinc-600", "dark:zinc-200", "text-base", "font-normal", "leading-[100%]"]], template: function ProductReviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-styled-home-title", 3);
      \u0275\u0275pipe(4, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "transloco");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275repeaterCreate(15, ProductReviewComponent_For_16_Template, 1, 1, "div", 9, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 11);
      \u0275\u0275conditionalCreate(19, ProductReviewComponent_Conditional_19_Template, 2, 0, "div", 12)(20, ProductReviewComponent_Conditional_20_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13)(22, "form", 14)(23, "div", 15)(24, "p", 16);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17);
      \u0275\u0275repeaterCreate(28, ProductReviewComponent_For_29_Template, 1, 1, "lucide-icon", 18, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 19);
      \u0275\u0275element(31, "app-input", 20);
      \u0275\u0275pipe(32, "transloco");
      \u0275\u0275pipe(33, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-textarea", 21);
      \u0275\u0275pipe(35, "transloco");
      \u0275\u0275pipe(36, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(37, ProductReviewComponent_Conditional_37_Template, 3, 3, "p", 22);
      \u0275\u0275elementStart(38, "div", 23)(39, "shared-ui-button", 24);
      \u0275\u0275pipe(40, "transloco");
      \u0275\u0275listener("clicked", function ProductReviewComponent_Template_shared_ui_button_clicked_39_listener() {
        return ctx.createReview();
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(4, 21, "product_reviews"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 23, "general_rating"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.rating(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" (", ctx.totalRatings(), " ", \u0275\u0275pipeBind1(13, 25, "ratings"), ") ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.getStarsArray(ctx.rating()));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 19 : !ctx.loading() ? 20 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("blur-form", !ctx.isLoggedIn());
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 27, "your_rating"), ": ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.getStarsArray(ctx.rating()));
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(32, 29, "Title"))("placeholder", \u0275\u0275pipeBind1(33, 31, "Title_placeholder"))("required", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(35, 33, "review"))("placeholder", \u0275\u0275pipeBind1(36, 35, "review_paragraph"))("required", true);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isLoggedIn() ? 37 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("blur-form", !ctx.isLoggedIn());
      \u0275\u0275property("label", \u0275\u0275pipeBind1(40, 37, "add_review"))("type", "submit");
    }
  }, dependencies: [
    LucideAngularModule,
    LucideAngularComponent,
    InputComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    FormGroupDirective,
    FormsModule,
    ButtonComponent,
    TextareaComponent,
    ProgressSpinnerModule,
    ProgressSpinner,
    StyledHomeTitleComponent,
    TranslocoPipe,
    DatePipe
  ], styles: ["\n\n.blur-form[_ngcontent-%COMP%] {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: 0.6;\n}\n/*# sourceMappingURL=product-review.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReviewComponent, [{
    type: Component,
    args: [{ selector: "app-product-review", standalone: true, imports: [
      TranslocoPipe,
      LucideAngularModule,
      InputComponent,
      ReactiveFormsModule,
      FormsModule,
      ButtonComponent,
      TextareaComponent,
      ProgressSpinnerModule,
      StyledHomeTitleComponent,
      DatePipe
    ], template: `<section class="px-6 py-10">
  <div class="border-b border-zinc-200 pb-4 my-4">
    <div class="mb-2.5">
      <app-styled-home-title [title]="'product_reviews' | transloco" />
    </div>

    <p class="font-semibold text-xl text-zinc-800 dark:text-soft-pink-300">
      {{ 'general_rating' | transloco }}
    </p>
    <div class="flex gap-1 my-2">
      <p class="text-zinc-800 dark:text-soft-pink-300 font-medium text-sm ml-2">
        {{ rating() }}
      </p>
      <span class="text-zinc-500 font-medium text-sm">
        ({{ totalRatings() }} {{ 'ratings' | transloco }})
      </span>
    </div>

    <div class="flex">
      @for (star of getStarsArray(rating()); track $index) {
        <div [innerHTML]="star"></div>
      }
    </div>
  </div>

  <div class="grid grid-cols-12 gap-5">
    <div class="col-span-12 lg:col-span-7 px-5 border-zinc-200 border-r">
      @if (loading()) {
        <div class="card flex justify-center">
          <p-progress-spinner></p-progress-spinner>
        </div>
      } @else if (!loading()) {
        @for (review of reviews(); track review._id) {
          <div class="border-b border-zinc-200 py-5">
            <div class="flex items-center gap-3">
              <div>
                <img
                  class="w-10 h-10 rounded-full"
                  [src]="review?.user?.photo"
                  alt=""
                />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-soft-pink-300">
                  {{ review?.user?.firstName }} {{ review?.user?.lastName }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-white">
                  {{ review.createdAt | date: 'mediumDate' }}
                </p>
              </div>
            </div>

            <div class="flex my-3">
              @for (star of getStarsArray(review.rating); track $index) {
                <div [innerHTML]="star"></div>
              }
              <span
                class="text-zinc-800 dark:text-soft-pink-300 font-semibold text-base"
              >
                ({{ review.rating }})
              </span>
            </div>

            <div>
              <p
                class="text-black dark:text-white text-base font-semibold mb-1"
              >
                {{ review.title }}
              </p>
              <p
                class="text-zinc-600 dark:zinc-200 text-base font-normal leading-[100%]"
              >
                {{ review.comment }}
              </p>
            </div>
          </div>
        }
      }
    </div>

    <div class="col-span-12 lg:col-span-5 pt-5">
      <form
        class="mt-10 w-full flex flex-col gap-4"
        [formGroup]="form"
        [class.blur-form]="!isLoggedIn()"
        novalidate
      >
        <div class="mb-6 flex gap-1">
          <p class="text-base font-medium text-zinc-800 dark:text-white">
            {{ 'your_rating' | transloco }}:
          </p>
          <div class="flex gap-1 text-3xl">
            @for (star of getStarsArray(rating()); track $index) {
              <lucide-icon
                [name]="single_star"
                class="size-5 text-amber-300"
              ></lucide-icon>
            }
          </div>
        </div>

        <div class="mb-3">
          <app-input
            id="Title"
            type="Title"
            [label]="'Title' | transloco"
            [placeholder]="'Title_placeholder' | transloco"
            [required]="true"
            fieldControlName="title"
          >
          </app-input>
        </div>

        <app-textarea
          id="ReviewControl"
          type="ReviewControl"
          [label]="'review' | transloco"
          [placeholder]="'review_paragraph' | transloco"
          [required]="true"
          fieldControlName="comment"
        >
        </app-textarea>
      </form>

      @if (!isLoggedIn()) {
        <p
          class="text-zinc-800 dark:text-soft-pink-300 font-semibold text-base relative l-5 b-11"
        >
          {{ 'login_paragraph' | transloco }}
        </p>
      }
      <div class="w-full mt-5">
        <shared-ui-button
          [class.blur-form]="!isLoggedIn()"
          (clicked)="createReview()"
          [label]="'add_review' | transloco"
          [type]="'submit'"
        >
        </shared-ui-button>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* apps/angular-c4-team3/src/app/features/landing/pages/product-details/components/product-review/product-review.component.css */\n.blur-form {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: 0.6;\n}\n/*# sourceMappingURL=product-review.component.css.map */\n"] }]
  }], null, { productId: [{ type: Input, args: [{ isSignal: true, alias: "productId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductReviewComponent, { className: "ProductReviewComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/product-details/components/product-review/product-review.component.ts", lineNumber: 42 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/product-details/components/product-related/product-related.component.ts
var ProductRelatedComponent = class _ProductRelatedComponent {
  _productDetailsService = inject(ProductDetailsService);
  productId = input("", ...ngDevMode ? [{ debugName: "productId" }] : []);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  subscription = new Subscription();
  ngOnInit() {
    this.getRelatedProdacts(this.productId());
  }
  getRelatedProdacts(id) {
    const sub = this._productDetailsService.getRelatedProdacts(id).subscribe((res) => {
      this.products.set(res.relatedProducts);
    });
    this.subscription.add(sub);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function ProductRelatedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductRelatedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductRelatedComponent, selectors: [["app-product-related"]], inputs: { productId: [1, "productId"] }, decls: 7, vars: 4, consts: [[1, "px-6", "py-10"], [1, "my-4"], [1, "mb-2.5"], [3, "title"], [1, "slider"], [3, "products"]], template: function ProductRelatedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-styled-home-title", 3);
      \u0275\u0275pipe(4, "transloco");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "app-slider", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(4, 2, "product_related"));
      \u0275\u0275advance(3);
      \u0275\u0275property("products", ctx.products());
    }
  }, dependencies: [SliderComponent, StyledHomeTitleComponent, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductRelatedComponent, [{
    type: Component,
    args: [{ selector: "app-product-related", imports: [TranslocoPipe, SliderComponent, StyledHomeTitleComponent], template: `<section class="px-6 py-10">
  <div class="my-4">
    <div class="mb-2.5">
      <app-styled-home-title [title]="'product_related' | transloco" />
    </div>
  </div>

  <div class="slider">
    <app-slider [products]="products()"></app-slider>
  </div>
</section>
` }]
  }], null, { productId: [{ type: Input, args: [{ isSignal: true, alias: "productId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductRelatedComponent, { className: "ProductRelatedComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/product-details/components/product-related/product-related.component.ts", lineNumber: 15 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/product-details/product-details.component.ts
var ProductDetailsComponent = class _ProductDetailsComponent {
  _route = inject(ActivatedRoute);
  _productService = inject(ProductDetailsService);
  productId = signal("", ...ngDevMode ? [{ debugName: "productId" }] : []);
  ngOnInit() {
    this.productId.set(this._route.snapshot.params["id"]);
  }
  static \u0275fac = function ProductDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailsComponent, selectors: [["app-product-details"]], decls: 2, vars: 2, consts: [[3, "productId"]], template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-product-review", 0)(1, "app-product-related", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("productId", ctx.productId());
      \u0275\u0275advance();
      \u0275\u0275property("productId", ctx.productId());
    }
  }, dependencies: [ProductReviewComponent, ProductRelatedComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-product-details", imports: [ProductReviewComponent, ProductRelatedComponent], template: '<app-product-review [productId]="productId()" />\n<app-product-related [productId]="productId()" />\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailsComponent, { className: "ProductDetailsComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/product-details/product-details.component.ts", lineNumber: 12 });
})();
export {
  ProductDetailsComponent
};
//# sourceMappingURL=chunk-2NV5C2VR.js.map
