const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const config = require('./configs');
const fs = require('fs');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  async initializing() {
    this.pkg = require('../package.json');
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('React Redux App') + ' boilerplate generator!'
    ));
    this.ui_library_answers = {};  
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Project name: ",
        required: true,
        default: "react-app"
      },
      {
        type: "input",
        name: "dirName",
        message: "Directory Name: ",
        required: true,
        default: "react-app"
      },
      {
        type: "input",
        name: "description",
        message: "Project Description",
        default: ""
      },
      {
        type: "input",
        name: "app_version",
        message: "Application version? e.g 0.1.0",
        default: "0.1.0"
      },
      {
        type: "list",
        name: "private",
        message: "Is this repo private?(private repo won't be able to npm publish)",
        choices: [
          {
            name: "Yes",
            value: true
          },
          {
            name: "No",
            value: false
          },
        ],
      },
      {
        type: "list",
        name: "jstype",
        message: "Which code type you want?",
        required: true,
        default: "js",
        choices: [
          {
            name: "JS",
            value: 'js'
          },
          {
            name: "TS",
            value: 'ts'
          },
        ],
      },
      {
        type: "list",
        name: "ui_library",
        message: "Which UI Library you want to use?",
        choices: [
          ...Object.values(config.ui),
        ],
        default:"ant",
        required: true
      },
      {
        type: "list",
        name: "casl_react_package",
        message: "Do you want to setup permission-based mechanism on your application?",
        choices: [
          {
            name: "Yes",
            value: true
          },
          {
            name: "No",
            value: false
          },
        ],
        required: true
      }
    ]);
    if (this.answers.ui_library === config.ui.ant.value || this.answers.ui_library === config.ui.material.value) {
      this.ui_library_answers = await this.prompt([
        {
          type: "list",
          name: "dashboard_layout",
          message: "Do you need Dashboard Layout?",
          choices: [
            {
              name: "Yes",
              value: true
            },
            {
              name: "No",
              value: false
            },
          ],
          required: false
        }
      ]);
    };
  };
  writing() {
    const cleanName = (name, replaceWith) => {
      name = name.replace(/\s+/gi, replaceWith); // Replace white space with dash
      return name.replace(/[^a-zA-Z0-9\-]/gi, ''); // Strip any special charactere
    }
    const copyToPath = (file, directory, answers) => {
      let filePath = answers.jstype+ '/' +file.source;
      let destinationPath = directory+ '/' + file.destination;
      // if files in common folder
      if (file.isCommon) {
        filePath = file.source;
      }
      // if file with prefix . needed to created
      if (file.isDotFile) {
        filePath = 'dotfiles/' + filePath;
      }
      // if needed to add ts, js, jsx or tsx extionsion
      if (file.addExtensionToDestinationPath) {
        destinationPath = destinationPath + answers.jstype;
      }
      if (file.addExtensionToSourcePath) {
        filePath = filePath + answers.jstype;
      }
      if (file.addExtension) {
        filePath = filePath + answers.jstype;
        destinationPath = destinationPath + answers.jstype;
        if (file.isjsx) {
          filePath = filePath + 'x';
          destinationPath = destinationPath + 'x';
        }
      } else if (file.addDestinationFileType) { 
        // if needed to add extention only for destination file
        destinationPath = destinationPath + '.' + answers.jstype;
      }
      if (file.postFixType) {
        // adding for component with jstype folder
        filePath = filePath + '/' + answers.jstype
      }
      if (file.isTemplate) {
        this.fs.copyTpl(
          this.templatePath(filePath),
          this.destinationPath(destinationPath),
          answers
        );
      } else {
        this.fs.copy(
          this.templatePath(filePath),
          this.destinationPath(destinationPath),
        );
      }
    }
    const directory = cleanName(this.answers.dirName, '_');
    mkdirp.sync(directory);
    const answers = {
      app_name: cleanName(this.answers.name, '-'),
      app_version: this.answers.app_version,
      title: this.answers.name,
      ui_library :this.answers.ui_library,
      dashboard_layout :(this.ui_library_answers || {}).dashboard_layout,
      year: new Date().getFullYear(),
      private: this.answers.private,
      jstype: this.answers.jstype,
      casl_react_package: this.answers.casl_react_package
    }
    config.files.forEach(file => {
      copyToPath(file, directory, answers);
    });
    // Casl React Package Files
    if (this.answers.casl_react_package) {
      config.casl_react_package_files.forEach(file => {
        copyToPath(file, directory, answers);
      });
    }
    // UI Library Files
    switch (this.answers.ui_library) {
      case config.ui.ant.value: {
        config.ant_files.forEach(file => {
          copyToPath(file, directory, answers);
        });
        if (this.ui_library_answers.dashboard_layout) {
          config.dashboard_layout.antd.forEach(file => {
            copyToPath(file, directory, answers);
          });
        }
        break;
      }
      case config.ui.material.value: {
        config.material_files.forEach(file => {
          copyToPath(file, directory, answers);
        });
        if (this.ui_library_answers.dashboard_layout) {
          config.dashboard_layout.material.forEach(file => {
            copyToPath(file, directory, answers);
          });
        }
        break;
      }
    }
  }
  install() {
    const cleanName = (name, replaceWith) => {
      name = name.replace(/\s+/gi, replaceWith); // Replace white space with dash
      return name.replace(/[^a-zA-Z0-9\-]/gi, ''); // Strip any special charactere
    }
    const answers = {
      ui_library :this.answers.ui_library,
      jstype: this.answers.jstype,
      dirName: cleanName(this.answers.dirName, '_'),
      dashboard_layout: this.ui_library_answers.dashboard_layout,
      casl_react_package: this.answers.casl_react_package
    }
    const directory = answers.dirName;
    var npmdir = process.cwd() + '/' + directory;
    process.chdir(npmdir);
    fs.writeFileSync('.env', `REACT_APP_ENCRYPTION_KEY = 'ee06040416674a04af3ff4f7881b76f2'`);
    this.npmInstall();
    var packages = config.dependencies;
    if (answers.jstype == 'ts') {
      // adding TS dependancies
      packages.push(...config.tsDependencies);
    }
    // adding Ui library
    switch (answers.ui_library) {
      case config.ui.ant.value: {
        packages.push('antd');
        packages.push('@ant-design/icons');
        break;
      }
      case config.ui.material.value: {
        packages.push('@material-ui/core');
        packages.push('@material-ui/icons');
        if (answers.dashboard_layout) {
          packages.push('clsx');
        }
        break;
      }
    }
    if (answers.casl_react_package) {
      packages.push('@casl/ability');
      packages.push('@casl/react');
    }
    this.npmInstall(packages, { 'save': true });
    var packages = config.devDependencies;
    if (answers.jstype == 'ts') {
      packages.push(...config.tsDevDependencies);
    }
    this.npmInstall(packages, { 'save-dev': true });
  }
};
