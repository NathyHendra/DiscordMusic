const { client } = require('../index.js');
const config = require('../settings/config.json');

client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let command;

    if (!message.content.startsWith(config.prefix)) return;

    if (client.commands.has(cmd)) {

        command = client.commands.get(cmd);

  } else if (client.aliases.has(cmd)) {

    cmd = client.commands.get(client.aliases.get(cmd));

    

    }

    if (command) command.run(client, message, args);

    let cmdfile = client.commands.get(cmd.slice(config.prefix.length));
    if (cmdfile) cmdfile.run(client, message, args);
});