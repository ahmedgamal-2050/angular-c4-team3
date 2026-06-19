/******/ var __webpack_modules__ = ({

/***/ 52547
(__unused_webpack_module, exports, __webpack_require__) {

var moduleMap = {
	"./routes": () => {
		return __webpack_require__.e(/* __federation_expose_routes */ 3806).then(() => (() => ((__webpack_require__(96219)))));
	},
	"./wrapper": () => {
		return Promise.all(/* __federation_expose_wrapper */[__webpack_require__.e(7399), __webpack_require__.e(9654), __webpack_require__.e(5211), __webpack_require__.e(8076), __webpack_require__.e(4118), __webpack_require__.e(6144), __webpack_require__.e(1393)]).then(() => (() => ((__webpack_require__(9939)))));
	},
	"./guard": () => {
		return Promise.all(/* __federation_expose_guard */[__webpack_require__.e(6144), __webpack_require__.e(1263)]).then(() => (() => ((__webpack_require__(74500)))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope, remoteEntryInitOptions) => {
	return __webpack_require__.federation.bundlerRuntime.initContainerEntry({	webpackRequire: __webpack_require__,
		shareScope: shareScope,
		initScope: initScope,
		remoteEntryInitOptions: remoteEntryInitOptions,
		shareScopeKey: "default"
	})
};


// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ },

/***/ 74523
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ },

/***/ 80906
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Al: () => (/* binding */ getResourceUrl),
/* harmony export */   Bb: () => (/* binding */ isDebugMode),
/* harmony export */   Jn: () => (/* binding */ generateSnapshotFromManifest),
/* harmony export */   ML: () => (/* binding */ safeToString),
/* harmony export */   OL: () => (/* binding */ isBrowserEnv),
/* harmony export */   R8: () => (/* binding */ warn),
/* harmony export */   Tr: () => (/* binding */ isManifestProvider),
/* harmony export */   d: () => (/* binding */ createLink),
/* harmony export */   e4: () => (/* binding */ decodeName),
/* harmony export */   h: () => (/* binding */ createLogger),
/* harmony export */   k0: () => (/* binding */ loadScript),
/* harmony export */   lG: () => (/* binding */ composeKeyWithSeparator),
/* harmony export */   oe: () => (/* binding */ loadScriptNode),
/* harmony export */   so: () => (/* binding */ createScript),
/* harmony export */   tf: () => (/* binding */ isReactNativeEnv),
/* harmony export */   yq: () => (/* binding */ ENCODE_NAME_PREFIX)
/* harmony export */ });
/* unused harmony exports BROWSER_LOG_KEY, EncodedNameTransformMap, FederationModuleManifest, MANIFEST_EXT, MFModuleType, MFPrefetchCommon, MODULE_DEVTOOL_IDENTIFIER, ManifestFileName, NameTransformMap, NameTransformSymbol, SEPARATOR, StatsFileName, TEMP_DIR, assert, bindLoggerToCompiler, containerPlugin, containerReferencePlugin, createInfrastructureLogger, createModuleFederationConfig, createScriptNode, encodeName, error, generateExposeFilename, generateShareFilename, getManifestFileName, getProcessEnv, inferAutoPublicPath, infrastructureLogger, isRequiredVersion, isStaticResourcesEqual, logger, moduleFederationPlugin, normalizeOptions, parseEntry, safeWrapper, sharePlugin, simpleJoinRemoteEntry */
/* harmony import */ var D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74523);

const FederationModuleManifest = 'federation-manifest.json';
const MANIFEST_EXT = '.json';
const BROWSER_LOG_KEY = 'FEDERATION_DEBUG';
const NameTransformSymbol = {
  AT: '@',
  HYPHEN: '-',
  SLASH: '/'
};
const NameTransformMap = {
  [NameTransformSymbol.AT]: 'scope_',
  [NameTransformSymbol.HYPHEN]: '_',
  [NameTransformSymbol.SLASH]: '__'
};
const EncodedNameTransformMap = {
  [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
  [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
  [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ':';
const ManifestFileName = 'mf-manifest.json';
const StatsFileName = 'mf-stats.json';
const MFModuleType = {
  NPM: 'npm',
  APP: 'app'
};
const MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';
const ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
const TEMP_DIR = '.federation';
const MFPrefetchCommon = {
  identifier: 'MFDataPrefetch',
  globalKey: '__PREFETCH__',
  library: 'mf-data-prefetch',
  exportsKey: '__PREFETCH_EXPORTS__',
  fileName: 'bootstrap.js'
};

/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

var ContainerPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

var ContainerReferencePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var ModuleFederationPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

var SharePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
function isBrowserEnv() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}
function isReactNativeEnv() {
  return typeof navigator !== 'undefined' && navigator?.product === 'ReactNative';
}
function isBrowserDebug() {
  try {
    if (isBrowserEnv() && window.localStorage) {
      return Boolean(localStorage.getItem(BROWSER_LOG_KEY));
    }
  } catch (error) {
    return false;
  }
  return false;
}
function isDebugMode() {
  if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {
    return Boolean(process.env['FEDERATION_DEBUG']);
  }
  if (typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG)) {
    return true;
  }
  return isBrowserDebug();
}
const getProcessEnv = function () {
  return typeof process !== 'undefined' && process.env ? process.env : {};
};
const LOG_CATEGORY = '[ Federation Runtime ]';
// entry: name:version   version : 1.0.0 | ^1.2.3
// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR) => {
  const strSplit = str.split(separator);
  const devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;
  const defaultVersion = '*';
  const isEntry = s => s.startsWith('http') || s.includes(MANIFEST_EXT);
  // Check if the string starts with a type
  if (strSplit.length >= 2) {
    let [name, ...versionOrEntryArr] = strSplit;
    // @name@manifest-url.json
    if (str.startsWith(separator)) {
      name = strSplit.slice(0, 2).join(separator);
      versionOrEntryArr = [devVersionOrUrl || strSplit.slice(2).join(separator)];
    }
    let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
    if (isEntry(versionOrEntry)) {
      return {
        name,
        entry: versionOrEntry
      };
    } else {
      // Apply version rule
      // devVersionOrUrl => inputVersion => defaultVersion
      return {
        name,
        version: versionOrEntry || defaultVersion
      };
    }
  } else if (strSplit.length === 1) {
    const [name] = strSplit;
    if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
      return {
        name,
        entry: devVersionOrUrl
      };
    }
    return {
      name,
      version: devVersionOrUrl || defaultVersion
    };
  } else {
    throw `Invalid entry value: ${str}`;
  }
};
const composeKeyWithSeparator = function (...args) {
  if (!args.length) {
    return '';
  }
  return args.reduce((sum, cur) => {
    if (!cur) {
      return sum;
    }
    if (!sum) {
      return cur;
    }
    return `${sum}${SEPARATOR}${cur}`;
  }, '');
};
const encodeName = function (name, prefix = '', withExt = false) {
  try {
    const ext = withExt ? '.js' : '';
    return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, 'g'), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
  } catch (err) {
    throw err;
  }
};
const decodeName = function (name, prefix, withExt) {
  try {
    let decodedName = name;
    if (prefix) {
      if (!decodedName.startsWith(prefix)) {
        return decodedName;
      }
      decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
    }
    decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
    if (withExt) {
      decodedName = decodedName.replace('.js', '');
    }
    return decodedName;
  } catch (err) {
    throw err;
  }
};
const generateExposeFilename = (exposeName, withExt) => {
  if (!exposeName) {
    return '';
  }
  let expose = exposeName;
  if (expose === '.') {
    expose = 'default_export';
  }
  if (expose.startsWith('./')) {
    expose = expose.replace('./', '');
  }
  return encodeName(expose, '__federation_expose_', withExt);
};
const generateShareFilename = (pkgName, withExt) => {
  if (!pkgName) {
    return '';
  }
  return encodeName(pkgName, '__federation_shared_', withExt);
};
const getResourceUrl = (module, sourceUrl) => {
  if ('getPublicPath' in module) {
    let publicPath;
    if (!module.getPublicPath.startsWith('function')) {
      publicPath = new Function(module.getPublicPath)();
    } else {
      publicPath = new Function('return ' + module.getPublicPath)()();
    }
    return `${publicPath}${sourceUrl}`;
  } else if ('publicPath' in module) {
    if (!isBrowserEnv() && !isReactNativeEnv() && 'ssrPublicPath' in module) {
      return `${module.ssrPublicPath}${sourceUrl}`;
    }
    return `${module.publicPath}${sourceUrl}`;
  } else {
    console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);
    return '';
  }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const assert = (condition, msg) => {
  if (!condition) {
    error(msg);
  }
};
const error = msg => {
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
};
const warn = msg => {
  console.warn(`${LOG_CATEGORY}: ${msg}`);
};
function safeToString(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return '';
  }
}
// RegExp for version string
const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
function isRequiredVersion(str) {
  return VERSION_PATTERN_REGEXP.test(str);
}
const simpleJoinRemoteEntry = (rPath, rName) => {
  if (!rPath) {
    return rName;
  }
  const transformPath = str => {
    if (str === '.') {
      return '';
    }
    if (str.startsWith('./')) {
      return str.replace('./', '');
    }
    if (str.startsWith('/')) {
      const strWithoutSlash = str.slice(1);
      if (strWithoutSlash.endsWith('/')) {
        return strWithoutSlash.slice(0, -1);
      }
      return strWithoutSlash;
    }
    return str;
  };
  const transformedPath = transformPath(rPath);
  if (!transformedPath) {
    return rName;
  }
  if (transformedPath.endsWith('/')) {
    return `${transformedPath}${rName}`;
  }
  return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url) {
  return url.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
}
// Priority: overrides > remotes
// eslint-disable-next-line max-lines-per-function
function generateSnapshotFromManifest(manifest, options = {}) {
  const {
    remotes = {},
    overrides = {},
    version
  } = options;
  let remoteSnapshot;
  const getPublicPath = () => {
    if ('publicPath' in manifest.metaData) {
      if (manifest.metaData.publicPath === 'auto' && version) {
        // use same implementation as publicPath auto runtime module implements
        return inferAutoPublicPath(version);
      }
      return manifest.metaData.publicPath;
    } else {
      return manifest.metaData.getPublicPath;
    }
  };
  const overridesKeys = Object.keys(overrides);
  let remotesInfo = {};
  // If remotes are not provided, only the remotes in the manifest will be read
  if (!Object.keys(remotes).length) {
    remotesInfo = manifest.remotes?.reduce((res, next) => {
      let matchedVersion;
      const name = next.federationContainerName;
      // overrides have higher priority
      if (overridesKeys.includes(name)) {
        matchedVersion = overrides[name];
      } else {
        if ('version' in next) {
          matchedVersion = next.version;
        } else {
          matchedVersion = next.entry;
        }
      }
      res[name] = {
        matchedVersion
      };
      return res;
    }, {}) || {};
  }
  // If remotes (deploy scenario) are specified, they need to be traversed again
  Object.keys(remotes).forEach(key => remotesInfo[key] = {
    // overrides will override dependencies
    matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
  });
  const {
    remoteEntry: {
      path: remoteEntryPath,
      name: remoteEntryName,
      type: remoteEntryType
    },
    types: remoteTypes = {
      path: '',
      name: '',
      zip: '',
      api: ''
    },
    buildInfo: {
      buildVersion
    },
    globalName,
    ssrRemoteEntry
  } = manifest.metaData;
  const {
    exposes
  } = manifest;
  let basicRemoteSnapshot = {
    version: version ? version : '',
    buildVersion,
    globalName,
    remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
    remoteEntryType,
    remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
    remoteTypesZip: remoteTypes.zip || '',
    remoteTypesAPI: remoteTypes.api || '',
    remotesInfo,
    shared: manifest?.shared.map(item => ({
      assets: item.assets,
      sharedName: item.name,
      version: item.version
    })),
    modules: exposes?.map(expose => ({
      moduleName: expose.name,
      modulePath: expose.path,
      assets: expose.assets
    }))
  };
  if (manifest.metaData?.prefetchInterface) {
    const prefetchInterface = manifest.metaData.prefetchInterface;
    basicRemoteSnapshot = {
      ...basicRemoteSnapshot,
      prefetchInterface
    };
  }
  if (manifest.metaData?.prefetchEntry) {
    const {
      path,
      name,
      type
    } = manifest.metaData.prefetchEntry;
    basicRemoteSnapshot = {
      ...basicRemoteSnapshot,
      prefetchEntry: simpleJoinRemoteEntry(path, name),
      prefetchEntryType: type
    };
  }
  if ('publicPath' in manifest.metaData) {
    remoteSnapshot = {
      ...basicRemoteSnapshot,
      publicPath: getPublicPath(),
      ssrPublicPath: manifest.metaData.ssrPublicPath
    };
  } else {
    remoteSnapshot = {
      ...basicRemoteSnapshot,
      getPublicPath: getPublicPath()
    };
  }
  if (ssrRemoteEntry) {
    const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
    remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
    remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || 'commonjs-module';
  }
  return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
  if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
    return true;
  } else {
    return false;
  }
}
function getManifestFileName(manifestOptions) {
  if (!manifestOptions) {
    return {
      statsFileName: StatsFileName,
      manifestFileName: ManifestFileName
    };
  }
  let filePath = typeof manifestOptions === 'boolean' ? '' : manifestOptions.filePath || '';
  let fileName = typeof manifestOptions === 'boolean' ? '' : manifestOptions.fileName || '';
  const JSON_EXT = '.json';
  const addExt = name => {
    if (name.endsWith(JSON_EXT)) {
      return name;
    }
    return `${name}${JSON_EXT}`;
  };
  const insertSuffix = (name, suffix) => {
    return name.replace(JSON_EXT, `${suffix}${JSON_EXT}`);
  };
  const manifestFileName = fileName ? addExt(fileName) : ManifestFileName;
  const statsFileName = fileName ? insertSuffix(manifestFileName, '-stats') : StatsFileName;
  return {
    statsFileName: simpleJoinRemoteEntry(filePath, statsFileName),
    manifestFileName: simpleJoinRemoteEntry(filePath, manifestFileName)
  };
}
const PREFIX = '[ Module Federation ]';
const DEFAULT_DELEGATE = console;
const LOGGER_STACK_SKIP_TOKENS = ['logger.ts', 'logger.js', 'captureStackTrace', 'Logger.emit', 'Logger.log', 'Logger.info', 'Logger.warn', 'Logger.error', 'Logger.debug'];
function captureStackTrace() {
  try {
    const stack = new Error().stack;
    if (!stack) {
      return undefined;
    }
    const [, ...rawLines] = stack.split('\n');
    const filtered = rawLines.filter(line => !LOGGER_STACK_SKIP_TOKENS.some(token => line.includes(token)));
    if (!filtered.length) {
      return undefined;
    }
    const stackPreview = filtered.slice(0, 5).join('\n');
    return `Stack trace:\n${stackPreview}`;
  } catch {
    return undefined;
  }
}
class Logger {
  constructor(prefix, delegate = DEFAULT_DELEGATE) {
    this.prefix = prefix;
    this.delegate = delegate ?? DEFAULT_DELEGATE;
  }
  setPrefix(prefix) {
    this.prefix = prefix;
  }
  setDelegate(delegate) {
    this.delegate = delegate ?? DEFAULT_DELEGATE;
  }
  emit(method, args) {
    const delegate = this.delegate;
    const debugMode = isDebugMode();
    const stackTrace = debugMode ? captureStackTrace() : undefined;
    const enrichedArgs = stackTrace ? [...args, stackTrace] : args;
    const order = (() => {
      switch (method) {
        case 'log':
          return ['log', 'info'];
        case 'info':
          return ['info', 'log'];
        case 'warn':
          return ['warn', 'info', 'log'];
        case 'error':
          return ['error', 'warn', 'log'];
        case 'debug':
        default:
          return ['debug', 'log'];
      }
    })();
    for (const candidate of order) {
      const handler = delegate[candidate];
      if (typeof handler === 'function') {
        handler.call(delegate, this.prefix, ...enrichedArgs);
        return;
      }
    }
    for (const candidate of order) {
      const handler = DEFAULT_DELEGATE[candidate];
      if (typeof handler === 'function') {
        handler.call(DEFAULT_DELEGATE, this.prefix, ...enrichedArgs);
        return;
      }
    }
  }
  log(...args) {
    this.emit('log', args);
  }
  warn(...args) {
    this.emit('warn', args);
  }
  error(...args) {
    this.emit('error', args);
  }
  success(...args) {
    this.emit('info', args);
  }
  info(...args) {
    this.emit('info', args);
  }
  ready(...args) {
    this.emit('info', args);
  }
  debug(...args) {
    if (isDebugMode()) {
      this.emit('debug', args);
    }
  }
}
function createLogger(prefix) {
  return new Logger(prefix);
}
function createInfrastructureLogger(prefix) {
  const infrastructureLogger = new Logger(prefix);
  Object.defineProperty(infrastructureLogger, '__mf_infrastructure_logger__', {
    value: true,
    enumerable: false,
    configurable: false
  });
  return infrastructureLogger;
}
function bindLoggerToCompiler(loggerInstance, compiler, name) {
  if (!loggerInstance.__mf_infrastructure_logger__) {
    return;
  }
  if (!compiler?.getInfrastructureLogger) {
    return;
  }
  try {
    const infrastructureLogger = compiler.getInfrastructureLogger(name);
    if (infrastructureLogger && typeof infrastructureLogger === 'object' && (typeof infrastructureLogger.log === 'function' || typeof infrastructureLogger.info === 'function' || typeof infrastructureLogger.warn === 'function' || typeof infrastructureLogger.error === 'function')) {
      loggerInstance.setDelegate(infrastructureLogger);
    }
  } catch {
    // If the bundler throws (older versions), fall back to default console logger.
    loggerInstance.setDelegate(undefined);
  }
}
const logger = createLogger(PREFIX);
const infrastructureLogger = createInfrastructureLogger(PREFIX);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeWrapper(_x, _x2) {
  return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
  _safeWrapper = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (callback, disableWarn) {
    try {
      const res = yield callback();
      return res;
    } catch (e) {
      !disableWarn && warn(e);
      return;
    }
  });
  return _safeWrapper.apply(this, arguments);
}
function isStaticResourcesEqual(url1, url2) {
  const REG_EXP = /^(https?:)?\/\//i;
  // Transform url1 and url2 into relative paths
  const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
  const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
  // Check if the relative paths are identical
  return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
  // Retrieve the existing script element by its src attribute
  let script = null;
  let needAttach = true;
  let timeout = 20000;
  let timeoutId;
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const s = scripts[i];
    const scriptSrc = s.getAttribute('src');
    if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
      script = s;
      needAttach = false;
      break;
    }
  }
  if (!script) {
    const attrs = info.attrs;
    script = document.createElement('script');
    script.type = attrs?.['type'] === 'module' ? 'module' : 'text/javascript';
    let createScriptRes = undefined;
    if (info.createScriptHook) {
      createScriptRes = info.createScriptHook(info.url, info.attrs);
      if (createScriptRes instanceof HTMLScriptElement) {
        script = createScriptRes;
      } else if (typeof createScriptRes === 'object') {
        if ('script' in createScriptRes && createScriptRes.script) {
          script = createScriptRes.script;
        }
        if ('timeout' in createScriptRes && createScriptRes.timeout) {
          timeout = createScriptRes.timeout;
        }
      }
    }
    if (!script.src) {
      script.src = info.url;
    }
    if (attrs && !createScriptRes) {
      Object.keys(attrs).forEach(name => {
        if (script) {
          if (name === 'async' || name === 'defer') {
            script[name] = attrs[name];
            // Attributes that do not exist are considered overridden
          } else if (!script.getAttribute(name)) {
            script.setAttribute(name, attrs[name]);
          }
        }
      });
    }
  }
  const onScriptComplete = /*#__PURE__*/function () {
    var _ref = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (prev,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event) {
      clearTimeout(timeoutId);
      const onScriptCompleteCallback = () => {
        if (event?.type === 'error') {
          info?.onErrorCallback && info?.onErrorCallback(event);
        } else {
          info?.cb && info?.cb();
        }
      };
      // Prevent memory leaks in IE.
      if (script) {
        script.onerror = null;
        script.onload = null;
        safeWrapper(() => {
          const {
            needDeleteScript = true
          } = info;
          if (needDeleteScript) {
            script?.parentNode && script.parentNode.removeChild(script);
          }
        });
        if (prev && typeof prev === 'function') {
          const result = prev(event);
          if (result instanceof Promise) {
            const res = yield result;
            onScriptCompleteCallback();
            return res;
          }
          onScriptCompleteCallback();
          return result;
        }
      }
      onScriptCompleteCallback();
    });
    return function onScriptComplete(_x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  script.onerror = onScriptComplete.bind(null, script.onerror);
  script.onload = onScriptComplete.bind(null, script.onload);
  timeoutId = setTimeout(() => {
    onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
  }, timeout);
  return {
    script,
    needAttach
  };
}
function createLink(info) {
  // <link rel="preload" href="script.js" as="script">
  // Retrieve the existing script element by its src attribute
  let link = null;
  let needAttach = true;
  const links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    const l = links[i];
    const linkHref = l.getAttribute('href');
    const linkRel = l.getAttribute('rel');
    if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRel === info.attrs['rel']) {
      link = l;
      needAttach = false;
      break;
    }
  }
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('href', info.url);
    let createLinkRes = undefined;
    const attrs = info.attrs;
    if (info.createLinkHook) {
      createLinkRes = info.createLinkHook(info.url, attrs);
      if (createLinkRes instanceof HTMLLinkElement) {
        link = createLinkRes;
      }
    }
    if (attrs && !createLinkRes) {
      Object.keys(attrs).forEach(name => {
        if (link && !link.getAttribute(name)) {
          link.setAttribute(name, attrs[name]);
        }
      });
    }
  }
  const onLinkComplete = (prev,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event) => {
    const onLinkCompleteCallback = () => {
      if (event?.type === 'error') {
        info?.onErrorCallback && info?.onErrorCallback(event);
      } else {
        info?.cb && info?.cb();
      }
    };
    // Prevent memory leaks in IE.
    if (link) {
      link.onerror = null;
      link.onload = null;
      safeWrapper(() => {
        const {
          needDeleteLink = true
        } = info;
        if (needDeleteLink) {
          link?.parentNode && link.parentNode.removeChild(link);
        }
      });
      if (prev) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = prev(event);
        onLinkCompleteCallback();
        return res;
      }
    }
    onLinkCompleteCallback();
  };
  link.onerror = onLinkComplete.bind(null, link.onerror);
  link.onload = onLinkComplete.bind(null, link.onload);
  return {
    link,
    needAttach
  };
}
function loadScript(url, info) {
  const {
    attrs = {},
    createScriptHook
  } = info;
  return new Promise((resolve, reject) => {
    const {
      script,
      needAttach
    } = createScript({
      url,
      cb: resolve,
      onErrorCallback: reject,
      attrs: {
        fetchpriority: 'high',
        ...attrs
      },
      createScriptHook,
      needDeleteScript: true
    });
    needAttach && document.head.appendChild(script);
  });
}
const sdkImportCache = new Map();
function importNodeModule(name) {
  if (!name) {
    throw new Error('import specifier is required');
  }
  // Check cache to prevent infinite recursion
  if (sdkImportCache.has(name)) {
    return sdkImportCache.get(name);
  }
  const importModule = new Function('name', `return import(name)`);
  const promise = importModule(name).then(res => res).catch(error => {
    console.error(`Error importing module ${name}:`, error);
    // Remove from cache on error so it can be retried
    sdkImportCache.delete(name);
    throw error;
  });
  // Cache the promise to prevent recursive calls
  sdkImportCache.set(name, promise);
  return promise;
}
const loadNodeFetch = /*#__PURE__*/function () {
  var _ref2 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
    const fetchModule = yield importNodeModule('node-fetch');
    return fetchModule.default || fetchModule;
  });
  return function loadNodeFetch() {
    return _ref2.apply(this, arguments);
  };
}();
const lazyLoaderHookFetch = /*#__PURE__*/function () {
  var _ref3 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (input, init, loaderHook) {
    const hook = (url, init) => {
      return loaderHook.lifecycle.fetch.emit(url, init);
    };
    const res = yield hook(input, init || {});
    if (!res || !(res instanceof Response)) {
      const fetchFunction = typeof fetch === 'undefined' ? yield loadNodeFetch() : fetch;
      return fetchFunction(input, init || {});
    }
    return res;
  });
  return function lazyLoaderHookFetch(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
const createScriptNode = typeof ENV_TARGET === 'undefined' || ENV_TARGET !== 'web' ? (url, cb, attrs, loaderHook) => {
  if (loaderHook?.createScriptHook) {
    const hookResult = loaderHook.createScriptHook(url);
    if (hookResult && typeof hookResult === 'object' && 'url' in hookResult) {
      url = hookResult.url;
    }
  }
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch (e) {
    console.error('Error constructing URL:', e);
    cb(new Error(`Invalid URL: ${e}`));
    return;
  }
  const getFetch = /*#__PURE__*/function () {
    var _ref4 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
      if (loaderHook?.fetch) {
        return (input, init) => lazyLoaderHookFetch(input, init, loaderHook);
      }
      return typeof fetch === 'undefined' ? loadNodeFetch() : fetch;
    });
    return function getFetch() {
      return _ref4.apply(this, arguments);
    };
  }();
  const handleScriptFetch = /*#__PURE__*/function () {
    var _ref5 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (f, urlObj) {
      try {
        const res = yield f(urlObj.href);
        const data = yield res.text();
        const [path, vm] = yield Promise.all([importNodeModule('path'), importNodeModule('vm')]);
        const scriptContext = {
          exports: {},
          module: {
            exports: {}
          }
        };
        const urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');
        const filename = path.basename(urlObj.pathname);
        const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
          filename,
          importModuleDynamically:
          //@ts-ignore
          vm.constants?.USE_MAIN_CONTEXT_DEFAULT_LOADER ?? importNodeModule
        });
        script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);
        const exportedInterface = scriptContext.module.exports || scriptContext.exports;
        if (attrs && exportedInterface && attrs['globalName']) {
          const container = exportedInterface[attrs['globalName']] || exportedInterface;
          cb(undefined, container);
          return;
        }
        cb(undefined, exportedInterface);
      } catch (e) {
        cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
      }
    });
    return function handleScriptFetch(_x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }();
  getFetch().then(/*#__PURE__*/function () {
    var _ref6 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (f) {
      if (attrs?.['type'] === 'esm' || attrs?.['type'] === 'module') {
        return loadModule(urlObj.href, {
          fetch: f,
          vm: yield importNodeModule('vm')
        }).then(/*#__PURE__*/function () {
          var _ref7 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (module) {
            yield module.evaluate();
            cb(undefined, module.namespace);
          });
          return function (_x1) {
            return _ref7.apply(this, arguments);
          };
        }()).catch(e => {
          cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
        });
      }
      handleScriptFetch(f, urlObj);
    });
    return function (_x0) {
      return _ref6.apply(this, arguments);
    };
  }()).catch(err => {
    cb(err);
  });
} : (url, cb, attrs, loaderHook) => {
  cb(new Error('createScriptNode is disabled in non-Node.js environment'));
};
const loadScriptNode = typeof ENV_TARGET === 'undefined' || ENV_TARGET !== 'web' ? (url, info) => {
  return new Promise((resolve, reject) => {
    createScriptNode(url, (error, scriptContext) => {
      if (error) {
        reject(error);
      } else {
        const remoteEntryKey = info?.attrs?.['globalName'] || `__FEDERATION_${info?.attrs?.['name']}:custom__`;
        const entryExports = globalThis[remoteEntryKey] = scriptContext;
        resolve(entryExports);
      }
    }, info.attrs, info.loaderHook);
  });
} : (url, info) => {
  throw new Error('loadScriptNode is disabled in non-Node.js environment');
};
const esmModuleCache = new Map();
function loadModule(_x10, _x11) {
  return _loadModule.apply(this, arguments);
}
function _loadModule() {
  _loadModule = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (url, options) {
    // Check cache to prevent infinite recursion in ESM loading
    if (esmModuleCache.has(url)) {
      return esmModuleCache.get(url);
    }
    const {
      fetch,
      vm
    } = options;
    const response = yield fetch(url);
    const code = yield response.text();
    const module = new vm.SourceTextModule(code, {
      // @ts-ignore
      importModuleDynamically: function () {
        var _ref8 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (specifier, script) {
          const resolvedUrl = new URL(specifier, url).href;
          return loadModule(resolvedUrl, options);
        });
        return function importModuleDynamically(_x12, _x13) {
          return _ref8.apply(this, arguments);
        };
      }()
    });
    // Cache the module before linking to prevent cycles
    esmModuleCache.set(url, module);
    yield module.link(/*#__PURE__*/function () {
      var _ref9 = (0,D_work_Elevate_angular_c4_team3_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (specifier) {
        const resolvedUrl = new URL(specifier, url).href;
        const module = yield loadModule(resolvedUrl, options);
        return module;
      });
      return function (_x14) {
        return _ref9.apply(this, arguments);
      };
    }());
    return module;
  });
  return _loadModule.apply(this, arguments);
}
function normalizeOptions(enableDefault, defaultOptions, key) {
  return function (options) {
    if (options === false) {
      return false;
    }
    if (typeof options === 'undefined') {
      if (enableDefault) {
        return defaultOptions;
      } else {
        return false;
      }
    }
    if (options === true) {
      return defaultOptions;
    }
    if (options && typeof options === 'object') {
      return {
        ...defaultOptions,
        ...options
      };
    }
    throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
  };
}
const createModuleFederationConfig = options => {
  return options;
};

