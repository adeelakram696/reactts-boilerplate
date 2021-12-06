React Redux Generator
===================

# Welcome to React Redux Generator

This is Yeoman generator for app of React Redux with basic scaffolding and structure of files and UI libraries options.

## UI Libraries

 - Ant Design
 - Material UI

 ## Features
  - CLI Module, Component Generator
  - Locale Translations support
  - RTL / LTR support
  - Auto fetch translations from app
  - Unit testing
  - Sonar coverage and testing integration
  - eslint and prettier configured
  - CRA4
  - React 17
  - Easy Support for All Styles(Less, Scss, Css, module.css, Style Components)
  - SVG as react component
  - VSCode settings
  - Redux-Toolkit
  - Redux-Batch as enhancer
  - Redux Thunk
  - Ant and Material Base setup With theme configs


# Installation

Install Yeoman and generator using npm
`
npm install -g yo @boilerplate/generator-react --@boilerplate:registry=http://3.84.52.202:4873
`

# Creating a Project

Create as many as project using react redux generator
`
yo @boilerplate/react
`
It will Ask few Questions like below

 - Project name:
 - Application version
 - Which UI library wants to use
 - etc

## Starting Project
Once project is created it will have few commands predefined.

to run scripts you can use yarn or npm both
```javascript

npm  run  start // To Start Project

npm  run  build // To make a Build

npm  run  test // Unit test

npm  run  coverage  // Unit test coverage

npm  run  lint // fix fixable issue by lint auto

npm  run  translations // fetch translations

npm  run  generate [module, atom, molecule, page] // generate code e.g npm run generate module

Theme=antd File=sample.json Type=ts npm  run  crud // generate crud e.g npm run generate module

```
## How to use code Generator
1. run `npm run  generate module` e.g `npm run  generate atom` 

## How to use Crud Generator
1. visi http://3.84.52.202:3269/app/
2. add fields and create form data
3. generate output json file
4. place into your project root
5. run the command `npm run crud` with variables Theme, File e.g -> `Theme=antd File=sample.json npm run crud`
6. options : Theme can be material or antd
# Webpack Extend
Project is using craco which gives craco.config.js file where you can extend the Webpack settings without ejecting it.

CI/CD Pipeline Setup
----------------------------------------------------------
Bitbucket pipeline CI/CD is already setup with AWS S3.
you just need to set below repository variables
```
NPM_REGISTRY=3.84.52.202:4873
NPM_TOKEN='ASK MANAGER'
SONAR_PROJECT_KEY='SONAR CLOUD Project KEY'
AWS_ACCESS
AWS_SECRET
AWS_REGION
```
DEV CI/CD Variables
```
ENCRYPTION_KEY_DEV=''
API_BASE_URL_DEV='https://abc.com'
ADMIN_BUCKET_DEV
```
TEST CI/CD Variables
```
ENCRYPTION_KEY_TEST=''
API_BASE_URL_TEST='https://abc.com'
ADMIN_BUCKET_TEST
```
PROD CI/CD Variables
```
ENCRYPTION_KEY_PROD=''
API_BASE_URL_PROD='https://abc.com'
ADMIN_BUCKET_PROD
```
