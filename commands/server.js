const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setTitle("This is current server info")
        .setAuthor(message.author.username, message.author.avatarURL)
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor('RANDOM')
        .setDescription("Prefix is (**.**)")
        .setFooter("You're avatar", message.author.avatarURL)
        .setThumbnail(message.guild.iconURL)
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://discord.gg/h62vCg8")
        .addField("Server name", message.guild.name, true)
        .addField("Owner name", message.guild.owner, true)
        .addField("members", message.guild.members.size + " users | use .members for more info", true)
        .addField("Created At", message.guild.createdAt)
        .addField("emojis", message.guild.emojis.size)
        .addField("roles", message.guild.roles.size)
        .addField("channels", message.guild.channels.size)




    message.channel.send({embed})

}

module.exports.help = {
    name: "server"
}