//# sourceMappingURL=index.esm.js.map

/***/ },

/***/ 83892
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// NAMESPACE OBJECT: ./node_modules/@module-federation/runtime/dist/index.esm.js
var runtime_dist_index_esm_namespaceObject = {};
__webpack_require__.r(runtime_dist_index_esm_namespaceObject);
__webpack_require__.d(runtime_dist_index_esm_namespaceObject, {
  Module: () => (Module),
  ModuleFederation: () => (ModuleFederation),
  createInstance: () => (createInstance),
  getInstance: () => (getInstance),
  getRemoteEntry: () => (getRemoteEntry),
  getRemoteInfo: () => (getRemoteInfo),
  init: () => (init),
  loadRemote: () => (loadRemote),
  loadScript: () => (index_esm/* loadScript */.k0),
  loadScriptNode: () => (index_esm/* loadScriptNode */.oe),
  loadShare: () => (loadShare),
  loadShareSync: () => (loadShareSync),
  preloadRemote: () => (preloadRemote),
  registerGlobalPlugins: () => (registerGlobalPlugins),
  registerPlugins: () => (index_esm_registerPlugins),
  registerRemotes: () => (registerRemotes),
  registerShared: () => (registerShared)
});

// EXTERNAL MODULE: ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(74523);
// EXTERNAL MODULE: ./node_modules/@module-federation/sdk/dist/index.esm.js
var index_esm = __webpack_require__(80906);
;// ./node_modules/@module-federation/error-codes/dist/index.esm.mjs
const RUNTIME_001 = 'RUNTIME-001';
const RUNTIME_002 = 'RUNTIME-002';
const RUNTIME_003 = 'RUNTIME-003';
const RUNTIME_004 = 'RUNTIME-004';
const RUNTIME_005 = 'RUNTIME-005';
const RUNTIME_006 = 'RUNTIME-006';
const RUNTIME_007 = 'RUNTIME-007';
const RUNTIME_008 = 'RUNTIME-008';
const RUNTIME_009 = 'RUNTIME-009';
const TYPE_001 = 'TYPE-001';
const BUILD_001 = 'BUILD-001';
const BUILD_002 = 'BUILD-002';
const getDocsUrl = errorCode => {
  const type = errorCode.split('-')[0].toLowerCase();
  return `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${type}/${errorCode}`;
};
const getShortErrorMsg = (errorCode, errorDescMap, args, originalErrorMsg) => {
  const msg = [`${[errorDescMap[errorCode]]} #${errorCode}`];
  args && msg.push(`args: ${JSON.stringify(args)}`);
  msg.push(getDocsUrl(errorCode));
  originalErrorMsg && msg.push(`Original Error Message:\n ${originalErrorMsg}`);
  return msg.join('\n');
};
const runtimeDescMap = {
  [RUNTIME_001]: 'Failed to get remoteEntry exports.',
  [RUNTIME_002]: 'The remote entry interface does not contain "init"',
  [RUNTIME_003]: 'Failed to get manifest.',
  [RUNTIME_004]: 'Failed to locate remote.',
  [RUNTIME_005]: 'Invalid loadShareSync function call from bundler runtime',
  [RUNTIME_006]: 'Invalid loadShareSync function call from runtime',
  [RUNTIME_007]: 'Failed to get remote snapshot.',
  [RUNTIME_008]: 'Failed to load script resources.',
  [RUNTIME_009]: 'Please call createInstance first.'
};
const typeDescMap = {
  [TYPE_001]: 'Failed to generate type declaration. Execute the below cmd to reproduce and fix the error.'
};
const buildDescMap = {
  [BUILD_001]: 'Failed to find expose module.',
  [BUILD_002]: 'PublicPath is required in prod mode.'
};
const errorDescMap = {
  ...runtimeDescMap,
  ...typeDescMap,
  ...buildDescMap
};

//# sourceMappingURL=index.esm.mjs.map
;// ./node_modules/@module-federation/runtime-core/dist/index.esm.js




