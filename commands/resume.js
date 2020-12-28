const { noVC, noPlaying, Resumed } = require("../lib/embedMessages.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return noVC(message);
    const queue = message.client.queue
    const serverQueue = queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return Resumed(message);
    }
    return noPlaying(message);

}
module.exports.help = {
    name: "resume",
    aliases: []
}