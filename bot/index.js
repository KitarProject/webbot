const Discord = require('discord.js');

class Bot extends Discord.Client {
	constructor(token) {
		super();
		this.config = require('../config');
		this.launch();
		this.on('ready', () => console.log(`${this.user.tag} is ready to go!`));
	}

	launch() {
        
		this.login(process.env.TOKEN);
	}
}

module.exports = (token) => new Bot(token);
