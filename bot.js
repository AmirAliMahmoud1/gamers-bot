const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const prefix = ".";



const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, client);


client.commands = new Discord.Collection();
const talkedRecently = new Set();


fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);

let jsfiles = files.filter(f => f.split(".").pop() === "js");
if(jsfiles.length <= 0) {
    console.log("no commands to lead");
    return;
}
console.log('loading ' + jsfiles.length + " commands!");

jsfiles.forEach((f, i) => {
    let props = require("./commands/" + f);
console.log(i + 1 + " : " + f + " loaded")
client.commands.set(props.help.name, props);
});
});



//on ready stuff
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
console.log(`on ${client.guilds.size} servers`);
client.user.setActivity('.help | new questions added to .ask'); 
console.log(client.commands)

});



// don't ask please




client.on('message', message => {
    if(!message.content.startsWith(prefix))return;
if(message.channel.type === 'dm') return;
if (message.author.bot) return;
    
if (talkedRecently.has(message.author.id)) {
    message.channel.send("The next user have to wait at least 5 secounds between using commands : " + message.author + "\nthe cooldown won't work for who have **ADMINSTRATOR** permission")
     .then(message => {
     message.delete(6000)
 })
} else {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    let cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) { cmd.run(client, message, args);
    console.log("(" + command + ") command just used in " + message.guild.name + " server")
if (!message.member.hasPermission("ADMINISTRATOR")){
    talkedRecently.add(message.author.id);
  }
setTimeout(() => {
  // Removes the user from the set after 5 sec
  talkedRecently.delete(message.author.id);
}, 5000);
}
}    
});




//Addong don't touch

client.on("message", message => {
    if (message.author.bot) return;
   if (message.isMentioned(client.user) && message.content === `<@${client.user.id}>`) return message.channel.send(`do **${prefix}help** to get start` + "\ndm the bot to chat directly with the owner");


});


//reply and dm chat settings

client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + 'reply'))  {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if (message.author.id !== '269132764576481282' && message.author.id !== '405436409831227404') return message.reply(":x: sorry this command is just for bot owner")
    if (!args[0]) return message.channel.send("please enter the user id")
    if (!args[1]) return message.channel.send("please enter the message")
    if (!client.users.get(args[0])) return message.channel.send("Wrong id maybe this user not in mutual servers with this bot")
    client.users.get(args[0]).send(message.content.split(" ").slice(2).join(' '))
    message.react("👍")
} else
if (message.author.id === client.user.id) return;
if (message.channel.type !== 'dm') return;
if (message.content.startsWith(prefix + 'help')) return message.channel.send("please don't use commands here !!!");
if (message.content.startsWith(prefix + 'reply')) return;
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.addField("The message:", message)
.setColor('RANDOM')
.addField("The id : " + message.author.id, message.author.tag)

    client.channels.get("467207782081232920").send({embed})
});




client.login(process.env.BOT_TOKEN);
