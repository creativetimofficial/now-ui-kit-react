# Change Log

## [1.5.2] 2023-05-25

- Update dependencies
- Fix installation issue

## [1.5.1] 2021-07-31

- Update the dependencies
- Migration to React 18
- Migration to sass from node-sass

## [1.5.0] 2021-05-19

### Bug fixing

### Major style changes

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

- `@babel/core@7.14.3` (to stop warnings on install)

### Updated dependencies

```
gulp-append-prepend     1.0.8   →    1.0.9
moment                 2.26.0   →   2.29.1
node-sass              4.14.1   →    6.0.0
nouislider             14.5.0   →   15.1.0
react                 16.13.1   →   17.0.2
react-datetime         2.16.3   →    3.0.4
react-dom             16.13.1   →   17.0.2
react-scripts           3.4.1   →    4.0.3
reactstrap              8.4.1   →    8.9.0
typescript              3.9.5   →    4.2.4
```

### Warning

_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

```
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
```

_In our next update we'll replace this plugin with something else to stop these._
_You will also have the following message: found 80 vulnerabilities (1 low, 79 moderate). This comes from react-scripts, and will be fixed in the next version. NOTE: the product works as expected with these vulnerabilities._

## [1.4.0] 2020-06-15

### Bug fixing

- Other Now UI React products
  - https://github.com/creativetimofficial/ct-now-ui-dashboard-pro-react/issues/10 (added `window.scrollTo(0, 0)` and `document.body.scrollTop = 0` to all pages so when you navigate to new page you are sent to the first line of the page)
  - https://github.com/creativetimofficial/ct-now-ui-dashboard-pro-react/issues/31 (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
  - https://github.com/creativetimofficial/ct-now-ui-kit-pro-react/issues/2 (added warnings on the documentation about this issue - unfortunately, we need to keep our own homepage prop inside the package.json for copyright issues)
  - https://github.com/creativetimofficial/now-ui-dashboard-react/issues/10

### Major style changes

- `src/assets/scss/now-ui-kit/_nucleo-outline.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/now-ui-kit/_variables.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/react/now-ui-kit/_popovers.scss` (because of new bootstrap and reactstrap versions)
- `src/assets/scss/react/now-ui-kit/_tooltips.scss` (because of new bootstrap and reactstrap versions)
- `src/assets/scss/react/react-differences.scss` (to add the new tootlips styles)

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

- gulp@4.0.2 (for Creative Tim copyrights)
- gulp-append-prepend@1.0.8 (for Creative Tim copyrights)

### Updated dependencies

```
moment             2.24.0   →    2.26.0
node-sass          4.12.0   →    4.14.1
nouislider         14.0.2   →    14.5.0
react              16.8.6   →   16.13.1
react-dom          16.8.6   →   16.13.1
react-router        5.0.1   →     5.2.0
react-router-dom    5.0.1   →     5.2.0
react-scripts       3.0.1   →     3.4.1
reactstrap          8.0.1   →     8.4.1
typescript          3.5.3   →     3.9.5
```

### Warning

_All the following products: Now UI Kit React, Now UI Dashboard React, Now UI Kit PRO React and Now UI Dashboard PRO React have been updated together, and thus, we've added to all of them the same version of 1.4.0 - we may have skipped some versions for some of the above products, we've done so, since we want all Now UI & React products to share the same versions._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

## [1.0.0] 2019-07-23

### Original Release

- Started project with create-react-app
- Added Reactstrap as base framework
- Added design from Now UI Kit by Creative Tim
- Added React Hooks
