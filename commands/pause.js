const { noVC, noPlaying, Paused } = require("../lib/embedMessages.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return noVC(message);
    const queue = message.client.queue
    const serverQueue = queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.resume();
        return Paused(message);
    }
    return noPlaying(message);

}
module.exports.help = {
    name: "pause",
    aliases: []
}