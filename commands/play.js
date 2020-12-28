const Discord = require("discord.js");
const secret = require("../settings/secret.json");
const config = require("../settings/config.json");
const YouTube = require('simple-youtube-api');
const YTkey = secret.YoutubeAPIkey;
const youtube = new YouTube(YTkey);
const { handleVideo } = require("../lib/functions.js");
const { noVC, noConnect, noSpeak, addedQueue, noResponse, noResults } = require("../lib/embedMessages.js");

module.exports.run = async (client, message, args) => {

    const searchString = args.slice(0).join(' ');
    const url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) noVC(message);
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
        return noConnect(message);
    }
    if (!permissions.has('SPEAK')) {
        return noSpeak(message);
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
        try{
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, message, voiceChannel, true);
            }
            return addedQueue(message, playlist.title);
        } catch {
            return message.channel.send("This playlist is private!");
        }
    } else {
        try {
            var video = await youtube.getVideo(url);
        } catch (error) {
            try {
                var videos = await youtube.searchVideos(searchString, 10);
                let index = 0;

                let responseList = new Discord.MessageEmbed()
                    .setTitle("Song Selection (1-10)")
                    .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
                    .setColor(config.cyan)

                message.channel.send(responseList);

                try {
                    var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                        max: 1,
                        time: 15000,
                        errors: ['time']
                    });
                } catch (error) {
                    console.log(error);
                    return noResponse(message);
                }
                const videoIndex = parseInt(response.first().content);
                var vid = await youtube.getVideoByID(videos[videoIndex - 1].id);
            } catch (err) {
                console.error(err);
                return noResults(message);
            }
        }
        return handleVideo(vid, message, voiceChannel);
    }

}
module.exports.help = {
  name: 'play',
  aliases: ['p','oynat']
  }