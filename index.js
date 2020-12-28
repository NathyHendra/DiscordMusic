const discord = require("discord.js");
const secret = require("./settings/secret.json");
const config = require("./settings/config.json");
const client = new discord.Client({
    disableEveryone: true
});

const ytdl = require('ytdl-core');

client.queue = new Map();
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

const lib = require("./lib/core.js");
lib.setup(client);

module.exports.client = client;

client.login(secret.token);