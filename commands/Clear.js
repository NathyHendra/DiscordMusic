const Discord = require('discord.js');
const config = require("../settings/config.json");
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have enough permissions!").then(m => m.delete(8000))
if(!args[0]) return message.channel.send("Specify the number of messages.").then(m => m.delete(8000))
message.channel.bulkDelete(args[0]).then(() => {
  const embed = new Discord.MessageEmbed()
       .setDescription(`Messages successfully deleted.`)
  
        .setFooter(`requested by ${message.author.username}`)
        .setColor(config.cyan)
        .setTimestamp()
message.channel.send({ embed }).then(m => m.delete(8000))
})
};

exports.help = {
  name: 'clean',
  aliases: []
};
