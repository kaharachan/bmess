module.exports.config = {
	name: "hentai",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh hentaiz",
	commandCategory: "NSFW",
	usages: "hentai",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get('https://apichay.sadboyyeu.repl.co/hentai').then(res => {
		let callback = function () {
					api.sendMessage({
						body : ``,
						attachment: fs.createReadStream(__dirname + '/cache/gaidep.gif')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gaidep.gif'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gaidep.gif')).on("close", callback);
			})
}