const { noVC, noPlaying, Skipped } = require("../lib/embedMessages.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return noVC(message);
    const queue = message.client.queue
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) return noPlaying(message);
    serverQueue.connection.dispatcher.end();
    return Skipped(message);

}
module.exports.help = {
    name: "skip",
    aliases: []
}