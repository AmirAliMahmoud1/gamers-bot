const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (client, message, args) => {

    let catImg = (await snekfetch.get("http://aws.random.cat/meow")).body.file;
    if (!catImg) return message.channel.send("Erorr: can't find any cat.\nDM the bot if this error continued");


    const embed = new Discord.RichEmbed()
        .setTitle("Meeeow")
        .setColor('RANDOM')
        .setImage(catImg)
    message.channel.send({embed});

}

module.exports.help = {
    name: "cat"
}
