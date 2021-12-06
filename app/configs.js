/**
 * Varibales Descriptions
 * isTemplate: boolean -> use of variables in for template file
 * addExtension: boolean -> add extension after file name without .
 * isjsx: boolean -> add x after adding extionsion
 * postFixType: boolean -> add js or ts after source folder to fetch file
 * isCommon: boolean -> if its in common folder
 * addDestinationFileType: boolean -> add post type to destination file
 * isDotFile: boolean -> if files are .gitignore etc
 */

const config = {
  dependencies: [
    'axios',
    'crypto-js',
    '@reduxjs/toolkit',
    'moment',
    'i18next',
    'react-i18next',
    'i18next-browser-languagedetector',
    'redux-logger',
    'styled-components',
    'redux-reducers-injector',
    'redux-thunk',
    '@manaflair/redux-batch',
    'react-helmet-async',
    'fontfaceobserver',
  ],
  devDependencies: [
    'babel-eslint',
    // 'i18next-scanner',
    'serve',
    'prettier',
    // '@generator/components',
    'craco-eslint-webpack-plugin',
    // '@generator/react-crud',
    'msw',
    'redux-mock-store',
  ],
  tsDevDependencies: [
    '@types/crypto-js',
    '@types/jest',
    '@types/react-redux',
    '@types/react-router-dom',
    '@types/redux-logger',
    '@types/fontfaceobserver',
    '@types/webpack-env',
  ],
  tsDependencies: [
    'typescript'
  ],
  ui: {
    ant: {
      name: "Ant Design",
      value: "ant"
    },
    material: {
      name: "Material UI",
      value: "material"
    },
  },
  files: [
    {
      source: '/',
      destination: '/',
      isTemplate: true,
    },
    {
      source: 'eslintrc.js',
      destination: '.eslintrc.js',
      isTemplate: false,
      isDotFile: true,
    },
    {
      source: 'gitignore',
      destination: '.gitignore',
      isTemplate: false,
      isDotFile: true,
    },
    {
      source: 'npmignore',
      destination: '.npmignore',
      isTemplate: false,
      isDotFile: true,
    },
    {
      source: 'npmrc',
      destination: '.npmrc',
      isTemplate: false,
      isDotFile: true,
    },
    {
      source: 'vscode',
      destination: '.vscode',
      isTemplate: false,
      isDotFile: true,
    },
    {
      source: 'prettierrc',
      destination: '.prettierrc',
      isTemplate: false,
      isDotFile: true,
    },
    {
      source: 'package.json',
      destination: 'package.json',
      isTemplate: true,
    },
    {
      source: 'src/routing/Root.',
      destination: 'src/routing/Root.',
      isTemplate: true,
      addExtension: true,
      isjsx: true,
    },
    {
      source: 'src/routing/Pages.',
      destination: 'src/routing/Pages.',
      isTemplate: true,
      addExtension: true,
      isjsx: true,
    },
    {
      source: 'public/index.html',
      destination: 'public/index.html',
      isTemplate: true,
    },
    {
      source: 'public/manifest.json',
      destination: 'public/manifest.json',
      isTemplate: true,
    },
    {
      source: 'LICENSE',
      destination: 'LICENSE',
      isTemplate: true,
    },
    {
      source: 'README.md',
      destination: 'README.md',
      isTemplate: true,
    },
  ],
  ant_files: [
    {
      source: 'common/antd/styles',
      destination: 'src/styles',
      isTemplate: false,
      isCommon: true,
    },
    {
      source: 'common/antd/molecules/Direction',
      destination: 'src/app/molecules/Direction',
      isTemplate: false,
      postFixType: true, // add js,ts as postfix on source folder
      isCommon: true, // not to add js,ts as prefix on source folder
    }
  ],
  dashboard_layout: {
    antd:
    [
      {
        source: 'common/antd/molecules/Header',
        destination: 'src/app/molecules/Header',
        isTemplate: true,
        postFixType: true, // add js,ts as postfix on source folder
        isCommon: true, // not to add js,ts as prefix on source folder
      },
      {
        source: 'common/antd/molecules/Layout',
        destination: 'src/app/molecules/Layout',
        isTemplate: false,
        postFixType: true, // add js,ts as postfix on source folder
        isCommon: true, // not to add js,ts as prefix on source folder
      },
      {
        source: 'common/antd/molecules/SideMenu',
        destination: 'src/app/molecules/SideMenu',
        isTemplate: false,
        postFixType: true, // add js,ts as postfix on source folder
        isCommon: true, // not to add js,ts as prefix on source folder
      },
    ],
    material:
    [
      {
        source: 'common/material/molecules/Header',
        destination: 'src/app/molecules/Header',
        isTemplate: true,
        postFixType: true, // add js,ts as postfix on source folder
        isCommon: true, // not to add js,ts as prefix on source folder
      },
      {
        source: 'common/material/molecules/Layout',
        destination: 'src/app/molecules/Layout',
        isTemplate: false,
        postFixType: true, // add js,ts as postfix on source folder
        isCommon: true, // not to add js,ts as prefix on source folder
      },
      {
        source: 'common/material/molecules/SideMenu',
        destination: 'src/app/molecules/SideMenu',
        isTemplate: false,
        postFixType: true, // add js,ts as postfix on source folder
        isCommon: true, // not to add js,ts as prefix on source folder
      },
    ]
  },
  material_files: [
    {
      source: 'common/material/styles/index',
      destination: 'src/styles/index',
      isTemplate: false,
      addDestinationFileType: true,
      isCommon: true,
    }
  ],
  casl_react_package_files: [
    {
      source: 'common/permissions/config/Can/ability.',
      destination: 'src/app/atoms/Can/ability.',
      isTemplate: false,
      addExtension: true,
      isCommon: true
    },
    {
      source: 'common/permissions/config/Can/index',
      destination: 'src/app/atoms/Can/index.',
      isTemplate: true,
      addExtensionToDestinationPath: true,
      isCommon: true
    },
    {
      source: 'src/app/atoms/index.',
      destination: 'src/app/atoms/index.',
      isTemplate: true,
      addExtension: true
    },
    {
      source: 'common/permissions/modules',
      destination: 'src/app/modules',
      isTemplate: true,
      isCommon: true,
      postFixType: true
    },
  ]
};

module.exports = config;
