const fs=require('fs');
const path=require('path');
const params = require('./params.json');

const template = {
    Resources: {}
};

params.forEach((param, index) => template.Resources[`param${index+1}`] = {
    "Type": "AWS::SSM::Parameter",
    "Properties": {
        "Name": param.Name,
        "Type": param.Type || "String",
        "Value": param.Value,
        "Description": param.Description,
        "Tags": param.Tags
    }
});
fs.writeFileSync(path.join(__dirname,'template.json'),JSON.stringify(template,null,2),'utf-8');