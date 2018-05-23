const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(message.content.startsWith(prefix + 'ban')) {
        if (!message.member.hasPermission('BAN_MEMBERS') && message.author.id !== "269132764576481282") return message.channel.send("you don't have **BAN_MEMBERS** permission");
        if (!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) return message.channel.send("i don't have **BAN_MEMBERS** permission please give me it")
    
    
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member)
            return message.reply("Please mention a valid member of this server or type his id");
        if (!member.bannable)
            return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";
    
        member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`)
    )
        ;
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

}
}

module.exports.help = {
    name: "ban"
}