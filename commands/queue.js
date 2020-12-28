const Discord = require("discord.js");
const config = require("../settings/config.json");
const { noPlaying } = require("../lib/embedMessages.js");

module.exports.run = async (client, message, args) => {

    const queue = message.client.queue
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) return noPlaying(message);
    let queueMessage = new Discord.MessageEmbed()
        .setDescription(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`)
        .setColor(config.cyan)
    return message.channel.send(queueMessage);

}
module.exports.help = {
    name: "queue",
    aliases: []
}