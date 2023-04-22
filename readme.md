![License: 'MIT'](https://img.shields.io/badge/License-MIT-yellow.svg)
# AWS CloudFormation MS -Control AWS Parameter Store
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
## Description
This is a microservice designed to run on localhost and uses AWS CLI to create and delete stacks, that will  aytomate the process to create or delete some SSM parameters
## Installation
Pre-Requisites:
You need to have AWS CLI installed
You need to have access key and secret configured 
Refer to AWS documentation to have AWS CLI setup and configured properly
Once you have cloned the repo, `git checkout parmeter-store`
run `npm i`
run `npm run start`
## Usage
You can use `AWS CloudFormation.postman_collection.json` as a reference or starting point, just importing the collection to your postman.
Change 'stack , parms' in request body as per your needs.

## Questions
You are welcome to provide any feedback and/or ask questions.
Please, send any question to my e-mail [tonymelek.au@gmail.com](mailto:tonymelek.au@gmail.com) and/or visit my profile on [Github](https://github.com/tonymelek)

## License
The project is protected under MIT,you may need to read through license conditions