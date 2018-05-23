const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send("Hey mention someone to use this command");
    message.delete(100);
    const embed = new Discord.RichEmbed()
        .setDescription(message.author + " killed " + member)
        .setTitle("Rp command")
        .setColor('RANDOM')
        .setImage("https://media.giphy.com/media/CiZB6WIjaoXYc/giphy.gif")
    message.channel.send({embed})

}

module.exports.help = {
    name: "kill"
}