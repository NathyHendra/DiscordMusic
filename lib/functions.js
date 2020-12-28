const ytdl = require("ytdl-core");
const { MessageEmbed, Util } = require("discord.js");
const config = require("../settings/config.json");
const { addedQueue } = require("./embedMessages.js");

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const queue = msg.client.queue
    const serverQueue = queue.get(msg.guild.id);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };

    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 1,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0], msg);
        } catch (error) {
            queue.delete(msg.guild.id);
            return msg.channel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        if (playlist) return undefined;
        else return addedQueue(msg, song.title);
    }
    return undefined;
}



function play(guild, song, msg) {
    const queue = msg.client.queue
    const serverQueue = queue.get(guild.id);

    if (!song) {
       msg.member.voice.channel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on('finish', () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0], msg);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 1);

    let playingMessage = new MessageEmbed()
        .setTitle(`🎶 Playing: ${song.title}`)
        .setColor(config.cyan)

    serverQueue.textChannel.send(playingMessage);
}

module.exports = {
    handleVideo,
    play
}