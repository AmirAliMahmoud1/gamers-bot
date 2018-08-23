const Discord = require("discord.js");
const mysql = require("mysql");
const client = new Discord.Client();
const fs = require('fs');
const snekfetch = require("snekfetch");
const prefix = ".";






client.on("guildCreate", guild => {
    let serverat = client.guilds.size
    let id = client.user.id
snekfetch.post(`https://bots.discord.pw/api/bots/${id}/stats`)
    .set('Authorization', process.env.DB_KEY)
    .send({
        "server_count": serverat
    })
    .then(() => console.log(`Posted to db.`))
    .catch((e) => console.error(e));
    
    guild.owner.send("Hi, you or someone else added me to **" + guild.name + "**\n\nyou can use this channel to dm the owner(if you sent a message here it resend to the bot owner)\n\nYou can see bot commands using the .help command (.help .user) - (.help admin)\n\nat the end you can join the support server using the next invite\n\nhttps://discord.gg/DjTubAX")

});


//HERasdsadsadsa

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
let activites = [".help", ".support | Donate for better VPS <3"];
client.setInterval(() => {
    let activity = Math.floor((Math.random() * activites.length))
    client.user.setActivity(activites[activity])
    }, 5000);
    console.log(client.commands)

});



// don't ask please




client.on('message', message => {
    if(message.channel.type === 'dm') return;
    

    if(!message.content.startsWith(prefix))return;
if (message.author.bot) return;    
if (talkedRecently.has(message.author.id)) {
    message.channel.send("The next user have to wait at least 3 secounds between using commands : " + message.author + "\nthe cooldown won't work for who have **ADMINSTRATOR** permission")
     .then(message => {
     message.delete(3000)
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
}, 3000);
}
}
});






//Addong don't touch

client.on("message", message => {
    if(message.channel.type === 'dm') return;

    if (message.author.bot) return;


   if (message.isMentioned(client.user) && message.content === `<@${client.user.id}>`) {
       message.channel.send(`Current server prefix is **${prefix}**\nDo ${prefix}help to get start`);

   }
});

//reply and dm chat settings

client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith('.reply'))  {

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
if (message.content.startsWith('.reply')) return;
if (message.content.startsWith('.help')) return;


    const embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.addField("The message:", message)
.addField("The id : " + message.author.id, message.author.tag)

    client.channels.get("467207782081232920").send({embed})


});




client.login(process.env.BOT_TOKEN);
