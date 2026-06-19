import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  exposes: {
    './routes': 'apps/dashboard/src/app/features/dashboard/dashboard.routes.ts',
    './wrapper':
      'apps/dashboard/src/app/layout/dashboard-wrapper/dashboard-wrapper.component.ts',
    './guard': 'apps/dashboard/src/app/core/guards/dashboard.guard.ts',
  },
  shared: (libraryName) => {
    if (libraryName.startsWith('primeng') || libraryName.startsWith('@primeuix')) {
      return false;
    }
    return undefined;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
