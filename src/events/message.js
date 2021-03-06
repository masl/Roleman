const { PREFIX } = require('../config');

module.exports = {
    name: 'message',
    execute(message, client) {
        if (!message.content.startsWith(PREFIX) || message.author.bot) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commadnName));
    
        if (!command) return;
        try {
            command.execute(message, client, args);
        } catch (error) {
            console.error(error);
        }
    }
}