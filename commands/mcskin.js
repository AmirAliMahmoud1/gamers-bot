const Discord = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send("Please insert the name \nExample : ``.mcskin notch``");


    let url = "https://api.mojang.com/users/profiles/minecraft/" + args[0];

    let userinfo = (await fetch(url).then(res => res.json()).catch(err => {}));


    



    if (!userinfo) return message.channel.send("Can't find ``" + args[0] + "`` in mojang files, maybe it's wrong name !");

        let useruuid = userinfo.id


    let skin = ("https://mc-heads.net/body/" + useruuid)

    if (!skin) return message.channel.send("Error : is this account very new ?")



    const embed = new Discord.RichEmbed()
    .setTitle("This is " + args[0] + " skin")
    .setColor('RANDOM')
    .setImage(skin)
    .setThumbnail(`https://mc-heads.net/skin/${useruuid}`)
    .setFooter(`Thank you to [mc-heads] for providing avatars.`)
message.channel.send({embed});


}

module.exports.help = {
    name: "mcskin"
}
