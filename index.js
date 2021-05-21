const Discord = require('discord.js');

const token = process.env.token

const bot = new Discord.Client();
bot.on("message", message => {
    if(message.member.id == "476049616341565440"){
        messages.delete()
        return;
        if(message.content.includes("哎呀呀！Uncertainty — 聊天與遊戲討論的烏托邦所有者要求 Discord 屏蔽任何不良信息，我们就派出了一些机智可爱的机器人来消灭它们，因此，您的消息未发送成功"))retur
        if(message.content.includes("哎呀呀！Uncertainty — 聊天與遊戲討論的烏托邦所有者要求 Discord 屏蔽任何不良信息，我们就派出了一些机智可爱的机器人来消灭它们，因此，您的消息未发送成功"))message.delete()
        bot.channels.cache.filter(c => c.name == "中國邏輯鬼才語錄").forEach(c => c.send(message.content))
        message.channel.send(message)
    }
})

bot.on("ready", () => {
  console.log(`${bot.user.username}成功啟動了!^w^, [ ${bot.guilds.size} | ${bot.channels.size} | ${bot.users.size} ]`);
});
 

bot.login(token);
