const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let owner1 = await client.users.get("269132764576481282").tag;
    let owner2 = await client.users.get("405436409831227404").tag;


    const embed = new Discord.RichEmbed()
        .setTitle("**Gamers bot** info")
        .setDescription("gamers bot is Mod bot including some simple game and fun commands. we are working on some games commands like (Minecraft, League of Legends)")
        .addField("bot version:", "0.9")
        .addField("bot id:", "427751395123265546")
        .addField("Library:", "discord.js")
        .addField("servers", client.guilds.size)
        .addField("Release Date", "23 MAY 2018")
        .addField("Owner(s):", owner1 + ": **Founder**\n&\n" + owner2 + ": **CO-Founder**", true)
        .addField("support server (Gamers station)", "https://discord.gg/DjTubAX")
        .addField("Website (github.io)", "[Gamers Bot](https://zezocraft.github.io/gamers-bot/)")
        .addField("patreon Page", "[patreon](https://www.patreon.com/zyad)", true)
        .setColor('RANDOM')
        .setThumbnail(client.user.avatarURL)
    message.channel.send({embed})

}

module.exports.help = {
    name: "info"
}
