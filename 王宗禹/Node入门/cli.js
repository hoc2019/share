var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "commit",
      message: "请输入commit信息：",
      validate(value) {
        if (value) {
          return true;
        }
      }
    }
  ])
  .then(answers => {
    console.log(answers);
    // Use user feedback for... whatever!!
  });
