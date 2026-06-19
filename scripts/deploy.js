const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('1. Building host and remote apps for production (base-href=/angular-c4-team3/)...');
  execSync('npx nx build angular-c4-team3 --base-href=/angular-c4-team3/ --skip-nx-cache', { stdio: 'inherit' });

  console.log('\n2. Copying dashboard remote build output into host subfolder...');
  const src = path.resolve(__dirname, '../dist/apps/dashboard');
  const dest = path.resolve(__dirname, '../dist/apps/angular-c4-team3/dashboard');

  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true, force: true });
    console.log('Successfully packaged dashboard remote under host folder.');
  } else {
    throw new Error(`Source directory ${src} does not exist. Did the build fail?`);
  }

  console.log('\n3. Deploying host folder to GitHub Pages via gh-pages...');
  execSync('npx gh-pages -d dist/apps/angular-c4-team3', { stdio: 'inherit' });
  console.log('\nSuccessfully deployed to gh-pages!');
} catch (error) {
  console.error('\nDeployment failed:', error.message);
  process.exit(1);
}
