'use strict';
const Discord = require('discord.js')
const Command = require('./command.js')

module.exports = class Sondage extends Command {

    static match(message) {
        if(message.content.startsWith('-sondage')) {
            return true 

        }
    }
static action (message) {
    let msg = message.content.split(' ')
    msg.shift()
    let question = msg.join(' ')

    var sondage = new Discord.RichEmbed()
    .setTitle('SONDAGE')
    .addField(question, '✅️ pour oui | ❌ pour non')
    .setColor('OxB20000')

    message.channel.send(sondage)
    .then(function(message) {
        message.react('✅');
        message.react('❌');

    })

    message.delete()
}

}
