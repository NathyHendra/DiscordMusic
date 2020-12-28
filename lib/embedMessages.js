const Discord = require("discord.js");
const config = require("../settings/config.json");
const messages = require("../settings/messages.json");

function addedQueue(message, name){
    let addedQueue = new Discord.MessageEmbed()
        .setTitle(messages.addedQueue)
        .setDescription(name)
        .setColor(config.cyan)
    return message.channel.send(addedQueue);
}

function noVC(message){
    let noVoiceChannel = new Discord.MessageEmbed()
        .setTitle(messages.noVC)
        .setColor(config.red)
    return message.channel.send(noVoiceChannel);
}

function noConnect(message){
    let noVoiceChannel = new Discord.MessageEmbed()
        .setTitle(messages.noConnect)
        .setColor(config.red)
    return message.channel.send(noVoiceChannel);
}

function noSpeak(message){
    let noVoiceChannel = new Discord.MessageEmbed()
        .setTitle(messages.noSpeak)
        .setColor(config.red)
    return message.channel.send(noVoiceChannel);
}

function noResponse(message){
    let noResponse = new Discord.MessageEmbed()
        .setTitle(messages.noResponse)
        .setColor(config.red)
    return message.channel.send(noResponse);
}

function noResults(message){
    let noResults = new Discord.MessageEmbed()
        .setTitle(messages.noResults)
        .setColor(config.red)
    return message.channel.send(noResults);
}

function noPlaying(message){
    let noPlaying = new Discord.MessageEmbed()
        .setTitle(messages.noPlaying)
        .setColor(config.red)
    return message.channel.send(noPlaying);
}

function Skipped(message){
    let Skipped = new Discord.MessageEmbed()
        .setTitle(messages.Skipped)
        .setColor(config.cyan)
    return message.channel.send(Skipped);
}

function nowPlaying(serverQueue, message){
    let nowPlaying = new Discord.MessageEmbed()
        .setTitle(messages.nowPlaying)
        .setDescription(serverQueue.songs[0].title)
        .setColor(config.cyan)
    return message.channel.send(nowPlaying);
}

function Stopped(message){
    let Stopped = new Discord.MessageEmbed()
        .setTitle(messages.Stopped)
        .setColor(config.cyan)
    return message.channel.send(Stopped);
}

function Resumed(message){
    let Resumed = new Discord.MessageEmbed()
        .setTitle(messages.Resumed)
        .setColor(config.cyan)
    return message.channel.send(Resumed);
}

function Paused(message){
    let Paused = new Discord.MessageEmbed()
        .setTitle(messages.Paused)
        .setColor(config.cyan)
    return message.channel.send(Paused);
}


module.exports = {
    addedQueue,
    noVC,
    noConnect,
    noSpeak,
    noResponse,
    noResults,
    noPlaying,
    Skipped,
    nowPlaying,
    Stopped,
    Resumed,
    Paused
}