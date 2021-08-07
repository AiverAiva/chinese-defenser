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
    if(message.member.id == "846814892177621013"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`Blueberry (846814892177621013): ${message.content}`))
      message.channel.send(message.content)
    }    
    if(message.member.id == "616685511578222610"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`繁中小猴子 (616685511578222610): ${message.content}`))
      message.channel.send(message.content)
    }  
    if(message.member.id == "850005989523456062"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`华为鸿蒙发布了 (850005989523456062): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "853364839346995210"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`過氣facebook社團的可撥姆鯊小管理員 (853364839346995210): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "713866056522924036"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`智商無限的低能兒 (853364839346995210): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "798893362203459594"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`baby bus哥 (798893362203459594): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "714039867943682088"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`carson (714039867943682088): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "732022392842616913"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`隔著螢幕屌人哥 (732022392842616913): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "752116251928559626"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`核廢料 (752116251928559626): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "858931217897357322"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`裝逼國中生 (858931217897357322): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "770866691205759006"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`中国自愿解放革命军 (770866691205759006): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "758942276042227722"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`XY三小亦的 (758942276042227722): ${message.content}`))
      message.channel.send(message.content)
    }
    if(message.member.id == "665220726881779742"){
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`B (665220726881779742): ${message.content}`))
      message.channel.send(message.content)
    }

    
    
    if(message.member.id == "845206027916935219"){
      if(message.attachments){

      }
      message.channel.send(message.content)
      bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(`二阶堂真红 (845206027916935219): ${message.content}`))
    }
})

bot.on("ready", () => {
  console.log(`${bot.user.username}成功啟動了!^w^, [ ${bot.guilds.size} | ${bot.channels.size} | ${bot.users.size} ]`);
});
 

bot.login(token);
