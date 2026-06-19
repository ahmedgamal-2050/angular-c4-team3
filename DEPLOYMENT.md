# GitHub Pages Deployment Guide

This document explains the steps required to deploy the module-federated Angular application to GitHub Pages.

## Overview of the Architecture
This project is an Nx monorepo utilizing Module Federation:
- **Host App**: `angular-c4-team3`
- **Remote App**: `dashboard`

When running locally in development, the host application dynamically requests the remote dashboard application from `http://localhost:4202/remoteEntry.mjs`.

For production deployment on GitHub Pages, both applications must be served from the same repository domain. To achieve this, the dashboard application is packaged as a subfolder inside the host application's output folder:
- **Host App Deployed Path**: `https://ahmedgamal-2050.github.io/angular-c4-team3/`
- **Remote App Deployed Path**: `https://ahmedgamal-2050.github.io/angular-c4-team3/dashboard/`

## Deployment Steps

### 1. Production Remote Configuration
In [webpack.prod.config.ts](file:///d:/work/Elevate/angular-c4-team3/apps/angular-c4-team3/webpack.prod.config.ts), the production remote URL for the `dashboard` is set to a relative path pointing to the subdirectory:
```typescript
remotes: [
  ['dashboard', '/angular-c4-team3/dashboard/remoteEntry.mjs']
]
```

### 2. Build the Applications
Build the host application for production, passing the correct `base-href` corresponding to the GitHub Pages repository subdirectory (`/angular-c4-team3/`):
```bash
npx nx build angular-c4-team3 --base-href=/angular-c4-team3/ --skip-nx-cache
```
*Note: Because the host application depends on the `dashboard` library/app, Nx automatically builds the `dashboard` first.*

### 3. Package/Assemble the Artifacts
Copy the built `dashboard` remote application output into the host application's build subdirectory:
```bash
# PowerShell
Copy-Item -Path "dist/apps/dashboard" -Destination "dist/apps/angular-c4-team3/dashboard" -Recurse -Force

# Bash
cp -R dist/apps/dashboard dist/apps/angular-c4-team3/dashboard
```

### 4. Push to `gh-pages` Branch
Deploy the combined host build folder (`dist/apps/angular-c4-team3`) to the `gh-pages` branch using the `gh-pages` CLI:
```bash
npx gh-pages -d dist/apps/angular-c4-team3
```

---

## Automated Deployment (Recommended)
An automated, cross-platform deployment script has been created at [scripts/deploy.js](file:///d:/work/Elevate/angular-c4-team3/scripts/deploy.js).

To deploy the application automatically, simply run:
```bash
npm run deploy
```

This single command will:
1. Compile both the host and remote apps with the correct `base-href`.
2. Package the `dashboard` remote app under the host's directory structure.
3. Push the output to the `gh-pages` branch on GitHub.
