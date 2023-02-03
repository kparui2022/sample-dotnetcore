#!/bin/bash
npm config set legacy-peer-deps true
npm install
npm run build-dev
