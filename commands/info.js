const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle("**Gamers bot** info")
        .setDescription("gamers bot is Mod bot including some simple game and fun commands. we are working on some games commands like (Minecraft, League of Legends)")
        .addField("bot version: :1234:")
        .addField("bot id: :link:", "427751395123265546")
        .addField("Library:", "discord.js")
        .addField("servers", client.guilds.size)
        .addField("Release Date", "23 MAY 2018")
        .addField("Owner(s):", "Amir & Zyad", true)
        .addField("support server", "https://discord.gg/DjTubAX", true)
        .setColor('RANDOM')
        .setThumbnail("https://cdn.discordapp.com/avatars/427751395123265546/4a2fcbc57b92e5e6cb951f39fb6b9c8f.png")
    message.channel.send({embed})

}

module.exports.help = {
    name: "info"
}