const LOG_CATEGORY = '[ Federation Runtime ]';
// FIXME: pre-bundle ?
const logger = (0,index_esm/* createLogger */.h)(LOG_CATEGORY);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function assert(condition, msg) {
  if (!condition) {
    error(msg);
  }
}
function error(msg) {
  if (msg instanceof Error) {
    // Check if the message already starts with the log category to avoid duplication
    if (!msg.message.startsWith(LOG_CATEGORY)) {
      msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    }
    throw msg;
  }
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
  if (msg instanceof Error) {
    // Check if the message already starts with the log category to avoid duplication
    if (!msg.message.startsWith(LOG_CATEGORY)) {
      msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    }
    logger.warn(msg);
  } else {
    logger.warn(msg);
  }
}
function addUniqueItem(arr, item) {
  if (arr.findIndex(name => name === item) === -1) {
    arr.push(item);
  }
  return arr;
}
function getFMId(remoteInfo) {
  if ('version' in remoteInfo && remoteInfo.version) {
    return `${remoteInfo.name}:${remoteInfo.version}`;
  } else if ('entry' in remoteInfo && remoteInfo.entry) {
    return `${remoteInfo.name}:${remoteInfo.entry}`;
  } else {
    return `${remoteInfo.name}`;
  }
}
function isRemoteInfoWithEntry(remote) {
  return typeof remote.entry !== 'undefined';
}
function isPureRemoteEntry(remote) {
  return !remote.entry.includes('.json');
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeWrapper(_x, _x2) {
  return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
  _safeWrapper = _asyncToGenerator(function* (callback, disableWarn) {
    try {
      const res = yield callback();
      return res;
    } catch (e) {
      !disableWarn && warn(e);
      return;
    }
  });
  return _safeWrapper.apply(this, arguments);
}
function isObject(val) {
  return val && typeof val === 'object';
}
const objectToString = Object.prototype.toString;
// eslint-disable-next-line @typescript-eslint/ban-types
function isPlainObject(val) {
  return objectToString.call(val) === '[object Object]';
}
function isStaticResourcesEqual(url1, url2) {
  const REG_EXP = /^(https?:)?\/\//i;
  // Transform url1 and url2 into relative paths
  const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
  const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
  // Check if the relative paths are identical
  return relativeUrl1 === relativeUrl2;
}
function arrayOptions(options) {
  return Array.isArray(options) ? options : [options];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
  const defaultRemoteEntryInfo = {
    url: '',
    type: 'global',
    globalName: ''
  };
  if ((0,index_esm/* isBrowserEnv */.OL)() || (0,index_esm/* isReactNativeEnv */.tf)()) {
    return 'remoteEntry' in snapshot ? {
      url: snapshot.remoteEntry,
      type: snapshot.remoteEntryType,
      globalName: snapshot.globalName
    } : defaultRemoteEntryInfo;
  }
  if ('ssrRemoteEntry' in snapshot) {
    return {
      url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
      type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
      globalName: snapshot.globalName
    };
  }
  return defaultRemoteEntryInfo;
}
const processModuleAlias = (name, subPath) => {
  // @host/ ./button -> @host/button
  let moduleName;
  if (name.endsWith('/')) {
    moduleName = name.slice(0, -1);
  } else {
    moduleName = name;
  }
  if (subPath.startsWith('.')) {
    subPath = subPath.slice(1);
  }
  moduleName = moduleName + subPath;
  return moduleName;
};
const CurrentGlobal = typeof globalThis === 'object' ? globalThis : window;
const nativeGlobal = (() => {
  try {
    // get real window (incase of sandbox)
    return document.defaultView;
  } catch {
    // node env
    return CurrentGlobal;
  }
})();
const Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
  Object.defineProperty(target, key, {
    value: val,
    configurable: false,
    writable: true
  });
}
function includeOwnProperty(target, key) {
  return Object.hasOwnProperty.call(target, key);
}
// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.
// The sandbox in the microfrontend does not replicate the value of 'configurable'.
// If there is no loading content on the global object, this section defines the loading object.
if (!includeOwnProperty(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {
  definePropertyGlobalVal(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});
}
const globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
  if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {
    definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);
  }
  if (!includeOwnProperty(target, '__FEDERATION__')) {
    definePropertyGlobalVal(target, '__FEDERATION__', {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: new Map()
    });
    definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);
  }
  target.__FEDERATION__.__GLOBAL_PLUGIN__ ??= [];
  target.__FEDERATION__.__INSTANCES__ ??= [];
  target.__FEDERATION__.moduleInfo ??= {};
  target.__FEDERATION__.__SHARE__ ??= {};
  target.__FEDERATION__.__MANIFEST_LOADING__ ??= {};
  target.__FEDERATION__.__PRELOADED_MAP__ ??= new Map();
}
setGlobalDefaultVal(CurrentGlobal);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
  CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
  CurrentGlobal.__FEDERATION__.__INSTANCES__ = [];
  CurrentGlobal.__FEDERATION__.moduleInfo = {};
  CurrentGlobal.__FEDERATION__.__SHARE__ = {};
  CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {};
  Object.keys(globalLoading).forEach(key => {
    delete globalLoading[key];
  });
}
function setGlobalFederationInstance(FederationInstance) {
  CurrentGlobal.__FEDERATION__.__INSTANCES__.push(FederationInstance);
}
function getGlobalFederationConstructor() {
  return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = (0,index_esm/* isDebugMode */.Bb)()) {
  if (isDebug) {
    CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
    CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.21.6";
  }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function getInfoWithoutType(target, key) {
  if (typeof key === 'string') {
    const keyRes = target[key];
    if (keyRes) {
      return {
        value: target[key],
        key: key
      };
    } else {
      const targetKeys = Object.keys(target);
      for (const targetKey of targetKeys) {
        const [targetTypeOrName, _] = targetKey.split(':');
        const nKey = `${targetTypeOrName}:${key}`;
        const typeWithKeyRes = target[nKey];
        if (typeWithKeyRes) {
          return {
            value: typeWithKeyRes,
            key: nKey
          };
        }
      }
      return {
        value: undefined,
        key: key
      };
    }
  } else {
    throw new Error('key must be string');
  }
}
const getGlobalSnapshot = () => nativeGlobal.__FEDERATION__.moduleInfo;
const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot) => {
  // Check if the remote is included in the hostSnapshot
  const moduleKey = getFMId(moduleInfo);
  const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
  // The remoteSnapshot might not include a version
  if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {
    getModuleInfo.version = moduleInfo['version'];
  }
  if (getModuleInfo) {
    return getModuleInfo;
  }
  // If the remote is not included in the hostSnapshot, deploy a micro app snapshot
  if ('version' in moduleInfo && moduleInfo['version']) {
    const {
      version,
      ...resModuleInfo
    } = moduleInfo;
    const moduleKeyWithoutVersion = getFMId(resModuleInfo);
    const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
    if (getModuleInfoWithoutVersion?.version === version) {
      return getModuleInfoWithoutVersion;
    }
  }
  return;
};
const getGlobalSnapshotInfoByModuleInfo = moduleInfo => getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo) => {
  const moduleKey = getFMId(remoteInfo);
  nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
  return nativeGlobal.__FEDERATION__.moduleInfo;
};
const addGlobalSnapshot = moduleInfos => {
  nativeGlobal.__FEDERATION__.moduleInfo = {
    ...nativeGlobal.__FEDERATION__.moduleInfo,
    ...moduleInfos
  };
  return () => {
    const keys = Object.keys(moduleInfos);
    for (const key of keys) {
      delete nativeGlobal.__FEDERATION__.moduleInfo[key];
    }
  };
};
const getRemoteEntryExports = (name, globalName) => {
  const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
  const entryExports = CurrentGlobal[remoteEntryKey];
  return {
    remoteEntryKey,
    entryExports
  };
};
// This function is used to register global plugins.
// It iterates over the provided plugins and checks if they are already registered.
// If a plugin is not registered, it is added to the global plugins.
// If a plugin is already registered, a warning message is logged.
const registerGlobalPlugins = plugins => {
  const {
    __GLOBAL_PLUGIN__
  } = nativeGlobal.__FEDERATION__;
  plugins.forEach(plugin => {
    if (__GLOBAL_PLUGIN__.findIndex(p => p.name === plugin.name) === -1) {
      __GLOBAL_PLUGIN__.push(plugin);
    } else {
      warn(`The plugin ${plugin.name} has been registered.`);
    }
  });
};
const getGlobalHostPlugins = () => nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
const getPreloaded = id => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(id);
const setPreloaded = id => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(id, true);
const DEFAULT_SCOPE = 'default';
const DEFAULT_REMOTE_TYPE = 'global';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
const buildIdentifier = '[0-9A-Za-z-]+';
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = '0|[1-9]\\d*';
const numericIdentifierLoose = '[0-9]+';
const nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
const gtlt = '((?:<|>)?=?)';
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = '(?:~>?)';
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = '(?:\\^)';
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = '(<|>)?=?\\s*\\*';
const caret = `^${loneCaret}${xRangePlain}$`;
const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
// copy from semver package
const gte0 = '^\\s*>=\\s*0.0.0\\s*$';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseRegex(source) {
  return new RegExp(source);
}
function isXVersion(version) {
  return !version || version.toLowerCase() === 'x' || version === '*';
}
function pipe(...fns) {
  return x => fns.reduce((v, f) => f(v), x);
}
function extractComparator(comparatorString) {
  return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease) {
  const mainVersion = `${major}.${minor}.${patch}`;
  if (preRelease) {
    return `${mainVersion}-${preRelease}`;
  }
  return mainVersion;
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseHyphen(range) {
  return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease) => {
    if (isXVersion(fromMajor)) {
      from = '';
    } else if (isXVersion(fromMinor)) {
      from = `>=${fromMajor}.0.0`;
    } else if (isXVersion(fromPatch)) {
      from = `>=${fromMajor}.${fromMinor}.0`;
    } else {
      from = `>=${from}`;
    }
    if (isXVersion(toMajor)) {
      to = '';
    } else if (isXVersion(toMinor)) {
      to = `<${Number(toMajor) + 1}.0.0-0`;
    } else if (isXVersion(toPatch)) {
      to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
    } else if (toPreRelease) {
      to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  });
}
function parseComparatorTrim(range) {
  return range.replace(parseRegex(comparatorTrim), '$1$2$3');
}
function parseTildeTrim(range) {
  return range.replace(parseRegex(tildeTrim), '$1~');
}
function parseCaretTrim(range) {
  return range.replace(parseRegex(caretTrim), '$1^');
}
function parseCarets(range) {
  return range.trim().split(/\s+/).map(rangeVersion => rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease) => {
    if (isXVersion(major)) {
      return '';
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      if (major === '0') {
        return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
      } else {
        return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
      }
    } else if (preRelease) {
      if (major === '0') {
        if (minor === '0') {
          return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
        }
      } else {
        return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;
      }
    } else {
      if (major === '0') {
        if (minor === '0') {
          return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
        }
      }
      return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
    }
  })).join(' ');
}
function parseTildes(range) {
  return range.trim().split(/\s+/).map(rangeVersion => rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease) => {
    if (isXVersion(major)) {
      return '';
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
    } else if (preRelease) {
      return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
    }
    return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
  })).join(' ');
}
function parseXRanges(range) {
  return range.split(/\s+/).map(rangeVersion => rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt, major, minor, patch, preRelease) => {
    const isXMajor = isXVersion(major);
    const isXMinor = isXMajor || isXVersion(minor);
    const isXPatch = isXMinor || isXVersion(patch);
    if (gtlt === '=' && isXPatch) {
      gtlt = '';
    }
    preRelease = '';
    if (isXMajor) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        return '<0.0.0-0';
      } else {
        // nothing is forbidden
        return '*';
      }
    } else if (gtlt && isXPatch) {
      // replace X with 0
      if (isXMinor) {
        minor = 0;
      }
      patch = 0;
      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>=';
        if (isXMinor) {
          major = Number(major) + 1;
          minor = 0;
          patch = 0;
        } else {
          minor = Number(minor) + 1;
          patch = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should pass
        // Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (isXMinor) {
          major = Number(major) + 1;
        } else {
          minor = Number(minor) + 1;
        }
      }
      if (gtlt === '<') {
        preRelease = '-0';
      }
      return `${gtlt + major}.${minor}.${patch}${preRelease}`;
    } else if (isXMinor) {
      return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;
    } else if (isXPatch) {
      return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;
    }
    return ret;
  })).join(' ');
}
function parseStar(range) {
  return range.trim().replace(parseRegex(star), '');
}
function parseGTE0(comparatorString) {
  return comparatorString.trim().replace(parseRegex(gte0), '');
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function compareAtom(rangeAtom, versionAtom) {
  rangeAtom = Number(rangeAtom) || rangeAtom;
  versionAtom = Number(versionAtom) || versionAtom;
  if (rangeAtom > versionAtom) {
    return 1;
  }
  if (rangeAtom === versionAtom) {
    return 0;
  }
  return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
  const {
    preRelease: rangePreRelease
  } = rangeAtom;
  const {
    preRelease: versionPreRelease
  } = versionAtom;
  if (rangePreRelease === undefined && Boolean(versionPreRelease)) {
    return 1;
  }
  if (Boolean(rangePreRelease) && versionPreRelease === undefined) {
    return -1;
  }
  if (rangePreRelease === undefined && versionPreRelease === undefined) {
    return 0;
  }
  for (let i = 0, n = rangePreRelease.length; i <= n; i++) {
    const rangeElement = rangePreRelease[i];
    const versionElement = versionPreRelease[i];
    if (rangeElement === versionElement) {
      continue;
    }
    if (rangeElement === undefined && versionElement === undefined) {
      return 0;
    }
    if (!rangeElement) {
      return 1;
    }
    if (!versionElement) {
      return -1;
    }
    return compareAtom(rangeElement, versionElement);
  }
  return 0;
}
function compareVersion(rangeAtom, versionAtom) {
  return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
  return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
  switch (rangeAtom.operator) {
    case '':
    case '=':
      return eq(rangeAtom, versionAtom);
    case '>':
      return compareVersion(rangeAtom, versionAtom) < 0;
    case '>=':
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
    case '<':
      return compareVersion(rangeAtom, versionAtom) > 0;
    case '<=':
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
    case undefined:
      {
        // mean * or x -> all versions
        return true;
      }
    default:
      return false;
  }
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseComparatorString(range) {
  return pipe(
  // handle caret
  // ^ --> * (any, kinda silly)
  // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
  // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
  // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
  // ^1.2.3 --> >=1.2.3 <2.0.0-0
  // ^1.2.0 --> >=1.2.0 <2.0.0-0
  parseCarets,
  // handle tilde
  // ~, ~> --> * (any, kinda silly)
  // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
  // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
  // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
  // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
  // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
  parseTildes, parseXRanges, parseStar)(range);
}
function parseRange(range) {
  return pipe(
  // handle hyphenRange
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  parseHyphen,
  // handle trim comparator
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  parseComparatorTrim,
  // handle trim tilde
  // `~ 1.2.3` => `~1.2.3`
  parseTildeTrim,
  // handle trim caret
  // `^ 1.2.3` => `^1.2.3`
  parseCaretTrim)(range.trim()).split(/\s+/).join(' ');
}
function satisfy(version, range) {
  if (!version) {
    return false;
  }
  // Extract version details once
  const extractedVersion = extractComparator(version);
  if (!extractedVersion) {
    // If the version string is invalid, it can't satisfy any range
    return false;
  }
  const [, versionOperator,, versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
  const versionAtom = {
    operator: versionOperator,
    version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
    // exclude build atom
    major: versionMajor,
    minor: versionMinor,
    patch: versionPatch,
    preRelease: versionPreRelease?.split('.')
  };
  // Split the range by || to handle OR conditions
  const orRanges = range.split('||');
  for (const orRange of orRanges) {
    const trimmedOrRange = orRange.trim();
    if (!trimmedOrRange) {
      // An empty range string signifies wildcard *, satisfy any valid version
      // (We already checked if the version itself is valid)
      return true;
    }
    // Handle simple wildcards explicitly before complex parsing
    if (trimmedOrRange === '*' || trimmedOrRange === 'x') {
      return true;
    }
    try {
      // Apply existing parsing logic to the current OR sub-range
      const parsedSubRange = parseRange(trimmedOrRange); // Handles hyphens, trims etc.
      // Check if the result of initial parsing is empty, which can happen
      // for some wildcard cases handled by parseRange/parseComparatorString.
      // E.g. `parseStar` used in `parseComparatorString` returns ''.
      if (!parsedSubRange.trim()) {
        // If parsing results in empty string, treat as wildcard match
        return true;
      }
      const parsedComparatorString = parsedSubRange.split(' ').map(rangeVersion => parseComparatorString(rangeVersion)) // Expands ^, ~
      .join(' ');
      // Check again if the comparator string became empty after specific parsing like ^ or ~
      if (!parsedComparatorString.trim()) {
        return true;
      }
      // Split the sub-range by space for implicit AND conditions
      const comparators = parsedComparatorString.split(/\s+/).map(comparator => parseGTE0(comparator))
      // Filter out empty strings that might result from multiple spaces
      .filter(Boolean);
      // If a sub-range becomes empty after parsing (e.g., invalid characters),
      // it cannot be satisfied. This check might be redundant now but kept for safety.
      if (comparators.length === 0) {
        continue;
      }
      let subRangeSatisfied = true;
      for (const comparator of comparators) {
        const extractedComparator = extractComparator(comparator);
        // If any part of the AND sub-range is invalid, the sub-range is not satisfied
        if (!extractedComparator) {
          subRangeSatisfied = false;
          break;
        }
        const [, rangeOperator,, rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
        const rangeAtom = {
          operator: rangeOperator,
          version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
          major: rangeMajor,
          minor: rangeMinor,
          patch: rangePatch,
          preRelease: rangePreRelease?.split('.')
        };
        // Check if the version satisfies this specific comparator in the AND chain
        if (!compare(rangeAtom, versionAtom)) {
          subRangeSatisfied = false; // This part of the AND condition failed
          break; // No need to check further comparators in this sub-range
        }
      }
      // If all AND conditions within this OR sub-range were met, the overall range is satisfied
      if (subRangeSatisfied) {
        return true;
      }
    } catch (e) {
      // Log error and treat this sub-range as unsatisfied
      console.error(`[semver] Error processing range part "${trimmedOrRange}":`, e);
      continue;
    }
  }
  // If none of the OR sub-ranges were satisfied
  return false;
}
function formatShare(shareArgs, from, name, shareStrategy) {
  let get;
  if ('get' in shareArgs) {
    // eslint-disable-next-line prefer-destructuring
    get = shareArgs.get;
  } else if ('lib' in shareArgs) {
    get = () => Promise.resolve(shareArgs.lib);
  } else {
    get = () => Promise.resolve(() => {
      throw new Error(`Can not get shared '${name}'!`);
    });
  }
  return {
    deps: [],
    useIn: [],
    from,
    loading: null,
    ...shareArgs,
    shareConfig: {
      requiredVersion: `^${shareArgs.version}`,
      singleton: false,
      eager: false,
      strictVersion: false,
      ...shareArgs.shareConfig
    },
    get,
    loaded: shareArgs?.loaded || 'lib' in shareArgs ? true : undefined,
    version: shareArgs.version ?? '0',
    scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [shareArgs.scope ?? 'default'],
    strategy: (shareArgs.strategy ?? shareStrategy) || 'version-first'
  };
}
function formatShareConfigs(globalOptions, userOptions) {
  const shareArgs = userOptions.shared || {};
  const from = userOptions.name;
  const shareInfos = Object.keys(shareArgs).reduce((res, pkgName) => {
    const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
    res[pkgName] = res[pkgName] || [];
    arrayShareArgs.forEach(shareConfig => {
      res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
    });
    return res;
  }, {});
  const shared = {
    ...globalOptions.shared
  };
  Object.keys(shareInfos).forEach(shareKey => {
    if (!shared[shareKey]) {
      shared[shareKey] = shareInfos[shareKey];
    } else {
      shareInfos[shareKey].forEach(newUserSharedOptions => {
        const isSameVersion = shared[shareKey].find(sharedVal => sharedVal.version === newUserSharedOptions.version);
        if (!isSameVersion) {
          shared[shareKey].push(newUserSharedOptions);
        }
      });
    }
  });
  return {
    shared,
    shareInfos
  };
}
function versionLt(a, b) {
  const transformInvalidVersion = version => {
    const isNumberVersion = !Number.isNaN(Number(version));
    if (isNumberVersion) {
      const splitArr = version.split('.');
      let validVersion = version;
      for (let i = 0; i < 3 - splitArr.length; i++) {
        validVersion += '.0';
      }
      return validVersion;
    }
    return version;
  };
  if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
    return true;
  } else {
    return false;
  }
}
const findVersion = (shareVersionMap, cb) => {
  const callback = cb || function (prev, cur) {
    return versionLt(prev, cur);
  };
  return Object.keys(shareVersionMap).reduce((prev, cur) => {
    if (!prev) {
      return cur;
    }
    if (callback(prev, cur)) {
      return cur;
    }
    // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136
    if (prev === '0') {
      return cur;
    }
    return prev;
  }, 0);
};
const isLoaded = shared => {
  return Boolean(shared.loaded) || typeof shared.lib === 'function';
};
const isLoading = shared => {
  return Boolean(shared.loading);
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function (prev, cur) {
    return !isLoaded(versions[prev]) && versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function (prev, cur) {
    const isLoadingOrLoaded = shared => {
      return isLoaded(shared) || isLoading(shared);
    };
    if (isLoadingOrLoaded(versions[cur])) {
      if (isLoadingOrLoaded(versions[prev])) {
        return Boolean(versionLt(prev, cur));
      } else {
        return true;
      }
    }
    if (isLoadingOrLoaded(versions[prev])) {
      return false;
    }
    return versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
  if (strategy === 'loaded-first') {
    return findSingletonVersionOrderByLoaded;
  }
  return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
  if (!localShareScopeMap) {
    return;
  }
  const {
    shareConfig,
    scope = DEFAULT_SCOPE,
    strategy
  } = shareInfo;
  const scopes = Array.isArray(scope) ? scope : [scope];
  for (const sc of scopes) {
    if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
      const {
        requiredVersion
      } = shareConfig;
      const findShareFunction = getFindShareFunction(strategy);
      const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
      //@ts-ignore
      const defaultResolver = () => {
        if (shareConfig.singleton) {
          if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {
            const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
            if (shareConfig.strictVersion) {
              error(msg);
            } else {
              warn(msg);
            }
          }
          return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
        } else {
          if (requiredVersion === false || requiredVersion === '*') {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          if (satisfy(maxOrSingletonVersion, requiredVersion)) {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])) {
            if (satisfy(versionKey, requiredVersion)) {
              return versionValue;
            }
          }
        }
      };
      const params = {
        shareScopeMap: localShareScopeMap,
        scope: sc,
        pkgName,
        version: maxOrSingletonVersion,
        GlobalFederation: Global.__FEDERATION__,
        resolver: defaultResolver
      };
      const resolveShared = resolveShare.emit(params) || params;
      return resolveShared.resolver();
    }
  }
}
function getGlobalShareScope() {
  return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
  const {
    pkgName,
    extraOptions,
    shareInfos
  } = options;
  const defaultResolver = sharedOptions => {
    if (!sharedOptions) {
      return undefined;
    }
    const shareVersionMap = {};
    sharedOptions.forEach(shared => {
      shareVersionMap[shared.version] = shared;
    });
    const callback = function (prev, cur) {
      return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
    };
    const maxVersion = findVersion(shareVersionMap, callback);
    return shareVersionMap[maxVersion];
  };
  const resolver = extraOptions?.resolver ?? defaultResolver;
  return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions?.customShareInfo);
}
function getBuilderId() {
  //@ts-ignore
  return  true ?
  //@ts-ignore
  "dashboard:0.0.0" : 0;
}

// Function to match a remote with its name and expose
// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
// id: alias(app1) + expose(button) = app1/button
// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
function matchRemoteWithNameAndExpose(remotes, id) {
  for (const remote of remotes) {
    // match pkgName
    const isNameMatched = id.startsWith(remote.name);
    let expose = id.replace(remote.name, '');
    if (isNameMatched) {
      if (expose.startsWith('/')) {
        const pkgNameOrAlias = remote.name;
        expose = `.${expose}`;
        return {
          pkgNameOrAlias,
          expose,
          remote
        };
      } else if (expose === '') {
        return {
          pkgNameOrAlias: remote.name,
          expose: '.',
          remote
        };
      }
    }
    // match alias
    const isAliasMatched = remote.alias && id.startsWith(remote.alias);
    let exposeWithAlias = remote.alias && id.replace(remote.alias, '');
    if (remote.alias && isAliasMatched) {
      if (exposeWithAlias && exposeWithAlias.startsWith('/')) {
        const pkgNameOrAlias = remote.alias;
        exposeWithAlias = `.${exposeWithAlias}`;
        return {
          pkgNameOrAlias,
          expose: exposeWithAlias,
          remote
        };
      } else if (exposeWithAlias === '') {
        return {
          pkgNameOrAlias: remote.alias,
          expose: '.',
          remote
        };
      }
    }
  }
  return;
}
// Function to match a remote with its name or alias
function matchRemote(remotes, nameOrAlias) {
  for (const remote of remotes) {
    const isNameMatched = nameOrAlias === remote.name;
    if (isNameMatched) {
      return remote;
    }
    const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
    if (isAliasMatched) {
      return remote;
    }
  }
  return;
}
function registerPlugins(plugins, instance) {
  const globalPlugins = getGlobalHostPlugins();
  const hookInstances = [instance.hooks, instance.remoteHandler.hooks, instance.sharedHandler.hooks, instance.snapshotHandler.hooks, instance.loaderHook, instance.bridgeHook];
  // Incorporate global plugins
  if (globalPlugins.length > 0) {
    globalPlugins.forEach(plugin => {
      if (plugins?.find(item => item.name !== plugin.name)) {
        plugins.push(plugin);
      }
    });
  }
  if (plugins && plugins.length > 0) {
    plugins.forEach(plugin => {
      hookInstances.forEach(hookInstance => {
        hookInstance.applyPlugin(plugin, instance);
      });
    });
  }
  return plugins;
}
const importCallback = '.then(callbacks[0]).catch(callbacks[1])';
function loadEsmEntry(_x3) {
  return _loadEsmEntry.apply(this, arguments);
}
function _loadEsmEntry() {
  _loadEsmEntry = (0,asyncToGenerator/* default */.A)(function* ({
    entry,
    remoteEntryExports
  }) {
    return new Promise((resolve, reject) => {
      try {
        if (!remoteEntryExports) {
          if (typeof FEDERATION_ALLOW_NEW_FUNCTION !== 'undefined') {
            new Function('callbacks', `import("${entry}")${importCallback}`)([resolve, reject]);
          } else {
            import(/* webpackIgnore: true */ /* @vite-ignore */entry).then(resolve).catch(reject);
          }
        } else {
          resolve(remoteEntryExports);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
  return _loadEsmEntry.apply(this, arguments);
}
function loadSystemJsEntry(_x4) {
  return _loadSystemJsEntry.apply(this, arguments);
}
function _loadSystemJsEntry() {
  _loadSystemJsEntry = (0,asyncToGenerator/* default */.A)(function* ({
    entry,
    remoteEntryExports
  }) {
    return new Promise((resolve, reject) => {
      try {
        if (!remoteEntryExports) {
          //@ts-ignore
          if (false) // removed by dead control flow
{} else {
            new Function('callbacks', `System.import("${entry}")${importCallback}`)([resolve, reject]);
          }
        } else {
          resolve(remoteEntryExports);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
  return _loadSystemJsEntry.apply(this, arguments);
}
function handleRemoteEntryLoaded(name, globalName, entry) {
  const {
    remoteEntryKey,
    entryExports
  } = getRemoteEntryExports(name, globalName);
  assert(entryExports, getShortErrorMsg(RUNTIME_001, runtimeDescMap, {
    remoteName: name,
    remoteEntryUrl: entry,
    remoteEntryKey
  }));
  return entryExports;
}
function loadEntryScript(_x5) {
  return _loadEntryScript.apply(this, arguments);
}
function _loadEntryScript() {
  _loadEntryScript = (0,asyncToGenerator/* default */.A)(function* ({
    name,
    globalName,
    entry,
    loaderHook,
    getEntryUrl
  }) {
    const {
      entryExports: remoteEntryExports
    } = getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
      return remoteEntryExports;
    }
    // if getEntryUrl is passed, use the getEntryUrl to get the entry url
    const url = getEntryUrl ? getEntryUrl(entry) : entry;
    return (0,index_esm/* loadScript */.k0)(url, {
      attrs: {},
      createScriptHook: (url, attrs) => {
        const res = loaderHook.lifecycle.createScript.emit({
          url,
          attrs
        });
        if (!res) return;
        if (res instanceof HTMLScriptElement) {
          return res;
        }
        if ('script' in res || 'timeout' in res) {
          return res;
        }
        return;
      }
    }).then(() => {
      return handleRemoteEntryLoaded(name, globalName, entry);
    }).catch(e => {
      assert(undefined, getShortErrorMsg(RUNTIME_008, runtimeDescMap, {
        remoteName: name,
        resourceUrl: entry
      }));
      throw e;
    });
  });
  return _loadEntryScript.apply(this, arguments);
}
function loadEntryDom(_x6) {
  return _loadEntryDom.apply(this, arguments);
}
function _loadEntryDom() {
  _loadEntryDom = (0,asyncToGenerator/* default */.A)(function* ({
    remoteInfo,
    remoteEntryExports,
    loaderHook,
    getEntryUrl
  }) {
    const {
      entry,
      entryGlobalName: globalName,
      name,
      type
    } = remoteInfo;
    switch (type) {
      case 'esm':
      case 'module':
        return loadEsmEntry({
          entry,
          remoteEntryExports
        });
      case 'system':
        return loadSystemJsEntry({
          entry,
          remoteEntryExports
        });
      default:
        return loadEntryScript({
          entry,
          globalName,
          name,
          loaderHook,
          getEntryUrl
        });
    }
  });
  return _loadEntryDom.apply(this, arguments);
}
function loadEntryNode(_x7) {
  return _loadEntryNode.apply(this, arguments);
}
function _loadEntryNode() {
  _loadEntryNode = (0,asyncToGenerator/* default */.A)(function* ({
    remoteInfo,
    loaderHook
  }) {
    const {
      entry,
      entryGlobalName: globalName,
      name,
      type
    } = remoteInfo;
    const {
      entryExports: remoteEntryExports
    } = getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
      return remoteEntryExports;
    }
    return (0,index_esm/* loadScriptNode */.oe)(entry, {
      attrs: {
        name,
        globalName,
        type
      },
      loaderHook: {
        createScriptHook: (url, attrs = {}) => {
          const res = loaderHook.lifecycle.createScript.emit({
            url,
            attrs
          });
          if (!res) return;
          if ('url' in res) {
            return res;
          }
          return;
        }
      }
    }).then(() => {
      return handleRemoteEntryLoaded(name, globalName, entry);
    }).catch(e => {
      throw e;
    });
  });
  return _loadEntryNode.apply(this, arguments);
}
function getRemoteEntryUniqueKey(remoteInfo) {
  const {
    entry,
    name
  } = remoteInfo;
  return (0,index_esm/* composeKeyWithSeparator */.lG)(name, entry);
}
function getRemoteEntry(_x8) {
  return _getRemoteEntry.apply(this, arguments);
}
function _getRemoteEntry() {
  _getRemoteEntry = (0,asyncToGenerator/* default */.A)(function* (params) {
    const {
      origin,
      remoteEntryExports,
      remoteInfo,
      getEntryUrl,
      _inErrorHandling = false
    } = params;
    const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
    if (remoteEntryExports) {
      return remoteEntryExports;
    }
    if (!globalLoading[uniqueKey]) {
      const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
      const loaderHook = origin.loaderHook;
      globalLoading[uniqueKey] = loadEntryHook.emit({
        loaderHook,
        remoteInfo,
        remoteEntryExports
      }).then(res => {
        if (res) {
          return res;
        }
        // Use ENV_TARGET if defined, otherwise fallback to isBrowserEnv, must keep this
        const isWebEnvironment = typeof ENV_TARGET !== 'undefined' ? ENV_TARGET === 'web' : (0,index_esm/* isBrowserEnv */.OL)();
        return isWebEnvironment ? loadEntryDom({
          remoteInfo,
          remoteEntryExports,
          loaderHook,
          getEntryUrl
        }) : loadEntryNode({
          remoteInfo,
          loaderHook
        });
      }).catch(/*#__PURE__*/function () {
        var _ref9 = (0,asyncToGenerator/* default */.A)(function* (err) {
          const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
          const isScriptLoadError = err instanceof Error && err.message.includes(RUNTIME_008);
          if (isScriptLoadError && !_inErrorHandling) {
            const wrappedGetRemoteEntry = params => {
              return getRemoteEntry({
                ...params,
                _inErrorHandling: true
              });
            };
            const RemoteEntryExports = yield origin.loaderHook.lifecycle.loadEntryError.emit({
              getRemoteEntry: wrappedGetRemoteEntry,
              origin,
              remoteInfo: remoteInfo,
              remoteEntryExports,
              globalLoading,
              uniqueKey
            });
            if (RemoteEntryExports) {
              return RemoteEntryExports;
            }
          }
          throw err;
        });
        return function (_x11) {
          return _ref9.apply(this, arguments);
        };
      }());
    }
    return globalLoading[uniqueKey];
  });
  return _getRemoteEntry.apply(this, arguments);
}
function getRemoteInfo(remote) {
  return {
    ...remote,
    entry: 'entry' in remote ? remote.entry : '',
    type: remote.type || DEFAULT_REMOTE_TYPE,
    entryGlobalName: remote.entryGlobalName || remote.name,
    shareScope: remote.shareScope || DEFAULT_SCOPE
  };
}
function defaultPreloadArgs(preloadConfig) {
  return {
    resourceCategory: 'sync',
    share: true,
    depsRemote: true,
    prefetchInterface: false,
    ...preloadConfig
  };
}
function formatPreloadArgs(remotes, preloadArgs) {
  return preloadArgs.map(args => {
    const remoteInfo = matchRemote(remotes, args.nameOrAlias);
    assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && (0,index_esm/* safeToString */.ML)({
      remoteInfo,
      remotes
    })}`);
    return {
      remote: remoteInfo,
      preloadConfig: defaultPreloadArgs(args)
    };
  });
}
function normalizePreloadExposes(exposes) {
  if (!exposes) {
    return [];
  }
  return exposes.map(expose => {
    if (expose === '.') {
      return expose;
    }
    if (expose.startsWith('./')) {
      return expose.replace('./', '');
    }
    return expose;
  });
}
function preloadAssets(remoteInfo, host, assets,
// It is used to distinguish preload from load remote parallel loading
useLinkPreload = true) {
  const {
    cssAssets,
    jsAssetsWithoutEntry,
    entryAssets
  } = assets;
  if (host.options.inBrowser) {
    entryAssets.forEach(asset => {
      const {
        moduleInfo
      } = asset;
      const module = host.moduleCache.get(remoteInfo.name);
      if (module) {
        getRemoteEntry({
          origin: host,
          remoteInfo: moduleInfo,
          remoteEntryExports: module.remoteEntryExports
        });
      } else {
        getRemoteEntry({
          origin: host,
          remoteInfo: moduleInfo,
          remoteEntryExports: undefined
        });
      }
    });
    if (useLinkPreload) {
      const defaultAttrs = {
        rel: 'preload',
        as: 'style'
      };
      cssAssets.forEach(cssUrl => {
        const {
          link: cssEl,
          needAttach
        } = (0,index_esm/* createLink */.d)({
          url: cssUrl,
          cb: () => {
            // noop
          },
          attrs: defaultAttrs,
          createLinkHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createLink.emit({
              url,
              attrs
            });
            if (res instanceof HTMLLinkElement) {
              return res;
            }
            return;
          }
        });
        needAttach && document.head.appendChild(cssEl);
      });
    } else {
      const defaultAttrs = {
        rel: 'stylesheet',
        type: 'text/css'
      };
      cssAssets.forEach(cssUrl => {
        const {
          link: cssEl,
          needAttach
        } = (0,index_esm/* createLink */.d)({
          url: cssUrl,
          cb: () => {
            // noop
          },
          attrs: defaultAttrs,
          createLinkHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createLink.emit({
              url,
              attrs
            });
            if (res instanceof HTMLLinkElement) {
              return res;
            }
            return;
          },
          needDeleteLink: false
        });
        needAttach && document.head.appendChild(cssEl);
      });
    }
    if (useLinkPreload) {
      const defaultAttrs = {
        rel: 'preload',
        as: 'script'
      };
      jsAssetsWithoutEntry.forEach(jsUrl => {
        const {
          link: linkEl,
          needAttach
        } = (0,index_esm/* createLink */.d)({
          url: jsUrl,
          cb: () => {
            // noop
          },
          attrs: defaultAttrs,
          createLinkHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createLink.emit({
              url,
              attrs
            });
            if (res instanceof HTMLLinkElement) {
              return res;
            }
            return;
          }
        });
        needAttach && document.head.appendChild(linkEl);
      });
    } else {
      const defaultAttrs = {
        fetchpriority: 'high',
        type: remoteInfo?.type === 'module' ? 'module' : 'text/javascript'
      };
      jsAssetsWithoutEntry.forEach(jsUrl => {
        const {
          script: scriptEl,
          needAttach
        } = (0,index_esm/* createScript */.so)({
          url: jsUrl,
          cb: () => {
            // noop
          },
          attrs: defaultAttrs,
          createScriptHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createScript.emit({
              url,
              attrs
            });
            if (res instanceof HTMLScriptElement) {
              return res;
            }
            return;
          },
          needDeleteScript: true
        });
        needAttach && document.head.appendChild(scriptEl);
      });
    }
  }
}
const ShareUtils = {
  getRegisteredShare,
  getGlobalShareScope
};
const GlobalUtils = {
  Global,
  nativeGlobal,
  resetFederationGlobalInfo,
  setGlobalFederationInstance,
  getGlobalFederationConstructor,
  setGlobalFederationConstructor,
  getInfoWithoutType,
  getGlobalSnapshot,
  getTargetSnapshotInfoByModuleInfo,
  getGlobalSnapshotInfoByModuleInfo,
  setGlobalSnapshotInfoByModuleInfo,
  addGlobalSnapshot,
  getRemoteEntryExports,
  registerGlobalPlugins,
  getGlobalHostPlugins,
  getPreloaded,
  setPreloaded
};
var helpers = {
  global: GlobalUtils,
  share: ShareUtils,
  utils: {
    matchRemoteWithNameAndExpose,
    preloadAssets,
    getRemoteInfo
  }
};
class Module {
  constructor({
    remoteInfo,
    host
  }) {
    this.inited = false;
    this.lib = undefined;
    this.remoteInfo = remoteInfo;
    this.host = host;
  }
  getEntry() {
    var _this = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      if (_this.remoteEntryExports) {
        return _this.remoteEntryExports;
      }
      let remoteEntryExports;
      remoteEntryExports = yield getRemoteEntry({
        origin: _this.host,
        remoteInfo: _this.remoteInfo,
        remoteEntryExports: _this.remoteEntryExports
      });
      assert(remoteEntryExports, `remoteEntryExports is undefined \n ${(0,index_esm/* safeToString */.ML)(_this.remoteInfo)}`);
      _this.remoteEntryExports = remoteEntryExports;
      return _this.remoteEntryExports;
    })();
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get(id, expose, options, remoteSnapshot) {
    var _this2 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      const {
        loadFactory = true
      } = options || {
        loadFactory: true
      };
      // Get remoteEntry.js
      const remoteEntryExports = yield _this2.getEntry();
      if (!_this2.inited) {
        const localShareScopeMap = _this2.host.shareScopeMap;
        const shareScopeKeys = Array.isArray(_this2.remoteInfo.shareScope) ? _this2.remoteInfo.shareScope : [_this2.remoteInfo.shareScope];
        if (!shareScopeKeys.length) {
          shareScopeKeys.push('default');
        }
        shareScopeKeys.forEach(shareScopeKey => {
          if (!localShareScopeMap[shareScopeKey]) {
            localShareScopeMap[shareScopeKey] = {};
          }
        });
        // TODO: compate legacy init params, should use shareScopeMap if exist
        const shareScope = localShareScopeMap[shareScopeKeys[0]];
        const initScope = [];
        const remoteEntryInitOptions = {
          version: _this2.remoteInfo.version || '',
          shareScopeKeys: Array.isArray(_this2.remoteInfo.shareScope) ? shareScopeKeys : _this2.remoteInfo.shareScope || 'default'
        };
        // Help to find host instance
        Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {
          value: localShareScopeMap,
          // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
          enumerable: false
        });
        const initContainerOptions = yield _this2.host.hooks.lifecycle.beforeInitContainer.emit({
          shareScope,
          // @ts-ignore shareScopeMap will be set by Object.defineProperty
          remoteEntryInitOptions,
          initScope,
          remoteInfo: _this2.remoteInfo,
          origin: _this2.host
        });
        if (typeof remoteEntryExports?.init === 'undefined') {
          error(getShortErrorMsg(RUNTIME_002, runtimeDescMap, {
            hostName: _this2.host.name,
            remoteName: _this2.remoteInfo.name,
            remoteEntryUrl: _this2.remoteInfo.entry,
            remoteEntryKey: _this2.remoteInfo.entryGlobalName
          }));
        }
        yield remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
        yield _this2.host.hooks.lifecycle.initContainer.emit({
          ...initContainerOptions,
          id,
          remoteSnapshot,
          remoteEntryExports
        });
      }
      _this2.lib = remoteEntryExports;
      _this2.inited = true;
      let moduleFactory;
      moduleFactory = yield _this2.host.loaderHook.lifecycle.getModuleFactory.emit({
        remoteEntryExports,
        expose,
        moduleInfo: _this2.remoteInfo
      });
      // get exposeGetter
      if (!moduleFactory) {
        moduleFactory = yield remoteEntryExports.get(expose);
      }
      assert(moduleFactory, `${getFMId(_this2.remoteInfo)} remote don't export ${expose}.`);
      // keep symbol for module name always one format
      const symbolName = processModuleAlias(_this2.remoteInfo.name, expose);
      const wrapModuleFactory = _this2.wraperFactory(moduleFactory, symbolName);
      if (!loadFactory) {
        return wrapModuleFactory;
      }
      const exposeContent = yield wrapModuleFactory();
      return exposeContent;
    })();
  }
  wraperFactory(moduleFactory, id) {
    function defineModuleId(res, id) {
      if (res && typeof res === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {
        Object.defineProperty(res, Symbol.for('mf_module_id'), {
          value: id,
          enumerable: false
        });
      }
    }
    if (moduleFactory instanceof Promise) {
      return /*#__PURE__*/(0,asyncToGenerator/* default */.A)(function* () {
        const res = yield moduleFactory();
        // This parameter is used for bridge debugging
        defineModuleId(res, id);
        return res;
      });
    } else {
      return () => {
        const res = moduleFactory();
        // This parameter is used for bridge debugging
        defineModuleId(res, id);
        return res;
      };
    }
  }
}
class SyncHook {
  constructor(type) {
    this.type = '';
    this.listeners = new Set();
    if (type) {
      this.type = type;
    }
  }
  on(fn) {
    if (typeof fn === 'function') {
      this.listeners.add(fn);
    }
  }
  once(fn) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this.on(function wrapper(...args) {
      self.remove(wrapper);
      // eslint-disable-next-line prefer-spread
      return fn.apply(null, args);
    });
  }
  emit(...data) {
    let result;
    if (this.listeners.size > 0) {
      // eslint-disable-next-line prefer-spread
      this.listeners.forEach(fn => {
        result = fn(...data);
      });
    }
    return result;
  }
  remove(fn) {
    this.listeners.delete(fn);
  }
  removeAll() {
    this.listeners.clear();
  }
}
class AsyncHook extends SyncHook {
  emit(...data) {
    let result;
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const call = prev => {
        if (prev === false) {
          return false; // Abort process
        } else if (i < ls.length) {
          return Promise.resolve(ls[i++].apply(null, data)).then(call);
        } else {
          return prev;
        }
      };
      result = call();
    }
    return Promise.resolve(result);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkReturnData(originalData, returnedData) {
  if (!isObject(returnedData)) {
    return false;
  }
  if (originalData !== returnedData) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in originalData) {
      if (!(key in returnedData)) {
        return false;
      }
    }
  }
  return true;
}
class SyncWaterfallHook extends SyncHook {
  constructor(type) {
    super();
    this.onerror = error;
    this.type = type;
  }
  emit(data) {
    if (!isObject(data)) {
      error(`The data for the "${this.type}" hook should be an object.`);
    }
    for (const fn of this.listeners) {
      try {
        const tempData = fn(data);
        if (checkReturnData(data, tempData)) {
          data = tempData;
        } else {
          this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
          break;
        }
      } catch (e) {
        warn(e);
        this.onerror(e);
      }
    }
    return data;
  }
}
class AsyncWaterfallHook extends SyncHook {
  constructor(type) {
    super();
    this.onerror = error;
    this.type = type;
  }
  emit(data) {
    if (!isObject(data)) {
      error(`The response data for the "${this.type}" hook must be an object.`);
    }
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const processError = e => {
        warn(e);
        this.onerror(e);
        return data;
      };
      const call = prevData => {
        if (checkReturnData(data, prevData)) {
          data = prevData;
          if (i < ls.length) {
            try {
              return Promise.resolve(ls[i++](data)).then(call, processError);
            } catch (e) {
              return processError(e);
            }
          }
        } else {
          this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
        }
        return data;
      };
      return Promise.resolve(call(data));
    }
    return Promise.resolve(data);
  }
}
class PluginSystem {
  constructor(lifecycle) {
    this.registerPlugins = {};
    this.lifecycle = lifecycle;
    this.lifecycleKeys = Object.keys(lifecycle);
  }
  applyPlugin(plugin, instance) {
    assert(isPlainObject(plugin), 'Plugin configuration is invalid.');
    // The plugin's name is mandatory and must be unique
    const pluginName = plugin.name;
    assert(pluginName, 'A name must be provided by the plugin.');
    if (!this.registerPlugins[pluginName]) {
      this.registerPlugins[pluginName] = plugin;
      plugin.apply?.(instance);
      Object.keys(this.lifecycle).forEach(key => {
        const pluginLife = plugin[key];
        if (pluginLife) {
          this.lifecycle[key].on(pluginLife);
        }
      });
    }
  }
  removePlugin(pluginName) {
    assert(pluginName, 'A name is required.');
    const plugin = this.registerPlugins[pluginName];
    assert(plugin, `The plugin "${pluginName}" is not registered.`);
    Object.keys(plugin).forEach(key => {
      if (key !== 'name') {
        this.lifecycle[key].remove(plugin[key]);
      }
    });
  }
}
function assignRemoteInfo(remoteInfo, remoteSnapshot) {
  const remoteEntryInfo = getRemoteEntryInfoFromSnapshot(remoteSnapshot);
  if (!remoteEntryInfo.url) {
    error(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);
  }
  let entryUrl = (0,index_esm/* getResourceUrl */.Al)(remoteSnapshot, remoteEntryInfo.url);
  if (!(0,index_esm/* isBrowserEnv */.OL)() && !entryUrl.startsWith('http')) {
    entryUrl = `https:${entryUrl}`;
  }
  remoteInfo.type = remoteEntryInfo.type;
  remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
  remoteInfo.entry = entryUrl;
  remoteInfo.version = remoteSnapshot.version;
  remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
  return {
    name: 'snapshot-plugin',
    afterResolve(args) {
      return (0,asyncToGenerator/* default */.A)(function* () {
        const {
          remote,
          pkgNameOrAlias,
          expose,
          origin,
          remoteInfo,
          id
        } = args;
        if (!isRemoteInfoWithEntry(remote) || !isPureRemoteEntry(remote)) {
          const {
            remoteSnapshot,
            globalSnapshot
          } = yield origin.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: remote,
            id
          });
          assignRemoteInfo(remoteInfo, remoteSnapshot);
          // preloading assets
          const preloadOptions = {
            remote,
            preloadConfig: {
              nameOrAlias: pkgNameOrAlias,
              exposes: [expose],
              resourceCategory: 'sync',
              share: false,
              depsRemote: false
            }
          };
          const assets = yield origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
            origin,
            preloadOptions,
            remoteInfo,
            remote,
            remoteSnapshot,
            globalSnapshot
          });
          if (assets) {
            preloadAssets(remoteInfo, origin, assets, false);
          }
          return {
            ...args,
            remoteSnapshot
          };
        }
        return args;
      })();
    }
  };
}

// name
// name:version
function splitId(id) {
  const splitInfo = id.split(':');
  if (splitInfo.length === 1) {
    return {
      name: splitInfo[0],
      version: undefined
    };
  } else if (splitInfo.length === 2) {
    return {
      name: splitInfo[0],
      version: splitInfo[1]
    };
  } else {
    return {
      name: splitInfo[1],
      version: splitInfo[2]
    };
  }
}
// Traverse all nodes in moduleInfo and traverse the entire snapshot
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
  const id = getFMId(remoteInfo);
  const {
    value: snapshotValue
  } = getInfoWithoutType(globalSnapshot, id);
  const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
  if (effectiveRemoteSnapshot && !(0,index_esm/* isManifestProvider */.Tr)(effectiveRemoteSnapshot)) {
    traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
    if (effectiveRemoteSnapshot.remotesInfo) {
      const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
      for (const key of remoteKeys) {
        if (memo[key]) {
          continue;
        }
        memo[key] = true;
        const subRemoteInfo = splitId(key);
        const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
        traverseModuleInfo(globalSnapshot, {
          name: subRemoteInfo.name,
          version: remoteValue.matchedVersion
        }, traverse, false, memo, undefined);
      }
    }
  }
}
const isExisted = (type, url) => {
  return document.querySelector(`${type}[${type === 'link' ? 'href' : 'src'}="${url}"]`);
};
// eslint-disable-next-line max-lines-per-function
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
  const cssAssets = [];
  const jsAssets = [];
  const entryAssets = [];
  const loadedSharedJsAssets = new Set();
  const loadedSharedCssAssets = new Set();
  const {
    options
  } = origin;
  const {
    preloadConfig: rootPreloadConfig
  } = preloadOptions;
  const {
    depsRemote
  } = rootPreloadConfig;
  const memo = {};
  traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot) => {
    let preloadConfig;
    if (isRoot) {
      preloadConfig = rootPreloadConfig;
    } else {
      if (Array.isArray(depsRemote)) {
        // eslint-disable-next-line array-callback-return
        const findPreloadConfig = depsRemote.find(remoteConfig => {
          if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
            return true;
          }
          return false;
        });
        if (!findPreloadConfig) {
          return;
        }
        preloadConfig = defaultPreloadArgs(findPreloadConfig);
      } else if (depsRemote === true) {
        preloadConfig = rootPreloadConfig;
      } else {
        return;
      }
    }
    const remoteEntryUrl = (0,index_esm/* getResourceUrl */.Al)(moduleInfoSnapshot, getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
    if (remoteEntryUrl) {
      entryAssets.push({
        name: remoteInfo.name,
        moduleInfo: {
          name: remoteInfo.name,
          entry: remoteEntryUrl,
          type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',
          entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
          shareScope: '',
          version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined
        },
        url: remoteEntryUrl
      });
    }
    let moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
    const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
    if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {
      moduleAssetsInfo = moduleInfoSnapshot?.modules?.reduce((assets, moduleAssetInfo) => {
        if (normalizedPreloadExposes?.indexOf(moduleAssetInfo.moduleName) !== -1) {
          assets.push(moduleAssetInfo);
        }
        return assets;
      }, []);
    }
    function handleAssets(assets) {
      const assetsRes = assets.map(asset => (0,index_esm/* getResourceUrl */.Al)(moduleInfoSnapshot, asset));
      if (preloadConfig.filter) {
        return assetsRes.filter(preloadConfig.filter);
      }
      return assetsRes;
    }
    if (moduleAssetsInfo) {
      const assetsLength = moduleAssetsInfo.length;
      for (let index = 0; index < assetsLength; index++) {
        const assetsInfo = moduleAssetsInfo[index];
        const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
        origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
          id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,
          name: remoteInfo.name,
          remoteSnapshot: moduleInfoSnapshot,
          preloadConfig,
          remote: remoteInfo,
          origin
        });
        const preloaded = getPreloaded(exposeFullPath);
        if (preloaded) {
          continue;
        }
        if (preloadConfig.resourceCategory === 'all') {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
          // eslint-disable-next-line no-constant-condition
        } else if (preloadConfig.resourceCategory = 'sync') {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
        }
        setPreloaded(exposeFullPath);
      }
    }
  }, true, memo, remoteSnapshot);
  if (remoteSnapshot.shared && remoteSnapshot.shared.length > 0) {
    const collectSharedAssets = (shareInfo, snapshotShared) => {
      const registeredShared = getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
      // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.
      if (registeredShared && typeof registeredShared.lib === 'function') {
        snapshotShared.assets.js.sync.forEach(asset => {
          loadedSharedJsAssets.add(asset);
        });
        snapshotShared.assets.css.sync.forEach(asset => {
          loadedSharedCssAssets.add(asset);
        });
      }
    };
    remoteSnapshot.shared.forEach(shared => {
      const shareInfos = options.shared?.[shared.sharedName];
      if (!shareInfos) {
        return;
      }
      // if no version, preload all shared
      const sharedOptions = shared.version ? shareInfos.find(s => s.version === shared.version) : shareInfos;
      if (!sharedOptions) {
        return;
      }
      const arrayShareInfo = arrayOptions(sharedOptions);
      arrayShareInfo.forEach(s => {
        collectSharedAssets(s, shared);
      });
    });
  }
  const needPreloadJsAssets = jsAssets.filter(asset => !loadedSharedJsAssets.has(asset) && !isExisted('script', asset));
  const needPreloadCssAssets = cssAssets.filter(asset => !loadedSharedCssAssets.has(asset) && !isExisted('link', asset));
  return {
    cssAssets: needPreloadCssAssets,
    jsAssetsWithoutEntry: needPreloadJsAssets,
    entryAssets: entryAssets.filter(entry => !isExisted('script', entry.url))
  };
}
const generatePreloadAssetsPlugin = function () {
  return {
    name: 'generate-preload-assets-plugin',
    generatePreloadAssets(args) {
      return (0,asyncToGenerator/* default */.A)(function* () {
        const {
          origin,
          preloadOptions,
          remoteInfo,
          remote,
          globalSnapshot,
          remoteSnapshot
        } = args;
        if (!(0,index_esm/* isBrowserEnv */.OL)()) {
          return {
            cssAssets: [],
            jsAssetsWithoutEntry: [],
            entryAssets: []
          };
        }
        if (isRemoteInfoWithEntry(remote) && isPureRemoteEntry(remote)) {
          return {
            cssAssets: [],
            jsAssetsWithoutEntry: [],
            entryAssets: [{
              name: remote.name,
              url: remote.entry,
              moduleInfo: {
                name: remoteInfo.name,
                entry: remote.entry,
                type: remoteInfo.type || 'global',
                entryGlobalName: '',
                shareScope: ''
              }
            }]
          };
        }
        assignRemoteInfo(remoteInfo, remoteSnapshot);
        const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
        return assets;
      })();
    }
  };
};
function getGlobalRemoteInfo(moduleInfo, origin) {
  const hostGlobalSnapshot = getGlobalSnapshotInfoByModuleInfo({
    name: origin.name,
    version: origin.options.version
  });
  // get remote detail info from global
  const globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
  if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
    return {
      hostGlobalSnapshot,
      globalSnapshot: getGlobalSnapshot(),
      remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
        name: moduleInfo.name,
        version: globalRemoteInfo.matchedVersion
      })
    };
  }
  return {
    hostGlobalSnapshot: undefined,
    globalSnapshot: getGlobalSnapshot(),
    remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
      name: moduleInfo.name,
      version: 'version' in moduleInfo ? moduleInfo.version : undefined
    })
  };
}
class SnapshotHandler {
  constructor(HostInstance) {
    this.loadingHostSnapshot = null;
    this.manifestCache = new Map();
    this.hooks = new PluginSystem({
      beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),
      loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
      loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot'),
      afterLoadSnapshot: new AsyncWaterfallHook('afterLoadSnapshot')
    });
    this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__;
    this.HostInstance = HostInstance;
    this.loaderHook = HostInstance.loaderHook;
  }
  // eslint-disable-next-line max-lines-per-function
  loadRemoteSnapshotInfo(_x9) {
    var _this3 = this;
    return (0,asyncToGenerator/* default */.A)(function* ({
      moduleInfo,
      id,
      expose
    }) {
      const {
        options
      } = _this3.HostInstance;
      yield _this3.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
        options,
        moduleInfo
      });
      let hostSnapshot = getGlobalSnapshotInfoByModuleInfo({
        name: _this3.HostInstance.options.name,
        version: _this3.HostInstance.options.version
      });
      if (!hostSnapshot) {
        hostSnapshot = {
          version: _this3.HostInstance.options.version || '',
          remoteEntry: '',
          remotesInfo: {}
        };
        addGlobalSnapshot({
          [_this3.HostInstance.options.name]: hostSnapshot
        });
      }
      // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.
      // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.
      if (hostSnapshot && 'remotesInfo' in hostSnapshot && !getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
        if ('version' in moduleInfo || 'entry' in moduleInfo) {
          hostSnapshot.remotesInfo = {
            ...hostSnapshot?.remotesInfo,
            [moduleInfo.name]: {
              matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry
            }
          };
        }
      }
      const {
        hostGlobalSnapshot,
        remoteSnapshot,
        globalSnapshot
      } = _this3.getGlobalRemoteInfo(moduleInfo);
      const {
        remoteSnapshot: globalRemoteSnapshot,
        globalSnapshot: globalSnapshotRes
      } = yield _this3.hooks.lifecycle.loadSnapshot.emit({
        options,
        moduleInfo,
        hostGlobalSnapshot,
        remoteSnapshot,
        globalSnapshot
      });
      let mSnapshot;
      let gSnapshot;
      // global snapshot includes manifest or module info includes manifest
      if (globalRemoteSnapshot) {
        if ((0,index_esm/* isManifestProvider */.Tr)(globalRemoteSnapshot)) {
          const remoteEntry = (0,index_esm/* isBrowserEnv */.OL)() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';
          const moduleSnapshot = yield _this3.getManifestJson(remoteEntry, moduleInfo, {});
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo({
            ...moduleInfo,
            // The global remote may be overridden
            // Therefore, set the snapshot key to the global address of the actual request
            entry: remoteEntry
          }, moduleSnapshot);
          mSnapshot = moduleSnapshot;
          gSnapshot = globalSnapshotRes;
        } else {
          const {
            remoteSnapshot: remoteSnapshotRes
          } = yield _this3.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: _this3.HostInstance.options,
            moduleInfo,
            remoteSnapshot: globalRemoteSnapshot,
            from: 'global'
          });
          mSnapshot = remoteSnapshotRes;
          gSnapshot = globalSnapshotRes;
        }
      } else {
        if (isRemoteInfoWithEntry(moduleInfo)) {
          // get from manifest.json and merge remote info from remote server
          const moduleSnapshot = yield _this3.getManifestJson(moduleInfo.entry, moduleInfo, {});
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
          const {
            remoteSnapshot: remoteSnapshotRes
          } = yield _this3.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: _this3.HostInstance.options,
            moduleInfo,
            remoteSnapshot: moduleSnapshot,
            from: 'global'
          });
          mSnapshot = remoteSnapshotRes;
          gSnapshot = globalSnapshotRes;
        } else {
          error(getShortErrorMsg(RUNTIME_007, runtimeDescMap, {
            hostName: moduleInfo.name,
            hostVersion: moduleInfo.version,
            globalSnapshot: JSON.stringify(globalSnapshotRes)
          }));
        }
      }
      yield _this3.hooks.lifecycle.afterLoadSnapshot.emit({
        id,
        host: _this3.HostInstance,
        options,
        moduleInfo,
        remoteSnapshot: mSnapshot
      });
      return {
        remoteSnapshot: mSnapshot,
        globalSnapshot: gSnapshot
      };
    }).apply(this, arguments);
  }
  getGlobalRemoteInfo(moduleInfo) {
    return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
  }
  getManifestJson(manifestUrl, moduleInfo, extraOptions) {
    var _this4 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      const getManifest = /*#__PURE__*/function () {
        var _ref2 = (0,asyncToGenerator/* default */.A)(function* () {
          let manifestJson = _this4.manifestCache.get(manifestUrl);
          if (manifestJson) {
            return manifestJson;
          }
          try {
            let res = yield _this4.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
            if (!res || !(res instanceof Response)) {
              res = yield fetch(manifestUrl, {});
            }
            manifestJson = yield res.json();
          } catch (err) {
            manifestJson = yield _this4.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
              id: manifestUrl,
              error: err,
              from: 'runtime',
              lifecycle: 'afterResolve',
              origin: _this4.HostInstance
            });
            if (!manifestJson) {
              delete _this4.manifestLoading[manifestUrl];
              error(getShortErrorMsg(RUNTIME_003, runtimeDescMap, {
                manifestUrl,
                moduleName: moduleInfo.name,
                hostName: _this4.HostInstance.options.name
              }, `${err}`));
            }
          }
          assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
          _this4.manifestCache.set(manifestUrl, manifestJson);
          return manifestJson;
        });
        return function getManifest() {
          return _ref2.apply(this, arguments);
        };
      }();
      const asyncLoadProcess = /*#__PURE__*/function () {
        var _ref3 = (0,asyncToGenerator/* default */.A)(function* () {
          const manifestJson = yield getManifest();
          const remoteSnapshot = (0,index_esm/* generateSnapshotFromManifest */.Jn)(manifestJson, {
            version: manifestUrl
          });
          const {
            remoteSnapshot: remoteSnapshotRes
          } = yield _this4.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: _this4.HostInstance.options,
            moduleInfo,
            manifestJson,
            remoteSnapshot,
            manifestUrl,
            from: 'manifest'
          });
          return remoteSnapshotRes;
        });
        return function asyncLoadProcess() {
          return _ref3.apply(this, arguments);
        };
      }();
      if (!_this4.manifestLoading[manifestUrl]) {
        _this4.manifestLoading[manifestUrl] = asyncLoadProcess().then(res => res);
      }
      return _this4.manifestLoading[manifestUrl];
    })();
  }
}
class SharedHandler {
  constructor(host) {
    this.hooks = new PluginSystem({
      afterResolve: new AsyncWaterfallHook('afterResolve'),
      beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
      // not used yet
      loadShare: new AsyncHook(),
      resolveShare: new SyncWaterfallHook('resolveShare'),
      // maybe will change, temporarily for internal use only
      initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')
    });
    this.host = host;
    this.shareScopeMap = {};
    this.initTokens = {};
    this._setGlobalShareScopeMap(host.options);
  }
  // register shared in shareScopeMap
  registerShared(globalOptions, userOptions) {
    const {
      shareInfos,
      shared
    } = formatShareConfigs(globalOptions, userOptions);
    const sharedKeys = Object.keys(shareInfos);
    sharedKeys.forEach(sharedKey => {
      const sharedVals = shareInfos[sharedKey];
      sharedVals.forEach(sharedVal => {
        sharedVal.scope.forEach(sc => {
          const registeredShared = this.shareScopeMap[sc]?.[sharedKey];
          if (!registeredShared) {
            this.setShared({
              pkgName: sharedKey,
              lib: sharedVal.lib,
              get: sharedVal.get,
              loaded: sharedVal.loaded || Boolean(sharedVal.lib),
              shared: sharedVal,
              from: userOptions.name
            });
          }
        });
      });
    });
    return {
      shareInfos,
      shared
    };
  }
  loadShare(pkgName, extraOptions) {
    var _this5 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      const {
        host
      } = _this5;
      // This function performs the following steps:
      // 1. Checks if the currently loaded share already exists, if not, it throws an error
      // 2. Searches globally for a matching share, if found, it uses it directly
      // 3. If not found, it retrieves it from the current share and stores the obtained share globally.
      const shareOptions = getTargetSharedOptions({
        pkgName,
        extraOptions,
        shareInfos: host.options.shared
      });
      if (shareOptions?.scope) {
        yield Promise.all(shareOptions.scope.map(/*#__PURE__*/function () {
          var _ref4 = (0,asyncToGenerator/* default */.A)(function* (shareScope) {
            yield Promise.all(_this5.initializeSharing(shareScope, {
              strategy: shareOptions.strategy
            }));
            return;
          });
          return function (_x0) {
            return _ref4.apply(this, arguments);
          };
        }()));
      }
      const loadShareRes = yield _this5.hooks.lifecycle.beforeLoadShare.emit({
        pkgName,
        shareInfo: shareOptions,
        shared: host.options.shared,
        origin: host
      });
      const {
        shareInfo: shareOptionsRes
      } = loadShareRes;
      // Assert that shareInfoRes exists, if not, throw an error
      assert(shareOptionsRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
      // Retrieve from cache
      const registeredShared = getRegisteredShare(_this5.shareScopeMap, pkgName, shareOptionsRes, _this5.hooks.lifecycle.resolveShare);
      const addUseIn = shared => {
        if (!shared.useIn) {
          shared.useIn = [];
        }
        addUniqueItem(shared.useIn, host.options.name);
      };
      if (registeredShared && registeredShared.lib) {
        addUseIn(registeredShared);
        return registeredShared.lib;
      } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
        const factory = yield registeredShared.loading;
        registeredShared.loaded = true;
        if (!registeredShared.lib) {
          registeredShared.lib = factory;
        }
        addUseIn(registeredShared);
        return factory;
      } else if (registeredShared) {
        const asyncLoadProcess = /*#__PURE__*/function () {
          var _ref5 = (0,asyncToGenerator/* default */.A)(function* () {
            const factory = yield registeredShared.get();
            addUseIn(registeredShared);
            registeredShared.loaded = true;
            registeredShared.lib = factory;
            return factory;
          });
          return function asyncLoadProcess() {
            return _ref5.apply(this, arguments);
          };
        }();
        const loading = asyncLoadProcess();
        _this5.setShared({
          pkgName,
          loaded: false,
          shared: registeredShared,
          from: host.options.name,
          lib: null,
          loading
        });
        return loading;
      } else {
        if (extraOptions?.customShareInfo) {
          return false;
        }
        const asyncLoadProcess = /*#__PURE__*/function () {
          var _ref6 = (0,asyncToGenerator/* default */.A)(function* () {
            const factory = yield shareOptionsRes.get();
            shareOptionsRes.lib = factory;
            shareOptionsRes.loaded = true;
            addUseIn(shareOptionsRes);
            const gShared = getRegisteredShare(_this5.shareScopeMap, pkgName, shareOptionsRes, _this5.hooks.lifecycle.resolveShare);
            if (gShared) {
              gShared.lib = factory;
              gShared.loaded = true;
              gShared.from = shareOptionsRes.from;
            }
            return factory;
          });
          return function asyncLoadProcess() {
            return _ref6.apply(this, arguments);
          };
        }();
        const loading = asyncLoadProcess();
        _this5.setShared({
          pkgName,
          loaded: false,
          shared: shareOptionsRes,
          from: host.options.name,
          lib: null,
          loading
        });
        return loading;
      }
    })();
  }
  /**
   * This function initializes the sharing sequence (executed only once per share scope).
   * It accepts one argument, the name of the share scope.
   * If the share scope does not exist, it creates one.
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
    const {
      host
    } = this;
    const from = extraOptions?.from;
    const strategy = extraOptions?.strategy;
    let initScope = extraOptions?.initScope;
    const promises = [];
    if (from !== 'build') {
      const {
        initTokens
      } = this;
      if (!initScope) initScope = [];
      let initToken = initTokens[shareScopeName];
      if (!initToken) initToken = initTokens[shareScopeName] = {
        from: this.host.name
      };
      if (initScope.indexOf(initToken) >= 0) return promises;
      initScope.push(initToken);
    }
    const shareScope = this.shareScopeMap;
    const hostName = host.options.name;
    // Creates a new share scope if necessary
    if (!shareScope[shareScopeName]) {
      shareScope[shareScopeName] = {};
    }
    // Executes all initialization snippets from all accessible modules
    const scope = shareScope[shareScopeName];
    const register = (name, shared) => {
      const {
        version,
        eager
      } = shared;
      scope[name] = scope[name] || {};
      const versions = scope[name];
      const activeVersion = versions[version];
      const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || activeVersion.shareConfig?.eager));
      if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
        versions[version] = shared;
      }
    };
    const initFn = mod => mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
    const initRemoteModule = /*#__PURE__*/function () {
      var _ref7 = (0,asyncToGenerator/* default */.A)(function* (key) {
        const {
          module
        } = yield host.remoteHandler.getRemoteModuleAndOptions({
          id: key
        });
        if (module.getEntry) {
          let remoteEntryExports;
          try {
            remoteEntryExports = yield module.getEntry();
          } catch (error) {
            remoteEntryExports = yield host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
              id: key,
              error,
              from: 'runtime',
              lifecycle: 'beforeLoadShare',
              origin: host
            });
          }
          if (!module.inited) {
            yield initFn(remoteEntryExports);
            module.inited = true;
          }
        }
      });
      return function initRemoteModule(_x1) {
        return _ref7.apply(this, arguments);
      };
    }();
    Object.keys(host.options.shared).forEach(shareName => {
      const sharedArr = host.options.shared[shareName];
      sharedArr.forEach(shared => {
        if (shared.scope.includes(shareScopeName)) {
          register(shareName, shared);
        }
      });
    });
    // TODO: strategy==='version-first' need to be removed in the future
    if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {
      host.options.remotes.forEach(remote => {
        if (remote.shareScope === shareScopeName) {
          promises.push(initRemoteModule(remote.name));
        }
      });
    }
    return promises;
  }
  // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
  // 1. If the loaded shared already exists globally, then it will be reused
  // 2. If lib exists in local shared, it will be used directly
  // 3. If the local get returns something other than Promise, then it will be used directly
  loadShareSync(pkgName, extraOptions) {
    const {
      host
    } = this;
    const shareOptions = getTargetSharedOptions({
      pkgName,
      extraOptions,
      shareInfos: host.options.shared
    });
    if (shareOptions?.scope) {
      shareOptions.scope.forEach(shareScope => {
        this.initializeSharing(shareScope, {
          strategy: shareOptions.strategy
        });
      });
    }
    const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareOptions, this.hooks.lifecycle.resolveShare);
    const addUseIn = shared => {
      if (!shared.useIn) {
        shared.useIn = [];
      }
      addUniqueItem(shared.useIn, host.options.name);
    };
    if (registeredShared) {
      if (typeof registeredShared.lib === 'function') {
        addUseIn(registeredShared);
        if (!registeredShared.loaded) {
          registeredShared.loaded = true;
          if (registeredShared.from === host.options.name) {
            shareOptions.loaded = true;
          }
        }
        return registeredShared.lib;
      }
      if (typeof registeredShared.get === 'function') {
        const module = registeredShared.get();
        if (!(module instanceof Promise)) {
          addUseIn(registeredShared);
          this.setShared({
            pkgName,
            loaded: true,
            from: host.options.name,
            lib: module,
            shared: registeredShared
          });
          return module;
        }
      }
    }
    if (shareOptions.lib) {
      if (!shareOptions.loaded) {
        shareOptions.loaded = true;
      }
      return shareOptions.lib;
    }
    if (shareOptions.get) {
      const module = shareOptions.get();
      if (module instanceof Promise) {
        const errorCode = extraOptions?.from === 'build' ? RUNTIME_005 : RUNTIME_006;
        throw new Error(getShortErrorMsg(errorCode, runtimeDescMap, {
          hostName: host.options.name,
          sharedPkgName: pkgName
        }));
      }
      shareOptions.lib = module;
      this.setShared({
        pkgName,
        loaded: true,
        from: host.options.name,
        lib: shareOptions.lib,
        shared: shareOptions
      });
      return shareOptions.lib;
    }
    throw new Error(getShortErrorMsg(RUNTIME_006, runtimeDescMap, {
      hostName: host.options.name,
      sharedPkgName: pkgName
    }));
  }
  initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
    const {
      host
    } = this;
    this.shareScopeMap[scopeName] = shareScope;
    this.hooks.lifecycle.initContainerShareScopeMap.emit({
      shareScope,
      options: host.options,
      origin: host,
      scopeName,
      hostShareScopeMap: extraOptions.hostShareScopeMap
    });
  }
  setShared({
    pkgName,
    shared,
    from,
    lib,
    loading,
    loaded,
    get
  }) {
    const {
      version,
      scope = 'default',
      ...shareInfo
    } = shared;
    const scopes = Array.isArray(scope) ? scope : [scope];
    scopes.forEach(sc => {
      if (!this.shareScopeMap[sc]) {
        this.shareScopeMap[sc] = {};
      }
      if (!this.shareScopeMap[sc][pkgName]) {
        this.shareScopeMap[sc][pkgName] = {};
      }
      if (!this.shareScopeMap[sc][pkgName][version]) {
        this.shareScopeMap[sc][pkgName][version] = {
          version,
          scope: [sc],
          ...shareInfo,
          lib,
          loaded,
          loading
        };
        if (get) {
          this.shareScopeMap[sc][pkgName][version].get = get;
        }
        return;
      }
      const registeredShared = this.shareScopeMap[sc][pkgName][version];
      if (loading && !registeredShared.loading) {
        registeredShared.loading = loading;
      }
      if (loaded && !registeredShared.loaded) {
        registeredShared.loaded = loaded;
      }
      if (from && registeredShared.from !== from) {
        registeredShared.from = from;
      }
    });
  }
  _setGlobalShareScopeMap(hostOptions) {
    const globalShareScopeMap = getGlobalShareScope();
    const identifier = hostOptions.id || hostOptions.name;
    if (identifier && !globalShareScopeMap[identifier]) {
      globalShareScopeMap[identifier] = this.shareScopeMap;
    }
  }
}
class RemoteHandler {
  constructor(host) {
    this.hooks = new PluginSystem({
      beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),
      registerRemote: new SyncWaterfallHook('registerRemote'),
      beforeRequest: new AsyncWaterfallHook('beforeRequest'),
      onLoad: new AsyncHook('onLoad'),
      handlePreloadModule: new SyncHook('handlePreloadModule'),
      errorLoadRemote: new AsyncHook('errorLoadRemote'),
      beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
      generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
      // not used yet
      afterPreloadRemote: new AsyncHook(),
      loadEntry: new AsyncHook()
    });
    this.host = host;
    this.idToRemoteMap = {};
  }
  formatAndRegisterRemote(globalOptions, userOptions) {
    const userRemotes = userOptions.remotes || [];
    return userRemotes.reduce((res, remote) => {
      this.registerRemote(remote, res, {
        force: false
      });
      return res;
    }, globalOptions.remotes);
  }
  setIdToRemoteMap(id, remoteMatchInfo) {
    const {
      remote,
      expose
    } = remoteMatchInfo;
    const {
      name,
      alias
    } = remote;
    this.idToRemoteMap[id] = {
      name: remote.name,
      expose
    };
    if (alias && id.startsWith(name)) {
      const idWithAlias = id.replace(name, alias);
      this.idToRemoteMap[idWithAlias] = {
        name: remote.name,
        expose
      };
      return;
    }
    if (alias && id.startsWith(alias)) {
      const idWithName = id.replace(alias, name);
      this.idToRemoteMap[idWithName] = {
        name: remote.name,
        expose
      };
    }
  }
  // eslint-disable-next-line max-lines-per-function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loadRemote(id, options) {
    var _this6 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      const {
        host
      } = _this6;
      try {
        const {
          loadFactory = true
        } = options || {
          loadFactory: true
        };
        // 1. Validate the parameters of the retrieved module. There are two module request methods: pkgName + expose and alias + expose.
        // 2. Request the snapshot information of the current host and globally store the obtained snapshot information. The retrieved module information is partially offline and partially online. The online module information will retrieve the modules used online.
        // 3. Retrieve the detailed information of the current module from global (remoteEntry address, expose resource address)
        // 4. After retrieving remoteEntry, call the init of the module, and then retrieve the exported content of the module through get
        // id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
        // id: alias(app1) + expose(button) = app1/button
        // id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
        const {
          module,
          moduleOptions,
          remoteMatchInfo
        } = yield _this6.getRemoteModuleAndOptions({
          id
        });
        const {
          pkgNameOrAlias,
          remote,
          expose,
          id: idRes,
          remoteSnapshot
        } = remoteMatchInfo;
        const moduleOrFactory = yield module.get(idRes, expose, options, remoteSnapshot);
        const moduleWrapper = yield _this6.hooks.lifecycle.onLoad.emit({
          id: idRes,
          pkgNameOrAlias,
          expose,
          exposeModule: loadFactory ? moduleOrFactory : undefined,
          exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,
          remote,
          options: moduleOptions,
          moduleInstance: module,
          origin: host
        });
        _this6.setIdToRemoteMap(id, remoteMatchInfo);
        if (typeof moduleWrapper === 'function') {
          return moduleWrapper;
        }
        return moduleOrFactory;
      } catch (error) {
        const {
          from = 'runtime'
        } = options || {
          from: 'runtime'
        };
        const failOver = yield _this6.hooks.lifecycle.errorLoadRemote.emit({
          id,
          error,
          from,
          lifecycle: 'onLoad',
          origin: host
        });
        if (!failOver) {
          throw error;
        }
        return failOver;
      }
    })();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  preloadRemote(preloadOptions) {
    var _this7 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      const {
        host
      } = _this7;
      yield _this7.hooks.lifecycle.beforePreloadRemote.emit({
        preloadOps: preloadOptions,
        options: host.options,
        origin: host
      });
      const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
      yield Promise.all(preloadOps.map(/*#__PURE__*/function () {
        var _ref8 = (0,asyncToGenerator/* default */.A)(function* (ops) {
          const {
            remote
          } = ops;
          const remoteInfo = getRemoteInfo(remote);
          const {
            globalSnapshot,
            remoteSnapshot
          } = yield host.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: remote
          });
          const assets = yield _this7.hooks.lifecycle.generatePreloadAssets.emit({
            origin: host,
            preloadOptions: ops,
            remote,
            remoteInfo,
            globalSnapshot,
            remoteSnapshot
          });
          if (!assets) {
            return;
          }
          preloadAssets(remoteInfo, host, assets);
        });
        return function (_x10) {
          return _ref8.apply(this, arguments);
        };
      }()));
    })();
  }
  registerRemotes(remotes, options) {
    const {
      host
    } = this;
    remotes.forEach(remote => {
      this.registerRemote(remote, host.options.remotes, {
        force: options?.force
      });
    });
  }
  getRemoteModuleAndOptions(options) {
    var _this8 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      const {
        host
      } = _this8;
      const {
        id
      } = options;
      let loadRemoteArgs;
      try {
        loadRemoteArgs = yield _this8.hooks.lifecycle.beforeRequest.emit({
          id,
          options: host.options,
          origin: host
        });
      } catch (error) {
        loadRemoteArgs = yield _this8.hooks.lifecycle.errorLoadRemote.emit({
          id,
          options: host.options,
          origin: host,
          from: 'runtime',
          error,
          lifecycle: 'beforeRequest'
        });
        if (!loadRemoteArgs) {
          throw error;
        }
      }
      const {
        id: idRes
      } = loadRemoteArgs;
      const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
      assert(remoteSplitInfo, getShortErrorMsg(RUNTIME_004, runtimeDescMap, {
        hostName: host.options.name,
        requestId: idRes
      }));
      const {
        remote: rawRemote
      } = remoteSplitInfo;
      const remoteInfo = getRemoteInfo(rawRemote);
      const matchInfo = yield host.sharedHandler.hooks.lifecycle.afterResolve.emit({
        id: idRes,
        ...remoteSplitInfo,
        options: host.options,
        origin: host,
        remoteInfo
      });
      const {
        remote,
        expose
      } = matchInfo;
      assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
      let module = host.moduleCache.get(remote.name);
      const moduleOptions = {
        host: host,
        remoteInfo
      };
      if (!module) {
        module = new Module(moduleOptions);
        host.moduleCache.set(remote.name, module);
      }
      return {
        module,
        moduleOptions,
        remoteMatchInfo: matchInfo
      };
    })();
  }
  registerRemote(remote, targetRemotes, options) {
    const {
      host
    } = this;
    const normalizeRemote = () => {
      if (remote.alias) {
        // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error
        // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported
        const findEqual = targetRemotes.find(item => remote.alias && (item.name.startsWith(remote.alias) || item.alias?.startsWith(remote.alias)));
        assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
      }
      // Set the remote entry to a complete path
      if ('entry' in remote) {
        if ((0,index_esm/* isBrowserEnv */.OL)() && !remote.entry.startsWith('http')) {
          remote.entry = new URL(remote.entry, window.location.origin).href;
        }
      }
      if (!remote.shareScope) {
        remote.shareScope = DEFAULT_SCOPE;
      }
      if (!remote.type) {
        remote.type = DEFAULT_REMOTE_TYPE;
      }
    };
    this.hooks.lifecycle.beforeRegisterRemote.emit({
      remote,
      origin: host
    });
    const registeredRemote = targetRemotes.find(item => item.name === remote.name);
    if (!registeredRemote) {
      normalizeRemote();
      targetRemotes.push(remote);
      this.hooks.lifecycle.registerRemote.emit({
        remote,
        origin: host
      });
    } else {
      const messages = [`The remote "${remote.name}" is already registered.`, 'Please note that overriding it may cause unexpected errors.'];
      if (options?.force) {
        // remove registered remote
        this.removeRemote(registeredRemote);
        normalizeRemote();
        targetRemotes.push(remote);
        this.hooks.lifecycle.registerRemote.emit({
          remote,
          origin: host
        });
        (0,index_esm/* warn */.R8)(messages.join(' '));
      }
    }
  }
  removeRemote(remote) {
    try {
      const {
        host
      } = this;
      const {
        name
      } = remote;
      const remoteIndex = host.options.remotes.findIndex(item => item.name === name);
      if (remoteIndex !== -1) {
        host.options.remotes.splice(remoteIndex, 1);
      }
      const loadedModule = host.moduleCache.get(remote.name);
      if (loadedModule) {
        const remoteInfo = loadedModule.remoteInfo;
        const key = remoteInfo.entryGlobalName;
        if (CurrentGlobal[key]) {
          if (Object.getOwnPropertyDescriptor(CurrentGlobal, key)?.configurable) {
            delete CurrentGlobal[key];
          } else {
            // @ts-ignore
            CurrentGlobal[key] = undefined;
          }
        }
        const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
        if (globalLoading[remoteEntryUniqueKey]) {
          delete globalLoading[remoteEntryUniqueKey];
        }
        host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
        // delete unloaded shared and instance
        let remoteInsId = remoteInfo.buildVersion ? (0,index_esm/* composeKeyWithSeparator */.lG)(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
        const remoteInsIndex = CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex(ins => {
          if (remoteInfo.buildVersion) {
            return ins.options.id === remoteInsId;
          } else {
            return ins.name === remoteInsId;
          }
        });
        if (remoteInsIndex !== -1) {
          const remoteIns = CurrentGlobal.__FEDERATION__.__INSTANCES__[remoteInsIndex];
          remoteInsId = remoteIns.options.id || remoteInsId;
          const globalShareScopeMap = getGlobalShareScope();
          let isAllSharedNotUsed = true;
          const needDeleteKeys = [];
          Object.keys(globalShareScopeMap).forEach(instId => {
            const shareScopeMap = globalShareScopeMap[instId];
            shareScopeMap && Object.keys(shareScopeMap).forEach(shareScope => {
              const shareScopeVal = shareScopeMap[shareScope];
              shareScopeVal && Object.keys(shareScopeVal).forEach(shareName => {
                const sharedPkgs = shareScopeVal[shareName];
                sharedPkgs && Object.keys(sharedPkgs).forEach(shareVersion => {
                  const shared = sharedPkgs[shareVersion];
                  if (shared && typeof shared === 'object' && shared.from === remoteInfo.name) {
                    if (shared.loaded || shared.loading) {
                      shared.useIn = shared.useIn.filter(usedHostName => usedHostName !== remoteInfo.name);
                      if (shared.useIn.length) {
                        isAllSharedNotUsed = false;
                      } else {
                        needDeleteKeys.push([instId, shareScope, shareName, shareVersion]);
                      }
                    } else {
                      needDeleteKeys.push([instId, shareScope, shareName, shareVersion]);
                    }
                  }
                });
              });
            });
          });
          if (isAllSharedNotUsed) {
            remoteIns.shareScopeMap = {};
            delete globalShareScopeMap[remoteInsId];
          }
          needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion]) => {
            delete globalShareScopeMap[insId]?.[shareScope]?.[shareName]?.[shareVersion];
          });
          CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
        }
        const {
          hostGlobalSnapshot
        } = getGlobalRemoteInfo(remote, host);
        if (hostGlobalSnapshot) {
          const remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
          if (remoteKey) {
            delete hostGlobalSnapshot.remotesInfo[remoteKey];
            if (
            //eslint-disable-next-line no-extra-boolean-cast
            Boolean(Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {
              delete Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
            }
          }
        }
        host.moduleCache.delete(remote.name);
      }
    } catch (err) {
      logger.log('removeRemote fail: ', err);
    }
  }
}
const USE_SNAPSHOT =  true ? !false : 0; // Default to true (use snapshot) when not explicitly defined
class ModuleFederation {
  constructor(userOptions) {
    this.hooks = new PluginSystem({
      beforeInit: new SyncWaterfallHook('beforeInit'),
      init: new SyncHook(),
      // maybe will change, temporarily for internal use only
      beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
      // maybe will change, temporarily for internal use only
      initContainer: new AsyncWaterfallHook('initContainer')
    });
    this.version = "0.21.6";
    this.moduleCache = new Map();
    this.loaderHook = new PluginSystem({
      // FIXME: may not be suitable , not open to the public yet
      getModuleInfo: new SyncHook(),
      createScript: new SyncHook(),
      createLink: new SyncHook(),
      fetch: new AsyncHook(),
      loadEntryError: new AsyncHook(),
      getModuleFactory: new AsyncHook()
    });
    this.bridgeHook = new PluginSystem({
      beforeBridgeRender: new SyncHook(),
      afterBridgeRender: new SyncHook(),
      beforeBridgeDestroy: new SyncHook(),
      afterBridgeDestroy: new SyncHook()
    });
    const plugins = USE_SNAPSHOT ? [snapshotPlugin(), generatePreloadAssetsPlugin()] : [];
    // TODO: Validate the details of the options
    // Initialize options with default values
    const defaultOptions = {
      id: getBuilderId(),
      name: userOptions.name,
      plugins,
      remotes: [],
      shared: {},
      inBrowser: (0,index_esm/* isBrowserEnv */.OL)()
    };
    this.name = userOptions.name;
    this.options = defaultOptions;
    this.snapshotHandler = new SnapshotHandler(this);
    this.sharedHandler = new SharedHandler(this);
    this.remoteHandler = new RemoteHandler(this);
    this.shareScopeMap = this.sharedHandler.shareScopeMap;
    this.registerPlugins([...defaultOptions.plugins, ...(userOptions.plugins || [])]);
    this.options = this.formatOptions(defaultOptions, userOptions);
  }
  initOptions(userOptions) {
    this.registerPlugins(userOptions.plugins);
    const options = this.formatOptions(this.options, userOptions);
    this.options = options;
    return options;
  }
  loadShare(pkgName, extraOptions) {
    var _this9 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      return _this9.sharedHandler.loadShare(pkgName, extraOptions);
    })();
  }
  // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
  // 1. If the loaded shared already exists globally, then it will be reused
  // 2. If lib exists in local shared, it will be used directly
  // 3. If the local get returns something other than Promise, then it will be used directly
  loadShareSync(pkgName, extraOptions) {
    return this.sharedHandler.loadShareSync(pkgName, extraOptions);
  }
  initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
    return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
  }
  initRawContainer(name, url, container) {
    const remoteInfo = getRemoteInfo({
      name,
      entry: url
    });
    const module = new Module({
      host: this,
      remoteInfo
    });
    module.remoteEntryExports = container;
    this.moduleCache.set(name, module);
    return module;
  }
  // eslint-disable-next-line max-lines-per-function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loadRemote(id, options) {
    var _this0 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      return _this0.remoteHandler.loadRemote(id, options);
    })();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  preloadRemote(preloadOptions) {
    var _this1 = this;
    return (0,asyncToGenerator/* default */.A)(function* () {
      return _this1.remoteHandler.preloadRemote(preloadOptions);
    })();
  }
  initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
    this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
  }
  formatOptions(globalOptions, userOptions) {
    const {
      shared
    } = formatShareConfigs(globalOptions, userOptions);
    const {
      userOptions: userOptionsRes,
      options: globalOptionsRes
    } = this.hooks.lifecycle.beforeInit.emit({
      origin: this,
      userOptions,
      options: globalOptions,
      shareInfo: shared
    });
    const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
    const {
      shared: handledShared
    } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
    const plugins = [...globalOptionsRes.plugins];
    if (userOptionsRes.plugins) {
      userOptionsRes.plugins.forEach(plugin => {
        if (!plugins.includes(plugin)) {
          plugins.push(plugin);
        }
      });
    }
    const optionsRes = {
      ...globalOptions,
      ...userOptions,
      plugins,
      remotes,
      shared: handledShared
    };
    this.hooks.lifecycle.init.emit({
      origin: this,
      options: optionsRes
    });
    return optionsRes;
  }
  registerPlugins(plugins) {
    const pluginRes = registerPlugins(plugins, this);
    // Merge plugin
    this.options.plugins = this.options.plugins.reduce((res, plugin) => {
      if (!plugin) return res;
      if (res && !res.find(item => item.name === plugin.name)) {
        res.push(plugin);
      }
      return res;
    }, pluginRes || []);
  }
  registerRemotes(remotes, options) {
    return this.remoteHandler.registerRemotes(remotes, options);
  }
  registerShared(shared) {
    this.sharedHandler.registerShared(this.options, {
      ...this.options,
      shared
    });
  }
}
var index = /*#__PURE__*/Object.freeze({
  __proto__: null
});

