import {
  APP_STORAGE
} from "./chunk-ET6XCIB7.js";
import {
  LucideAngularComponent,
  LucideAngularModule,
  Moon,
  Sun
} from "./chunk-JJ5YZZNZ.js";
import {
  TranslocoService
} from "./chunk-YBU5AOQC.js";
import {
  Component,
  Injectable,
  PLATFORM_ID,
  effect,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MW4S3Q6I.js";

// apps/angular-c4-team3/src/app/shared/components/lang-switcher/lang-switcher.component.ts
var LangSwitcherComponent = class _LangSwitcherComponent {
  translocoService = inject(TranslocoService);
  lang = signal(this.translocoService.getActiveLang(), ...ngDevMode ? [{ debugName: "lang" }] : []);
  changeLanguage() {
    const newLang = this.lang() === "en" ? "ar" : "en";
    this.translocoService.setActiveLang(newLang);
    this.lang.set(newLang);
    if (newLang === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    localStorage.setItem(APP_STORAGE.language, newLang);
  }
  static \u0275fac = function LangSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LangSwitcherComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LangSwitcherComponent, selectors: [["app-lang-switcher"]], decls: 2, vars: 1, consts: [[1, "text-zinc-700", "dark:text-zinc-200", "font-normal", "text-base", "font-zain", "rtl:font-sarabun", 3, "click"]], template: function LangSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function LangSwitcherComponent_Template_button_click_0_listener() {
        return ctx.changeLanguage();
      });
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.lang() === "en" ? "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "English", "\n");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LangSwitcherComponent, [{
    type: Component,
    args: [{ selector: "app-lang-switcher", imports: [], template: `<button
  (click)="changeLanguage()"
  class="text-zinc-700 dark:text-zinc-200 font-normal text-base font-zain rtl:font-sarabun"
>
  {{ lang() === 'en' ? '\u0627\u0644\u0639\u0631\u0628\u064A\u0629' : 'English' }}
</button>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LangSwitcherComponent, { className: "LangSwitcherComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/lang-switcher/lang-switcher.component.ts", lineNumber: 11 });
})();

// apps/angular-c4-team3/src/app/shared/services/theme.service.ts
var ThemeService = class _ThemeService {
  platformId = inject(PLATFORM_ID);
  // Default to light if not in browser or no preference saved
  darkMode = signal(false, ...ngDevMode ? [{ debugName: "darkMode" }] : []);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        this.darkMode.set(savedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.darkMode.set(prefersDark);
      }
    }
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const isDark = this.darkMode();
        if (isDark) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }
    });
  }
  toggleTheme() {
    this.darkMode.update((current) => !current);
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/angular-c4-team3/src/app/shared/components/theme-switcher/theme-switcher.component.ts
function ThemeSwitcherComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r0.Sun);
  }
}
function ThemeSwitcherComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("name", ctx_r0.Moon);
  }
}
var ThemeSwitcherComponent = class _ThemeSwitcherComponent {
  themeService = inject(ThemeService);
  Sun = Sun;
  Moon = Moon;
  static \u0275fac = function ThemeSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeSwitcherComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeSwitcherComponent, selectors: [["app-theme-switcher"]], decls: 3, vars: 2, consts: [[1, "p-2", "rounded-full", "hover:bg-gray-200", "dark:hover:bg-gray-700", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "click"], [1, "size-6", "text-yellow-400", 3, "name"], [1, "size-6", "text-gray-700", 3, "name"]], template: function ThemeSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ThemeSwitcherComponent_Template_button_click_0_listener() {
        return ctx.themeService.toggleTheme();
      });
      \u0275\u0275conditionalCreate(1, ThemeSwitcherComponent_Conditional_1_Template, 1, 1, "lucide-icon", 1)(2, ThemeSwitcherComponent_Conditional_2_Template, 1, 1, "lucide-icon", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.themeService.darkMode() ? "Switch to light mode" : "Switch to dark mode");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.themeService.darkMode() ? 1 : 2);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeSwitcherComponent, [{
    type: Component,
    args: [{
      selector: "app-theme-switcher",
      standalone: true,
      imports: [LucideAngularModule],
      template: `
    <button
      (click)="themeService.toggleTheme()"
      class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      [attr.aria-label]="
        themeService.darkMode() ? 'Switch to light mode' : 'Switch to dark mode'
      "
    >
      @if (themeService.darkMode()) {
        <!-- Sun Icon (for Dark Mode) -->
        <lucide-icon [name]="Sun" class="size-6 text-yellow-400" />
      } @else {
        <!-- Moon Icon (for Light Mode) -->
        <lucide-icon [name]="Moon" class="size-6 text-gray-700" />
      }
    </button>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeSwitcherComponent, { className: "ThemeSwitcherComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/theme-switcher/theme-switcher.component.ts", lineNumber: 27 });
})();

export {
  LangSwitcherComponent,
  ThemeService,
  ThemeSwitcherComponent
};
//# sourceMappingURL=chunk-F4Z32TR2.js.map
