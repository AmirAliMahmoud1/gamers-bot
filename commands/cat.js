const snekfetch = require("snekfetch");

module.exports.run = async (client, message, args) => {

    let msg = await message.channel.send("``Searching for cute cat...!``")

    let catImg = (await snekfetch.get("http://aws.random.cat/meow")).body.file;
    if (!catImg) return message.channel.send("Erorr: can't find any cat.\nDM the bot if this error continued");

    await message.channel.send({files: [
            {
                attachment: catImg,
                name: catImg.split("/").pop()
            }]});

            msg.delete();

}

module.exports.help = {
    name: "cat"
}