const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setTitle("**Gamers bot** info")
        .setDescription("gamers bot still indev please use .call to give us some ideas")
        .addField("bot version:", "0.5")
        .addField("bot id:", "427751395123265546")
        .addField("Library:", "discord.js")
        .addField("Owner(s):", "ZezoTheMaster")
        .addField("support server", "https://discord.gg/DHrC5S")
        .setColor('RANDOM')
        .setThumbnail("https://cdn.discordapp.com/avatars/427751395123265546/4a2fcbc57b92e5e6cb951f39fb6b9c8f.png")
    message.channel.send({embed})

}

module.exports.help = {
    name: "info"
}