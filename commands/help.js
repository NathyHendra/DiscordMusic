const Discord = require("discord.js");
const config = require("../settings/config.json")

module.exports.run= async(client, message, args) => {

let ertassla = new Discord.MessageEmbed()

.setAuthor(client.user.username+" Commands")

.setColor(config.cyan)


.setDescription(`**Avatar: Shows your profile or shows the profile of the person you tagged.** \`[!pp]\`\n\n**Play: Plays a song with the given name or url. ** \`[!play]\`\n\n**Now Playing: Shows what song the bot is currently playing. ** \`[!np]\`\n\n**Pause: Pauses the currently playing track. **\`[!pause]\`\n\n**Resume: Resume paused music. **\`[!resume]\`\n\n**Stop: stops the song. **\`[!stop]\`\n\n**Skip: Skips the currently playing song. **\`[!skip]\`\n\n**Queue: View the queue. **\`[!queue]\`\n\n**Bot Info Shows the stats of the bot. **\`[!stats]\`\n\n**Invite: Links. **\`[!invite]\`\n\n**Clean: Deletes the specified amount of messages.** }\`[!clean]\``)
.setFooter(`Yuxi Bot`,`${client.user.avatarURL()}`)


.setTimestamp()

message.channel.send(ertassla)
  }

module.exports.help = {

name: "help",
  aliases: []

}