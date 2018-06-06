const Discord = require("discord.js");
const prefix = ".";

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES') && message.author.id !== "269132764576481282") return message.channel.send("hey you don't have **manage-messages** permission");
    if (!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) return message.channel.send("i don't have MANAGE_MESSAGES permission please give me it")
    if (!args[0]) return message.reply("please choose a number")
    if (isNaN(args)) return message.reply("this is not a number")
    if (args <= 4) return message.reply("  lowes number allowed is 5")
    if (args >= 101) return message.reply("  highes number allowed is 100 ")

    var msg;
    msg = parseInt();
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(args[0])
).
    catch(console.error);
    message.channel.send("", {
        embed: {
            title: "Done | messages has been deleted",
            color: 0x06DF00,
            description: "the clearer is " + message.author.username,
            footer: {
                text: "cleared"
            }
        }
    })


}

module.exports.help = {
    name: "clear"
}
