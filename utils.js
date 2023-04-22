const fs=require('fs');
const path=require('path');
const {exec}=require('child_process');

const createTemplate=params=>{
    const template = {
        Resources: {}
    };
    
    params.forEach((param, index) => template.Resources[`param${index+1}`] = {
        "Type": "AWS::SSM::Parameter",
        "Properties": {
            "Name": param.name,
            "Type": param.type || "String",
            "Value": param.value,
            "Description": param.description,
            "Tags": param.tags
        }
    });
    fs.writeFileSync(path.join(__dirname,'template.json'),JSON.stringify(template,null,2),'utf-8');
};



const asyncExec=(action,stack)=>{
    return new Promise((res,rej)=>{
        const commandString=`sh ${__dirname}/${action}.sh -s ${stack}`;
        exec(commandString ,(err,stdout,stderr)=>{
            if(err || stderr){
                return rej(stderr);
              }
            try{
                fs.unlinkSync(path.join(__dirname,'template.json'));
            }
            catch(err){};     
            res(stdout);
        });
    });
};

module.exports={asyncExec,createTemplate};