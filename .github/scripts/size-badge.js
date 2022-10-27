const https = require('https');
const path = require('path');
const fs = require('fs');

const appDir = path.resolve(__dirname, '../../');

const { size } = fs.statSync(path.resolve(appDir, 'packages/react-vvm/dist/react-vvm.production.js'));
const weight = `${Math.round(size / 10) / 100}%20Kb`;

https
  .get(`https://img.shields.io/badge/Weight-${weight}-green`, resp => {
    let data = '';

    resp.on('data', chunk => {
      data += chunk;
    });

    resp.on('end', () => {
      fs.writeFileSync(path.resolve(appDir, 'badges/weight.svg'), data);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
