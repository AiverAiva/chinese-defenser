const Discord = require('discord.js');

const token = process.env.token

const bot = new Discord.Client();
bot.on("message", message => {
    const prefix = "."
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    if(message.member.id == "476049616341565440"){
      message.delete()
    }
    if(message.member.id == "727972066577481749"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`蝇营狗苟 (727972066577481749): ${message.content}`))
    }    
    if(message.member.id == "845206027916935219"){
      if(message.attachments){

      }
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`二阶堂真红 (845206027916935219): ${message.content}`))
    }





    if(message.member.id == "274478905883361280"){
      if(message.content.startsWith(".delete")){
        message.channel.messages.fetch({
          limit: 100000
        }).then((messages) => { 
          const botMessages = [];
          messages.filter(m => m.content == args).forEach(msg => botMessages.push(msg))
          message.channel.bulkDelete(botMessages).then(() => {
              message.channel.send("好了啦小粉紅").then(msg => msg.delete({
                  timeout: 3000
              }))
          });
        })
      }
    }
})

bot.on("ready", () => {
  console.log(`${bot.user.username}成功啟動了!^w^, [ ${bot.guilds.size} | ${bot.channels.size} | ${bot.users.size} ]`);
});
 

bot.login(token);
