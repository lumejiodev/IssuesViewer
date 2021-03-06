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

## To-do list

- [x] setup Preact boilerplate
- [x] make routes
- [ ] ~~make redux files (connect state and ducks)~~
- [x] implement GraphQL + Apollo Client
- [x] containers and components
  - [x] render all needed data on pages
  - [x] navigation between pages
  - [x] search field for issues list
  - [x] open/closed filter for issues list
  - [x] pagination for issues list
  - [x] pagination for comments list
  - [ ] [backlog] make a queryless search/filters when total amount of issues is lower than 50
  - [x] clean up code
- [x] write unit tests
  - [x] components
  - [x] integration or e2e
- [x] improve GUI

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

## GitHub API Token

1. Duplicate `.env.sample` file and make it `.env`
1. Visit https://github.com/settings/tokens
1. Generate new key with `public_repo` scope checked
1. Copy this key into `.env` file (as a `PREACT_APP_GITHUB_TOKEN`)
