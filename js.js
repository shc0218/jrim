const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzkwNTEyNzUyNTYxMDk0NjY3.X-BsXw.-Tp4m10PFX5oGMpm_imaUDM58Zo';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(token);