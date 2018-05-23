const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete(100);
    const embed = new Discord.RichEmbed()
        .setDescription(message.author + " want to sleep let him leave")
        .setTitle("Rp command")
        .setColor('RANDOM')
        .setImage("https://media.giphy.com/media/NY7hk6oMVyWU8/giphy.gif")
    message.channel.send({embed})

}

module.exports.help = {
    name: "sleep"
}