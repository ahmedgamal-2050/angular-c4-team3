import {
  LucideAngularComponent,
  LucideAngularModule
} from "./chunk-JJ5YZZNZ.js";
import {
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-MW4S3Q6I.js";

// shared-design/src/lib/button/button.component.ts
function ButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("img", ctx_r0.icon())("size", ctx_r0.iconSize());
  }
}
function ButtonComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("img", ctx_r0.icon())("size", ctx_r0.iconSize());
  }
}
var ButtonComponent = class _ButtonComponent {
  label = input("Click me", ...ngDevMode ? [{ debugName: "label" }] : []);
  type = input("button", ...ngDevMode ? [{ debugName: "type" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  size = input("medium", ...ngDevMode ? [{ debugName: "size" }] : []);
  icon = input(void 0, ...ngDevMode ? [{ debugName: "icon" }] : []);
  iconPosition = input("left", ...ngDevMode ? [{ debugName: "iconPosition" }] : []);
  buttonClass = input("bg-maroon-600 dark:bg-soft-pink-300 text-white dark:text-zinc-800", ...ngDevMode ? [{ debugName: "buttonClass" }] : []);
  iconSize = input(16, ...ngDevMode ? [{ debugName: "iconSize" }] : []);
  clicked = output();
  onClick() {
    this.clicked.emit();
  }
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["shared-ui-button"]], inputs: { label: [1, "label"], type: [1, "type"], disabled: [1, "disabled"], size: [1, "size"], icon: [1, "icon"], iconPosition: [1, "iconPosition"], buttonClass: [1, "buttonClass"], iconSize: [1, "iconSize"] }, outputs: { clicked: "clicked" }, decls: 6, vars: 13, consts: [[3, "click", "type", "disabled"], [1, "flex", "items-center"], [3, "img", "size"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ButtonComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ButtonComponent_Conditional_2_Template, 1, 2, "lucide-icon", 2);
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, ButtonComponent_Conditional_5_Template, 1, 2, "lucide-icon", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate2("shared-button ", ctx.buttonClass(), " rounded-lg w-full disabled:bg-zinc-300 disabled:text-zinc-600 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-600 ", ctx.size()));
      \u0275\u0275property("type", ctx.type())("disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275classProp("justify-between", ctx.icon())("justify-center", !ctx.icon());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() && ctx.iconPosition() === "left" ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() && ctx.iconPosition() === "right" ? 5 : -1);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], styles: ["\n\n.shared-button.small[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 14px;\n}\n.shared-button.medium[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 16px;\n}\n.shared-button.large[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "shared-ui-button", standalone: true, imports: [LucideAngularModule], template: `<button
  [type]="type()"
  [disabled]="disabled()"
  (click)="onClick()"
  class="shared-button {{
    buttonClass()
  }} rounded-lg w-full disabled:bg-zinc-300 disabled:text-zinc-600 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-600 {{
    size()
  }}"
>
  <div
    class="flex items-center"
    [class.justify-between]="icon()"
    [class.justify-center]="!icon()"
  >
    <!-- Icon Left -->
    @if (icon() && iconPosition() === 'left') {
      <lucide-icon [img]="icon()" [size]="iconSize()"></lucide-icon>
    }

    <span>{{ label() }}</span>

    <!-- Icon Right -->
    @if (icon() && iconPosition() === 'right') {
      <lucide-icon [img]="icon()" [size]="iconSize()"></lucide-icon>
    }
  </div>
</button>
`, styles: ["/* shared-design/src/lib/button/button.component.css */\n.shared-button.small {\n  padding: 5px 10px;\n  font-size: 14px;\n}\n.shared-button.medium {\n  padding: 10px 20px;\n  font-size: 16px;\n}\n.shared-button.large {\n  padding: 12px 16px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=button.component.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], iconPosition: [{ type: Input, args: [{ isSignal: true, alias: "iconPosition", required: false }] }], buttonClass: [{ type: Input, args: [{ isSignal: true, alias: "buttonClass", required: false }] }], iconSize: [{ type: Input, args: [{ isSignal: true, alias: "iconSize", required: false }] }], clicked: [{ type: Output, args: ["clicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "shared-design/src/lib/button/button.component.ts", lineNumber: 11 });
})();

export {
  ButtonComponent
};
//# sourceMappingURL=chunk-7XJLG7MZ.js.map
