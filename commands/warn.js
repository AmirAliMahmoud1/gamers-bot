const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== "269132764576481282") return message.channel.send("you don't have **ADMINISTRATOR** permission");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
        return message.reply("Please mention a valid member of this server or type his id");
    if (!args[1]) return message.channel.send("Type the reason ?? because i will dm him with it\nExample : \n.warn @example Bad Words")
    member.send("you have warned in **" + message.guild.name + "** Because of ``" + message.content.split(" ").slice(2).join(' ') + '``');
    message.channel.send(args[0] + " has warned because of ``" + message.content.split(" ").slice(2).join(' ') + '``')

}

module.exports.help = {
    name: "warn"
}