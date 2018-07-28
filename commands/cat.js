const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (client, message, args) => {

	    let msg = await message.channel.send("``Searching for cute cat...!``")


    let catImg = (await snekfetch.get("https://nekos.life/api/v2/img/meow")).body.url;
    if (!catImg) return message.channel.send("Erorr: can't find any cat.\nDM the bot if this error continued");


    const embed = new Discord.RichEmbed()
        .setTitle("Meeeow")
        .setColor('RANDOM')
        .setImage(catImg)
    message.channel.send({embed});

    msg.delete();

}

module.exports.help = {
    name: "cat"
}
