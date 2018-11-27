const Discord = require("discord.js")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '516304174229618695').join();
});

client2.on('ready', () => {
    client2.channels.find(c => c.id === '516304553252093963').join();
});

client3.on('ready', () => {
    client3.channels.find(c => c.id === '516304668427681804').join();
});

client4.on('ready', () => {
    client4.channels.find(c => c.id === '516304918580035595').join();
});

client5.on('ready', () => {
    client5.channels.find(c => c.id === '516304949035139082').join();
});

client6.on('ready', () => {
    client6.channels.find(c => c.id === '516305060117086235').join();
});

client7.on('ready', () => {
    client7.channels.find(c => c.id === '516305090374664192').join();
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516305090374664192");
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

client6.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});

client7.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516302538367303711");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcome To, Tree Center. :cloud: :wine_glass:  **`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
client2.login(process.env.BOT_TOKEN2); 
client3.login(process.env.BOT_TOKEN3); 
client4.login(process.env.BOT_TOKEN4); 
client5.login(process.env.BOT_TOKEN5); 
client6.login(process.env.BOT_TOKEN6); 
client7.login(process.env.BOT_TOKEN7); 

