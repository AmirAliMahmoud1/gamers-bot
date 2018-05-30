const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== "269132764576481282") return message.channel.send("you don't have **ADMINISTRATOR** permission");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
        return message.reply("Please mention a valid member of this server or type his id\n-\n**Example**: .warn @member spamming");
    if (!message.content.split(" ").slice(2).join(' ')) reason = "No reason !";
    if (message.content.split(" ").slice(2).join(' ')) reason = message.content.split(" ").slice(2).join(' ');
    member.send("you have warned in **" + message.guild.name + "** server\n" + '```md\n[reason](' + reason + ')\n[warn author](' + message.author.tag + ')```');
    message.channel.send(member + " has warned :white_check_mark:\n" + '```md\n[reason](' + reason + ')\n[warn author](' + message.author.tag + ')```')

}

module.exports.help = {
    name: "warn"
}
