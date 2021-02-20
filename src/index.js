const { Client } = require('discord.js');
const bot = new Client();
require('localenv');
require('dotenv').config();

bot.on('ready', () => {
    console.log('Bot is ready!');
});

bot.login(process.env.BOT_TOKEN);
