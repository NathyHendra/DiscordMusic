const Discord = require("discord.js");
const config = require("../settings/config.json")
module.exports.run= async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel)return message.reply("Sorry but you have to be on an audio channel to play music", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("There is nothing playing on this server.", message.channel);
    if (!args[0])return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: You just need to specify the number.').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return message.reply('You cannot adjust the volume above 150 or below 0',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new Discord.MessageEmbed()
    .setDescription(`The sound is set: **${args[0]/1}/100**`)
    .setAuthor("Voice Changed.")
    .setColor("#7289DA")
    return message.channel.send(xd);
}
module.exports.help = {
name: "volume",
aliases: ["s"]
}
