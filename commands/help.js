const Discord = require("discord.js");
const prefix = ".";
const fs = require('fs');
const commands = JSON.parse(fs.readFileSync('./commands/help/commands.json', 'utf8'));




module.exports.run = async (client, message, args) => {

    if (message.channel.type === 'dm') return message.channel.send("please don't use commands in dm because it resend to the owner \n this is support chat");
    if (args.join(" ").toUpperCase() === 'group') {

        // Variables
        let groups = '';

        for (var cmd in commands) {
            if (!groups.includes(commands[cmd].group)) {
                groups += `${commands[cmd].group}\n`
            }
        }

        message.channel.send({embed: {
                description:`**${groups}**`,
                title:"Groups",
                color: 0x1D82B6
            }})

        return; // Testing!


    } else {
        // Now, lets do something when they do ~help [cmd / group] - You can use copy and paste for a lot of this part.

        // Variables
        let groupFound = '';

        for (var cmd in commands) { // This will see if their is a group named after what the user entered.

            if (args.join(" ").trim().toUpperCase() === commands[cmd].group.toUpperCase()) {
                groupFound = commands[cmd].group.toUpperCase(); // Lets set the ground found, then break out of the loop.
                break;
            }

        }

        if (groupFound != '') { // If a group is found, run this statement.

            // Start of the embed
            const embed = new Discord.RichEmbed()
                .setColor(0x1D82B6) // You can set this color to whatever you want.

            // Variables
            let commandsFound = 0; // We also want to tell them how many commands there are for that specific group.


            for (var cmd in commands) { // We can use copy and paste again

                // Checks if the group is "users" - and replace type with group
                if (commands[cmd].group.toUpperCase() === groupFound) {
                    // Lets also count commandsFound + 1 every time it finds a command in the group
                    commandsFound++
                    // Lets add the command field to the embed
                    embed.addField(`${commands[cmd].name}`, `**Description:** ${commands[cmd].desc}\n**Usage:** ${prefix + commands[cmd].usage}`); // This will output something like <commandname>[title] [newline] desc: <description> [newline] usage: <usage
                }

            }

            // Add some more to the embed - we need to move that out of the for loop.
            embed.setFooter(`Currently showing ${groupFound} commands. To view another group do ${prefix}help [group / command]`)
            embed.setDescription(`**${commandsFound} commands found**`)

            // We can output it two ways. 1 - Send to DMs, and tell them that they sent to DMs in chat. 2 - Post commands in chat. [since commands take up a lot let's send to DMs]
            message.channel.send({embed})
            // Post in chat they sent to DMs

            // Make sure you copy and paste into the right place, lets test it now!
            return; // We want to make sure we return so it doesnt run the rest of the script after it finds a group! Lets test it!

            // Now lets show groups.
        }

        // Although, if a group is not found, lets see if it is a command

        // Variables
        let commandFound = '';
        let commandDesc = '';
        let commandUsage = '';
        let commandGroup = '';

        for (var cmd in commands) { // Copy and paste

            if (args.join(" ").trim().toUpperCase() === commands[cmd].name.toUpperCase()) {
                commandFound = commands[cmd].name; // Lets change this so it doesnt make it go uppcase
                commandDesc = commands[cmd].desc;
                commandUsage = commands[cmd].usage;
                commandGroup = commands[cmd].group;
                break;
            }

        }

        // Lets post in chat if nothing is found!
        if (commandFound === '') {
            message.channel.send("**.help user** : for user commands\n**.help admin** : for admin commands")

        }

        // Since this one is smaller, lets send the embed differently.
        message.channel.send({embed: {
                title:'.help [user / admin]',
                fields: [{
                    name:commandFound,
                    value:`**Description:** ${commandDesc}\n**Usage:** ${prefix}${commandUsage}\n**Group:** ${commandGroup}`
                }]
            }})

        return; // We want to return here so that it doesnt run the rest of the script also.

    }


}
module.exports.help = {
	name: "help"
}
