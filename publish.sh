#!/bin/bash

echo ======== build lib =========
ng build ng-environment --prod

echo ======== push to npm =========
cd dist/ng-environment
npm publish --access=public