//# sourceMappingURL=index.esm.js.map
;// ./node_modules/@module-federation/runtime/dist/utils.esm.js


// injected by bundler, so it can not use runtime-core stuff
function utils_esm_getBuilderId() {
  //@ts-ignore
  return  true ?
  //@ts-ignore
  "dashboard:0.0.0" : 0;
}
function getGlobalFederationInstance(name, version) {
  const buildId = utils_esm_getBuilderId();
  return CurrentGlobal.__FEDERATION__.__INSTANCES__.find(GMInstance => {
    if (buildId && GMInstance.options.id === buildId) {
      return true;
    }
    if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
      return true;
    }
    if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
      return true;
    }
    return false;
  });
}

//# sourceMappingURL=utils.esm.js.map
;// ./node_modules/@module-federation/runtime/dist/index.esm.js




function createInstance(options) {
  // Retrieve debug constructor
  const ModuleFederationConstructor = getGlobalFederationConstructor() || ModuleFederation;
  const instance = new ModuleFederationConstructor(options);
  setGlobalFederationInstance(instance);
  return instance;
}
let FederationInstance = null;
/**
 * @deprecated Use createInstance or getInstance instead
 */
function init(options) {
  // Retrieve the same instance with the same name
  const instance = getGlobalFederationInstance(options.name, options.version);
  if (!instance) {
    FederationInstance = createInstance(options);
    return FederationInstance;
  } else {
    // Merge options
    instance.initOptions(options);
    if (!FederationInstance) {
      FederationInstance = instance;
    }
    return instance;
  }
}
function loadRemote(...args) {
  assert(FederationInstance, getShortErrorMsg(RUNTIME_009, runtimeDescMap));
  const loadRemote = FederationInstance.loadRemote;
  // eslint-disable-next-line prefer-spread
  return loadRemote.apply(FederationInstance, args);
}
function loadShare(...args) {
  assert(FederationInstance, getShortErrorMsg(RUNTIME_009, runtimeDescMap));
  // eslint-disable-next-line prefer-spread
  const loadShare = FederationInstance.loadShare;
  return loadShare.apply(FederationInstance, args);
}
function loadShareSync(...args) {
  assert(FederationInstance, getShortErrorMsg(RUNTIME_009, runtimeDescMap));
  const loadShareSync = FederationInstance.loadShareSync;
  // eslint-disable-next-line prefer-spread
  return loadShareSync.apply(FederationInstance, args);
}
function preloadRemote(...args) {
  assert(FederationInstance, getShortErrorMsg(RUNTIME_009, runtimeDescMap));
  // eslint-disable-next-line prefer-spread
  return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
  assert(FederationInstance, getShortErrorMsg(RUNTIME_009, runtimeDescMap));
  // eslint-disable-next-line prefer-spread
  return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function index_esm_registerPlugins(...args) {
  assert(FederationInstance, getShortErrorMsg(RUNTIME_009, runtimeDescMap));
  // eslint-disable-next-line prefer-spread
  return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
  return FederationInstance;
}
function registerShared(...args) {
  assert(FederationInstance, getShortErrorMsg(RUNTIME_009, runtimeDescMap));
  // eslint-disable-next-line prefer-spread
  return FederationInstance.registerShared.apply(FederationInstance, args);
}
// Inject for debug
setGlobalFederationConstructor(ModuleFederation);

//# sourceMappingURL=index.esm.js.map
;// ./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.esm.js
const FEDERATION_SUPPORTED_TYPES = ['script'];

//# sourceMappingURL=constant.esm.js.map
;// ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js



function attachShareScopeMap(webpackRequire) {
  if (!webpackRequire.S || webpackRequire.federation.hasAttachShareScopeMap || !webpackRequire.federation.instance || !webpackRequire.federation.instance.shareScopeMap) {
    return;
  }
  webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;
  webpackRequire.federation.hasAttachShareScopeMap = true;
}
function updateConsumeOptions(options) {
  const {
    webpackRequire,
    moduleToHandlerMapping
  } = options;
  const {
    consumesLoadingData,
    initializeSharingData
  } = webpackRequire;
  if (consumesLoadingData && !consumesLoadingData._updated) {
    const {
      moduleIdToConsumeDataMapping: updatedModuleIdToConsumeDataMapping = {},
      initialConsumes: updatedInitialConsumes = [],
      chunkMapping: updatedChunkMapping = {}
    } = consumesLoadingData;
    Object.entries(updatedModuleIdToConsumeDataMapping).forEach(([id, data]) => {
      if (!moduleToHandlerMapping[id]) {
        moduleToHandlerMapping[id] = {
          getter: data.fallback,
          shareInfo: {
            shareConfig: {
              requiredVersion: data.requiredVersion,
              strictVersion: data.strictVersion,
              singleton: data.singleton,
              eager: data.eager,
              layer: data.layer
            },
            scope: Array.isArray(data.shareScope) ? data.shareScope : [data.shareScope || 'default']
          },
          shareKey: data.shareKey
        };
      }
    });
    if ('initialConsumes' in options) {
      const {
        initialConsumes = []
      } = options;
      updatedInitialConsumes.forEach(id => {
        if (!initialConsumes.includes(id)) {
          initialConsumes.push(id);
        }
      });
    }
    if ('chunkMapping' in options) {
      const {
        chunkMapping = {}
      } = options;
      Object.entries(updatedChunkMapping).forEach(([id, chunkModules]) => {
        if (!chunkMapping[id]) {
          chunkMapping[id] = [];
        }
        chunkModules.forEach(moduleId => {
          if (!chunkMapping[id].includes(moduleId)) {
            chunkMapping[id].push(moduleId);
          }
        });
      });
    }
    consumesLoadingData._updated = 1;
  }
  if (initializeSharingData && !initializeSharingData._updated) {
    const {
      federation
    } = webpackRequire;
    if (!federation.instance || !initializeSharingData.scopeToSharingDataMapping) {
      return;
    }
    const shared = {};
    for (let [scope, stages] of Object.entries(initializeSharingData.scopeToSharingDataMapping)) {
      for (let stage of stages) {
        if (typeof stage === 'object' && stage !== null) {
          const {
            name,
            version,
            factory,
            eager,
            singleton,
            requiredVersion,
            strictVersion
          } = stage;
          const shareConfig = {
            requiredVersion: `^${version}`
          };
          const isValidValue = function (val) {
            return typeof val !== 'undefined';
          };
          if (isValidValue(singleton)) {
            shareConfig.singleton = singleton;
          }
          if (isValidValue(requiredVersion)) {
            shareConfig.requiredVersion = requiredVersion;
          }
          if (isValidValue(eager)) {
            shareConfig.eager = eager;
          }
          if (isValidValue(strictVersion)) {
            shareConfig.strictVersion = strictVersion;
          }
          const options = {
            version,
            scope: [scope],
            shareConfig,
            get: factory
          };
          if (shared[name]) {
            shared[name].push(options);
          } else {
            shared[name] = [options];
          }
        }
      }
    }
    federation.instance.registerShared(shared);
    initializeSharingData._updated = 1;
  }
}
function updateRemoteOptions(options) {
  const {
    webpackRequire,
    idToExternalAndNameMapping = {},
    idToRemoteMap = {},
    chunkMapping = {}
  } = options;
  const {
    remotesLoadingData
  } = webpackRequire;
  const remoteInfos = webpackRequire.federation?.bundlerRuntimeOptions?.remotes?.remoteInfos;
  if (!remotesLoadingData || remotesLoadingData._updated || !remoteInfos) {
    return;
  }
  const {
    chunkMapping: updatedChunkMapping,
    moduleIdToRemoteDataMapping
  } = remotesLoadingData;
  if (!updatedChunkMapping || !moduleIdToRemoteDataMapping) {
    return;
  }
  for (let [moduleId, data] of Object.entries(moduleIdToRemoteDataMapping)) {
    if (!idToExternalAndNameMapping[moduleId]) {
      idToExternalAndNameMapping[moduleId] = [data.shareScope, data.name, data.externalModuleId];
    }
    if (!idToRemoteMap[moduleId] && remoteInfos[data.remoteName]) {
      const items = remoteInfos[data.remoteName];
      idToRemoteMap[moduleId] ||= [];
      items.forEach(item => {
        if (!idToRemoteMap[moduleId].includes(item)) {
          idToRemoteMap[moduleId].push(item);
        }
      });
    }
  }
  if (chunkMapping) {
    Object.entries(updatedChunkMapping).forEach(([id, chunkModules]) => {
      if (!chunkMapping[id]) {
        chunkMapping[id] = [];
      }
      chunkModules.forEach(moduleId => {
        if (!chunkMapping[id].includes(moduleId)) {
          chunkMapping[id].push(moduleId);
        }
      });
    });
  }
  remotesLoadingData._updated = 1;
}
function remotes(options) {
  updateRemoteOptions(options);
  const {
    chunkId,
    promises,
    webpackRequire,
    chunkMapping,
    idToExternalAndNameMapping,
    idToRemoteMap
  } = options;
  attachShareScopeMap(webpackRequire);
  if (webpackRequire.o(chunkMapping, chunkId)) {
    chunkMapping[chunkId].forEach(id => {
      let getScope = webpackRequire.R;
      if (!getScope) {
        getScope = [];
      }
      const data = idToExternalAndNameMapping[id];
      const remoteInfos = idToRemoteMap[id] || [];
      // @ts-ignore seems not work
      if (getScope.indexOf(data) >= 0) {
        return;
      }
      // @ts-ignore seems not work
      getScope.push(data);
      if (data.p) {
        return promises.push(data.p);
      }
      const onError = error => {
        if (!error) {
          error = new Error('Container missing');
        }
        if (typeof error.message === 'string') {
          error.message += `\nwhile loading "${data[1]}" from ${data[2]}`;
        }
        webpackRequire.m[id] = () => {
          throw error;
        };
        data.p = 0;
      };
      const handleFunction = (fn, arg1, arg2, d, next, first) => {
        try {
          const promise = fn(arg1, arg2);
          if (promise && promise.then) {
            const p = promise.then(result => next(result, d), onError);
            if (first) {
              promises.push(data.p = p);
            } else {
              return p;
            }
          } else {
            return next(promise, d, first);
          }
        } catch (error) {
          onError(error);
        }
      };
      const onExternal = (external, _, first) => external ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first) : onError();
      // eslint-disable-next-line no-var
      var onInitialized = (_, external, first) => handleFunction(external.get, data[1], getScope, 0, onFactory, first);
      // eslint-disable-next-line no-var
      var onFactory = factory => {
        data.p = 1;
        webpackRequire.m[id] = module => {
          module.exports = factory();
        };
      };
      const onRemoteLoaded = () => {
        try {
          const remoteName = (0,index_esm/* decodeName */.e4)(remoteInfos[0].name, index_esm/* ENCODE_NAME_PREFIX */.yq);
          const remoteModuleName = remoteName + data[1].slice(1);
          const instance = webpackRequire.federation.instance;
          const loadRemote = () => webpackRequire.federation.instance.loadRemote(remoteModuleName, {
            loadFactory: false,
            from: 'build'
          });
          if (instance.options.shareStrategy === 'version-first') {
            return Promise.all(instance.sharedHandler.initializeSharing(data[0])).then(() => {
              return loadRemote();
            });
          }
          return loadRemote();
        } catch (error) {
          onError(error);
        }
      };
      const useRuntimeLoad = remoteInfos.length === 1 && FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) && remoteInfos[0].name;
      if (useRuntimeLoad) {
        handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);
      } else {
        handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);
      }
    });
  }
}
function consumes(options) {
  updateConsumeOptions(options);
  const {
    chunkId,
    promises,
    installedModules,
    webpackRequire,
    chunkMapping,
    moduleToHandlerMapping
  } = options;
  attachShareScopeMap(webpackRequire);
  if (webpackRequire.o(chunkMapping, chunkId)) {
    chunkMapping[chunkId].forEach(id => {
      if (webpackRequire.o(installedModules, id)) {
        return promises.push(installedModules[id]);
      }
      const onFactory = factory => {
        installedModules[id] = 0;
        webpackRequire.m[id] = module => {
          delete webpackRequire.c[id];
          const result = factory();
          // Add layer property from shareConfig if available
          const {
            shareInfo
          } = moduleToHandlerMapping[id];
          if (shareInfo?.shareConfig?.layer && result && typeof result === 'object') {
            try {
              // Only set layer if it's not already defined or if it's undefined
              if (!result.hasOwnProperty('layer') || result.layer === undefined) {
                result.layer = shareInfo.shareConfig.layer;
              }
            } catch (e) {
              // Ignore if layer property is read-only
            }
          }
          module.exports = result;
        };
      };
      const onError = error => {
        delete installedModules[id];
        webpackRequire.m[id] = module => {
          delete webpackRequire.c[id];
          throw error;
        };
      };
      try {
        const federationInstance = webpackRequire.federation.instance;
        if (!federationInstance) {
          throw new Error('Federation instance not found!');
        }
        const {
          shareKey,
          getter,
          shareInfo
        } = moduleToHandlerMapping[id];
        const promise = federationInstance.loadShare(shareKey, {
          customShareInfo: shareInfo
        }).then(factory => {
          if (factory === false) {
            return getter();
          }
          return factory;
        });
        if (promise.then) {
          promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
        } else {
          // @ts-ignore maintain previous logic
          onFactory(promise);
        }
      } catch (e) {
        onError(e);
      }
    });
  }
}
function initializeSharing({
  shareScopeName,
  webpackRequire,
  initPromises,
  initTokens,
  initScope
}) {
  const shareScopeKeys = Array.isArray(shareScopeName) ? shareScopeName : [shareScopeName];
  var initializeSharingPromises = [];
  var _initializeSharing = function (shareScopeKey) {
    if (!initScope) initScope = [];
    const mfInstance = webpackRequire.federation.instance;
    // handling circular init calls
    var initToken = initTokens[shareScopeKey];
    if (!initToken) initToken = initTokens[shareScopeKey] = {
      from: mfInstance.name
    };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    const promise = initPromises[shareScopeKey];
    if (promise) return promise;
    var warn = msg => typeof console !== 'undefined' && console.warn && console.warn(msg);
    var initExternal = id => {
      var handleError = err => warn('Initialization of sharing external failed: ' + err);
      try {
        var module = webpackRequire(id);
        if (!module) return;
        var initFn = module => module && module.init &&
        // @ts-ignore compat legacy mf shared behavior
        module.init(webpackRequire.S[shareScopeKey], initScope, {
          shareScopeMap: webpackRequire.S || {},
          shareScopeKeys: shareScopeName
        });
        if (module.then) return promises.push(module.then(initFn, handleError));
        var initResult = initFn(module);
        // @ts-ignore
        if (initResult && typeof initResult !== 'boolean' && initResult.then)
          // @ts-ignore
          return promises.push(initResult['catch'](handleError));
      } catch (err) {
        handleError(err);
      }
    };
    const promises = mfInstance.initializeSharing(shareScopeKey, {
      strategy: mfInstance.options.shareStrategy,
      initScope,
      from: 'build'
    });
    attachShareScopeMap(webpackRequire);
    const bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;
    if (bundlerRuntimeRemotesOptions) {
      Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach(moduleId => {
        const info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];
        const externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];
        if (info.length > 1) {
          initExternal(externalModuleId);
        } else if (info.length === 1) {
          const remoteInfo = info[0];
          if (!FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {
            initExternal(externalModuleId);
          }
        }
      });
    }
    if (!promises.length) {
      return initPromises[shareScopeKey] = true;
    }
    return initPromises[shareScopeKey] = Promise.all(promises).then(() => initPromises[shareScopeKey] = true);
  };
  shareScopeKeys.forEach(key => {
    initializeSharingPromises.push(_initializeSharing(key));
  });
  return Promise.all(initializeSharingPromises).then(() => true);
}
function handleInitialConsumes(options) {
  const {
    moduleId,
    moduleToHandlerMapping,
    webpackRequire
  } = options;
  const federationInstance = webpackRequire.federation.instance;
  if (!federationInstance) {
    throw new Error('Federation instance not found!');
  }
  const {
    shareKey,
    shareInfo
  } = moduleToHandlerMapping[moduleId];
  try {
    return federationInstance.loadShareSync(shareKey, {
      customShareInfo: shareInfo
    });
  } catch (err) {
    console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');
    console.error('The original error message is as follows: ');
    throw err;
  }
}
function installInitialConsumes(options) {
  const {
    webpackRequire
  } = options;
  updateConsumeOptions(options);
  const {
    initialConsumes,
    moduleToHandlerMapping,
    installedModules
  } = options;
  initialConsumes.forEach(id => {
    webpackRequire.m[id] = module => {
      // Handle scenario when module is used synchronously
      installedModules[id] = 0;
      delete webpackRequire.c[id];
      const factory = handleInitialConsumes({
        moduleId: id,
        moduleToHandlerMapping,
        webpackRequire
      });
      if (typeof factory !== 'function') {
        throw new Error(`Shared module is not available for eager consumption: ${id}`);
      }
      const result = factory();
      // Add layer property from shareConfig if available
      const {
        shareInfo
      } = moduleToHandlerMapping[id];
      if (shareInfo?.shareConfig?.layer && result && typeof result === 'object') {
        try {
          // Only set layer if it's not already defined or if it's undefined
          if (!result.hasOwnProperty('layer') || result.layer === undefined) {
            result.layer = shareInfo.shareConfig.layer;
          }
        } catch (e) {
          // Ignore if layer property is read-only
        }
      }
      module.exports = result;
    };
  });
}
function initContainerEntry(options) {
  const {
    webpackRequire,
    shareScope,
    initScope,
    shareScopeKey,
    remoteEntryInitOptions
  } = options;
  if (!webpackRequire.S) return;
  if (!webpackRequire.federation || !webpackRequire.federation.instance || !webpackRequire.federation.initOptions) return;
  const federationInstance = webpackRequire.federation.instance;
  federationInstance.initOptions({
    name: webpackRequire.federation.initOptions.name,
    remotes: [],
    ...remoteEntryInitOptions
  });
  const hostShareScopeKeys = remoteEntryInitOptions?.shareScopeKeys;
  const hostShareScopeMap = remoteEntryInitOptions?.shareScopeMap;
  // host: 'default' remote: 'default'  remote['default'] = hostShareScopeMap['default']
  // host: ['default', 'scope1'] remote: 'default'  remote['default'] = hostShareScopeMap['default']; remote['scope1'] = hostShareScopeMap['scop1']
  // host: 'default' remote: ['default','scope1']  remote['default'] = hostShareScopeMap['default']; remote['scope1'] = hostShareScopeMap['scope1'] = {}
  // host: ['scope1','default'] remote: ['scope1','scope2'] => remote['scope1'] = hostShareScopeMap['scope1']; remote['scope2'] = hostShareScopeMap['scope2'] = {};
  if (!shareScopeKey || typeof shareScopeKey === 'string') {
    const key = shareScopeKey || 'default';
    if (Array.isArray(hostShareScopeKeys)) {
      // const sc = hostShareScopeMap![key];
      // if (!sc) {
      //   throw new Error('shareScopeKey is not exist in hostShareScopeMap');
      // }
      // federationInstance.initShareScopeMap(key, sc, {
      //   hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {},
      // });
      hostShareScopeKeys.forEach(hostKey => {
        if (!hostShareScopeMap[hostKey]) {
          hostShareScopeMap[hostKey] = {};
        }
        const sc = hostShareScopeMap[hostKey];
        federationInstance.initShareScopeMap(hostKey, sc, {
          hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {}
        });
      });
    } else {
      federationInstance.initShareScopeMap(key, shareScope, {
        hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {}
      });
    }
  } else {
    shareScopeKey.forEach(key => {
      if (!hostShareScopeKeys || !hostShareScopeMap) {
        federationInstance.initShareScopeMap(key, shareScope, {
          hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {}
        });
        return;
      }
      if (!hostShareScopeMap[key]) {
        hostShareScopeMap[key] = {};
      }
      const sc = hostShareScopeMap[key];
      federationInstance.initShareScopeMap(key, sc, {
        hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {}
      });
    });
  }
  if (webpackRequire.federation.attachShareScopeMap) {
    webpackRequire.federation.attachShareScopeMap(webpackRequire);
  }
  if (typeof webpackRequire.federation.prefetch === 'function') {
    webpackRequire.federation.prefetch();
  }
  if (!Array.isArray(shareScopeKey)) {
    // @ts-ignore
    return webpackRequire.I(shareScopeKey || 'default', initScope);
  }
  var proxyInitializeSharing = Boolean(webpackRequire.federation.initOptions.shared);
  if (proxyInitializeSharing) {
    // @ts-ignore
    return webpackRequire.I(shareScopeKey, initScope);
  }
  // @ts-ignore
  return Promise.all(shareScopeKey.map(key => {
    // @ts-ignore
    return webpackRequire.I(key, initScope);
  })).then(() => true);
}
const federation = {
  runtime: runtime_dist_index_esm_namespaceObject,
  instance: undefined,
  initOptions: undefined,
  bundlerRuntime: {
    remotes,
    consumes,
    I: initializeSharing,
    S: {},
    installInitialConsumes,
    initContainerEntry
  },
  attachShareScopeMap,
  bundlerRuntimeOptions: {}
};

