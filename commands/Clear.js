const Discord = require('discord.js');
const config = require("../settings/config.json");
exports.run = function(client, message, args) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have enough permissions!").then(z => z.delete({timeout: 8000}))
  if(!args[0]) return message.reply("Specify the nubmer of messages").then(x => x.delete({timeout: 8000}));
  message.channel.bulkDelete(args[0]).then(() => { message.channel.send(new Discord.MessageEmbed().setDescription("Messages successfully deleted.").setColor(config.cyan).setTimestamp().setFooter(`requested by ${message.author.username}`))})
};

exports.help = {
  name: 'clean',
  aliases: []
};
