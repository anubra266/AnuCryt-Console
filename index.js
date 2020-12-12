// import our two functions
import encrypt from "./encrypt";
import decrypt from "./decrypt";

var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "mode",
      message: "What would you like to do?",
      choices: ["Encrypt", "Decrypt"],
    },
    {
      type: "input",
      name: "file",
      message: "Input file name",
    },
    {
      type: "password",
      name: "password",
      message: "Enter password",
    },
  ])
  .then((answers) => {
    // pull the mode, file and password from the command arguments.
    const { mode, file, password } = answers;
    console.log(mode);

    if (mode.toLowerCase() === "encrypt") {
      encrypt({ file, password });
    }
    if (mode.toLowerCase() === "decrypt") {
      decrypt({ file, password });
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error);
    }
  });
