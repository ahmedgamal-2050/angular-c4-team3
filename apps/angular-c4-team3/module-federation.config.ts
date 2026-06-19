import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'angular-c4-team3',
  remotes: ['dashboard'],
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
