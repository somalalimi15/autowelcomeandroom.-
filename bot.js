const Discord = require("discord.js")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});

client2.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});

client3.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});

client4.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});

client5.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});


client.login(process.env.BOT_TOKEN); 
