const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setTitle("you asked for it. you got it.")
        .setColor('RANDOM')
        .addField("Bot invite link", "[Click Here](https://goo.gl/aQrNG2)")
        .addField("Support server", "[Click Here](https://discord.gg/DjTubAX)")
    message.channel.send({embed});

}

module.exports.help = {
    name: "invite"
}
