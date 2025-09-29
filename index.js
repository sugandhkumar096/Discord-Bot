const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

 client.on("messageCreate", (message) => {
   if(message.author.bot) return; 
   if(message.content.startsWith("create")){
    const url = message.content.split("create")[1];

    return message.reply(`Short URL created: https://short.url/${Math.random().toString(36).substring(7)}`);
   }
   else{
    message.reply("Hello! This is a reply from the bot.");
   }
    
});

client.on('interactionCreate', interaction => {
    console.log(interaction);
});
//Discord bot token
// client.login("MTQyMjI2NjI1MDE2MzM4ODY1Nw.GoBuU6.j_u76FttAJ4yqqbCGfVLTgE0MBaGyOf_Osf0vc");