//# sourceMappingURL=index.esm.js.map
;// ./node_modules/.federation/entry.78b4de68c0b6d3f321339cb017e28efc.js

if (!__webpack_require__.federation.runtime) {
  var prevFederation = __webpack_require__.federation;
  __webpack_require__.federation = {};
  for (var key in federation) {
    __webpack_require__.federation[key] = federation[key];
  }
  for (var key in prevFederation) {
    __webpack_require__.federation[key] = prevFederation[key];
  }
}
if (!__webpack_require__.federation.instance) {
  __webpack_require__.federation.instance = __webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);
  if (__webpack_require__.federation.attachShareScopeMap) {
    __webpack_require__.federation.attachShareScopeMap(__webpack_require__);
  }
  if (__webpack_require__.federation.installInitialConsumes) {
    __webpack_require__.federation.installInitialConsumes();
  }
  if (!__webpack_require__.federation.isMFRemote && __webpack_require__.federation.prefetch) {
    __webpack_require__.federation.prefetch();
  }
}

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 	__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 	module = execOptions.module;
/******/ 	execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/******/ // expose the module execution interceptor
/******/ __webpack_require__.i = [];
/******/ 
/******/ // the startup function
/******/ __webpack_require__.x = x => {};
/************************************************************************/
/******/ /* webpack/runtime/federation runtime */
/******/ (() => {
/******/ 	if(!__webpack_require__.federation){
/******/ 		__webpack_require__.federation = {
/******/ 			initOptions: {"name":"dashboard","remotes":[],"shareStrategy":"version-first"},
/******/ 			chunkMatcher: function(chunkId) {return !/^(1(366|402|480)|2((14|29|70)8|(65|87|98)2|377|485|570)|3(235|830|853)|4(00|022|590|618)|5(211|44|522|66|694)|6((|4)02|144|234|438|546)|7(310|399|585|908|945)|8(076|14|166|265|573|985)|9(427|654|748|855))$/.test(chunkId)},
/******/ 			rootOutputDir: "",
/******/ 			bundlerRuntimeOptions: { remotes: { remoteInfos: {}, webpackRequire: __webpack_require__,idToRemoteMap: {}, chunkMapping: {},idToExternalAndNameMapping: {} } }
/******/ 		};
/******/ 	__webpack_require__.consumesLoadingData = {}
/******/ 	__webpack_require__.remotesLoadingData = {}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + ({"1263":"__federation_expose_guard","1393":"__federation_expose_wrapper","2076":"common","3806":"__federation_expose_routes"}[chunkId] || chunkId) + "." + {"8":"dcbb2ee8e17a3184","308":"83e4a2fd0f4050a1","316":"fb9e8ffd3442d944","662":"c42b999ed1de8a5f","902":"4e67de9c67395a99","931":"e0bdfd06bb6f1c01","1020":"ded8acea4cef549c","1117":"dc77269aad92befe","1145":"8493d16897f3e726","1201":"acec1239eba3f1e7","1263":"fcf5daf3846dbb65","1393":"f5c685ade471ee2e","1400":"a3a6a230096780a5","1455":"99e4e05bfaccec66","1470":"4ee6977ee6d3ffcc","1512":"f21ef81184570eb2","1679":"be2052dfb7e1fe8d","1707":"7c5e36b67f1a73d8","1783":"6565ccec387d3f50","1833":"5d3cab9140209de8","1880":"ecff7d7f3b0b9112","1962":"0a2684dea2d3b7a7","2014":"a92c53aa7fafc8bc","2016":"8c9ad869e3ead474","2049":"863a66ebd9783497","2076":"9243a3b48531de19","2080":"f58edc53e3a95769","2216":"679e40441523bc5b","2236":"59f2de5d56c6bfa9","2330":"c3fcc1f115777c23","2359":"4deeb33e97a3111b","2423":"1d1d0e9da25e1841","2480":"5ccee0a45f613d19","2489":"c5d4c09bd869fc78","2502":"f853e1331ce92475","2602":"af66e7697ac6e194","2610":"7982a2f0ebb0312b","2816":"54f42282ce10a449","2842":"00bf9c0eed991cb1","2886":"4915aab9ee604d68","2904":"5be3f0003e008d74","2950":"d9a7ad80ae6c4875","2963":"b79c548253235a65","2985":"c4582e7a91225e95","3187":"100ed1e3d48999f3","3306":"934b2d87b688157c","3359":"dd891c4e60d1023c","3365":"44c5622ad0d70ede","3449":"142a267b797fc16e","3564":"4123948eb75507ba","3582":"acec1239eba3f1e7","3771":"e4e3759c73719006","3806":"6a0cb9f80014c2be","3821":"c24ee1425615ceb9","3949":"65bef8646a681557","4087":"89887e3675778022","4103":"0007462f85a9c140","4118":"6a4d73c1f870f4e7","4218":"4b05b3806fbc49ae","4247":"77a779e0d2e7fb9e","4249":"93d90c1d655326f2","4286":"132039da6e5a4237","4307":"5e36a9a8d6e38ca6","4420":"dae4be35788b569a","4544":"fe964ad0147d39ec","5043":"3dd84a347d6a6c38","5100":"b45c41f2a7a69264","5222":"da91d8bdbcd118d8","5230":"1f6ecc7f7e219c0a","5434":"5bbb3d33ca1af4c5","5534":"531cad28c714b123","5560":"e18882a9c36a5e88","5779":"f5775a43764789bd","5895":"f42670fac968b561","5935":"4e32cc358a9d73cf","5955":"6f79948999a95705","5998":"c6a24f36892feeb0","6004":"b665de6eaf388b5a","6018":"bed70e3fe76b89d7","6118":"5f09ad218276c2e9","6127":"829f0ced1ed9c769","6307":"e01e9e7c02f321ba","6421":"9eaea47e593a52e4","6439":"00bea852c8067bd8","6656":"9da6b4c62e7b1411","6661":"37ec26f403e46948","6872":"aa1cec6d3fecd219","6921":"91dbbc06131ab9db","7037":"7941f0b00a92fe00","7127":"623824804e45f8d1","7383":"c9b39bd2fa440525","7437":"caf544a8b4ebefa9","7529":"f3f8b8ff021bae93","7581":"e7359d7ecd2e13ff","7589":"d9537ba0198b18ce","7627":"dcbb2ee8e17a3184","7734":"12a1205bc8a5b646","7819":"5ff07ab74d718f43","7824":"346fc54c55187400","7839":"115abee724944daf","7863":"18f7023510456d1e","7913":"8f1b3148b025c60e","7939":"cf085b5eda735e10","8137":"37a541ff8db67b5b","8148":"21b5ececb24ca89c","8196":"589aa56e16488f96","8262":"2ba47ef20682763f","8263":"d031939a3c381b71","8411":"3c354372c7f011a2","8439":"568ba3f0b5e432e5","8472":"58a790ed42cc2c54","8498":"81ba8965dcdc9f66","8516":"8698551898736cd5","8757":"fef78dd9c2b481a9","8807":"01de13d49f301d14","8822":"1957cc35514a9137","8884":"8ec0a2db06aa732c","9071":"4b9c10226deaf270","9079":"a066931b0e8c8020","9089":"4281b1fae3fdf4ef","9148":"bf52f697d2c4fc8d","9195":"b93e1a709097fae5","9214":"d3ed7f8cc9c6ee0c","9215":"a6ddc71a8e526b78","9232":"6c45e732f782f517","9329":"00d8609bab3fff69","9335":"6d8e1468425be82d","9380":"15d43f3e5f8774d2","9417":"c26a1c6c1e131d75","9455":"3ed9a01f4a355843","9485":"6c96df91b694f287","9752":"18c590541f2e7462","9789":"900be19563a28318","9835":"679e40441523bc5b","9910":"ebeda856dfb898f5"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/load script */
/******/ (() => {
/******/ 	var inProgress = {};
/******/ 	var dataWebpackPrefix = "dashboard:";
/******/ 	// loadScript function to load a script via script tag
/******/ 	__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 		if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 		var script, needAttach;
/******/ 		if(key !== undefined) {
/******/ 			var scripts = document.getElementsByTagName("script");
/******/ 			for(var i = 0; i < scripts.length; i++) {
/******/ 				var s = scripts[i];
/******/ 				if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 			}
/******/ 		}
/******/ 		if(!script) {
/******/ 			needAttach = true;
/******/ 			script = document.createElement('script');
/******/ 			script.type = "module";
/******/ 			script.charset = 'utf-8';
/******/ 			if (__webpack_require__.nc) {
/******/ 				script.setAttribute("nonce", __webpack_require__.nc);
/******/ 			}
/******/ 			script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 	
/******/ 			script.src = __webpack_require__.tu(url);
/******/ 		}
/******/ 		inProgress[url] = [done];
/******/ 		var onScriptComplete = (prev, event) => {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var doneFns = inProgress[url];
/******/ 			delete inProgress[url];
/******/ 			script.parentNode && script.parentNode.removeChild(script);
/******/ 			doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 			if(prev) return prev(event);
/******/ 		}
/******/ 		var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 		script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 		script.onload = onScriptComplete.bind(null, script.onload);
/******/ 		needAttach && document.head.appendChild(script);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/runtimeId */
/******/ (() => {
/******/ 	__webpack_require__.j = 945;
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		if(!initScope) initScope = [];
/******/ 		// handling circular init calls
/******/ 		var initToken = initTokens[name];
/******/ 		if(!initToken) initToken = initTokens[name] = {};
/******/ 		if(initScope.indexOf(initToken) >= 0) return;
/******/ 		initScope.push(initToken);
/******/ 		// only runs once
/******/ 		if(initPromises[name]) return initPromises[name];
/******/ 		// creates a new share scope if needed
/******/ 		if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 		// runs all init snippets from all modules reachable
/******/ 		var scope = __webpack_require__.S[name];
/******/ 		var warn = (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var uniqueName = "dashboard";
/******/ 		var register = (name, version, factory, eager) => {
/******/ 			var versions = scope[name] = scope[name] || {};
/******/ 			var activeVersion = versions[version];
/******/ 			if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 		};
/******/ 		var initExternal = (id) => {
/******/ 			var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 			try {
/******/ 				var module = __webpack_require__(id);
/******/ 				if(!module) return;
/******/ 				var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 				if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 				var initResult = initFn(module);
/******/ 				if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 			} catch(err) { handleError(err); }
/******/ 		}
/******/ 		var promises = [];
/******/ 		switch(name) {
/******/ 			case "default": {
/******/ 				register("@angular-c4-team3/auth", "0.0.0", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(2377), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(28123))))));
/******/ 				register("@angular-c4-team3/shared-design", "0.0.0", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9654), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(57453))))));
/******/ 				register("@angular/common/http", "21.1.1", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6127)]).then(() => (() => (__webpack_require__(6127))))));
/******/ 				register("@angular/common", "21.1.1", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9427), __webpack_require__.e(6421)]).then(() => (() => (__webpack_require__(76421))))));
/******/ 				register("@angular/core/primitives/di", "21.1.1", () => (Promise.all([__webpack_require__.e(2076), __webpack_require__.e(1679)]).then(() => (() => (__webpack_require__(28826))))));
/******/ 				register("@angular/core/primitives/signals", "21.1.1", () => (Promise.all([__webpack_require__.e(2076), __webpack_require__.e(4247)]).then(() => (() => (__webpack_require__(58478))))));
/******/ 				register("@angular/core/rxjs-interop", "21.1.1", () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6307), __webpack_require__.e(9079)]).then(() => (() => (__webpack_require__(89079))))));
/******/ 				register("@angular/core", "21.1.1", () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6307), __webpack_require__.e(2076), __webpack_require__.e(6921)]).then(() => (() => (__webpack_require__(76921))))));
/******/ 				register("@angular/forms", "21.2.5", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(9417)]).then(() => (() => (__webpack_require__(89417))))));
/******/ 				register("@angular/platform-browser", "21.2.5", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(2377), __webpack_require__.e(1707)]).then(() => (() => (__webpack_require__(1707))))));
/******/ 				register("@angular/router", "21.2.5", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(8265), __webpack_require__.e(2359)]).then(() => (() => (__webpack_require__(72359))))));
/******/ 				register("@jsverse/transloco", "8.2.1", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9427), __webpack_require__.e(5211), __webpack_require__.e(5100)]).then(() => (() => (__webpack_require__(15100))))));
/******/ 				register("lucide-angular", "0.563.0", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8516)]).then(() => (() => (__webpack_require__(8516))))));
/******/ 				register("primeng/api", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(5779)]).then(() => (() => (__webpack_require__(5779))))));
/******/ 				register("primeng/autofocus", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(2708), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(41880))))));
/******/ 				register("primeng/badge", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(8498)]).then(() => (() => (__webpack_require__(68498))))));
/******/ 				register("primeng/base", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(3564), __webpack_require__.e(5694), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91083))))));
/******/ 				register("primeng/basecomponent", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(6546), __webpack_require__.e(3564), __webpack_require__.e(7589)]).then(() => (() => (__webpack_require__(37589))))));
/******/ 				register("primeng/baseeditableholder", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(7908), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(72224))))));
/******/ 				register("primeng/baseinput", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(4022), __webpack_require__.e(2872), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(3234))))));
/******/ 				register("primeng/basemodelholder", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9855), __webpack_require__.e(2076), __webpack_require__.e(8)]).then(() => (() => (__webpack_require__(93499))))));
/******/ 				register("primeng/bind", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(2076), __webpack_require__.e(2216)]).then(() => (() => (__webpack_require__(94068))))));
/******/ 				register("primeng/breadcrumb", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2982), __webpack_require__.e(8985), __webpack_require__.e(566), __webpack_require__.e(902)]).then(() => (() => (__webpack_require__(902))))));
/******/ 				register("primeng/button", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(8985), __webpack_require__.e(602), __webpack_require__.e(2872), __webpack_require__.e(1020)]).then(() => (() => (__webpack_require__(11020))))));
/******/ 				register("primeng/carousel", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(3853), __webpack_require__.e(2904)]).then(() => (() => (__webpack_require__(82904))))));
/******/ 				register("primeng/chart", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(5895)]).then(() => (() => (__webpack_require__(95895))))));
/******/ 				register("primeng/checkbox", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(4022), __webpack_require__.e(7585), __webpack_require__.e(5230)]).then(() => (() => (__webpack_require__(5230))))));
/******/ 				register("primeng/config", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(6546), __webpack_require__.e(1480), __webpack_require__.e(9427), __webpack_require__.e(3564), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29555))))));
/******/ 				register("primeng/datepicker", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(4590), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(602), __webpack_require__.e(3853), __webpack_require__.e(7310), __webpack_require__.e(5935)]).then(() => (() => (__webpack_require__(85935))))));
/******/ 				register("primeng/dialog", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(3853), __webpack_require__.e(3821)]).then(() => (() => (__webpack_require__(53821))))));
/******/ 				register("primeng/dom", "21.1.3", () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(3564), __webpack_require__.e(1455)]).then(() => (() => (__webpack_require__(81455))))));
/******/ 				register("primeng/fileupload", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(8985), __webpack_require__.e(2377), __webpack_require__.e(3853), __webpack_require__.e(8265), __webpack_require__.e(7839)]).then(() => (() => (__webpack_require__(97839))))));
/******/ 				register("primeng/fluid", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2570), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(40615))))));
/******/ 				register("primeng/focustrap", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(24282))))));
/******/ 				register("primeng/iconfield", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(10148))))));
/******/ 				register("primeng/icons/angledoubledown", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7824)]).then(() => (() => (__webpack_require__(47824))))));
/******/ 				register("primeng/icons/angledoubleleft", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(931)]).then(() => (() => (__webpack_require__(40931))))));
/******/ 				register("primeng/icons/angledoubleright", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7734)]).then(() => (() => (__webpack_require__(57734))))));
/******/ 				register("primeng/icons/angledoubleup", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7939)]).then(() => (() => (__webpack_require__(87939))))));
/******/ 				register("primeng/icons/angledown", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8439)]).then(() => (() => (__webpack_require__(38439))))));
/******/ 				register("primeng/icons/angleleft", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8196)]).then(() => (() => (__webpack_require__(98196))))));
/******/ 				register("primeng/icons/angleright", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8263)]).then(() => (() => (__webpack_require__(58263))))));
/******/ 				register("primeng/icons/angleup", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2080)]).then(() => (() => (__webpack_require__(52080))))));
/******/ 				register("primeng/icons/arrowdown", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(4249)]).then(() => (() => (__webpack_require__(24249))))));
/******/ 				register("primeng/icons/arrowdownleft", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(662)]).then(() => (() => (__webpack_require__(50662))))));
/******/ 				register("primeng/icons/arrowdownright", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9910)]).then(() => (() => (__webpack_require__(7529))))));
/******/ 				register("primeng/icons/arrowleft", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8262)]).then(() => (() => (__webpack_require__(38262))))));
/******/ 				register("primeng/icons/arrowright", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7913)]).then(() => (() => (__webpack_require__(37913))))));
/******/ 				register("primeng/icons/arrowup", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2886)]).then(() => (() => (__webpack_require__(12886))))));
/******/ 				register("primeng/icons/ban", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2489)]).then(() => (() => (__webpack_require__(32489))))));
/******/ 				register("primeng/icons/bars", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9380)]).then(() => (() => (__webpack_require__(19380))))));
/******/ 				register("primeng/icons/baseicon", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(2076), __webpack_require__.e(1201)]).then(() => (() => (__webpack_require__(23514))))));
/******/ 				register("primeng/icons/blank", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6872)]).then(() => (() => (__webpack_require__(46872))))));
/******/ 				register("primeng/icons/calendar", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(4544)]).then(() => (() => (__webpack_require__(54544))))));
/******/ 				register("primeng/icons/caretleft", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9752)]).then(() => (() => (__webpack_require__(9752))))));
/******/ 				register("primeng/icons/caretright", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2963)]).then(() => (() => (__webpack_require__(42963))))));
/******/ 				register("primeng/icons/check", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(3306)]).then(() => (() => (__webpack_require__(3306))))));
/******/ 				register("primeng/icons/chevrondown", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2423)]).then(() => (() => (__webpack_require__(52423))))));
/******/ 				register("primeng/icons/chevronleft", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8148)]).then(() => (() => (__webpack_require__(68148))))));
/******/ 				register("primeng/icons/chevronright", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8807)]).then(() => (() => (__webpack_require__(18807))))));
/******/ 				register("primeng/icons/chevronup", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2016)]).then(() => (() => (__webpack_require__(92016))))));
/******/ 				register("primeng/icons/exclamationtriangle", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9329)]).then(() => (() => (__webpack_require__(49329))))));
/******/ 				register("primeng/icons/eye", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9789)]).then(() => (() => (__webpack_require__(29789))))));
/******/ 				register("primeng/icons/eyeslash", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6004)]).then(() => (() => (__webpack_require__(6004))))));
/******/ 				register("primeng/icons/filter", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(308)]).then(() => (() => (__webpack_require__(90308))))));
/******/ 				register("primeng/icons/filterfill", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29671))))));
/******/ 				register("primeng/icons/filterslash", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7127)]).then(() => (() => (__webpack_require__(17127))))));
/******/ 				register("primeng/icons/home", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9455)]).then(() => (() => (__webpack_require__(59455))))));
/******/ 				register("primeng/icons/infocircle", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1962)]).then(() => (() => (__webpack_require__(31962))))));
/******/ 				register("primeng/icons/minus", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5434)]).then(() => (() => (__webpack_require__(45434))))));
/******/ 				register("primeng/icons/pencil", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(3949)]).then(() => (() => (__webpack_require__(63949))))));
/******/ 				register("primeng/icons/plus", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6018)]).then(() => (() => (__webpack_require__(86018))))));
/******/ 				register("primeng/icons/refresh", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5043)]).then(() => (() => (__webpack_require__(65043))))));
/******/ 				register("primeng/icons/search", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5998)]).then(() => (() => (__webpack_require__(75998))))));
/******/ 				register("primeng/icons/searchminus", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2502)]).then(() => (() => (__webpack_require__(22502))))));
/******/ 				register("primeng/icons/searchplus", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2014)]).then(() => (() => (__webpack_require__(42014))))));
/******/ 				register("primeng/icons/sortalt", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6439)]).then(() => (() => (__webpack_require__(76439))))));
/******/ 				register("primeng/icons/sortamountdown", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1470)]).then(() => (() => (__webpack_require__(61470))))));
/******/ 				register("primeng/icons/sortamountupalt", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2950)]).then(() => (() => (__webpack_require__(82950))))));
/******/ 				register("primeng/icons/spinner", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8757)]).then(() => (() => (__webpack_require__(38757))))));
/******/ 				register("primeng/icons/star", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2330)]).then(() => (() => (__webpack_require__(2330))))));
/******/ 				register("primeng/icons/starfill", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1145)]).then(() => (() => (__webpack_require__(91145))))));
/******/ 				register("primeng/icons/thlarge", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9195)]).then(() => (() => (__webpack_require__(9195))))));
/******/ 				register("primeng/icons/times", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1512)]).then(() => (() => (__webpack_require__(1512))))));
/******/ 				register("primeng/icons/timescircle", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2816)]).then(() => (() => (__webpack_require__(82816))))));
/******/ 				register("primeng/icons/trash", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9148)]).then(() => (() => (__webpack_require__(89148))))));
/******/ 				register("primeng/icons/undo", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1400)]).then(() => (() => (__webpack_require__(51400))))));
/******/ 				register("primeng/icons/upload", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8137)]).then(() => (() => (__webpack_require__(28137))))));
/******/ 				register("primeng/icons/windowmaximize", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8472)]).then(() => (() => (__webpack_require__(28472))))));
/******/ 				register("primeng/icons/windowminimize", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9214)]).then(() => (() => (__webpack_require__(29214))))));
/******/ 				register("primeng/icons", "21.1.3", () => (Promise.all([__webpack_require__.e(7945), __webpack_require__.e(7585), __webpack_require__.e(7437)]).then(() => (() => (__webpack_require__(77437))))));
/******/ 				register("primeng/inputicon", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91208))))));
/******/ 				register("primeng/inputnumber", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(4590), __webpack_require__.e(602), __webpack_require__.e(7310), __webpack_require__.e(2602)]).then(() => (() => (__webpack_require__(62602))))));
/******/ 				register("primeng/inputtext", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2652), __webpack_require__.e(2872), __webpack_require__.e(7908), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91914))))));
/******/ 				register("primeng/keyfilter", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(2049), __webpack_require__.e(2652), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(96276))))));
/******/ 				register("primeng/menu", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(2982), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(8985), __webpack_require__.e(8265), __webpack_require__.e(566), __webpack_require__.e(2236)]).then(() => (() => (__webpack_require__(2236))))));
/******/ 				register("primeng/message", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(5522), __webpack_require__.e(2480)]).then(() => (() => (__webpack_require__(62480))))));
/******/ 				register("primeng/motion", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(3187)]).then(() => (() => (__webpack_require__(43187))))));
/******/ 				register("primeng/overlay", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(9335)]).then(() => (() => (__webpack_require__(29335))))));
/******/ 				register("primeng/paginator", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(814), __webpack_require__.e(1366), __webpack_require__.e(8884)]).then(() => (() => (__webpack_require__(58884))))));
/******/ 				register("primeng/progressbar", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(3830), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(68496))))));
/******/ 				register("primeng/radiobutton", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(602), __webpack_require__.e(4022), __webpack_require__.e(400), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(18488))))));
/******/ 				register("primeng/ripple", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(16911))))));
/******/ 				register("primeng/scroller", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(9071)]).then(() => (() => (__webpack_require__(9071))))));
/******/ 				register("primeng/select", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(4590), __webpack_require__.e(602), __webpack_require__.e(566), __webpack_require__.e(7310), __webpack_require__.e(2485), __webpack_require__.e(6438), __webpack_require__.e(7581)]).then(() => (() => (__webpack_require__(87581))))));
/******/ 				register("primeng/selectbutton", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(4022), __webpack_require__.e(1783)]).then(() => (() => (__webpack_require__(81783))))));
/******/ 				register("primeng/table", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9427), __webpack_require__.e(2652), __webpack_require__.e(2708), __webpack_require__.e(4590), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(8985), __webpack_require__.e(3853), __webpack_require__.e(814), __webpack_require__.e(6438), __webpack_require__.e(7945), __webpack_require__.e(1366), __webpack_require__.e(5955)]).then(() => (() => (__webpack_require__(65955))))));
/******/ 				register("primeng/togglebutton", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(4022), __webpack_require__.e(2148), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(11298))))));
/******/ 				register("primeng/tooltip", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(2842)]).then(() => (() => (__webpack_require__(82842))))));
/******/ 				register("primeng/types/breadcrumb", "21.1.3", () => (__webpack_require__.e(2610).then(() => (() => (__webpack_require__(42610))))));
/******/ 				register("primeng/types/button", "21.1.3", () => (__webpack_require__.e(6661).then(() => (() => (__webpack_require__(86661))))));
/******/ 				register("primeng/types/carousel", "21.1.3", () => (__webpack_require__.e(4103).then(() => (() => (__webpack_require__(34103))))));
/******/ 				register("primeng/types/checkbox", "21.1.3", () => (__webpack_require__.e(5222).then(() => (() => (__webpack_require__(5222))))));
/******/ 				register("primeng/types/datepicker", "21.1.3", () => (__webpack_require__.e(3359).then(() => (() => (__webpack_require__(33359))))));
/******/ 				register("primeng/types/dialog", "21.1.3", () => (__webpack_require__.e(9485).then(() => (() => (__webpack_require__(89485))))));
/******/ 				register("primeng/types/fileupload", "21.1.3", () => (__webpack_require__.e(316).then(() => (() => (__webpack_require__(90316))))));
/******/ 				register("primeng/types/fluid", "21.1.3", () => (__webpack_require__.e(7863).then(() => (() => (__webpack_require__(67863))))));
/******/ 				register("primeng/types/inputnumber", "21.1.3", () => (__webpack_require__.e(1880).then(() => (() => (__webpack_require__(91880))))));
/******/ 				register("primeng/types/menu", "21.1.3", () => (__webpack_require__.e(5560).then(() => (() => (__webpack_require__(75560))))));
/******/ 				register("primeng/types/paginator", "21.1.3", () => (__webpack_require__.e(9089).then(() => (() => (__webpack_require__(71470))))));
/******/ 				register("primeng/types/progressbar", "21.1.3", () => (__webpack_require__.e(8411).then(() => (() => (__webpack_require__(88411))))));
/******/ 				register("primeng/types/radiobutton", "21.1.3", () => (__webpack_require__.e(5534).then(() => (() => (__webpack_require__(85534))))));
/******/ 				register("primeng/types/scroller", "21.1.3", () => (__webpack_require__.e(9215).then(() => (() => (__webpack_require__(9215))))));
/******/ 				register("primeng/types/select", "21.1.3", () => (__webpack_require__.e(3449).then(() => (() => (__webpack_require__(53449))))));
/******/ 				register("primeng/types/selectbutton", "21.1.3", () => (__webpack_require__.e(1117).then(() => (() => (__webpack_require__(71117))))));
/******/ 				register("primeng/types/table", "21.1.3", () => (__webpack_require__.e(3771).then(() => (() => (__webpack_require__(63771))))));
/******/ 				register("primeng/types/togglebutton", "21.1.3", () => (__webpack_require__.e(3365).then(() => (() => (__webpack_require__(23365))))));
/******/ 				register("primeng/usestyle", "21.1.3", () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29917))))));
/******/ 				register("primeng/utils", "21.1.3", () => (__webpack_require__.e(4420).then(() => (() => (__webpack_require__(54420))))));
/******/ 				register("rxjs/operators", "7.8.1", () => (Promise.all([__webpack_require__.e(6656), __webpack_require__.e(7037)]).then(() => (() => (__webpack_require__(77037))))));
/******/ 				register("rxjs", "7.8.1", () => (Promise.all([__webpack_require__.e(6656), __webpack_require__.e(4087)]).then(() => (() => (__webpack_require__(54087))))));
/******/ 			}
/******/ 			break;
/******/ 		}
/******/ 		if(!promises.length) return initPromises[name] = 1;
/******/ 		return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types policy */
/******/ (() => {
/******/ 	var policy;
/******/ 	__webpack_require__.tt = () => {
/******/ 		// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 		if (policy === undefined) {
/******/ 			policy = {
/******/ 				createScriptURL: (url) => (url)
/******/ 			};
/******/ 			if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 				policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 			}
/******/ 		}
/******/ 		return policy;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types script url */
/******/ (() => {
/******/ 	__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"@angular-c4-team3/auth": [{	version: "0.0.0",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(2377), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(28123))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"singleton":false,"layer":null}},],	"@angular-c4-team3/shared-design": [{	version: "0.0.0",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9654), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(57453))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"singleton":false,"layer":null}},],	"@angular/common/http": [{	version: "21.1.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6127)]).then(() => (() => (__webpack_require__(6127))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/common": [{	version: "21.1.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9427), __webpack_require__.e(6421)]).then(() => (() => (__webpack_require__(76421))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/core/primitives/di": [{	version: "21.1.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(2076), __webpack_require__.e(1679)]).then(() => (() => (__webpack_require__(28826))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/core/primitives/signals": [{	version: "21.1.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(2076), __webpack_require__.e(4247)]).then(() => (() => (__webpack_require__(58478))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/core/rxjs-interop": [{	version: "21.1.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6307), __webpack_require__.e(9079)]).then(() => (() => (__webpack_require__(89079))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/core": [{	version: "21.1.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6307), __webpack_require__.e(2076), __webpack_require__.e(6921)]).then(() => (() => (__webpack_require__(76921))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/forms": [{	version: "21.2.5",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(9417)]).then(() => (() => (__webpack_require__(89417))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.2.5","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/platform-browser": [{	version: "21.2.5",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(2377), __webpack_require__.e(1707)]).then(() => (() => (__webpack_require__(1707))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.2.5","strictVersion":true,"singleton":true,"layer":null}},],	"@angular/router": [{	version: "21.2.5",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(8265), __webpack_require__.e(2359)]).then(() => (() => (__webpack_require__(72359))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.2.5","strictVersion":true,"singleton":true,"layer":null}},],	"@jsverse/transloco": [{	version: "8.2.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9427), __webpack_require__.e(5211), __webpack_require__.e(5100)]).then(() => (() => (__webpack_require__(15100))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^8.2.1","strictVersion":true,"singleton":true,"layer":null}},],	"lucide-angular": [{	version: "0.563.0",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8516)]).then(() => (() => (__webpack_require__(8516))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^0.563.0","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/api": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(5779)]).then(() => (() => (__webpack_require__(5779))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/autofocus": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(2708), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(41880))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/badge": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(8498)]).then(() => (() => (__webpack_require__(68498))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/base": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(3564), __webpack_require__.e(5694), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91083))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/basecomponent": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(6546), __webpack_require__.e(3564), __webpack_require__.e(7589)]).then(() => (() => (__webpack_require__(37589))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/baseeditableholder": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(7908), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(72224))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/baseinput": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(4022), __webpack_require__.e(2872), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(3234))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/basemodelholder": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9855), __webpack_require__.e(2076), __webpack_require__.e(8)]).then(() => (() => (__webpack_require__(93499))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/bind": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(2076), __webpack_require__.e(2216)]).then(() => (() => (__webpack_require__(94068))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/breadcrumb": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2982), __webpack_require__.e(8985), __webpack_require__.e(566), __webpack_require__.e(902)]).then(() => (() => (__webpack_require__(902))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/button": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(8985), __webpack_require__.e(602), __webpack_require__.e(2872), __webpack_require__.e(1020)]).then(() => (() => (__webpack_require__(11020))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/carousel": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(3853), __webpack_require__.e(2904)]).then(() => (() => (__webpack_require__(82904))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/chart": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(5895)]).then(() => (() => (__webpack_require__(95895))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/checkbox": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(4022), __webpack_require__.e(7585), __webpack_require__.e(5230)]).then(() => (() => (__webpack_require__(5230))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/config": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(6546), __webpack_require__.e(1480), __webpack_require__.e(9427), __webpack_require__.e(3564), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29555))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/datepicker": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(4590), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(602), __webpack_require__.e(3853), __webpack_require__.e(7310), __webpack_require__.e(5935)]).then(() => (() => (__webpack_require__(85935))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/dialog": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(3853), __webpack_require__.e(3821)]).then(() => (() => (__webpack_require__(53821))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/dom": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(3564), __webpack_require__.e(1455)]).then(() => (() => (__webpack_require__(81455))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/fileupload": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(8985), __webpack_require__.e(2377), __webpack_require__.e(3853), __webpack_require__.e(8265), __webpack_require__.e(7839)]).then(() => (() => (__webpack_require__(97839))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/fluid": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2570), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(40615))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/focustrap": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(24282))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/iconfield": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(10148))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angledoubledown": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7824)]).then(() => (() => (__webpack_require__(47824))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angledoubleleft": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(931)]).then(() => (() => (__webpack_require__(40931))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angledoubleright": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7734)]).then(() => (() => (__webpack_require__(57734))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angledoubleup": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7939)]).then(() => (() => (__webpack_require__(87939))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angledown": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8439)]).then(() => (() => (__webpack_require__(38439))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angleleft": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8196)]).then(() => (() => (__webpack_require__(98196))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angleright": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8263)]).then(() => (() => (__webpack_require__(58263))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/angleup": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2080)]).then(() => (() => (__webpack_require__(52080))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/arrowdown": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(4249)]).then(() => (() => (__webpack_require__(24249))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/arrowdownleft": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(662)]).then(() => (() => (__webpack_require__(50662))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/arrowdownright": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9910)]).then(() => (() => (__webpack_require__(7529))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/arrowleft": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8262)]).then(() => (() => (__webpack_require__(38262))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/arrowright": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7913)]).then(() => (() => (__webpack_require__(37913))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/arrowup": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2886)]).then(() => (() => (__webpack_require__(12886))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/ban": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2489)]).then(() => (() => (__webpack_require__(32489))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/bars": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9380)]).then(() => (() => (__webpack_require__(19380))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/baseicon": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(2076), __webpack_require__.e(1201)]).then(() => (() => (__webpack_require__(23514))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/blank": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6872)]).then(() => (() => (__webpack_require__(46872))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/calendar": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(4544)]).then(() => (() => (__webpack_require__(54544))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/caretleft": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9752)]).then(() => (() => (__webpack_require__(9752))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/caretright": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2963)]).then(() => (() => (__webpack_require__(42963))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/check": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(3306)]).then(() => (() => (__webpack_require__(3306))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/chevrondown": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2423)]).then(() => (() => (__webpack_require__(52423))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/chevronleft": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8148)]).then(() => (() => (__webpack_require__(68148))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/chevronright": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8807)]).then(() => (() => (__webpack_require__(18807))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/chevronup": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2016)]).then(() => (() => (__webpack_require__(92016))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/exclamationtriangle": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9329)]).then(() => (() => (__webpack_require__(49329))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/eye": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9789)]).then(() => (() => (__webpack_require__(29789))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/eyeslash": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6004)]).then(() => (() => (__webpack_require__(6004))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/filter": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(308)]).then(() => (() => (__webpack_require__(90308))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/filterfill": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29671))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/filterslash": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7127)]).then(() => (() => (__webpack_require__(17127))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/home": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9455)]).then(() => (() => (__webpack_require__(59455))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/infocircle": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1962)]).then(() => (() => (__webpack_require__(31962))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/minus": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5434)]).then(() => (() => (__webpack_require__(45434))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/pencil": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(3949)]).then(() => (() => (__webpack_require__(63949))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/plus": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6018)]).then(() => (() => (__webpack_require__(86018))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/refresh": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5043)]).then(() => (() => (__webpack_require__(65043))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/search": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5998)]).then(() => (() => (__webpack_require__(75998))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/searchminus": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2502)]).then(() => (() => (__webpack_require__(22502))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/searchplus": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2014)]).then(() => (() => (__webpack_require__(42014))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/sortalt": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6439)]).then(() => (() => (__webpack_require__(76439))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/sortamountdown": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1470)]).then(() => (() => (__webpack_require__(61470))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/sortamountupalt": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2950)]).then(() => (() => (__webpack_require__(82950))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/spinner": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8757)]).then(() => (() => (__webpack_require__(38757))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/star": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2330)]).then(() => (() => (__webpack_require__(2330))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/starfill": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1145)]).then(() => (() => (__webpack_require__(91145))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/thlarge": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9195)]).then(() => (() => (__webpack_require__(9195))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/times": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1512)]).then(() => (() => (__webpack_require__(1512))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/timescircle": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2816)]).then(() => (() => (__webpack_require__(82816))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/trash": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9148)]).then(() => (() => (__webpack_require__(89148))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/undo": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1400)]).then(() => (() => (__webpack_require__(51400))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/upload": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8137)]).then(() => (() => (__webpack_require__(28137))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/windowmaximize": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8472)]).then(() => (() => (__webpack_require__(28472))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons/windowminimize": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9214)]).then(() => (() => (__webpack_require__(29214))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/icons": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(7945), __webpack_require__.e(7585), __webpack_require__.e(7437)]).then(() => (() => (__webpack_require__(77437))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/inputicon": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91208))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/inputnumber": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(4590), __webpack_require__.e(602), __webpack_require__.e(7310), __webpack_require__.e(2602)]).then(() => (() => (__webpack_require__(62602))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/inputtext": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2652), __webpack_require__.e(2872), __webpack_require__.e(7908), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91914))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/keyfilter": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(2049), __webpack_require__.e(2652), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(96276))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/menu": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(2982), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(8985), __webpack_require__.e(8265), __webpack_require__.e(566), __webpack_require__.e(2236)]).then(() => (() => (__webpack_require__(2236))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/message": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(5522), __webpack_require__.e(2480)]).then(() => (() => (__webpack_require__(62480))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/motion": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(3187)]).then(() => (() => (__webpack_require__(43187))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/overlay": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(9335)]).then(() => (() => (__webpack_require__(29335))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/paginator": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(814), __webpack_require__.e(1366), __webpack_require__.e(8884)]).then(() => (() => (__webpack_require__(58884))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/progressbar": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(3830), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(68496))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/radiobutton": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(602), __webpack_require__.e(4022), __webpack_require__.e(400), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(18488))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/ripple": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(16911))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/scroller": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(9071)]).then(() => (() => (__webpack_require__(9071))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/select": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(4590), __webpack_require__.e(602), __webpack_require__.e(566), __webpack_require__.e(7310), __webpack_require__.e(2485), __webpack_require__.e(6438), __webpack_require__.e(7581)]).then(() => (() => (__webpack_require__(87581))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/selectbutton": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(4022), __webpack_require__.e(1783)]).then(() => (() => (__webpack_require__(81783))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/table": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9427), __webpack_require__.e(2652), __webpack_require__.e(2708), __webpack_require__.e(4590), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(8985), __webpack_require__.e(3853), __webpack_require__.e(814), __webpack_require__.e(6438), __webpack_require__.e(7945), __webpack_require__.e(1366), __webpack_require__.e(5955)]).then(() => (() => (__webpack_require__(65955))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/togglebutton": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2652), __webpack_require__.e(2298), __webpack_require__.e(4022), __webpack_require__.e(2148), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(11298))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/tooltip": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(2842)]).then(() => (() => (__webpack_require__(82842))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/breadcrumb": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(2610).then(() => (() => (__webpack_require__(42610))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/button": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(6661).then(() => (() => (__webpack_require__(86661))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/carousel": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(4103).then(() => (() => (__webpack_require__(34103))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/checkbox": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(5222).then(() => (() => (__webpack_require__(5222))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/datepicker": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(3359).then(() => (() => (__webpack_require__(33359))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/dialog": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(9485).then(() => (() => (__webpack_require__(89485))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/fileupload": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(316).then(() => (() => (__webpack_require__(90316))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/fluid": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(7863).then(() => (() => (__webpack_require__(67863))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/inputnumber": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(1880).then(() => (() => (__webpack_require__(91880))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/menu": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(5560).then(() => (() => (__webpack_require__(75560))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/paginator": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(9089).then(() => (() => (__webpack_require__(71470))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/progressbar": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(8411).then(() => (() => (__webpack_require__(88411))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/radiobutton": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(5534).then(() => (() => (__webpack_require__(85534))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/scroller": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(9215).then(() => (() => (__webpack_require__(9215))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/select": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(3449).then(() => (() => (__webpack_require__(53449))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/selectbutton": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(1117).then(() => (() => (__webpack_require__(71117))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/table": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(3771).then(() => (() => (__webpack_require__(63771))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/types/togglebutton": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(3365).then(() => (() => (__webpack_require__(23365))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/usestyle": [{	version: "21.1.3",
/******/ 			get: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(8573), __webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29917))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"primeng/utils": [{	version: "21.1.3",
/******/ 			get: () => (__webpack_require__.e(4420).then(() => (() => (__webpack_require__(54420))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^21.1.1","strictVersion":true,"singleton":true,"layer":null}},],	"rxjs/operators": [{	version: "7.8.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(6656), __webpack_require__.e(7037)]).then(() => (() => (__webpack_require__(77037))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"7.8.1","strictVersion":true,"singleton":true,"layer":null}},],	"rxjs": [{	version: "7.8.1",
/******/ 			get: () => (Promise.all([__webpack_require__.e(6656), __webpack_require__.e(4087)]).then(() => (() => (__webpack_require__(54087))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"7.8.1","strictVersion":true,"singleton":true,"layer":null}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ (() => {
/******/ 	var installedModules = {};
/******/ 	__webpack_require__.consumesLoadingData.moduleIdToConsumeDataMapping = {
/******/ 		77399: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(6656), __webpack_require__.e(7037)]).then(() => (() => (__webpack_require__(77037))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "7.8.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "rxjs/operators",
/******/ 		},
/******/ 		29654: {
/******/ 			fallback: () => (__webpack_require__.e(8516).then(() => (() => (__webpack_require__(8516))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^0.563.0",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "lucide-angular",
/******/ 		},
/******/ 		35211: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6307), __webpack_require__.e(9079)]).then(() => (() => (__webpack_require__(89079))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/core/rxjs-interop",
/******/ 		},
/******/ 		48076: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(5211), __webpack_require__.e(5100)]).then(() => (() => (__webpack_require__(15100))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^8.2.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@jsverse/transloco",
/******/ 		},
/******/ 		6702: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(8985), __webpack_require__.e(566), __webpack_require__.e(902)]).then(() => (() => (__webpack_require__(902))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/breadcrumb",
/******/ 		},
/******/ 		33235: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6307), __webpack_require__.e(2076), __webpack_require__.e(6921)]).then(() => (() => (__webpack_require__(76921))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/core",
/******/ 		},
/******/ 		12982: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(8265), __webpack_require__.e(2359)]).then(() => (() => (__webpack_require__(72359))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.2.5",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/router",
/******/ 		},
/******/ 		72377: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(6127)]).then(() => (() => (__webpack_require__(6127))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/common/http",
/******/ 		},
/******/ 		19427: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(6656), __webpack_require__.e(4087)]).then(() => (() => (__webpack_require__(54087))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "7.8.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "rxjs",
/******/ 		},
/******/ 		27775: {
/******/ 			fallback: () => (__webpack_require__.e(2076).then(() => (() => (__webpack_require__(28826))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/core/primitives/di",
/******/ 		},
/******/ 		30203: {
/******/ 			fallback: () => (__webpack_require__.e(2076).then(() => (() => (__webpack_require__(58478))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/core/primitives/signals",
/******/ 		},
/******/ 		68573: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(6421)]).then(() => (() => (__webpack_require__(76421))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/common",
/******/ 		},
/******/ 		88265: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(2377), __webpack_require__.e(1707)]).then(() => (() => (__webpack_require__(1707))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.2.5",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/platform-browser",
/******/ 		},
/******/ 		72236: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(6546), __webpack_require__.e(3564), __webpack_require__.e(7589)]).then(() => (() => (__webpack_require__(37589))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/basecomponent",
/******/ 		},
/******/ 		42708: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(3564), __webpack_require__.e(1455)]).then(() => (() => (__webpack_require__(81455))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/dom",
/******/ 		},
/******/ 		86546: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3564), __webpack_require__.e(5694), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91083))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/base",
/******/ 		},
/******/ 		8166: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2076), __webpack_require__.e(9835)]).then(() => (() => (__webpack_require__(94068))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/bind",
/******/ 		},
/******/ 		71480: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9427), __webpack_require__.e(5779)]).then(() => (() => (__webpack_require__(5779))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/api",
/******/ 		},
/******/ 		15694: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29917))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/usestyle",
/******/ 		},
/******/ 		12846: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(1480), __webpack_require__.e(9427), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29555))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/config",
/******/ 		},
/******/ 		57908: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(2076), __webpack_require__.e(7627)]).then(() => (() => (__webpack_require__(93499))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/basemodelholder",
/******/ 		},
/******/ 		34022: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(7908), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(72224))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/baseeditableholder",
/******/ 		},
/******/ 		62872: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2570), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(40615))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/fluid",
/******/ 		},
/******/ 		99748: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(7945), __webpack_require__.e(7585), __webpack_require__.e(7437)]).then(() => (() => (__webpack_require__(77437))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons",
/******/ 		},
/******/ 		91366: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(8498)]).then(() => (() => (__webpack_require__(68498))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/badge",
/******/ 		},
/******/ 		40566: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(2842)]).then(() => (() => (__webpack_require__(82842))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/tooltip",
/******/ 		},
/******/ 		21172: {
/******/ 			fallback: () => (__webpack_require__.e(2610).then(() => (() => (__webpack_require__(42610))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/breadcrumb",
/******/ 		},
/******/ 		82298: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(16911))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/ripple",
/******/ 		},
/******/ 		20602: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2708), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(41880))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/autofocus",
/******/ 		},
/******/ 		43220: {
/******/ 			fallback: () => (__webpack_require__.e(6661).then(() => (() => (__webpack_require__(86661))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/button",
/******/ 		},
/******/ 		6234: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(8985), __webpack_require__.e(602), __webpack_require__.e(2872), __webpack_require__.e(1020)]).then(() => (() => (__webpack_require__(11020))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/button",
/******/ 		},
/******/ 		41588: {
/******/ 			fallback: () => (__webpack_require__.e(4103).then(() => (() => (__webpack_require__(34103))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/carousel",
/******/ 		},
/******/ 		2652: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(9427), __webpack_require__.e(7399), __webpack_require__.e(9417)]).then(() => (() => (__webpack_require__(89417))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.2.5",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular/forms",
/******/ 		},
/******/ 		57456: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5434)]).then(() => (() => (__webpack_require__(45434))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/minus",
/******/ 		},
/******/ 		78032: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(3306)]).then(() => (() => (__webpack_require__(3306))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/check",
/******/ 		},
/******/ 		50100: {
/******/ 			fallback: () => (__webpack_require__.e(5222).then(() => (() => (__webpack_require__(5222))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/checkbox",
/******/ 		},
/******/ 		54590: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2872), __webpack_require__.e(7908), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91914))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/inputtext",
/******/ 		},
/******/ 		36402: {
/******/ 			fallback: () => (__webpack_require__.e(4420).then(() => (() => (__webpack_require__(54420))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/utils",
/******/ 		},
/******/ 		75522: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(3187)]).then(() => (() => (__webpack_require__(43187))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/motion",
/******/ 		},
/******/ 		57310: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(4022), __webpack_require__.e(2872), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(3234))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/baseinput",
/******/ 		},
/******/ 		64336: {
/******/ 			fallback: () => (__webpack_require__.e(3359).then(() => (() => (__webpack_require__(33359))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/datepicker",
/******/ 		},
/******/ 		43516: {
/******/ 			fallback: () => (__webpack_require__.e(9485).then(() => (() => (__webpack_require__(89485))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/dialog",
/******/ 		},
/******/ 		68222: {
/******/ 			fallback: () => (__webpack_require__.e(2076).then(() => (() => (__webpack_require__(24282))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/focustrap",
/******/ 		},
/******/ 		29070: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2298), __webpack_require__.e(5522), __webpack_require__.e(2480)]).then(() => (() => (__webpack_require__(62480))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/message",
/******/ 		},
/******/ 		35272: {
/******/ 			fallback: () => (__webpack_require__.e(316).then(() => (() => (__webpack_require__(90316))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/fileupload",
/******/ 		},
/******/ 		88940: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3830), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(68496))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/progressbar",
/******/ 		},
/******/ 		32570: {
/******/ 			fallback: () => (__webpack_require__.e(7863).then(() => (() => (__webpack_require__(67863))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/fluid",
/******/ 		},
/******/ 		60544: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(2076), __webpack_require__.e(3582)]).then(() => (() => (__webpack_require__(23514))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/baseicon",
/******/ 		},
/******/ 		2178: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7127)]).then(() => (() => (__webpack_require__(17127))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/filterslash",
/******/ 		},
/******/ 		6232: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2950)]).then(() => (() => (__webpack_require__(82950))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/sortamountupalt",
/******/ 		},
/******/ 		8128: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(308)]).then(() => (() => (__webpack_require__(90308))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/filter",
/******/ 		},
/******/ 		14992: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9148)]).then(() => (() => (__webpack_require__(89148))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/trash",
/******/ 		},
/******/ 		31584: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2886)]).then(() => (() => (__webpack_require__(12886))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/arrowup",
/******/ 		},
/******/ 		44054: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(4249)]).then(() => (() => (__webpack_require__(24249))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/arrowdown",
/******/ 		},
/******/ 		51266: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8757)]).then(() => (() => (__webpack_require__(38757))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/spinner",
/******/ 		},
/******/ 		52510: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6439)]).then(() => (() => (__webpack_require__(76439))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/sortalt",
/******/ 		},
/******/ 		55640: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6018)]).then(() => (() => (__webpack_require__(86018))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/plus",
/******/ 		},
/******/ 		58156: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1470)]).then(() => (() => (__webpack_require__(61470))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/sortamountdown",
/******/ 		},
/******/ 		3160: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7913)]).then(() => (() => (__webpack_require__(37913))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/arrowright",
/******/ 		},
/******/ 		5654: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2489)]).then(() => (() => (__webpack_require__(32489))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/ban",
/******/ 		},
/******/ 		7320: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(662)]).then(() => (() => (__webpack_require__(50662))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/arrowdownleft",
/******/ 		},
/******/ 		7616: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5998)]).then(() => (() => (__webpack_require__(75998))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/search",
/******/ 		},
/******/ 		10122: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8439)]).then(() => (() => (__webpack_require__(38439))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angledown",
/******/ 		},
/******/ 		10636: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8137)]).then(() => (() => (__webpack_require__(28137))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/upload",
/******/ 		},
/******/ 		12026: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(5043)]).then(() => (() => (__webpack_require__(65043))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/refresh",
/******/ 		},
/******/ 		12964: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6872)]).then(() => (() => (__webpack_require__(46872))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/blank",
/******/ 		},
/******/ 		13784: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2963)]).then(() => (() => (__webpack_require__(42963))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/caretright",
/******/ 		},
/******/ 		17180: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8196)]).then(() => (() => (__webpack_require__(98196))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angleleft",
/******/ 		},
/******/ 		22134: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9195)]).then(() => (() => (__webpack_require__(9195))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/thlarge",
/******/ 		},
/******/ 		22206: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9329)]).then(() => (() => (__webpack_require__(49329))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/exclamationtriangle",
/******/ 		},
/******/ 		31408: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(6004)]).then(() => (() => (__webpack_require__(6004))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/eyeslash",
/******/ 		},
/******/ 		34052: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2016)]).then(() => (() => (__webpack_require__(92016))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/chevronup",
/******/ 		},
/******/ 		34892: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9752)]).then(() => (() => (__webpack_require__(9752))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/caretleft",
/******/ 		},
/******/ 		34896: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(4544)]).then(() => (() => (__webpack_require__(54544))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/calendar",
/******/ 		},
/******/ 		37136: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9455)]).then(() => (() => (__webpack_require__(59455))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/home",
/******/ 		},
/******/ 		38448: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9380)]).then(() => (() => (__webpack_require__(19380))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/bars",
/******/ 		},
/******/ 		43780: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1512)]).then(() => (() => (__webpack_require__(1512))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/times",
/******/ 		},
/******/ 		44850: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(931)]).then(() => (() => (__webpack_require__(40931))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angledoubleleft",
/******/ 		},
/******/ 		46756: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7734)]).then(() => (() => (__webpack_require__(57734))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angledoubleright",
/******/ 		},
/******/ 		48876: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(3949)]).then(() => (() => (__webpack_require__(63949))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/pencil",
/******/ 		},
/******/ 		55342: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9789)]).then(() => (() => (__webpack_require__(29789))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/eye",
/******/ 		},
/******/ 		59534: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7939)]).then(() => (() => (__webpack_require__(87939))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angledoubleup",
/******/ 		},
/******/ 		60860: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1962)]).then(() => (() => (__webpack_require__(31962))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/infocircle",
/******/ 		},
/******/ 		61608: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8262)]).then(() => (() => (__webpack_require__(38262))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/arrowleft",
/******/ 		},
/******/ 		62064: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1400)]).then(() => (() => (__webpack_require__(51400))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/undo",
/******/ 		},
/******/ 		62832: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2816)]).then(() => (() => (__webpack_require__(82816))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/timescircle",
/******/ 		},
/******/ 		64492: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(1145)]).then(() => (() => (__webpack_require__(91145))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/starfill",
/******/ 		},
/******/ 		64868: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9214)]).then(() => (() => (__webpack_require__(29214))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/windowminimize",
/******/ 		},
/******/ 		73256: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8148)]).then(() => (() => (__webpack_require__(68148))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/chevronleft",
/******/ 		},
/******/ 		77032: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2502)]).then(() => (() => (__webpack_require__(22502))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/searchminus",
/******/ 		},
/******/ 		77606: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2423)]).then(() => (() => (__webpack_require__(52423))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/chevrondown",
/******/ 		},
/******/ 		78708: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2330)]).then(() => (() => (__webpack_require__(2330))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/star",
/******/ 		},
/******/ 		79344: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8472)]).then(() => (() => (__webpack_require__(28472))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/windowmaximize",
/******/ 		},
/******/ 		85268: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(7824)]).then(() => (() => (__webpack_require__(47824))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angledoubledown",
/******/ 		},
/******/ 		85936: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2080)]).then(() => (() => (__webpack_require__(52080))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angleup",
/******/ 		},
/******/ 		86044: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8263)]).then(() => (() => (__webpack_require__(58263))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/angleright",
/******/ 		},
/******/ 		94332: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(2014)]).then(() => (() => (__webpack_require__(42014))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/searchplus",
/******/ 		},
/******/ 		94788: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(8807)]).then(() => (() => (__webpack_require__(18807))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/chevronright",
/******/ 		},
/******/ 		95292: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(3235), __webpack_require__.e(544), __webpack_require__.e(9910)]).then(() => (() => (__webpack_require__(7529))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/arrowdownright",
/******/ 		},
/******/ 		63556: {
/******/ 			fallback: () => (__webpack_require__.e(1880).then(() => (() => (__webpack_require__(91880))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/inputnumber",
/******/ 		},
/******/ 		73152: {
/******/ 			fallback: () => (__webpack_require__.e(5560).then(() => (() => (__webpack_require__(75560))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/menu",
/******/ 		},
/******/ 		80814: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(4590), __webpack_require__.e(602), __webpack_require__.e(566), __webpack_require__.e(7310), __webpack_require__.e(2485), __webpack_require__.e(6438), __webpack_require__.e(7581)]).then(() => (() => (__webpack_require__(87581))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/select",
/******/ 		},
/******/ 		11366: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(9748), __webpack_require__.e(4590), __webpack_require__.e(602), __webpack_require__.e(7310), __webpack_require__.e(2602)]).then(() => (() => (__webpack_require__(62602))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/inputnumber",
/******/ 		},
/******/ 		96440: {
/******/ 			fallback: () => (__webpack_require__.e(9089).then(() => (() => (__webpack_require__(71470))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/paginator",
/******/ 		},
/******/ 		3830: {
/******/ 			fallback: () => (__webpack_require__.e(8411).then(() => (() => (__webpack_require__(88411))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/progressbar",
/******/ 		},
/******/ 		30400: {
/******/ 			fallback: () => (__webpack_require__.e(5534).then(() => (() => (__webpack_require__(85534))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/radiobutton",
/******/ 		},
/******/ 		31132: {
/******/ 			fallback: () => (__webpack_require__.e(9215).then(() => (() => (__webpack_require__(9215))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/scroller",
/******/ 		},
/******/ 		90294: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(91208))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/inputicon",
/******/ 		},
/******/ 		96382: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(10148))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/iconfield",
/******/ 		},
/******/ 		66438: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9748), __webpack_require__.e(9071)]).then(() => (() => (__webpack_require__(9071))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/scroller",
/******/ 		},
/******/ 		16688: {
/******/ 			fallback: () => (__webpack_require__.e(3449).then(() => (() => (__webpack_require__(53449))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/select",
/******/ 		},
/******/ 		70312: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(9335)]).then(() => (() => (__webpack_require__(29335))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/overlay",
/******/ 		},
/******/ 		23458: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2298), __webpack_require__.e(2148), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(11298))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/togglebutton",
/******/ 		},
/******/ 		79052: {
/******/ 			fallback: () => (__webpack_require__.e(1117).then(() => (() => (__webpack_require__(71117))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/selectbutton",
/******/ 		},
/******/ 		19710: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(602), __webpack_require__.e(4022), __webpack_require__.e(400), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(18488))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/radiobutton",
/******/ 		},
/******/ 		30622: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(8884)]).then(() => (() => (__webpack_require__(58884))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/paginator",
/******/ 		},
/******/ 		33288: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(544), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(29671))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/icons/filterfill",
/******/ 		},
/******/ 		48698: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(4022), __webpack_require__.e(1783)]).then(() => (() => (__webpack_require__(81783))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/selectbutton",
/******/ 		},
/******/ 		49678: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(4022), __webpack_require__.e(7585), __webpack_require__.e(5230)]).then(() => (() => (__webpack_require__(5230))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/checkbox",
/******/ 		},
/******/ 		50274: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9748), __webpack_require__.e(2298), __webpack_require__.e(602), __webpack_require__.e(7310), __webpack_require__.e(5935)]).then(() => (() => (__webpack_require__(85935))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/datepicker",
/******/ 		},
/******/ 		80546: {
/******/ 			fallback: () => (__webpack_require__.e(3771).then(() => (() => (__webpack_require__(63771))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/table",
/******/ 		},
/******/ 		22148: {
/******/ 			fallback: () => (__webpack_require__.e(3365).then(() => (() => (__webpack_require__(23365))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/types/togglebutton",
/******/ 		},
/******/ 		77052: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(8573), __webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(1480), __webpack_require__.e(5895)]).then(() => (() => (__webpack_require__(95895))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/chart",
/******/ 		},
/******/ 		10830: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(2298), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(8985), __webpack_require__.e(8265), __webpack_require__.e(566), __webpack_require__.e(2236)]).then(() => (() => (__webpack_require__(2236))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/menu",
/******/ 		},
/******/ 		20728: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9427), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(8985), __webpack_require__.e(3853), __webpack_require__.e(814), __webpack_require__.e(6438), __webpack_require__.e(7945), __webpack_require__.e(1366), __webpack_require__.e(5955)]).then(() => (() => (__webpack_require__(65955))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/table",
/******/ 		},
/******/ 		96234: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(1480), __webpack_require__.e(9748), __webpack_require__.e(2708), __webpack_require__.e(6402), __webpack_require__.e(5522), __webpack_require__.e(3853), __webpack_require__.e(3821)]).then(() => (() => (__webpack_require__(53821))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/dialog",
/******/ 		},
/******/ 		12654: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(9748), __webpack_require__.e(3853), __webpack_require__.e(2904)]).then(() => (() => (__webpack_require__(82904))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/carousel",
/******/ 		},
/******/ 		34110: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9855), __webpack_require__.e(6546), __webpack_require__.e(8166), __webpack_require__.e(2049), __webpack_require__.e(9748), __webpack_require__.e(8985), __webpack_require__.e(3853), __webpack_require__.e(8265), __webpack_require__.e(7839)]).then(() => (() => (__webpack_require__(97839))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/fileupload",
/******/ 		},
/******/ 		91402: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(9654), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(57453))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: false,
/******/ 			requiredVersion: false,
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular-c4-team3/shared-design",
/******/ 		},
/******/ 		74618: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2377), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(28123))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: false,
/******/ 			requiredVersion: false,
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "@angular-c4-team3/auth",
/******/ 		},
/******/ 		17450: {
/******/ 			fallback: () => (Promise.all([__webpack_require__.e(2049), __webpack_require__.e(2076)]).then(() => (() => (__webpack_require__(96276))))),
/******/ 			shareScope: ["default"],
/******/ 			singleton: true,
/******/ 			requiredVersion: "^21.1.1",
/******/ 			strictVersion: true,
/******/ 			eager: false,
/******/ 			layer: undefined,
/******/ 			shareKey: "primeng/keyfilter",
/******/ 		}
/******/ 	};
/******/ 	var moduleToHandlerMapping = {};
/******/ 	// no consumes in initial chunks
/******/ 	__webpack_require__.consumesLoadingData.chunkMapping = {
/******/ 		"400": [
/******/ 			30400
/******/ 		],
/******/ 		"544": [
/******/ 			60544
/******/ 		],
/******/ 		"566": [
/******/ 			40566
/******/ 		],
/******/ 		"602": [
/******/ 			20602
/******/ 		],
/******/ 		"814": [
/******/ 			80814
/******/ 		],
/******/ 		"902": [
/******/ 			21172
/******/ 		],
/******/ 		"1020": [
/******/ 			43220
/******/ 		],
/******/ 		"1366": [
/******/ 			11366
/******/ 		],
/******/ 		"1402": [
/******/ 			91402
/******/ 		],
/******/ 		"1480": [
/******/ 			71480
/******/ 		],
/******/ 		"1783": [
/******/ 			23458,
/******/ 			79052
/******/ 		],
/******/ 		"2148": [
/******/ 			22148
/******/ 		],
/******/ 		"2236": [
/******/ 			73152
/******/ 		],
/******/ 		"2298": [
/******/ 			82298
/******/ 		],
/******/ 		"2377": [
/******/ 			72377
/******/ 		],
/******/ 		"2485": [
/******/ 			90294,
/******/ 			96382
/******/ 		],
/******/ 		"2570": [
/******/ 			32570
/******/ 		],
/******/ 		"2602": [
/******/ 			63556
/******/ 		],
/******/ 		"2652": [
/******/ 			2652
/******/ 		],
/******/ 		"2708": [
/******/ 			42708
/******/ 		],
/******/ 		"2872": [
/******/ 			62872
/******/ 		],
/******/ 		"2904": [
/******/ 			41588
/******/ 		],
/******/ 		"2982": [
/******/ 			12982
/******/ 		],
/******/ 		"3235": [
/******/ 			33235
/******/ 		],
/******/ 		"3821": [
/******/ 			43516,
/******/ 			68222
/******/ 		],
/******/ 		"3830": [
/******/ 			3830
/******/ 		],
/******/ 		"3853": [
/******/ 			6234
/******/ 		],
/******/ 		"4022": [
/******/ 			34022
/******/ 		],
/******/ 		"4118": [
/******/ 			6702
/******/ 		],
/******/ 		"4218": [
/******/ 			17450
/******/ 		],
/******/ 		"4286": [
/******/ 			10830,
/******/ 			20728
/******/ 		],
/******/ 		"4307": [
/******/ 			77052
/******/ 		],
/******/ 		"4590": [
/******/ 			54590
/******/ 		],
/******/ 		"4618": [
/******/ 			74618
/******/ 		],
/******/ 		"5211": [
/******/ 			35211
/******/ 		],
/******/ 		"5230": [
/******/ 			50100
/******/ 		],
/******/ 		"5522": [
/******/ 			75522
/******/ 		],
/******/ 		"5694": [
/******/ 			15694
/******/ 		],
/******/ 		"5935": [
/******/ 			64336
/******/ 		],
/******/ 		"5955": [
/******/ 			19710,
/******/ 			30622,
/******/ 			33288,
/******/ 			48698,
/******/ 			49678,
/******/ 			50274,
/******/ 			80546
/******/ 		],
/******/ 		"6144": [
/******/ 			33235,
/******/ 			12982
/******/ 		],
/******/ 		"6234": [
/******/ 			96234
/******/ 		],
/******/ 		"6307": [
/******/ 			27775,
/******/ 			30203
/******/ 		],
/******/ 		"6402": [
/******/ 			36402
/******/ 		],
/******/ 		"6438": [
/******/ 			66438
/******/ 		],
/******/ 		"6546": [
/******/ 			86546
/******/ 		],
/******/ 		"7310": [
/******/ 			57310
/******/ 		],
/******/ 		"7399": [
/******/ 			77399
/******/ 		],
/******/ 		"7437": [
/******/ 			3160,
/******/ 			5654,
/******/ 			7320,
/******/ 			7616,
/******/ 			10122,
/******/ 			10636,
/******/ 			12026,
/******/ 			12964,
/******/ 			13784,
/******/ 			17180,
/******/ 			22134,
/******/ 			22206,
/******/ 			31408,
/******/ 			34052,
/******/ 			34892,
/******/ 			34896,
/******/ 			37136,
/******/ 			38448,
/******/ 			43780,
/******/ 			44850,
/******/ 			46756,
/******/ 			48876,
/******/ 			55342,
/******/ 			59534,
/******/ 			60860,
/******/ 			61608,
/******/ 			62064,
/******/ 			62832,
/******/ 			64492,
/******/ 			64868,
/******/ 			73256,
/******/ 			77032,
/******/ 			77606,
/******/ 			78708,
/******/ 			79344,
/******/ 			85268,
/******/ 			85936,
/******/ 			86044,
/******/ 			94332,
/******/ 			94788,
/******/ 			95292
/******/ 		],
/******/ 		"7581": [
/******/ 			16688,
/******/ 			70312
/******/ 		],
/******/ 		"7585": [
/******/ 			57456,
/******/ 			78032
/******/ 		],
/******/ 		"7589": [
/******/ 			12846
/******/ 		],
/******/ 		"7839": [
/******/ 			29070,
/******/ 			35272,
/******/ 			88940
/******/ 		],
/******/ 		"7908": [
/******/ 			57908
/******/ 		],
/******/ 		"7945": [
/******/ 			2178,
/******/ 			6232,
/******/ 			8128,
/******/ 			14992,
/******/ 			31584,
/******/ 			44054,
/******/ 			51266,
/******/ 			52510,
/******/ 			55640,
/******/ 			58156
/******/ 		],
/******/ 		"8076": [
/******/ 			48076
/******/ 		],
/******/ 		"8166": [
/******/ 			8166
/******/ 		],
/******/ 		"8265": [
/******/ 			88265
/******/ 		],
/******/ 		"8573": [
/******/ 			68573
/******/ 		],
/******/ 		"8822": [
/******/ 			12654,
/******/ 			34110
/******/ 		],
/******/ 		"8884": [
/******/ 			96440
/******/ 		],
/******/ 		"8985": [
/******/ 			91366
/******/ 		],
/******/ 		"9071": [
/******/ 			31132
/******/ 		],
/******/ 		"9427": [
/******/ 			19427
/******/ 		],
/******/ 		"9654": [
/******/ 			29654
/******/ 		],
/******/ 		"9748": [
/******/ 			99748
/******/ 		],
/******/ 		"9855": [
/******/ 			72236
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 		__webpack_require__.federation.bundlerRuntime.consumes({
/******/ 		chunkMapping: __webpack_require__.consumesLoadingData.chunkMapping,
/******/ 		installedModules: installedModules,
/******/ 		chunkId: chunkId,
/******/ 		moduleToHandlerMapping,
/******/ 		promises: promises,
/******/ 		webpackRequire:__webpack_require__
/******/ 		});
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/embed/federation */
/******/ (() => {
/******/ 	var prevStartup = __webpack_require__.x;
/******/ 	var hasRun = false;
/******/ 	__webpack_require__.x = () => {
/******/ 		if (!hasRun) {
/******/ 		  hasRun = true;
/******/ 		  __webpack_require__(83892);
/******/ 		}
/******/ 		if (typeof prevStartup === 'function') {
/******/ 		  return prevStartup();
/******/ 		} else {
/******/ 		  console.warn('[Module Federation] prevStartup is not a function, skipping startup execution');
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		945: 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(!/^(1(366|402|480)|2((14|29|70)8|(65|87|98)2|377|485|570)|3(235|830|853)|4(00|022|590|618)|5(211|44|522|66|694)|6((|4)02|144|234|438|546)|7(310|399|585|908|945)|8(076|14|166|265|573|985)|9(427|654|748|855))$/.test(chunkId)) {
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ // run runtime startup
/******/ __webpack_require__.x();
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __webpack_exports__ = __webpack_require__(52547);
/******/ const __webpack_exports__get = __webpack_exports__.get;
/******/ const __webpack_exports__init = __webpack_exports__.init;
/******/ export { __webpack_exports__get as get, __webpack_exports__init as init };
/******/ 
