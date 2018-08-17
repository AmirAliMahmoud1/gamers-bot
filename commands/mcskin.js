const Discord = require("discord.js");
const snekfetch = require("snekfetch");


module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send("Please insert the name \nExample : ``.mcskin notch``");


    let useruuid = (await snekfetch.get("https://api.mojang.com/users/profiles/minecraft/" + args[0])).body.id;
    if (!useruuid) return message.channel.send("Can't find **" + args[0] + "** in mojang files, maybe it's wrong name !");
 

    let skin = ("https://crafatar.com/renders/body/" + useruuid + "?size=4&default=MHF_Steve&overlay")

    if (!skin) return message.channel.send("Error : is this account very new ?")



    const embed = new Discord.RichEmbed()
    .setTitle("This is " + args[0] + " skin")
    .setColor('RANDOM')
    .setImage(skin)
    .setThumbnail(`https://crafatar.com/skins/${useruuid}`)
    .setFooter(`Thank you to [Crafatar] for providing avatars.`)
message.channel.send({embed});



    
}

module.exports.help = {
    name: "mcskin"
}
