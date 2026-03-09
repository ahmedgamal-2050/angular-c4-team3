import {
  APP_ROUTES
} from "./chunk-XS4O3NDQ.js";
import "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/features/landing/landing.routes.ts
var landingRoutes = [
  { path: "", redirectTo: APP_ROUTES.LANDING.HOME, pathMatch: "full" },
  { path: APP_ROUTES.LANDING.HOME, loadComponent: () => import("./chunk-NOB23MTZ.js").then((m) => m.HomeComponent) },
  { path: APP_ROUTES.LANDING.PRODUCTS, loadComponent: () => import("./chunk-7ZS4TUBW.js").then((m) => m.ProductsComponent) },
  { path: `${APP_ROUTES.LANDING.PRODUCT_DETAILS}/:id`, loadComponent: () => import("./chunk-2NV5C2VR.js").then((m) => m.ProductDetailsComponent) }
];
export {
  landingRoutes
};
//# sourceMappingURL=chunk-MVPFBI6E.js.map
