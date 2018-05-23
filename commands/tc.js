const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_CHANNELS') && message.author.id !== "269132764576481282") return    message.channel.send("you don't have **MANAGE_CHANNELS** permission");
    if (!message.channel.permissionsFor(client.user).has("MANAGE_CHANNELS")) return message.channel.send("i don't have **MANAGE_CHANNELS** permission please give me it")
    if(!args[0]) return message.channel.send(`<@${message.author.id}> you have to type the name`)
    message.guild.createChannel(args[0], 'text')
    message.channel.send("Channel created with " + args[0] + " name")

}

module.exports.help = {
    name: "tc"
}