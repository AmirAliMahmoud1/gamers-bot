const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("support request")
    .setDescription("you can donate for **Gamers Bot** project\nyour donation keeps this project up")
    .addField("Patreon", "[Click Here](https://www.patreon.com/zyad)")
    .setColor("RANDOM")
    .setFooter("Gamers Bot")
    message.channel.send(embed)




}

module.exports.help = {
    name: "support"
}