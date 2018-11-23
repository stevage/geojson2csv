#!/usr/bin/env node
const geojson2dsv = require('geojson2dsv');
const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
    console.log('Usage: geojson2csv filename.geojson');
    process.exit(1);
} else {
    const source = JSON.parse(fs.readFileSync(filename));
    console.log(geojson2dsv(source));
}
