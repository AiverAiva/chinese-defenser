const Discord = require('discord.js');

const token = process.env.token

const bot = new Discord.Client();
bot.on("message", message => {
    if(message.member.id == "274478905883361280"){
        bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(message.content))
        bot.channels.cache.filter(c => c.name == "📣-綜合聊天").forEach(c => c.send(message.content))
    }
})

bot.on("ready", () => {
  console.log(`${bot.user.username}成功啟動了!^w^, [ ${bot.guilds.size} | ${bot.channels.size} | ${bot.users.size} ]`);
});
 

bot.login(token);
