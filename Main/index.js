const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is your project title',
        },
        {   name:'discription',
            type: 'input',
            message:'Enter discription of your project',
        },
        {   name:'instructions',
            type: 'input',
            message:'Enter instructions for your project',
        },
        {   name:'usageInformation',
            type: 'input',
            message:'Enter Usage Information  of your project',
        },
        {   name:'contributionGuidelines',
            type: 'input',
            message:'Enter Contributions of your project',
        },
        {   name:'testInstruction',
            type: 'input',
            message:'Enter Test instructions of your project',
        },


    ])
    .then((answers) => {
    /*const {projectTitle}=answers;
    const{discription}=answers;
    const{instructions}=answers;
    const{usageInformation}=answers;
    const{contributionGuidelines}=answers;
    const{testInstruction}=answers;*/





    const readme= `
    ## Project: \n ${answers.title}
    ## User Story \n ${answers.discription}
    ## Acceptance Criteria \n 
    
    
   
    `;


    fs.writeFile('README.md', readme, (err) =>
    err ? console.error(err) : console.log('Success!')
    );    

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Something else went wrong")
        }
    });