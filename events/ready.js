const { client } = require('../index.js');
const chalk = require("chalk");

client.on("ready", async () => {

    console.log(chalk.cyan(`============================================`));
    console.log(chalk.cyan(`||              Ertassla#0001             ||`));
    console.log(chalk.cyan(`||       Music v12        ||`));
    console.log(chalk.cyan(`============================================`));


    await client.user.setActivity("Music", {type: "LISTENING"})


});