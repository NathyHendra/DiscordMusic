const config = require("../settings/config.json");
const { noPlaying, nowPlaying } = require("../lib/embedMessages.js");

module.exports.run = async (client, message, args) => {

    const queue = message.client.queue
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) return noPlaying(message);
    return nowPlaying(serverQueue, message);

}
module.exports.help = {
    name: "np",
    aliases: []
}