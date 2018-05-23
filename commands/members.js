const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var usersList = client.users.array();
    const embed = new Discord.RichEmbed()
        .setColor('0x06DF00')
        .setDescription(`**Members info**
online:   ${message.guild.members.filter(m => m.presence.status == 'online').size}  
offline:   ${message.guild.members.filter(m => m.presence.status == 'offline').size} 
idle:      ${message.guild.members.filter(m => m.presence.status == 'idle').size} 
DND:      ${message.guild.members.filter(m => m.presence.status == 'dnd').size} 
everyone:  ${message.guild.memberCount}
Bot users:  ${client.users.size}`)
    message.channel.send({embed});

}

module.exports.help = {
    name: "members"
}