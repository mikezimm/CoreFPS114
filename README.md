# fps-core-114

## Summary
npm install -g @microsoft/generator-sharepoint@1.14.0 (v1.14)
yo @microsoft/sharepoint --skip-install

Solution:  FPSCore114
Webpart:  FPS Core 1.14 Banner

npm install
gulp serve --nobrowser

## File summary
.\BuildExportProps.ts - Builds export props object for banner
.\PreConfiguredSettings.ts - contains global preconfigured forced and preset properties


## npm installs (beyond initial one)
```
npm install @mikezimm/npmfunctions@2.0.1   -----> version at time of creating project
npm install @pnp/spfx-property-controls --save --save-exact   ----->  "@pnp/spfx-property-controls": "3.8.0",
```

npm install webpack-bundle-analyzer@3.9.0 --save-dev
After installing webpack analyzer, be sure to update the gulpfile.js so it actually builds the map.