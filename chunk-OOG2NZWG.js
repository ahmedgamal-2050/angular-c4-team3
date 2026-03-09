import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MW4S3Q6I.js";

// apps/angular-c4-team3/src/app/shared/components/form-components/form-default-classes.ts
var inputClasses = {
  core: "rounded-lg! border! placeholder:text-zinc-400! p-4! text-sm! w-full!",
  light: "border-zinc-300! text-zinc-800! bg-white!",
  dark: "dark:border-zinc-600! dark:text-zinc-50! dark:bg-zinc-700!",
  error: "border-red-600! dark:border-red-500!",
  disabled: "disabled:text-zinc-400! disabled:bg-zinc-100! disabled:border-0! dark:disabled:bg-zinc-800! dark:disabled:text-zinc-600!"
};
var labelClasses = {
  core: "block text-sm font-medium",
  light: "text-zinc-800!",
  dark: "dark:text-zinc-50!",
  error: "text-red-600! dark:text-red-500!",
  disabled: "disabled:text-zinc-400! dark:disabled:text-zinc-600!"
};
var FormDefaultClasses = {
  input: {
    default: inputClasses.core + " " + inputClasses.light + " " + inputClasses.dark + " " + inputClasses.disabled,
    error: inputClasses.core + " " + inputClasses.error
  },
  label: {
    default: labelClasses.core + " " + labelClasses.light + " " + labelClasses.dark + " " + labelClasses.disabled,
    error: labelClasses.core + " " + labelClasses.error
  }
};
var PhonePT = {
  pcOverlay: {
    content: "bg-white dark:bg-zinc-800 p-2! rounded-sm! shadow-sm!"
  },
  pcFilter: {
    root: "p-2! rounded-sm! border! border-zinc-200! dark:border-zinc-600!"
  },
  pcFilterIconContainer: {
    root: "end-3! -translate-y-2/5!"
  },
  listContainer: "pt-2!",
  option: "p-2! rounded-sm! hover:bg-zinc-100! dark:hover:bg-zinc-700! selected:p-0!"
};
var SelectPT = {
  pcOverlay: {
    content: "bg-white dark:bg-zinc-800 shadow-lg rounded-sm p-2"
  },
  option: "p-2! rounded-sm! hover:bg-zinc-100! dark:hover:bg-zinc-700!"
};

// apps/angular-c4-team3/src/app/shared/components/form-components/label/label.component.ts
var LabelComponent = class _LabelComponent {
  text = input.required(...ngDevMode ? [{ debugName: "text" }] : []);
  for = input.required(...ngDevMode ? [{ debugName: "for" }] : []);
  labelClass = input(...ngDevMode ? [void 0, { debugName: "labelClass" }] : []);
  error = input(false, ...ngDevMode ? [{ debugName: "error" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  defaultClass = signal(FormDefaultClasses.label.default, ...ngDevMode ? [{ debugName: "defaultClass" }] : []);
  errorClass = signal(FormDefaultClasses.label.error, ...ngDevMode ? [{ debugName: "errorClass" }] : []);
  defaultLabelClass = computed(() => this.error() ? this.errorClass() : this.defaultClass(), ...ngDevMode ? [{ debugName: "defaultLabelClass" }] : []);
  static \u0275fac = function LabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabelComponent, selectors: [["app-label"]], inputs: { text: [1, "text"], for: [1, "for"], labelClass: [1, "labelClass"], error: [1, "error"], disabled: [1, "disabled"] }, decls: 2, vars: 5, consts: [[3, "for"]], template: function LabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "label", 0);
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.labelClass() ?? ctx.defaultLabelClass());
      \u0275\u0275domProperty("htmlFor", ctx.for());
      \u0275\u0275attribute("disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.text(), "\n");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelComponent, [{
    type: Component,
    args: [{ selector: "app-label", imports: [], template: '<label\n  [class]="labelClass() ?? defaultLabelClass()"\n  [for]="for()"\n  [attr.disabled]="disabled()"\n>\n  {{ text() }}\n</label>\n' }]
  }], null, { text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: true }] }], for: [{ type: Input, args: [{ isSignal: true, alias: "for", required: true }] }], labelClass: [{ type: Input, args: [{ isSignal: true, alias: "labelClass", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabelComponent, { className: "LabelComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/form-components/label/label.component.ts", lineNumber: 10 });
})();

export {
  FormDefaultClasses,
  PhonePT,
  SelectPT,
  LabelComponent
};
//# sourceMappingURL=chunk-OOG2NZWG.js.map
