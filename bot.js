const Discord = require("discord.js")
const client = new Discord.Client();




client.on('ready', () => {
    client.channels.find(c => c.id === '516304174229618695').join();
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
