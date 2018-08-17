const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (args[0] === "kill") {

        let member = message.mentions.members.first() || message.guild.members.get(args[1]);
        if (!member) return message.channel.send("Hey mention someone to use this command");
        message.delete(100);
        const embed = new Discord.RichEmbed()
            .setDescription(message.author + " killed " + member)
            .setTitle("Rp command")
            .setColor('RANDOM')
            .setImage("https://media.giphy.com/media/CiZB6WIjaoXYc/giphy.gif")
        message.channel.send({embed})

    } else if (args[0] === "slap") {
     
        let member = message.mentions.members.first() || message.guild.members.get(args[1]);
        if (!member) return message.channel.send("Hey mention someone to use this command");
        message.delete(100);
        const embed = new Discord.RichEmbed()
            .setDescription(message.author + " slapped " + member)
            .setTitle("Rp command")
            .setColor('RANDOM')
            .setImage("https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif")
        message.channel.send({embed})

    } else if (args[0] === "cry") {
        message.delete(100);
        const embed = new Discord.RichEmbed()
            .setDescription(message.author + " is crying")
            .setTitle("Rp command")
            .setColor('RANDOM')
            .setImage("https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif")
        message.channel.send({embed})
    } else if (args[0] === "sleep") {

        message.delete(100);
        const embed = new Discord.RichEmbed()
            .setDescription(message.author + " want to sleep let him leave")
            .setTitle("Rp command")
            .setColor('RANDOM')
            .setImage("https://media.giphy.com/media/NY7hk6oMVyWU8/giphy.gif")
        message.channel.send({embed})

    } else if (args[0] === "happy") {

        message.delete(100);
        const embed = new Discord.RichEmbed()
            .setDescription(message.author + " is very happy")
            .setTitle("Rp command")
            .setColor('RANDOM')
            .setImage("https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif")
        message.channel.send({embed})
        
    } else {

       message.channel.send("Error : can't find the values \nExample : .rp kill @member\nrp commands is {kill - slap - cry - sleep - happy}")

    }
}

module.exports.help = {
    name: "rp"
}