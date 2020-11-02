
const {messageEmbed} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const winston = require('winston');
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: 'Happy Day' }, status: 'idle' })
});

client.on('message', msg => {
    if (msg.content === '!ping') {
      msg.channel.send('Pong!');
    }
  });
  
client.on('message', msg => {
    if (msg.content === '!help') {
      msg.channel.send('Commands are \n help \n ping \n ip \n info');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!ip') {
      msg.channel.send('Ip:	51.79.33.168:25566');
    }
  });
  client.on('message', message => {
    if (message.content === '!info') {
      const embed = new MessageEmbed()
        .setTitle('INFO')
        .setColor(0xff0000)
        .setDescription('')
        .setfooter('Hanks smp - made by MrFluffy#4697');
      message.channel.send(embed);
    }
  });
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'sys-messages');
    if (!channel) return;
  
    channel.send(`Welcome to the server, ${member}! we now have ${guild.member}`)
    channel.send('', {file: ["welcome.jpg"]});
  });
  
const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'log' }),
	],
	format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
});

client.on('ready', () => logger.log('info', 'The bot is online!'));
client.on('debug', m => logger.log('debug', m));
client.on('warn', m => logger.log('warn', m));
client.on('error', m => logger.log('error', m));

process.on('uncaughtException', error => logger.log('error', error));
 

client.login('')
