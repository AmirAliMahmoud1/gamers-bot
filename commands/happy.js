const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete(100);
    const embed = new Discord.RichEmbed()
        .setDescription(message.author + " is very happy")
        .setTitle("Rp command")
        .setColor('RANDOM')
        .setImage("https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif")
    message.channel.send({embed})

}

module.exports.help = {
    name: "happy"
}