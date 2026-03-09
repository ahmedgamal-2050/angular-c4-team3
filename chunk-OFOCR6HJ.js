import {
  APP_ROUTES
} from "./chunk-XS4O3NDQ.js";
import {
  Router
} from "./chunk-DVFFD4F4.js";
import {
  inject
} from "./chunk-MW4S3Q6I.js";
import "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/core/guards/forgetPassword.guard.ts
var forgetPasswordGuard = (route, state) => {
  const router = inject(Router);
  const passedForgetPassword = localStorage.getItem("passedForgetPassword");
  if (passedForgetPassword === "true") {
    return true;
  } else {
    router.navigate([`/${APP_ROUTES.AUTH.ROOT}/${APP_ROUTES.AUTH.FORGET_PASSWORD}`]);
    return false;
  }
};

// apps/angular-c4-team3/src/app/features/auth/auth.routes.ts
var authRoutes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-TMROSRRN.js").then((m) => m.LoginPage)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-ZOYQB4UR.js").then((m) => m.RegisterPage)
  },
  {
    path: "forget-password",
    loadComponent: () => import("./chunk-MOHMR5DG.js").then((m) => m.ForgetPasswordComponent)
  },
  {
    path: "set-password",
    loadComponent: () => import("./chunk-MXVLUOBL.js").then((m) => m.SetPasswordComponent),
    canActivate: [forgetPasswordGuard]
  }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-OFOCR6HJ.js.map
