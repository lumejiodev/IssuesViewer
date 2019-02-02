# Git Hub Issues Viewer

This is an Issues Viewer for github.com/facebook/react repository.

## Structure Prototype

Route: `/`

Contents:
- Filter bar: search field + open/closed filter
- Issues list
  - Issues items (navigation to /:id on click)

Route: `/:id`

Contents:
- Back button (navigation to / on click)
- Issue details
- Comments list
  - Comments items

## Simplified to-do list

- [x] setup Preact boilerplate
- [ ] make redux files (connect state and ducks)
- [ ] make containers
- [ ] make routes
- [ ] make components
- [ ] write unit tests
- [ ] improve GUI

## CLI Commands

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn run build

# test the production build locally
yarn run serve

# run tests with jest and preact-render-spy 
yarn run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
